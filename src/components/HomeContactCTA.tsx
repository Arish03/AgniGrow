"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background radial glow */}
      <div
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,90,31,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-bg-card via-bg-card-hover to-[#1f1714] border border-ember/30 p-6 sm:p-10 md:p-16 text-center flex flex-col items-center shadow-2xl relative overflow-hidden"
        >
          {/* Flame pill badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-ember/10 border border-ember/25 mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
            <span className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-ember">
              Start Your Digital Transformation
            </span>
          </div>

          <h2 className="font-display text-[clamp(1.8rem,5.5vw,3.8rem)] font-extrabold leading-tight text-cream mb-4 sm:mb-6 max-w-[800px]">
            Ready to <span className="text-gradient">Ignite Your Business</span> Growth?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[620px] leading-relaxed mb-8 sm:mb-10 px-2">
            Whether you need a high-converting website, automated WhatsApp lead workflows, or custom cloud software — our team in Vaniyambadi is ready to help you succeed.
          </p>

          {/* Action Link Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-display font-bold text-xs sm:text-sm md:text-base gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 transition-all text-center"
            >
              Go to Contact Page &amp; Get a Quote →
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Agni%20team,%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-display font-bold text-xs sm:text-sm md:text-base border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all text-center"
            >
              <span>💬</span> Chat On WhatsApp
            </a>
          </div>

          {/* Quick Studio Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-cream-10 text-xs sm:text-sm text-cream-40">
            <span>📍 Vaniyambadi, Tamil Nadu</span>
            <span>✉️ hello@agni.in</span>
            <span>⏱️ Mon–Sat: 9:30 AM – 7:00 PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
