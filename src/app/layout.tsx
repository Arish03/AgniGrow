import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agnix Digital Experience — Websites, Branding & Automation | Vaniyambadi",
  description:
    "Agnix Digital Experience is a full-service digital agency in Vaniyambadi, Tamil Nadu. We build export-ready websites, brand identities, WhatsApp automation, e-commerce stores, digital invitations and custom software solutions for local and global businesses.",
  keywords: [
    "Agnix",
    "digital agency",
    "Vaniyambadi",
    "web development",
    "branding",
    "automation",
    "e-commerce",
    "digital invitations",
    "software solutions",
    "Tamil Nadu",
  ],
  openGraph: {
    title: "Agnix Digital Experience",
    description:
      "Full-service digital agency — websites, branding, automation & more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
