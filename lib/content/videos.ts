import type { Video } from "./types";

/**
 * Video content (YouTube or Vimeo embeds).
 *
 * HOW TO ADD A VIDEO:
 * 1. Upload to YouTube or Vimeo
 * 2. Copy the full video URL and add an entry below
 * 3. Optional: add a custom thumbnail path in public/gallery/
 *
 * Supported URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://vimeo.com/VIDEO_ID
 */
export const videos: Video[] = [
  {
    id: "welcome-bwt",
    title: "Welcome to Blue Water Travel & Cruises",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:
      "Discover how Blue Water Travel creates personalized vacations — from cruises and all-inclusive resorts to destination weddings.",
    category: "destinations",
  },
  {
    id: "cruise-planning",
    title: "How We Plan Your Perfect Cruise",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:
      "See how our cruise specialists match you with the right ship, itinerary, and cabin — plus exclusive perks.",
    category: "cruises",
  },
  {
    id: "destination-wedding",
    title: "Destination Wedding Planning Guide",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:
      "Everything you need to know about planning a destination wedding — from resort selection to guest travel coordination.",
    category: "weddings",
  },
];

/** Featured video shown prominently on homepage */
export const featuredVideo = videos[0];
