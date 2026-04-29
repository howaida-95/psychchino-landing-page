"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useI18n } from "@/i18n";

const HEADER_NAV = [
  { href: "#what-i-can-help", k: "howIHelp" },
  { href: "#nice-to-meet-you", k: "aboutMe" },
  { href: "#services", k: "services" },
  { href: "#incoming-books", k: "books" },
  { href: "#approach", k: "approach" },
  { href: "#therapists", k: "therapists" },
  { href: "#stories", k: "stories" },
  { href: "#blogs", k: "blog" },
] as const;

function NavLinks({
  className,
  onNavigate,
  t,
}: {
  className?: string;
  onNavigate?: () => void;
  t: (key: string) => string;
}) {
  return (
    <>
      {HEADER_NAV.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={className}
          onClick={onNavigate}
        >
          {t(`nav.${item.k}`)}
        </Link>
      ))}
    </>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex h-5 w-6 flex-col justify-center gap-1.5" aria-hidden>
      <span
        className={`h-0.5 w-6 origin-center bg-sage transition ${
          open ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-sage transition ${open ? "scale-x-0 opacity-0" : "opacity-100"}`}
      />
      <span
        className={`h-0.5 w-6 origin-center bg-sage transition ${
          open ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function LanguageSwitch() {
  const { locale, setLocale, messages } = useI18n();
  return (
    <div
      className="inline-flex items-center overflow-hidden rounded-full border border-sage/25 bg-white/70 p-0.5 text-xs font-semibold text-sage shadow-sm"
      role="group"
      aria-label={messages.language.currentAria}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          locale === "en" ? "bg-sage text-white" : "hover:bg-sage/10"
        }`}
        aria-pressed={locale === "en"}
        lang="en"
      >
        {messages.language.en}
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          locale === "ar" ? "bg-sage text-white" : "hover:bg-sage/10"
        }`}
        aria-pressed={locale === "ar"}
        lang="ar"
      >
        {messages.language.ar}
      </button>
    </div>
  );
}

export function Header() {
  const { t, messages } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark/60 bg-background">
      <div className="relative z-40 mx-auto max-w-6xl bg-background px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 min-h-0 items-center justify-between gap-2 sm:h-[4.25rem] sm:gap-3">
          <Link
            href="/"
            className="shrink-0 font-serif text-xl font-semibold tracking-tight text-sage sm:text-2xl"
          >
            {messages.brand}
          </Link>
          <nav
            className="hidden flex-1 justify-center gap-4 md:flex lg:gap-6 xl:gap-8"
            aria-label="Primary"
          >
            <NavLinks
              t={t}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            />
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitch />
            </div>
            <Link
              href="#contact"
              className="inline-flex shrink-0 rounded-full bg-sage px-3 py-2 text-sm font-semibold text-white shadow-md shadow-sage/20 transition-colors hover:bg-sage-dark sm:px-4"
            >
              <span className="sm:hidden">{messages.header.ctaMeetShort}</span>
              <span className="hidden sm:inline">{messages.header.ctaMeet}</span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full border border-cream-dark bg-white/80 text-sage shadow-sm transition-colors hover:bg-white md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? messages.header.closeMenu : messages.header.openMenu}
            >
              <BurgerIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex h-dvh w-full min-w-0 max-w-none flex-col overflow-hidden bg-background md:hidden"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-cream-dark px-4 sm:px-6">
            <span className="font-serif text-lg font-semibold text-sage">
              {messages.header.menu}
            </span>
            <div className="flex min-w-0 items-center gap-2">
              <div className="sm:hidden">
                <LanguageSwitch />
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="shrink-0 touch-manipulation rounded-full p-2 text-lg leading-none text-muted hover:bg-cream-dark/50 hover:text-foreground"
                aria-label={messages.header.closeMenu}
              >
                ×
              </button>
            </div>
          </div>
          <nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto p-4 sm:px-6"
            aria-label="Primary mobile"
          >
            <NavLinks
              t={t}
              className="rounded-lg px-3 py-2.5 text-start text-base font-medium text-foreground hover:bg-cream-dark/50"
              onNavigate={() => setMenuOpen(false)}
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
