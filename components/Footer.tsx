import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-brand-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <p className="max-w-2xl">
          {siteConfig.name} guides are written and reviewed by our travel
          editorial team, drawing on official government travel advisories
          and up-to-date local information. Always confirm entry
          requirements with your destination's official sources before
          traveling.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/destinations" className="hover:text-brand-600">
            Destinations
          </Link>
          <Link href="/about" className="hover:text-brand-600">
            About
          </Link>
          <Link href="/terms" className="hover:text-brand-600">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-brand-600">
            Privacy
          </Link>
        </div>
        <p className="mt-6 text-xs text-gray-400">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
