"use client";

import Image from "next/image";

import { useI18n } from "@/i18n";

/**
 * Hand-placed cloud: two staggered columns + vertical rhythm so pills do not overlap.
 * Small rotations only (keeps bounding boxes from colliding). Stable for SSR/hydration.
 */
const tagCloudLayout: readonly { left: string; top: string; rotate: number }[] = [
  { left: "0%", top: "0%", rotate: -0.45 },
  { left: "52%", top: "1%", rotate: 0.35 },
  { left: "4%", top: "12%", rotate: 0.4 },
  { left: "50%", top: "13%", rotate: -0.35 },
  { left: "0%", top: "25%", rotate: -0.3 },
  { left: "52%", top: "26%", rotate: 0.45 },
  { left: "6%", top: "38%", rotate: 0.35 },
  { left: "48%", top: "39%", rotate: -0.4 },
  { left: "2%", top: "51%", rotate: -0.25 },
  { left: "46%", top: "52%", rotate: 0.3 },
];

/** Teal leaf / network mark for center badge */
function PsychochinoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M22 8c-6 7-10 14-10 21a5 5 0 0010 0c0-7-4-14-10-21Z"
        fill="currentColor"
        opacity={0.9}
      />
      <path
        d="M22 12c4 6 7 12 7 19a3.5 3.5 0 01-7 0c0-7 3-13 7-19Z"
        fill="currentColor"
        opacity={0.45}
      />
      <circle cx="22" cy="14" r="2" fill="currentColor" opacity={0.55} />
      <circle cx="16" cy="22" r="1.5" fill="currentColor" opacity={0.45} />
      <circle cx="28" cy="22" r="1.5" fill="currentColor" opacity={0.45} />
      <path
        d="M22 36V26"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        opacity={0.85}
      />
    </svg>
  );
}

function HandDrawnArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14 12C38 28 52 58 48 88c-2 14-12 26-28 34"
        stroke="currentColor"
        strokeWidth={1.15}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
      />
      <path
        d="M22 118 L12 122 14 110"
        stroke="currentColor"
        strokeWidth={1.15}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
      />
    </svg>
  );
}

export function WhatICanHelpWith() {
  const { messages } = useI18n();
  const tags = messages.tagCloud;
  const w = messages.whatHelp;
  return (
    <section
      id="what-i-can-help"
      className="relative overflow-hidden border-t border-cream-dark bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="what-i-can-help-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-144 w-xl rounded-full bg-cream-dark/50 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl px-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700/90">
            <span className="border-b border-teal-600/70 pb-1.5">{w.services}</span>
          </p>
          <h2
            id="what-i-can-help-heading"
            className="mt-6 font-sans text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.45rem] lg:leading-[1.15]"
          >
            {w.heading}
          </h2>
        </header>

        {/* Three equal columns (lg+): tags | images | copy */}
        <div className="mt-16 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-3 lg:items-start lg:gap-6 lg:gap-y-0 xl:gap-8">
          {/* Column 1: arrow + keyword cloud */}
          <div className="relative min-w-0 w-full lg:pt-4">
            <HandDrawnArrow className="absolute -left-2 -top-6 z-10 h-28 w-24 text-neutral-400/45 sm:-left-4 sm:-top-8 sm:h-32 sm:w-28" />
            <ul
              className="relative isolate mx-auto mt-2 min-h-[22rem] w-full max-w-[22rem] list-none pb-8 pl-9 pr-1 sm:min-h-[24rem] sm:max-w-none sm:pl-12 sm:pr-2 lg:min-h-[26rem]"
              role="list"
              aria-label={w.areasLabel}
            >
              {tags.map((label, i) => {
                const pos = tagCloudLayout[i] ?? {
                  left: "0%",
                  top: `${i * 10}%`,
                  rotate: 0,
                };
                return (
                  <li
                    key={label}
                    className="absolute max-w-[46%] sm:max-w-[48%]"
                    role="listitem"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: `rotate(${pos.rotate}deg)`,
                    }}
                  >
                    <span className="inline-block max-w-full rounded-2xl border border-[#e3dcd0]/80 bg-[#f3ece3]/85 px-3 py-1.5 text-center text-xs font-medium leading-snug text-[#5c564c] shadow-[0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[2px] sm:rounded-full sm:px-3.5 sm:py-2 sm:text-sm sm:leading-normal">
                      {label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2: overlapping images */}
          <div className="relative flex min-w-0 w-full justify-center">
            <div className="relative w-full max-w-[280px] lg:max-w-full lg:px-1">
              <div className="relative z-10 ml-auto w-[92%] overflow-hidden rounded-3xl shadow-[0_18px_40px_-12px_rgba(30,45,38,0.18)] ring-1 ring-black/5">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=720&q=80"
                    alt={w.img1Alt}
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(min-width: 1024px) 33vw, 90vw"
                  />
                </div>
              </div>
              <div className="relative z-20 mt-[-30%] mr-auto w-[92%] overflow-hidden rounded-3xl border-[5px] border-background shadow-[0_20px_44px_-14px_rgba(30,45,38,0.22)] ring-1 ring-black/5 sm:mt-[-32%]">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=720&q=80"
                    alt={w.img2Alt}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 33vw, 90vw"
                  />
                </div>
              </div>
              <div
                className="absolute left-1/2 top-[38%] z-30 flex h-19 w-19 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8e2d8] bg-white shadow-[0_10px_30px_-8px_rgba(15,118,110,0.25)] sm:h-20 sm:w-20"
                aria-hidden
              >
                <PsychochinoMark className="h-10 w-10 text-teal-700 sm:h-11 sm:w-11" />
              </div>
            </div>
          </div>

          {/* Column 3: copy + pull quote */}
          <div className="min-w-0 w-full lg:pt-2">
            <div className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <div className="space-y-5 font-sans text-[1.02rem] leading-[1.7] text-neutral-600 sm:text-[1.06rem]">
                <p>
                  <strong className="font-semibold text-neutral-800">{w.p1a}</strong>
                  {w.p1b} <strong className="font-semibold text-neutral-800">{w.p1c}</strong>
                  {w.p1d}
                </p>
                <p>{w.p2}</p>
                <p>{w.p3}</p>
              </div>

              <figure className="relative mt-11">
                <span
                  className="pointer-events-none absolute -left-1 -top-2 font-serif text-[4.5rem] leading-none text-neutral-200 sm:text-[5.25rem]"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <span
                  className="pointer-events-none absolute bottom-0 right-0 font-serif text-[4.5rem] leading-none text-neutral-200 sm:text-[5.25rem]"
                  aria-hidden
                >
                  &rdquo;
                </span>
                <blockquote className="relative z-1 px-6 py-1 font-sans text-lg italic leading-snug text-neutral-700 sm:text-xl">
                  {w.blockquote}
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
