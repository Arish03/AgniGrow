"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AgniLogo from "./AgniLogo";

const footerLinks = {
  navigate: [
    { label: "Home", href: "/" },
    { label: "About AgniGrow", href: "/about" },
    { label: "Services & Capabilities", href: "/services" },
    { label: "Pricing & Plans", href: "/pricing" },
    { label: "Selected Work & Portfolio", href: "/work" },
    { label: "How We Work (Process)", href: "/#process" },
    { label: "Client Testimonials", href: "/#testimonials" },
    { label: "Frequently Asked Questions", href: "/contact#faq" },
    { label: "Contact & Inquiries", href: "/contact" },
  ],
  services: [
    { label: "Website Development", href: "/services#web-development" },
    { label: "E-Commerce Stores", href: "/services#ecommerce" },
    { label: "WhatsApp CRM & Bots", href: "/services#automation" },
    { label: "Brand Identity Kits", href: "/services#branding" },
    { label: "Custom ERP & Cloud POS", href: "/services#software" },
    { label: "Digital Event Micro-Sites", href: "/services#invitations" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="relative border-t border-cream-10 pt-12 sm:pt-16 bg-bg-card/40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-8 sm:gap-10 pb-12 sm:pb-16">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="AgniGrow home">
            <AgniLogo width={160} />
          </Link>
          <p className="text-sm text-cream-60 max-w-[280px] leading-relaxed">
            Your Digital Growth Partner. High-converting websites, WhatsApp CRM automation, and bespoke software engineered for ambitious businesses.
          </p>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            <a
              href="https://wa.me/917200146914"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
            >
              💬 +91 72001 46914
            </a>
            <a
              href="mailto:info@agnigrow.in"
              className="text-xs px-3 py-1.5 rounded-lg border border-cream-20 text-cream-60 hover:text-cream hover:border-ember transition-colors"
            >
              ✉️ info@agnigrow.in
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://www.linkedin.com/company/agnigrow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AgniGrow on LinkedIn"
              className="w-9 h-9 rounded-lg border border-cream-10 bg-cream-05 flex items-center justify-center text-cream-40 hover:text-ember hover:border-ember/30 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/agnigrow.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AgniGrow on Instagram"
              className="w-9 h-9 rounded-lg border border-cream-10 bg-cream-05 flex items-center justify-center text-cream-40 hover:text-ember hover:border-ember/30 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="font-display text-xs font-bold tracking-[0.1em] uppercase text-cream-60 mb-4">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.navigate.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-cream-40 hover:text-ember transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-xs font-bold tracking-[0.1em] uppercase text-cream-60 mb-4">
            Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.services.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-cream-40 hover:text-ember transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location & Operating Hours */}
        <div>
          <h4 className="font-display text-xs font-bold tracking-[0.1em] uppercase text-cream-60 mb-4">
            Studio
          </h4>
          <div className="flex flex-col gap-3 text-sm text-cream-40">
            <p className="leading-relaxed">
              Vaniyambadi, Tamil Nadu, 635751, India
            </p>
            <p className="text-xs text-cream-40">
              Serving businesses across Tirupattur, Ambur, Vellore, Chennai &amp; international exporters.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider block text-cream-40 font-mono mb-1">
                Hours
              </span>
              <p className="text-xs text-cream-60">
                Monday – Saturday: 9:30 AM – 7:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-cream-05 py-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-40 text-center sm:text-left">
            © {year} AgniGrow. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2 text-xs text-cream-40">
            <Link href="/privacy" className="hover:text-cream">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cream">Terms of Service</Link>
            <Link href="/services" className="hover:text-cream">Services</Link>
            <Link href="/pricing" className="hover:text-cream">Pricing</Link>
            <Link href="/work" className="hover:text-cream">Portfolio</Link>
            <Link href="/contact" className="hover:text-cream">Contact Us</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
