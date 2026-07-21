import type { Metadata } from "next";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { regions } from "@/lib/site-config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.nav.destinations,
    description: dict.meta.description,
  };
}

export default async function DestinationsPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const { q } = await searchParams;
  const query = q?.toLowerCase().trim();
  const allSlugs = regions.flatMap((r) => r.destinations.map((d) => d.slug));
  const matchSlug = query
    ? allSlugs.find(
        (slug) =>
          slug === query ||
          dict.destinations[slug as keyof typeof dict.destinations].name
            .toLowerCase() === query
      )
    : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-ink">{dict.nav.destinations}</h1>
      {matchSlug ? (
        <p className="mt-2 text-gray-600">
          {dict.destinations[matchSlug as keyof typeof dict.destinations].name}
        </p>
      ) : (
        <p className="mt-2 text-gray-600">{dict.home.destinationsSubtitle}</p>
      )}
    </div>
  );
}
