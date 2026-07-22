import type { Metadata } from "next";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { facebookPageStats } from "@/lib/content/reviews";
import { buildMetadata, breadcrumbJsonLd, reviewsJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Client Reviews & Testimonials",
  description:
    "Read reviews from Blue Water Travel & Cruises clients — destination weddings, cruises, all-inclusive resorts, and European vacations.",
  path: "/reviews/",
  keywords: ["travel agent reviews", "Blue Water Travel reviews", "travel testimonials"],
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={[
          reviewsJsonLd(),
          webPageJsonLd(
            "Client Reviews",
            "Customer reviews and testimonials for Blue Water Travel",
            "/reviews/"
          ),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            Client Reviews
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Real stories from travelers who trusted us with their dream vacations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Testimonials showSummary />

        <aside className="mx-auto mt-12 max-w-2xl rounded-2xl border border-ocean-100 bg-ocean-50 p-6 text-center">
          <p className="text-sm leading-relaxed text-ocean-700">
            Blue Water Travel has a{" "}
            <strong>{facebookPageStats.recommendPercent}% recommendation rate</strong> on Facebook
            ({facebookPageStats.totalReviews} reviews). Most Facebook recommendations require a
            login to view — we&apos;ve imported all publicly accessible reviews here.{" "}
            <Link
              href={facebookPageStats.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ocean-800 underline hover:text-ocean-600"
            >
              See all on Facebook →
            </Link>
          </p>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <CtaBanner
          title="Ready to create your own travel story?"
          primaryLabel="Request a Quote"
        />
      </section>
    </>
  );
}
