"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig, navLinks, ctaLinks } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ocean-100/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ocean-500 to-ocean-800 text-lg font-bold text-white shadow-lg shadow-ocean-500/25">
            BW
          </div>
          <div>
            <p className="font-display text-lg font-semibold leading-tight text-ocean-950">
              {siteConfig.shortName}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ocean-600">
              & Cruises
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-ocean-900 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) =>
            "children" in link ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="transition-colors hover:text-ocean-600"
                >
                  {link.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-2 rounded-xl border border-ocean-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-ocean-800 hover:bg-ocean-50 hover:text-ocean-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ocean-600"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {ctaLinks.map((cta) =>
            cta.external ? (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ocean-200 px-4 py-2 text-sm font-semibold text-ocean-800 transition hover:border-ocean-400 hover:bg-ocean-50"
              >
                {cta.label}
              </a>
            ) : (
              <Link
                key={cta.href}
                href={cta.href}
                className={
                  cta.primary
                    ? "rounded-full bg-ocean-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-ocean-700/20 transition hover:bg-ocean-800"
                    : "rounded-full border border-ocean-200 px-4 py-2 text-sm font-semibold text-ocean-800 transition hover:border-ocean-400 hover:bg-ocean-50"
                }
              >
                {cta.label}
              </Link>
            )
          )}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ocean-800 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-ocean-100 bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 font-medium text-ocean-900 hover:bg-ocean-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {"children" in link && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-ocean-700 hover:bg-ocean-50"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {ctaLinks.map((cta) => (
              <li key={cta.href}>
                {cta.external ? (
                  <a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-3 py-2 font-medium text-ocean-700 hover:bg-ocean-50"
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    href={cta.href}
                    className="block rounded-lg px-3 py-2 font-medium text-ocean-700 hover:bg-ocean-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {cta.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
