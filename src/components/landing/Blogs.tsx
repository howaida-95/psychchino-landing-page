"use client";

import Image from "next/image";
import Link from "next/link";

import { getLocalizedBlogPost, useI18n } from "@/i18n";
import { blogPosts, formatBlogDate } from "@/content/blog";

export function Blogs() {
  const { messages, locale } = useI18n();
  const b = messages.blogs;
  const loc = locale === "ar" ? "ar" : "en";
  return (
    <section
      id="blogs"
      className="border-t border-cream-dark bg-white/50 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="blogs-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-sage">{b.kicker}</p>
            <h2
              id="blogs-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {b.heading}
            </h2>
            <p className="mt-4 text-lg text-muted">{b.lead}</p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 rounded-full border border-sage/30 bg-background px-5 py-2.5 text-sm font-semibold text-sage transition-colors hover:border-sage/50 hover:bg-white"
          >
            {b.allPosts}
          </Link>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const p = getLocalizedBlogPost(post, messages);
            return (
              <li key={post.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-dark bg-background shadow-sm transition-shadow hover:shadow-md">
                  <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] bg-cream-dark/40">
                    <Image
                      src={post.coverSrc}
                      alt={p.coverAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <time
                      className="text-xs font-medium uppercase tracking-wide text-muted"
                      dateTime={post.date}
                    >
                      {formatBlogDate(post.date, loc)}
                    </time>
                    <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-foreground">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                      >
                        {p.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold text-sage underline-offset-4 hover:underline"
                    >
                      {b.readMore}
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
