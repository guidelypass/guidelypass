import Image from "next/image";
import Link from "next/link";
import { siteConfig, regions, experiences } from "@/lib/site-config";

const heroCollage = regions.flatMap((region) => region.destinations).slice(0, 4);

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              One complete guide per destination: entry requirements, the best
              time to go, what to do, where to eat, and what locals wish you
              knew before you arrived.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/destinations"
                className="inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Explore Destinations
              </Link>
              <Link
                href="/about"
                className="inline-block rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroCollage.map((destination, index) => (
              <div
                key={destination.slug}
                className={`relative overflow-hidden rounded-2xl bg-brand-100 ${
                  index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(min-width: 1024px) 320px, 45vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Featured Regions
            </h2>
            <p className="mt-1 text-gray-600">
              Browse destination guides by region.
            </p>
          </div>
          <Link
            href="/destinations"
            className="hidden text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
          >
            View all &rarr;
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
              Popular Experiences
            </h2>
            <p className="mt-1 text-gray-600">
              Find guides built around what you want to do.
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
          More destinations, coming soon
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-gray-600">
          We&apos;re writing our first destination guides now. Check back
          shortly to purchase a complete, ready-to-use guide for your next
          trip.
        </p>
      </section>
    </div>
  );
}
