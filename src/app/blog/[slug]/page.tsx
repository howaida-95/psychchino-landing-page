import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostView } from "@/components/blog/BlogPostView";
import { blogPosts, getPostBySlug } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post — Psychochino" };
  }
  const title = `${post.title} — Psychochino`;
  return {
    title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: `${post.date}T12:00:00.000Z`,
      images: [{ url: post.coverSrc, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverSrc],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <BlogPostView post={post} />;
}
