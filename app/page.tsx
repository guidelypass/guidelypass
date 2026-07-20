import Image from "next/image";
import Link from "next/link";
import { regions, experiences } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
          <Image
            src="/images/banner-guidely-ptbr.png"
            alt="GuidelyPass — seu guia interativo de viagem para o mundo"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/destinations"
              className="inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Explorar Destinos
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              Planejar Minha Viagem
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Regiões em Destaque
            </h2>
            <p className="mt-1 text-gray-600">
              Explore guias de destino por região.
            </p>
          </div>
          <Link
            href="/destinations"
            className="hidden text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
          >
            Ver todos &rarr;
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href="/destinations"
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-100">
                <Image
                  src={region.destinations[0].image}
                  alt={region.name}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{region.name}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {region.destinations.map((d) => d.name).join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900">
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
                className="group relative flex aspect-square items-end overflow-hidden rounded-2xl"
              >
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="relative z-10 p-4 text-lg font-bold text-white">
                  {experience.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Mais destinos em breve
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-gray-600">
          Estamos escrevendo nossos primeiros guias de destino agora. Volte em
          breve para adquirir um guia completo e pronto para usar na sua
          próxima viagem.
        </p>
      </section>
    </div>
  );
}
