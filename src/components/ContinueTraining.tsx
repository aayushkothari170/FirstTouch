import { Link } from "react-router-dom";
import { categoryMeta } from "../data/types";
import { firstIncomplete, lessonsForPathway } from "../data/lessons";
import { useProgress } from "../progress/progress-context";

export function ContinueTraining() {
  const { completedSet } = useProgress();
  const next = firstIncomplete(lessonsForPathway("all"), completedSet);

  if (!next) {
    return (
      <Link
        to="/all-skills"
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-pitch px-4 py-2 text-sm font-extrabold text-navy"
      >
        Pathway complete
      </Link>
    );
  }

  return (
    <Link
      to={`/lesson/${next.id}?pathway=all`}
      className="inline-flex min-h-11 max-w-full flex-col items-start justify-center rounded-full bg-pitch px-4 py-2 text-left text-navy"
    >
      <span className="text-[11px] font-extrabold tracking-wide uppercase">Continue training</span>
      <span className="text-sm leading-5 font-extrabold">
        {next.title}
        <span className="font-semibold"> · {categoryMeta[next.category].label}</span>
      </span>
    </Link>
  );
}
