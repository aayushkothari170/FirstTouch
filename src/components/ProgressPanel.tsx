import { useState } from "react";
import { XP_PER_LESSON, categoryMeta, skillCategories } from "../data/types";
import { lessons, lessonsForCategory } from "../data/lessons";
import { useProgress } from "../progress/progress-context";
import { categoryCount } from "../progress/storage";
import { BadgeList } from "./BadgeList";
import { ProgressBar } from "./ProgressBar";
import { ResetDialog } from "./ResetDialog";

export function ProgressPanel() {
  const progress = useProgress();
  const [confirming, setConfirming] = useState(false);

  return (
    <section aria-label="Your progress" className="space-y-4">
      <ProgressBar label="All lessons" value={progress.completedIds.length} max={lessons.length} />
      <div className="space-y-3">
        {skillCategories.map((category) => (
          <ProgressBar
            key={category}
            label={categoryMeta[category].label}
            value={categoryCount(progress.completedIds, category)}
            max={lessonsForCategory(category).length}
          />
        ))}
      </div>
      <div>
        <h2 className="mb-2 text-sm font-extrabold tracking-wide text-ink uppercase">Badges</h2>
        <BadgeList earned={progress.badges} />
      </div>
      <p className="text-xs leading-5 text-mist">
        {progress.xp} XP · {XP_PER_LESSON} per lesson · saved for this account
      </p>
      <button
        type="button"
        className="min-h-11 w-full rounded-full border border-line px-4 py-2 text-sm font-bold text-ink"
        onClick={() => setConfirming(true)}
      >
        Reset progress
      </button>
      <ResetDialog
        open={confirming}
        onCancel={() => setConfirming(false)}
        onConfirm={() => {
          progress.reset();
          setConfirming(false);
        }}
      />
    </section>
  );
}
