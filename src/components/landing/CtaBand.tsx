"use client";

import Link from "next/link";

import { socialUrls } from "@/config/social";
import { useI18n } from "@/i18n";

export function CtaBand() {
  const { messages } = useI18n();
  const c = messages.cta;
  return (
    <section
      id="contact"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-sage px-6 py-14 text-center shadow-xl shadow-sage/20 sm:px-12 sm:py-16 lg:px-16">
        <h2
          id="cta-heading"
          className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {c.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{c.lead}</p>
        <div className="mt-10">
          <Link
            href={socialUrls.whatsapp}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.submit}
          </Link>
        </div>
        <p className="mt-6 text-sm text-white/70">
          {c.p1}
          <span className="font-semibold">{c.p1Bold}</span>
        </p>
        <p className="mt-2 text-sm text-white/70">
          {c.p2Before}
          <Link
            href={socialUrls.whatsapp}
            className="font-semibold underline underline-offset-2"
            dir="ltr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.p2LinkText}
          </Link>
          {c.p2}
        </p>
      </div>
    </section>
  );
}
