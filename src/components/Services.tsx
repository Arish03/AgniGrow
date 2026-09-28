"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Services.module.css";

interface Service {
  icon: string;
  title: string;
  tagline: string;
  items: string[];
}

const SERVICES: Service[] = [
  {
    icon: "🌐",
    title: "Website Development",
    tagline:
      "Export-ready, multilingual, mobile-first websites built to convert visitors into customers.",
    items: [
      "Landing & marketing sites",
      "Real estate listing pages",
      "Healthcare & clinic profiles",
      "Educational institute sites",
      "Case study & portfolio pages",
    ],
  },
  {
    icon: "🎨",
    title: "Branding",
    tagline:
      "Logos, identity kits, catalogs and marketing collateral that build trust.",
    items: [
      "Logos & identity kits",
      "Menu / catalog photography + design bundle",
    ],
  },
  {
    icon: "⚡",
    title: "Automation",
    tagline:
      "WhatsApp workflows, CRM and lead tracking systems that save you time.",
    items: [
      "WhatsApp workflows & CRM",
      "AI chatbot for WhatsApp / website",
      "Review & testimonial collection",
      "Appointment / booking systems",
      "Feedback forms & surveys",
      "Simple CRM dashboard",
      "Competitor tracking reports",
      "Invoice / quotation generators",
    ],
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    tagline:
      "Online stores and marketplace setup to help you sell beyond your shop.",
    items: [
      "Online stores & marketplace setup",
      "Export documentation tools",
    ],
  },
  {
    icon: "💌",
    title: "Digital Invitations",
    tagline:
      "Personalized micro-websites for weddings and events — RSVP, gallery & live-stream, shared with one link.",
    items: [
      "Wedding & event micro-sites",
      "Virtual event pages",
      "Digital anniversary greetings",
      "Memorial / tribute pages",
    ],
  },
  {
    icon: "🖥️",
    title: "Software Solutions",
    tagline:
      "Custom-built systems for businesses that have outgrown off-the-shelf tools.",
    items: [
      "Point-of-sale / billing software",
      "Inventory & stock alert systems",
      "Mobile app development",
      "Custom database / ERP setups",
      "Multi-location dashboards",
    ],
  },
  {
    icon: "📈",
    title: "Marketing & Growth",
    tagline:
      "Getting found, getting seen and looking credible once someone reaches you.",
    items: [
      "Paid ads management (Meta / Google)",
      "Google Business Profile management",
      "Business email setup",
    ],
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{service.icon}</span>
        <div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardTagline}>{service.tagline}</p>
        </div>
      </div>
      <ul className={styles.cardList}>
        {service.items.map((item) => (
          <li key={item} className={styles.cardItem}>
            <span className={styles.cardBullet} />
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.cardGlow} />
    </div>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">
            Full-Stack <span className="text-gradient">Digital Services</span>
          </h2>
          <p className="section-subtitle">
            From your first logo to a custom ERP — we handle the entire
            digital journey so you can focus on running your business.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
