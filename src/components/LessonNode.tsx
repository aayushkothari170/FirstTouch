import { Link } from "react-router-dom";
import type { Lesson, PathwayId } from "../data/types";
import { categoryMeta } from "../data/types";
import { CheckIcon } from "./Icons";

interface LessonNodeProps {
  lesson: Lesson;
  pathway: PathwayId;
  pathwayNumber: number;
  completed: boolean;
  isNext: boolean;
}

export function LessonNode({ lesson, pathway, pathwayNumber, completed, isNext }: LessonNodeProps) {
  const category = categoryMeta[lesson.category];
  const label = [
    `Level ${pathwayNumber}`,
    lesson.title,
    category.label,
    lesson.difficulty,
    `${lesson.minutes} minutes`,
    completed ? "Completed" : isNext ? "Up next" : "Not completed",
  ].join(", ");

  return (
    <Link
      to={`/lesson/${lesson.id}?pathway=${pathway}`}
      aria-label={label}
      aria-current={isNext ? "step" : undefined}
      className="group relative z-10 flex w-full flex-col items-center gap-3 rounded-3xl md:grid md:grid-cols-[1fr_4.5rem_1fr] md:items-center md:gap-6"
    >
      <article
        className={`order-2 w-full max-w-md rounded-3xl border bg-card/95 p-4 text-left shadow-lg md:row-start-1 md:max-w-sm ${
          pathwayNumber % 2 === 0
            ? "md:col-start-3 md:justify-self-start"
            : "md:col-start-1 md:justify-self-end"
        } ${completed ? "border-pitch/70" : isNext ? "border-lime" : "border-line"}`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold tracking-wide text-mist uppercase">
            {pathway === "all" ? `${category.label} · Level ${lesson.order}` : `Level ${lesson.order}`}
          </span>
          {completed ? (
            <span className="rounded-full bg-pitch px-2 py-0.5 text-xs font-extrabold text-navy">
              Completed
            </span>
          ) : null}
          {isNext ? (
            <span className="rounded-full bg-lime px-2 py-0.5 text-xs font-extrabold text-navy">
              Up next
            </span>
          ) : null}
        </div>
        <h3 className="mt-2 text-lg font-extrabold text-ink group-hover:underline">{lesson.title}</h3>
        <p className="mt-1 text-sm text-mist">
          {lesson.difficulty} · {lesson.minutes} min
        </p>
      </article>
      <span className="relative order-1 md:col-start-2 md:row-start-1">
        <span
          className={`grid size-16 place-items-center rounded-full border-4 text-xl font-extrabold ${
            completed ? "border-pitch bg-pitch text-navy" : "border-pitch bg-navy-2 text-ink"
          } ${isNext ? "up-next-node border-lime" : ""}`}
        >
          {pathwayNumber}
        </span>
        {completed ? (
          <span className="absolute -top-1 -right-1 grid size-7 place-items-center rounded-full bg-navy text-ink">
            <CheckIcon className="size-4" />
          </span>
        ) : null}
      </span>
    </Link>
  );
}
