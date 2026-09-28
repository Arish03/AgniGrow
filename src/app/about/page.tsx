import type { Metadata } from "next";
import Link from "next/link";
import AgniLogo from "@/components/AgniLogo";
import AnimatedStat from "@/components/AnimatedStat";

export const metadata: Metadata = {
  title: "About Us | Agni Digital Experience — Vaniyambadi, Tamil Nadu",
  description:
    "Learn about Agni Digital Experience, our founding mission, engineering values, and how we empower local and global businesses with world-class digital systems.",
};

const VALUES = [
  {
    icon: "🔥",
    title: "Relentless Craftsmanship",
    desc: "We refuse to churn out bloated templates. Every line of code, interaction animation, and typography scale is crafted with pride and precision.",
  },
  {
    icon: "📈",
    title: "Measurable Commercial Impact",
    desc: "A pretty website that doesn't generate inquiries is useless. We design user journeys specifically engineered to convert visitors into repeat customers.",
  },
  {
    icon: "🛡️",
    title: "Radical Transparency",
    desc: "No fine print, no hostage platforms. You receive 100% source code ownership, complete domain control, and straightforward milestone payments.",
  },
  {
    icon: "⚡",
    title: "Built for Real-World Speed",
    desc: "We work in rapid two-week sprints. You review interactive staging links within days, not months, keeping momentum high from day one.",
  },
];

const DIFFERENCES = [
  {
    traditional: "Slow, generic WordPress templates that break with updates",
    agni: "Bespoke Next.js & React architecture loading in under 1.2s",
  },
  {
    traditional: "Email contact forms that sit unread in spam folders",
    agni: "Direct WhatsApp Business API workflows with instant automated routing",
  },
  {
    traditional: "Agencies charging recurring monthly fees just to keep files hosted",
    agni: "Zero lock-in: full source code, Figma assets, and hosting accounts belong to you",
  },
  {
    traditional: "Outsourced teams who don't understand local Indian business culture",
    agni: "Engineered right here in Vaniyambadi, tailored for regional & export needs",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-12 sm:py-16 text-center">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[720px] h-[350px] sm:h-[720px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,90,31,0.12) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-[1]">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-ember/10 border border-ember/20 mb-5 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
            <span className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-ember">
              The Story Behind Agni
            </span>
          </div>

          <h1 className="font-display text-[clamp(2rem,6vw,4.2rem)] font-black leading-tight mb-5 sm:mb-6">
            Born in Vaniyambadi.
            <br />
            <span className="text-gradient">Building for the World.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[680px] mx-auto leading-relaxed mb-8 sm:mb-10 px-2">
            Agni Digital Experience is a forward-thinking digital agency founded to give local businesses, manufacturers, and export brands world-class digital firepower.
          </p>

          <div className="flex justify-center">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-bg-card border border-cream-10 inline-flex items-center gap-3">
              <AgniLogo size={32} showText={false} />
              <div className="text-left">
                <span className="font-display font-bold text-xs sm:text-sm text-cream block">
                  Agni (अग्नि)
                </span>
                <span className="text-[0.7rem] sm:text-xs text-cream-40">
                  Fire, passion &amp; relentless forward momentum.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Origin Story */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-bg-card border border-cream-10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 shadow-xl relative overflow-hidden">
            <div className="lg:col-span-6">
              <span className="text-[0.7rem] sm:text-xs font-mono uppercase tracking-widest text-ember font-semibold block mb-2">
                Why We Exist
              </span>
              <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-cream mb-4 sm:mb-6 leading-tight">
                Bridging the Gap Between Local Hustle and Global Quality
              </h2>
              <div className="space-y-3 sm:space-y-4 text-cream-60 text-xs sm:text-sm md:text-base leading-relaxed">
                <p>
                  Vaniyambadi, Ambur, and the surrounding Tirupattur region have long been powerhouses of industrial manufacturing, leather goods, culinary heritage, and entrepreneurial ambition.
                </p>
                <p>
                  Yet for years, regional businesses were forced to choose between outdated freelance templates or overpriced metro agencies in Bangalore and Chennai who never took the time to understand their real workflow bottlenecks.
                </p>
                <p>
                  We founded <strong className="text-cream">Agni</strong> to permanently close that gap. We bring top-tier web engineering, clean design systems, and automated WhatsApp CRM solutions directly to the doorstep of regional businesses.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              <AnimatedStat
                value={50}
                suffix="+"
                label="Solutions Shipped"
                description="From export portals to retail automation suites."
              />
              <AnimatedStat
                value={1.1}
                prefix="< "
                suffix="s"
                decimals={1}
                label="Page Speed"
                description="Engineered with Next.js for instant mobile loading."
              />
              <AnimatedStat
                value={100}
                suffix="%"
                label="Code Ownership"
                description="No vendor lock-in or licensing fees."
              />
              <AnimatedStat
                value={24}
                suffix="/7"
                label="WhatsApp Desk"
                description="Direct technical help when you need it most."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2.5">
              Guiding Principles
            </p>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-cream mb-3 sm:mb-4">
              How We Think &amp; <span className="text-gradient">How We Build</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-cream-60 max-w-[560px] mx-auto">
              Our principles define how we work with every partner, from single-founder startups to international exporters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-bg-card border border-cream-10 rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:border-ember/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{v.icon}</span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-cream mb-1.5 sm:mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Agni Difference Comparison */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-2.5">
              Why Choose Agni
            </p>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-cream mb-3 sm:mb-4">
              The Agni Difference
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-cream-60 max-w-[540px] mx-auto">
              We ditched outdated agency habits to build a modern, transparent development partner you can trust.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 max-w-[900px] mx-auto">
            {DIFFERENCES.map((d, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-bg-card border border-cream-10 items-center"
              >
                <div className="flex items-start gap-2.5 sm:gap-3 text-cream-40 text-xs sm:text-sm">
                  <span className="text-red-400 font-bold shrink-0">✕ Typical Agency:</span>
                  <span>{d.traditional}</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3 text-cream font-medium text-xs sm:text-sm bg-white/[0.02] p-3 rounded-lg sm:rounded-xl border border-ember/20">
                  <span className="text-emerald-400 font-bold shrink-0">✓ With Agni:</span>
                  <span>{d.agni}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#ff5a1f]/20 via-bg-card to-[#ffb020]/20 border border-ember/30 p-6 sm:p-10 md:p-16 text-center flex flex-col items-center">
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-cream mb-3 sm:mb-4">
              Let&apos;s Build Your Digital Advantage
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-cream-60 max-w-[540px] leading-relaxed mb-6 sm:mb-8">
              Whether you want to launch a new brand, capture international export orders, or automate your daily operations, we are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover transition-all text-center"
              >
                Start a Conversation →
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>💬</span> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
