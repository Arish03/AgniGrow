"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01", title: "Discovery", icon: "🔍",
    desc: "We learn about your business, audience and goals through a focused conversation — no jargon, just clarity.",
  },
  {
    num: "02", title: "Strategy", icon: "🗺️",
    desc: "We map out the right mix of services, timelines and deliverables tailored to your budget.",
  },
  {
    num: "03", title: "Design & Build", icon: "🛠️",
    desc: "Our team brings the plan to life — pixel-perfect designs, clean code, tested workflows.",
  },
  {
    num: "04", title: "Launch & Grow", icon: "🚀",
    desc: "We deploy, train your team and stay on to optimise, automate and scale what's working.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Process() {
  return (
    <section className="py-14 sm:py-24 relative" id="process">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2.5">
            How We Work
          </p>
          <h2 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold leading-tight mb-3 sm:mb-6">
            A Simple <span className="text-gradient">4-Step Process</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[600px] leading-relaxed px-2">
            No overthinking — just a clean path from idea to launch.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col items-center relative"
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              {/* Dot + connector */}
              <div className="relative flex items-center justify-center w-full h-10 mb-6">
                <span className="w-3.5 h-3.5 rounded-full gradient-ember glow-ember z-[2] shrink-0" />
                {i < STEPS.length - 1 && (
                  <span className="absolute top-1/2 left-1/2 w-full h-0.5 -translate-y-1/2 bg-gradient-to-r from-ember to-cream-10 z-[1] hidden lg:block" />
                )}
              </div>

              {/* Content */}
              <div className="text-center px-4">
                <span className="block font-display text-xs font-bold text-ember tracking-[0.15em] uppercase mb-1">
                  {step.num}
                </span>
                <motion.span
                  className="block text-3xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.icon}
                </motion.span>
                <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-cream-40 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
