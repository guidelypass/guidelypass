import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { regions, experiences, siteConfig } from "@/lib/site-config";
import { notFound } from "next/navigation";
import Banner from "@/components/Banner";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: siteConfig.name, description: dict.meta.description };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const locale = lang as Locale;

  const destinations = regions.flatMap((region) =>
    region.destinations.map((d) => ({
      slug: d.slug,
      image: d.image,
      name: dict.destinations[d.slug as keyof typeof dict.destinations].name,
      regionName: dict.regions[region.slug as keyof typeof dict.regions].name,
    }))
  );

  return (
    <div>
      <Banner lang={locale} dict={dict} />

      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-5 flex items-end justify-between sm:mb-8">
            <div>
              <h2 className="text-lg font-semibold text-ink sm:text-3xl">{dict.home.destinationsTitle}</h2>
              <p className="mt-0.5 text-xs text-gray-500 sm:mt-1 sm:text-base sm:text-gray-600">{dict.home.destinationsSubtitle}</p>
            </div>
            <Link href={`/${locale}/destinations`} className="shrink-0 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:text-brand-700">
              {dict.home.viewAll}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {destinations.map((destination) => (
              <Link key={destination.slug} href={`/${locale}/destinations/${destination.slug}`} className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-100">
                  <Image src={destination.image} alt={destination.name} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 47vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm font-semibold leading-snug text-ink sm:text-lg">{destination.name}</h3>
                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-brand-500 sm:text-xs">{destination.regionName}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-5 sm:mb-8">
            <h2 className="text-lg font-semibold text-ink sm:text-3xl">{dict.home.experiencesTitle}</h2>
            <p className="mt-0.5 text-xs text-gray-500 sm:mt-1 sm:text-base sm:text-gray-600">{dict.home.experiencesSubtitle}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {experiences.map((experience) => (
              <Link key={experience.slug} href={`/${locale}/destinations`} className="group relative flex aspect-square items-end overflow-hidden rounded-xl shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                <Image src={experience.image} alt={dict.experiences[experience.slug as keyof typeof dict.experiences].name} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 47vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="relative z-10 p-3 text-sm font-semibold leading-tight text-white sm:p-4 sm:text-lg">
                  {dict.experiences[experience.slug as keyof typeof dict.experiences].name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-12 text-center sm:py-14">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{dict.home.ctaHeading}</h2>
          <p className="mt-3 text-sm text-brand-200 sm:text-base">{dict.home.ctaText}</p>
          <Link href={`/${locale}/contact`} className="mt-6 inline-block rounded-full bg-accent-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-accent-500 hover:shadow-lg sm:mt-7">
            {dict.home.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
