import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} and how our destination guides are put together.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900">About Us</h1>

      <div className="prose mt-8 max-w-none prose-a:text-brand-600">
        <p>
          {siteConfig.name} was built for travelers who want one reliable,
          complete answer for a destination instead of ten different blog
          posts and forum threads. Each guide is written and reviewed by our
          travel editorial team and covers entry requirements, the best time
          to visit, safety and local customs, what to pack, where to eat,
          and which experiences are worth your time.
        </p>
        <p>
          Guides are purchased individually per destination and unlocked
          instantly for your account after checkout.
        </p>
      </div>
    </div>
  );
}
