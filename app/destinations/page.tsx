import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Browse purchasable travel guides for popular destinations.",
};

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900">Destinations</h1>
      <p className="mt-2 text-gray-600">
        Our first destination guides are being written now. Check back soon.
      </p>
    </div>
  );
}
