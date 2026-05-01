"use client";

import type { Swiper } from "swiper";
import { useLayoutEffect } from "react";

/**
 * Swiper reads `dir` on mount; child layout effects can run before i18n applies RTL.
 * Use layout effect so direction + slide metrics update before paint; pair with
 * `key={locale}` on `<Swiper>` so the first mount matches the real locale when possible.
 */
export function useSwiperRtlSync(swiper: Swiper | null, direction: "ltr" | "rtl") {
  useLayoutEffect(() => {
    if (!swiper || swiper.destroyed) {
      return;
    }
    swiper.changeLanguageDirection(direction);
  }, [swiper, direction]);
}
