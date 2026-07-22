import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Blue Water Travel & Cruises in Lake Lotawana, MO. Serving Kansas City, Lees Summit, Blue Springs, and travelers nationwide.",
  path: "/contact/",
  keywords: ["contact travel agent", "Kansas City travel agency contact"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd("Contact Us", "Contact Blue Water Travel & Cruises", "/contact/"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Let us know what we can do for you. We respond within one business day.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ocean-950">Get in touch</h2>
            <dl className="mt-6 space-y-4 text-ocean-700">
              <div>
                <dt className="font-semibold text-ocean-900">Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-ocean-600">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ocean-900">Phone</dt>
                <dd>
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-ocean-600">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ocean-900">Location</dt>
                <dd>
                  {siteConfig.address.city}, {siteConfig.address.state}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ocean-900">Service Area</dt>
                <dd>{siteConfig.serviceAreas.join(" · ")}</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-ocean-100 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
