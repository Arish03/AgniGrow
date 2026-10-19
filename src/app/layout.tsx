import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Outfit, Inter } from "next/font/google";
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
    "AgniGrow is Your Digital Growth Partner in Vaniyambadi, Tamil Nadu. We engineer high-converting Next.js websites, brand identities, WhatsApp CRM automation, and custom software systems for regional and export businesses.",
  applicationName: "AgniGrow",
  category: "technology",
  classification: "Digital Agency, Web Development, Automation",
  keywords: [
    "AgniGrow",
    "Agni Grow",
    "Your Digital Growth Partner",
    "Digital Agency Vaniyambadi",
    "Web Development Vaniyambadi",
    "Website Design Tamil Nadu",
    "Branding Agency Vaniyambadi",
    "WhatsApp Automation India",
    "WhatsApp Business API Tamil Nadu",
    "Leather Export Website Vaniyambadi",
    "E-commerce Development Tirupattur",
    "Custom Software Solutions",
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
      "Your Digital Growth Partner. Transform your business with cutting-edge digital experiences, high-converting Next.js websites, and automated WhatsApp growth systems.",
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
      "Your Digital Growth Partner — High-speed websites, branding, and WhatsApp CRM systems crafted to ignite business growth.",
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
  alternateName: ["Agni Grow", "Agni Digital"],
  image: "https://agnigrow.in/opengraph-image",
  logo: "https://agnigrow.in/icon.svg",
  url: "https://agnigrow.in",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.6825,
    longitude: 78.6186,
  },
  areaServed: [
    { "@type": "City", name: "Vaniyambadi" },
    { "@type": "City", name: "Ambur" },
    { "@type": "City", name: "Tirupattur" },
    { "@type": "City", name: "Vellore" },
    { "@type": "City", name: "Ranipet" },
    { "@type": "City", name: "Chennai" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AgniGrow Digital Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "High-Speed Next.js Website Development",
          description: "Mobile-first, multilingual, export-ready web portals with sub-second loading speed.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WhatsApp CRM & Business Automation",
          description: "Official WhatsApp Cloud API chatbots, lead funnels, and automated appointment workflows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Identity & Design Systems",
          description: "Modern vector logos, luxury product packaging, typography kits, and corporate guidelines.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Cloud POS & ERP Software",
          description: "Thermal billing systems, warehouse inventory control, and multi-depot sales dashboards.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce Stores & B2B Catalogs",
          description: "Frictionless storefronts with UPI/Razorpay payments and direct WhatsApp order notifications.",
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://instagram.com/agnigrow.in",
    "https://linkedin.com/company/agnigrow",
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR, USD, EUR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
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
      className={`${outfit.variable} ${inter.variable}`}
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
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
