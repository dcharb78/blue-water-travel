import type { Review } from "./types";

/**
 * Public Facebook recommendations for Blue Water Travel (@bluewatertvl).
 * Facebook reports 96% recommend (16 reviews); only publicly visible text is included here.
 * No indexed Google Business Profile reviews were found for this agency.
 */
export const reviews: Review[] = [
  {
    id: "facebook-denise-tabb-cancun",
    author: "Denise T.",
    rating: 5,
    text: "Terri planned our Cancun trip for 18 people. Kept us all organized and had all the answers! She was able to work with the resort to add my daughter almost last minute for a great rate. Her knowledge, expertise and willingness to help made this one of the best trips my family has ever had! 1000% recommend this team!",
    source: "Facebook",
    date: "2025-09-16",
    tripType: "Group Travel · Cancun",
  },
];

export function getAverageRating(items: Review[] = reviews): number {
  if (items.length === 0) return 0;
  const sum = items.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / items.length) * 10) / 10;
}
