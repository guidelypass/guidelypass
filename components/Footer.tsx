import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export default function Footer({ lang, dict }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-brand-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <p className="max-w-2xl">{dict.footer.disclaimer}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href={`/${lang}/destinations`} className="hover:text-brand-600">
            {dict.nav.destinations}
          </Link>
          <Link href={`/${lang}/about`} className="hover:text-brand-600">
            {dict.nav.about}
          </Link>
          <Link href={`/${lang}/terms`} className="hover:text-brand-600">
            Terms
          </Link>
          <Link href={`/${lang}/privacy`} className="hover:text-brand-600">
            Privacy
          </Link>
        </div>
        <p className="mt-6 text-xs text-gray-400">
          &copy; {year} {siteConfig.name}. {dict.footer.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}
