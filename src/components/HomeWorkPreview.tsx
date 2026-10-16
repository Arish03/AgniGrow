"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FEATURED_PROJECTS = [
  {
    title: "Global Export B2B Portal & Digital Catalog",
    client: "Apex Leather Exports",
    category: "Web & E-Commerce",
    location: "Vaniyambadi",
    metric: "+220%",
    metricLabel: "Export Inquiries",
    desc: "Multilingual export showroom with real-time sample requests and PDF quote generator for buyers in the UK and Europe.",
    tags: ["Next.js", "Global SEO", "B2B Catalog"],
  },
  {
    title: "Automated Patient Booking & WhatsApp Reminder CRM",
    client: "Care Polyclinic & Diagnostics",
    category: "WhatsApp Automation",
    location: "Tirupattur",
    metric: "85%",
    metricLabel: "Fewer Missed Visits",
    desc: "Self-service WhatsApp bot that schedules doctor consultations, delivers lab report links, and automates reminders.",
    tags: ["WhatsApp Bot", "CRM Dashboard", "Automated Booking"],
  },
  {
    title: "Smart QR Menu & POS Cloud Billing Suite",
    client: "The Artisan Roast Cafe",
    category: "Custom Software",
    location: "Vaniyambadi",
    metric: "3.2x",
    metricLabel: "Faster Table Turns",
    desc: "Instant table-side ordering with no app installation required, synced straight to kitchen tablets and thermal billing.",
    tags: ["Cloud POS", "QR Ordering", "Daily Analytics"],
  },
];

export default function HomeWorkPreview() {
  return (
    <section className="py-24 relative overflow-hidden" id="work">
      {/* Background glow */}
      <div
        className="absolute top-1/2 -right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,176,32,0.06) 0%, transparent 60%)",
        }}
      />

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
            Proven Results for <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[620px] leading-relaxed px-2">
            Take a look at how our custom web systems, WhatsApp automations, and brand platforms drive tangible business impact.
          </p>
        </motion.div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12">
          {FEATURED_PROJECTS.map((p, idx) => (
            <motion.article
              key={p.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-bg-card border border-cream-10 rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:border-ember/30 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-cream-40 mb-2.5 font-mono">
                  <span className="text-ember font-semibold">{p.category}</span>
                  <span>📍 {p.location}</span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-cream mb-1.5 sm:mb-2 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-cream-40 font-mono mb-2.5">Client: {p.client}</p>

                <p className="text-xs sm:text-sm text-cream-60 leading-relaxed mb-5">
                  {p.desc}
                </p>
              </div>

              <div>
                {/* Metric pill */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-cream-05 border border-cream-10 mb-3.5 flex items-center justify-between">
                  <span className="text-xs text-cream-40">{p.metricLabel}</span>
                  <span className="font-display text-lg sm:text-xl font-black text-gradient">
                    {p.metric}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cream-05">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.68rem] sm:text-[0.7rem] px-2 py-0.5 rounded-md bg-cream-05 text-cream-40 border border-cream-05"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Link Button to Full Work Page */}
        <div className="flex justify-center">
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full font-display font-semibold text-xs sm:text-sm border border-cream-20 text-cream hover:border-ember hover:text-ember transition-colors text-center"
          >
            Explore All Case Studies &amp; Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
