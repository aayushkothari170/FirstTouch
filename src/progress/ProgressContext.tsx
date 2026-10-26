import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { lessons } from "../data/lessons";
import {
  badgeEarnedByCompletion,
  earnedBadges,
  loadCompletedIds,
  saveCompletedIds,
  xpFor,
} from "./storage";
import { ProgressContext } from "./progress-context";
import type { ProgressValue } from "./progress-context";

export function ProgressProvider({ userId, children }: { userId: string; children: ReactNode }) {
  const [completedIds, setCompletedIds] = useState<string[]>(() => loadCompletedIds(userId));

  useEffect(() => {
    saveCompletedIds(userId, completedIds);
  }, [userId, completedIds]);

  const value = useMemo<ProgressValue>(() => {
    const completedSet = new Set(completedIds);
    return {
      completedIds,
      completedSet,
      xp: xpFor(completedIds),
      badges: earnedBadges(completedIds),
      isComplete: (lessonId: string) => completedSet.has(lessonId),
      completeLesson: (lessonId: string) => {
        if (!lessons.some((lesson) => lesson.id === lessonId) || completedSet.has(lessonId)) {
          return { awarded: false, badge: null };
        }
        const badge = badgeEarnedByCompletion(completedIds, lessonId);
        setCompletedIds((current) => (current.includes(lessonId) ? current : [...current, lessonId]));
        return { awarded: true, badge };
      },
      reset: () => setCompletedIds([]),
    };
  }, [completedIds]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
