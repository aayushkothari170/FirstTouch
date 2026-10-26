import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./auth-context";
import type { AuthValue } from "./auth-context";
import { clearSession, loadSessionUser, loginAccount, registerAccount } from "./storage";
import type { PublicUser } from "./storage";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(() => loadSessionUser());

  const value = useMemo<AuthValue>(
    () => ({
      user,
      createAccount: async (input) => {
        const result = await registerAccount(input);
        if (!result.user) {
          return result.error ?? "Could not create the account.";
        }
        setUser(result.user);
        return null;
      },
      signIn: async (input) => {
        const result = await loginAccount(input);
        if (!result.user) {
          return result.error ?? "Could not sign in.";
        }
        setUser(result.user);
        return null;
      },
      signOut: () => {
        clearSession();
        setUser(null);
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
