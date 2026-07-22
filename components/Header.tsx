import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "@/components/HeaderSearch";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { regions } from "@/lib/site-config";
import { getDictionary, type Locale } from "@/lib/i18n";

type Props = {
  lang: Locale;
};

export default async function Header({ lang }: Props) {
  const dict = await getDictionary(lang);

  const destinations = regions.flatMap((region) =>
    region.destinations.map((d) => ({
      slug: d.slug,
      name: dict.destinations[d.slug as keyof typeof dict.destinations].name,
      regionName: dict.regions[region.slug as keyof typeof dict.regions].name,
    }))
  );

  const navItems = [
    { label: dict.nav.destinations, href: `/${lang}/destinations` },
    { label: dict.nav.howItWorks, href: `/${lang}/how-it-works` },
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link href={`/${lang}`} className="flex items-center">
          <Image src="/images/guidely-logo.png" alt="GuidelyPass" width={1645} height={778} className="h-9 w-auto sm:h-10" priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <HeaderSearch lang={lang} destinations={destinations} placeholder={dict.search.placeholder} searchLabel={dict.search.label} />
          <LanguageSwitcher currentLang={lang} />
          <Link href={`/${lang}/account`} aria-label={dict.account.title} className="hidden text-gray-500 transition-colors duration-200 hover:text-brand-600 md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
          <MobileMenu lang={lang} navItems={navItems} accountLabel={dict.account.title} />
        </div>
      </div>
    </header>
  );
}
