"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Certifications", href: "/certifications" },
  { label: "Clients", href: "/clients" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-medium text-navy-900">
          Baliga
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-navy-700 transition hover:text-navy-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-800"
          >
            Get a quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-100 text-navy-900 md:hidden"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-navy-100 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-navy-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-navy-900 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Get a quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}