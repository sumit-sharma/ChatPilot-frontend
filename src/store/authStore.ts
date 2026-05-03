"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { isTokenExpired } from "@/lib/utils";

interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  isHydrated: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setRefreshToken: (refreshToken: string | null) => void;
  setLoading: (loading: boolean) => void;
  setHydrated: (state: boolean) => void;
  setError: (error: string | null) => void;
  
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (userData: any) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  syncSession: () => Promise<void>;
  refreshAccessToken: () => Promise<boolean>;
}

const API_URL = process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:8000";
const API_VERSION = process.env.NEXT_PUBLIC_VERSION || "/api/v1";
const BASE_URL = `${API_URL}${API_VERSION}`;

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      refreshToken: null,
      isAuthenticated: false,
      loading: false, 
      isHydrated: false,
      error: null,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setToken: (token) => set({ token }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setLoading: (loading) => set({ loading }),
      setHydrated: (isHydrated) => set({ isHydrated }),
      setError: (error) => set({ error }),

      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();
          console.log("Login data",data);
          if (!response.ok) {
            throw new Error(data.detail || data.message || "Login failed");
          }

          // Expecting { user: {...}, access_token: "..." } or similar
          // Adjust based on your actual FastAPI response
          const user = data.user
          const token = data.access_token
          const refreshToken = data.refresh_token

          set({ 
            user, 
            token, 
            refreshToken,  
            isAuthenticated: true, 
            loading: false 
          });
          return {};
        } catch (error: any) {
          set({ error: error.message, loading: false });
          return { error: error.message };
        }
      },

      signup: async (userData) => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.detail || data.message || "Signup failed");
          }

          const user = data.user || data;
          const token = data.access_token || data.token;
          const refreshToken = data.refresh_token || data.refresh_token;

          set({ 
            user, 
            token, 
            refreshToken,   
            isAuthenticated: true, 
            loading: false 
          });
          return {};
        } catch (error: any) {
          set({ error: error.message, loading: false });
          return { error: error.message };
        }
      },

      signOut: async () => {
        set({ user: null, token: null, isAuthenticated: false, error: null });
        // Optional: Call logout endpoint on backend if needed
      },

      syncSession: async () => {
        const { token } = get();
        if (!token) {
          set({ isAuthenticated: false, user: null });
          return;
        }

        set({ loading: true });
        try {
          // Verify token with backend
         const response = await fetch(`${BASE_URL}/auth/me`, {
            headers: { 
              "Authorization": `Bearer ${token}` 
            },
          });

          if (!response.ok) {
            if (response.status === 401) {
              window.location.href = "/login";
            }
            throw new Error("Session expired");
          }

          const data = await response.json();
          set({ user: data, isAuthenticated: true, loading: false });
        } catch (error) {
          set({ user: null, token: null, isAuthenticated: false, loading: false });
        }
      },

      refreshAccessToken: async () => {
        const { refreshToken } = get();
        if (!refreshToken) {
          set({ isAuthenticated: false, user: null });
          return false;
        }

        try {
          const response = await fetch(`${BASE_URL}/auth/refresh`, {
            method: "POST",
            headers: { 
              "Authorization": `Bearer ${refreshToken}` 
            },
          });

          if (!response.ok) {
            throw new Error("Refresh failed");
          }

          const data = await response.json();
          set({ 
            token: data.access_token, 
            refreshToken: data.refresh_token || refreshToken, 
            isAuthenticated: true 
          });
          return true;
        } catch (error) {
          set({ user: null, token: null, refreshToken: null, isAuthenticated: false });
          return false;
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        // If refresh token is expired, sign out immediately
        if (state?.refreshToken && isTokenExpired(state.refreshToken)) {
          state.signOut();
        }
        state?.setHydrated(true);
      },
      // Only persist user, token, and isAuthenticated
      partialize: (state) => ({ 
        user: state.user, 
        token: state.token, 
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);
