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
  category: "all" | "exports" | "healthcare" | "dining" | "retail";
  tag: string;
}

const CATEGORIES = [
  { id: "all", label: "All Reviews" },
  { id: "exports", label: "Leather & Exports" },
  { id: "healthcare", label: "Healthcare & Clinics" },
  { id: "dining", label: "Food & Dining" },
  { id: "retail", label: "Retail & Commerce" },
] as const;

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "AgniGrow built our international export portal in under 3 weeks. International leather buyers in Germany and the UK can now browse our full catalog and request custom sample specs seamlessly. Our inquiry volume doubled within 60 days.",
    author: "Zubair Ahmed",
    role: "Managing Director",
    company: "EuroStyle Leather Exports",
    location: "Vaniyambadi",
    rating: 5,
    category: "exports",
    tag: "Export Portal",
  },
  {
    quote:
      "The WhatsApp automated appointment system they configured for our polyclinic reduced our front-desk phone calls by almost 70%. Patients love receiving automatic reminders and directions straight on WhatsApp.",
    author: "Dr. K. Senthil Nathan",
    role: "Chief Medical Officer",
    company: "Care Diagnostics & Polyclinic",
    location: "Tirupattur",
    rating: 5,
    category: "healthcare",
    tag: "WhatsApp CRM",
  },
  {
    quote:
      "Our restaurant table turnaround is so much faster now with the smart QR menu and billing integration. AgniGrow understands both the modern web look and the practical needs of running a local food business.",
    author: "Mohammad Irfan",
    role: "Co-Founder",
    company: "The Artisan Roast Cafe",
    location: "Vaniyambadi",
    rating: 5,
    category: "dining",
    tag: "Smart QR Menu",
  },
  {
    quote:
      "We transitioned from an old offline showroom ledger to a high-speed online wholesale catalog. Wholesale leather shoe buyers from Delhi, Agra, and Dubai place bulk sample requests directly through the site without any manual paperwork.",
    author: "Tariq Mansoor",
    role: "Proprietor",
    company: "Heritage Tanners & Craft",
    location: "Ambur",
    rating: 5,
    category: "exports",
    tag: "B2B Catalog",
  },
  {
    quote:
      "Our optical retail boutique needed an upscale luxury presence. AgniGrow created a visual identity and appointment scheduler that elevates our showroom above metro competitors. Sales conversion increased by 40%.",
    author: "A. Rahman",
    role: "Lead Optometrist",
    company: "Elite Vision Studio",
    location: "Vaniyambadi",
    rating: 5,
    category: "retail",
    tag: "Brand & Booking",
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
              4.9/5 Average Rating · 35+ Regional Businesses
            </span>
          </div>

          <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2 sm:mb-3">
            Client Voices
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-4">
            Trusted by Ambitious <span className="text-gradient">Regional Brands</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-cream-60 max-w-[620px] leading-relaxed">
            See how our bespoke websites, brand systems, and automated WhatsApp workflows drive real bottom-line growth.
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
                key={t.author}
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
                <div className="pt-3.5 sm:pt-4 border-t border-cream-05 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-cream">
                      {t.author}
                    </h3>
                    <p className="text-[0.7rem] sm:text-xs text-cream-40">
                      {t.role}, <span className="text-ember font-medium">{t.company}</span>
                    </p>
                  </div>
                  <span className="text-[0.68rem] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-cream-05 text-cream-40 font-mono">
                    📍 {t.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-cream-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold text-cream block mb-0.5 sm:mb-1">
              99.9%
            </span>
            <span className="text-[0.7rem] sm:text-xs text-cream-40">Uptime &amp; Hosting SLA</span>
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold text-cream block mb-0.5 sm:mb-1">
              &lt; 1.2s
            </span>
            <span className="text-[0.7rem] sm:text-xs text-cream-40">Avg. Page Load Speed</span>
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold text-cream block mb-0.5 sm:mb-1">
              100%
            </span>
            <span className="text-[0.7rem] sm:text-xs text-cream-40">Source Code Ownership</span>
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold text-cream block mb-0.5 sm:mb-1">
              24/7
            </span>
            <span className="text-[0.7rem] sm:text-xs text-cream-40">Critical WhatsApp Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
