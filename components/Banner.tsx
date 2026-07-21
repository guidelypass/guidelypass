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
  return (
    <section>
      <Image
        src={bannerMap[lang]}
        alt={dict.banner.preHeadline}
        width={1672}
        height={818}
        sizes="100vw"
        className="h-auto w-full"
        priority
      />
    </section>
  );
}
