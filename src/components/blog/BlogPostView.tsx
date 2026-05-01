"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { getLocalizedBlogPost } from "@/i18n";
import { useI18n } from "@/i18n";
import { formatBlogDate, type BlogPost } from "@/content/blog";

export function BlogPostView({ post }: { post: BlogPost }) {
  const { locale, messages, t } = useI18n();
  const p = getLocalizedBlogPost(post, messages);
  const dateLoc = locale === "ar" ? "ar" : "en";
  const headingId = `blog-post-${post.slug}-title`;

  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.title,
        description: p.excerpt,
        image: post.coverSrc,
        datePublished: `${post.date}T12:00:00.000Z`,
        articleBody: p.body.join("\n\n"),
        inLanguage: locale === "ar" ? "ar" : "en",
      }),
    [p.title, p.excerpt, p.body, post.coverSrc, post.date, locale],
  );

  return (
    <article
      className="min-h-full bg-background px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby={headingId}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mx-auto max-w-3xl">
        <nav aria-label={t("blogPost.back")}>
          <Link
            href="/blog"
            className="text-sm font-semibold text-sage underline-offset-2 hover:underline"
          >
            {t("blogPost.back")}
          </Link>
        </nav>
        <header className="mt-8">
          <time className="text-sm font-medium text-muted" dateTime={post.date}>
            {formatBlogDate(post.date, dateLoc)}
          </time>
          <h1
            id={headingId}
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            {p.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">{p.excerpt}</p>
        </header>
        <figure className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-cream-dark bg-cream-dark/30">
          <Image
            src={post.coverSrc}
            alt={p.coverAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 48rem, 100vw"
            priority
          />
        </figure>
        <div className="prose-blog mt-12 space-y-6 text-base leading-[1.75] sm:text-lg">
          {p.body.map((para, i) => (
            <p key={i} className="text-pretty text-foreground">
              {para}
            </p>
          ))}
        </div>
        <footer className="mt-14 border-t border-cream-dark pt-10">
          <p className="text-center text-sm text-muted">
            <Link href="/" className="font-semibold text-sage underline-offset-2 hover:underline">
              {t("blogPost.backHome")}
            </Link>
          </p>
        </footer>
      </div>
    </article>
  );
}
