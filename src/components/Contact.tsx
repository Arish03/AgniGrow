"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { trackLeadSubmission, trackWhatsAppClick } from "@/lib/analytics";

const SERVICE_OPTIONS = [
  "Website & Portal",
  "E-Commerce Store",
  "WhatsApp CRM & Bot",
  "Brand Identity Kit",
  "Cloud POS / ERP",
  "Digital Event Micro-Site",
];

const BUDGET_OPTIONS = [
  "₹15k – ₹30k",
  "₹30k – ₹60k",
  "₹60k – ₹1.2L",
  "₹1.2L+",
  "Discuss Scope",
];

const TIMELINE_OPTIONS = [
  "Under 2 Weeks",
  "2 – 4 Weeks",
  "1 – 2 Months",
  "Flexible",
];



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "Website & Portal",
    budget: "₹30k – ₹60k",
    timeline: "2 – 4 Weeks",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSelectOption = (field: "service" | "budget" | "timeline", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) {
      setErrorMessage("Please enter your name and phone/email to proceed.");
      return;
    }

    // Track conversion event
    trackLeadSubmission({
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
    });
    trackWhatsAppClick("contact_scoper_whatsapp");

    const message = `*New Inquiry via AgniGrow Website:*
• *Name:* ${formData.name}
• *Contact:* ${formData.contact}
• *Service:* ${formData.service}
• *Budget:* ${formData.budget}
• *Target Timeline:* ${formData.timeline}
• *Project Notes:* ${formData.message.trim() || "Ready to discuss details"}`;

    const url = `https://wa.me/917200146914?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setStatus("success");
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) {
      setErrorMessage("Please enter your name and phone/email to proceed.");
      return;
    }

    // Track conversion event
    trackLeadSubmission({
      service: formData.service,
      budget: formData.budget,
      timeline: formData.timeline,
    });

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section className="py-14 sm:py-24 relative overflow-hidden" id="contact">

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-[1]">
        {/* Section Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-ember/10 border border-ember/20 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
            <span className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-ember">
              Start Your Project
            </span>
          </div>

          <h1 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-tight mb-3 sm:mb-4">
            Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[620px] leading-relaxed px-2">
            Tell us about your business goals. We&apos;ll prepare an actionable technical roadmap, scope breakdown, and transparent quotation within 24 hours.
          </p>
        </motion.div>

        {/* Content layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Left contact info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-cream mb-2 sm:mb-3">
                Direct Communication, Zero Bureaucracy
              </h2>
              <p className="text-xs sm:text-sm text-cream-60 leading-relaxed mb-6">
                No endless agency email chains. You speak directly with our core engineering and design leads. We respect your time and work in fast, transparent milestones.
              </p>
            </div>

            {/* Studio Info Cards */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <a
                href="https://maps.google.com/?q=Vaniyambadi+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-cream-05 border border-cream-10 hover:border-cream-20 transition-colors group"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-ember/10 border border-ember/20 flex items-center justify-center text-base sm:text-lg shrink-0">
                  📍
                </span>
                <div>
                  <h4 className="text-[0.7rem] sm:text-xs uppercase tracking-wider font-semibold text-cream-40 mb-0.5">
                    Studio Location
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-cream group-hover:text-ember transition-colors">
                    Vaniyambadi, Tamil Nadu, 635751, India
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@agnigrow.in"
                className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-cream-05 border border-cream-10 hover:border-cream-20 transition-colors group"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-ember/10 border border-ember/20 flex items-center justify-center text-base sm:text-lg shrink-0">
                  ✉️
                </span>
                <div>
                  <h4 className="text-[0.7rem] sm:text-xs uppercase tracking-wider font-semibold text-cream-40 mb-0.5">
                    Direct Email
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-cream group-hover:text-ember transition-colors">
                    info@agnigrow.in
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/917200146914"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-cream-05 border border-cream-10 hover:border-emerald-500/30 transition-colors group"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-base sm:text-lg shrink-0">
                  💬
                </span>
                <div>
                  <h4 className="text-[0.7rem] sm:text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-0.5">
                    Fast WhatsApp Desk
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-cream group-hover:text-emerald-400 transition-colors">
                    +91 72001 46914 (Mon–Sat, 9:30 AM – 7:00 PM)
                  </p>
                </div>
              </a>
            </div>

            {/* Response commitment badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-ember/10 via-gold/10 to-transparent border border-ember/20">
              <span className="text-xs font-bold text-cream block mb-1">
                ⚡ 4-Hour Response Guarantee
              </span>
              <p className="text-[0.72rem] sm:text-xs text-cream-60 leading-relaxed">
                During standard IST business hours, you will receive a response within 4 hours. No waiting for days.
              </p>
            </div>
          </div>

          {/* Right form card with Interactive Project Scoper */}
          <div className="lg:col-span-7">
            <div className="bg-bg-card border border-cream-10 rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full gradient-ember flex items-center justify-center text-2xl shadow-ember">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cream">
                    Inquiry Received!
                  </h3>
                  <p className="text-cream-60 max-w-[420px] text-sm leading-relaxed">
                    Thank you, <span className="text-cream font-bold">{formData.name}</span>. Our lead strategist will review your requirements for <span className="text-ember font-semibold">{formData.service}</span> and reach out within 4 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto justify-center">
                    <a
                      href="https://wa.me/917200146914"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>💬</span> Ping On WhatsApp Now
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          contact: "",
                          service: "Website & Portal",
                          budget: "₹30k – ₹60k",
                          timeline: "2 – 4 Weeks",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold border border-cream-20 text-cream hover:border-cream-40 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form className="flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-3 border-b border-cream-10">
                    <h3 className="font-display font-bold text-base sm:text-lg text-cream">
                      Project Scoper &amp; Inquiry
                    </h3>
                    <span className="text-[0.7rem] sm:text-xs text-cream-40 font-mono">
                      Fast 2-min setup
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  {/* 1. Service Selection Chips */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.72rem] sm:text-xs font-semibold uppercase tracking-wider text-cream-40">
                      1. Select Required Service
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {SERVICE_OPTIONS.map((svc) => {
                        const isSelected = formData.service === svc;
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => handleSelectOption("service", svc)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? "bg-ember text-bg font-bold shadow-sm shadow-ember/30"
                                : "bg-cream-05 text-cream-60 hover:text-cream border border-cream-10"
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Budget Selection Chips */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.72rem] sm:text-xs font-semibold uppercase tracking-wider text-cream-40">
                      2. Estimated Budget
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {BUDGET_OPTIONS.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => handleSelectOption("budget", b)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? "bg-gold text-bg font-bold shadow-sm shadow-gold/30"
                                : "bg-cream-05 text-cream-60 hover:text-cream border border-cream-10"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Timeline Selection Chips */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.72rem] sm:text-xs font-semibold uppercase tracking-wider text-cream-40">
                      3. Target Launch Timeline
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {TIMELINE_OPTIONS.map((time) => {
                        const isSelected = formData.timeline === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleSelectOption("timeline", time)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? "bg-cream text-bg font-bold shadow-sm"
                                : "bg-cream-05 text-cream-60 hover:text-cream border border-cream-10"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Name & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[0.72rem] sm:text-xs font-semibold uppercase tracking-wider text-cream-40">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Aslam Khan"
                        className="w-full px-3.5 py-2.5 sm:py-3 bg-cream-05 border border-cream-10 rounded-xl text-cream text-xs sm:text-sm placeholder:text-cream-20 outline-none transition-all focus:border-ember focus:shadow-[0_0_0_3px_rgba(255,90,31,0.15)]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact" className="text-[0.72rem] sm:text-xs font-semibold uppercase tracking-wider text-cream-40">
                        Email or WhatsApp Phone *
                      </label>
                      <input
                        type="text"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        placeholder="+91 72001 46914"
                        className="w-full px-3.5 py-2.5 sm:py-3 bg-cream-05 border border-cream-10 rounded-xl text-cream text-xs sm:text-sm placeholder:text-cream-20 outline-none transition-all focus:border-ember focus:shadow-[0_0_0_3px_rgba(255,90,31,0.15)]"
                      />
                    </div>
                  </div>

                  {/* 5. Project Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[0.72rem] sm:text-xs font-semibold uppercase tracking-wider text-cream-40">
                      Brief Project Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a brief about your business, reference websites you like, or specific requirements..."
                      className="w-full px-3.5 py-2.5 sm:py-3 bg-cream-05 border border-cream-10 rounded-xl text-cream text-xs sm:text-sm placeholder:text-cream-20 outline-none transition-all focus:border-ember focus:shadow-[0_0_0_3px_rgba(255,90,31,0.15)] resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-display font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/30 transition-all cursor-pointer"
                    >
                      <span>💬</span> Send via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={handleDirectSubmit}
                      disabled={status === "submitting"}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-display font-bold text-xs sm:text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover transition-all cursor-pointer disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span>Sending...</span>
                      ) : (
                        <span>Send Inquiry →</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
