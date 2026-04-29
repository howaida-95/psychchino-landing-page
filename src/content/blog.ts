import { formatDateCalendar, type DateFormatLocale } from "@/lib/dateFormat";

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  coverSrc: string;
  coverAlt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-book-circles-work",
    title: "Why psychology book circles work for busy minds",
    date: "2026-02-10",
    excerpt:
      "Short sessions on Google Meet, clear chapters, and facilitators who love questions make reading feel doable again.",
    coverSrc:
      "https://images.unsplash.com/photo-1456513080510-7c3a9aa0e182?auto=format&fit=crop&w=800&q=80",
    coverAlt: "Open notebook and pen in soft light",
    body: [
      "We built Psychochino around a simple hunch: psychology books are easier to finish when you are not holding them alone. A weekly rhythm, a bit of structure, and facilitators who frame the text in plain language can turn a dense chapter into a conversation you look forward to.",
      "In our circles, Ibrahim and the team do not test you on the reading—we connect themes to your week, stress, and relationships, always in an educational, non-clinical tone. If you have skipped a chapter, you are still welcome in the room.",
    ],
  },
  {
    slug: "google-meet-tips-psychochino",
    title: "Five ways to get comfortable on Google Meet (Psychochino edition)",
    date: "2026-03-02",
    excerpt:
      "From lighting to the mute button—small habits that make online book discussion feel as warm as a living-room chat.",
    coverSrc:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
    coverAlt: "Laptop on a desk for a video call",
    body: [
      "You do not need a studio setup. A table near a window, headphones if your space is noisy, and joining two minutes early to check audio is enough. Most of us keep video on, but you can turn the camera off anytime you need a break—it does not change your seat in the group.",
      "The facilitators will repeat prompts so late joiners are not lost, and the Meet chat is there for side questions without interrupting the main thread.",
    ],
  },
  {
    slug: "how-we-pick-incoming-books",
    title: "How Psychochino picks incoming books (and your voice matters)",
    date: "2026-03-28",
    excerpt:
      "A look at the criteria our psychologists use: accessibility, variety, and room for discussion—not exams.",
    coverSrc:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    coverAlt: "Stack of hardcover books",
    body: [
      "We look for non-fiction and select fiction when it opens clear psychological themes. A book might stay on the calendar for several weeks so nobody has to sprint through six hundred pages in a weekend.",
      "If you have a title you want the community to try, we read every suggestion. The final picks balance freshness with what our five facilitator psychologists feel confident supporting on Meet.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Blog list / cards — stable across SSR and browser (avoids Intl hydration mismatches). */
export function formatBlogDate(iso: string, loc: DateFormatLocale = "en") {
  return formatDateCalendar(iso, loc);
}
