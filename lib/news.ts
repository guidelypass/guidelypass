import type { Locale } from "@/lib/i18n";

export type NewsArticle = {
  title: string;
  description: string;
  url: string;
  source: { name: string };
  publishedAt: string;
  image: string | null;
};

const langMap: Record<Locale, string> = {
  en: "en", pt: "pt", fr: "fr", de: "de", es: "es", zh: "zh",
};

export async function fetchTravelNews(locale: Locale, max = 6): Promise<NewsArticle[]> {
  const key = process.env.GNEWS_API_KEY;
  if (!key) return [];

  const lang = langMap[locale];
  const url = `https://gnews.io/api/v4/search?q=travel&lang=${lang}&max=${max}&sortby=publishedAt&token=${key}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1h
    if (!res.ok) return [];
    const data = await res.json();
    return data.articles ?? [];
  } catch {
    return [];
  }
}
