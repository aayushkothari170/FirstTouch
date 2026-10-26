import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { PathwayId } from "../data/types";
import { categoryMeta, pathwayCopy } from "../data/types";
import { firstIncomplete, lessonsForPathway } from "../data/lessons";
import { useProgress } from "../progress/progress-context";
import { categoryCount } from "../progress/storage";
import { Pathway } from "../components/Pathway";
import { ProgressBar } from "../components/ProgressBar";

interface PathwayPageProps {
  pathway: PathwayId;
}

export function PathwayPage({ pathway }: PathwayPageProps) {
  const copy = pathwayCopy[pathway];
  const lessonList = lessonsForPathway(pathway);
  const { completedSet, completedIds } = useProgress();
  const next = firstIncomplete(lessonList, completedSet);
  const done =
    pathway === "all" ? completedIds.length : categoryCount(completedIds, pathway);

  useEffect(() => {
    document.title = `${copy.label} · FirstTouch`;
  }, [copy.label]);

  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{copy.label}</h1>
        <p className="mt-2 text-base leading-7 text-mist">{copy.blurb}</p>
        <div className="mt-4 max-w-md">
          <ProgressBar label={`${copy.label} progress`} value={done} max={lessonList.length} />
        </div>
        {next ? (
          <p className="mt-3 text-sm text-mist">
            Up next:{" "}
            <Link className="font-bold text-ink underline" to={`/lesson/${next.id}?pathway=${pathway}`}>
              {pathway === "all" ? `${categoryMeta[next.category].label}: ${next.title}` : next.title}
            </Link>
          </p>
        ) : (
          <p className="mt-3 text-sm font-bold text-pitch">All done.</p>
        )}
      </div>
      <Pathway lessons={lessonList} pathway={pathway} completed={completedSet} nextId={next?.id ?? null} />
    </div>
  );
}
