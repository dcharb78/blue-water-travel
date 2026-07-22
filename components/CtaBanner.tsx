import Link from "next/link";

type CtaBannerProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBanner({
  title = "Ready to start planning?",
  description = "Tell us about your dream trip and we'll handle every detail — from flights and accommodations to special requests and group travel.",
  primaryHref = "/request-a-quote",
  primaryLabel = "Request a Quote",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean-800 via-ocean-700 to-ocean-900 px-6 py-12 text-white shadow-2xl shadow-ocean-900/20 sm:px-10 sm:py-16">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-ocean-400/20 blur-3xl" />
      <div className="relative max-w-2xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-ocean-100">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={primaryHref}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-800 transition hover:bg-ocean-50"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
