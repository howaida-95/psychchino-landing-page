"use client";

import type { Swiper } from "swiper";
import { useEffect } from "react";

/**
 * Swiper only reads the container’s `dir` on init. When locale toggles LTR/RTL, call
 * `changeLanguageDirection` so rtlTranslate, slide motion, and nav (`.swiper-rtl`) match.
 */
export function useSwiperRtlSync(swiper: Swiper | null, direction: "ltr" | "rtl") {
  useEffect(() => {
    if (!swiper || swiper.destroyed) {
      return;
    }
    swiper.changeLanguageDirection(direction);
  }, [swiper, direction]);
}
