"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Ember particle system */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
      hue: number;
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
        hue: 15 + Math.random() * 30, // orange → gold
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
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * alpha, 0, Math.PI * 2);
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

  return (
    <section className={styles.hero} id="hero">
      {/* Ambient glow */}
      <div className={styles.glow} />
      <div className={styles.glowGold} />

      {/* Ember particles */}
      <canvas ref={canvasRef} className={styles.particles} />

      {/* Decorative rings */}
      <div className={styles.ring} />
      <div className={styles.ringInner} />

      <div className={`container ${styles.content}`}>
        <p className={`section-label animate-fade-in-up`} style={{ animationDelay: "100ms" }}>
          Vaniyambadi&apos;s Digital Agency
        </p>

        <h1 className={`${styles.title} animate-fade-in-up`} style={{ animationDelay: "200ms" }}>
          We Build{" "}
          <span className="text-gradient">Digital Experiences</span>
          <br />
          That Ignite Growth
        </h1>

        <p className={`${styles.subtitle} animate-fade-in-up`} style={{ animationDelay: "350ms" }}>
          Websites, branding, automation &amp; custom software —
          everything your business needs to thrive online, crafted by a
          team that understands your local market and global ambitions.
        </p>

        <div className={`${styles.actions} animate-fade-in-up`} style={{ animationDelay: "500ms" }}>
          <a href="#services" className="btn btn-primary">
            Explore Services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            Let&apos;s Talk
          </a>
        </div>

        {/* Stats bar */}
        <div className={`${styles.stats} animate-fade-in-up`} style={{ animationDelay: "650ms" }}>
          <div className={styles.stat}>
            <span className={styles.statNum}>7+</span>
            <span className={styles.statLabel}>Service Lines</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>50+</span>
            <span className={styles.statLabel}>Solutions</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>∞</span>
            <span className={styles.statLabel}>Possibilities</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
