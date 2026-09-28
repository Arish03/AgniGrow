"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AgniLogo from "./AgniLogo";

const footerLinks = {
  navigate: [
    { label: "Home", href: "/" },
    { label: "About Agni", href: "/about" },
    { label: "Services & Capabilities", href: "/services" },
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
          <Link href="/" aria-label="Agni home">
            <AgniLogo size={32} showText={true} />
          </Link>
          <p className="text-sm text-cream-60 max-w-[280px] leading-relaxed">
            Digital experiences that ignite growth. High-converting websites, WhatsApp CRM automation, and bespoke software for ambitious businesses.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
            >
              💬 +91 98765 43210
            </a>
            <a
              href="mailto:hello@agni.in"
              className="text-xs px-3 py-1.5 rounded-lg border border-cream-20 text-cream-60 hover:text-cream hover:border-ember transition-colors"
            >
              ✉️ hello@agni.in
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
              📍 Vaniyambadi, Tamil Nadu, 635751, India
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
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-40 text-center sm:text-left">
            © {year} Agni Digital Experience. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-cream-40">
            <Link href="/services" className="hover:text-cream">Services</Link>
            <Link href="/work" className="hover:text-cream">Portfolio</Link>
            <Link href="/contact" className="hover:text-cream">Contact Us</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
