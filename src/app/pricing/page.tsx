import type { Metadata } from "next";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Simple & Transparent Pricing | AgniGrow",
  description:
    "Explore simple, transparent pricing for high-speed Next.js websites, WhatsApp CRM automation, and custom software. One flat investment with zero recurring platform rent.",
  alternates: {
    canonical: "https://agnigrow.in/pricing",
  },
  openGraph: {
    title: "Simple & Transparent Pricing | AgniGrow",
    description:
      "Clear, milestone-based investment for your business. High-speed websites, WhatsApp automation, and custom software.",
    url: "https://agnigrow.in/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple & Transparent Pricing | AgniGrow",
    description:
      "Clear milestone pricing for high-speed websites, WhatsApp CRM automation, and custom software.",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://agnigrow.in/pricing#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agnigrow.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pricing",
          item: "https://agnigrow.in/pricing",
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://agnigrow.in/pricing#webpage",
      url: "https://agnigrow.in/pricing",
      name: "AgniGrow Pricing & Packages",
      description:
        "Transparent investment plans for high-speed Next.js websites, WhatsApp CRM automation, and custom business software.",
      isPartOf: {
        "@id": "https://agnigrow.in/#website",
      },
      about: {
        "@id": "https://agnigrow.in/#organization",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden py-10 sm:py-16 text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 relative z-[1]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ember/10 border border-ember/20 mb-4 sm:mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
            </span>
            <span className="font-display text-[0.7rem] sm:text-xs font-semibold tracking-[0.16em] uppercase text-ember">
              Simple &amp; Transparent Pricing
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.1rem,5vw,3.8rem)] font-black leading-[1.12] tracking-tight mb-4 sm:mb-5 max-w-4xl mx-auto">
            Clear Investment. <br />
            <span className="text-gradient">Real Business Results.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-cream-60 max-w-[620px] mx-auto leading-relaxed px-2">
            No hidden hourly rates, no monthly code rent, and no unexpected surprises. Everything you need to scale your business with modern web and automation.
          </p>
        </div>
      </section>

      {/* Main Interactive Pricing Section */}
      <PricingSection />
    </div>
  );
}
