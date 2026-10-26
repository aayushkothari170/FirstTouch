import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../auth/auth-context";
import { lessons } from "../data/lessons";
import { useProgress } from "../progress/progress-context";
import { ContinueTraining } from "./ContinueTraining";
import { BottomNav, SidebarNav } from "./PrimaryNav";
import { ProgressPanel } from "./ProgressPanel";

export function AppShell() {
  const { user, signOut } = useAuth();
  const { completedIds, xp } = useProgress();

  return (
    <div className="min-h-dvh bg-navy text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Skip to content
      </a>
      <div className="md:grid md:min-h-dvh md:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="hidden flex-col gap-6 border-r border-line bg-navy-2 px-4 py-6 md:flex">
          <Link to="/passing" className="block rounded-2xl">
            <img src="/firsttouch-logo.png" alt="FirstTouch" className="h-auto w-full max-w-52" />
          </Link>
          <SidebarNav />
          <div className="rounded-3xl border border-line bg-card p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="truncate text-sm font-bold">{user?.name}</p>
              <button type="button" className="min-h-11 shrink-0 text-sm font-bold underline" onClick={signOut}>
                Sign out
              </button>
            </div>
            <p className="text-sm font-extrabold">
              {completedIds.length}/{lessons.length} lessons · {xp} XP
            </p>
            <div className="mt-4">
              <ProgressPanel />
            </div>
          </div>
        </aside>
        <div className="min-w-0 pb-24 md:pb-10">
          <header className="border-b border-line/70 px-4 py-5 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-3 md:hidden">
              <Link to="/passing" className="block">
                <img src="/firsttouch-logo.png" alt="FirstTouch" className="h-auto w-40" />
              </Link>
              <div className="text-right">
                <p className="text-sm font-bold text-lime">{xp} XP</p>
                <button type="button" className="min-h-11 text-sm font-bold underline" onClick={signOut}>
                  Sign out
                </button>
              </div>
            </div>
            <p className="max-w-3xl text-2xl font-extrabold tracking-tight text-ink md:text-4xl">
              Your game. Your pace. Your pathway.
            </p>
            <p className="mt-2 max-w-2xl text-base text-mist">Free soccer training, one skill at a time.</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <ContinueTraining />
              <p className="text-sm text-mist md:hidden">
                {completedIds.length} of {lessons.length} done
              </p>
            </div>
            <details className="mt-4 rounded-3xl border border-line bg-card p-4 md:hidden">
              <summary className="cursor-pointer text-sm font-extrabold">Progress and badges</summary>
              <div className="mt-4">
                <ProgressPanel />
              </div>
            </details>
          </header>
          <main id="main" className="px-4 py-6 md:px-8">
            <Outlet />
          </main>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
