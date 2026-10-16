"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AgniLogo from "./AgniLogo";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-cream-10 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo on Left */}
        <Link href="/" className="relative z-20 outline-none shrink-0" aria-label="AgniGrow home">
          <AgniLogo size={28} showText={true} />
        </Link>

        {/* Right-aligned Group: Links + Theme Toggle + WhatsApp */}
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-7 ml-auto">
          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-7">
            {NAV_LINKS.map((l) => {
              const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-[0.95rem] font-medium transition-colors duration-200 py-1 group ${
                    isActive ? "text-ember font-semibold" : "text-cream-60 hover:text-cream"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] gradient-ember rounded-full transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Light / Dark Theme Switcher */}
          <ThemeToggle />

          {/* Direct WhatsApp Action Button (No Get a Quote) */}
          <a
            href="https://wa.me/917200146914?text=Hi%20AgniGrow%20team,%20I'd%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-display font-semibold text-[0.75rem] sm:text-xs tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>💬</span> <span className="hidden xs:inline sm:inline">WhatsApp</span>
          </a>

          {/* Mobile Burger Button */}
          <button
            className="flex md:hidden flex-col justify-center gap-[5px] w-8 h-8 z-20 outline-none cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            <span
              className={`block w-6 h-0.5 bg-cream rounded-sm transition-all duration-200 origin-center ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-ember rounded-sm transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream rounded-sm transition-all duration-200 origin-center ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-10 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 w-[80%] max-w-[320px] h-screen bg-bg-card border-l border-cream-10 z-15 flex flex-col justify-between p-8 pt-24 shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between pb-2 border-b border-cream-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-cream-40">
                    Menu
                  </span>
                  <ThemeToggle />
                </div>

                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((l) => {
                    const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className={`font-display text-2xl font-bold py-1 flex items-center justify-between transition-colors ${
                          isActive ? "text-ember" : "text-cream hover:text-ember"
                        }`}
                      >
                        {l.label}
                        <span className="text-xs text-cream-40 font-mono">→</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-cream-10">
                <a
                  href="https://wa.me/917200146914?text=Hi%20AgniGrow%20team,%20I'd%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm shadow-md shadow-emerald-950/25"
                >
                  <span>💬</span> Direct WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
