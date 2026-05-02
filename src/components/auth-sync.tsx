"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/auth-store";

export function AuthSync() {
  const { isAuthenticated, accessToken } = useAuthStore();

  useEffect(() => {
    // Sync token to cookie on mount/hydration so middleware & SSR can access it
    if (isAuthenticated && accessToken) {
      document.cookie = `access_token=${accessToken}; path=/; max-age=86400; SameSite=Lax`;
    }
  }, [isAuthenticated, accessToken]);

  return null;
}
