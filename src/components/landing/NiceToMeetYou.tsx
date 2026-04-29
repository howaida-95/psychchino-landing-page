"use client";

import Image from "next/image";
import Link from "next/link";

import { useI18n } from "@/i18n";

export function NiceToMeetYou() {
  const { messages } = useI18n();
  const n = messages.niceToMeet;
  return (
    <section
      id="nice-to-meet-you"
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="nice-to-meet-you-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/4 rounded-full bg-sage/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-4xl border border-cream-dark shadow-xl shadow-sage/10 lg:mx-0 lg:max-w-none">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
            alt={n.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 42vw, 100vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-foreground/35 via-transparent to-transparent"
            aria-hidden
          />
          <p className="absolute bottom-6 left-6 right-6 font-serif text-lg font-medium text-white drop-shadow-sm">
            {n.imageCaption}
          </p>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-sage">{n.kicker}</p>
          <h2
            id="nice-to-meet-you-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {n.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{n.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{n.p2}</p>
          <ul className="mt-8 space-y-3 border-l-2 border-sage/30 pl-5">
            {n.highlights.map((line) => (
              <li key={line} className="text-sm text-foreground leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sage/20 transition-colors hover:bg-sage-dark"
            >
              {n.cta1}
            </Link>
            <Link
              href="#therapists"
              className="inline-flex items-center justify-center text-sm font-semibold text-sage underline-offset-4 hover:underline"
            >
              {n.cta2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
