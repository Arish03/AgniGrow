"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Addons.module.css";

const ADDONS = [
  { icon: "🌍", label: "Domain & hosting management" },
  { icon: "📍", label: "Google Maps / business listing" },
  { icon: "📱", label: "QR code menus & catalogs" },
  { icon: "💳", label: "Digital visiting cards (vCard)" },
  { icon: "📡", label: "NFC tap business cards" },
  { icon: "📺", label: "Digital menu boards" },
];

export default function Addons() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="addons">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Extras</p>
          <h2 className="section-title">
            <span className="text-gradient">Add-on</span> Services
          </h2>
          <p className="section-subtitle">
            Small but mighty upgrades to round out your digital presence.
          </p>
        </div>

        <div
          ref={ref}
          className={`${styles.grid} ${vis ? styles.gridVis : ""}`}
        >
          {ADDONS.map((a, i) => (
            <div
              key={a.label}
              className={styles.chip}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className={styles.chipIcon}>{a.icon}</span>
              <span className={styles.chipLabel}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
