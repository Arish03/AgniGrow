"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Process.module.css";

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn about your business, audience and goals through a focused conversation — no jargon, just clarity.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We map out the right mix of services, timelines and deliverables tailored to your budget.",
    icon: "🗺️",
  },
  {
    num: "03",
    title: "Design & Build",
    desc: "Our team brings the plan to life — pixel-perfect designs, clean code, tested workflows.",
    icon: "🛠️",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "We deploy, train your team and stay on to optimise, automate and scale what's working.",
    icon: "🚀",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof STEPS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.step} ${vis ? styles.stepVis : ""}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className={styles.stepLine}>
        <span className={styles.dot} />
        {index < STEPS.length - 1 && <span className={styles.connector} />}
      </div>
      <div className={styles.stepContent}>
        <span className={styles.stepNum}>{step.num}</span>
        <span className={styles.stepIcon}>{step.icon}</span>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.desc}</p>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">How We Work</p>
          <h2 className="section-title">
            A Simple <span className="text-gradient">4-Step Process</span>
          </h2>
          <p className="section-subtitle">
            No overthinking — just a clean path from idea to launch.
          </p>
        </div>

        <div className={styles.timeline}>
          {STEPS.map((s, i) => (
            <StepCard key={s.num} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
