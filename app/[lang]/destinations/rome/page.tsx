import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isValidLocale, locales, type Locale } from "@/lib/i18n";
import {
  getRomeContent,
  categoryOrder,
  type AttractionCategory,
  type ProfileTag,
} from "@/lib/rome-guide-content";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: `${dict.destinations.rome.name}, ${dict.destinations.rome.country} — GuidelyPass`,
    description: dict.destinations.rome.intro,
  };
}

// ─── Micro-components ────────────────────────────────────────────────────────

function SectionDivider() {
  return <hr className="my-0 border-gray-100" />;
}

function SectionHeader({
  number,
  title,
  subtitle,
  freeBadge,
  paidBadge,
  free,
}: {
  number: string;
  title: string;
  subtitle?: string;
  freeBadge: string;
  paidBadge: string;
  free: boolean;
}) {
  return (
    <div className="mb-8 flex items-start justify-between gap-4">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
          {number}
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
      </div>
      <span
        className={`mt-1 flex-shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${
          free
            ? "border-green-200 bg-green-50 text-green-700"
            : "border-gray-200 bg-gray-100 text-gray-500"
        }`}
      >
        {free ? freeBadge : paidBadge}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function RomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;

  const [dict, content] = await Promise.all([
    getDictionary(locale),
    Promise.resolve(getRomeContent(locale)),
  ]);

  const g = dict.romeGuide;
  const d = dict.destinations.rome;

  const profileLabel: Record<ProfileTag, string> = {
    family: g.profileFamily,
    couple: g.profileCouple,
    friends: g.profileFriends,
  };

  const profileStyle: Record<ProfileTag, string> = {
    family: "bg-orange-50 text-orange-700 border-orange-200",
    couple: "bg-pink-50 text-pink-700 border-pink-200",
    friends: "bg-purple-50 text-purple-700 border-purple-200",
  };

  const weatherLabel: Record<string, string> = {
    outdoor: g.weatherOutdoor,
    indoor: g.weatherIndoor,
    both: g.weatherAny,
  };

  const weatherStyle: Record<string, string> = {
    outdoor: "bg-amber-50 text-amber-700 border-amber-200",
    indoor: "bg-blue-50 text-blue-700 border-blue-200",
    both: "bg-teal-50 text-teal-700 border-teal-200",
  };

  const catLabel: Record<AttractionCategory, string> = {
    monument: g.catMonument,
    museum: g.catMuseum,
    church: g.catChurch,
    square: g.catSquare,
    park: g.catPark,
    neighborhood: g.catNeighborhood,
    experience: g.catExperience,
  };

  const navItems: [string, string][] = [
    ["#overview", g.navOverview],
    ["#practical", g.navPractical],
    ["#attractions", g.navAttractions],
    ["#top5", g.navTop5],
    ["#eat", g.navEat],
    ["#itineraries", g.navItineraries],
    ["#neighborhoods", g.navNeighborhoods],
    ["#stay", g.navStay],
    ["#gastronomy", g.navGastronomy],
    ["#insider", g.navInsider],
  ];

  const lockedSections = [
    { id: "itineraries", number: "06", title: g.s06Title, teaserKey: "s06" as const },
    { id: "neighborhoods", number: "07", title: g.s07Title, teaserKey: "s07" as const },
    { id: "stay", number: "08", title: g.s08Title, teaserKey: "s08" as const },
    { id: "gastronomy", number: "09", title: g.s09Title, teaserKey: "s09" as const },
    { id: "insider", number: "10", title: g.s10Title, teaserKey: "s10" as const },
    { id: "experiences", number: "11", title: g.s11Title, teaserKey: "s11" as const },
  ];

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[360px] sm:h-[65vh]">
        <Image
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=85"
          alt={`${d.name}, ${d.country}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-4xl px-4 pb-10 sm:pb-14">
            <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
              <Link href={`/${locale}/destinations`} className="transition-colors hover:text-white/80">
                {g.breadcrumb}
              </Link>
              <span>/</span>
              <span className="text-white/70">{d.name}</span>
            </nav>
            <h1 className="text-5xl font-bold text-white sm:text-7xl">{d.name}</h1>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/75">
              {content.hero.subtitle}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {content.hero.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky nav ───────────────────────────────────────────────── */}
      <nav className="sticky top-[57px] z-20 hidden overflow-x-auto border-b border-gray-100 bg-white/95 backdrop-blur sm:block">
        <div className="mx-auto flex max-w-4xl gap-6 px-4">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="flex-shrink-0 border-b-2 border-transparent py-3 text-xs font-medium text-gray-500 transition-colors hover:border-brand-500 hover:text-brand-600">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── 01 Overview ──────────────────────────────────────────────── */}
      <section id="overview" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader number="01" title={g.s01Title} free freeBadge={g.free} paidBadge={g.paid} />
          <div className="space-y-4">
            {content.overview.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-700">{p}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {content.overview.cards.map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-gray-100 p-5">
                <h3 className="mb-2 text-sm font-bold text-ink">{title}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 02 Practical Info ────────────────────────────────────────── */}
      <section id="practical" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader number="02" title={g.s02Title} free freeBadge={g.free} paidBadge={g.paid} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.practicalInfo.map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">{label}</p>
                <p className="text-sm leading-snug text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 03 Attractions — editorial layout with photos ─────────────── */}
      <section id="attractions" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader
            number="03"
            title={g.s03Title}
            subtitle={g.s03Subtitle}
            free
            freeBadge={g.free}
            paidBadge={g.paid}
          />

          {categoryOrder.map((cat) => {
            const items = content.attractions.filter((a) => a.category === cat);
            if (!items.length) return null;

            return (
              <div key={cat} className="mb-16">
                <h3 className="mb-8 border-b-2 border-ink pb-3 text-xl font-bold text-ink">
                  {catLabel[cat]}
                </h3>

                <div className="divide-y divide-gray-100">
                  {items.map((attraction, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={attraction.name}
                        className={`flex flex-col sm:flex-row ${isEven ? "" : "sm:flex-row-reverse"}`}
                      >
                        {/* Photo */}
                        <div className="relative h-60 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-72 lg:w-80">
                          <Image
                            src={attraction.image}
                            alt={attraction.name}
                            fill
                            sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 100vw"
                            className="object-cover"
                          />
                        </div>

                        {/* Text */}
                        <div
                          className={`flex flex-1 flex-col justify-center py-6 sm:py-8 ${
                            isEven ? "sm:pl-8 sm:pr-0" : "sm:pl-0 sm:pr-8"
                          }`}
                        >
                          <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                            {attraction.neighborhood}
                          </p>
                          <h4 className="mb-3 text-lg font-bold text-ink lg:text-xl">
                            {attraction.name}
                          </h4>
                          <p className="mb-5 text-sm leading-relaxed text-gray-600">
                            {attraction.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${weatherStyle[attraction.weather]}`}>
                              {weatherLabel[attraction.weather]}
                            </span>
                            {attraction.profiles.map((p) => (
                              <span key={p} className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${profileStyle[p]}`}>
                                {profileLabel[p]}
                              </span>
                            ))}
                            <span className="ml-auto text-xs text-gray-400">{attraction.duration}</span>
                            <span className="text-xs font-semibold text-gray-700">{attraction.cost}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* ── 04 Top 5 ─────────────────────────────────────────────────── */}
      <section id="top5" className="bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader number="04" title={g.s04Title} subtitle={g.s04Subtitle} free freeBadge={g.free} paidBadge={g.paid} />
          <div className="space-y-5">
            {content.top5.map((item, i) => (
              <div key={item.name} className="group flex gap-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative w-36 flex-shrink-0 overflow-hidden sm:w-52">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 208px, 144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow">
                    {i + 1}
                  </div>
                </div>
                <div className="flex flex-col justify-center px-5 py-5">
                  <h3 className="text-base font-bold text-ink sm:text-lg">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  <p className="mt-3 rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-800">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 05 Where to Eat ──────────────────────────────────────────── */}
      <section id="eat" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader number="05" title={g.s05Title} subtitle={g.s05Subtitle} free freeBadge={g.free} paidBadge={g.paid} />
          <div className="grid gap-5 sm:grid-cols-2">
            {content.whereToEat.map((r) => (
              <div key={r.name} className="rounded-xl border border-gray-100 p-5 transition-all duration-200 hover:border-gray-200">
                <div className="mb-1 flex items-start justify-between gap-3">
                  <h4 className="text-sm font-bold text-ink">{r.name}</h4>
                  <span className="flex-shrink-0 text-sm font-semibold text-gray-500">{r.priceRange}</span>
                </div>
                <p className="mb-3 text-xs text-gray-400">{r.type} · {r.neighborhood}</p>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">{r.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {r.profiles.map((p) => (
                      <span key={p} className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold ${profileStyle[p]}`}>
                        {profileLabel[p]}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">
                    {g.mustOrder} <span className="font-medium text-gray-600">{r.mustOrder}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-5 text-center">
            <p className="text-sm font-semibold text-ink">{g.moreRestaurants}</p>
            <p className="mt-1 text-xs text-gray-500">{g.moreRestaurantsText}</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Locked sections 06–11 ────────────────────────────────────── */}
      {lockedSections.map(({ id, number, title, teaserKey }, idx) => (
        <div key={id}>
          <section id={id} className="bg-white py-14">
            <div className="mx-auto max-w-4xl px-4">
              <SectionHeader number={number} title={title} free={false} freeBadge={g.free} paidBadge={g.paid} />
              <p className="mb-6 text-base leading-relaxed text-gray-600">
                {content.lockedTeasers[teaserKey]}
              </p>
              <div className="relative overflow-hidden rounded-2xl border border-gray-200">
                <div className="pointer-events-none select-none space-y-3 p-6 blur-sm">
                  {[75, 90, 60, 80].map((w, i) => (
                    <div key={i} className="h-4 rounded bg-gray-200" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-[3px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mb-3 h-8 w-8 text-gray-400">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <p className="text-sm font-bold text-ink">{g.lockTitle}</p>
                  <p className="mt-1 max-w-xs text-center text-xs text-gray-500">{g.lockText}</p>
                  <Link
                    href={`/${locale}/contact`}
                    className="mt-4 inline-block rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-700"
                  >
                    {g.lockCta}
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {idx < lockedSections.length - 1 && <SectionDivider />}
        </div>
      ))}

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-brand-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-500">
            {g.ctaSectionLabel}
          </p>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">{g.ctaHeading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">{g.ctaText}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-block rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-700 hover:shadow-md"
            >
              {g.ctaButton}
            </Link>
            <Link
              href={`/${locale}/destinations`}
              className="inline-block rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-600 transition-all duration-200 hover:bg-gray-50"
            >
              {g.ctaSecondary}
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">{g.ctaNote}</p>
        </div>
      </section>
    </article>
  );
}
