---
name: agni-design
description: >-
  Use this skill when designing, building, or modifying any UI component,
  page, or section for the Agni Digital (agnix-site) Next.js project.
  Covers the Ember & Gold design system, component patterns, animation
  conventions, Tailwind v4 usage, and file structure rules.
---

# Agni Digital — Design System & UI Skill

This skill is the single source of truth for building UI in the **agnix-site** Next.js project. Always follow these conventions to keep the codebase consistent, premium, and on-brand.

---

## 1. Design Tokens (globals.css)

The design system is defined in `src/app/globals.css` using **Tailwind v4 CSS custom properties** (no `tailwind.config.js`).

### Color Palette — "Ember & Gold"

| Token (Tailwind class)       | Dark Mode Value           | Light Mode Value          | Usage                          |
|------------------------------|---------------------------|---------------------------|--------------------------------|
| `bg-bg`                      | `#0b0807`                 | `#faf7f2`                 | Page background                |
| `bg-bg-card`                 | `#151110`                 | `#ffffff`                 | Card backgrounds               |
| `bg-bg-card-hover`           | `#1c1614`                 | `#f3ece1`                 | Card hover state               |
| `text-ember` / `bg-ember`    | `#ff5a1f`                 | `#e84e14`                 | Primary accent, CTAs           |
| `text-ember-dim`             | `#cc4819`                 | `#c53e0d`                 | Dimmed ember, borders          |
| `text-gold` / `bg-gold`      | `#ffb020`                 | `#df9408`                 | Secondary accent, gradients    |
| `text-cream`                 | `#f4eee5`                 | `#141110`                 | Primary text                   |
| `text-cream-60`              | `rgba(244,238,229,0.6)`   | `rgba(20,17,16,0.72)`     | Body text, descriptions        |
| `text-cream-40`              | `rgba(244,238,229,0.4)`   | `rgba(20,17,16,0.52)`     | Muted labels, placeholders     |
| `text-cream-20`              | `rgba(244,238,229,0.2)`   | `rgba(20,17,16,0.2)`      | Subtle borders, dividers       |
| `text-cream-10`              | `rgba(244,238,229,0.1)`   | `rgba(20,17,16,0.1)`      | Hairline borders               |
| `text-cream-05`              | `rgba(244,238,229,0.05)`  | `rgba(20,17,16,0.05)`     | Ultra-subtle fills             |

### Typography

| Font       | Variable          | Tailwind Class  | Usage                        |
|------------|-------------------|-----------------|------------------------------|
| Outfit     | `--font-display`  | `font-display`  | Headings, labels, nav, CTAs  |
| Inter      | `--font-body`     | base default    | Body text, descriptions      |

Rule: Always use `font-display` for headings, stats, badges, button labels, or UI labels. Use Inter (default) for prose.

### Easing Curves

```
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1)    // fast-in, slow-out — most animations
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1) // overshoot spring — hover lifts, modals
```

Use `[0.16, 1, 0.3, 1]` as the `ease` array in Framer Motion transition objects.

---

## 2. Utility Classes (do NOT recreate inline)

These are defined in `globals.css` and must be used as-is:

| Class                | Effect                                                        |
|----------------------|---------------------------------------------------------------|
| `text-gradient`      | Ember to Gold diagonal gradient applied as text clip          |
| `gradient-ember`     | Ember to Gold background gradient (for filled CTA buttons)    |
| `shadow-ember`       | Resting ember glow on buttons                                 |
| `shadow-ember-hover` | Hover ember glow (stronger)                                   |
| `shadow-card-hover`  | Combined ember + dark shadow on card hover                    |
| `glow-ember`         | Orbital dot amber glow                                        |
| `glow-gold`          | Orbital dot gold glow                                         |
| `select-arrow`       | Custom dropdown arrow (cream/dark adaptive)                   |

---

## 3. Component Patterns

### 3.1 Section Structure

```tsx
export default function MySection() {
  return (
    <section id="my-section" className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Optional ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,90,31,0.08) 0%, transparent 65%)" }}
      />
      <div className="relative z-[1] max-w-6xl mx-auto">
        <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-3">
          Eyebrow Label
        </p>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-black leading-[1.1] tracking-tight text-cream mb-4">
          Heading with <span className="text-gradient">Gradient Words</span>
        </h2>
        <p className="text-base md:text-lg text-cream-60 max-w-[600px] leading-relaxed mb-12">
          Description copy here.
        </p>
        {/* Content */}
      </div>
    </section>
  );
}
```

### 3.2 Cards

```tsx
<div className="group relative bg-bg-card border border-cream-10 rounded-2xl p-6
               hover:bg-bg-card-hover hover:border-ember/20 hover:shadow-card-hover
               transition-all duration-300 cursor-pointer">
  {/* Card content */}
</div>
```

Use `group` for child hover effects. Never use `border-cream-20` at rest — use `border-cream-10`.

### 3.3 Primary CTA Button

```tsx
<Link
  href="/contact"
  className="inline-flex items-center justify-center gap-2
             px-7 py-3.5 rounded-full font-display font-semibold text-[0.95rem]
             gradient-ember text-bg shadow-ember
             hover:-translate-y-0.5 hover:shadow-ember-hover
             active:translate-y-0 transition-all duration-200"
>
  Get Started
</Link>
```

### 3.4 Ghost / Outline Button

```tsx
<Link
  href="/services"
  className="inline-flex items-center justify-center gap-2
             px-6 py-3.5 rounded-full font-display font-semibold text-[0.95rem]
             border border-ember/30 bg-ember/5 text-cream
             hover:border-ember hover:bg-ember/15 transition-all duration-200"
>
  Explore Services
</Link>
```

### 3.5 Badge / Eyebrow Pill

```tsx
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember/10 border border-ember/20 mb-6">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
  </span>
  <span className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-ember">
    Badge Label
  </span>
</div>
```

### 3.6 Glassmorphism Stats / Info Bar

```tsx
<div className="flex items-center justify-center gap-8 px-12 py-6 rounded-3xl
                bg-bg-card/60 backdrop-blur-xl border border-cream-10 shadow-2xl">
  <div className="flex flex-col items-center gap-1">
    <span className="font-display text-3xl font-extrabold text-gradient">50+</span>
    <span className="text-xs text-cream-40 uppercase tracking-widest font-medium">Solutions</span>
  </div>
  <div className="w-px h-8 bg-cream-10" />
  {/* More stats */}
</div>
```

---

## 4. Animation Conventions

### 4.1 fadeUp Variant (standard enter animation)

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// Usage — scroll-triggered (below fold)
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  custom={0}  // stagger index
>
```

### 4.2 Scroll vs. Immediate Animations

- **`whileInView`** + `viewport={{ once: true, margin: "-80px" }}` — all below-fold sections
- **`animate`** only — Hero section elements (always visible on load)

### 4.3 Hover Micro-animations

- Lift: `hover:-translate-y-0.5` or `hover:-translate-y-1` (max `-translate-y-2`)
- Scale: `hover:scale-[1.02]` on image/media containers
- Transitions: `transition-all duration-200` (buttons) or `duration-300` (cards)

### 4.4 CSS Keyframes

Defined in `globals.css` — do not redefine:
- `rotate-slow` — decorative orbital rings (`animation: rotate-slow 80s linear infinite`)
- `pulse-glow` — ambient glow orbs (`animation: pulse-glow 6s ease-in-out infinite`)

---

## 5. File Structure Rules

```
src/
├── app/
│   ├── globals.css          ← Design tokens only. No component styles here.
│   ├── layout.tsx           ← Font imports, metadata, ThemeToggle, Navbar, Footer
│   ├── page.tsx             ← Home page: assembles section components
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── work/page.tsx
│   └── contact/page.tsx
└── components/
    └── *.tsx                ← One component per file, PascalCase filename
```

- **One component per file** — no barrel index.ts files in `components/`.
- **Client components**: Add `"use client"` only if the component uses hooks, browser APIs, or event handlers.
- **Icons**: Use inline SVG with `currentColor` — no external icon libraries.
- **Images**: Use Next.js `<Image>` from `next/image` — always set `width`, `height`, and `alt`.

---

## 6. Theme (Dark / Light Mode)

Theme is toggled by adding/removing the `light` class on `<html>` (see `ThemeToggle.tsx`).

- **Never hardcode hex colors** in component files — always use CSS custom property tokens.
- Light mode overrides are defined under `.light` selector in `globals.css`.
- Always test new components in both dark and light themes.

---

## 7. Responsive Design

Breakpoint order: base (mobile) → `sm:` (640px) → `md:` (768px) → `lg:` (1024px)

Fluid typography with clamp:
```
Section H2:  text-[clamp(1.75rem,4.5vw,3.25rem)]
Page hero H1: text-[clamp(2rem,6.5vw,4.5rem)]
```

---

## 8. SEO Checklist for New Pages

```tsx
// src/app/new-page/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title | Agni Digital",
  description: "Compelling 155-character description for search engines.",
  openGraph: {
    title: "Page Title | Agni Digital",
    description: "Same or similar to meta description.",
    url: "https://agnidigital.in/new-page",
  },
};
```

- One `<h1>` per page
- Use `<section id="...">` for anchor navigation
- Add new page URL to `src/app/sitemap.ts`

---

## 9. Validation Checklist

After building any UI component, verify:

1. **Theme** — Toggle dark/light; no invisible elements or harsh color shifts.
2. **Responsive** — Test at 375px, 768px, 1280px; no overflow or clipped text.
3. **Animations** — Enter animations fire once on scroll; hover states are smooth.
4. **Font** — Headings use `font-display` (Outfit); body uses default (Inter).
5. **Tokens only** — No hardcoded hex colors in component files.
