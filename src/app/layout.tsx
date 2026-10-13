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
  metadataBase: new URL("https://agnigrow.in"),
  title: "AgniGrow | Websites, Branding & Automation in Vaniyambadi",
  description:
    "AgniGrow is a premium digital agency based in Vaniyambadi, Tamil Nadu. We build modern, high-converting websites, brand identities, WhatsApp automation, and custom software systems.",
  keywords: [
    "AgniGrow",
    "Agni Grow",
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
    { name: "AgniGrow", url: "https://agnigrow.in" },
  ],
  creator: "Arish Srinivasan",
  openGraph: {
    title: "AgniGrow — Websites, Branding & Automation",
    description:
      "Transform your business with cutting-edge digital experiences, high-converting websites, and automated growth systems.",
    url: "https://agnigrow.in",
    siteName: "AgniGrow",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgniGrow — Websites, Branding & Automation in Vaniyambadi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgniGrow",
    description:
      "Websites, branding, and automation crafted to ignite business growth.",
    images: ["/og-image.png"],
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
  name: "AgniGrow",
  image: "https://agnigrow.in/og-image.png",
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
