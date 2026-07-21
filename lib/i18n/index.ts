import type en from "./en";

export type Dictionary = typeof en;
export type Locale = "en" | "pt";

export const locales: Locale[] = ["en", "pt"];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  pt: () => import("./pt").then((m) => m.default),
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
