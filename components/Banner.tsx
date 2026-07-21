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
    <>
      {/* ── Mobile: photo + right-side gradient overlay ── */}
      <section className="relative md:hidden" style={{ height: "clamp(160px,48vw,280px)" }}>
        <Image
          src="/images/banner-guidely-ptbr.png"
          alt={b.preHeadline}
          fill
          priority
          className="object-cover object-left"
          sizes="100vw"
        />
        {/* blue gradient from right */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to left, #0e3fa8ee 38%, #0e3fa844 62%, transparent 80%)" }}
        />
        <div className="absolute right-0 top-0 flex h-full w-[52%] flex-col justify-center pr-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">
            {b.preHeadline}
          </p>
          <p
            className="font-black uppercase leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(18px,5.5vw,34px)" }}
          >
            {b.headline1}
          </p>
          <p
            className="font-black uppercase leading-none tracking-tight text-cyan-300"
            style={{ fontSize: "clamp(18px,5.5vw,34px)" }}
          >
            {b.headline2}
          </p>
        </div>
      </section>

      {/* ── Desktop: split layout matching the reference ── */}
      <section
        className="relative hidden w-full overflow-hidden md:flex"
        style={{ height: "clamp(280px,34vw,495px)" }}
      >
        {/* Left: airport photo (crops out the text on the right of the source image) */}
        <div className="relative w-[52%] flex-shrink-0 overflow-hidden">
          <Image
            src="/images/banner-guidely-ptbr.png"
            alt={b.preHeadline}
            fill
            priority
            className="object-cover object-left"
            sizes="52vw"
          />
        </div>

        {/* Right: blue HTML panel — replaces the embedded text in the image */}
        <div
          className="relative flex flex-1 flex-col justify-between overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a56c8 0%, #0e3fa8 45%, #091f6b 100%)",
            padding: "clamp(16px,2.4vw,38px) clamp(14px,2vw,32px)",
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
            style={{ width: "clamp(20px,2.8vw,40px)", height: "clamp(20px,2.8vw,40px)" }}
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
              style={{ height: "clamp(20px,2.8vw,40px)" }}
            />
            <p
              className="mt-0.5 font-bold uppercase text-white/60"
              style={{ fontSize: "clamp(6px,0.6vw,9px)", letterSpacing: "0.2em" }}
            >
              {b.logoSubtitle}
            </p>
          </div>

          {/* Main headline */}
          <div className="relative">
            <p
              className="font-semibold uppercase text-white/75"
              style={{ fontSize: "clamp(7px,0.85vw,12px)", letterSpacing: "0.22em" }}
            >
              {b.preHeadline}
            </p>
            <p
              className="font-black uppercase leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(22px,3.8vw,56px)" }}
            >
              {b.headline1}
            </p>
            <p
              className="font-black uppercase leading-none tracking-tight text-cyan-300"
              style={{ fontSize: "clamp(22px,3.8vw,56px)" }}
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
                  paddingLeft: i > 0 ? "clamp(10px,1.4vw,22px)" : undefined,
                  paddingRight: i < 2 ? "clamp(10px,1.4vw,22px)" : undefined,
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : undefined,
                }}
              >
                <span
                  className="text-white"
                  style={{ width: "clamp(14px,1.8vw,26px)", height: "clamp(14px,1.8vw,26px)" }}
                >
                  {icon}
                </span>
                <p
                  className="mt-1 text-center font-bold uppercase leading-tight text-white"
                  style={{ fontSize: "clamp(6px,0.68vw,9.5px)", letterSpacing: "0.12em" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
