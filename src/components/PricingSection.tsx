"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const GROWTH_PLAN = {
  id: "growth",
  name: "Complete Digital Growth Package",
  badge: "All-in-One Solution",
  tagline: "High-Speed Website + WhatsApp CRM + Complete Brand Setup",
  priceINR: "₹49,999",
  period: "one-time investment",
  timeline: "18–21 Days Sprint",
  description:
    "Everything your business needs to establish a world-class digital presence, capture leads automatically on WhatsApp, and outpace regional competitors.",
  features: [
    "Full Multi-Page Website (Up to 12 pages + dynamic CMS)",
    "Sub-second Load Times (< 1.0s LCP on mobile)",
    "Official WhatsApp Business API Bot Setup",
    "Automated 24/7 Lead Capture & Inquiry Workflow",
    "Bilingual Support (Tamil & English)",
    "Complete Brand Identity: Typography, Vector Logos & Social Kit",
    "Conversion Tracking & Custom Analytics Dashboard",
    "Instant Lead Notifications to Staff Phones via WhatsApp",
    "100% Mobile-First Responsive Design",
    "Free SSL Certificate & Cloudflare CDN Setup",
    "Dark & Light Mode Support",
    "60 Days Dedicated Post-Launch Support & Warranty",
  ],
  benefits: [
    "Save 15+ hours/week with automated WhatsApp lead triage",
    "Capture evening and weekend leads with zero manual reception lag",
    "Command premium market pricing with a luxury visual presence",
    "100% code ownership with zero ongoing monthly platform fees",
  ],
  ctaText: "Get Started with Growth Package",
  ctaHref: "/contact?tier=growth",
};

const PILLARS = [
  {
    num: "01",
    title: "High Conversion Design",
    desc: "Every button, headline, and page layout is intentionally designed to convert visitors directly into WhatsApp chats or qualified inquiry calls.",
  },
  {
    num: "02",
    title: "Sub-Second Mobile Speed",
    desc: "Built with Next.js and Edge CDN. Pages load under 1 second on mobile networks, preventing visitor bounce and ranking higher on Google.",
  },
  {
    num: "03",
    title: "Frictionless WhatsApp CRM",
    desc: "In India and regional business, customers prefer WhatsApp. We build automated lead intake, booking, and catalog inquiries right inside WhatsApp.",
  },
  {
    num: "04",
    title: "Zero Monthly Software Rent",
    desc: "Unlike site builders that charge high recurring fees and lock your data, we engineer clean custom code that you own 100% forever.",
  },
];

const FAQS = [
  {
    q: "Why one-time pricing instead of monthly subscriptions?",
    a: "We believe businesses should own their digital assets without paying ongoing monthly software rent. You pay for our engineering sprint, and the code, domain, and systems belong 100% to you forever.",
  },
  {
    q: "What is the payment schedule?",
    a: "Our standard milestone structure is simple: 40% project kickoff deposit to initiate design and architecture, 40% upon staging review and milestone approval, and 20% upon final production launch, domain switch, and handoff.",
  },
  {
    q: "Can we add custom features or modules?",
    a: "Absolutely. Every business has unique needs. You can add extra features (such as payment gateways, custom CRM integrations, or specialized WhatsApp automations) or request a bespoke proposal.",
  },
  {
    q: "How fast can we launch?",
    a: "Our Growth platforms launch in 18–21 business days. We work in dedicated agile sprints to guarantee timely delivery.",
  },
  {
    q: "Do you provide hosting and ongoing technical maintenance?",
    a: "Yes. All plans include 60 days of complimentary post-launch support and warranty. After that, we offer optional lightweight annual care plans covering security updates, domain management, and high-speed hosting.",
  },
];

export default function PricingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="relative py-10 sm:py-16 overflow-hidden" id="pricing-plans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-[1]">
        {/* Single Pricing Card — Centered & Clean */}
        <div className="flex justify-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between bg-bg-card border-2 border-ember shadow-[0_0_35px_rgba(255,90,31,0.15)] w-full max-w-xl"
          >
            {/* Popular Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full gradient-ember text-bg font-display text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider shadow-ember">
                <span>★</span> {GROWTH_PLAN.badge}
              </span>
            </div>

            <div>
              {/* Header info */}
              <div className="border-b border-cream-10 pb-5 sm:pb-6 mb-5 sm:mb-6 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-cream">
                    {GROWTH_PLAN.name}
                  </h3>
                  <span className="text-[0.68rem] font-mono px-2.5 py-1 rounded-md bg-cream-05 text-cream-60 border border-cream-10 shrink-0 w-fit">
                    {GROWTH_PLAN.timeline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-cream-60 mb-4 sm:mb-5 leading-relaxed">
                  {GROWTH_PLAN.tagline}
                </p>

                {/* Price display */}
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-gradient">
                    {GROWTH_PLAN.priceINR}
                  </span>
                  <span className="text-xs text-cream-40 uppercase tracking-widest font-mono">
                    {GROWTH_PLAN.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-cream-60 leading-relaxed mb-5 sm:mb-6">
                {GROWTH_PLAN.description}
              </p>

              {/* Key Benefits */}
              <div className="rounded-xl bg-ember/5 border border-ember/15 p-4 sm:p-5 mb-5 sm:mb-6">
                <h4 className="font-display text-[0.7rem] uppercase tracking-wider font-bold text-ember mb-2.5 flex items-center gap-1.5">
                  <span>⚡</span> Key Business Benefits
                </h4>
                <ul className="space-y-2">
                  {GROWTH_PLAN.benefits.map((benefit, i) => (
                    <li key={i} className="text-xs sm:text-sm text-cream-60 flex items-start gap-2">
                      <span className="text-gold mt-0.5 shrink-0">✦</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features List */}
              <div className="mb-6 sm:mb-8">
                <h4 className="font-display text-[0.75rem] uppercase tracking-wider font-semibold text-cream-60 mb-3.5">
                  What&apos;s Included:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {GROWTH_PLAN.features.map((feat, i) => (
                    <li key={i} className="text-xs sm:text-sm text-cream flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-cream-05">
              <Link
                href={GROWTH_PLAN.ctaHref}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-full font-display font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 text-center gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 active:translate-y-0"
              >
                {GROWTH_PLAN.ctaText} →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Custom Requirement Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl bg-bg-card border border-cream-10 p-5 sm:p-8 md:p-10 mb-14 sm:mb-20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[0.7rem] font-display font-semibold uppercase tracking-wider mb-2.5">
              Custom Requirements
            </span>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-cream mb-2">
              Need Custom Software, Billing POS, or Multi-Branch Systems?
            </h3>
            <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
              We also build custom ERP solutions, retail billing software, and custom automated workflows tailored to your specific operations.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/contact?tier=enterprise"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm border border-gold/40 text-gold hover:bg-gold/10 transition-all text-center"
            >
              Request Custom Quote →
            </Link>
          </div>
        </motion.div>

        {/* Why Choose AgniGrow */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2">
              The AgniGrow Difference
            </p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-cream mb-3">
              Why AgniGrow Outperforms <span className="text-gradient">Traditional Agencies</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-cream-60 leading-relaxed px-2">
              Most agencies deliver slow, template-based websites that fail to convert. We build high-speed digital assets engineered to generate real business inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-card border border-cream-10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-ember/30 hover:shadow-card-hover transition-all duration-300"
              >
                <span className="font-mono text-2xl font-black text-gradient block mb-3">
                  {p.num}
                </span>
                <h4 className="font-display text-base font-bold text-cream mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-cream-60 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2">
              Common Questions
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-cream">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl sm:rounded-2xl border border-cream-10 bg-bg-card overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full py-4 px-4 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 font-display text-sm sm:text-base font-bold text-cream hover:text-ember transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-ember font-mono text-lg shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-4 sm:px-6 pb-5 text-xs sm:text-sm text-cream-60 leading-relaxed border-t border-cream-05 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Booking Consultation Banner */}
        <div className="rounded-2xl sm:rounded-3xl bg-bg-card border border-ember/25 p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-ember mb-2">
            Free Consultation
          </span>
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-cream mb-3 sm:mb-4">
            Have Questions About How We Can Help?
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-cream-60 max-w-xl leading-relaxed mb-5 sm:mb-6 px-2">
            Speak directly with our team. We&apos;ll discuss your business goals, explain our process, and provide an honest assessment of what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 transition-all text-center"
            >
              Get in Touch →
            </Link>
            <a
              href="https://wa.me/917200146914?text=Hi%20AgniGrow,%20I'd%20like%20to%20discuss%20pricing%20and%20plans."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-xs sm:text-sm border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all text-center"
            >
              <span>💬</span> Chat Direct on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
