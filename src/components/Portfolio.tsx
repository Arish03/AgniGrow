"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  category: "web" | "branding" | "automation" | "software";
  title: string;
  client: string;
  location: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  gradient: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  timeline: string;
}

const PROJECTS: Project[] = [
  {
    id: "apex-leather",
    category: "web",
    title: "Global Export B2B Portal & Digital Catalog",
    client: "Apex Leather Exports",
    location: "Vaniyambadi",
    description: "Multi-currency, multilingual export showroom with instant PDF quote generation and sample inquiry tracking for international buyers in Europe and US.",
    metric: "+220%",
    metricLabel: "Export Inquiries",
    tags: ["Next.js", "B2B Catalog", "Global SEO"],
    gradient: "from-[#ff5a1f]/20 to-[#ffb020]/10",
    challenge: "International buyers in Germany and the UK found their legacy static catalog slow, unorganized, and unable to calculate export sample batches in Euros/USD.",
    solution: "Engineered a lightning-fast Next.js export portal with currency toggles, instant spec download sheets, and real-time WhatsApp direct dispatch routing.",
    deliverables: ["Custom B2B Catalog", "Multi-Currency Engine", "WhatsApp Spec Inquiries", "Core Web Vitals < 1.0s"],
    timeline: "3 Weeks",
  },
  {
    id: "noor-banquets",
    category: "web",
    title: "Luxury Event Micro-Site & Digital RSVP Hub",
    client: "Noor Grand Banquets",
    location: "Tamil Nadu",
    description: "Interactive wedding invitations featuring custom map navigation, automated WhatsApp RSVP confirmation, and high-definition event galleries.",
    metric: "18k+",
    metricLabel: "Guest RSVPs Handled",
    tags: ["Micro-Sites", "WhatsApp RSVP", "Cloud Gallery"],
    gradient: "from-[#ffb020]/20 to-[#ff5a1f]/10",
    challenge: "Traditional paper invitations resulted in uncounted guest turnouts, lost venue locations, and disorganized family coordination during luxury weddings.",
    solution: "Built animated bespoke micro-sites with one-tap Google Maps directions, automated WhatsApp family headcount tracking, and password-protected guest photo uploads.",
    deliverables: ["Custom Animated Micro-Site", "Automated WhatsApp Headcount", "Google Maps Integration", "Mobile-First RSVP Flow"],
    timeline: "10 Days",
  },
  {
    id: "vellore-care",
    category: "automation",
    title: "Automated Patient Booking & WhatsApp Reminder CRM",
    client: "Care Polyclinic & Diagnostics",
    location: "Vellore / Tirupattur",
    description: "Self-service WhatsApp bot allowing patients to book clinic visits, receive lab report links, and get reminder pings with zero receptionist manual labor.",
    metric: "85%",
    metricLabel: "Fewer Missed Appointments",
    tags: ["WhatsApp Bot", "CRM Dashboard", "Automated Billing"],
    gradient: "from-[#ff7b2b]/20 to-[#ff5a1f]/15",
    challenge: "Clinic front-desk was overwhelmed with over 200 daily routine phone calls for token booking, doctor schedules, and lab test results.",
    solution: "Deployed an official WhatsApp Business API assistant that verifies token availability, books time slots, sends automated 2-hour reminders, and delivers PDF reports.",
    deliverables: ["Official WhatsApp Business API", "Slot Booking Engine", "Automated 2hr SMS/WA Reminders", "Staff Administrative Dashboard"],
    timeline: "2 Weeks",
  },
  {
    id: "artisan-roast",
    category: "software",
    title: "Smart QR Menu & POS Cloud Billing Suite",
    client: "The Artisan Roast Cafe",
    location: "Vaniyambadi",
    description: "Contactless digital dining menu with lightning-fast kitchen order ticketing (KOT), real-time table turnover metrics, and UPI settlement.",
    metric: "2.4x",
    metricLabel: "Faster Table Turnover",
    tags: ["QR Ordering", "Cloud POS", "UPI Billing"],
    gradient: "from-[#ffb020]/15 to-[#ff7b2b]/10",
    challenge: "Peak weekend rush created 25-minute wait times for printed menus, misplaced orders, and slow bill generation during high-traffic dining hours.",
    solution: "Created an interactive table QR menu where diners browse visual photos, select modifiers, and send orders directly to the kitchen display.",
    deliverables: ["Visual QR Menu", "Real-Time Kitchen KOT", "Instant UPI QR Settlements", "Daily Sales Analytics"],
    timeline: "2.5 Weeks",
  },
  {
    id: "heritage-tan",
    category: "branding",
    title: "Heritage Tanners & Leather Craft Visual Identity",
    client: "Heritage Craft Tannery",
    location: "Ambur",
    description: "Complete modern rebranding for a second-generation exporter: refined typography, foil-stamped business systems, and digital design library.",
    metric: "40%",
    metricLabel: "Higher Quotation Win-Rate",
    tags: ["Brand Identity", "Design System", "Print Collateral"],
    gradient: "from-[#ff5a1f]/15 to-[#ff5a1f]/05",
    challenge: "A 30-year-old tanning powerhouse was perceived as outdated by high-end Italian and Scandinavian fashion houses.",
    solution: "Designed a timeless typographic identity, luxury sample swatch books, bilingual company profile, and a clean digital brand portal.",
    deliverables: ["Comprehensive Brand Guidelines", "Vector Logo Suite", "Foil-Stamping Print Assets", "Digital Pitch Deck System"],
    timeline: "2 Weeks",
  },
  {
    id: "zenith-fitness",
    category: "web",
    title: "Modern Fitness Studio & Membership Portal",
    client: "Zenith Strength Gym",
    location: "Vaniyambadi",
    description: "High-energy brand presence with class scheduling, automated recurring subscription tracking, and member WhatsApp workout pings.",
    metric: "140+",
    metricLabel: "New Members in 30 Days",
    tags: ["Web Design", "Subscription Engine", "Local SEO"],
    gradient: "from-[#ff7b2b]/20 to-[#ffb020]/10",
    challenge: "Gym relied purely on walk-in inquiries and manual registers, resulting in lost renewals and low visibility on Google Local search.",
    solution: "Built a high-converting dark-mode website with trainer profiles, timetable slots, and WhatsApp automated membership expiry warnings.",
    deliverables: ["Responsive Dark-Mode Website", "Google Maps Local SEO Optimization", "Class Schedule Display", "Automated Expiry Alerts"],
    timeline: "12 Days",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Websites & Portals" },
  { key: "automation", label: "WhatsApp CRM" },
  { key: "software", label: "Cloud Software" },
  { key: "branding", label: "Branding" },
] as const;

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeTab === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="portfolio">
      {/* Background ambient flare */}
      <div
        className="absolute top-1/3 -left-[15%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,90,31,0.06) 0%, transparent 60%)",
        }}
      />

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
            Selected Works
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-4">
            Proven Results for <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[620px] leading-relaxed px-2">
            From regional brands to export manufacturers, discover how we build solutions that drive tangible bottom-line growth. Click any project for the full case study.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-bg-card border border-cream-10 max-w-full">
            {CATEGORIES.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-full font-display text-[0.75rem] sm:text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive ? "text-bg" : "text-cream-60 hover:text-cream"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-xl sm:rounded-full gradient-ember shadow-ember"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-[1]">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence>
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="relative bg-bg-card border border-cream-10 rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between overflow-hidden group hover:border-ember/40 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                {/* Subtle top card glow */}
                <div
                  className={`absolute top-0 right-0 w-44 h-44 rounded-full bg-gradient-to-br ${project.gradient} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-[1]">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[0.7rem] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-cream-05 text-ember border border-ember/20">
                      📍 {project.location}
                    </span>
                    <span className="text-xs text-cream-40 font-medium">
                      {project.client}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-cream group-hover:text-ember transition-colors leading-snug mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-60 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-[1]">
                  {/* Highlight Metric Badge */}
                  <div className="p-3.5 rounded-xl bg-cream-05 border border-cream-10 mb-5 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-cream-40 block font-medium">Outcome</span>
                      <span className="text-xs font-semibold text-cream">{project.metricLabel}</span>
                    </div>
                    <span className="font-display text-2xl font-black text-gradient">
                      {project.metric}
                    </span>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-cream-05">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.72rem] font-medium px-2 py-0.5 rounded-md bg-cream-05 text-cream-40 border border-cream-05"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-ember group-hover:text-gold transition-colors">
                      Case Study →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-cream-60">
            Have a custom requirement?{" "}
            <Link href="/contact" className="text-ember font-semibold hover:underline">
              Tell us what you want to build
            </Link>{" "}
            and we&apos;ll prepare a free architecture roadmap.
          </p>
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-bg-card border border-cream-20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-cream-10 hover:bg-cream-20 text-cream flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Meta tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-ember/10 border border-ember/20 text-ember font-semibold">
                  {selectedProject.client}
                </span>
                <span className="text-xs text-cream-40">
                  📍 {selectedProject.location}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cream-10 text-cream-60">
                  ⏱️ Timeline: {selectedProject.timeline}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-cream mb-4 leading-tight">
                {selectedProject.title}
              </h2>

              {/* Metric Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-ember/10 via-gold/10 to-transparent border border-ember/20 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-cream-40 block font-medium">Verified Commercial Result</span>
                  <span className="text-sm font-bold text-cream">{selectedProject.metricLabel}</span>
                </div>
                <span className="font-display text-3xl font-black text-gradient">
                  {selectedProject.metric}
                </span>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-red-400 font-semibold mb-1">
                     The Problem &amp; Bottleneck
                  </h4>
                  <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold mb-1">
                    Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono tracking-wider text-cream-40 font-semibold mb-2">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-cream-80 bg-cream-05 p-2 rounded-lg border border-cream-05">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-6 border-t border-cream-10 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.7rem] px-2 py-0.5 rounded bg-cream-05 text-cream-40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/917200146914?text=${encodeURIComponent(
                    `Hi AgniGrow team, I was reviewing your case study on "${selectedProject.title}" and would like to build something similar for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full font-display font-semibold text-xs gradient-ember text-bg shadow-ember hover:shadow-ember-hover transition-all text-center shrink-0 flex items-center justify-center gap-1.5"
                >
                  <span>💬</span> Discuss Similar Project →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
