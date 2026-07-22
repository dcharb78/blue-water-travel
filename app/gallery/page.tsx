import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SocialHighlights } from "@/components/SocialHighlights";
import { VideoGallery } from "@/components/VideoGallery";
import { JsonLd } from "@/components/JsonLd";
import { CtaBanner } from "@/components/CtaBanner";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { featuredVideo } from "@/lib/content/videos";

export const metadata: Metadata = buildMetadata({
  title: "Photo & Video Gallery",
  description:
    "Browse destination photos, travel videos, and social highlights from Blue Water Travel & Cruises — cruises, all-inclusive resorts, weddings, and more.",
  path: "/gallery/",
  keywords: ["travel photos", "destination gallery", "cruise videos", "travel inspiration"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            "Photo & Video Gallery",
            "Destination photos and travel videos from Blue Water Travel",
            "/gallery/"
          ),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            Photo & Video Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Destination inspiration, client celebrations, and travel moments from the Blue Water
            team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-display text-2xl font-semibold text-ocean-950">Photos</h2>
        <PhotoGallery />
      </section>

      <section className="border-t border-ocean-100 bg-ocean-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-semibold text-ocean-950">Videos</h2>
          <VideoGallery featured={featuredVideo} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SocialHighlights limit={3} showFollowCta />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <CtaBanner />
      </section>
    </>
  );
}
