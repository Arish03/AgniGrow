import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Get in touch with AgniGrow in Vaniyambadi, Tamil Nadu. Book a discovery call, chat with our technical lead on WhatsApp, or request an official quote.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Contact Form & Studio Details */}
      <Contact />

      {/* FAQ Section to resolve queries before reaching out */}
      <FAQ />
    </div>
  );
}
