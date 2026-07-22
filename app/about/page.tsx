import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Blue Water Travel & Cruises — 30+ years of personalized vacation planning for cruises, all-inclusive resorts, Europe, and destination weddings.",
  path: "/about/",
  keywords: ["about blue water travel", "Missouri travel agency", "Kansas City travel agent"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd("About Us", siteConfig.description, "/about/"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            About {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Every journey should be seamless, stress-free, and unforgettable.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ocean-700">
          <p>
            At Blue Water Travel, we believe that every journey should be seamless, stress-free,
            and unforgettable. With over {siteConfig.yearsExperience} years of experience in the
            travel industry, we specialize in crafting personalized vacations that cater to your
            unique interests and dreams.
          </p>
          <p>
            Whether you&apos;re looking for an all-inclusive escape to the Caribbean, a European
            adventure, a river cruise through scenic landscapes, or the perfect destination
            wedding, we&apos;re here to handle every detail.
          </p>
          <p>
            Our team works closely with top travel partners to ensure you receive the best options
            and pricing available. From securing ideal flights and accommodations to arranging
            upgrades and special requests, we take care of everything so you can focus on making
            memories.
          </p>
          <p className="rounded-2xl border border-ocean-200 bg-ocean-50 px-6 py-4 font-medium italic text-ocean-800">
            &ldquo;Without a travel agent, you are on your own.&rdquo;
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["Destination Weddings", "Honeymoons", "Multi-Generation Family"],
            ["All Inclusive", "Social Groups", "Ocean & River Cruises"],
            ["European Vacations", "Weekend Getaways", "Trips Within the USA"],
          ].map((column, i) => (
            <div key={i} className="space-y-3">
              {column.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-ocean-100 bg-white px-4 py-3 text-center font-medium text-ocean-800"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-16">
          <CtaBanner title="Let's start planning today" />
        </div>
      </section>
    </>
  );
}
