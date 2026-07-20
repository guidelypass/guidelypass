import Image from "next/image";
import Link from "next/link";
import { regions, experiences } from "@/lib/site-config";

const destinations = regions.flatMap((region) =>
  region.destinations.map((d) => ({ ...d, regionName: region.name }))
);

export default function HomePage() {
  return (
    <div>
      {/* Banner */}
      <section>
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

      {/* Destinos */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-ink">Destinos</h2>
              <p className="mt-1 text-gray-600">Encontre o guia para o seu próximo destino.</p>
            </div>
            <Link
              href="/destinations"
              className="hidden text-sm font-semibold text-brand-600 transition-colors duration-200 hover:text-brand-700 sm:block"
            >
              Ver todos &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations?q=${destination.slug}`}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-100">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(min-width: 1024px) 280px, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {destination.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-brand-500">
                    {destination.regionName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experiências */}
      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-ink">Experiências</h2>
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
      <section className="bg-brand-900 py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-white">
            Primeiros guias chegam em breve
          </h2>
          <p className="mt-3 text-brand-200">
            Estamos finalizando os guias para os primeiros destinos. Entre em
            contato para ser avisado quando estiverem disponíveis.
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
