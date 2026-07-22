import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Weddings & Honeymoons",
  description:
    "Plan your destination wedding or honeymoon with Blue Water Travel. Guest travel, room blocks, group rates, and romantic getaways worldwide.",
  path: "/weddings-honeymoons/",
  keywords: ["destination wedding", "honeymoon planning", "wedding travel agent"],
});

export default function WeddingsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            "Weddings & Honeymoons",
            "Destination wedding and honeymoon planning services",
            "/weddings-honeymoons/"
          ),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Weddings & Honeymoons", path: "/weddings-honeymoons/" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Destination Wedding & Honeymoon Planning",
            description:
              "Full-service destination wedding and honeymoon coordination including guest travel and room blocks.",
            provider: { "@id": "https://www.bluewatertravelandcruises.com/#organization" },
          },
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            Weddings & Honeymoons
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Your celebration deserves a setting as special as your love story. We handle the travel
            details so you can focus on saying &ldquo;I do.&rdquo;
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ocean-700">
          <p>
            Planning a destination wedding or honeymoon is exciting — and complex. Blue Water Travel
            coordinates every travel detail: resort selection, room blocks, group rates, guest
            flights, transfers, and special experiences for your wedding party and guests.
          </p>
          <p>
            We work with top resorts and cruise lines across the Caribbean, Mexico, Hawaii, Europe,
            and beyond. Whether you envision an intimate beach ceremony or a grand celebration with
            extended family, we make it seamless.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Resort & venue selection",
            "Guest room blocks",
            "Group airfare coordination",
            "Honeymoon planning",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-ocean-100 bg-white p-5 text-center font-medium text-ocean-800"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-16">
          <CtaBanner
            title="Start planning your destination wedding"
            description="Schedule a complimentary consultation to discuss your vision, guest count, and preferred destinations."
            primaryLabel="Request Wedding Consultation"
          />
        </div>
      </section>
    </>
  );
}
