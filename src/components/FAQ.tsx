"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How long does it typically take from kick-off to launch?",
    answer:
      "Most standard business websites and landing pages go live within 7 to 14 business days. Complex e-commerce stores, custom billing software, or extensive WhatsApp CRM integrations usually take 2 to 4 weeks. We provide a guaranteed delivery timeline during our discovery call.",
  },
  {
    question: "How do your pricing and payment milestones work?",
    answer:
      "We believe in fair, transparent milestone pricing without hidden fees. A typical engagement is split into: 40% upon project kickoff and design approval, 40% upon staging review and feature testing, and the remaining 20% once your site or application is deployed live on your domain.",
  },
  {
    question: "Do you handle domain names, high-speed hosting, and business emails?",
    answer:
      "Yes, completely! We configure custom corporate domains (.com, .in, etc.), high-speed global cloud hosting (Vercel/Cloudflare with 99.9% uptime), SSL encryption certificates, and professional Google Workspace or Zoho business emails.",
  },
  {
    question: "How does the WhatsApp automation integration work?",
    answer:
      "We connect your website and contact channels directly to the official WhatsApp Business Cloud API. When a prospective client fills out a form or clicks your WhatsApp button, they get instant answers, catalog brochures, and quote PDFs automatically, while notifying your sales team immediately.",
  },
  {
    question: "Do I get full ownership of the source code and brand files?",
    answer:
      "Absolutely 100%. Once final payment is made, you own every line of source code, design vector assets, Figma design systems, domain accounts, and hosting credentials. We never lock you into proprietary closed platforms.",
  },
  {
    question: "What happens after the project is launched? Do you offer support?",
    answer:
      "Every project includes 30 days of complimentary post-launch monitoring, bug fixes, and team training. Afterwards, we offer flexible monthly maintenance plans for updates, backups, security patching, and ongoing marketing optimization.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="faq">
      {/* Google Search FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,90,31,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 relative z-[1]">
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2.5">
            Common Inquiries
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[580px] leading-relaxed">
            Everything you need to know about working with Agni. Still have a question? Our team is always just a quick chat away.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                className={`border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-ember/40 bg-bg-card shadow-[0_4px_24px_rgba(255,90,31,0.08)]"
                    : "border-cream-10 bg-bg-card/70 hover:border-cream-20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-3 sm:gap-4 cursor-pointer outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base md:text-lg text-cream pr-2 leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 border text-xs sm:text-sm transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-ember border-ember text-bg font-bold"
                        : "border-cream-20 text-cream-40"
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm md:text-[0.95rem] text-cream-60 leading-relaxed border-t border-cream-05">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-cream-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="w-full sm:w-auto">
            <h3 className="font-display font-bold text-cream text-sm sm:text-base mb-1">
              Have a specific question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-cream-40">
              Speak directly with our technical lead via WhatsApp or email.
            </p>
          </div>
          <a
            href="https://wa.me/917200146914?text=Hi%20AgniGrow%20team,%20I%20have%20a%20question%20regarding%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 px-5 py-2.5 rounded-full text-xs font-display font-semibold gradient-ember text-bg shadow-ember hover:shadow-ember-hover transition-all text-center"
          >
            Ask On WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
