import type { Review } from "./types";

/**
 * Customer reviews and testimonials.
 *
 * HOW TO ADD A NEW REVIEW:
 * 1. Add an entry below with author, rating (1-5), text, source, and date
 * 2. Reviews appear on the homepage and /reviews/ page automatically
 * 3. JSON-LD AggregateRating is generated from these reviews for SEO
 */
export const reviews: Review[] = [
  {
    id: "review-1",
    author: "Sarah M.",
    rating: 5,
    text: "Blue Water Travel planned our entire destination wedding in Cancun. They handled guest flights, room blocks, and even special requests for our wedding party. Absolutely seamless — we couldn't have done it without them!",
    source: "Google",
    date: "2026-02-10",
    tripType: "Destination Wedding",
  },
  {
    id: "review-2",
    author: "James & Linda K.",
    rating: 5,
    text: "We've booked three cruises through Blue Water Travel over the years. They always find us the best cabin locations and often get us onboard credits we wouldn't get booking direct. True professionals.",
    source: "Facebook",
    date: "2025-12-18",
    tripType: "Ocean Cruise",
  },
  {
    id: "review-3",
    author: "The Patterson Family",
    rating: 5,
    text: "Planning a trip for 14 people across three generations seemed impossible until we called Blue Water. They found the perfect all-inclusive resort with activities for everyone from age 4 to 74.",
    source: "Direct",
    date: "2025-11-05",
    tripType: "All-Inclusive Family",
  },
  {
    id: "review-4",
    author: "Michael R.",
    rating: 5,
    text: "Our Danube river cruise was flawless. They matched us with the right ship and cabin, arranged pre-cruise hotel nights in Budapest, and gave us shore excursion recommendations that made the trip unforgettable.",
    source: "Google",
    date: "2025-09-22",
    tripType: "River Cruise",
  },
  {
    id: "review-5",
    author: "Jennifer T.",
    rating: 5,
    text: "When our flight was cancelled the day before our honeymoon, our advisor rebooked everything within hours. That's the value of having a real person in your corner. Highly recommend!",
    source: "Google",
    date: "2025-08-14",
    tripType: "Honeymoon",
  },
  {
    id: "review-6",
    author: "Robert & Diane W.",
    rating: 5,
    text: "We used to spend weeks researching vacations online. Now we just tell Blue Water what we want and they deliver options that actually fit our style and budget. Wish we'd found them sooner.",
    source: "Facebook",
    date: "2025-07-30",
    tripType: "European Vacation",
  },
];

export function getAverageRating(items: Review[] = reviews): number {
  if (items.length === 0) return 0;
  const sum = items.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / items.length) * 10) / 10;
}
