import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold text-ocean-950">Privacy Policy</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-ocean-700">
        <p>
          {siteConfig.name} respects your privacy. Information you provide through our contact forms
          is used solely to respond to your inquiries and plan your travel.
        </p>
        <p>
          We do not sell personal information to third parties. Travel booking data may be shared
          with suppliers (airlines, hotels, cruise lines) as necessary to fulfill your reservations.
        </p>
        <p>
          For questions about this policy, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-ocean-700 underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
