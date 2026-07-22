"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryCategories, galleryImages } from "@/lib/content/gallery";
import type { GalleryImage } from "@/lib/content/types";

type PhotoGalleryProps = {
  images?: GalleryImage[];
  showFilters?: boolean;
  columns?: 2 | 3 | 4;
};

export function PhotoGallery({
  images = galleryImages,
  showFilters = true,
  columns = 3,
}: PhotoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === cat.id
                  ? "bg-ocean-700 text-white"
                  : "border border-ocean-200 text-ocean-800 hover:bg-ocean-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div className={`grid gap-4 ${gridCols[columns]}`}>
        {filtered.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-ocean-100 text-left"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ocean-950/70 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
              {image.caption && (
                <p className="text-sm font-medium text-white">{image.caption}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ocean-950/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-16 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Next photo"
          >
            →
          </button>
          <div
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-[min(90vw,960px)]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="rounded-xl object-contain"
                sizes="960px"
                priority
              />
            </div>
            {filtered[lightboxIndex].caption && (
              <p className="mt-4 text-center text-white">{filtered[lightboxIndex].caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
