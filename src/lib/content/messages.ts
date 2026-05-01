import ar from "@/data/messages.ar.json";
import en from "@/data/messages.en.json";

import type { MessageDictionary } from "@/i18n/messages/types";

export function getMessages(locale: "en" | "ar"): MessageDictionary {
  return (locale === "ar" ? ar : en) as MessageDictionary;
}
