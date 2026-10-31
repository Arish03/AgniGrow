import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import Process from "@/components/Process";
import Addons from "@/components/Addons";
import Testimonials from "@/components/Testimonials";
import HomeContactCTA from "@/components/HomeContactCTA";

export const metadata: Metadata = {
  title: "AgniGrow | Your Digital Growth Partner",
  description:
    "Your Digital Growth Partner. AgniGrow builds lightning-fast Next.js websites, luxury brand identities, AI automation, and custom software systems tailored for businesses in Vaniyambadi, Ambur, and export markets.",
  alternates: {
    canonical: "https://agnigrow.in",
  },
  openGraph: {
    title: "AgniGrow | Your Digital Growth Partner",
    description:
      "Your Digital Growth Partner. Transform your business with cutting-edge digital experiences, high-converting Next.js websites, and AI automation workflows.",
    url: "https://agnigrow.in",
    type: "website",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://agnigrow.in/#website",
  url: "https://agnigrow.in",
  name: "AgniGrow",
  description:
    "High-converting Next.js websites, bespoke brand identity, intelligent AI automation, and custom software in Vaniyambadi, Tamil Nadu.",
  publisher: {
    "@id": "https://agnigrow.in/#organization",
  },
  inLanguage: "en-IN",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <HomeServicesPreview />
      <Process />
      <Addons />
      <Testimonials />
      <HomeContactCTA />
    </main>
  );
}
