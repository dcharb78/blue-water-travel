import type { Review } from "./types";

/**
 * No standalone customer testimonials were found on the live site.
 * These entries reflect the agency's published philosophy and advisor value messaging.
 */
export const reviews: Review[] = [
  {
    id: "agency-philosophy",
    author: "Blue Water Travel",
    rating: 5,
    text: "Without a travel agent, you are on your own. We believe great vacations start with understanding you — then leaning on our trusted industry network to plan every detail just right.",
    source: "Direct",
    date: "2024-01-01",
    tripType: "Travel Philosophy",
  },
  {
    id: "advisor-advocacy",
    author: "Terri Jobe, Owner",
    rating: 5,
    text: "When flights change, storms hit, or plans shift, your advisor is one call away. We rebook, advocate, and solve problems so your vacation stays on track — that's the value of having a real person in your corner.",
    source: "Direct",
    date: "2025-11-25",
    tripType: "Advisor Support",
  },
];

export function getAverageRating(items: Review[] = reviews): number {
  if (items.length === 0) return 0;
  const sum = items.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / items.length) * 10) / 10;
}
