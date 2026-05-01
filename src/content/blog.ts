import raw from "@/data/blog-posts.json";

import { formatDateCalendar, type DateFormatLocale } from "@/lib/dateFormat";

export type BlogPost = (typeof raw)[number];

export const blogPosts: BlogPost[] = raw;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Blog list / cards — stable across SSR and browser (avoids Intl hydration mismatches). */
export function formatBlogDate(iso: string, loc: DateFormatLocale = "en") {
  return formatDateCalendar(iso, loc);
}
