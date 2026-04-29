"use client";

import { useI18n } from "@/i18n";

export function Testimonials() {
  const { messages } = useI18n();
  const te = messages.testimonials;
  return (
    <section id="stories" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {te.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">{te.lead}</p>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {te.quotes.map((q) => (
            <li
              key={q.name + q.text}
              className="flex flex-col rounded-2xl border border-cream-dark bg-white/80 p-8 shadow-sm"
            >
              <p className="font-serif text-lg leading-relaxed text-foreground">“{q.text}”</p>
              <div className="mt-6 border-t border-cream-dark pt-6">
                <p className="font-semibold text-foreground">{q.name}</p>
                <p className="text-sm text-muted">{q.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
