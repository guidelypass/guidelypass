import type en from "./en";

export type Dictionary = typeof en;
export type Locale = "en" | "pt" | "fr" | "de" | "es" | "zh";

export const locales: Locale[] = ["en", "pt", "fr", "de", "es", "zh"];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  zh: "中文",
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  pt: () => import("./pt").then((m) => m.default),
  fr: () => import("./fr").then((m) => m.default),
  de: () => import("./de").then((m) => m.default),
  es: () => import("./es").then((m) => m.default),
  zh: () => import("./zh").then((m) => m.default),
};

export function getDictionary(locale: string): Promise<Dictionary> {
  const loc = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;
  return dictionaries[loc]();
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
