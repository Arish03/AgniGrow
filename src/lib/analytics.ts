/**
 * AgniGrow Lead & Click Analytics Helper
 * Tracks high-value user conversions (WhatsApp CTA clicks, quote submissions, case study inquiries)
 * Supports both Vercel Analytics custom events and Google Analytics 4 (GA4).
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    va?: (action: string, data: Record<string, any>) => void;
  }
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, any> = {}
) {
  if (typeof window === "undefined") return;

  // 1. Google Analytics (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }

  // 2. Vercel Analytics Custom Events
  if (typeof window.va === "function") {
    window.va("event", { name: eventName, data: parameters });
  }

  // Debug log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}:`, parameters);
  }
}

/** Track when a visitor clicks any WhatsApp contact trigger */
export function trackWhatsAppClick(location: string, details?: string) {
  trackEvent("whatsapp_click", {
    click_location: location,
    details: details || "General WhatsApp Inquiry",
    value: 1,
  });
}

/** Track when a visitor submits the contact/quote scoping form */
export function trackLeadSubmission(data: {
  service: string;
  budget: string;
  timeline: string;
}) {
  trackEvent("generate_lead", {
    service: data.service,
    budget: data.budget,
    timeline: data.timeline,
    currency: "INR",
  });
}
