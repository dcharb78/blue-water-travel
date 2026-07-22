import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Request a personalized travel quote from Blue Water Travel & Cruises. Cruises, all-inclusive resorts, Europe, weddings, and group travel.",
  path: "/request-a-quote/",
  keywords: ["travel quote", "cruise quote", "vacation quote request"],
});

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd("Request a Quote", "Request a personalized travel quote", "/request-a-quote/"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Request a Quote", path: "/request-a-quote/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Request a Quote</h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Share your travel dreams and we&apos;ll put together options tailored to your dates,
            budget, and style — at no obligation.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-ocean-100 bg-white p-8 shadow-sm">
          <ContactForm formType="quote" />
        </div>
      </section>
    </>
  );
}
