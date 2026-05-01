import { BlogIndex } from "@/components/blog/BlogIndex";

import messagesEn from "@/data/messages.en.json";

export const metadata = {
  title: "Blog — Psychochino",
  description: messagesEn.blogs.lead,
};

export default function BlogIndexPage() {
  return <BlogIndex />;
}
