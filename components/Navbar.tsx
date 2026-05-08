"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";

const SALES_REPS: Record<string, string[]> = {
  北區: ["0908867358", "richsource015", "marscsknight", "0980381600", "hsiang860711", "0968601499", "0908008619"],
  中區: ["0968283885", "ryanwu1122", "0977131871"],
  南區: ["0902018518", "rsray", "0980017885"],
};

const REGIONS = [
  { key: "北區", labelKey: "sales_region_north" },
  { key: "中區", labelKey: "sales_region_central" },
  { key: "南區", labelKey: "sales_region_south" },
] as const;

function lineUrl(id: string) {
  return `https://line.me/ti/p/~${id}`;
}

function SalesModal({ onClose }: { onClose: () => void }) {
  const t = useTranslations("nav");
  const [selected, setSelected] = useState<string | null>(null);

  function handleRegion(key: string) {
    setSelected(key);
    const reps = SALES_REPS[key];
    const rep = reps[Math.floor(Math.random() * reps.length)];
    setTimeout(() => {
      window.open(lineUrl(rep), "_blank");
      onClose();
    }, 300);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-80 text-center">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl">✕</button>
        <div className="text-3xl mb-3">💼</div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{t("sales_modal_title")}</h3>
        <p className="text-sm text-gray-500 mb-6">{t("sales_modal_subtitle")}</p>
        <div className="flex flex-col gap-3">
          {REGIONS.map((region) => (
            <button
              key={region.key}
              onClick={() => handleRegion(region.key)}
              disabled={selected !== null}
              className={`w-full py-3 rounded-xl font-bold text-base transition-all border-2 ${
                selected === region.key
                  ? "bg-sky-400 border-sky-400 text-white"
                  : "border-sky-400 text-sky-600 hover:bg-sky-50"
              }`}
            >
              {t(region.labelKey)}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">{t("sales_modal_footer")}</p>
      </div>
    </div>
  );
}

function ProductsDropdown() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isProductsActive = pathname.includes("/products");

  const items = [
    { href: "/products/touch-screen", label: t("products_touch_screen"), icon: "🖥️" },
    { href: "/products/kiosk", label: t("products_kiosk"), icon: "📺" },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-sky-500 ${
          isProductsActive ? "text-sky-500" : "text-gray-700"
        }`}
      >
        {t("products")}
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-sky-50 hover:text-sky-600 transition-colors ${
                pathname === item.href ? "text-sky-600 bg-sky-50" : "text-gray-700"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/calculator", label: t("calculator") },
    { href: "/booking", label: t("booking") },
    { href: "/faq", label: t("faq") },
  ];

  function switchLocale(locale: string) {
    document.cookie = `locale=${locale}; path=/; max-age=31536000; SameSite=None; Secure`;
    window.location.reload();
  }

  return (
    <>
      <nav className="bg-white text-gray-900 shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/logo.jpg" alt="Persona Taiwan" width={160} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-sky-500 ${pathname === "/" ? "text-sky-500" : "text-gray-700"}`}
            >
              {t("home")}
            </Link>

            <ProductsDropdown />

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                  pathname === link.href ? "text-sky-500" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setShowSalesModal(true)}
              className="ml-2 bg-sky-400 hover:bg-sky-300 text-white font-bold text-sm px-4 py-1.5 rounded-lg transition-colors"
            >
              {t("sales_btn")}
            </button>

            <div className="flex gap-1 border border-gray-300 rounded overflow-hidden">
              <button onClick={() => switchLocale("zh-TW")} className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 transition-colors">中文</button>
              <button onClick={() => switchLocale("en")} className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 transition-colors">EN</button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-3 flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-1.5 transition-colors hover:text-sky-500 ${pathname === "/" ? "text-sky-500" : "text-gray-700"}`}
            >
              {t("home")}
            </Link>

            {/* Mobile products accordion */}
            <div>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`flex items-center justify-between w-full text-sm font-medium py-1.5 transition-colors hover:text-sky-500 ${pathname.includes("/products") ? "text-sky-500" : "text-gray-700"}`}
              >
                {t("products")}
                <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProductsOpen && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/products/touch-screen" onClick={() => setMenuOpen(false)} className="text-sm py-1 text-gray-600 hover:text-sky-500">🖥️ {t("products_touch_screen")}</Link>
                  <Link href="/products/kiosk" onClick={() => setMenuOpen(false)} className="text-sm py-1 text-gray-600 hover:text-sky-500">📺 {t("products_kiosk")}</Link>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-1.5 transition-colors hover:text-sky-500 ${pathname === link.href ? "text-sky-500" : "text-gray-700"}`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => { setMenuOpen(false); setShowSalesModal(true); }}
              className="text-left bg-sky-400 text-white font-bold text-sm px-4 py-2 rounded-lg mt-1"
            >
              {t("sales_btn")}
            </button>

            <div className="flex gap-2 pt-2 border-t border-gray-200 mt-1">
              <button onClick={() => switchLocale("zh-TW")} className="text-xs text-gray-600 hover:text-gray-900">中文</button>
              <span className="text-gray-400">|</span>
              <button onClick={() => switchLocale("en")} className="text-xs text-gray-600 hover:text-gray-900">EN</button>
            </div>
          </div>
        )}
      </nav>

      {showSalesModal && <SalesModal onClose={() => setShowSalesModal(false)} />}
    </>
  );
}
