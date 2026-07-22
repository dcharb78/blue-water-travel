import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { teamMembers } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Meet the Team",
  description:
    "Meet the travel advisors at Blue Water Travel & Cruises — experts in cruises, all-inclusive resorts, destination weddings, and group travel.",
  path: "/meet-the-team/",
});

export default function MeetTheTeamPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd("Meet the Team", "Meet the Blue Water Travel team", "/meet-the-team/"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Meet the Team", path: "/meet-the-team/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Meet the Team</h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Real people who listen first — then craft trips that fit how you actually want to travel.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl border border-ocean-100 bg-white p-8 text-center shadow-sm"
            >
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-ocean-100 shadow-lg">
                <Image
                  src={member.photo}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold text-ocean-950">
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-ocean-600">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-ocean-700">{member.bio}</p>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <CtaBanner
            title="Work with an advisor who knows your style"
            primaryLabel="Schedule a Consultation"
          />
        </div>
      </section>
    </>
  );
}
