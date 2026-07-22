"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type NavItem = { label: string; href: string };
type Props = { lang: Locale; navItems: NavItem[]; accountLabel: string };

export default function MobileMenu({ lang, navItems, accountLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const drawer = open && mounted ? createPortal(
    <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }}
      />
      {/* Painel branco */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 280,
        background: "#fff", display: "flex", flexDirection: "column",
        boxShadow: "-8px 0 32px rgba(0,0,0,0.15)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #e5e7eb" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#9ca3af", textTransform: "uppercase" }}>Menu</span>
          <button onClick={() => setOpen(false)} style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "#f3f4f6", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav style={{ flex: 1, overflowY: "auto", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{
              display: "block", padding: "12px 14px", borderRadius: 10,
              fontSize: 15, fontWeight: 500, textDecoration: "none",
              color: pathname.startsWith(item.href) ? "#1d4ed8" : "#374151",
              background: pathname.startsWith(item.href) ? "#eff6ff" : "transparent",
            }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ borderTop: "1px solid #e5e7eb", padding: "8px 10px" }}>
          <Link href={`/${lang}/account`} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 10, fontSize: 15, fontWeight: 500, color: "#374151", textDecoration: "none" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" />
            </svg>
            {accountLabel}
          </Link>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect y="2" width="18" height="2" rx="1" fill="currentColor" />
          <rect y="8" width="18" height="2" rx="1" fill="currentColor" />
          <rect y="14" width="12" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>
      {drawer}
    </>
  );
}
