"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { ar } from "./messages/ar";
import { en } from "./messages/en";
import type { MessageDictionary } from "./messages/en";

const STORAGE_LOCALE = "psychochino-locale";
const LEGACY_DIR = "psychochino-dir";

export type AppLocale = "en" | "ar";

const bundled: Record<AppLocale, MessageDictionary> = { en, ar };

type TParams = Record<string, string | number | undefined>;

function getPath(obj: unknown, path: string): unknown {
  if (!obj || path.length === 0) {
    return undefined;
  }
  const [head, ...rest] = path.split(".");
  if (!head) {
    return obj;
  }
  const child = (obj as Record<string, unknown>)[head];
  if (rest.length === 0) {
    return child;
  }
  return getPath(child, rest.join("."));
}

function interpolate(s: string, p?: TParams) {
  if (!p) {
    return s;
  }
  return s.replace(/\{(\w+)\}/g, (full, k: string) =>
    p[k] !== undefined ? String(p[k]) : full,
  );
}

function getString(
  m: MessageDictionary,
  key: string,
  params?: TParams,
  fallback = "",
): string {
  const v = getPath(m, key);
  if (typeof v !== "string") {
    return fallback;
  }
  return interpolate(v, params);
}

function applyToDocument(loc: AppLocale) {
  if (typeof document === "undefined") {
    return;
  }
  const rtl = loc === "ar";
  document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", loc);
  document.documentElement.setAttribute("data-direction", rtl ? "rtl" : "ltr");
  document.documentElement.setAttribute("data-locale", loc);
}

type I18nValue = {
  locale: AppLocale;
  setLocale: (l: AppLocale) => void;
  messages: MessageDictionary;
  t: (key: string, params?: TParams) => string;
  isRtl: boolean;
  /** Swiper: 'ltr' | 'rtl' */
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<AppLocale>("en");

  useLayoutEffect(() => {
    let loc: AppLocale = "en";
    try {
      const stored = localStorage.getItem(STORAGE_LOCALE) as AppLocale | null;
      if (stored === "ar" || stored === "en") {
        loc = stored;
      } else {
        const legacy = localStorage.getItem(LEGACY_DIR);
        if (legacy === "rtl") {
          loc = "ar";
          localStorage.setItem(STORAGE_LOCALE, "ar");
        } else if (legacy === "ltr") {
          localStorage.setItem(STORAGE_LOCALE, "en");
        }
        localStorage.removeItem(LEGACY_DIR);
      }
    } catch {
      // ignore
    }
    setLocaleState(loc);
    applyToDocument(loc);
  }, []);

  const setLocale = useCallback((l: AppLocale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_LOCALE, l);
    } catch {
      // ignore
    }
    applyToDocument(l);
  }, []);

  const messages = bundled[locale];

  const t = useCallback(
    (key: string, params?: TParams) => getString(messages, key, params, key),
    [messages],
  );

  const isRtl = locale === "ar";
  const dir: "ltr" | "rtl" = isRtl ? "rtl" : "ltr";

  const value = useMemo(
    () => ({ locale, setLocale, messages, t, isRtl, dir }),
    [locale, setLocale, messages, t, isRtl, dir],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const c = useContext(I18nContext);
  if (!c) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return c;
}

/**
 * @deprecated Prefer useI18n(). Kept for Swiper `dir` and existing patterns.
 * Direction follows locale: Arabic → rtl, English → ltr.
 */
export function useDirection() {
  const { dir, isRtl, setLocale } = useI18n();
  return {
    dir,
    isRtl,
    setDir: (d: "ltr" | "rtl") => {
      setLocale(d === "rtl" ? "ar" : "en");
    },
    toggleDir: () => {
      setLocale(isRtl ? "en" : "ar");
    },
  };
}
