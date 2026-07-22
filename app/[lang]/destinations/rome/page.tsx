import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import RomeGuide from "@/components/RomeGuide";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const titles: Record<string, string> = {
    pt: "Guia Interativo de Roma — GuidelyPass",
    en: "Interactive Rome Guide — GuidelyPass",
    fr: "Guide Interactif de Rome — GuidelyPass",
    de: "Interaktiver Rom-Reiseführer — GuidelyPass",
    es: "Guía Interactiva de Roma — GuidelyPass",
    zh: "罗马互动指南 — GuidelyPass",
  };
  const descriptions: Record<string, string> = {
    pt: "Explore os 30 principais pontos turísticos de Roma com filtros por perfil (família, casal, amigos), modo dia de chuva e estimador de tempo e custo.",
    en: "Explore Rome's top 30 attractions with filters by traveler profile, rainy day mode, and a time & cost estimator.",
    fr: "Explorez les 30 principaux sites de Rome avec des filtres par profil, mode jour de pluie et estimateur de temps et coût.",
    de: "Entdecken Sie Roms 30 Top-Sehenswürdigkeiten mit Profilfiltern, Regentag-Modus und Zeit- und Kostenschätzer.",
    es: "Explora los 30 principales atractivos de Roma con filtros por perfil, modo día lluvioso y estimador de tiempo y costo.",
    zh: "探索罗马30个主要景点，提供旅行者类型筛选、雨天模式和时间成本估算器。",
  };
  return {
    title: titles[lang] ?? titles.en,
    description: descriptions[lang] ?? descriptions.en,
  };
}

export default async function RomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 sm:h-96 lg:h-[480px]">
        <Image
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=85"
          alt="Roma, Itália"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:pb-12">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Link href={`/${locale}/destinations`} className="text-xs font-medium text-white/60 hover:text-white/90 transition-colors">
                ← Destinos
              </Link>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-xs font-medium text-white/60">Europa · Itália</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white">Roma</h1>
            <p className="mt-2 text-sm sm:text-base text-white/75 max-w-xl">
              A Cidade Eterna — onde 2.800 anos de história convivem com uma das cenas gastronômicas e culturais mais vibrantes do mundo.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { icon: "🇮🇹", label: "Itália" },
                { icon: "🗣️", label: "Italiano" },
                { icon: "💶", label: "Euro" },
                { icon: "🌤️", label: "Primavera ou Outono" },
                { icon: "📅", label: "3–5 dias recomendados" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-ink mb-3">Por que visitar Roma?</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Roma é a única cidade do mundo onde você pode tomar um café da manhã ao lado de um aqueduto de 2.000 anos, almoçar em frente ao Pantheon, visitar a maior coleção de arte do mundo à tarde e jantar em ruelas medievais iluminadas à noite. A Cidade Eterna não é só um destino — é uma experiência que muda a forma de ver o mundo.
            </p>
            <div className="mt-4 rounded-xl bg-amber-50 border border-amber-100 p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1">💡 Como usar este guia</p>
              <p className="text-xs text-amber-800">Use os filtros abaixo para personalizar sua experiência. Selecione seu perfil (família, casal ou amigos), ative o modo chuva se o tempo não cooperar, e adicione pontos ao seu roteiro para estimar tempo e custo. O guia completo desbloqueia roteiros por dia organizados por bairro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive guide */}
      <RomeGuide lang={locale} />

      {/* CTA */}
      <section className="border-t border-brand-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">Guia Completo</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
            Pronto para explorar Roma sem improvisar?
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
            O guia completo inclui roteiros diários organizados por bairro, onde ficar, os melhores restaurantes por perfil, dicas de insider e muito mais.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-block rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-700 hover:shadow-md"
            >
              Quero o guia completo de Roma
            </Link>
            <Link
              href={`/${locale}/destinations`}
              className="inline-block rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all duration-200"
            >
              Ver outros destinos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
