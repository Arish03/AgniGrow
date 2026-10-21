import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read AgniGrow's privacy policy. Learn how we collect, use, and protect your personal information when you use our website and digital services.",
  alternates: {
    canonical: "https://agnigrow.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy | AgniGrow",
    description:
      "Learn how AgniGrow collects, uses, and protects your personal information.",
    url: "https://agnigrow.in/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8">
        <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-3">
          Legal
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight mb-4">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-sm text-cream-40 mb-10">
          Last updated: October 21, 2026
        </p>

        <div className="space-y-8 text-sm sm:text-base text-cream-60 leading-relaxed [&_h2]:font-display [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:font-bold [&_h2]:text-cream [&_h2]:mb-3 [&_h2]:mt-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-cream">
          <div>
            <h2>1. Introduction</h2>
            <p>
              AgniGrow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our website visitors, clients, and users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at{" "}
              <Link href="/" className="text-ember hover:underline">agnigrow.in</Link> or engage our services.
            </p>
          </div>

          <div>
            <h2>2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, business name, and any other details you voluntarily provide through our contact forms or WhatsApp.</li>
              <li><strong>Usage Data:</strong> Browser type, operating system, pages visited, time spent, referring URLs, and device information collected automatically through analytics tools.</li>
              <li><strong>Cookies:</strong> We use essential cookies for site functionality and optional analytics cookies (e.g., Vercel Web Analytics) to understand traffic patterns.</li>
            </ul>
          </div>

          <div>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and provide requested services.</li>
              <li>To communicate project updates, invoices, and support messages.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To send occasional marketing communications (only with your consent).</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </div>

          <div>
            <h2>4. Data Sharing & Disclosure</h2>
            <p>
              We do <strong>not</strong> sell, trade, or rent your personal data to third parties. We may share information only with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party platforms (hosting, analytics, payment gateways) that assist us in operating our services, bound by confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or government request.</li>
            </ul>
          </div>

          <div>
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures including SSL encryption, secure hosting infrastructure, and access controls. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2>6. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party services (WhatsApp, Google, social media platforms). These services have their own privacy policies, and we are not responsible for their data practices.
            </p>
          </div>

          <div>
            <h2>7. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>
          </div>

          <div>
            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this page periodically.
            </p>
          </div>

          <div>
            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:info@agnigrow.in" className="text-ember hover:underline">info@agnigrow.in</a></li>
              <li>WhatsApp: <a href="https://wa.me/917200146914" target="_blank" rel="noopener noreferrer" className="text-ember hover:underline">+91 72001 46914</a></li>
              <li>Address: Vaniyambadi, Tamil Nadu 635751, India</li>
            </ul>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-6 border-t border-cream-10">
          <Link href="/" className="text-sm text-ember font-display font-semibold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
