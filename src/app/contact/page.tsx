import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries | WhatsApp Consultation",
  description:
    "Get in touch with AgniGrow in Vaniyambadi, Tamil Nadu. Book a discovery call, chat directly on WhatsApp (+91 72001 46914), or request a fast project proposal.",
  alternates: {
    canonical: "https://agnigrow.in/contact",
  },
  openGraph: {
    title: "Contact AgniGrow | Start Your Digital Project",
    description:
      "Get in touch with AgniGrow in Vaniyambadi, Tamil Nadu. Direct communication with engineering leads, no bureaucracy.",
    url: "https://agnigrow.in/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AgniGrow | Start Your Digital Project",
    description:
      "Book a discovery call or chat directly on WhatsApp (+91 72001 46914) with our engineering leads.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://agnigrow.in/contact#breadcrumb",
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
          name: "Contact & Inquiries",
          item: "https://agnigrow.in/contact",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://agnigrow.in/contact#webpage",
      url: "https://agnigrow.in/contact",
      name: "Contact AgniGrow",
      description:
        "Get in touch with AgniGrow in Vaniyambadi, Tamil Nadu. Direct communication, zero bureaucracy.",
      isPartOf: {
        "@id": "https://agnigrow.in/#website",
      },
      mainEntity: {
        "@type": "ProfessionalService",
        "@id": "https://agnigrow.in/#organization",
        name: "AgniGrow",
        telephone: "+91-7200146914",
        email: "info@agnigrow.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vaniyambadi Main Road",
          addressLocality: "Vaniyambadi",
          addressRegion: "Tamil Nadu",
          postalCode: "635751",
          addressCountry: "IN",
        },
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* Contact Form & Studio Details */}
      <Contact />

      {/* FAQ Section to resolve queries before reaching out */}
      <FAQ />
    </div>
  );
}
