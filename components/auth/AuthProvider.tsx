"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface User {
  email: string;
  name: string;
  company: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const MOCK_USER: User = {
  email: "admin@octopaygate.com",
  name: "Reynaldhi",
  company: "OCTOPayGate Inc.",
};

function getInitialUser(): User | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("octo_user");
  return stored ? JSON.parse(stored) : null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getInitialUser);

  const login = useCallback(async (email: string) => {
    await new Promise((r) => setTimeout(r, 800));
    const u = { ...MOCK_USER, email };
    setUser(u);
    localStorage.setItem("octo_user", JSON.stringify(u));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("octo_user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
