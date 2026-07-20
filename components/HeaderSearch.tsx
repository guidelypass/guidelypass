"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { regions } from "@/lib/site-config";

const allDestinations = regions.flatMap((region) =>
  region.destinations.map((destination) => ({
    ...destination,
    regionName: region.name,
  }))
);

export default function HeaderSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allDestinations
      .filter((destination) => destination.name.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  function openSearch() {
    setOpen(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function closeSearch() {
    setOpen(false);
    setQuery("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (results[0]) {
      router.push(`/destinations?q=${encodeURIComponent(results[0].slug)}`);
    } else {
      router.push(`/destinations?q=${encodeURIComponent(query)}`);
    }
    closeSearch();
  }

  if (!open) {
    return (
      <button
        type="button"
        aria-label="Buscar destinos"
        onClick={openSearch}
        className="text-gray-500 transition-colors hover:text-brand-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    );
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => setTimeout(closeSearch, 150)}
          placeholder="Para onde você vai?"
          className="w-40 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm text-ink outline-none transition-all focus:w-56 focus:border-brand-400 sm:w-48 sm:focus:w-64"
        />
      </form>

      {results.length > 0 && (
        <ul className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
          {results.map((destination) => (
            <li key={destination.slug}>
              <Link
                href={`/destinations?q=${destination.slug}`}
                className="flex items-center justify-between px-4 py-2 text-sm text-ink hover:bg-brand-50"
              >
                <span>{destination.name}</span>
                <span className="text-xs text-gray-400">
                  {destination.regionName}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
