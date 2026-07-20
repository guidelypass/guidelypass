import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${siteConfig.name} team.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900">Contact</h1>
      <div className="prose mt-8 max-w-none prose-a:text-brand-600">
        <p>
          Questions about a guide, a purchase, or a destination we haven&apos;t
          covered yet? Reach out and our team will get back to you.
        </p>
        <p>
          Email us at{" "}
          <a href="mailto:hello@guidelypass.com">hello@guidelypass.com</a>.
        </p>
      </div>
    </div>
  );
}
