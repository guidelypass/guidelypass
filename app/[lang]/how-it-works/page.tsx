import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.howItWorks.title, description: dict.howItWorks.subtitle };
}

const featureIcons = [
  <svg key="cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  <svg key="eat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><line x1="7" y1="2" x2="7" y2="22" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg>,
  <svg key="hotel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><line x1="12" y1="4" x2="12" y2="10" /><line x1="2" y1="20" x2="22" y2="20" /></svg>,
  <svg key="car" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  <svg key="info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2} /></svg>,
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
];

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const hw = dict.howItWorks;

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
            {hw.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            {hw.subtitle}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 sm:grid-cols-3">
            {hw.steps.map(({ step, title, description }, i) => (
              <div key={step} className="relative text-center">
                {i < 2 && (
                  <div className="absolute left-full top-8 hidden w-10 -translate-x-5 border-t-2 border-dashed border-brand-100 sm:block" />
                )}
                <span className="text-5xl font-semibold text-brand-100">
                  {step}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included features */}
      <section className="border-t border-gray-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-ink">
              {hw.includedTitle}
            </h2>
            <p className="mt-2 text-gray-600">{hw.includedSubtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hw.features.map(({ title, description }, idx) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mt-0.5 flex-shrink-0 text-brand-600">
                  {featureIcons[idx]}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-white py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-2xl font-semibold text-ink">{hw.ctaHeading}</h2>
          <p className="mt-2 text-gray-600">{hw.ctaSubtitle}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/destinations`}
              className="rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-accent-700 hover:shadow-md"
            >
              {hw.ctaButton}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all duration-200 ease-out hover:border-brand-300 hover:bg-brand-50"
            >
              {hw.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
