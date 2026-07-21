import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isValidLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.contact.title };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-ink">{dict.contact.title}</h1>
      <p className="mt-4 text-gray-600">{dict.contact.text}</p>
      <p className="mt-6 text-gray-600">
        {dict.contact.emailLabel}{" "}
        <a
          href="mailto:hello@guidelypass.com"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          hello@guidelypass.com
        </a>
      </p>
    </div>
  );
}
