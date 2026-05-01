"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { getLocalizedBlogPost, useDirection, useI18n } from "@/i18n";
import { useBlogPosts } from "@/lib/useBlogPosts";
import { useSwiperRtlSync } from "@/lib/useSwiperRtlSync";
import { formatBlogDate, type BlogPost } from "@/content/blog";

type LocalizedPost = ReturnType<typeof getLocalizedBlogPost>;

function BlogPostCard({
  post,
  p,
  loc,
  readMore,
}: {
  post: BlogPost;
  p: LocalizedPost;
  loc: "en" | "ar";
  readMore: string;
}) {
  return (
    <article className="group flex h-full min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-cream-dark bg-background shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] bg-cream-dark/40">
        <Image
          src={post.coverSrc}
          alt={p.coverAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time
          className="text-xs font-medium uppercase tracking-wide text-muted"
          dateTime={post.date}
        >
          {formatBlogDate(post.date, loc)}
        </time>
        <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-foreground">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            {p.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-sage underline-offset-4 hover:underline"
        >
          {readMore}
        </Link>
      </div>
    </article>
  );
}

export function Blogs() {
  const { messages, locale } = useI18n();
  const { dir } = useDirection();
  const { posts, error } = useBlogPosts();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  useSwiperRtlSync(swiper, dir);
  useEffect(() => {
    swiper?.update();
  }, [posts, swiper]);
  const b = messages.blogs;
  const loc = locale === "ar" ? "ar" : "en";

  return (
    <section
      id="blogs"
      className="border-t border-cream-dark bg-white/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="blogs-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-sage">{b.kicker}</p>
            <h2
              id="blogs-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {b.heading}
            </h2>
            <p className="mt-4 text-lg text-muted">{b.lead}</p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 rounded-full border border-sage/30 bg-background px-5 py-2.5 text-sm font-semibold text-sage transition-colors hover:border-sage/50 hover:bg-white"
          >
            {b.allPosts}
          </Link>
        </div>

        <div className="blogs-swiper relative mt-10 w-full min-w-0 overflow-x-clip sm:px-6 lg:px-8">
          {error ? (
            <p className="rounded-2xl border border-cream-dark bg-white/60 px-4 py-6 text-sm text-muted">
              {error}
            </p>
          ) : null}
          {!posts && !error ? (
            <div
              className="flex h-48 items-center justify-center rounded-2xl border border-cream-dark bg-cream-dark/20 text-sm text-muted"
              role="status"
              aria-live="polite"
            >
              …
            </div>
          ) : null}
          {posts && posts.length > 0 ? (
            <Swiper
              key={`${locale}-${posts.length}`}
              onSwiper={setSwiper}
              dir={dir}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              watchOverflow
              grabCursor
              roundLengths
              observer
              observeParents
              centeredSlides={false}
              threshold={5}
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{
                delay: 6500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={600}
              breakpoints={{
                480: {
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                },
              }}
              className="blogs-swiper-inner w-full min-w-0 max-w-full pb-14 sm:pb-12 [&_.swiper-pagination]:bottom-1.5 sm:[&_.swiper-pagination]:bottom-0.5 [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!box-border [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!w-2.5 sm:[&_.swiper-pagination-bullet]:!h-2 sm:[&_.swiper-pagination-bullet]:!w-2"
            >
              {posts.map((post) => {
                const p = getLocalizedBlogPost(post, messages);
                return (
                  <SwiperSlide key={post.slug} className="!box-border flex h-auto !min-w-0">
                    <BlogPostCard post={post} p={p} loc={loc} readMore={b.readMore} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : null}
        </div>
      </div>
    </section>
  );
}
