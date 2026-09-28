"use client";

import { motion } from "framer-motion";

const ADDONS = [
  { icon: "🌍", label: "Domain & hosting management" },
  { icon: "📍", label: "Google Maps / business listing" },
  { icon: "📱", label: "QR code menus & catalogs" },
  { icon: "💳", label: "Digital visiting cards (vCard)" },
  { icon: "📡", label: "NFC tap business cards" },
  { icon: "📺", label: "Digital menu boards" },
];

const chipVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Addons() {
  return (
    <section className="py-14 sm:py-24 relative" id="addons">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2.5">
            Extras
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-6">
            <span className="text-gradient">Add-on</span> Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[600px] leading-relaxed px-2">
            Small but mighty upgrades to round out your digital presence.
          </p>
        </motion.div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
          {ADDONS.map((a, i) => (
            <motion.div
              key={a.label}
              className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-3 bg-bg-card border border-cream-10 rounded-full cursor-default transition-all duration-200 hover:border-ember/30 hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,90,31,0.1)] group"
              variants={chipVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="text-lg sm:text-xl">{a.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-cream-60 group-hover:text-cream transition-colors">
                {a.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
