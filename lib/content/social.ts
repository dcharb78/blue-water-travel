import type { SocialPost } from "./types";

/**
 * Curated social media highlights.
 *
 * HOW TO ADD A NEW POST:
 * 1. Save the post image to public/social/ (e.g. public/social/cabo-2026.jpg)
 * 2. Add an entry below with the post URL from Instagram or Facebook
 * 3. Optional: add embedUrl for live iframe embed (Instagram: .../p/ID/embed)
 *
 * For auto-syncing feeds later, consider Elfsight, Curator.io, or a Cloudflare Worker.
 */
export const socialPosts: SocialPost[] = [
  {
    id: "cabo-sandos",
    platform: "instagram",
    url: "https://www.instagram.com/bluewatertrvl/",
    image: "/gallery/caribbean.svg",
    caption:
      "Join us in Cabo at Sandos Finisterra Los Cabos — an unforgettable all-inclusive escape!",
    date: "2026-03-01",
  },
  {
    id: "travel-blue",
    platform: "instagram",
    url: "https://www.instagram.com/bluewatertrvl/",
    image: "/gallery/cruise.svg",
    caption: "We want you to travel blue! 🌊 Your dream vacation starts with a conversation.",
    date: "2026-02-14",
  },
  {
    id: "europe-river",
    platform: "instagram",
    url: "https://www.instagram.com/bluewatertrvl/",
    image: "/gallery/europe.svg",
    caption: "River cruising through Europe — intimate ships, stunning ports, zero stress.",
    date: "2026-01-20",
  },
  {
    id: "wedding-destination",
    platform: "facebook",
    url: "https://www.facebook.com/bluewatertrvl",
    image: "/gallery/wedding.svg",
    caption: "Say 'I do' in paradise. We handle guest travel, room blocks, and every detail.",
    date: "2025-12-05",
  },
  {
    id: "alaska-cruise",
    platform: "instagram",
    url: "https://www.instagram.com/bluewatertrvl/",
    image: "/gallery/alaska.svg",
    caption: "Alaska glacier cruising season is here — let's find your perfect sailing.",
    date: "2025-11-10",
  },
  {
    id: "family-resort",
    platform: "facebook",
    url: "https://www.facebook.com/bluewatertrvl",
    image: "/gallery/family.svg",
    caption: "Multi-generational trips made easy. Resorts the whole family will love.",
    date: "2025-10-22",
  },
];

export const socialAccounts = {
  instagram: {
    handle: "@bluewatertrvl",
    url: "https://www.instagram.com/bluewatertrvl",
    embedProfileUrl: "https://www.instagram.com/bluewatertrvl/embed",
  },
  facebook: {
    handle: "Blue Water Travel",
    url: "https://www.facebook.com/bluewatertrvl",
  },
} as const;
