"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import HeroAnimation from "./HeroAnimation";

function AnimatedStat({ value, suffix = "", label }: { value: number | string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (typeof value !== "number") return;

    let start = 0;
    const duration = 1600; // ms
    const steps = 40;
    const stepTime = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="font-display text-2xl sm:text-3xl font-extrabold text-gradient">
        {typeof value === "number" ? count : value}
        {suffix}
      </span>
      <span className="text-xs text-cream-40 uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.14, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[84px] pb-16">
      {/* Content Container */}
      <div className="relative z-[2] max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 w-full flex flex-col gap-10 sm:gap-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember/10 border border-ember/20 mb-5 sm:mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
              </span>
              <span className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-ember">
                Your Digital Growth Partner
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-[clamp(1.9rem,5vw,3.9rem)] font-black leading-[1.08] tracking-tight mb-5 sm:mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              We Build <span className="text-gradient">Digital Experiences</span>
              <br className="hidden sm:inline" /> That Ignite High Growth
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[580px] leading-relaxed mb-7 sm:mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Your trusted partner for export-ready Next.js websites, official WhatsApp CRM automation, bespoke software, and luxury branding — engineered for ambitious regional businesses scaling to Tamil Nadu and global markets.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-display font-semibold text-xs sm:text-[0.95rem] gradient-ember text-bg shadow-ember hover:-translate-y-0.5 hover:shadow-ember-hover active:translate-y-0 transition-all duration-200 text-center"
              >
                View Our Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full font-display font-semibold text-xs sm:text-[0.95rem] border border-ember/30 bg-ember/5 text-cream hover:border-ember hover:bg-ember/15 transition-all duration-200 text-center"
              >
                <span>⚡</span> Pricing &amp; Plans
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full font-display font-semibold text-xs sm:text-[0.95rem] border border-cream-20 text-cream hover:border-cream-40 hover:text-white transition-all duration-200 text-center"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>

            {/* Quick Proof Pills */}
            <motion.div
              className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[0.72rem] sm:text-xs text-cream-40 font-mono"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Next.js 16 Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Official WhatsApp API
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> 100% Code Ownership
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Services Showcase */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center w-full"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroAnimation />
          </motion.div>
        </div>

        {/* Animated Stats Bar */}
        <motion.div
          className="grid grid-cols-2 sm:flex sm:items-center justify-center gap-3 sm:gap-8 md:gap-12 px-3.5 sm:px-12 py-4 sm:py-6 rounded-2xl sm:rounded-3xl bg-bg-card border border-cream-10 shadow-2xl w-full"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <AnimatedStat value={7} suffix="+" label="Service Lines" />
          <div className="w-px h-8 bg-cream-10 hidden sm:block" />
          <AnimatedStat value={50} suffix="+" label="Solutions Shipped" />
          <div className="w-px h-8 bg-cream-10 hidden sm:block" />
          <AnimatedStat value="100%" label="Client Satisfaction" />
          <div className="w-px h-8 bg-cream-10 hidden md:block" />
          <div className="hidden md:block">
            <AnimatedStat value="∞" label="Possibilities" />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-bg to-transparent z-[2] pointer-events-none" />
    </section>
  );
}
