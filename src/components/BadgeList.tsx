import { categoryMeta, skillCategories } from "../data/types";
import type { SkillCategory } from "../data/types";
import { CheckIcon } from "./Icons";

interface BadgeListProps {
  earned: readonly SkillCategory[];
}

export function BadgeList({ earned }: BadgeListProps) {
  const earnedSet = new Set(earned);

  return (
    <ul className="grid grid-cols-2 gap-2">
      {skillCategories.map((category) => {
        const meta = categoryMeta[category];
        const unlocked = earnedSet.has(category);
        return (
          <li
            key={category}
            className={`rounded-2xl border px-3 py-3 ${
              unlocked ? "border-pitch bg-pitch/15" : "border-dashed border-line bg-navy/50"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`grid size-7 place-items-center rounded-full ${
                  unlocked ? "bg-pitch text-navy" : "bg-card-2 text-mist"
                }`}
              >
                {unlocked ? <CheckIcon className="size-4" /> : <span className="text-xs">•</span>}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{meta.badge}</p>
                <p className="text-xs text-mist">{meta.label}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
