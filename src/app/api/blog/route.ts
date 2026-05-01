import { NextResponse } from "next/server";

import { blogPosts } from "@/content/blog";

export async function GET() {
  return NextResponse.json(blogPosts);
}
