import type { BlogPost } from "@/content/blog";

import type { MessageDictionary } from "./messages/types";

/** Merge per-slug copy from the active message bundle. Image URLs and dates stay from the base post. */
export function getLocalizedBlogPost(
  post: BlogPost,
  m: MessageDictionary,
): BlogPost {
  const tr = m.blogBySlug[post.slug as keyof MessageDictionary["blogBySlug"]];
  if (!tr) {
    return post;
  }
  return {
    ...post,
    title: tr.title,
    excerpt: tr.excerpt,
    body: tr.body,
    coverAlt: tr.coverAlt,
  };
}
