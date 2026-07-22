import type { Review } from "./types";

/**
 * Facebook recommendations for Blue Water Travel (@bluewatertvl).
 * Facebook reports 96% recommend (16 reviews); imported from logged-in scrape.
 */
export const facebookPageStats = {
  recommendPercent: 96,
  totalReviews: 16,
  url: "https://www.facebook.com/bluewatertvl/reviews",
} as const;

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
  {
    id: "facebook-jo-waring-rittermeyer-europe",
    author: "Jo Waring R.",
    rating: 5,
    text: "I highly recommend Blue Water Travel. Just returned from Europe. Terri's planning was perfect. All of our flights went through without a hitch. No long layovers, able to get through customs, no delays or missed connections. The boutique hotel in old town Zurich was perfectly located to walk and see all Zurich had to offer. She was quick to respond to questions about getting cheese through customs!! Also encouraged us to get TSA precheck, which was invaluable!",
    source: "Facebook",
    date: "2024-09-01",
    tripType: "Europe",
  },
  {
    id: "facebook-jennifer-epperson-mexico",
    author: "Jennifer E.",
    rating: 5,
    text: "What an awesome trip, thank you Terri and Blue Water Travel! We had a great time on our vacation to Mexico! We stayed at The Fives Resort in Playa Del Carmen. Beautiful inclusive resort! Terri took care of everything from beginning to end when it came to our airline tickets, our airport transfers, all of the arrangements and inclusivity at the resort, and was willing and able to book any of the excursions or trips that my family may have wanted to go on! We sincerely appreciate Terri's help, and I will definitely be using Terri in the future, and look forward to many many more memories made with my family!",
    source: "Facebook",
    date: "2024-08-01",
    tripType: "All-Inclusive · Mexico",
  },
  {
    id: "facebook-mandy-ames",
    author: "Mandy A.",
    rating: 5,
    text: "We love working with Terri! She always does an amazing job for us and always there to answer my many questions!!! Thank you Terri for always being amazing!",
    source: "Facebook",
    date: "2025-01-01",
    tripType: "Repeat Client",
  },
  {
    id: "facebook-kim-brown-woods-costa-mujeres",
    author: "Kim B. W.",
    rating: 5,
    text: "We were looking online for travel ideas and got frustrated by the confusing pricing as it changed once we clicked through to look at options. I emailed Terri and received a list of amazing options with great pricing super fast. We booked the next day and had a wonderful trip to Majestic Excellence in Costa Mujeres. She took care of every detail and we didn't have any issues on our trip.",
    source: "Facebook",
    date: "2024-06-01",
    tripType: "All-Inclusive · Costa Mujeres",
  },
  {
    id: "facebook-rene-brunetti-cancun",
    author: "Rene B.",
    rating: 5,
    text: "Blue Water Travel made booking our Cancun trip easy and convenient. Thank you for helping us with our incredible trip!",
    source: "Facebook",
    date: "2024-05-01",
    tripType: "Cancun",
  },
  {
    id: "facebook-sarah-smith-gravlin-cruise",
    author: "Sarah S. G.",
    rating: 5,
    text: "This is our second time booking with Blue Water Travel — we just returned from a family Christmas cruise! The booking process was simple, and we enjoyed our trip. Don't hesitate to use a travel advisor, especially Blue Water. It makes traveling a breeze.",
    source: "Facebook",
    date: "2024-01-01",
    tripType: "Ocean Cruise · Christmas",
  },
  {
    id: "facebook-dennis-mckee-mexico",
    author: "Dennis M.",
    rating: 5,
    text: "Terri handled our trip to Mexico for 19 of my family great, planning another trip next month. Thanks Terri!",
    source: "Facebook",
    date: "2024-01-01",
    tripType: "Group Travel · Mexico",
  },
  {
    id: "facebook-janine-korgie-cancun",
    author: "Janine K.",
    rating: 5,
    text: "Just returned from our Cancun vacation and LOVED it! It was our 1st time using Terri Jobe and Blue Water Travel and we were very pleased with her services. Highly recommend!",
    source: "Facebook",
    date: "2023-04-01",
    tripType: "Cancun",
  },
  {
    id: "facebook-teri-steuber-akins-cozumel",
    author: "Teri S-A.",
    rating: 5,
    text: "Just returned from Cozumel and once again Terri Jobe and Blue Water Travel hit it out of the park for our family! It was a most amazing trip and even when the airlines kept messing things up, Terri stayed on top of it all and got us there and back. Already booked with her for a Christmas trip, like we have for many years, and in the planning stages for more trips in 2023!!",
    source: "Facebook",
    date: "2023-01-01",
    tripType: "Cozumel · Repeat Client",
  },
  {
    id: "facebook-heather-blankenship",
    author: "Heather B.",
    rating: 5,
    text: "Top notch service. Travel knowledge above and beyond. You will not be disappointed!",
    source: "Facebook",
    date: "2023-01-01",
    tripType: "Repeat Client",
  },
];

/** Informal praise from Facebook post comments — kept separate from formal recommendations */
export const facebookCommentReviews: Review[] = [];

export const allDisplayReviews: Review[] = [...reviews, ...facebookCommentReviews];

/** Only rated formal reviews — used for aggregate rating / JSON-LD */
export function getRatedReviews(items: Review[] = reviews): Review[] {
  return items.filter((r): r is Review & { rating: 1 | 2 | 3 | 4 | 5 } => r.rating != null);
}

export function getAverageRating(items: Review[] = reviews): number {
  const rated = getRatedReviews(items);
  if (rated.length === 0) return 0;
  const sum = rated.reduce((acc, r) => acc + (r.rating ?? 0), 0);
  return Math.round((sum / rated.length) * 10) / 10;
}
