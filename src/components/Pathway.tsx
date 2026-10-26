import type { Lesson, PathwayId } from "../data/types";
import { sectionLabel } from "../data/lessons";
import { LessonNode } from "./LessonNode";

interface PathwayProps {
  lessons: readonly Lesson[];
  pathway: PathwayId;
  completed: ReadonlySet<string>;
  nextId: string | null;
}

export function Pathway({ lessons, pathway, completed, nextId }: PathwayProps) {
  return (
    <div className="pitch-surface rounded-3xl border border-black/15 px-3 py-6 md:px-8">
      <ol className="relative mx-auto flex max-w-3xl flex-col gap-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-8 bottom-8 left-1/2 w-1 -translate-x-1/2 rounded-full bg-white/45"
        />
        {lessons.map((lesson, index) => {
          const label = sectionLabel(pathway, index);
          return (
            <li key={lesson.id} className="relative">
              {label ? (
                <p className="relative z-10 mx-auto mb-4 w-fit rounded-full border border-line bg-navy px-4 py-1 text-center text-xs font-extrabold tracking-wide text-lime uppercase">
                  {label}
                </p>
              ) : null}
              <LessonNode
                lesson={lesson}
                pathway={pathway}
                pathwayNumber={index + 1}
                completed={completed.has(lesson.id)}
                isNext={lesson.id === nextId}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
