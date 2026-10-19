"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2.5">
            Our Portfolio
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-4">
            Engineered Systems for <span className="text-gradient">Real Business Impact</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[640px] leading-relaxed px-2">
            We build world-class digital experiences across web portals, WhatsApp CRM automations, and custom cloud software.
          </p>
        </motion.div>

        {/* Portfolio Updating Empty State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl bg-bg-card border border-cream-10 p-8 sm:p-12 md:p-16 text-center flex flex-col items-center max-w-3xl mx-auto"
        >
          {/* Animated Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-ember/10 border border-ember/20 flex items-center justify-center text-3xl sm:text-4xl mb-6 sm:mb-8">
            🚀
          </div>

          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-cream mb-3 sm:mb-4">
            Our Portfolio Is Being Updated
          </h3>
          <p className="text-sm sm:text-base text-cream-60 max-w-[480px] leading-relaxed mb-6 sm:mb-8">
            We&apos;re curating our latest case studies and production architectures. In the meantime, reach out to see live demos and discuss how we can build something remarkable for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 transition-all text-center"
            >
              Discuss Your Project →
            </Link>
            <a
              href="https://wa.me/917200146914?text=Hi%20AgniGrow,%20I'd%20like%20to%20see%20live%20demos%20of%20your%20work"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-xs sm:text-sm border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all text-center"
            >
              <span>💬</span> Request Live Demo
            </a>
          </div>
        </motion.div>

        {/* Bottom Callout */}
        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-sm text-cream-60">
            Have a custom requirement?{" "}
            <Link href="/contact" className="text-ember font-semibold hover:underline">
              Tell us what you want to build
            </Link>{" "}
            and we&apos;ll prepare a free architecture roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}
