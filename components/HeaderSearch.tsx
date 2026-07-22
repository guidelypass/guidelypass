"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type DestinationItem = {
  slug: string;
  name: string;
  regionName: string;
};

type Props = {
  lang: Locale;
  destinations: DestinationItem[];
  placeholder: string;
  searchLabel: string;
};

export default function HeaderSearch({ lang, destinations, placeholder, searchLabel }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return destinations
      .filter((d) => d.name.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query, destinations]);

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
      router.push(`/${lang}/destinations?q=${encodeURIComponent(results[0].slug)}`);
    } else {
      router.push(`/${lang}/destinations?q=${encodeURIComponent(query)}`);
    }
    closeSearch();
  }

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        aria-label={searchLabel}
        onClick={openSearch}
        className={`text-gray-500 transition-all duration-200 hover:text-brand-600 ${
          open ? "invisible" : ""
        }`}
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

      <div
        className={`absolute right-0 top-1/2 z-20 -translate-y-1/2 transition-all duration-200 ease-out ${
          open
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-2 opacity-0"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            tabIndex={open ? 0 : -1}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setTimeout(closeSearch, 150)}
            placeholder={placeholder}
            className="w-[min(144px,calc(100vw-200px))] rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm text-ink shadow-sm outline-none transition-all duration-200 focus:border-brand-400 focus:shadow-md sm:w-64"
          />
        </form>

        {results.length > 0 && (
          <ul className="animate-dropdown-in absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
            {results.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/${lang}/destinations/${d.slug}`}
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-ink transition-colors duration-150 hover:bg-brand-50"
                >
                  <span>{d.name}</span>
                  <span className="text-xs text-gray-400">{d.regionName}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
