import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isValidLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : ("en" as Locale);
  const dict = await getDictionary(locale);
  return {
    title: {
      default: `${siteConfig.name} | ${dict.meta.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    alternates: {
      languages: {
        en: `/en`,
        pt: `/pt`,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
