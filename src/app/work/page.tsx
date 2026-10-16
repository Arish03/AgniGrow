import type { Metadata } from "next";
import Link from "next/link";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Case Studies & Selected Work | Proven Digital Solutions",
  description:
    "Explore verified case studies: international leather export portals, clinic WhatsApp CRM bots, QR cafe billing suites, and brand identities shipped by AgniGrow in Tamil Nadu.",
  alternates: {
    canonical: "https://agnigrow.in/work",
  },
  openGraph: {
    title: "Case Studies & Selected Work | AgniGrow Portfolio",
    description:
      "Explore verified case studies: international leather export portals, clinic WhatsApp CRM bots, QR cafe billing suites, and brand identities shipped by AgniGrow.",
    url: "https://agnigrow.in/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Selected Work | AgniGrow Portfolio",
    description:
      "High-converting websites, WhatsApp CRM automations, and custom software delivered for real businesses.",
  },
};

const workSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://agnigrow.in/work#breadcrumb",
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
          name: "Portfolio & Case Studies",
          item: "https://agnigrow.in/work",
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://agnigrow.in/work#webpage",
      url: "https://agnigrow.in/work",
      name: "AgniGrow Selected Case Studies",
      description:
        "Featured client case studies across export web portals, WhatsApp CRM automations, brand identities, and custom business software.",
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

export default function WorkPage() {
  return (
    <div className="pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />
      {/* Work Page Header */}
      <section className="relative overflow-hidden py-16 text-center">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,176,32,0.1) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative z-[1]">
          <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-3">
            Case Studies &amp; Portfolio
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.2rem)] font-black leading-tight mb-6">
            Engineered For <span className="text-gradient">Measurable Impact</span>
          </h1>
          <p className="text-base sm:text-lg text-cream-60 max-w-[660px] mx-auto leading-relaxed mb-8">
            Explore how we build digital experiences that solve real operational bottlenecks, supercharge export inquiries, and automate customer touchpoints.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover hover:-translate-y-0.5 transition-all"
            >
              Discuss Your Idea
            </Link>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom Conversion Banner */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="rounded-3xl bg-bg-card border border-cream-10 p-10 sm:p-16 text-center flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-cream mb-4">
              Have a Project You&apos;d Like to Showcase Next?
            </h2>
            <p className="text-sm sm:text-base text-cream-60 max-w-[540px] leading-relaxed mb-8">
              Let&apos;s collaborate to build something remarkable that sets your brand apart in your market.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full font-display font-bold text-sm gradient-ember text-bg shadow-ember hover:shadow-ember-hover transition-all"
            >
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
