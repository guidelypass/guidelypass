import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/i18n";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

const GlobeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const PinIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CompassIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export default function Banner({ dict }: Props) {
  const b = dict.banner;
  const features = [
    { icon: GlobeIcon, text: b.feature1 },
    { icon: PinIcon, text: b.feature2 },
    { icon: CompassIcon, text: b.feature3 },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(200px,34vw,495px)" }}
    >
      {/* Full-width background image */}
      <Image
        src="/images/banner-guidely-ptbr.png"
        alt={b.preHeadline}
        fill
        priority
        className="object-cover object-left"
        sizes="100vw"
      />

      {/* Blue HTML panel overlaid on the right half — covers embedded image text */}
      <div
        className="absolute right-0 top-0 flex h-full flex-col justify-between overflow-hidden"
        style={{
          width: "48%",
          background: "linear-gradient(135deg, #1a56c8 0%, #0e3fa8 45%, #091f6b 100%)",
          padding: "clamp(14px,2.2vw,36px) clamp(12px,1.8vw,30px)",
        }}
      >
        {/* Dot-grid world-map watermark */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Airplane decoration */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="pointer-events-none absolute bottom-4 right-6 rotate-45 text-white opacity-20"
          style={{ width: "clamp(18px,2.6vw,38px)", height: "clamp(18px,2.6vw,38px)" }}
        >
          <path d="M21 16l-11-4L2 5l4 4.5L2 12l8-2 1 5.5L17 13l4 3z" />
        </svg>

        {/* Logo + subtitle */}
        <div className="relative flex flex-col">
          <Image
            src="/images/guidely-logo.png"
            alt="GuidelyPass"
            width={1645}
            height={778}
            className="w-auto"
            style={{ height: "clamp(20px,2.6vw,38px)" }}
          />
          <p
            className="mt-0.5 font-bold uppercase text-white/60"
            style={{ fontSize: "clamp(5px,0.55vw,8px)", letterSpacing: "0.2em" }}
          >
            {b.logoSubtitle}
          </p>
        </div>

        {/* Main headline */}
        <div className="relative">
          <p
            className="font-semibold uppercase text-white/75"
            style={{ fontSize: "clamp(7px,0.8vw,11px)", letterSpacing: "0.22em" }}
          >
            {b.preHeadline}
          </p>
          <p
            className="font-black uppercase leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(20px,3.8vw,56px)" }}
          >
            {b.headline1}
          </p>
          <p
            className="font-black uppercase leading-none tracking-tight text-cyan-300"
            style={{ fontSize: "clamp(20px,3.8vw,56px)" }}
          >
            {b.headline2}
          </p>
        </div>

        {/* Three features */}
        <div className="relative flex items-start">
          {features.map(({ icon, text }, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{
                paddingLeft: i > 0 ? "clamp(8px,1.2vw,20px)" : undefined,
                paddingRight: i < 2 ? "clamp(8px,1.2vw,20px)" : undefined,
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : undefined,
              }}
            >
              <span
                className="text-white"
                style={{ width: "clamp(12px,1.6vw,24px)", height: "clamp(12px,1.6vw,24px)" }}
              >
                {icon}
              </span>
              <p
                className="mt-1 text-center font-bold uppercase leading-tight text-white"
                style={{ fontSize: "clamp(5px,0.62vw,9px)", letterSpacing: "0.12em" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
