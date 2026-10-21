"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  category: "all" | "web" | "seo";
  tag: string;
}

const CATEGORIES = [
  { id: "all", label: "All Client Reviews" },
  { id: "web", label: "Web & WhatsApp Funnel" },
  { id: "seo", label: "Google Maps & Local SEO" },
] as const;

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "AgniGrow designed and engineered our official Next.js website and WhatsApp ordering funnel from scratch. Customers across Vaniyambadi can now explore custom, collage, and wall frame designs online and order directly via WhatsApp. The Google Business profile setup earned us 11 verified 5.0★ reviews and consistent store walk-ins.",
    author: "Mayilon Frames Team",
    role: "Founder & Proprietor",
    company: "Mayilon Frames",
    location: "Cutchery Rd, Vaniyambadi",
    rating: 5,
    category: "web",
    tag: "Next.js Web + WhatsApp",
  },
  {
    quote:
      "Opening our second workshop at Teacher's Colony, Tirupattur required fast, verified local visibility so motorists could locate our new facility without confusion. AgniGrow handled our Google Business Listing setup, Google Maps pin verification, and local search optimization. Local drivers find us immediately when searching for auto electrician help.",
    author: "Sathish Kumar",
    role: "Founder & Proprietor",
    company: "Sathish Auto Electrician 2.0",
    location: "Teacher's Colony, Tirupattur",
    rating: 5,
    category: "seo",
    tag: "Google Maps Verification",
  },
  {
    quote:
      "AgniGrow helped manage our local search authority and customer reviews across Tirupattur. Having built up 49 reviews at 4.3★ and consistent local map rankings, our workshop receives steady calls and drive-in customers every single week for battery diagnostics and automotive electrical repairs.",
    author: "Sathish Auto Workshop Team",
    role: "Auto Electrical Lead",
    company: "Sathish Auto Electrician 1.0",
    location: "Tirupattur",
    rating: 5,
    category: "seo",
    tag: "Local SEO & 49 Reviews",
  },
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Verified Rating Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4 sm:mb-5">
            <span className="text-gold text-xs sm:text-sm">★★★★★</span>
            <span className="font-display text-[0.72rem] sm:text-xs font-semibold tracking-wide text-cream">
              Verified Client Reviews · 5.0★ on Google
            </span>
          </div>

          <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2 sm:mb-3">
            Client Voices
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-4">
            Trusted by Ambitious <span className="text-gradient">Regional Businesses</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-cream-60 max-w-[620px] leading-relaxed">
            Real feedback from verified business owners in Vaniyambadi and Tirupattur whose digital presence we built and scaled.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-ember text-bg font-bold shadow-md shadow-ember/25"
                      : "bg-cream-05 text-cream-60 hover:text-cream border border-cream-10 hover:border-cream-20"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials Grid with Layout Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((t) => (
              <motion.div
                key={t.company}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-card border border-cream-10 rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between relative group hover:border-ember/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                    {/* Star rating */}
                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    {/* Deliverable Tag */}
                    <span className="text-[0.68rem] px-2 py-0.5 rounded-md bg-ember/10 border border-ember/20 text-ember font-medium">
                      {t.tag}
                    </span>
                  </div>

                  <p className="text-cream-60 text-xs sm:text-sm leading-relaxed italic mb-6 sm:mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author footer */}
                <div className="pt-3.5 sm:pt-4 border-t border-cream-05 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-cream">
                      {t.author}
                    </h3>
                    <p className="text-[0.68rem] sm:text-xs text-cream-40">
                      {t.role}, <span className="text-ember font-medium">{t.company}</span>
                    </p>
                  </div>
                  <span className="text-[0.65rem] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-cream-05 text-cream-40 font-mono">
                    📍 {t.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-cream-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center">
          <div className="p-2 sm:p-0">
            <span className="font-display text-lg sm:text-2xl font-bold text-cream block mb-0.5 sm:mb-1">
              100%
            </span>
            <span className="text-[0.68rem] sm:text-xs text-cream-40">Verified Real Clients</span>
          </div>
          <div className="p-2 sm:p-0">
            <span className="font-display text-lg sm:text-2xl font-bold text-cream block mb-0.5 sm:mb-1">
              &lt; 1.2s
            </span>
            <span className="text-[0.68rem] sm:text-xs text-cream-40">Avg. Page Load Speed</span>
          </div>
          <div className="p-2 sm:p-0">
            <span className="font-display text-lg sm:text-2xl font-bold text-cream block mb-0.5 sm:mb-1">
              5.0★
            </span>
            <span className="text-[0.68rem] sm:text-xs text-cream-40">Top Google Reviews</span>
          </div>
          <div className="p-2 sm:p-0">
            <span className="font-display text-lg sm:text-2xl font-bold text-cream block mb-0.5 sm:mb-1">
              24/7
            </span>
            <span className="text-[0.68rem] sm:text-xs text-cream-40">Direct WhatsApp Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
