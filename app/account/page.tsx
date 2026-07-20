import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign in to purchase and access your destination guides.",
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <h1 className="text-3xl font-extrabold text-gray-900">Sign In</h1>
      <p className="mt-2 text-gray-600">
        Account sign-in is launching alongside our first guides. You&apos;ll
        be able to sign in with just your email — no password needed — when
        you&apos;re ready to purchase a guide.
      </p>
    </div>
  );
}
