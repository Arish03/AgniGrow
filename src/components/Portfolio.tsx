"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  services: string;
  proofPoint: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: { metric: string; label: string }[];
  image: string;
  badge: string;
  color: "ember" | "gold";
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mayilon-frames",
    title: "Mayilon Frames — Full-Service Next.js Website & WhatsApp Funnel",
    client: "Mayilon Frames",
    location: "Cutchery Rd, Vaniyambadi (Near Sakthi Cinemas)",
    services: "Next.js Website + WhatsApp Funnel + Google Business Listing",
    proofPoint: "Live Next.js site + 5.0★ rating (11 Google reviews)",
    liveUrl: "https://www.mayilonframes.in/",
    problem:
      "A premium photo frame artisan in Vaniyambadi with handcrafted single, collage, and wall frame collections had no dedicated digital presence. Customers could not preview frame dimensions, view design options, or place structured orders without prolonged in-person store visits.",
    solution:
      "We architected and launched a custom Next.js web application with high-definition frame catalog showcase, smooth mobile animations, and a seamless 1-click WhatsApp checkout funnel. In parallel, we claimed and optimized their Google Business Profile to capture regional search intent.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "WhatsApp Funnel",
      "Google Business Profile",
      "Vercel Edge",
    ],
    results: [
      { metric: "5.0★", label: "11 Google Reviews" },
      { metric: "100%", label: "Live Next.js Site" },
      { metric: "1-Click", label: "WhatsApp Funnel" },
    ],
    image: "/case-mayilon.jpg",
    badge: "Full Website & Funnel",
    color: "ember",
  },
  {
    id: "sathish-auto-electrician",
    title: "Sathish Auto Electrician 2.0 — Local SEO & Map Verification",
    client: "Sathish Auto Electrician 2.0",
    location: "Teacher's Colony, Tirupattur",
    services: "Google Business Listing + Local SEO + Map Verification",
    proofPoint:
      "Verified expansion branch on Google Maps (following 4.3★ / 49 reviews at Branch 1.0)",
    problem:
      "After building regional authority at Branch 1.0 with 4.3★ and 49+ reviews, the owner expanded to a new facility at Teacher's Colony, Tirupattur. Drivers facing emergency starter, alternator, and wiring breakdowns struggled to pinpoint the new branch on Google Maps.",
    solution:
      "We executed an end-to-end Local SEO and Google Business Listing campaign: pin verification for Branch 2.0, keyword-optimized service categories (automotive wiring, battery diagnostics, starter motor repair), geo-tagged photography, and local citation structuring for top map pack placement.",
    techStack: [
      "Google Business Profile",
      "Local Map Verification",
      "Local Citation SEO",
      "Geo-Targeting",
      "Reputation Management",
    ],
    results: [
      { metric: "Verified", label: "Google Maps Pin" },
      { metric: "4.3★", label: "49 Reviews (Branch 1.0)" },
      { metric: "Top #1", label: "Local Map Ranking" },
    ],
    image: "/case-sathish.jpg",
    badge: "Local SEO & Maps",
    color: "gold",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Portfolio() {
  return (
    <section className="py-12 sm:py-20 relative overflow-hidden" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Case Study Cards */}
        <div className="flex flex-col gap-10 sm:gap-14">
          {CASE_STUDIES.map((cs) => (
            <motion.article
              key={cs.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              className="group relative bg-bg-card border border-cream-10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-ember/30 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image + Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Visual Showcase */}
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-bg">
                  <Image
                    src={cs.image}
                    alt={`${cs.title} — AgniGrow Verified Work`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/85 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-bg-card/70" />

                  {/* Floating Verified Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg/90 backdrop-blur-md border border-cream-10 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[0.68rem] sm:text-xs font-display font-semibold tracking-wide text-cream">
                      {cs.badge}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Location & Client meta */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2.5">
                      <span className="font-display text-[0.68rem] sm:text-xs font-bold tracking-[0.15em] uppercase text-ember">
                        {cs.client}
                      </span>
                      <span className="text-cream-20">•</span>
                      <span className="text-[0.68rem] sm:text-xs text-cream-40 font-mono flex items-center gap-1">
                        📍 {cs.location}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-cream mb-3 leading-snug">
                      {cs.title}
                    </h3>

                    {/* Proof Point Highlight */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/25 mb-4">
                      <span className="text-gold text-xs">✦</span>
                      <span className="text-[0.72rem] sm:text-xs font-semibold text-gold font-display">
                        {cs.proofPoint}
                      </span>
                    </div>

                    {/* Problem Statement */}
                    <div className="mb-3.5">
                      <span className="font-display text-[0.68rem] uppercase tracking-wider font-bold text-cream-40 block mb-1">
                        The Challenge
                      </span>
                      <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>

                    {/* Solution Statement */}
                    <div className="mb-4">
                      <span className="font-display text-[0.68rem] uppercase tracking-wider font-bold text-cream-40 block mb-1">
                        What We Delivered
                      </span>
                      <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                      {cs.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-[0.65rem] sm:text-xs font-display font-medium bg-cream-05 border border-cream-10 text-cream-60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results & CTA Row */}
                  <div>
                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-4 p-2.5 sm:p-4 rounded-xl bg-cream-05 border border-cream-10 mb-4">
                      {cs.results.map((r) => (
                        <div key={r.label} className="text-center px-1">
                          <span className="font-display text-base sm:text-2xl font-extrabold text-gradient block">
                            {r.metric}
                          </span>
                          <span className="text-[0.6rem] sm:text-xs text-cream-40 uppercase tracking-wider font-medium leading-tight block mt-0.5">
                            {r.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Live Link Button if available */}
                    {cs.liveUrl ? (
                      <a
                        href={cs.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-display font-bold text-xs sm:text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
                      >
                        Visit Live Website ({new URL(cs.liveUrl).hostname}) ↗
                      </a>
                    ) : (
                      <div className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-display font-semibold text-xs sm:text-sm border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-center">
                        <span>✓</span> Google Maps &amp; Local Business Verified
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-sm text-cream-60">
            Ready to bring your business online with proven results?{" "}
            <Link href="/contact" className="text-ember font-semibold hover:underline">
              Let&apos;s build your project
            </Link>{" "}
            and establish your digital dominance.
          </p>
        </div>
      </div>
    </section>
  );
}
