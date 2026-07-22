export type SocialPlatform = "instagram" | "facebook" | "twitter";

export type SocialPost = {
  id: string;
  platform: SocialPlatform;
  /** Link to the original post */
  url: string;
  /** Optional Instagram/Facebook embed iframe URL */
  embedUrl?: string;
  /** Image path in /public or external URL — save Instagram photos to public/social/ */
  image: string;
  caption: string;
  date: string;
};

export type Review = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source: "Google" | "Facebook" | "TripAdvisor" | "Direct";
  date: string;
  tripType?: string;
};

export type GalleryCategory =
  | "all-inclusive"
  | "cruises"
  | "europe"
  | "weddings"
  | "team"
  | "destinations";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption?: string;
};

export type Video = {
  id: string;
  title: string;
  /** Full YouTube, Vimeo, or local video URL */
  url: string;
  thumbnail?: string;
  description?: string;
  category?: GalleryCategory;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};
