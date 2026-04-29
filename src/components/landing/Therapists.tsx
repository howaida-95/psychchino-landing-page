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

import type { MessageDictionary } from "@/i18n/messages/en";

type Person = MessageDictionary["therapists"]["people"][number];

function PersonCard({ person, cta }: { person: Person; cta: string }) {
  return (
    <div className="flex h-full min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-cream-dark bg-background shadow-sm">
      <div className="flex aspect-4/3 items-center justify-center bg-linear-to-br from-sage/20 via-background to-accent/10">
        <span
          className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-white/90 font-serif text-2xl font-semibold text-sage shadow-md"
          aria-hidden
        >
          {person.initials}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg font-semibold text-foreground">{person.name}</h3>
        <p className="mt-1 text-sm text-muted">{person.role}</p>
        <a
          href="#contact"
          className="mt-4 inline-flex text-sm font-semibold text-sage underline-offset-4 hover:underline"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

export function Therapists() {
  const { dir } = useDirection();
  const { messages } = useI18n();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  useSwiperRtlSync(swiper, dir);
  const t = messages.therapists;

  return (
    <section
      id="therapists"
      className="border-t border-cream-dark bg-sage/[0.06] px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="therapists-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2
            id="therapists-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.lead}</p>
        </div>

        <div className="therapists-swiper relative mt-14 w-full min-w-0 overflow-x-clip sm:px-10 lg:px-12">
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
              delay: 6000,
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
            className="therapists-swiper-inner w-full min-w-0 max-w-full pb-14 sm:pb-12 [&_.swiper-pagination]:bottom-1.5 sm:[&_.swiper-pagination]:bottom-0.5 [&_.swiper-wrapper]:!items-stretch [&_.swiper-slide]:!h-auto [&_.swiper-slide]:!box-border [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!w-2.5 sm:[&_.swiper-pagination-bullet]:!h-2 sm:[&_.swiper-pagination-bullet]:!w-2"
          >
            {t.people.map((person) => (
              <SwiperSlide key={person.name} className="!box-border flex h-auto !min-w-0">
                <PersonCard person={person} cta={t.cta} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
