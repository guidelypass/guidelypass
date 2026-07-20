import Image from "next/image";
import Link from "next/link";
import { regions, experiences } from "@/lib/site-config";

const guideFeatures = [
  {
    title: "Roteiro dia a dia",
    description: "Sugestões de o que ver e fazer em cada período — manhã, tarde e noite.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="14" x2="8" y2="14" strokeWidth={2} />
        <line x1="12" y1="14" x2="12" y2="14" strokeWidth={2} />
        <line x1="16" y1="14" x2="16" y2="14" strokeWidth={2} />
      </svg>
    ),
  },
  {
    title: "Onde comer",
    description: "Restaurantes, cafés e bares locais para todos os gostos e orçamentos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    title: "Onde se hospedar",
    description: "Opções de hospedagem por bairro, com dicas de localização e custo-benefício.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <line x1="12" y1="4" x2="12" y2="10" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    title: "Como se locomover",
    description: "Transporte público, táxi, apps e como chegar do aeroporto ao centro.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Dicas práticas",
    description: "Horários, costumes locais, moeda, idioma e o que definitivamente não fazer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2} />
      </svg>
    ),
  },
  {
    title: "Segurança",
    description: "Áreas a evitar, contatos de emergência e como agir em situações inesperadas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-brand-50">
        <Image
          src="/images/banner-guidely-ptbr.png"
          alt="GuidelyPass — seu guia interativo de viagem para o mundo"
          width={1672}
          height={495}
          sizes="100vw"
          className="h-auto w-full"
          priority
        />
      </section>

      {/* Hero tagline + busca */}
      <section className="border-b border-gray-100 bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Tudo que você precisa saber antes de embarcar.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Guias completos com roteiros, restaurantes, hotéis, transporte e dicas locais — para quem já sabe o destino e quer viajar preparado.
          </p>
          <form
            action="/destinations"
            method="GET"
            className="mt-8 flex items-center justify-center gap-2"
          >
            <input
              name="q"
              type="text"
              placeholder="Para onde você vai? Ex: Paris, Tóquio..."
              className="w-full max-w-sm rounded-full border border-brand-200 bg-white px-5 py-3 text-sm text-ink shadow-sm outline-none transition-all duration-200 focus:border-brand-400 focus:shadow-md"
            />
            <button
              type="submit"
              className="flex-shrink-0 rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-accent-700 hover:shadow-md"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-serif text-3xl font-semibold text-ink">
            Como funciona
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Escolha o destino",
                description:
                  "Pesquise pelo lugar que você vai visitar e veja se o guia já está disponível.",
              },
              {
                step: "02",
                title: "Adquira o guia",
                description:
                  "Compra única, sem assinatura. Você acessa imediatamente e pode usar para sempre.",
              },
              {
                step: "03",
                title: "Explore com confiança",
                description:
                  "Roteiro pronto, dicas locais e tudo que você precisa — sem imprevistos na viagem.",
              },
            ].map(({ step, title, description }, i) => (
              <div key={step} className="relative text-center">
                {i < 2 && (
                  <div className="absolute left-full top-8 hidden w-10 -translate-x-5 border-t-2 border-dashed border-brand-100 sm:block" />
                )}
                <span className="font-serif text-5xl font-semibold text-brand-100">
                  {step}
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que inclui o guia */}
      <section className="border-t border-gray-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-semibold text-ink">
              O que está incluído
            </h2>
            <p className="mt-2 text-gray-600">
              Cada guia é escrito por viajantes experientes para que você aproveite cada dia.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideFeatures.map(({ title, description, icon }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mt-0.5 flex-shrink-0 text-brand-600">{icon}</span>
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

      {/* Regiões em Destaque */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">
              Regiões em Destaque
            </h2>
            <p className="mt-1 text-gray-600">
              Explore guias de destino por região.
            </p>
          </div>
          <Link
            href="/destinations"
            className="hidden text-sm font-semibold text-brand-600 transition-colors duration-200 hover:text-brand-700 sm:block"
          >
            Ver todos &rarr;
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href="/destinations"
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-100">
                <Image
                  src={region.destinations[0].image}
                  alt={region.name}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {region.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {region.destinations.map((d) => d.name).join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiências Populares */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-ink">
              Experiências Populares
            </h2>
            <p className="mt-1 text-gray-600">
              Encontre guias organizados pelo que você quer fazer.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((experience) => (
              <Link
                key={experience.slug}
                href="/destinations"
                className="relative flex aspect-square items-end overflow-hidden rounded-xl shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="relative z-10 p-4 font-serif text-lg font-semibold text-white">
                  {experience.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA em breve */}
      <section className="bg-brand-900 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-white">
            Nossos primeiros guias chegam em breve
          </h2>
          <p className="mt-3 text-brand-200">
            Estamos finalizando os guias para os primeiros destinos. Entre em contato para ser avisado quando estiverem disponíveis.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-accent-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-accent-500 hover:shadow-lg"
          >
            Quero ser avisado
          </Link>
        </div>
      </section>
    </div>
  );
}
