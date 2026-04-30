import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accessibility Statement | Diocese of Evansville",
  description:
    "The Diocese of Evansville is committed to making our website accessible to all users in accordance with WCAG 2.1 AA standards.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Accessibility</p>
            <h1 id="title"><em>Accessibility.</em></h1>
            <p className="deck">We are committed to ensuring that our digital presence is accessible to everyone, including people with disabilities.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Cathedral interior"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="page-content">
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {/* Commitment */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>Our Commitment</h2>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
                The Catholic Diocese of Evansville is committed to providing a website that is accessible to the widest possible audience, regardless of ability or technology. We believe that every person is created in the image of God and deserves equal access to information and services. This commitment reflects the Catholic understanding of the dignity of every human person.
              </p>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75 }}>
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level, published by the World Wide Web Consortium (W3C). These guidelines provide a framework for making web content more accessible to people with visual, auditory, motor, and cognitive disabilities.
              </p>
            </div>

            <hr className="section-divider" />

            {/* Standards */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>Accessibility Standards</h2>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
                We aim to meet or exceed the following standards across our website:
              </p>
              <div className="interior-grid interior-grid-2">
                {[
                  { title: "Perceivable", items: ["Text alternatives for non-text content", "Captions and alternatives for multimedia", "Content that can be presented in different ways", "Sufficient color contrast for readability"] },
                  { title: "Operable", items: ["Full keyboard navigation support", "Sufficient time to read and use content", "No content that causes seizures or physical reactions", "Clear navigation and wayfinding aids"] },
                  { title: "Understandable", items: ["Readable and understandable text", "Predictable page behavior and navigation", "Input assistance and error prevention", "Consistent identification of interface elements"] },
                  { title: "Robust", items: ["Compatible with current and future assistive technologies", "Valid, standards-compliant HTML markup", "Proper use of ARIA roles and attributes", "Support for screen readers and other tools"] },
                ].map((standard) => (
                  <div key={standard.title} className="info-block" style={{ marginBottom: 0 }}>
                    <h3>{standard.title}</h3>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6, marginTop: 12 }}>
                      {standard.items.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "var(--muted)", lineHeight: 1.65 }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--dgold)", marginTop: 6, flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <hr className="section-divider" />

            {/* Features */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>Accessibility Features</h2>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
                Our website includes the following accessibility features:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Semantic HTML structure with proper heading hierarchy",
                  "Skip navigation links to bypass repetitive content",
                  "Descriptive alt text for all meaningful images",
                  "ARIA labels and landmarks for screen reader navigation",
                  "Keyboard-accessible navigation, forms, and interactive elements",
                  "Color contrast ratios that meet WCAG 2.1 AA requirements",
                  "Responsive design that adapts to various screen sizes and zoom levels",
                  "Clear, consistent page layouts and navigation patterns",
                  "Form labels, instructions, and error messages",
                  "Focus indicators visible on all interactive elements",
                ].map((feature) => (
                  <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--dgold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="section-divider" />

            {/* Ongoing Efforts */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>Ongoing Efforts</h2>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
                Accessibility is an ongoing effort, not a one-time task. We regularly review and test our website to identify and address accessibility barriers. Our efforts include:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Regular automated and manual accessibility testing",
                  "Staff training on accessibility best practices",
                  "Incorporating accessibility into our design and development process",
                  "Reviewing third-party content and tools for accessibility compliance",
                  "Responding to user feedback and accessibility reports",
                ].map((effort) => (
                  <li key={effort} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--dgold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{effort}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="section-divider" />

            {/* Known Limitations */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>Known Limitations</h2>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
                While we strive for full WCAG 2.1 AA compliance, some content may not yet fully meet all standards. Known limitations include:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Some older PDF documents may not be fully accessible. We are working to remediate these documents and will provide accessible alternatives upon request.",
                  "Third-party content, including embedded maps, videos, and donation forms, is governed by the accessibility practices of those providers.",
                  "Some legacy content from previous website versions may contain accessibility gaps that are being addressed on an ongoing basis.",
                ].map((limitation) => (
                  <li key={limitation} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--dgold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="section-divider" />

            {/* Feedback */}
            <div className="info-block">
              <h3>Feedback &amp; Contact</h3>
              <p style={{ marginBottom: 16 }}>
                We welcome your feedback on the accessibility of our website. If you encounter an accessibility barrier, need content in an alternative format, or have suggestions for improvement, please contact us:
              </p>
              <div className="interior-card" style={{ cursor: "default", padding: 20 }}>
                <p style={{ marginBottom: 4 }}><strong style={{ color: "var(--navy)" }}>Catholic Diocese of Evansville</strong></p>
                <p style={{ marginBottom: 4, fontSize: 14, color: "var(--muted)" }}>P.O. Box 4169, Evansville, IN 47724</p>
                <p style={{ marginBottom: 4, fontSize: 14, color: "var(--muted)" }}>Phone: (812) 424-5536</p>
                <p style={{ fontSize: 14, color: "var(--muted)" }}>Email: communications@evdio.org</p>
              </div>
              <p style={{ marginTop: 16 }}>
                We will make every reasonable effort to respond to your request within two business days and to provide the information or assistance you need.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
