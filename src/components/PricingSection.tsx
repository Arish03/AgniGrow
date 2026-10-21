"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   Pricing Tiers
   ═══════════════════════════════════════════════════════════════ */

const TIERS = [
  {
    id: "starter",
    name: "Starter Web Presence",
    badge: "For New Brands",
    tagline: "Professional Brochure Website + Basic Brand Kit",
    priceINR: "₹15,000 – ₹25,000",
    period: "one-time investment",
    timeline: "7–12 Days Sprint",
    description:
      "Perfect for new businesses, freelancers, or small shops who need a professional online presence to build credibility and capture leads.",
    features: [
      "Responsive Brochure Website (Up to 5 pages)",
      "Mobile-First Design with Fast Load Speed",
      "Basic SEO Setup & Google Indexing",
      "Contact Form with WhatsApp Redirect",
      "Basic Logo & Brand Color Palette",
      "SSL Certificate & Hosting Setup",
      "Social Media Profile Kit",
      "30 Days Post-Launch Support",
    ],
    benefits: [
      "Establish instant online credibility for your business",
      "Capture walk-in inquiries with a professional digital card",
      "100% code ownership with zero monthly platform fees",
    ],
    ctaText: "Get Started",
    ctaHref: "/contact?tier=starter",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Full Digital Growth",
    badge: "Most Popular",
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
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Custom Software & POS",
    badge: "Enterprise",
    tagline: "Bespoke ERP, Billing POS, or Multi-Branch Automation",
    priceINR: "On Inquiry",
    period: "custom quote",
    timeline: "Scoped per project",
    description:
      "For businesses that need purpose-built software — cloud billing systems, GST-compliant POS, multi-branch inventory sync, or custom ERP solutions.",
    features: [
      "Custom Cloud POS with Thermal Receipt Printing",
      "GST-Compliant Invoice Generation",
      "Multi-Branch Real-Time Inventory Sync",
      "QR-Based Table/Counter Ordering Systems",
      "Custom ERP Modules (HR, Payroll, Logistics)",
      "WhatsApp Daily P&L Reports to Owner",
      "Role-Based Staff Access & Audit Logs",
      "Dedicated Account Manager & Priority Support",
      "On-Site Installation & Staff Training",
      "Annual Maintenance & Feature Upgrade Plans",
    ],
    benefits: [
      "Eliminate paper-based billing errors and GST miscalculations",
      "Real-time visibility across all branches from one dashboard",
      "Fully custom-built to your exact workflow, not a generic template",
      "On-premise or cloud deployment — your choice, your data",
    ],
    ctaText: "Request Custom Quote",
    ctaHref: "/contact?tier=enterprise",
    highlighted: false,
  },
];

/* ═══════════════════════════════════════════════════════════════
   Why Choose AgniGrow Pillars
   ═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════════════════ */

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
    a: "Starter packages launch in 7–12 days, Growth platforms in 18–21 business days. Custom Software projects are scoped individually. We work in dedicated agile sprints to guarantee timely delivery.",
  },
  {
    q: "Do you provide hosting and ongoing technical maintenance?",
    a: "Yes. All plans include post-launch support (30 days for Starter, 60 days for Growth). After that, we offer optional lightweight annual care plans covering security updates, domain management, and high-speed hosting.",
  },
  {
    q: "What's the difference between Starter and Growth?",
    a: "Starter is a professional brochure website with basic brand setup — perfect for establishing online presence. Growth includes everything in Starter plus WhatsApp CRM automation, advanced analytics, bilingual support, full brand identity, and 60-day support. It's our most popular choice for businesses ready to scale.",
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

export default function PricingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="relative py-10 sm:py-16 overflow-hidden" id="pricing-plans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-[1]">
        {/* ─── 3-Tier Pricing Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-20">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 flex flex-col justify-between bg-bg-card transition-all duration-300 ${
                tier.highlighted
                  ? "border-2 border-ember shadow-[0_0_35px_rgba(255,90,31,0.15)] lg:scale-[1.03] z-10"
                  : "border border-cream-10 hover:border-ember/20 hover:shadow-card-hover"
              }`}
            >
              {/* Badge Pill */}
              {tier.highlighted ? (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full gradient-ember text-bg font-display text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider shadow-ember">
                    <span>★</span> {tier.badge}
                  </span>
                </div>
              ) : (
                <div className="mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-05 border border-cream-10 font-display text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wider text-cream-60">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className={`border-b border-cream-10 pb-5 sm:pb-6 mb-5 sm:mb-6 ${tier.highlighted ? "pt-3" : "pt-1"}`}>
                  <div className="flex flex-col gap-1 mb-2">
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-cream">
                      {tier.name}
                    </h3>
                    <span className="text-[0.68rem] font-mono px-2 py-0.5 rounded-md bg-cream-05 text-cream-60 border border-cream-10 w-fit">
                      {tier.timeline}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-cream-60 mb-4 leading-relaxed">
                    {tier.tagline}
                  </p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className={`font-display font-black text-gradient ${
                      tier.id === "enterprise"
                        ? "text-xl sm:text-3xl"
                        : "text-[clamp(1.5rem,6vw,2.75rem)]"
                    }`}>
                      {tier.priceINR}
                    </span>
                    <span className="text-[0.65rem] text-cream-40 uppercase tracking-widest font-mono">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-cream-60 leading-relaxed mb-5">
                  {tier.description}
                </p>

                {/* Key Benefits */}
                <div className="rounded-xl bg-ember/5 border border-ember/15 p-3 sm:p-4 mb-5">
                  <h4 className="font-display text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider font-bold text-ember mb-2 flex items-center gap-1.5">
                    <span>⚡</span> Key Business Benefits
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {tier.benefits.map((benefit, bi) => (
                      <li key={bi} className="text-[0.7rem] sm:text-xs text-cream-60 flex items-start gap-2">
                        <span className="text-gold mt-0.5 shrink-0">✦</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-display text-[0.7rem] uppercase tracking-wider font-semibold text-cream-60 mb-3">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {tier.features.map((feat, fi) => (
                      <li key={fi} className="text-[0.7rem] sm:text-xs text-cream flex items-start gap-2">
                        <svg
                          className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"
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
                  href={tier.ctaHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-full font-display font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 text-center ${
                    tier.highlighted
                      ? "gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 active:translate-y-0"
                      : tier.id === "enterprise"
                        ? "border border-gold/40 text-gold hover:bg-gold/10"
                        : "border border-ember/30 bg-ember/5 text-cream hover:border-ember hover:bg-ember/15"
                  }`}
                >
                  {tier.ctaText} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Why Choose AgniGrow ─── */}
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

        {/* ─── FAQ Accordion ─── */}
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

        {/* ─── Bottom Booking Consultation Banner ─── */}
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
