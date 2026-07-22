import type { SocialPost } from "./types";

export const socialPosts: SocialPost[] = [
  {
    id: "cabo-sandos",
    platform: "instagram",
    url: "https://www.instagram.com/bluewatertrvl/",
    image: "/social/cabo-sandos-finisterra.jpg",
    caption:
      "Join us in Cabo at Sandos Finisterra Los Cabos — an unforgettable all-inclusive escape!",
    date: "2026-03-01",
  },
  {
    id: "travel-blue",
    platform: "instagram",
    url: "https://www.instagram.com/bluewatertrvl/",
    image: "/gallery/hero-beach-formentera.jpg",
    caption: "We want you to travel blue! 🌊 Your dream vacation starts with a conversation.",
    date: "2026-02-14",
  },
  {
    id: "group-travel-host",
    platform: "instagram",
    url: "https://www.instagram.com/bluewatertrvl/",
    image: "/gallery/group-travel_orig.jpg",
    caption:
      "Become a host for group travel and you could travel for FREE! Golf groups, yoga retreats, book clubs & more.",
    date: "2025-07-14",
  },
  {
    id: "perfect-day-cococay",
    platform: "instagram",
    url: "https://www.instagram.com/bluewatertrvl/",
    image: "/gallery/perfect-day-cococay.jpg",
    caption: "5 things you need to do at Perfect Day at CocoCay — Royal Caribbean's private island!",
    date: "2024-12-04",
  },
  {
    id: "wine-country",
    platform: "facebook",
    url: "https://www.facebook.com/bluewatertvl",
    image: "/gallery/wine-country.jpeg",
    caption:
      "Santa Rosa, Sonoma, and Napa — which wine country experience is right for you? We can help you decide.",
    date: "2025-06-10",
  },
  {
    id: "voluntourism",
    platform: "facebook",
    url: "https://www.facebook.com/bluewatertvl",
    image: "/gallery/voluntourism.jpg",
    caption:
      "Our first voluntourism trip with ALGVacations and Amstar — giving back while exploring Mexico.",
    date: "2025-04-26",
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
    url: "https://www.facebook.com/bluewatertvl",
  },
  pinterest: {
    handle: "Blue Water Travel",
    url: "https://www.pinterest.com/BlueWaterTravel",
  },
} as const;
