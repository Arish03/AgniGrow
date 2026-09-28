"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
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
    <section
      ref={ref}
      className={`section ${styles.section}`}
      id="contact"
    >
      {/* Ambient glow */}
      <div className={styles.glow} />

      <div className={`container ${vis ? "animate-fade-in-up" : ""}`} style={{ opacity: vis ? undefined : 0 }}>
        <div className={styles.wrapper}>
          {/* Left copy */}
          <div className={styles.copy}>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">
              Ready to{" "}
              <span className="text-gradient">Ignite Your Growth?</span>
            </h2>
            <p className={styles.desc}>
              Tell us about your project. Whether it&apos;s a simple website, a
              complete brand overhaul or a custom software system — we&apos;ll
              craft a plan that fits your budget and timeline.
            </p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span>Vaniyambadi, Tamil Nadu, India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>✉️</span>
                <span>hello@agnix.in</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Your Name</label>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="e.g. Ravi Kumar"
                autoComplete="name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email / Phone</label>
              <input
                type="text"
                id="email"
                className={styles.input}
                placeholder="ravi@example.com or +91 …"
                autoComplete="email"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="service" className={styles.label}>Service Interested In</label>
              <select id="service" className={styles.input} defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Website Development</option>
                <option>Branding</option>
                <option>Automation</option>
                <option>E-Commerce</option>
                <option>Digital Invitations</option>
                <option>Software Solutions</option>
                <option>Marketing &amp; Growth</option>
                <option>Something else</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>Tell us more</label>
              <textarea
                id="message"
                className={styles.textarea}
                rows={4}
                placeholder="A brief about your project…"
              />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submit}`}>
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
