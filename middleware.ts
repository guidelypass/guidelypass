import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "pt", "fr", "de", "es", "zh"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

// Country → locale mappings
const countryLocaleMap: Record<string, Locale> = {
  // Portuguese
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt", TL: "pt",
  // French
  FR: "fr", BE: "fr", LU: "fr", SN: "fr", CI: "fr", CG: "fr", CD: "fr",
  CM: "fr", GN: "fr", BF: "fr", ML: "fr", NE: "fr", TD: "fr", MG: "fr",
  DZ: "fr", MA: "fr", TN: "fr",
  // German
  DE: "de", AT: "de", LI: "de",
  // Spanish
  ES: "es", MX: "es", CO: "es", AR: "es", CL: "es", PE: "es", VE: "es",
  EC: "es", BO: "es", PY: "es", UY: "es", GT: "es", HN: "es", SV: "es",
  NI: "es", CR: "es", PA: "es", CU: "es", DO: "es", PH: "es",
  // Chinese
  CN: "zh", TW: "zh", HK: "zh", MO: "zh", SG: "zh",
};

// Language tag prefix → locale
function matchLocale(lang: string): Locale | null {
  const l = lang.toLowerCase().trim();
  if (l.startsWith("zh")) return "zh";
  if (l.startsWith("pt")) return "pt";
  if (l.startsWith("fr")) return "fr";
  if (l.startsWith("de")) return "de";
  if (l.startsWith("es")) return "es";
  if (l.startsWith("en")) return "en";
  return null;
}

function detectLocale(request: NextRequest): Locale {
  // 1. Browser Accept-Language header
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    for (const segment of acceptLang.split(",")) {
      const locale = matchLocale(segment.split(";")[0]);
      if (locale) return locale;
    }
  }

  // 2. Vercel IP country (injected automatically on Vercel edge)
  const country = request.headers.get("x-vercel-ip-country") ?? "";
  if (country && countryLocaleMap[country]) return countryLocaleMap[country];

  // 3. Default to English
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, Next.js internals, API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (pathnameHasLocale) {
    const res = NextResponse.next();
    res.headers.set("x-pathname", pathname);
    return res;
  }

  // Redirect legacy slug
  if (pathname === "/como-funciona") {
    const locale = detectLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/how-it-works`, request.url));
  }

  const locale = detectLocale(request);
  const redirectUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}`,
    request.url
  );
  const res = NextResponse.redirect(redirectUrl);
  res.headers.set("x-pathname", redirectUrl.pathname);
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|images|.*\\..*).*)"],
};
