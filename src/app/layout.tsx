import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://agni.in"),
  title: "Agni Digital Experience | Websites, Branding & Automation in Vaniyambadi",
  description:
    "Agni Digital Experience is a premium digital agency based in Vaniyambadi, Tamil Nadu. We build modern, high-converting websites, brand identities, WhatsApp automation, and custom software systems.",
  keywords: [
    "Agni",
    "Agni Digital Experience",
    "Digital Agency Vaniyambadi",
    "Web Development Vaniyambadi",
    "Website Design Tamil Nadu",
    "Branding Agency Vaniyambadi",
    "WhatsApp Automation India",
    "E-commerce Development Tirupattur",
    "Custom Software Solutions",
  ],
  authors: [
    { name: "Arish Srinivasan", url: "https://www.arishsrinivasan.in/" },
    { name: "Agni Digital Experience", url: "https://agni.in" },
  ],
  creator: "Arish Srinivasan",
  openGraph: {
    title: "Agni Digital Experience — Websites, Branding & Automation",
    description:
      "Transform your business with cutting-edge digital experiences, high-converting websites, and automated growth systems.",
    url: "https://agni.in",
    siteName: "Agni Digital Experience",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agni Digital Experience",
    description:
      "Websites, branding, and automation crafted to ignite business growth.",
  },
  alternates: {
    canonical: "https://agni.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Agni Digital Experience",
  image: "https://agni.in/logo.png",
  url: "https://agni.in",
  telephone: "+91-9876543210",
  email: "hello@agni.in",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://instagram.com/agni.in",
    "https://linkedin.com/company/agni-digital",
  ],
  priceRange: "₹₹",
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Tamil Nadu, India & Global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable}`}>
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
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
