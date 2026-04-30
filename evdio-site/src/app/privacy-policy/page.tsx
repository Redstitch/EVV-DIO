import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Diocese of Evansville",
  description:
    "Privacy policy for the Diocese of Evansville website. How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Legal</p>
            <h1 id="title">Privacy <em>Policy.</em></h1>
            <p className="deck">How we collect, use, and protect your personal information.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/branding/coat-of-arms.jpg"
              alt="Diocese of Evansville coat of arms"
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
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 32 }}>
              Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: January 1, 2025
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              <PolicySection title="1. Introduction">
                <p>
                  The Catholic Diocese of Evansville (&ldquo;the Diocese,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at evdio.org (the &ldquo;Site&rdquo;) or interact with our digital services.
                </p>
                <p>
                  By accessing or using our Site, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access the Site.
                </p>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="2. Information We Collect">
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 400, color: "var(--navy)", marginBottom: 8 }}>Information You Provide</h4>
                <p>We may collect personal information that you voluntarily provide when you:</p>
                <ul>
                  <li>Make a donation or financial contribution online</li>
                  <li>Register for an event, retreat, or program</li>
                  <li>Subscribe to our newsletter or The Message</li>
                  <li>Submit a contact form or prayer request</li>
                  <li>Apply for a position, volunteer role, or school enrollment</li>
                  <li>Create an account or profile on our Site</li>
                </ul>
                <p>
                  This information may include your name, email address, mailing address, phone number, payment information, parish affiliation, and any other information you choose to provide.
                </p>

                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 400, color: "var(--navy)", marginBottom: 8, marginTop: 24 }}>Information Collected Automatically</h4>
                <p>When you visit our Site, we may automatically collect certain information, including:</p>
                <ul>
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited, time spent, and referring URLs</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="3. How We Use Your Information">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Process donations and issue tax receipts</li>
                  <li>Communicate with you about diocesan news, events, and programs</li>
                  <li>Administer events, programs, and registrations</li>
                  <li>Respond to your inquiries and prayer requests</li>
                  <li>Improve our website and digital services</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Send newsletters, The Message, and other communications you have opted into</li>
                </ul>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="4. Online Donations & Payment Security">
                <p>
                  Online donations are processed through Our Sunday Visitor (OSV), a trusted third-party payment processor used by Catholic organizations nationwide. The Diocese does not store your credit card or bank account information on our servers. All transactions are encrypted using industry-standard SSL (Secure Socket Layer) technology. OSV&rsquo;s privacy and security practices are governed by their own policies.
                </p>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="5. Cookies & Tracking Technologies">
                <p>
                  Our Site uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain features on our Site.
                </p>
                <p>
                  We may use Google Analytics or similar services to collect and analyze usage data. These services may use cookies to track user interactions. The information collected is used to improve our Site and is not used to personally identify individual visitors.
                </p>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="6. Information Sharing & Disclosure">
                <p>We do not sell, rent, or trade your personal information to third parties. We may share your information with:</p>
                <ul>
                  <li><strong style={{ color: "var(--navy)" }}>Service Providers:</strong> Trusted third parties who assist with payment processing, email delivery, website hosting, and analytics, under strict confidentiality agreements.</li>
                  <li><strong style={{ color: "var(--navy)" }}>Parishes and Schools:</strong> If you make a gift designated to a specific parish or school, we may share your contact information with that entity for acknowledgment purposes.</li>
                  <li><strong style={{ color: "var(--navy)" }}>Legal Requirements:</strong> We may disclose your information if required by law, regulation, court order, or governmental request.</li>
                </ul>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="7. Data Security">
                <p>
                  We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="8. Your Rights & Choices">
                <p>You have the right to:</p>
                <ul>
                  <li>Access, correct, or delete your personal information by contacting us</li>
                  <li>Opt out of email communications by clicking the &ldquo;Unsubscribe&rdquo; link in any email</li>
                  <li>Disable cookies through your browser settings</li>
                  <li>Request information about the personal data we hold about you</li>
                </ul>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="9. Children's Privacy">
                <p>
                  Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.
                </p>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="10. Third-Party Links">
                <p>
                  Our Site may contain links to third-party websites, including parish websites, Catholic organizations, and service providers. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="11. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
                </p>
              </PolicySection>

              <hr className="section-divider" />

              <PolicySection title="12. Contact Us">
                <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
                <div className="info-block" style={{ marginTop: 16 }}>
                  <p style={{ marginBottom: 4 }}><strong style={{ color: "var(--navy)" }}>Catholic Diocese of Evansville</strong></p>
                  <p style={{ marginBottom: 4 }}>P.O. Box 4169</p>
                  <p style={{ marginBottom: 4 }}>Evansville, IN 47724</p>
                  <p style={{ marginBottom: 4 }}>Phone: (812) 424-5536</p>
                  <p>Email: communications@evdio.org</p>
                </div>
              </PolicySection>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 400, color: "var(--navy)", marginBottom: 16 }}>{title}</h3>
      <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75 }} className="[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:leading-relaxed [&_p]:mb-3">
        {children}
      </div>
    </div>
  );
}
