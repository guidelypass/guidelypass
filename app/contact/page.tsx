import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a equipe da ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-4xl font-semibold text-ink">Contato</h1>
      <div className="prose mt-8 max-w-none prose-a:text-brand-600">
        <p>
          Dúvidas sobre um guia, uma compra ou um destino que ainda não
          cobrimos? Entre em contato e nossa equipe vai te responder.
        </p>
        <p>
          Envie um e-mail para{" "}
          <a href="mailto:hello@guidelypass.com">hello@guidelypass.com</a>.
        </p>
      </div>
    </div>
  );
}
