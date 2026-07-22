"use client";

import { useState } from "react";
import { videos } from "@/lib/content/videos";
import type { Video } from "@/lib/content/types";
import { parseVideoUrl } from "@/lib/video-utils";

function VideoCard({ video, onPlay }: { video: Video; onPlay: () => void }) {
  const { thumbnailUrl } = parseVideoUrl(video.url);
  const thumb = video.thumbnail || thumbnailUrl;

  return (
    <article className="group overflow-hidden rounded-2xl border border-ocean-100 bg-white shadow-sm">
      <button
        type="button"
        onClick={onPlay}
        className="relative block aspect-video w-full overflow-hidden bg-ocean-900"
        aria-label={`Play video: ${video.title}`}
      >
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt=""
            className="h-full w-full object-cover opacity-80 transition group-hover:scale-105 group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-ocean-800 to-ocean-950">
            <span className="font-display text-xl text-white">{video.title}</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ocean-800 shadow-lg transition group-hover:scale-110">
            <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </button>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ocean-950">{video.title}</h3>
        {video.description && (
          <p className="mt-2 text-sm leading-relaxed text-ocean-700">{video.description}</p>
        )}
      </div>
    </article>
  );
}

type VideoGalleryProps = {
  items?: Video[];
  featured?: Video;
};

export function VideoGallery({ items = videos, featured }: VideoGalleryProps) {
  const [playing, setPlaying] = useState<Video | null>(featured ?? null);

  const featuredVideo = featured ?? items[0];
  const gridItems = featured ? items.filter((v) => v.id !== featured.id) : items.slice(1);

  return (
    <div className="space-y-10">
      {featuredVideo && (
        <div>
          <h3 className="mb-4 font-display text-xl font-semibold text-ocean-950">Featured Video</h3>
          <div className="overflow-hidden rounded-2xl border border-ocean-100 bg-ocean-950 shadow-xl">
            <div className="aspect-video w-full">
              {playing?.id === featuredVideo.id ? (
                <iframe
                  src={`${parseVideoUrl(featuredVideo.url).embedUrl}?autoplay=1`}
                  title={featuredVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(featuredVideo)}
                  className="relative h-full w-full"
                  aria-label={`Play featured video: ${featuredVideo.title}`}
                >
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-ocean-800 to-ocean-950">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-ocean-800 shadow-xl">
                      <svg className="ml-1 h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </button>
              )}
            </div>
            <div className="p-6 text-white">
              <h4 className="font-display text-2xl font-semibold">{featuredVideo.title}</h4>
              {featuredVideo.description && (
                <p className="mt-2 text-ocean-200">{featuredVideo.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {gridItems.length > 0 && (
        <div>
          <h3 className="mb-4 font-display text-xl font-semibold text-ocean-950">More Videos</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {gridItems.map((video) => (
              <div key={video.id}>
                {playing?.id === video.id ? (
                  <div className="aspect-video overflow-hidden rounded-2xl">
                    <iframe
                      src={`${parseVideoUrl(video.url).embedUrl}?autoplay=1`}
                      title={video.title}
                      className="h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <VideoCard video={video} onPlay={() => setPlaying(video)} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
