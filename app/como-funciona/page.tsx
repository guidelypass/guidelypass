import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Como Funciona",
  description:
    "Entenda como a GuidelyPass funciona e o que está incluído em cada guia de viagem.",
};

const guideFeatures = [
  {
    title: "Roteiro dia a dia",
    description:
      "Sugestões de o que ver e fazer em cada período — manhã, tarde e noite.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Onde comer",
    description:
      "Restaurantes, cafés e bares locais para todos os gostos e orçamentos.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    title: "Onde se hospedar",
    description:
      "Opções de hospedagem por bairro, com dicas de localização e custo-benefício.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <line x1="12" y1="4" x2="12" y2="10" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    title: "Como se locomover",
    description:
      "Transporte público, táxi, apps e como chegar do aeroporto ao centro.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Dicas práticas",
    description:
      "Horários, costumes locais, moeda, idioma e o que definitivamente não fazer.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2} />
      </svg>
    ),
  },
  {
    title: "Segurança",
    description:
      "Áreas a evitar, contatos de emergência e como agir em situações inesperadas.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-gray-100 bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
            Como funciona
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            A GuidelyPass publica guias de viagem completos para quem já sabe o
            destino e quer chegar preparado — sem pesquisar em dez sites
            diferentes.
          </p>
        </div>
      </section>

      {/* 3 passos */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 sm:grid-cols-3">
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

      {/* O que inclui */}
      <section className="border-t border-gray-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-semibold text-ink">
              O que está incluído em cada guia
            </h2>
            <p className="mt-2 text-gray-600">
              Cada guia é escrito por viajantes experientes para que você
              aproveite cada dia.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideFeatures.map(({ title, description, icon }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mt-0.5 flex-shrink-0 text-brand-600">
                  {icon}
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
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Pronto para planejar sua viagem?
          </h2>
          <p className="mt-2 text-gray-600">
            Explore os destinos disponíveis ou entre em contato para saber
            quando novos guias serão lançados.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/destinations"
              className="rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-accent-700 hover:shadow-md"
            >
              Explorar destinos
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all duration-200 ease-out hover:border-brand-300 hover:bg-brand-50"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
