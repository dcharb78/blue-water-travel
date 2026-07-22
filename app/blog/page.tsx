import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import { blogPosts } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Travel Blog",
  description:
    "Travel tips, destination guides, and advice from Blue Water Travel & Cruises — your Missouri-based travel experts.",
  path: "/blog/",
  keywords: ["travel blog", "vacation tips", "cruise advice"],
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd("Travel Blog", "Travel tips and advice from Blue Water Travel", "/blog/"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
          ]),
        ]}
      />
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Travel Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-ocean-100">
            Tips, guides, and inspiration from our travel advisors.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-ocean-100 bg-white p-6 shadow-sm"
            >
              <time dateTime={post.date} className="text-sm text-ocean-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-3 font-display text-xl font-semibold text-ocean-950">
                <Link href={`/blog/${post.slug}`} className="hover:text-ocean-700">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ocean-700">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-ocean-700 hover:text-ocean-900"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
