"use client";

import { useState } from "react";
import { getAverageRating, reviews } from "@/lib/content/reviews";
import type { Review } from "@/lib/content/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-amber-400" : "text-ocean-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm">
      <StarRating rating={review.rating} />
      <p className="mt-4 flex-1 leading-relaxed text-ocean-700">&ldquo;{review.text}&rdquo;</p>
      <footer className="mt-6 border-t border-ocean-100 pt-4">
        <cite className="not-italic">
          <span className="font-semibold text-ocean-950">{review.author}</span>
          {review.tripType && (
            <span className="ml-2 text-sm text-ocean-500">· {review.tripType}</span>
          )}
        </cite>
        <p className="mt-1 text-xs text-ocean-500">
          {review.source} ·{" "}
          {new Date(review.date).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </footer>
    </blockquote>
  );
}

type TestimonialsProps = {
  limit?: number;
  showSummary?: boolean;
};

export function Testimonials({ limit, showSummary = true }: TestimonialsProps) {
  const items = limit ? reviews.slice(0, limit) : reviews;
  const [activeIndex, setActiveIndex] = useState(0);
  const averageRating = getAverageRating(reviews);

  return (
    <section aria-labelledby="reviews-heading">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">
          Client Stories
        </p>
        <h2 id="reviews-heading" className="mt-2 font-display text-3xl font-semibold text-ocean-950">
          What Our Travelers Say
        </h2>
        {showSummary && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <StarRating rating={Math.round(averageRating)} />
            <span className="text-lg font-semibold text-ocean-900">{averageRating}</span>
            <span className="text-ocean-600">({reviews.length} reviews)</span>
          </div>
        )}
      </div>

      {/* Desktop grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {items.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <ReviewCard review={items[activeIndex]} />
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveIndex((i) => (i === 0 ? items.length - 1 : i - 1))}
            className="rounded-full border border-ocean-200 px-4 py-2 text-sm font-semibold text-ocean-800 hover:bg-ocean-50"
            aria-label="Previous review"
          >
            ← Prev
          </button>
          <span className="text-sm text-ocean-600">
            {activeIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={() => setActiveIndex((i) => (i === items.length - 1 ? 0 : i + 1))}
            className="rounded-full border border-ocean-200 px-4 py-2 text-sm font-semibold text-ocean-800 hover:bg-ocean-50"
            aria-label="Next review"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
