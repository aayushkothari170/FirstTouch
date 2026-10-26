import { Link, useLocation } from "react-router-dom";
import type { PathwayId } from "../data/types";
import { AllIcon, DefendIcon, DribbleIcon, PassIcon, ShootIcon } from "./Icons";

const items: { id: PathwayId; to: string; label: string; short: string; icon: typeof PassIcon }[] = [
  { id: "passing", to: "/passing", label: "Passing", short: "Pass", icon: PassIcon },
  { id: "dribbling", to: "/dribbling", label: "Dribbling", short: "Dribble", icon: DribbleIcon },
  { id: "shooting", to: "/shooting", label: "Shooting", short: "Shoot", icon: ShootIcon },
  { id: "defending", to: "/defending", label: "Defending", short: "Defend", icon: DefendIcon },
  { id: "all", to: "/all-skills", label: "All Skills", short: "All", icon: AllIcon },
];

function currentPathway(pathname: string, search: string): PathwayId | null {
  if (pathname === "/passing") return "passing";
  if (pathname === "/dribbling") return "dribbling";
  if (pathname === "/shooting") return "shooting";
  if (pathname === "/defending") return "defending";
  if (pathname === "/all-skills") return "all";
  if (!pathname.startsWith("/lesson/")) return null;
  const query = new URLSearchParams(search).get("pathway");
  if (
    query === "passing" ||
    query === "dribbling" ||
    query === "shooting" ||
    query === "defending" ||
    query === "all"
  ) {
    return query;
  }
  const lessonId = pathname.split("/")[2] ?? "";
  if (lessonId.startsWith("passing")) return "passing";
  if (lessonId.startsWith("dribbling")) return "dribbling";
  if (lessonId.startsWith("shooting")) return "shooting";
  if (lessonId.startsWith("defending")) return "defending";
  return null;
}

export function SidebarNav() {
  const location = useLocation();
  const active = currentPathway(location.pathname, location.search);

  return (
    <nav aria-label="Skills" className="flex flex-col gap-1">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <Link
            key={item.id}
            to={item.to}
            aria-current={isActive ? "page" : undefined}
            className={`flex min-h-11 items-center gap-3 rounded-2xl px-3 py-2 text-sm font-bold ${
              isActive ? "bg-pitch text-navy" : "text-mist hover:bg-card hover:text-ink"
            }`}
          >
            <Icon className="size-5 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function BottomNav() {
  const location = useLocation();
  const active = currentPathway(location.pathname, location.search);

  return (
    <nav
      aria-label="Skills"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-navy-2/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <Link
                to={item.to}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-[11px] font-bold ${
                  isActive ? "text-pitch" : "text-mist"
                }`}
              >
                <Icon className="size-5" />
                {item.short}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
