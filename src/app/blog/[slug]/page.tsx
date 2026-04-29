import { notFound } from "next/navigation";

import { BlogPostView } from "@/components/blog/BlogPostView";
import { blogPosts, getPostBySlug } from "@/content/blog";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post — Psychochino" };
  }
  return {
    title: `${post.title} — Psychochino`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <BlogPostView post={post} />;
}
