import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  user_id: number;
  email: string;
  full_name: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  tokenType: string | null;
  isAuthenticated: boolean;

  login: (data: {
    user_id: number;
    email: string;
    full_name: string;
    access_token: string;
    token_type: string;
  }) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      tokenType: null,
      isAuthenticated: false,

      login: (data) => {
        // Also set cookie for server-side access (middleware, SSR)
        document.cookie = `access_token=${data.access_token}; path=/; max-age=86400; SameSite=Lax`;

        set({
          user: {
            user_id: data.user_id,
            email: data.email,
            full_name: data.full_name,
          },
          accessToken: data.access_token,
          tokenType: data.token_type,
          isAuthenticated: true,
        });
      },

      logout: () => {
        // Clear cookie
        document.cookie = "access_token=; path=/; max-age=0";

        set({
          user: null,
          accessToken: null,
          tokenType: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);
