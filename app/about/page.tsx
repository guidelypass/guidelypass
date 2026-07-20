import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a ${siteConfig.name} e como nossos guias de destino são produzidos.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-4xl font-semibold text-ink">Sobre Nós</h1>

      <div className="prose mt-8 max-w-none prose-a:text-brand-600">
        <p>
          A {siteConfig.name} foi criada para viajantes que querem uma
          resposta completa e confiável para um destino, em vez de dez blogs
          e fóruns diferentes. Cada guia é escrito e revisado pela nossa
          equipe editorial de viagens e cobre requisitos de entrada, a melhor
          época para visitar, segurança e costumes locais, o que levar, onde
          comer e quais experiências valem o seu tempo.
        </p>
        <p>
          Os guias são vendidos individualmente por destino e liberados
          instantaneamente na sua conta após a compra.
        </p>
      </div>
    </div>
  );
}
