"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

function AnimatedStat({ value, suffix = "", label }: { value: number | string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (typeof value !== "number") return;

    let start = 0;
    const duration = 1600; // ms
    const steps = 40;
    const stepTime = duration / steps;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="font-display text-2xl sm:text-3xl font-extrabold text-gradient">
        {typeof value === "number" ? count : value}
        {suffix}
      </span>
      <span className="text-xs text-cream-40 uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Ember particle system */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; life: number; maxLife: number; hue: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = () => {
      const maxLife = 120 + Math.random() * 80;
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: canvas.offsetHeight + 10,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(0.4 + Math.random() * 1.2),
        r: 1.5 + Math.random() * 2,
        life: 0,
        maxLife,
        hue: 15 + Math.random() * 30,
      });
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      if (Math.random() < 0.35) spawn();
      particles = particles.filter((p) => p.life < p.maxLife);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const alpha = 1 - p.life / p.maxLife;
        if (alpha <= 0) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0, p.r * alpha), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 58%, ${alpha * 0.6})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.14, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[84px] pb-16">
      {/* Ambient glows */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[850px] h-[850px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,90,31,0.14) 0%, transparent 65%)",
          animation: "pulse-glow 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[15%] -right-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,176,32,0.09) 0%, transparent 60%)",
          animation: "pulse-glow 8s ease-in-out infinite 2s",
        }}
      />

      {/* Ember particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />

      {/* Decorative orbital rings */}
      <div
        className="absolute top-1/2 left-1/2 w-[680px] h-[680px] rounded-full border border-cream-05 pointer-events-none hidden md:block"
        style={{ animation: "rotate-slow 80s linear infinite" }}
      >
        <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-ember glow-ember" />
      </div>
      <div
        className="absolute top-1/2 left-1/2 w-[460px] h-[460px] rounded-full border border-cream-05 pointer-events-none hidden md:block"
        style={{ animation: "rotate-slow 60s linear infinite reverse" }}
      >
        <span className="absolute -bottom-[3px] left-[30%] w-1.5 h-1.5 rounded-full bg-gold glow-gold" />
      </div>

      {/* Content */}
      <div className="relative z-[2] text-center flex flex-col items-center max-w-[860px] px-4 sm:px-6 py-8 sm:py-14">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-ember/10 border border-ember/20 mb-5 sm:mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
          </span>
          <span className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-ember">
            Vaniyambadi&apos;s Digital Experience Studio
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(2rem,6.5vw,4.5rem)] font-black leading-[1.1] tracking-tight mb-5 sm:mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          We Build <span className="text-gradient">Digital Experiences</span>
          <br />That Ignite High Growth
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[620px] leading-relaxed mb-8 sm:mb-10 px-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Export-ready websites, WhatsApp CRM automation, branding &amp; custom software —
          tailored for ambitious local businesses scaling to Tamil Nadu and global markets.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-14 w-full sm:w-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-display font-semibold text-xs sm:text-[0.95rem] gradient-ember text-bg shadow-ember hover:-translate-y-0.5 hover:shadow-ember-hover active:translate-y-0 transition-all duration-200"
          >
            View Our Work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-display font-semibold text-xs sm:text-[0.95rem] border border-ember/30 bg-ember/5 text-cream hover:border-ember hover:bg-ember/15 transition-all duration-200"
          >
            <span>⚡</span> Explore Services
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-display font-semibold text-xs sm:text-[0.95rem] border border-cream-20 text-cream hover:border-cream-40 hover:text-white transition-all duration-200"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>

        {/* Animated Stats bar */}
        <motion.div
          className="grid grid-cols-2 sm:flex sm:items-center justify-center gap-4 sm:gap-8 md:gap-12 px-5 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-3xl bg-bg-card/60 backdrop-blur-xl border border-cream-10 shadow-2xl w-full max-w-[500px] sm:max-w-none"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <AnimatedStat value={7} suffix="+" label="Service Lines" />
          <div className="w-px h-8 bg-cream-10 hidden sm:block" />
          <AnimatedStat value={50} suffix="+" label="Solutions Shipped" />
          <div className="w-px h-8 bg-cream-10 hidden sm:block" />
          <AnimatedStat value="100%" label="Client Satisfaction" />
          <div className="w-px h-8 bg-cream-10 hidden md:block" />
          <div className="hidden md:block">
            <AnimatedStat value="∞" label="Possibilities" />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-bg to-transparent z-[2] pointer-events-none" />
    </section>
  );
}
