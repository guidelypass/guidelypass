import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden className="text-2xl">
            🧭
          </span>
          <span className="text-xl font-extrabold tracking-tight text-brand-700">
            Guidely<span className="font-medium text-brand-500">Pass</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/destinations"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            Destinations
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
