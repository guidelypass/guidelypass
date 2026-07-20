import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinos",
  description: "Explore guias de viagem à venda para os principais destinos.",
};

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900">Destinos</h1>
      <p className="mt-2 text-gray-600">
        Nossos primeiros guias de destino estão sendo escritos agora. Volte
        em breve.
      </p>
    </div>
  );
}
