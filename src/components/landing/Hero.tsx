"use client";

import Link from "next/link";

import { useI18n } from "@/i18n";

import { HeroDoctorSlider } from "./HeroDoctorSlider";

export function Hero() {
  const { messages } = useI18n();
  const h = messages.hero;
  return (
    <section className="relative isolate overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div
        className="pointer-events-none absolute -right-24 top-0 z-0 h-[28rem] w-[28rem] rounded-full bg-sage/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 z-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <div className="min-w-0 text-foreground">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {h.badge}
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            {h.h1a}{" "}
            <span className="text-sage">{h.h1b}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            <strong className="font-semibold text-foreground">{h.pBrand}</strong> {h.p1a}{" "}
            <strong className="font-semibold text-foreground">{h.pIbrahim}</strong> {h.p1b}{" "}
            <strong className="font-semibold text-foreground">{h.pFive}</strong> {h.p1c}{" "}
            <strong className="font-semibold text-foreground">{h.pMeet}</strong> {h.p1d}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-hover"
            >
              {h.cta1}
            </Link>
            <Link
              href="#therapists"
              className="inline-flex items-center justify-center rounded-full border border-sage/30 bg-white/80 px-6 py-3.5 text-base font-semibold text-sage transition-colors hover:border-sage/50 hover:bg-white"
            >
              {h.cta2}
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-cream-dark pt-8 sm:max-w-lg">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                {h.statFacilitators}
              </dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-foreground">
                {h.statValFacilitators}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">{h.statFormat}</dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-foreground">
                {h.statValFormat}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                {h.statPlatform}
              </dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-foreground">
                {h.statValPlatform}
              </dd>
            </div>
          </dl>
        </div>
        <HeroDoctorSlider />
      </div>
    </section>
  );
}
