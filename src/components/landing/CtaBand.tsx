"use client";

import Link from "next/link";

export function CtaBand() {
  return (
    <section
      id="contact"
      className="px-4 pb-20 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-sage px-6 py-14 text-center shadow-xl shadow-sage/20 sm:px-12 sm:py-16 lg:px-16">
        <h2
          id="cta-heading"
          className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Ready for a conversation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          Leave your email and a short note—we will respond within one business day
          with next steps. No spam, ever.
        </p>
        <form
          className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch"
          action="#"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="cta-email" className="sr-only">
            Email
          </label>
          <input
            id="cta-email"
            type="email"
            required
            placeholder="you@example.com"
            className="min-h-12 flex-1 rounded-full border-0 bg-white px-5 text-foreground placeholder:text-muted/70 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
          />
          <button
            type="submit"
            className="min-h-12 rounded-full bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </button>
        </form>
        <p className="mt-6 text-sm text-white/70">
          Prefer to talk?{" "}
          <Link href="tel:+15555551212" className="font-semibold underline underline-offset-2">
            Call (555) 555-1212
          </Link>
        </p>
      </div>
    </section>
  );
}
