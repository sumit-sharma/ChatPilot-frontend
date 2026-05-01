import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: (import.meta as any).env.VITE_AUTH_URL || "http://localhost:8000" // FastAPI backend
});
