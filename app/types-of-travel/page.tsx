import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Types of Travel",
  description:
    "Explore all-inclusive resorts, ocean cruises, river cruises, and land packages planned by Blue Water Travel & Cruises.",
  path: "/types-of-travel/",
  keywords: ["all inclusive vacations", "cruise packages", "river cruises", "guided tours"],
});

export default function TypesOfTravelPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd("Types of Travel", "Travel services offered by Blue Water Travel", "/types-of-travel/"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Types of Travel", path: "/types-of-travel/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Types of Travel</h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Every traveler is different. We specialize in four core travel styles — each planned
            with the same personal attention {siteConfig.shortName} is known for.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl border border-ocean-100 bg-white p-8 shadow-sm"
            >
              <span className="text-4xl" aria-hidden="true">
                {service.icon}
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ocean-950">
                {service.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ocean-700">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-ocean-700">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-ocean-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${service.slug}`}
                className="mt-6 inline-flex font-semibold text-ocean-700 hover:text-ocean-900"
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <CtaBanner />
        </div>
      </section>
    </>
  );
}
