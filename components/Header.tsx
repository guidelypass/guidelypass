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

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/destinations"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            Destinations
          </Link>
          <Link
            href="/destinations"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            Experiences
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/destinations"
            aria-label="Search destinations"
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
          </Link>
          <Link
            href="/account"
            aria-label="Sign in"
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
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
