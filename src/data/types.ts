export const skillCategories = ["passing", "dribbling", "shooting", "defending"] as const;

export type SkillCategory = (typeof skillCategories)[number];

export type PathwayId = SkillCategory | "all";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface TutorialVideo {
  youtubeId: string;
  title: string;
  creator: string;
  url: string;
}

export interface PracticeBlock {
  title: string;
  requiresPartner: boolean;
  steps: readonly string[];
}

export interface Lesson {
  id: string;
  category: SkillCategory;
  order: number;
  title: string;
  difficulty: Difficulty;
  summary: string;
  minutes: number;
  equipment: string;
  everydayAlternative: string;
  video: TutorialVideo | null;
  technique: readonly string[];
  tips: readonly [string, string, string];
  drill: PracticeBlock;
  soloAlternative: PracticeBlock | null;
  challenge: string;
  mistakes: readonly string[];
}

export interface CategoryMeta {
  id: SkillCategory;
  label: string;
  blurb: string;
  badge: string;
}

export const categoryMeta: Record<SkillCategory, CategoryMeta> = {
  passing: {
    id: "passing",
    label: "Passing",
    blurb: "Move the ball to a target.",
    badge: "Playmaker",
  },
  dribbling: {
    id: "dribbling",
    label: "Dribbling",
    blurb: "Keep the ball close while you move.",
    badge: "Ball Wizard",
  },
  shooting: {
    id: "shooting",
    label: "Shooting",
    blurb: "Shoot at a target.",
    badge: "Finisher",
  },
  defending: {
    id: "defending",
    label: "Defending",
    blurb: "Stay on your feet and protect the goal.",
    badge: "Anchor",
  },
};

export const XP_PER_LESSON = 100;

export const pathwayCopy: Record<
  PathwayId,
  { label: string; blurb: string }
> = {
  ...categoryMeta,
  all: {
    label: "All Skills",
    blurb: "All four skills, from easy to hard.",
  },
};
