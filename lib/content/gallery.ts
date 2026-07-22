import type { GalleryImage } from "./types";

/**
 * Photo gallery content.
 *
 * HOW TO ADD PHOTOS:
 * 1. Save images to public/gallery/ (recommended: 1200px wide, .jpg or .webp)
 * 2. Add an entry below with src, alt text, category, and optional caption
 * 3. Categories: all-inclusive | cruises | europe | weddings | team | destinations
 *
 * Replace placeholder SVGs with real photos when ready.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "caribbean-beach",
    src: "/gallery/caribbean.svg",
    alt: "Turquoise Caribbean waters and white sand beach at an all-inclusive resort",
    category: "all-inclusive",
    caption: "Caribbean all-inclusive paradise",
  },
  {
    id: "ocean-cruise-ship",
    src: "/gallery/cruise.svg",
    alt: "Luxury ocean cruise ship sailing through blue waters",
    category: "cruises",
    caption: "Ocean cruising at its finest",
  },
  {
    id: "river-cruise-europe",
    src: "/gallery/europe.svg",
    alt: "River cruise ship on the Danube with European castle in background",
    category: "europe",
    caption: "European river cruising",
  },
  {
    id: "destination-wedding",
    src: "/gallery/wedding.svg",
    alt: "Beachfront destination wedding ceremony at sunset",
    category: "weddings",
    caption: "Destination wedding on the beach",
  },
  {
    id: "alaska-glacier",
    src: "/gallery/alaska.svg",
    alt: "Alaska glacier and cruise ship in scenic fjord",
    category: "cruises",
    caption: "Alaska glacier cruising",
  },
  {
    id: "family-resort",
    src: "/gallery/family.svg",
    alt: "Family enjoying pool and activities at tropical resort",
    category: "all-inclusive",
    caption: "Family-friendly all-inclusive resort",
  },
  {
    id: "tuscany-landscape",
    src: "/gallery/tuscany.svg",
    alt: "Rolling hills and vineyards of Tuscany, Italy",
    category: "europe",
    caption: "Tuscany, Italy",
  },
  {
    id: "mexico-resort",
    src: "/gallery/mexico.svg",
    alt: "Luxury Mexico resort with infinity pool overlooking the ocean",
    category: "destinations",
    caption: "Mexico Pacific coast",
  },
  {
    id: "team-advisor",
    src: "/gallery/team.svg",
    alt: "Blue Water Travel advisor helping clients plan their vacation",
    category: "team",
    caption: "Your personal travel advisor",
  },
  {
    id: "honeymoon-couple",
    src: "/gallery/honeymoon.svg",
    alt: "Couple enjoying romantic sunset dinner on the beach",
    category: "weddings",
    caption: "Romantic honeymoon escape",
  },
  {
    id: "mediterranean-port",
    src: "/gallery/mediterranean.svg",
    alt: "Mediterranean cruise ship docked at colorful coastal port town",
    category: "cruises",
    caption: "Mediterranean port of call",
  },
  {
    id: "group-travel",
    src: "/gallery/group.svg",
    alt: "Large group of travelers celebrating together on vacation",
    category: "destinations",
    caption: "Group travel made easy",
  },
];

export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "all-inclusive", label: "All-Inclusive" },
  { id: "cruises", label: "Cruises" },
  { id: "europe", label: "Europe" },
  { id: "weddings", label: "Weddings" },
  { id: "destinations", label: "Destinations" },
  { id: "team", label: "Team" },
] as const;
