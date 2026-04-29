"use client";

import Link from "next/link";

import { getLocalizedBlogPost, useI18n } from "@/i18n";
import { blogPosts, formatBlogDate } from "@/content/blog";

export function BlogIndex() {
  const { locale, messages, t } = useI18n();
  return (
    <div className="min-h-full bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-sage">
          {t("blogPage.kicker")}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {messages.blogs.heading}
        </h1>
        <p className="mt-4 text-muted">
          {t("blogPage.listLeadBefore")}
          <Link href="/" className="font-semibold text-sage underline-offset-2 hover:underline">
            {t("blogPage.listLeadLink")}
          </Link>
          {t("blogPage.listLeadAfter")}
        </p>
        <ul className="mt-12 space-y-10">
          {blogPosts.map((post) => {
            const p = getLocalizedBlogPost(post, messages);
            return (
              <li key={post.slug} className="border-b border-cream-dark pb-10 last:border-0">
                <time className="text-sm text-muted" dateTime={post.date}>
                  {formatBlogDate(post.date, locale === "ar" ? "ar" : "en")}
                </time>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                  <Link href={`/blog/${post.slug}`} className="hover:text-sage">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 text-muted">{p.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-sage underline-offset-2 hover:underline"
                >
                  {t("blogPage.readArticle")}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
