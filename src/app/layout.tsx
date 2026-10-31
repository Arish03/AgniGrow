import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Outfit, Inter, Noto_Sans_Tamil } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0807" },
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://agnigrow.in"),
  title: {
    default: "AgniGrow | Your Digital Growth Partner",
    template: "%s | AgniGrow",
  },
  description:
    "AgniGrow is Your Digital Growth Partner in Vaniyambadi, Tamil Nadu. We engineer high-converting Next.js websites, brand identities, AI automation, and custom software systems for regional and export businesses.",
  applicationName: "AgniGrow",
  category: "technology",
  classification: "Digital Agency, Web Development, Automation",
  keywords: [
    // Brand & Agency Identity
    "AgniGrow",
    "Agni Grow",
    "Agni Digital Agency",
    "Your Digital Growth Partner",
    // Regional & Local Search (Vaniyambadi, Ambur, Tirupattur, Vellore, Tamil Nadu)
    "Digital Agency Vaniyambadi",
    "Web Development Vaniyambadi",
    "Website Design Vaniyambadi",
    "Web Development Ambur",
    "Website Design Tirupattur",
    "Digital Agency Vellore",
    "Web Designers Ranipet",
    "Software Company Vaniyambadi",
    "IT Company Vaniyambadi",
    "Website Design Tamil Nadu",
    "Branding Agency Vaniyambadi",
    "Local SEO Services Tamil Nadu",
    "Google Business Profile Optimization Vaniyambadi",
    "Google Maps Listing Ranking Tamil Nadu",
    // Engineering & Web Development
    "Next.js Web Development India",
    "High-Speed Website Development",
    "Custom Web Applications",
    "E-commerce Website Development Tirupattur",
    "Responsive Mobile Web Design",
    // AI Automation & Intelligent Workflows
    "AI Automation Agency Tamil Nadu",
    "AI Automation India",
    "AI Agents for Small Business",
    "Automated Lead Qualification",
    "WhatsApp Automation India",
    "WhatsApp Business API Tamil Nadu",
    "WhatsApp CRM Chatbots",
    // Bespoke Software & POS Billing
    "Custom Software Solutions",
    "Custom ERP Development Tamil Nadu",
    "Billing and Invoicing Software Vaniyambadi",
    "Cloud POS Systems India",
    "Thermal Receipt Printing Software",
    // Regional Industries & Export Niches
    "Leather Export Website Vaniyambadi",
    "Leather Goods Catalog Website",
    "Shoe Manufacturer Web Design",
    "B2B Industrial Export Web Portals",
    "International Export Websites India",
  ],
  authors: [
    { name: "Arish Srinivasan", url: "https://www.arishsrinivasan.in/" },
    { name: "AgniGrow Team", url: "https://agnigrow.in" },
  ],
  creator: "Arish Srinivasan",
  publisher: "AgniGrow",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AgniGrow — Your Digital Growth Partner",
    description:
      "Your Digital Growth Partner. Transform your business with cutting-edge digital experiences, high-converting Next.js websites, and intelligent AI automation workflows.",
    url: "https://agnigrow.in",
    siteName: "AgniGrow",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "AgniGrow — Your Digital Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgniGrow — Your Digital Growth Partner",
    description:
      "Your Digital Growth Partner — High-speed websites, branding, and AI automation systems crafted to ignite business growth.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://agnigrow.in",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.svg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://agnigrow.in/#organization",
  name: "AgniGrow",
  alternateName: ["Agni Grow", "AgniGrow Digital Agency", "Agni Digital"],
  image: "https://agnigrow.in/opengraph-image",
  logo: "https://agnigrow.in/icon.svg",
  url: "https://agnigrow.in",
  description:
    "AgniGrow is a premier full-stack digital agency specializing in Next.js web development, intelligent AI automation, brand identity, and bespoke POS systems for regional businesses and export manufacturers in Tamil Nadu.",
  telephone: "+91-72001-46914",
  email: "info@agnigrow.in",
  priceRange: "₹₹",
  currenciesAccepted: "INR, USD, EUR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Road, Vaniyambadi",
    addressLocality: "Vaniyambadi",
    addressRegion: "Tamil Nadu",
    postalCode: "635751",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.6825,
    longitude: 78.6186,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Vaniyambadi" },
    { "@type": "City", name: "Ambur" },
    { "@type": "City", name: "Tirupattur" },
    { "@type": "City", name: "Vellore" },
    { "@type": "City", name: "Ranipet" },
    { "@type": "City", name: "Hosur" },
    { "@type": "City", name: "Krishnagiri" },
    { "@type": "City", name: "Chennai" },
    { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Next.js Web Engineering & High-Speed Performance",
    "AI Automation & Intelligent Agent Workflows",
    "WhatsApp Business Cloud API Integration",
    "Brand Identity & Luxury Export Packaging Design",
    "Custom Cloud ERP & Thermal POS Billing Software",
    "Local SEO & Google Business Profile Ranking",
    "Leather Goods & Industrial B2B Export Web Portals",
    "Mobile-First Responsive UI/UX Design",
  ],
  keywords:
    "Digital Agency Vaniyambadi, Web Development Vaniyambadi, Web Development Ambur, Website Design Tirupattur, AI Automation Tamil Nadu, WhatsApp Automation India, Custom Software Vaniyambadi, Local SEO Tamil Nadu, Leather Export Website",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AgniGrow Digital Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Next.js Web Development",
          description:
            "High-performance, Core Web Vitals optimized web applications and portals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation & Workflows",
          description:
            "Custom AI agents, automated customer triage, lead qualification, and multi-channel workflows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software & Thermal POS Systems",
          description:
            "Cloud billing, GST-compliant invoicing, and thermal receipt printing solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Identity Design",
          description:
            "Vector logos, luxury export packaging, and digital style guides.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile & Local SEO",
          description:
            "Local search ranking, verified Google Maps listings, review management, and regional SEO.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/agnigrow",
    "https://www.instagram.com/agnigrow",
    "https://twitter.com/agnigrow",
    "https://github.com/agnigrow",
  ],
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Tamil Nadu, India & International Exporters",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${outfit.variable} ${inter.variable} ${notoTamil.variable}`}
    >
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var theme = localStorage.getItem('agni-theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        {/* Vercel Web Analytics */}
        {process.env.NODE_ENV === "production" && (
          <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
