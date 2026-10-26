import { useState } from "react";
import type { TutorialVideo } from "../data/types";

interface VideoPlayerProps {
  video: TutorialVideo | null;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const [showPlayer, setShowPlayer] = useState(false);

  if (!video) {
    return (
      <div className="rounded-3xl border border-dashed border-line bg-navy/60 p-5">
        <h2 className="text-lg font-extrabold">No video yet</h2>
        <p className="mt-2 text-sm leading-6 text-mist">Use the steps below.</p>
      </div>
    );
  }

  const embedSrc = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&autoplay=1`;

  return (
    <div className="rounded-3xl border border-line bg-card p-4 md:p-5">
      <p className="text-xs font-bold tracking-wide text-pitch uppercase">YouTube tutorial</p>
      <h2 className="mt-1 text-lg font-extrabold">{video.title}</h2>
      <p className="mt-1 text-sm text-mist">By {video.creator}</p>
      <div className="mt-4 overflow-hidden rounded-2xl bg-navy">
        {showPlayer ? (
          <iframe
            className="aspect-video w-full"
            src={embedSrc}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="relative flex aspect-video w-full items-center justify-center bg-card-2"
            onClick={() => setShowPlayer(true)}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="relative rounded-full bg-pitch px-5 py-3 text-base font-extrabold text-navy">
              Play tutorial
            </span>
          </button>
        )}
      </div>
      <a
        className="mt-3 inline-flex min-h-11 items-center rounded-full border border-line px-4 py-2 text-sm font-bold text-ink"
        href={video.url}
        target="_blank"
        rel="noreferrer"
      >
        Open on YouTube
      </a>
    </div>
  );
}
