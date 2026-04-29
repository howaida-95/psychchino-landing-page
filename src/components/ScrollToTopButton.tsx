"use client";

import { useCallback, useEffect, useState } from "react";

import { useI18n } from "@/i18n";

const SCROLL_THRESHOLD_PX = 400;

export function ScrollToTopButton() {
  const { messages } = useI18n();
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={goTop}
      className="pointer-events-auto fixed bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] inset-e-4 z-40 flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/20 bg-sage text-white shadow-lg shadow-sage/25 transition-[transform,box-shadow] hover:scale-105 hover:bg-sage-dark hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage md:bottom-8 md:inset-e-6"
      title={messages.backToTop}
      aria-label={messages.backToTop}
    >
      <svg
        className="h-5 w-5 shrink-0"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12.5L10 7.5l5 5" />
      </svg>
    </button>
  );
}
