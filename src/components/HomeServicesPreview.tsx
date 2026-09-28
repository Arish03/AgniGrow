"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FEATURED_SERVICES = [
  {
    icon: "🌐",
    title: "Website Development",
    tagline: "Mobile-first, multilingual & export-ready web portals.",
    highlight: "Next.js • High Core Web Vitals • Global SEO",
  },
  {
    icon: "⚡",
    title: "WhatsApp CRM & Bots",
    tagline: "Automated inquiry handling, catalogs & order alerts.",
    highlight: "Cloud API • 24/7 Auto Responses • Lead Funnel",
  },
  {
    icon: "🎨",
    title: "Brand Identity",
    tagline: "Logos, luxury packaging & cohesive visual kits.",
    highlight: "Vector Identity • Packaging • Social Guidelines",
  },
  {
    icon: "🖥️",
    title: "Custom Software & POS",
    tagline: "Tailored billing systems & multi-location inventory.",
    highlight: "Cloud Database • Thermal Billing • GST Invoicing",
  },
];

export default function HomeServicesPreview() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden" id="services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2.5">
            Core Capabilities
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-4">
            Full-Stack <span className="text-gradient">Digital Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[600px] leading-relaxed px-2">
            From modern web portals to WhatsApp automation and custom business software — engineered to scale your operations.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {FEATURED_SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-bg-card border border-cream-10 rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:border-ember/30 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div>
                <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-ember/10 border border-ember/20 flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  {s.icon}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-cream mb-1.5 sm:mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-cream-60 leading-relaxed mb-4">
                  {s.tagline}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-cream-05">
                <span className="text-[0.7rem] sm:text-[0.75rem] font-mono text-cream-40 block">
                  {s.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link Button to Full Services Page */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full font-display font-semibold text-xs sm:text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 transition-all text-center"
          >
            Explore All 7 Services &amp; Deliverables →
          </Link>
        </div>
      </div>
    </section>
  );
}
