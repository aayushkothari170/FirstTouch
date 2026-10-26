import { createContext, useContext } from "react";
import type { SkillCategory } from "../data/types";

export interface ProgressValue {
  completedIds: readonly string[];
  completedSet: ReadonlySet<string>;
  xp: number;
  badges: readonly SkillCategory[];
  isComplete: (lessonId: string) => boolean;
  completeLesson: (lessonId: string) => { awarded: boolean; badge: string | null };
  reset: () => void;
}

export const ProgressContext = createContext<ProgressValue | null>(null);

export function useProgress(): ProgressValue {
  const value = useContext(ProgressContext);
  if (!value) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return value;
}
