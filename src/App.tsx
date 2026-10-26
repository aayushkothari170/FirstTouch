import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { GuestOnly, RequireAuth } from "./auth/guards";
import { AppShell } from "./components/AppShell";
import { AuthPage } from "./pages/AuthPage";
import { LessonPage } from "./pages/LessonPage";
import { PathwayPage } from "./pages/PathwayPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/sign-in"
            element={
              <GuestOnly>
                <AuthPage mode="sign-in" />
              </GuestOnly>
            }
          />
          <Route
            path="/create-account"
            element={
              <GuestOnly>
                <AuthPage mode="create" />
              </GuestOnly>
            }
          />
          <Route element={<RequireAuth />}>
            <Route element={<AppShell />}>
              <Route index element={<Navigate to="/passing" replace />} />
              <Route path="passing" element={<PathwayPage pathway="passing" />} />
              <Route path="dribbling" element={<PathwayPage pathway="dribbling" />} />
              <Route path="shooting" element={<PathwayPage pathway="shooting" />} />
              <Route path="defending" element={<PathwayPage pathway="defending" />} />
              <Route path="all-skills" element={<PathwayPage pathway="all" />} />
              <Route path="lesson/:lessonId" element={<LessonPage />} />
              <Route path="*" element={<Navigate to="/passing" replace />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
