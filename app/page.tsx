import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-brand-100 bg-brand-50">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            {siteConfig.tagline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Everything you need for a destination, in one place: entry
            requirements, the best time to go, what to do, where to eat, and
            what locals wish you knew before you arrived.
          </p>
          <div className="mt-8">
            <Link
              href="/destinations"
              className="inline-block rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-gray-500">
          Destination guides are coming soon. Check back shortly.
        </p>
      </section>
    </div>
  );
}
