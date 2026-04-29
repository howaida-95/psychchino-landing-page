"use client";

import Image from "next/image";
import Link from "next/link";

import { getLocalizedBlogPost } from "@/i18n";
import { useI18n } from "@/i18n";
import { formatBlogDate, type BlogPost } from "@/content/blog";

export function BlogPostView({ post }: { post: BlogPost }) {
  const { locale, messages, t } = useI18n();
  const p = getLocalizedBlogPost(post, messages);
  return (
    <article className="min-h-full bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="text-sm font-semibold text-sage underline-offset-2 hover:underline"
        >
          {t("blogPost.back")}
        </Link>
        <header className="mt-8">
          <time className="text-sm text-muted" dateTime={post.date}>
            {formatBlogDate(post.date, locale === "ar" ? "ar" : "en")}
          </time>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {p.title}
          </h1>
        </header>
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-cream-dark bg-cream-dark/30">
          <Image
            src={post.coverSrc}
            alt={p.coverAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 672px, 100vw"
            priority
          />
        </div>
        <div className="mt-10 space-y-6 text-base leading-relaxed">
          {p.body.map((para, i) => (
            <p key={i} className="text-muted">
              {para}
            </p>
          ))}
        </div>
        <p className="mt-12 border-t border-cream-dark pt-8 text-center text-sm text-muted">
          <Link href="/" className="font-semibold text-sage hover:underline">
            {t("blogPost.backHome")}
          </Link>
        </p>
      </div>
    </article>
  );
}
