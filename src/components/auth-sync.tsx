"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";

export function AuthSync() {
  const syncSession = useAuthStore((state) => state.syncSession);

  useEffect(() => {
    syncSession();
  }, [syncSession]);

  return null;
}
