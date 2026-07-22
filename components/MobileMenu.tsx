"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type NavItem = { label: string; href: string };

type Props = {
  lang: Locale;
  navItems: NavItem[];
  accountLabel: string;
};

export default function MobileMenu({ lang, navItems, accountLabel }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <rect y="2" width="18" height="2" rx="1" fill="currentColor" />
          <rect y="8" width="18" height="2" rx="1" fill="currentColor" />
          <rect y="14" width="12" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(0,0,0,0.4)" }}
          />

          {/* Painel lateral */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: 280,
              zIndex: 50,
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#9ca3af", textTransform: "uppercase" }}>
                Menu
              </span>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", border: "none", backgroundColor: "#f3f4f6", cursor: "pointer" }}
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav style={{ flex: 1, overflowY: "auto", padding: "10px 12px", display: "flex", flexDirection: "column", gap: 2 }}>
              {navItems.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "block",
                      padding: "12px 14px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 500,
                      textDecoration: "none",
                      color: active ? "#1d6fb8" : "#374151",
                      backgroundColor: active ? "#eff6ff" : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Footer — account */}
            <div style={{ borderTop: "1px solid #f0f0f0", padding: "10px 12px" }}>
              <Link
                href={`/${lang}/account`}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 10, fontSize: 15, fontWeight: 500, color: "#374151", textDecoration: "none" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {accountLabel}
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
