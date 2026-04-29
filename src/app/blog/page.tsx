import { BlogIndex } from "@/components/blog/BlogIndex";

import { en } from "@/i18n/messages/en";

export const metadata = {
  title: "Blog — Psychochino",
  description: en.blogs.lead,
};

export default function BlogIndexPage() {
  return <BlogIndex />;
}
