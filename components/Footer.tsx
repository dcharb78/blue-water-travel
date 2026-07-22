import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-ocean-100 bg-ocean-950 text-ocean-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-semibold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-md text-ocean-200">{siteConfig.description}</p>
          <p className="mt-4 text-sm font-medium text-ocean-300">
            Based in {siteConfig.address.city}, {siteConfig.address.state} — serving{" "}
            {siteConfig.serviceAreas.slice(1, 4).join(", ")}, and travelers nationwide.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ocean-200 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Connect
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ocean-200">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram @bluewatertrvl
              </a>
            </li>
            <li>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={siteConfig.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ocean-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-ocean-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/website-policy" className="hover:text-white">
              Website Policy
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
