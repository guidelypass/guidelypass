import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions } from "@/lib/site-config";
import { getDictionary, isValidLocale, locales, type Locale } from "@/lib/i18n";

const allSlugs = regions.flatMap((r) => r.destinations.map((d) => d.slug));
const imageMap = Object.fromEntries(
  regions.flatMap((r) =>
    r.destinations.map((d) => [d.slug, { image: d.image, regionSlug: r.slug }])
  )
);

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    allSlugs.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const dest = dict.destinations[slug as keyof typeof dict.destinations];
  if (!dest) return {};
  return {
    title: dest.name,
    description: dest.intro.slice(0, 160),
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/destinations/${slug}`])
      ),
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const dest = dict.destinations[slug as keyof typeof dict.destinations];
  if (!dest) notFound();

  const struct = imageMap[slug];
  if (!struct) notFound();

  const regionName = dict.regions[struct.regionSlug as keyof typeof dict.regions].name;
  const d = dict.destinationPage;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 lg:h-[480px]">
        <Image
          src={struct.image}
          alt={dest.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-6xl px-4 pb-10">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">
              {regionName} · {dest.country}
            </p>
            <h1 className="mt-1 text-5xl font-bold text-white sm:text-6xl">
              {dest.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: d.country, value: dest.country },
              { label: d.language, value: dest.language },
              { label: d.currency, value: dest.currency },
              { label: d.bestTime, value: dest.bestTime },
            ].map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-ink">
            {d.aboutPrefix} {dest.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            {dest.intro}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-ink">{d.mustSeeTitle}</h2>
          <p className="mt-1 text-sm text-gray-500">
            {d.mustSeeSubtitle} {dest.name}.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dest.highlights.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-xl bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blurred preview */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-ink">{d.fullGuideTitle}</h2>
          <p className="mt-2 text-sm text-gray-500">
            {d.fullGuideSubtitle1} {dest.name} {d.fullGuideSubtitle2}
          </p>
          <div className="relative mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-6">
            <ul className="select-none space-y-3 blur-sm">
              {d.previewItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full bg-brand-200" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-white/70 backdrop-blur-[2px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-brand-400"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p className="mt-2 text-sm font-semibold text-ink">
                {d.lockedLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            {d.ctaLabel}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink">
            {d.ctaHeading1} {dest.name} {d.ctaHeading2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            {d.ctaText1} {dest.name} {d.ctaText2}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-block rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-accent-700 hover:shadow-md"
            >
              {d.ctaButton1} {dest.name}{d.ctaButton2 ? ` ${d.ctaButton2}` : ""}
            </Link>
            <Link
              href={`/${locale}/destinations`}
              className="inline-block rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-600 transition-all duration-200 ease-out hover:border-gray-300 hover:bg-gray-50"
            >
              {d.ctaSecondary}
            </Link>
          </div>
          <p className="mt-5 text-xs text-gray-400">{d.ctaNote}</p>
        </div>
      </section>
    </div>
  );
}
