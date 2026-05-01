"use client";

import { useCallback, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { useDirection, useI18n } from "@/i18n";
import { useSwiperRtlSync } from "@/lib/useSwiperRtlSync";

/** Fixed height so Swiper + Next/Image fill chain cannot collapse to 0. */
const SLIDER_MIN_H = "min-h-[20rem] sm:min-h-[24rem] lg:min-h-[28rem]";
const SLIDER_H = "h-[min(72vw,22rem)] sm:h-[min(70vw,26rem)] lg:h-[min(36vw,32rem)]";

export function HeroDoctorSlider() {
  const { dir } = useDirection();
  const { messages, locale } = useI18n();
  const slides = messages.heroSlider;
  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  useSwiperRtlSync(swiper, dir);

  const onSlideChange = useCallback((swiper: SwiperType) => {
    setActive(swiper.realIndex);
  }, []);

  const current = slides[active] ?? slides[0];

  return (
    <div className={`relative z-10 mx-auto w-full max-w-md lg:max-w-none ${SLIDER_MIN_H}`}>
      <div
        className={`relative ${SLIDER_H} ${SLIDER_MIN_H} w-full overflow-hidden rounded-4xl border border-cream-dark bg-cream-dark shadow-xl shadow-sage/10`}
      >
        <Swiper
          key={locale}
          onSwiper={setSwiper}
          dir={dir}
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          grabCursor
          loop
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onSlideChange={onSlideChange}
          className="hero-doctor-swiper h-full w-full [&_.swiper-pagination]:!bottom-[10.5rem] [&_.swiper-pagination]:z-[5] sm:[&_.swiper-pagination]:!bottom-[11.25rem] [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:rounded-full [&_.swiper-slide]:!h-full [&_.swiper-wrapper]:h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.src} className="!h-full">
              <div className="relative h-full w-full bg-sage/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  width={960}
                  height={1200}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-foreground/55 via-foreground/10 to-transparent"
                  aria-hidden
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />

        <div
          className="pointer-events-none absolute left-8 top-10 z-[2] h-24 w-24 rounded-full bg-sage/25 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-10 top-1/4 z-[2] h-32 w-32 rounded-full border-4 border-white/35"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] flex flex-col justify-end p-6 sm:p-8 lg:p-10">
          <div
            key={current.quote}
            className="rounded-2xl border border-white/50 bg-white/92 p-5 text-foreground shadow-lg backdrop-blur-md transition-opacity duration-500"
          >
            <p className="font-serif text-lg font-medium">“{current.quote}”</p>
            <p className="mt-3 text-sm text-muted">— {current.attribution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
