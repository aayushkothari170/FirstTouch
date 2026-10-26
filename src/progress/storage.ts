import { XP_PER_LESSON, skillCategories } from "../data/types";
import type { SkillCategory } from "../data/types";
import { getLesson, lessons, lessonsForCategory } from "../data/lessons";
import { categoryMeta } from "../data/types";

export const STORAGE_KEY = "firsttouch.progress.v1";

export function progressStorageKey(userId: string): string {
  return `${STORAGE_KEY}.${userId}`;
}

interface StoredProgress {
  completedLessonIds: string[];
}

export function loadCompletedIds(userId: string): string[] {
  try {
    const raw = localStorage.getItem(progressStorageKey(userId));
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as Partial<StoredProgress>;
    if (!Array.isArray(parsed.completedLessonIds)) {
      return [];
    }
    const known = new Set(lessons.map((lesson) => lesson.id));
    return parsed.completedLessonIds.filter((id): id is string => typeof id === "string" && known.has(id));
  } catch {
    return [];
  }
}

export function saveCompletedIds(userId: string, completedLessonIds: readonly string[]) {
  try {
    const payload: StoredProgress = { completedLessonIds: [...completedLessonIds] };
    localStorage.setItem(progressStorageKey(userId), JSON.stringify(payload));
  } catch {
    // Progress stays in memory if this browser blocks storage.
  }
}

export function xpFor(completedIds: readonly string[]): number {
  return completedIds.length * XP_PER_LESSON;
}

export function categoryCount(completedIds: readonly string[], category: SkillCategory): number {
  const ids = new Set(completedIds);
  return lessonsForCategory(category).filter((lesson) => ids.has(lesson.id)).length;
}

export function earnedBadges(completedIds: readonly string[]): SkillCategory[] {
  return skillCategories.filter((category) => categoryCount(completedIds, category) === 8);
}

export function badgeEarnedByCompletion(
  previousIds: readonly string[],
  lessonId: string,
): string | null {
  const lesson = getLesson(lessonId);
  if (!lesson) {
    return null;
  }
  const before = categoryCount(previousIds, lesson.category);
  const after = categoryCount([...previousIds, lessonId], lesson.category);
  if (before < 8 && after === 8) {
    return categoryMeta[lesson.category].badge;
  }
  return null;
}
