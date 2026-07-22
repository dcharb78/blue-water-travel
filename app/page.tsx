import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SocialHighlights } from "@/components/SocialHighlights";
import { Testimonials } from "@/components/Testimonials";
import { VideoGallery } from "@/components/VideoGallery";
import { faqJsonLd, reviewsJsonLd } from "@/lib/seo";
import { faqs, services, siteConfig } from "@/lib/site-config";
import { featuredVideo } from "@/lib/content/videos";
import { galleryImages } from "@/lib/content/gallery";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqJsonLd(faqs), reviewsJsonLd()]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ocean-950 via-ocean-800 to-ocean-600 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_45%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean-200">
            {siteConfig.slogan}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ocean-100 sm:text-xl">
            Personalized cruises, all-inclusive escapes, European adventures, and destination
            weddings — planned for you by travel experts with {siteConfig.yearsExperience}+ years
            of experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/request-a-quote"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-800 transition hover:bg-ocean-50"
            >
              Request a Quote
            </Link>
            <Link
              href="/types-of-travel"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Travel Types
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ocean-950 sm:text-4xl">
            Great vacations start with understanding you
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ocean-700">
            At Blue Water Travel, we listen carefully, then lean on our trusted industry network
            to plan every detail just right. From oceans to villas, beaches to historic cities —
            we make it easy, seamless, and unforgettable.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">
                Types of Travel
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ocean-950">
                Where will you go next?
              </h2>
            </div>
            <Link href="/types-of-travel" className="font-semibold text-ocean-700 hover:text-ocean-900">
              View all travel types →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group rounded-2xl border border-ocean-100 bg-sand-50 p-6 transition hover:-translate-y-1 hover:border-ocean-200 hover:shadow-xl hover:shadow-ocean-900/5"
              >
                <span className="text-3xl" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ocean-950 group-hover:text-ocean-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ocean-700">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">
              Celebrations & Groups
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ocean-950">
              Destination weddings, honeymoons & family reunions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ocean-700">
              Planning a milestone trip for your whole group? We coordinate guest travel, room
              blocks, group rates, and special experiences — so you can focus on celebrating.
            </p>
            <Link
              href="/weddings-honeymoons"
              className="mt-6 inline-flex font-semibold text-ocean-700 hover:text-ocean-900"
            >
              Learn about weddings & honeymoons →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Destination Weddings",
              "Honeymoons",
              "Multi-Generation Family",
              "Social Groups",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-ocean-100 bg-white p-5 text-center font-medium text-ocean-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-ocean-100 bg-ocean-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="font-display text-4xl font-semibold text-ocean-800">
                {siteConfig.yearsExperience}+
              </p>
              <p className="mt-2 text-ocean-700">Years of travel expertise</p>
            </div>
            <div>
              <p className="font-display text-4xl font-semibold text-ocean-800">Personal</p>
              <p className="mt-2 text-ocean-700">Itineraries built around you</p>
            </div>
            <div>
              <p className="font-display text-4xl font-semibold text-ocean-800">Nationwide</p>
              <p className="mt-2 text-ocean-700">Serving travelers across the USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Testimonials limit={3} />
        <p className="mt-8 text-center">
          <Link href="/reviews" className="font-semibold text-ocean-700 hover:text-ocean-900">
            Read all client reviews →
          </Link>
        </p>
      </section>

      {/* Photo Gallery Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">
                Destinations
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ocean-950">
                Travel Inspiration
              </h2>
            </div>
            <Link href="/gallery" className="font-semibold text-ocean-700 hover:text-ocean-900">
              View full gallery →
            </Link>
          </div>
          <PhotoGallery images={galleryImages.slice(0, 6)} showFilters={false} columns={3} />
        </div>
      </section>

      {/* Featured Video */}
      <section className="border-y border-ocean-100 bg-ocean-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">
              Watch & Explore
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ocean-950">
              See How We Plan Your Trip
            </h2>
          </div>
          <VideoGallery items={[featuredVideo]} featured={featuredVideo} />
        </div>
      </section>

      {/* Social Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SocialHighlights limit={3} />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-semibold text-ocean-950">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-ocean-100 bg-white p-6"
              >
                <summary className="cursor-pointer list-none font-semibold text-ocean-900 marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-relaxed text-ocean-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <CtaBanner />
      </section>
    </>
  );
}
