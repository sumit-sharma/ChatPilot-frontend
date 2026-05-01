import React, { createContext, useContext, useEffect, useState } from 'react';
import { authClient } from '../lib/auth-client';

interface AuthContextType {
  user: any | null;
  session: any | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const syncSession = async () => {
    try {
      const { data, error } = await authClient.getSession();
      if (data) {
        setSession(data.session);
        setUser(data.user);
      } else {
        setSession(null);
        setUser(null);
      }
    } catch (error) {
      // Only log if it's not a generic "Failed to fetch" which is common when backend is down
      if (error instanceof Error && error.message !== "Failed to fetch") {
        console.error("Auth session sync failed:", error);
      } else {
        console.warn("Auth backend unreachable at " + ((import.meta as any).env.VITE_AUTH_URL || "http://localhost:8000") + ". Check your FastAPI server.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    syncSession();
  }, []);

  const signOut = async () => {
    try {
      await authClient.signOut();
      setUser(null);
      setSession(null);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
