import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accessibility Statement | Diocese of Evansville",
  description:
    "The Diocese of Evansville is committed to making our website accessible to all users in accordance with WCAG 2.1 AA standards.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        label="Accessibility"
        title="Accessibility Statement"
        subtitle="We are committed to ensuring that our digital presence is accessible to everyone, including people with disabilities."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Accessibility" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-warm-white">
          <div className="max-w-[800px] mx-auto">
            {/* Commitment */}
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Commitment</h2>
              <p className="text-sm text-text-medium leading-relaxed mb-4">
                The Catholic Diocese of Evansville is committed to providing a website that is accessible to the widest possible audience, regardless of ability or technology. We believe that every person is created in the image of God and deserves equal access to information and services. This commitment reflects the Catholic understanding of the dignity of every human person.
              </p>
              <p className="text-sm text-text-medium leading-relaxed">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level, published by the World Wide Web Consortium (W3C). These guidelines provide a framework for making web content more accessible to people with visual, auditory, motor, and cognitive disabilities.
              </p>
            </div>

            {/* Standards */}
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Accessibility Standards</h2>
              <p className="text-sm text-text-medium leading-relaxed mb-4">
                We aim to meet or exceed the following standards across our website:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StandardCard
                  title="Perceivable"
                  items={[
                    "Text alternatives for non-text content",
                    "Captions and alternatives for multimedia",
                    "Content that can be presented in different ways",
                    "Sufficient color contrast for readability",
                  ]}
                />
                <StandardCard
                  title="Operable"
                  items={[
                    "Full keyboard navigation support",
                    "Sufficient time to read and use content",
                    "No content that causes seizures or physical reactions",
                    "Clear navigation and wayfinding aids",
                  ]}
                />
                <StandardCard
                  title="Understandable"
                  items={[
                    "Readable and understandable text",
                    "Predictable page behavior and navigation",
                    "Input assistance and error prevention",
                    "Consistent identification of interface elements",
                  ]}
                />
                <StandardCard
                  title="Robust"
                  items={[
                    "Compatible with current and future assistive technologies",
                    "Valid, standards-compliant HTML markup",
                    "Proper use of ARIA roles and attributes",
                    "Support for screen readers and other tools",
                  ]}
                />
              </div>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Accessibility Features</h2>
              <p className="text-sm text-text-medium leading-relaxed mb-4">
                Our website includes the following accessibility features:
              </p>
              <ul className="space-y-2.5 text-sm text-text-medium">
                <FeatureItem text="Semantic HTML structure with proper heading hierarchy" />
                <FeatureItem text="Skip navigation links to bypass repetitive content" />
                <FeatureItem text="Descriptive alt text for all meaningful images" />
                <FeatureItem text="ARIA labels and landmarks for screen reader navigation" />
                <FeatureItem text="Keyboard-accessible navigation, forms, and interactive elements" />
                <FeatureItem text="Color contrast ratios that meet WCAG 2.1 AA requirements" />
                <FeatureItem text="Responsive design that adapts to various screen sizes and zoom levels" />
                <FeatureItem text="Clear, consistent page layouts and navigation patterns" />
                <FeatureItem text="Form labels, instructions, and error messages" />
                <FeatureItem text="Focus indicators visible on all interactive elements" />
              </ul>
            </div>

            {/* Ongoing Efforts */}
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Ongoing Efforts</h2>
              <p className="text-sm text-text-medium leading-relaxed mb-4">
                Accessibility is an ongoing effort, not a one-time task. We regularly review and test our website to identify and address accessibility barriers. Our efforts include:
              </p>
              <ul className="space-y-2.5 text-sm text-text-medium">
                <FeatureItem text="Regular automated and manual accessibility testing" />
                <FeatureItem text="Staff training on accessibility best practices" />
                <FeatureItem text="Incorporating accessibility into our design and development process" />
                <FeatureItem text="Reviewing third-party content and tools for accessibility compliance" />
                <FeatureItem text="Responding to user feedback and accessibility reports" />
              </ul>
            </div>

            {/* Known Limitations */}
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Known Limitations</h2>
              <p className="text-sm text-text-medium leading-relaxed mb-4">
                While we strive for full WCAG 2.1 AA compliance, some content may not yet fully meet all standards. Known limitations include:
              </p>
              <ul className="space-y-2.5 text-sm text-text-medium">
                <FeatureItem text="Some older PDF documents may not be fully accessible. We are working to remediate these documents and will provide accessible alternatives upon request." />
                <FeatureItem text="Third-party content, including embedded maps, videos, and donation forms, is governed by the accessibility practices of those providers." />
                <FeatureItem text="Some legacy content from previous website versions may contain accessibility gaps that are being addressed on an ongoing basis." />
              </ul>
            </div>

            {/* Feedback */}
            <div className="bg-cream rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Feedback & Contact</h2>
              <p className="text-sm text-text-medium leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter an accessibility barrier, need content in an alternative format, or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-white rounded-lg border border-border p-5 text-sm text-text-medium space-y-1.5">
                <p><strong className="text-navy">Catholic Diocese of Evansville</strong></p>
                <p>P.O. Box 4169, Evansville, IN 47724</p>
                <p>Phone: (812) 424-5536</p>
                <p>Email: communications@evdio.org</p>
              </div>
              <p className="text-sm text-text-medium leading-relaxed mt-4">
                We will make every reasonable effort to respond to your request within two business days and to provide the information or assistance you need.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function StandardCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-cream rounded-xl border border-border p-6">
      <h3 className="font-heading text-lg font-bold text-navy mb-3">{title}</h3>
      <ul className="space-y-1.5 text-xs text-text-medium">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}
