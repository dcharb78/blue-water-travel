import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Join Our Team",
  description:
    "Join Blue Water Travel & Cruises as a travel advisor. Build a career helping clients plan unforgettable vacations.",
  path: "/join-our-team/",
});

export default function JoinTeamPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd("Join Our Team", "Career opportunities at Blue Water Travel", "/join-our-team/"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Join Our Team", path: "/join-our-team/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Join Our Team</h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Love travel and helping people? We&apos;re always interested in meeting passionate
            advisors who share our client-first approach.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6 text-lg leading-relaxed text-ocean-700">
          <p>
            {siteConfig.name} is built on relationships — with clients and with travel partners.
            We look for advisors who listen carefully, communicate clearly, and go the extra mile
            when plans change.
          </p>
          <p>
            Whether you&apos;re an experienced travel professional or transitioning from hospitality
            or sales, we provide mentorship, supplier relationships, and a supportive team
            environment.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-ocean-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean-800"
        >
          Express Your Interest
        </Link>
      </section>
    </>
  );
}
