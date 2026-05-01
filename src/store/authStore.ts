import { create } from 'zustand';
import { authClient } from '../lib/auth-client';

interface AuthState {
  user: any | null;
  session: any | null;
  loading: boolean;
  syncSession: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,

  syncSession: async () => {
    set({ loading: true });
    try {
      const { data } = await authClient.getSession();
      if (data) {
        set({ session: data.session, user: data.user, loading: false });
      } else {
        set({ session: null, user: null, loading: false });
      }
    } catch (error) {
      if (error instanceof Error && error.message !== "Failed to fetch") {
        console.error("Auth session sync failed:", error);
      } else {
        console.warn("Auth backend unreachable. Check your FastAPI server.");
      }
      set({ session: null, user: null, loading: false });
    }
  },

  signOut: async () => {
    try {
      await authClient.signOut();
      set({ user: null, session: null });
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));
