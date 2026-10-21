import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read AgniGrow's terms of service. Understand the terms and conditions governing our digital agency services, project deliverables, and client engagements.",
  alternates: {
    canonical: "https://agnigrow.in/terms",
  },
  openGraph: {
    title: "Terms of Service | AgniGrow",
    description:
      "Terms and conditions governing AgniGrow's digital agency services and client engagements.",
    url: "https://agnigrow.in/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8">
        <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-ember mb-3">
          Legal
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight mb-4">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-sm text-cream-40 mb-10">
          Last updated: October 21, 2026
        </p>

        <div className="space-y-8 text-sm sm:text-base text-cream-60 leading-relaxed [&_h2]:font-display [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:font-bold [&_h2]:text-cream [&_h2]:mb-3 [&_h2]:mt-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-cream">
          <div>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the AgniGrow website (<Link href="/" className="text-ember hover:underline">agnigrow.in</Link>) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2>2. Services</h2>
            <p>
              AgniGrow provides digital agency services including but not limited to: website design and development, brand identity design, WhatsApp CRM automation, custom software development, and cloud POS systems. The specific scope, deliverables, and timeline for each project will be outlined in a written project proposal or agreement.
            </p>
          </div>

          <div>
            <h2>3. Project Engagement & Payments</h2>
            <ul>
              <li><strong>Proposals:</strong> All projects begin with a written proposal outlining scope, timeline, deliverables, and investment. Work commences only upon mutual agreement.</li>
              <li><strong>Payment Schedule:</strong> Unless otherwise agreed, our standard milestone structure is: 40% kickoff deposit, 40% upon staging approval, and 20% upon final launch and handoff.</li>
              <li><strong>Currency:</strong> All prices are quoted in Indian Rupees (INR) unless otherwise specified.</li>
              <li><strong>Late Payments:</strong> Delayed payments may result in project timeline adjustments. We reserve the right to pause work on overdue accounts.</li>
            </ul>
          </div>

          <div>
            <h2>4. Intellectual Property & Code Ownership</h2>
            <ul>
              <li><strong>Client Ownership:</strong> Upon full payment, you receive 100% ownership of all custom code, design assets, and deliverables created specifically for your project.</li>
              <li><strong>Pre-existing IP:</strong> Any proprietary tools, frameworks, or libraries owned by AgniGrow prior to or independent of the project remain our intellectual property.</li>
              <li><strong>Portfolio Rights:</strong> We reserve the right to showcase completed work in our portfolio and marketing materials unless you request otherwise in writing.</li>
            </ul>
          </div>

          <div>
            <h2>5. Client Responsibilities</h2>
            <ul>
              <li>Provide all necessary content, branding assets, and feedback in a timely manner.</li>
              <li>Designate a single point of contact for project communication.</li>
              <li>Review and approve deliverables within the agreed timeline.</li>
              <li>Ensure that all content provided to us does not infringe third-party rights.</li>
            </ul>
          </div>

          <div>
            <h2>6. Revisions & Scope Changes</h2>
            <p>
              Each project includes a reasonable number of revision rounds as specified in the project proposal. Additional revisions or scope changes beyond the agreed deliverables may incur additional charges, which will be communicated and agreed upon before work proceeds.
            </p>
          </div>

          <div>
            <h2>7. Post-Launch Support & Warranty</h2>
            <p>
              All projects include a post-launch support period (30 days for Starter packages, 60 days for Growth packages). During this period, we will fix bugs and address technical issues at no additional cost. Feature additions or major changes after this period are billed separately.
            </p>
          </div>

          <div>
            <h2>8. Limitation of Liability</h2>
            <p>
              AgniGrow shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to loss of revenue, data, or business opportunities. Our total liability shall not exceed the amount paid by the client for the specific project in question.
            </p>
          </div>

          <div>
            <h2>9. Cancellation & Refunds</h2>
            <ul>
              <li>Either party may terminate a project with written notice.</li>
              <li>In case of cancellation, you will be billed for all work completed up to the date of termination.</li>
              <li>The kickoff deposit is non-refundable once design and development work has commenced.</li>
              <li>All completed deliverables up to the point of cancellation will be transferred to you upon settlement.</li>
            </ul>
          </div>

          <div>
            <h2>10. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary information, business strategies, technical specifications, or trade secrets shared during the engagement. This obligation survives the termination of the agreement.
            </p>
          </div>

          <div>
            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Tirupattur District, Tamil Nadu, India.
            </p>
          </div>

          <div>
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2>13. Contact</h2>
            <p>
              For questions regarding these Terms, please contact us:
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
