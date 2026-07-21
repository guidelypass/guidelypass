import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

const bannerMap: Record<Locale, string> = {
  pt: "/images/banner-portugues.png",
  en: "/images/banner-ingles.png",
  fr: "/images/banner-frances.png",
  de: "/images/banner-alemao.png",
  es: "/images/banner-espanhol.png",
  zh: "/images/banner-china.png",
};

export default function Banner({ lang, dict }: Props) {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <Image
        src={bannerMap[lang]}
        alt={dict.banner.preHeadline}
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
    </section>
  );
}
