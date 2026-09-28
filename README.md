<div align="center">

# 🔥 AGNI Digital Experience
### High-Performance Websites, Brand Systems & WhatsApp Automation

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

**Agni Digital Experience** is a premium digital agency engineering high-converting web portals, automated WhatsApp CRM systems, bespoke brand identities, and cloud software for ambitious regional manufacturers, exporters, and local businesses in Tamil Nadu and worldwide.

[🌐 Live Website](https://agni.in) • [👨‍💻 Developer Portfolio](https://www.arishsrinivasan.in/) • [🐙 GitHub](https://github.com/Arish03) • [💬 WhatsApp Desk](https://wa.me/919876543210) • [✉️ Contact Team](mailto:hello@agni.in)

</div>

---

## 🌟 Key Highlights & Features

- **⚡ Lightning-Fast Core Web Vitals**: Built on Next.js 16 with server/client component splitting, achieving sub-second mobile page loads (<1.1s).
- **🎨 Ember & Gold Design System**: Tailored dark-mode first aesthetic with smooth glassmorphism, responsive micro-animations, and a one-click Light/Dark theme toggle.
- **📐 Bespoke Vector Wordmark**: Crossbar-free geometric "A" paired with custom typography and an ember-orange accent square (`#FF541F`), adapting seamlessly across light and dark backgrounds.
- **💬 Direct WhatsApp Conversion Engine**: Pre-filled structured messaging routing from every page, project scoper, and floating action button straight to the engineering lead.
- **💼 Interactive Case Study Drawers**: Detailed breakdown of real-world business bottlenecks, solutions, key deliverables, and ROI metrics (+220% export inquiries).
- **🧮 Interactive Project Scoper**: Dynamic multi-chip selector on `/contact` allowing prospective clients to spec their service, budget, and timeline in seconds.
- **🌍 Full Multi-Page Experience**: Dedicated routes for `/` (Home), `/about` (Story & Values), `/services` (Capabilities), `/work` (Case Studies), and `/contact` (Studio Details & FAQ).
- **🔎 Comprehensive Local SEO & Structured Data**: Built-in JSON-LD `ProfessionalService` schema, dynamic `sitemap.xml`, `robots.txt`, and PWA `manifest.webmanifest`.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3](https://nextjs.org/) | App Router, Server Components, Route Handlers |
| **Runtime / Library** | [React 19](https://react.dev/) | UI component rendering & state management |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Theme tokens, custom utilities, zero-runtime CSS |
| **Animations** | [Framer Motion 13](https://www.framer.com/motion/) | Scroll-triggered reveals, spring transitions, drawer modals |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type checking and reliable architecture |
| **Typography** | Google Fonts ([Outfit](https://fonts.google.com/specimen/Outfit) & [Inter](https://fonts.google.com/specimen/Inter)) | Display headers and legible body copy |

---

## 📂 Project Structure

```text
agni-site/
├── public/                     # Static assets & icons
├── src/
│   ├── app/                    # Next.js App Router (Pages & Metadata)
│   │   ├── about/              # About page (Story, Values, Animated Stats)
│   │   ├── contact/            # Contact page (Scope Builder & FAQ)
│   │   ├── services/           # Services page (7 Deliverables & Add-ons)
│   │   ├── work/               # Work page (Portfolio & Testimonials)
│   │   ├── apple-icon.svg      # iOS Safari Home Screen icon
│   │   ├── favicon.ico         # Legacy favicon
│   │   ├── globals.css         # Tailwind v4 theme variables & utilities
│   │   ├── icon.svg            # Custom geometric "A" vector favicon
│   │   ├── layout.tsx          # Root Layout (Navbar, Theme Script, Footer)
│   │   ├── manifest.ts         # Native Web App Manifest
│   │   ├── page.tsx            # Homepage
│   │   ├── robots.ts           # SEO Crawling rules
│   │   └── sitemap.ts          # XML Sitemap generator
│   └── components/             # Reusable UI components
│       ├── Addons.tsx          # Secondary digital upgrades & chips
│       ├── AgniLogo.tsx        # Vector wordmark with dark/light adaptation
│       ├── AnimatedStat.tsx    # Scroll-triggered counter animations
│       ├── Contact.tsx         # Interactive project scope builder
│       ├── FAQ.tsx             # Interactive accordion FAQs
│       ├── Footer.tsx          # Comprehensive navigation & studio footer
│       ├── Hero.tsx            # Canvas ember particle system & main CTA
│       ├── HomeContactCTA.tsx  # Homepage bottom conversion banner
│       ├── HomeServicesPreview # Homepage featured capability cards
│       ├── HomeWorkPreview.tsx # Homepage top 3 project highlights
│       ├── Navbar.tsx          # Responsive navbar with mobile drawer
│       ├── Portfolio.tsx       # Filterable portfolio & case study modal
│       ├── Process.tsx         # 4-step execution timeline
│       ├── Testimonials.tsx    # Filterable reviews & Google rating badge
│       ├── ThemeToggle.tsx     # Animated sun/moon dark-light switcher
│       └── WhatsAppButton.tsx  # Floating WhatsApp speed dial
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript strict configuration
```

---

## 🎨 Brand Design Tokens

The site utilizes a curated **Ember & Gold** color palette defined via CSS variables in `globals.css`:

| Token | Dark Mode (Default) | Light Mode | Description |
| :--- | :--- | :--- | :--- |
| `--ember` | `#FF5A1F` | `#E84E14` | Primary brand accent & flame highlights |
| `--gold` | `#FFB020` | `#DF9408` | Secondary warm glow & review stars |
| `--bg` | `#0B0807` | `#FAF7F2` | Page background |
| `--bg-card` | `#151110` | `#FFFFFF` | Surface container & card fill |
| `--cream` | `#F4EEE5` | `#141110` | Primary high-contrast text color |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18 or higher (v20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   git clone https://github.com/your-username/agni-site.git
   cd agni-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

### Building Locally

```bash
npm run build
npm start
```

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Framework preset will automatically be detected as **Next.js**.
4. Click **Deploy**.

Alternatively, deploy directly via the Vercel CLI:
```bash
npx vercel
```

---

## 👨‍💻 Developer Details & Architecture Guide

### Engineering Leadership & Developer Details
- **Lead Developer & Architect**: **Arish Srinivasan**
- **🌐 Portfolio**: [https://www.arishsrinivasan.in/](https://www.arishsrinivasan.in/)
- **🐙 GitHub**: [@Arish03](https://github.com/Arish03)
- **✉️ Direct Email**: [arishsrinivasan@outlook.com](mailto:arishsrinivasan@outlook.com)
- **🏢 Agency**: Agni Digital Experience
- **📍 Location**: Vaniyambadi, Tamil Nadu, India
- **📦 Repository**: `agni-site`
- **⚡ Architecture**: Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript

### ⚙️ Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Runs the local development server on `http://localhost:3000` with Fast Refresh |
| `build` | `npm run build` | Compiles optimized production bundle, runs type-checking, and pre-renders static routes |
| `start` | `npm run start` | Spawns production server serving the compiled `.next` build |
| `lint` | `npm run lint` | Runs ESLint 9 static analysis to catch syntax & code quality issues |

---

## 🔧 Developer Customization Recipes

### 1. Updating the WhatsApp Contact Number
The direct WhatsApp routing is configured across 4 key touchpoints. Search and replace `919876543210` with your verified business phone number (include country code without `+`):
- `src/components/Navbar.tsx` (Desktop & Mobile action buttons)
- `src/components/WhatsAppButton.tsx` (Floating speed dial)
- `src/components/Contact.tsx` (Project scope builder submit)
- `src/components/HomeContactCTA.tsx` (Homepage bottom CTA)

### 2. Adding a New Case Study
Open [`src/components/Portfolio.tsx`](file:///d:/AGD/agnix-site/src/components/Portfolio.tsx) and add a new object to the `PROJECTS` array:
```typescript
{
  id: "my-project-slug",
  category: "web", // "web" | "branding" | "automation" | "software"
  title: "Full Project Title",
  client: "Client Business Name",
  location: "City / Region",
  description: "Short 2-line summary displayed on the card.",
  metric: "+150%",
  metricLabel: "Key Commercial Result",
  tags: ["Next.js", "Tailwind", "WhatsApp CRM"],
  gradient: "from-[#ff5a1f]/20 to-[#ffb020]/10",
  challenge: "The bottleneck the client faced prior to hiring Agni.",
  solution: "The exact engineering & design solution implemented.",
  deliverables: ["Deliverable 1", "Deliverable 2", "Deliverable 3"],
  timeline: "2 Weeks",
}
```

### 3. Adding Client Testimonials
Open [`src/components/Testimonials.tsx`](file:///d:/AGD/agnix-site/src/components/Testimonials.tsx) and append to `TESTIMONIALS`:
```typescript
{
  quote: "Client review text detailing tangible results.",
  author: "Client Full Name",
  role: "Managing Director / Founder",
  company: "Company Name",
  location: "Vaniyambadi",
  rating: 5,
  category: "exports", // "exports" | "healthcare" | "dining" | "retail"
  tag: "Export Portal",
}
```

### 4. Customizing Theme Colors
All colors are centralized in [`src/app/globals.css`](file:///d:/AGD/agnix-site/src/app/globals.css) under `:root` and `.light`. Modify the CSS custom properties (`--ember`, `--gold`, `--bg`, `--cream`) to instantly reflect across all components and utility classes.

---

## 📞 Studio Contact

- **Studio**: Vaniyambadi, Tamil Nadu, 635751, India
- **WhatsApp**: [+91 98765 43210](https://wa.me/919876543210)
- **Email**: [hello@agni.in](mailto:hello@agni.in)
- **Website**: [https://agni.in](https://agni.in)

---

<div align="center">
  <small>© 2026 Agni Digital Experience. Engineered with 🔥 by <a href="https://www.arishsrinivasan.in/" target="_blank"><strong>Arish Srinivasan</strong></a>. All rights reserved.</small>
</div>
