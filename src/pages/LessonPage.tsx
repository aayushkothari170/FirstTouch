import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import type { Lesson, PathwayId, PracticeBlock } from "../data/types";
import { XP_PER_LESSON, categoryMeta, pathwayCopy } from "../data/types";
import { getLesson, nextLessonInPathway } from "../data/lessons";
import { useProgress } from "../progress/progress-context";
import { VideoPlayer } from "../components/VideoPlayer";

function isPathway(value: string | null): value is PathwayId {
  return (
    value === "passing" ||
    value === "dribbling" ||
    value === "shooting" ||
    value === "defending" ||
    value === "all"
  );
}

function Practice({ block }: { block: PracticeBlock }) {
  return (
    <div className="step-surface rounded-3xl border border-white/20 p-5 text-white">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-lg font-extrabold text-white">{block.title}</h2>
        {block.requiresPartner ? (
          <span className="rounded-full border border-white px-2 py-1 text-xs font-extrabold text-white">
            Partner needed
          </span>
        ) : (
          <span className="rounded-full bg-white/15 px-2 py-1 text-xs font-extrabold text-white">
            Solo
          </span>
        )}
      </div>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-white">
        {block.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export function LessonPage() {
  const { lessonId } = useParams();
  const [searchParams] = useSearchParams();
  const lesson = lessonId ? getLesson(lessonId) : undefined;
  const requested = searchParams.get("pathway");
  const pathway: PathwayId = isPathway(requested) ? requested : (lesson?.category ?? "passing");

  useEffect(() => {
    document.title = lesson ? `${lesson.title} · FirstTouch` : "Lesson · FirstTouch";
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-line bg-card p-6">
        <h1 className="text-2xl font-extrabold">Lesson not found</h1>
        <p className="mt-2 text-mist">That level is not on the pathway.</p>
        <Link className="mt-4 inline-flex min-h-11 items-center font-bold text-ink underline" to="/passing">
          Back to Passing
        </Link>
      </div>
    );
  }

  return <LessonDetail key={lesson.id} lesson={lesson} pathway={pathway} />;
}

function LessonDetail({ lesson, pathway }: { lesson: Lesson; pathway: PathwayId }) {
  const progress = useProgress();
  const completed = progress.isComplete(lesson.id);
  const [challengeReady, setChallengeReady] = useState(false);
  const [status, setStatus] = useState("");
  const category = categoryMeta[lesson.category];
  const next = nextLessonInPathway(pathway, lesson.id);
  const backTo = pathway === "all" ? "/all-skills" : `/${pathway}`;

  function markComplete() {
    if (!challengeReady || progress.isComplete(lesson.id)) {
      return;
    }
    const result = progress.completeLesson(lesson.id);
    if (result.awarded) {
      const badgeText = result.badge ? ` Badge: ${result.badge}.` : "";
      setStatus(`+${XP_PER_LESSON} XP.${badgeText}`);
    }
  }

  return (
    <article className="mx-auto max-w-3xl space-y-5">
      <p>
        <Link className="text-sm font-bold text-ink underline" to={backTo}>
          Back to {pathwayCopy[pathway].label}
        </Link>
      </p>
      <header>
        <p className="text-sm font-bold tracking-wide text-pitch uppercase">
          Level {lesson.order} · {category.label}
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">{lesson.title}</h1>
        <p className="mt-2 text-sm text-mist">
          {lesson.difficulty} · {lesson.minutes} min
        </p>
        <p className="mt-3 text-base leading-6">{lesson.summary}</p>
        <p className="mt-2 text-sm leading-6 text-mist">
          {lesson.equipment} If you do not have that: {lesson.everydayAlternative}
        </p>
      </header>

      <VideoPlayer video={lesson.video} />

      <section className="rounded-3xl border border-line bg-card p-5">
        <h2 className="text-lg font-extrabold">How</h2>
        <p className="mt-2 text-sm leading-6">{lesson.technique[0]}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
          {lesson.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold">Try this</h2>
        <Practice block={lesson.drill} />
        {lesson.soloAlternative ? <Practice block={lesson.soloAlternative} /> : null}
      </section>

      <section className="rounded-3xl border border-lime/50 bg-card p-5">
        <h2 className="text-lg font-extrabold">Done when</h2>
        <p className="mt-2 text-sm leading-6 text-ink">{lesson.challenge}</p>
        {completed ? (
          <p className="mt-4 text-sm font-bold text-pitch">Done. +{XP_PER_LESSON} XP</p>
        ) : (
          <label className="mt-4 flex items-start gap-3 text-sm leading-6">
            <input
              type="checkbox"
              className="mt-1 size-5 accent-pitch"
              checked={challengeReady}
              onChange={(event) => setChallengeReady(event.target.checked)}
            />
            <span className="font-bold">I did this</span>
          </label>
        )}
      </section>

      <section className="rounded-3xl border border-line bg-card p-5">
        <h2 className="text-lg font-extrabold">Avoid</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-mist">
          {lesson.mistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row" aria-live="polite">
        <button
          type="button"
          className="min-h-12 rounded-full bg-pitch px-5 py-3 font-extrabold text-navy disabled:cursor-not-allowed disabled:bg-card-2 disabled:text-mist"
          onClick={markComplete}
          disabled={completed || !challengeReady}
        >
          {completed ? "Completed" : "Mark complete"}
        </button>
        {next ? (
          <Link
            to={`/lesson/${next.id}?pathway=${pathway}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-5 py-3 text-center font-extrabold"
          >
            Next lesson: {next.title}
          </Link>
        ) : (
          <Link
            to={backTo}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-5 py-3 text-center font-extrabold"
          >
            Back to {pathwayCopy[pathway].label}
          </Link>
        )}
      </div>
      {status ? <p className="text-sm font-bold text-pitch">{status}</p> : null}
    </article>
  );
}
