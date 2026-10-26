import { createContext, useContext } from "react";
import type { PublicUser } from "./storage";

export interface AuthValue {
  user: PublicUser | null;
  createAccount: (input: { name: string; email: string; password: string }) => Promise<string | null>;
  signIn: (input: { email: string; password: string }) => Promise<string | null>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthValue | null>(null);

export function useAuth(): AuthValue {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return value;
}
