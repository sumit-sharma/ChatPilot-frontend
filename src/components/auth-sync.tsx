"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { setupFetchInterceptor } from "@/lib/fetch-interceptor";

export function AuthSync() {
  //const syncSession = useAuthStore((state) => state.syncSession);

  useEffect(() => {
    // Initialize global fetch interceptor
    setupFetchInterceptor();
    
    // Sync session on load
    // syncSession();
  }, []);

  return null;
}
