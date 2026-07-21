import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "pt"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

const ptCountries = ["BR", "PT", "AO", "MZ", "CV", "GW", "ST", "TL"];

function matchLocale(lang: string): Locale | null {
  const l = lang.toLowerCase();
  if (l.startsWith("pt")) return "pt";
  if (l.startsWith("en")) return "en";
  return null;
}

function detectLocale(request: NextRequest): Locale {
  // 1. Browser Accept-Language header
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    for (const segment of acceptLang.split(",")) {
      const locale = matchLocale(segment.split(";")[0].trim());
      if (locale) return locale;
    }
  }

  // 2. Vercel IP country (injected automatically on Vercel edge)
  const country = request.headers.get("x-vercel-ip-country") ?? "";
  if (ptCountries.includes(country)) return "pt";

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

  // Redirect /como-funciona (old PT-only slug) to locale-aware URL
  if (pathname === "/como-funciona") {
    const locale = detectLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/how-it-works`, request.url)
    );
  }

  // Detect and redirect
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
