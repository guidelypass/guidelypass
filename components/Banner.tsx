import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export default function Banner({ dict }: Props) {
  return (
    <section>
      <Image
        src="/images/banner-guidely-ptbr.png"
        alt={dict.banner.preHeadline}
        width={1672}
        height={495}
        sizes="100vw"
        className="h-auto w-full"
        priority
      />
    </section>
  );
}
