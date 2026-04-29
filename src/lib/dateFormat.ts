const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const WEEKDAYS_AR = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
] as const;

const MONTHS_AR = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
] as const;

export type DateFormatLocale = "en" | "ar";

function parseIsoDate(iso: string) {
  const [y, m, day] = iso.split("-").map((n) => parseInt(n, 10));
  if (Number.isNaN(y) || Number.isNaN(m) || Number.isNaN(day)) {
    return null;
  }
  return { y, m, day };
}

/**
 * e.g. Friday, 15 May 2026 or Arabic equivalent — no Intl, stable SSR/CSR.
 */
export function formatDateWithWeekday(iso: string, loc: DateFormatLocale = "en") {
  const p = parseIsoDate(iso);
  if (!p) {
    return iso;
  }
  const { y, m, day } = p;
  const utc = new Date(Date.UTC(y, m - 1, day, 12, 0, 0));
  const wd = utc.getUTCDay();
  if (loc === "ar") {
    const w = WEEKDAYS_AR[wd];
    const monthName = MONTHS_AR[m - 1];
    return `${w}، ${day} ${monthName} ${y}`;
  }
  const w = WEEKDAYS[wd];
  const monthName = MONTHS[m - 1];
  return `${w}, ${day} ${monthName} ${y}`;
}

/** e.g. 10 February 2026 */
export function formatDateCalendar(iso: string, loc: DateFormatLocale = "en") {
  const p = parseIsoDate(iso);
  if (!p) {
    return iso;
  }
  const { y, m, day } = p;
  if (loc === "ar") {
    const monthName = MONTHS_AR[m - 1];
    return `${day} ${monthName} ${y}`;
  }
  const monthName = MONTHS[m - 1];
  return `${day} ${monthName} ${y}`;
}
