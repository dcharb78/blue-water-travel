import type { SocialPost } from "./types";

/** Recent posts from @bluewatertrvl — images saved to public/social/ */
export const socialPosts: SocialPost[] = [
  {
    id: "ig-joie-agent-highlight",
    platform: "instagram",
    url: "https://www.instagram.com/p/DbBW421xYaI/",
    embedUrl: "https://www.instagram.com/p/DbBW421xYaI/embed",
    image: "/social/ig-DbBW421xYaI.jpg",
    caption:
      "Join us in celebrating Joie Reardon for our July Agent Highlight! Joie joined us in 2025 to manage our social media and started her travel agent career in 2026.",
    date: "2026-07-21",
  },
  {
    id: "ig-hard-rock-punta-cana",
    platform: "instagram",
    url: "https://www.instagram.com/p/Daynva7pgXW/",
    embedUrl: "https://www.instagram.com/p/Daynva7pgXW/embed",
    image: "/social/ig-Daynva7pgXW.jpg",
    caption:
      "EP. 3 of Resort Reviews in the DR — Hard Rock Punta Cana is a great option for an all-inclusive family vacation, destination wedding, or friend group adventure!",
    date: "2026-07-14",
  },
  {
    id: "ig-destination-wedding-venues",
    platform: "instagram",
    url: "https://www.instagram.com/p/DasgYzbJJRD/",
    embedUrl: "https://www.instagram.com/p/DasgYzbJJRD/embed",
    image: "/social/ig-DasgYzbJJRD.jpg",
    caption:
      "Destination weddings don't always have to be on the beach! We saw venues on rooftops, in gardens, and on floating decks at the Romance Travel Forum. Your wedding, your way!",
    date: "2026-07-12",
  },
  {
    id: "ig-dreams-cap-cana",
    platform: "instagram",
    url: "https://www.instagram.com/p/Dafoadjh8ov/",
    embedUrl: "https://www.instagram.com/p/Dafoadjh8ov/embed",
    image: "/social/ig-Dafoadjh8ov.jpg",
    caption:
      "EP. 2 of Resort Reviews in the DR — Dreams Cap Cana is a great option for an all-inclusive family vacation or reunion.",
    date: "2026-07-07",
  },
  {
    id: "ig-lake-fourth-july",
    platform: "instagram",
    url: "https://www.instagram.com/p/DaaacrTTh1i/",
    embedUrl: "https://www.instagram.com/p/DaaacrTTh1i/embed",
    image: "/social/ig-DaaacrTTh1i.jpg",
    caption:
      "You don't always have to travel far to find unforgettable moments. Sometimes the best views are right here at the lake. Happy Fourth of July!",
    date: "2026-07-05",
  },
  {
    id: "ig-work-with-me",
    platform: "instagram",
    url: "https://www.instagram.com/p/DK9_WN6slv8/",
    embedUrl: "https://www.instagram.com/p/DK9_WN6slv8/embed",
    image: "/social/ig-DK9_WN6slv8.jpg",
    caption:
      "Come work with me — not just on one trip, but all trips! From proposal to wedding to honeymoon to family trips to graduation, I'm part of every journey with you.",
    date: "2025-06-16",
  },
  {
    id: "ig-travel-necessity",
    platform: "instagram",
    url: "https://www.instagram.com/p/C_oZdO4yAxU/",
    embedUrl: "https://www.instagram.com/p/C_oZdO4yAxU/embed",
    image: "/social/ig-C_oZdO4yAxU.jpg",
    caption: "Our number one necessity in life: TRAVEL ✈️",
    date: "2024-09-07",
  },
  {
    id: "ig-july-meeting",
    platform: "instagram",
    url: "https://www.instagram.com/p/Da5fR_IPeu5/",
    embedUrl: "https://www.instagram.com/p/Da5fR_IPeu5/embed",
    image: "/social/ig-Da5fR_IPeu5.jpg",
    caption: "This July Monthly Meeting is looking a little different 🥂",
    date: "2026-07-17",
  },
  {
    id: "ig-life-motto",
    platform: "instagram",
    url: "https://www.instagram.com/p/Da-tUt_RClH/",
    embedUrl: "https://www.instagram.com/p/Da-tUt_RClH/embed",
    image: "/social/ig-Da-tUt_RClH.jpg",
    caption: "A new life motto ✈️",
    date: "2026-07-19",
  },
  {
    id: "ig-making-memories",
    platform: "instagram",
    url: "https://www.instagram.com/p/DanW1u8Bbrv/",
    embedUrl: "https://www.instagram.com/p/DanW1u8Bbrv/embed",
    image: "/social/ig-DanW1u8Bbrv.jpg",
    caption: "Making memories any chance I get!",
    date: "2026-07-10",
  },
  {
    id: "ig-start-packing",
    platform: "instagram",
    url: "https://www.instagram.com/p/DaVVNuTxx03/",
    embedUrl: "https://www.instagram.com/p/DaVVNuTxx03/embed",
    image: "/social/ig-DaVVNuTxx03.jpg",
    caption: "Are you gonna pick up? Or just start packing..",
    date: "2026-07-03",
  },
  {
    id: "ig-blue-water-team",
    platform: "instagram",
    url: "https://www.instagram.com/p/DK9uPRITxvb/",
    embedUrl: "https://www.instagram.com/p/DK9uPRITxvb/embed",
    image: "/social/ig-DK9uPRITxvb.jpg",
    caption: "Blue Water Travel — curating perfect vacations for YOU.",
    date: "2025-06-16",
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
