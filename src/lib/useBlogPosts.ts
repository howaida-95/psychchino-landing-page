"use client";

import { useEffect, useState } from "react";

import type { BlogPost } from "@/content/blog";

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) {
          throw new Error(`Blog list failed: ${res.status}`);
        }
        const data = (await res.json()) as BlogPost[];
        if (!cancelled) {
          setPosts(data);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load posts");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, error };
}
