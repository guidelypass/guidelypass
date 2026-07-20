import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conta",
  description: "Entre para comprar e acessar seus guias de destino.",
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <h1 className="text-3xl font-extrabold text-gray-900">Entrar</h1>
      <p className="mt-2 text-gray-600">
        O login será lançado junto com nossos primeiros guias. Você vai poder
        entrar apenas com seu e-mail — sem senha — quando estiver pronto para
        comprar um guia.
      </p>
    </div>
  );
}
