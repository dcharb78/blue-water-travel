import type { MetadataRoute } from "next";
import { blogPosts, services, siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "about",
    "contact",
    "request-a-quote",
    "types-of-travel",
    "weddings-honeymoons",
    "meet-the-team",
    "join-our-team",
    "gallery",
    "reviews",
    "privacy-policy",
    "website-policy",
    "accessibility",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}/${path}${path ? "/" : ""}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${base}/${service.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
