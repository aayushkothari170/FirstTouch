import type { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ProgressProvider } from "../progress/ProgressContext";
import { useAuth } from "./auth-context";

export function RequireAuth() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
  return (
    <ProgressProvider key={user.id} userId={user.id}>
      <Outlet />
    </ProgressProvider>
  );
}

export function GuestOnly({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/passing" replace />;
  }
  return children;
}
