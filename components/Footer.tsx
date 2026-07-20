import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-brand-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <p className="max-w-2xl">
          Os guias da {siteConfig.name} são escritos e revisados pela nossa
          equipe editorial de viagens, com base em avisos oficiais de órgãos
          governamentais e informações locais atualizadas. Sempre confirme os
          requisitos de entrada nas fontes oficiais do seu destino antes de
          viajar.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/destinations" className="hover:text-brand-600">
            Destinos
          </Link>
          <Link href="/about" className="hover:text-brand-600">
            Sobre
          </Link>
          <Link href="/terms" className="hover:text-brand-600">
            Termos
          </Link>
          <Link href="/privacy" className="hover:text-brand-600">
            Privacidade
          </Link>
        </div>
        <p className="mt-6 text-xs text-gray-400">
          &copy; {year} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
