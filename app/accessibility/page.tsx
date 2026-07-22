import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility",
  description: `Accessibility statement for ${siteConfig.name}.`,
  path: "/accessibility/",
});

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold text-ocean-950">Accessibility</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-ocean-700">
        <p>
          {siteConfig.name} is committed to making our website accessible to all users. We strive
          to follow WCAG 2.1 guidelines including semantic HTML, sufficient color contrast, and
          keyboard navigability.
        </p>
        <p>
          If you encounter accessibility barriers on this site, please contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-ocean-700 underline">
            {siteConfig.email}
          </a>{" "}
          and we will work to address your needs.
        </p>
      </div>
    </article>
  );
}
