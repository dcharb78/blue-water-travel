import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { blogPosts } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
  });
}

const postContent: Record<string, string[]> = {
  "why-book-with-a-travel-advisor": [
    "The internet offers unlimited options — but unlimited options can be overwhelming. A travel advisor cuts through the noise, matching you with the right trip based on how you actually travel.",
    "When flights change, storms hit, or a resort room isn't what you expected, your advisor is one call away. We rebook, advocate, and solve problems so your vacation stays on track.",
    "Many travelers assume booking direct saves money. In reality, advisors often secure equal or better pricing plus added perks — onboard credits, room upgrades, and flexible payment options.",
  ],
  "top-all-inclusive-resorts-for-families": [
    "The best family all-inclusives balance kid-friendly activities with spaces where adults can relax. We look for strong kids' clubs, varied dining, and rooms that fit your family size.",
    "Multi-generational trips need resorts with accessible layouts, varied activity levels, and connecting room options. We'll recommend properties that work for toddlers and grandparents alike.",
    "Booking through an advisor means we can request specific room locations, arrange cribs or rollaways, and coordinate group dining — details that are hard to manage on your own.",
  ],
  "planning-a-destination-wedding": [
    "Start with your guest count and budget — these two factors narrow destination options quickly. A 20-guest beach wedding has different needs than a 100-guest celebration.",
    "Choose a resort with a dedicated wedding coordinator and experience hosting destination weddings. We know which properties deliver consistently strong events.",
    "Give guests 6–9 months notice for international destinations. We set up room blocks, share travel info, and can arrange group rates on flights when available.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = postContent[slug] ?? [post.excerpt];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "Blue Water Travel & Cruises",
            },
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]),
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-sm font-semibold text-ocean-600 hover:text-ocean-800">
          ← Back to blog
        </Link>
        <time dateTime={post.date} className="mt-6 block text-sm text-ocean-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ocean-950">{post.title}</h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-ocean-700">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </article>
    </>
  );
}
