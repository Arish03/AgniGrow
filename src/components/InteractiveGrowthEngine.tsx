"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { type Engine, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

type EngineModule = "speed" | "whatsapp" | "export" | "cloud";

export default function InteractiveGrowthEngine() {
  const [activeTab, setActiveTab] = useState<EngineModule>("speed");
  const [isSimulating, setIsSimulating] = useState(false);
  const [speedProgress, setSpeedProgress] = useState(100);
  const [chatStep, setChatStep] = useState(0);
  const [currency, setCurrency] = useState<"EUR" | "USD" | "GBP">("EUR");

  // Stable init callback for ParticlesProvider
  const initParticles = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Speed benchmark simulation
  const runSpeedBenchmark = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSpeedProgress(0);
    const interval = setInterval(() => {
      setSpeedProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 40);
  };

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 130,
            links: { opacity: 0.35, color: "#ff5a1f" },
          },
        },
      },
      particles: {
        color: { value: ["#ff5a1f", "#ffb020", "#ffffff"] },
        links: {
          color: "#ff5a1f",
          distance: 110,
          enable: true,
          opacity: 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.1,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: {
          density: { enable: true, width: 800, height: 800 },
          value: 32,
        },
        opacity: { value: { min: 0.15, max: 0.6 } },
        shape: { type: "circle" },
        size: { value: { min: 1.5, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section
      id="growth-engine"
      className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden bg-bg"
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,90,31,0.08) 0%, transparent 65%)",
        }}
      />

      {/* tsParticles Interactive Background */}
      <div className="absolute inset-0 pointer-events-auto z-0">
        <ParticlesProvider init={initParticles}>
          <Particles
            id="tsparticles-growth-engine"
            className="w-full h-full"
            options={particlesOptions}
          />
        </ParticlesProvider>
      </div>

      <div className="relative z-[1] max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember/10 border border-ember/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
            </span>
            <span className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-ember">
              Interactive Growth Engine
            </span>
          </div>

          <h2 className="font-display text-[clamp(1.9rem,5vw,3.3rem)] font-black leading-tight mb-4">
            Experience the Engine Behind <br className="hidden sm:inline" />
            <span className="text-gradient">Measurable Scale</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[620px] leading-relaxed">
            Move your cursor across the digital field to interact with live particles. Click any module below to test our real-time speed, WhatsApp automation, and export architecture.
          </p>

          {/* Module Selector Tabs */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 p-1.5 rounded-2xl bg-bg-card border border-cream-10 w-full sm:w-auto">
            {[
              { id: "speed", label: "⚡ Sub-Second Speed", pill: "Next.js 16" },
              { id: "whatsapp", label: "💬 WhatsApp CRM", pill: "Auto Triage" },
              { id: "export", label: "🌐 Export Showroom", pill: "Multi-Currency" },
              { id: "cloud", label: "☁️ Cloud Infrastructure", pill: "99.99% Uptime" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as EngineModule)}
                  className={cn(
                    "px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-display text-[0.7rem] sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 sm:gap-2 text-center",
                    isActive
                      ? "gradient-ember text-bg shadow-ember"
                      : "text-cream-60 hover:text-cream hover:bg-cream-05"
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "text-[0.65rem] px-1.5 py-0.5 rounded font-mono hidden md:inline",
                      isActive ? "bg-bg/20 text-bg" : "bg-cream-05 text-cream-40"
                    )}
                  >
                    {tab.pill}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Console Workspace */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl sm:rounded-3xl bg-bg-card/80 backdrop-blur-2xl border border-cream-10 p-4 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Module 1: Speed & Web Architecture */}
          {activeTab === "speed" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
                <span className="font-mono text-[0.7rem] sm:text-xs text-ember uppercase tracking-wider font-semibold">
                  Module 01 · Velocity Benchmark
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-cream leading-snug">
                  Sub-Second Page Load vs. Bloated Legacy Sites
                </h3>
                <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                  Every 100ms of latency costs businesses 7% in sales conversions. Our Next.js architecture leverages edge prerendering and Turbopack optimization to deliver instant interactions on mobile.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={runSpeedBenchmark}
                    disabled={isSimulating}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-xs sm:text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover active:scale-95 transition-all cursor-pointer text-center"
                  >
                    <span>⚡</span> {isSimulating ? "Benchmarking Core Vitals..." : "Run Live Speed Benchmark"}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-cream-05 rounded-2xl p-4 sm:p-6 border border-cream-10 flex flex-col gap-4 sm:gap-5">
                {/* Benchmark Metric Bars */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-cream font-bold">AgniGrow Next.js 16 Edge</span>
                    <span className="text-emerald-400 font-bold">0.68s (100 Score)</span>
                  </div>
                  <div className="h-3 w-full bg-cream-10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      style={{ width: `${speedProgress}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-cream-60">Standard WordPress / Legacy CMS</span>
                    <span className="text-amber-400">4.82s (Sluggish)</span>
                  </div>
                  <div className="h-3 w-full bg-cream-10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500/50 rounded-full w-[28%]" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-3 border-t border-cream-10 text-center">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-bg-card border border-cream-10">
                    <span className="font-display text-base sm:text-lg font-black text-gradient block">100</span>
                    <span className="text-[0.6rem] sm:text-[0.65rem] text-cream-40 uppercase tracking-wider font-mono">Performance</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-bg-card border border-cream-10">
                    <span className="font-display text-base sm:text-lg font-black text-gradient block">0.6s</span>
                    <span className="text-[0.6rem] sm:text-[0.65rem] text-cream-40 uppercase tracking-wider font-mono">LCP Target</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-bg-card border border-cream-10">
                    <span className="font-display text-base sm:text-lg font-black text-gradient block">0ms</span>
                    <span className="text-[0.6rem] sm:text-[0.65rem] text-cream-40 uppercase tracking-wider font-mono">Layout Shift</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Module 2: WhatsApp CRM Simulation */}
          {activeTab === "whatsapp" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                  Module 02 · WhatsApp Business API Automation
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-cream">
                  Turn Passive Web Visitors into Instant WhatsApp Conversations
                </h3>
                <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                  In India and regional markets, clients don&apos;t fill out slow web forms — they want instant answers on WhatsApp. Our bots triage inquiries, schedule appointments, and alert staff phones within seconds.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setChatStep(0)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer",
                      chatStep === 0
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : "bg-cream-05 text-cream-60 border-cream-10 hover:text-cream"
                    )}
                  >
                    1. Buyer Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setChatStep(1)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer",
                      chatStep === 1
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : "bg-cream-05 text-cream-60 border-cream-10 hover:text-cream"
                    )}
                  >
                    2. Automated Triage
                  </button>
                  <button
                    type="button"
                    onClick={() => setChatStep(2)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer",
                      chatStep === 2
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : "bg-cream-05 text-cream-60 border-cream-10 hover:text-cream"
                    )}
                  >
                    3. PDF Quote Sent
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-bg-card rounded-2xl p-4 sm:p-5 border border-emerald-500/30 shadow-xl flex flex-col gap-3 font-sans">
                <div className="flex items-center justify-between pb-3 border-b border-cream-10">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                      AG
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cream">AgniGrow Growth Bot</p>
                      <p className="text-[0.62rem] text-emerald-400">Official Business Account · Active 24/7</p>
                    </div>
                  </div>
                  <span className="text-[0.65rem] font-mono text-cream-40">Encrypted</span>
                </div>

                <div className="space-y-2.5 text-xs py-2 min-h-[170px]">
                  <div className="flex justify-end">
                    <div className="bg-emerald-600/30 border border-emerald-500/30 text-cream p-3 rounded-2xl rounded-tr-none max-w-[88%] sm:max-w-[80%] leading-relaxed text-xs">
                      Hi, I need quotation for 5,000 finished leather shoe upper pieces with UK export specs.
                    </div>
                  </div>

                  {chatStep >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-cream-05 border border-cream-10 text-cream p-3 rounded-2xl rounded-tl-none max-w-[90%] sm:max-w-[85%] leading-relaxed text-xs">
                        <p className="text-gold font-bold mb-1">⚡ Inquiry Verified:</p>
                        <p>Export Volume: 5,000 units · Destination: UK (GBP). Generating instant spec sheet &amp; notifying sales director.</p>
                      </div>
                    </motion.div>
                  )}

                  {chatStep >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-cream-05 border border-emerald-500/40 text-cream p-3 rounded-2xl rounded-tl-none max-w-[90%] sm:max-w-[85%] leading-relaxed text-xs">
                        📄 <span className="font-semibold text-emerald-400">UK_Leather_Specs_Quotation.pdf</span>
                        <p className="text-[0.68rem] text-cream-40 mt-1">Generated dynamically · Dispatched in 0.4s</p>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="pt-2 border-t border-cream-05 flex items-center justify-between text-[0.68rem] sm:text-[0.7rem] text-cream-40 font-mono">
                  <span>⚡ 0.2s Response Latency</span>
                  <span>100% Delivery Rate</span>
                </div>
              </div>
            </div>
          )}

          {/* Module 3: Export Showroom & Multi-Currency */}
          {activeTab === "export" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
                <span className="font-mono text-[0.7rem] sm:text-xs text-gold uppercase tracking-wider font-semibold">
                  Module 03 · International B2B Commerce
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-cream leading-snug">
                  B2B Showrooms Engineered for European &amp; American Buyers
                </h3>
                <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                  International buyers demand instant pricing calculations in their local currency and downloadable technical spec sheets. Our B2B portals bridge regional manufacturers to global trade seamlessly.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs text-cream-60 font-mono">Switch Buyer Currency:</span>
                  {(["EUR", "USD", "GBP"] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCurrency(c)}
                      className={cn(
                        "px-3 py-1 rounded-md text-xs font-mono font-bold transition-all cursor-pointer",
                        currency === c
                          ? "bg-gold text-bg font-extrabold"
                          : "bg-cream-05 text-cream-60 hover:text-cream border border-cream-10"
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-cream-05 rounded-2xl p-4 sm:p-6 border border-cream-10">
                <div className="flex items-center justify-between pb-4 border-b border-cream-10 mb-4 gap-2">
                  <div>
                    <span className="text-[0.65rem] font-mono text-gold uppercase tracking-wider block">
                      Live Sample Calculation
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold text-cream">
                      Full-Grain Calfskin Crust (Grade A)
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-lg sm:text-2xl font-black text-gradient">
                      {currency === "EUR" ? "€ 14,800" : currency === "USD" ? "$ 16,200" : "£ 12,900"}
                    </span>
                    <span className="text-[0.62rem] sm:text-[0.65rem] font-mono text-cream-40 block">CIF Export Order</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-cream-60 mb-5">
                  <div className="flex justify-between py-1 border-b border-cream-05">
                    <span>Batch Quantity</span>
                    <span className="font-mono text-cream font-bold">2,500 Sq. Ft.</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-cream-05">
                    <span>Lead Time to Rotterdam / London</span>
                    <span className="font-mono text-cream font-bold">14 Business Days</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-cream-05">
                    <span>REACH &amp; LWG Gold Certified</span>
                    <span className="font-mono text-emerald-400 font-bold">Verified ✓</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="w-full py-2.5 rounded-xl font-display font-bold text-xs gradient-ember text-bg shadow-ember text-center cursor-pointer"
                  >
                    Request Physical Sample Swatch →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Module 4: Cloud Infrastructure & 99.99% Uptime */}
          {activeTab === "cloud" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
                <span className="font-mono text-[0.7rem] sm:text-xs text-cyan-400 uppercase tracking-wider font-semibold">
                  Module 04 · Enterprise Reliability
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-cream leading-snug">
                  Serverless Cloud Resilience with Zero Downtime
                </h3>
                <p className="text-xs sm:text-sm text-cream-60 leading-relaxed">
                  Deployed on globally distributed edge networks across 300+ cities. Automatic failover, DDoS mitigation, and daily encrypted backups ensure your digital storefront operates reliably 24/7/365.
                </p>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-cream-05 border border-cream-10">
                    <span className="text-[0.65rem] sm:text-xs text-cream-40 uppercase tracking-widest block font-mono">Uptime SLA</span>
                    <span className="font-display text-base sm:text-lg font-bold text-emerald-400">99.99%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-cream-05 border border-cream-10">
                    <span className="text-[0.65rem] sm:text-xs text-cream-40 uppercase tracking-widest block font-mono">Global Edge CDN</span>
                    <span className="font-display text-base sm:text-lg font-bold text-gold">300+ Nodes</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-cream-05 rounded-2xl p-4 sm:p-6 border border-cream-10 flex flex-col gap-3.5 sm:gap-4 font-mono text-[0.72rem] sm:text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-cream-10 gap-2">
                  <span className="text-cream font-bold">Cloud Node Telemetry</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 shrink-0 text-[0.65rem] sm:text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ALL NOMINAL
                  </span>
                </div>

                <div className="space-y-2 text-cream-60">
                  <div className="flex items-center justify-between gap-2 p-2 rounded bg-bg-card border border-cream-05">
                    <span className="truncate">Asia-South (Chennai / Mumbai)</span>
                    <span className="text-emerald-400 font-bold shrink-0">12ms</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 p-2 rounded bg-bg-card border border-cream-05">
                    <span className="truncate">Europe-West (Frankfurt / London)</span>
                    <span className="text-emerald-400 font-bold shrink-0">48ms</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 p-2 rounded bg-bg-card border border-cream-05">
                    <span>Database Query Latency</span>
                    <span className="text-emerald-400 font-bold shrink-0">4.2ms</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 p-2 rounded bg-bg-card border border-cream-05">
                    <span>SSL / TLS 1.3 Handshake</span>
                    <span className="text-emerald-400 font-bold shrink-0">18ms</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
