import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { services } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/${service.slug}/`,
    keywords: [service.title.toLowerCase(), "travel planning", "vacation packages"],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(service.title, service.description, `/${service.slug}/`),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Types of Travel", path: "/types-of-travel/" },
            { name: service.title, path: `/${service.slug}/` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": "https://www.bluewatertravelandcruises.com/#organization" },
          },
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-200">
            Types of Travel
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">{service.shortDescription}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-ocean-700">{service.description}</p>
          <h2 className="mt-10 font-display text-2xl font-semibold text-ocean-950">
            What we handle for you
          </h2>
          <ul className="mt-4 space-y-3">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-ocean-100 bg-white px-4 py-3 text-ocean-800"
              >
                <span className="font-bold text-ocean-500">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16">
          <CtaBanner
            title={`Plan your ${service.title.toLowerCase()} with us`}
            primaryLabel="Get a Custom Quote"
          />
        </div>
      </section>
    </>
  );
}
