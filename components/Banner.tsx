import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

const bannerMap: Record<Locale, string> = {
  pt: "/images/banner-portugues.jpeg",
  en: "/images/banner-ingles.jpeg",
  fr: "/images/banner-frances.jpeg",
  de: "/images/banner-alemao.jpeg",
  es: "/images/banner-espanhol.jpeg",
  zh: "/images/banner-chines.jpeg",
};

export default function Banner({ lang, dict }: Props) {
  const src = bannerMap[lang];
  const alt = dict.banner.preHeadline;

  return (
    <section>
      <div className="relative h-[135px] w-full overflow-hidden sm:hidden">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover object-center" priority />
      </div>
      <Image src={src} alt={alt} width={1672} height={818} sizes="100vw" className="hidden h-auto w-full sm:block" priority />
    </section>
  );
}
