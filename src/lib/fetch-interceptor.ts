import { useAuthStore } from "@/store/authStore";

const API_URL = process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:8000";
const API_VERSION = process.env.NEXT_PUBLIC_VERSION || "/api/v1";
const BASE_URL = `${API_URL}${API_VERSION}`;

let isInterceptorSetup = false;
let refreshingPromise: Promise<boolean> | null = null;

export const setupFetchInterceptor = () => {
  if (isInterceptorSetup || typeof window === "undefined") return;

  const originalFetch = window.fetch;

  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const { token, signOut, refreshAccessToken } = useAuthStore.getState();
    
    let url: string;
    if (typeof input === "string") {
      url = input;
    } else if (input instanceof URL) {
      url = input.toString();
    } else {
      url = input.url;
    }

    const isApiCall = url.startsWith(BASE_URL) || url.startsWith(API_VERSION) || url.startsWith("/");
    const isRefreshCall = url.includes("/auth/refresh");

    let requestInput = input;
    let requestInit = init;

    // Add Authorization header for API calls, but NOT for the refresh call itself
    // (the refreshAccessToken action handles its own headers)
    if (isApiCall && token && !isRefreshCall) {
      const headers = new Headers(init?.headers || (input instanceof Request ? input.headers : {}));
      
      if (!headers.has("Authorization")) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      if (input instanceof Request) {
        requestInput = new Request(input, { headers });
      } else {
        requestInit = {
          ...init,
          headers,
        };
      }
    }

    try {
      let response = await originalFetch(requestInput, requestInit);

      // Handle 401 Unauthorized
      if (response.status === 401 && isApiCall && !isRefreshCall) {
        console.warn("Unauthorized request detected. Attempting to refresh token...");
        
        // Handle concurrent refresh requests
        if (!refreshingPromise) {
          refreshingPromise = refreshAccessToken();
        }
        
        const isSuccess = await refreshingPromise;
        refreshingPromise = null;

        if (isSuccess) {
          const { token: newToken } = useAuthStore.getState();
          console.log("Token refreshed successfully. Retrying original request.");
          
          // Update headers for the retry
          const headers = new Headers(requestInit?.headers || (requestInput instanceof Request ? requestInput.headers : {}));
          headers.set("Authorization", `Bearer ${newToken}`);

          if (requestInput instanceof Request) {
            requestInput = new Request(requestInput, { headers });
          } else {
            requestInit = {
              ...requestInit,
              headers,
            };
          }
          
          // Retry the request
          return originalFetch(requestInput, requestInit);
        } else {
          console.error("Token refresh failed. Signing out...");
          signOut();
          if (!window.location.pathname.includes("/login")) {
            window.location.href = "/login";
          }
        }
      } else if (response.status === 401 && isRefreshCall) {
        // If the refresh call itself is 401, we must sign out immediately
        console.error("Refresh token expired. Signing out...");
        signOut();
        if (!window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  isInterceptorSetup = true;
  console.log("Global fetch interceptor initialized with Refresh Token support");
};
