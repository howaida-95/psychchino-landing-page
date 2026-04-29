"use client";

import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useDirection, useI18n } from "@/i18n";
import { useSwiperRtlSync } from "@/lib/useSwiperRtlSync";
import { formatDateWithWeekday, type DateFormatLocale } from "@/lib/dateFormat";

import type { MessageDictionary } from "@/i18n/messages/en";

type BookItem = MessageDictionary["incomingBooks"]["items"][number] & { coverSrc: string };

function BookCard({
  book,
  labels,
  dateLoc,
}: {
  book: BookItem;
  labels: { ins: string; start: string };
  dateLoc: DateFormatLocale;
}) {
  return (
    <div className="flex h-full min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-cream-dark bg-white/70 shadow-sm">
      <div className="relative aspect-[3/4] w-full shrink-0 bg-cream-dark/50">
        <Image
          src={book.coverSrc}
          alt={book.coverAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/70 to-transparent px-4 pb-4 pt-16">
          <p className="font-serif text-lg font-semibold text-white drop-shadow-sm">{book.title}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted">{book.description}</p>
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-sage">{labels.ins}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {book.instructors.map((name) => (
              <li key={name}>
                <span className="inline-block rounded-full bg-sage/12 px-3 py-1 text-xs font-medium text-sage">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto border-t border-cream-dark pt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{labels.start}</p>
          <p className="mt-1 font-sans text-base font-semibold text-foreground">
            <time dateTime={book.startDate}>
              {formatDateWithWeekday(book.startDate, dateLoc)}
            </time>
          </p>
        </div>
      </div>
    </div>
  );
}

export function IncomingBooks() {
  const { dir } = useDirection();
  const { messages, locale } = useI18n();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  useSwiperRtlSync(swiper, dir);
  const dateLoc: DateFormatLocale = locale === "ar" ? "ar" : "en";
  const ib = messages.incomingBooks;
  const coverSrc: [string, string, string] = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1524997147910-b394dffb310c?auto=format&fit=crop&w=640&q=80",
  ];

  const books: BookItem[] = ib.items.map((item, i) => ({
    ...item,
    coverSrc: coverSrc[i]!,
  }));

  return (
    <section
      id="incoming-books"
      className="border-t border-cream-dark bg-background px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="incoming-books-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-sage">{ib.kicker}</p>
          <h2
            id="incoming-books-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {ib.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{ib.lead}</p>
        </div>

        <div className="incoming-books-swiper relative mt-14 w-full min-w-0 overflow-x-clip sm:px-10 lg:px-12">
          <Swiper
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
            className="incoming-books-swiper-inner w-full min-w-0 max-w-full pb-14 sm:pb-12 [&_.swiper-pagination]:bottom-1.5 sm:[&_.swiper-pagination]:bottom-0.5 [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!box-border [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!w-2.5 sm:[&_.swiper-pagination-bullet]:!h-2 sm:[&_.swiper-pagination-bullet]:!w-2"
          >
            {books.map((book) => (
              <SwiperSlide key={book.title} className="!box-border flex h-auto !min-w-0">
                <BookCard
                  book={book}
                  dateLoc={dateLoc}
                  labels={{ ins: ib.instructors, start: ib.startDate }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
