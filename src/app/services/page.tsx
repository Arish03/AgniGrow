import type { Metadata } from "next";
import Link from "next/link";
import Addons from "@/components/Addons";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Digital Services & Capabilities | AgniGrow",
  description:
    "Explore our complete range of digital services: high-converting web development, brand identity, WhatsApp CRM automation, e-commerce stores, and custom software systems in Vaniyambadi.",
};

const DETAILED_SERVICES = [
  {
    id: "web-development",
    icon: "🌐",
    title: "Website Development",
    tagline: "High-speed, multilingual, mobile-first websites engineered to turn visitors into paying clients.",
    description:
      "We design and build bespoke web experiences tailored to your brand voice. From export portals with international multi-currency catalogs to regional service business landing pages, every site is hand-crafted with clean code, lightning-fast Core Web Vitals, and conversion-focused architecture.",
    deliverables: [
      "Custom responsive design (Mobile, Tablet & Desktop)",
      "Next.js high-performance static & server rendering",
      "Multilingual options (Tamil, English, etc.)",
      "On-page local SEO & Schema markup",
      "Content Management System (CMS) training",
    ],
    idealFor: "Exporters, manufacturers, educational institutes, clinics & professional firms.",
  },
  {
    id: "branding",
    icon: "🎨",
    title: "Branding & Visual Identity",
    tagline: "Timeless logos, typography systems, and marketing collateral that command trust.",
    description:
      "Your brand is the gut feeling a customer has about your business. We build cohesive visual identity systems that tell your story across physical and digital touchpoints — ensuring you stand out against local and national competitors.",
    deliverables: [
      "Vector logo suite & brand mark guidelines",
      "Color palette & typography hierarchy",
      "Physical packaging, boxes & gold-foil tags",
      "Product catalog & menu design bundles",
      "Social media templates & stationery kits",
    ],
    idealFor: "New ventures, retail stores, cafes, and established brands undergoing a modern rebrand.",
  },
  {
    id: "automation",
    icon: "⚡",
    title: "WhatsApp Automation & CRM",
    tagline: "Automated customer flows, lead management, and instant notifications that save 20+ hours a week.",
    description:
      "In India and Tamil Nadu, WhatsApp is the #1 communication tool. We build intelligent WhatsApp Business API workflows that automatically answer customer inquiries, capture lead data into a unified dashboard, send appointment reminders, and deliver PDF quotation estimates in seconds.",
    deliverables: [
      "Official WhatsApp Business Cloud API setup",
      "Intelligent keyword & interactive button chatbots",
      "Automated appointment & consultation booking",
      "Customer review & Google Maps feedback collection",
      "Centralized lead tracking CRM dashboard",
    ],
    idealFor: "Clinics, diagnostic centers, retail showrooms, service agencies & event planners.",
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce & Digital Catalogs",
    tagline: "Frictionless online storefronts and digital product catalogs that make ordering effortless.",
    description:
      "Take your business beyond physical geographical limits. We engineer high-converting digital storefronts equipped with UPI/Card payment gateways, automated stock alerts, and instant WhatsApp order notifications.",
    deliverables: [
      "Modern e-commerce architecture with cart & checkout",
      "Razorpay, PhonePe & Stripe payment integration",
      "Customer account & order tracking portals",
      "Inventory alerts & low-stock warning triggers",
      "Direct WhatsApp order receipt generation",
    ],
    idealFor: "Leather goods retailers, apparel brands, artisanal products & specialty food stores.",
  },
  {
    id: "software",
    icon: "🖥️",
    title: "Custom Software & Cloud POS",
    tagline: "Tailored business management software for teams that have outgrown rigid off-the-shelf tools.",
    description:
      "Off-the-shelf software often forces you to change how your company works. We build custom web software, billing systems, inventory control portals, and multi-depot dashboards adapted to your unique operations.",
    deliverables: [
      "Custom point-of-sale (POS) and thermal billing",
      "Multi-location warehouse & inventory sync",
      "Automated GST invoice generation",
      "Role-based staff permissions & access control",
      "Live sales & profit analytics reporting",
    ],
    idealFor: "Wholesale distributors, multi-branch retailers, logistic depots & manufacturing units.",
  },
  {
    id: "invitations",
    icon: "💌",
    title: "Digital Invitations & Event Micro-Sites",
    tagline: "Interactive personalized micro-websites for weddings, celebrations, and grand ceremonies.",
    description:
      "Replace static PDF cards with an immersive digital experience. Share one link featuring venue Google Maps navigation, countdown timer, bride & groom story, live stream video player, and real-time WhatsApp RSVP tracking.",
    deliverables: [
      "Custom mobile-optimized event micro-website",
      "Interactive 1-tap Google Maps directions",
      "Automated WhatsApp RSVP confirmation",
      "High-resolution photo gallery & live stream embed",
      "Digital anniversary & memorial tribute archives",
    ],
    idealFor: "Weddings, banquets, family celebrations & corporate conferences.",
  },
  {
    id: "marketing",
    icon: "📈",
    title: "Marketing, Local SEO & Growth",
    tagline: "Getting discovered, building local dominance, and maintaining high credibility online.",
    description:
      "Building a stunning digital platform is only step one. We optimize your Google Business profile, execute hyper-targeted Meta/Google advertising campaigns, and secure high local search rankings to drive qualified inquiries every day.",
    deliverables: [
      "Google Business Profile optimization & review funnel",
      "Hyper-local Meta (Instagram/Facebook) ad campaigns",
      "Targeted Google Search ads for high-intent keywords",
      "Custom analytics & weekly lead reporting",
      "Corporate business email setup (Google Workspace/Zoho)",
    ],
    idealFor: "Local service providers, restaurants, specialty clinics & commercial businesses.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 text-center">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,90,31,0.12) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-[1]">
          <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-3">
            Our Capabilities
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.2rem)] font-black leading-tight mb-6">
            End-to-End <span className="text-gradient">Digital Solutions</span>
          </h1>
          <p className="text-base sm:text-lg text-cream-60 max-w-[680px] mx-auto leading-relaxed mb-10">
            From your primary brand identity and high-performance website to custom ERP software and WhatsApp automation — we engineer systems that drive measurable commercial growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 transition-all"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-sm border border-cream-20 text-cream hover:border-ember hover:text-ember transition-colors"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col gap-6 sm:gap-10">
            {DETAILED_SERVICES.map((s, idx) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-bg-card border border-cream-10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 hover:border-ember/30 transition-all duration-300 relative overflow-hidden group shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3.5 sm:gap-4 mb-4">
                      <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-ember/10 border border-ember/20 flex items-center justify-center text-2xl sm:text-3xl shrink-0">
                        {s.icon}
                      </span>
                      <div>
                        <span className="text-[0.7rem] sm:text-xs font-mono uppercase tracking-widest text-ember font-semibold">
                          0{idx + 1} // Capability
                        </span>
                        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-cream">
                          {s.title}
                        </h2>
                      </div>
                    </div>

                    <p className="font-display font-semibold text-sm sm:text-base md:text-lg text-gradient mb-3 sm:mb-4">
                      {s.tagline}
                    </p>

                    <p className="text-xs sm:text-sm md:text-base text-cream-60 leading-relaxed mb-5 sm:mb-6">
                      {s.description}
                    </p>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-cream-05 inline-block">
                      <span className="text-[0.7rem] sm:text-xs uppercase tracking-wider text-cream-40 font-semibold block mb-1">
                        Best Suited For:
                      </span>
                      <span className="text-xs sm:text-sm text-cream font-medium">
                        {s.idealFor}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Deliverables */}
                  <div className="lg:col-span-5 bg-white/[0.02] border border-cream-10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                    <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-cream mb-3 sm:mb-4 flex items-center gap-2">
                      <span className="text-ember">⚡</span> Key Deliverables
                    </h3>
                    <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                      {s.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-60">
                          <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?service=${encodeURIComponent(s.title)}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider border border-ember/30 text-cream bg-ember/10 hover:bg-ember hover:text-bg transition-all"
                    >
                      Request Proposal For This →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Addons Section */}
      <Addons />

      {/* Bottom Conversion Banner */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#ff5a1f]/20 via-[#1c1614] to-[#ffb020]/20 border border-ember/30 p-10 sm:p-16 text-center flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-cream mb-4">
              Need a Custom Solution for Your Business?
            </h2>
            <p className="text-sm sm:text-base text-cream-60 max-w-[560px] leading-relaxed mb-8">
              We specialize in tailoring digital architectures to your precise operational bottlenecks. Contact us today for a free discovery session.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full font-display font-bold text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover transition-all"
              >
                Start a Conversation
              </Link>
              <a
                href="https://wa.me/917200146914"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-display font-bold text-sm border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all flex items-center gap-2"
              >
                <span>💬</span> WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
