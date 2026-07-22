import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Website Policy",
  description: `Website terms and policies for ${siteConfig.name}.`,
  path: "/website-policy/",
});

export default function WebsitePolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold text-ocean-950">Website Policy</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-ocean-700">
        <p>
          Content on this website is provided for general information about {siteConfig.name} and
          our travel planning services. Prices, availability, and offers are subject to change
          without notice.
        </p>
        <p>
          {siteConfig.name} is an independent travel agency. We are not the sole source of
          information for any travel supplier featured on this site.
        </p>
      </div>
    </article>
  );
}
