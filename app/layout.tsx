import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Discover the World`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "GuidelyPass publishes complete, detailed travel guides for top destinations.",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/en";
  const segment = pathname.split("/")[1];
  const lang = ["en", "pt"].includes(segment) ? segment : "en";

  return (
    <html lang={lang} className={jakarta.variable}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
