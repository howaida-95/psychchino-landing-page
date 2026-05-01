import { NextResponse } from "next/server";

import { getPostBySlug } from "@/content/blog";

type SlugParam = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: SlugParam) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
