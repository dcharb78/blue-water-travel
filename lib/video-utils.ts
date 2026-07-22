export type VideoProvider = "youtube" | "vimeo" | "local" | "unknown";

export function parseVideoUrl(url: string): {
  provider: VideoProvider;
  embedUrl: string;
  thumbnailUrl: string;
} {
  if (url.endsWith(".mp4") || url.startsWith("/")) {
    return { provider: "local", embedUrl: url, thumbnailUrl: "" };
  }

  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch) {
    const id = youtubeMatch[1];
    return {
      provider: "youtube",
      embedUrl: `https://www.youtube.com/embed/${id}`,
      thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    };
  }

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    const id = vimeoMatch[1];
    return {
      provider: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${id}`,
      thumbnailUrl: "",
    };
  }

  return { provider: "unknown", embedUrl: url, thumbnailUrl: "" };
}
