"use client";

import Link from "next/link";

import { useI18n } from "@/i18n";

import { SocialLinks } from "./SocialLinks";

const FOOTER_LINKS = [
  { href: "/#what-i-can-help", k: "howIHelp" },
  { href: "/#nice-to-meet-you", k: "aboutMe" },
  { href: "/#services", k: "services" },
  { href: "/#incoming-books", k: "books" },
  { href: "/#approach", k: "approach" },
  { href: "/#therapists", k: "therapists" },
  { href: "/#blogs", k: "blog" },
  { href: "/#contact", k: "contact" },
] as const;

export function Footer() {
  const { t, messages } = useI18n();
  const f = messages.footer;
  return (
    <footer className="border-t border-cream-dark bg-white/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-xl font-semibold text-sage">{messages.brand}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">{f.blurb}</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">{f.follow}</p>
          <SocialLinks />
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-muted hover:text-foreground"
                >
                  {t(`nav.${l.k}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-muted sm:text-left">
        © {new Date().getFullYear()} {messages.brand}. {f.disclaimer}
      </p>
    </footer>
  );
}
