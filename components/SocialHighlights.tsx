import Image from "next/image";
import Link from "next/link";
import { socialAccounts, socialPosts } from "@/lib/content/social";
import type { SocialPlatform } from "@/lib/content/types";

const platformLabels: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  twitter: "Twitter",
};

const platformColors: Record<SocialPlatform, string> = {
  instagram: "from-pink-500 to-purple-600",
  facebook: "from-blue-600 to-blue-800",
  twitter: "from-sky-400 to-sky-600",
};

type SocialHighlightsProps = {
  limit?: number;
  showFollowCta?: boolean;
};

export function SocialHighlights({ limit = 6, showFollowCta = true }: SocialHighlightsProps) {
  const posts = socialPosts.slice(0, limit);

  return (
    <section aria-labelledby="social-heading">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-600">
            Follow Our Journey
          </p>
          <h2 id="social-heading" className="mt-2 font-display text-3xl font-semibold text-ocean-950">
            Social Highlights
          </h2>
          <p className="mt-2 max-w-xl text-ocean-700">
            Travel inspiration, client celebrations, and behind-the-scenes from{" "}
            {socialAccounts.instagram.handle}
          </p>
        </div>
        {showFollowCta && (
          <div className="flex flex-wrap gap-3">
            <a
              href={socialAccounts.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Follow on Instagram
            </a>
            <a
              href={socialAccounts.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Like on Facebook
            </a>
          </div>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-2xl border border-ocean-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean-900/5"
          >
            {post.embedUrl ? (
              <div className="aspect-square w-full overflow-hidden bg-ocean-50">
                <iframe
                  src={post.embedUrl}
                  title={post.caption}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowTransparency
                />
              </div>
            ) : (
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-square overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span
                  className={`absolute left-3 top-3 rounded-full bg-gradient-to-r ${platformColors[post.platform]} px-3 py-1 text-xs font-semibold text-white`}
                >
                  {platformLabels[post.platform]}
                </span>
              </a>
            )}
            <div className="p-4">
              <time dateTime={post.date} className="text-xs text-ocean-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ocean-700">
                {post.caption}
              </p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-ocean-700 hover:text-ocean-900"
              >
                View on {platformLabels[post.platform]} →
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ocean-600">
        Want more? Visit our{" "}
        <Link href="/gallery" className="font-semibold text-ocean-800 underline hover:text-ocean-600">
          photo & video gallery
        </Link>
      </p>
    </section>
  );
}
