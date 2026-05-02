import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: (process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:8000") + "/api/v1/auth" // FastAPI backend auth path
});
