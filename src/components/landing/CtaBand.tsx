"use client";

import Link from "next/link";

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
        <form
          className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch"
          action="#"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="cta-email" className="sr-only">
            {c.emailLabel}
          </label>
          <input
            id="cta-email"
            type="email"
            required
            placeholder={c.emailPh}
            className="min-h-12 flex-1 rounded-full border-0 bg-white px-5 text-foreground placeholder:text-muted/70 focus:outline-2 focus:outline-offset-2 focus:outline-white"
            dir="ltr"
          />
          <button
            type="submit"
            className="min-h-12 rounded-full bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {c.submit}
          </button>
        </form>
        <p className="mt-6 text-sm text-white/70">
          {c.p1}
          <span className="font-semibold">{c.p1Bold}</span>
        </p>
        <p className="mt-2 text-sm text-white/70">
          {c.p2Before}
          <Link
            href="mailto:hello@psychochino.com"
            className="font-semibold underline underline-offset-2"
            dir="ltr"
          >
            {c.p2LinkText}
          </Link>
          {c.p2}
        </p>
      </div>
    </section>
  );
}
