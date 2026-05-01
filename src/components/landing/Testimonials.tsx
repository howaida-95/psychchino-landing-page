"use client";

import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useDirection, useI18n } from "@/i18n";
import { useSwiperRtlSync } from "@/lib/useSwiperRtlSync";

import type { MessageDictionary } from "@/i18n/messages/types";

type Quote = MessageDictionary["testimonials"]["quotes"][number];

function QuoteCard({ q }: { q: Quote }) {
  return (
    <div className="flex h-full min-w-0 w-full flex-col rounded-2xl border border-cream-dark bg-white/80 p-8 shadow-sm">
      <p className="font-serif text-lg leading-relaxed text-foreground">“{q.text}”</p>
      <div className="mt-6 border-t border-cream-dark pt-6">
        <p className="font-semibold text-foreground">{q.name}</p>
        <p className="text-sm text-muted">{q.detail}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { messages, locale } = useI18n();
  const { dir } = useDirection();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  useSwiperRtlSync(swiper, dir);
  const te = messages.testimonials;

  return (
    <section
      id="stories"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="stories-heading"
          className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {te.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">{te.lead}</p>

        <div className="testimonials-swiper relative mt-10 w-full min-w-0 overflow-x-clip sm:px-6 lg:px-8">
          <Swiper
            key={locale}
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
              delay: 7000,
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
            className="testimonials-swiper-inner w-full min-w-0 max-w-full pb-14 sm:pb-12 [&_.swiper-pagination]:bottom-1.5 sm:[&_.swiper-pagination]:bottom-0.5 [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!box-border [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!w-2.5 sm:[&_.swiper-pagination-bullet]:!h-2 sm:[&_.swiper-pagination-bullet]:!w-2"
          >
            {te.quotes.map((q) => (
              <SwiperSlide key={q.name + q.text} className="!box-border flex h-auto !min-w-0">
                <QuoteCard q={q} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
