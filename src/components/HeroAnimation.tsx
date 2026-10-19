"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    icon: "🌐",
    title: "Web Development",
    subtitle: "Next.js · Lightning Fast",
    color: "ember",
    borderColor: "border-ember/30",
    bgColor: "bg-ember/10",
    iconBg: "bg-ember/20",
  },
  {
    icon: "💬",
    title: "WhatsApp CRM",
    subtitle: "Official API · 24/7 Bots",
    color: "emerald",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/10",
    iconBg: "bg-emerald-500/20",
  },
  {
    icon: "🎨",
    title: "Brand Identity",
    subtitle: "Logo · Packaging · Kits",
    color: "gold",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/10",
    iconBg: "bg-gold/20",
  },
  {
    icon: "🖥️",
    title: "Custom Software",
    subtitle: "Cloud POS · ERP · Billing",
    color: "ember",
    borderColor: "border-ember/30",
    bgColor: "bg-ember/10",
    iconBg: "bg-ember/20",
  },
];

export default function HeroAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[480px] mx-auto flex items-center justify-center select-none py-6">
      {/* Central Showcase Container */}
      <div className="relative w-full">
        {/* Floating Service Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {SERVICES.map((service, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.5,
                  scale: { duration: 0.3 },
                }}
                className={`relative rounded-2xl p-4 sm:p-5 flex flex-col gap-3 border transition-all duration-300 cursor-default ${
                  isActive
                    ? `bg-bg-card ${service.borderColor} shadow-lg`
                    : "bg-bg-card border-cream-10"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${service.iconBg} flex items-center justify-center text-lg sm:text-xl`}
                >
                  {service.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-cream leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[0.68rem] sm:text-xs text-cream-40 font-mono mt-0.5">
                    {service.subtitle}
                  </p>
                </div>

                {/* Active Indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 2.8, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-[2px] rounded-full gradient-ember"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 rounded-xl bg-bg-card border border-cream-10 p-3 sm:p-3.5 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-display text-[0.68rem] sm:text-xs font-semibold text-cream">
              All Systems Operational
            </span>
          </div>
          <span className="text-[0.62rem] sm:text-[0.68rem] font-mono text-cream-40">
            4 Service Lines Active
          </span>
        </motion.div>
      </div>
    </div>
  );
}
