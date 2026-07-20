import type { Metadata } from "next";
import { regions } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Destinos",
  description: "Explore guias de viagem à venda para os principais destinos.",
};

export default async function DestinationsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.toLowerCase().trim();
  const match = query
    ? regions
        .flatMap((region) => region.destinations)
        .find(
          (destination) =>
            destination.slug === query ||
            destination.name.toLowerCase() === query
        )
    : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-serif text-4xl font-semibold text-ink">Destinos</h1>
      {match ? (
        <p className="mt-2 text-gray-600">
          O guia de <strong>{match.name}</strong> está sendo escrito agora.
          Volte em breve para conferir.
        </p>
      ) : (
        <p className="mt-2 text-gray-600">
          Nossos primeiros guias de destino estão sendo escritos agora. Volte
          em breve.
        </p>
      )}
    </div>
  );
}
