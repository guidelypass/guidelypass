import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { regions } from "@/lib/site-config";

const allDestinations = regions.flatMap((region) =>
  region.destinations.map((d) => ({ ...d, regionName: region.name }))
);

export async function generateStaticParams() {
  return allDestinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = allDestinations.find((d) => d.slug === slug);
  if (!destination) return {};
  return {
    title: destination.name,
    description: destination.intro.slice(0, 160),
  };
}

const previewItems = [
  "Roteiro detalhado dia a dia com horários e rotas sugeridas",
  "Os melhores restaurantes por bairro e faixa de preço",
  "Hospedagem recomendada — de hostels a hotéis boutique",
  "Como chegar, como se locomover e quanto gastar com transporte",
  "Dicas de segurança, costumes locais e o que não fazer",
  "Contatos de emergência e informações consulares",
];

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = allDestinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 lg:h-[480px]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-6xl px-4 pb-10">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">
              {destination.regionName} · {destination.country}
            </p>
            <h1 className="mt-1 text-5xl font-bold text-white sm:text-6xl">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Fatos rápidos */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "País", value: destination.country },
              { label: "Idioma", value: destination.language },
              { label: "Moeda", value: destination.currency },
              { label: "Melhor época", value: destination.bestTime },
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

      {/* Introdução */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-ink">
            Sobre {destination.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            {destination.intro}
          </p>
        </div>
      </section>

      {/* Destaques */}
      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-ink">
            O que não pode faltar
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Uma amostra do que esperar em {destination.name}.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destination.highlights.map(({ title, description }) => (
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

      {/* Preview bloqueado */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-ink">
            O guia completo inclui muito mais
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            O que você viu acima é apenas uma amostra. O guia completo de{" "}
            {destination.name} cobre cada detalhe da sua viagem.
          </p>
          <div className="relative mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-6">
            <ul className="space-y-3 select-none blur-sm">
              {previewItems.map((item) => (
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
                Disponível no guia completo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Guia de viagem
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink">
            Viaje para {destination.name} sem improviso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            O guia completo de {destination.name} reúne tudo que você precisa
            saber em um único documento — roteiro, gastronomia, hospedagem,
            transporte e dicas locais — para você aproveitar cada dia ao máximo.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-accent-700 hover:shadow-md"
            >
              Quero o guia de {destination.name}
            </Link>
            <Link
              href="/"
              className="inline-block rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-600 transition-all duration-200 ease-out hover:border-gray-300 hover:bg-gray-50"
            >
              Ver outros destinos
            </Link>
          </div>
          <p className="mt-5 text-xs text-gray-400">
            Guias em fase de lançamento. Entre em contato para ser avisado em
            primeira mão.
          </p>
        </div>
      </section>
    </div>
  );
}
