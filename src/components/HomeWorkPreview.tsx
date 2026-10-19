"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeWorkPreview() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden" id="work">
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
            Selected Work
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-4">
            Proven Systems Shipped for <span className="text-gradient">Real Growth</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[640px] leading-relaxed px-2">
            Our portfolio of live production systems is being updated. Contact us for private walkthroughs of shipped projects.
          </p>
        </motion.div>

        {/* Empty State Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl bg-bg-card border border-cream-10 p-8 sm:p-12 text-center flex flex-col items-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-2xl sm:text-3xl mb-5 sm:mb-6">
            🏗️
          </div>
          <h3 className="font-display text-lg sm:text-2xl font-extrabold text-cream mb-2 sm:mb-3">
            Portfolio Being Curated
          </h3>
          <p className="text-xs sm:text-sm text-cream-60 max-w-[420px] leading-relaxed mb-5 sm:mb-6">
            We&apos;re preparing detailed case studies of our latest production systems. Request a private walkthrough to see live demos.
          </p>
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full font-display font-semibold text-xs sm:text-sm border border-cream-20 text-cream hover:border-ember hover:text-ember transition-colors text-center"
          >
            Visit Portfolio Page →
          </Link>
        </motion.div>

        {/* Link Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/917200146914?text=Hi%20AgniGrow,%20I'd%20like%20to%20view%20live%20client%20case%20study%20demos"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-display font-semibold text-xs sm:text-sm border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all text-center"
          >
            <span>💬</span> Request Private Case Study Walkthrough
          </a>
        </div>
      </div>
    </section>
  );
}
