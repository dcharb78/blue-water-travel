import type { Video } from "./types";

export const videos: Video[] = [
  {
    id: "hero-beach",
    title: "Blue Water Travel — Big Dreams, Better Vacations",
    url: "/gallery/hero-beach.mp4",
    thumbnail: "/gallery/hero-beach-formentera.jpg",
    description:
      "From oceans to villas, beaches to historic cities — Blue Water Travel makes it easy, seamless, and unforgettable.",
    category: "destinations",
  },
];

/** Featured video shown prominently on homepage */
export const featuredVideo = videos[0];
