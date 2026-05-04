import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact the Catholic Diocese of Evansville at 4200 N. Kentucky Ave., Evansville, IN 47711. Phone: (812) 424-5536. Office hours: Monday-Friday, 8:00 a.m.-4:30 p.m.",
};

export default function ContactPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Contact <em>Us.</em></h1>
            <p className="deck">We are here to serve you. Reach the Catholic Center by phone, email, or in person.</p>
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
        <div className="page-content section-cream">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48 }}>
            {/* Contact Info */}
            <div>
              <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
                <span className="section-tag section-tag-left">Get in Touch</span>
                <h2 className="section-h2 section-h2-left">Catholic Center</h2>
              </div>
              <p style={{ marginBottom: 32 }}>
                The Catholic Center serves as the administrative hub of the Diocese of Evansville, supporting 45 parishes, 26 schools, and ministries across 12 counties in Southwestern Indiana.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(10,34,64,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "var(--navy)" }} aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Address</h3>
                    <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                      4200 N. Kentucky Ave.<br />
                      Evansville, IN 47711
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(10,34,64,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "var(--navy)" }} aria-hidden="true">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Phone</h3>
                    <a href="tel:8124245536" style={{ fontSize: 14, color: "var(--blue)", fontWeight: 600 }}>
                      (812) 424-5536
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(10,34,64,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "var(--navy)" }} aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Email</h3>
                    <a href="mailto:info@evdio.org" style={{ fontSize: 14, color: "var(--blue)", fontWeight: 600 }}>
                      info@evdio.org
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(10,34,64,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "var(--navy)" }} aria-hidden="true">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>Office Hours</h3>
                    <p style={{ fontSize: 14, color: "var(--muted)" }}>
                      Monday &ndash; Friday<br />
                      8:00 a.m. &ndash; 4:30 p.m. (ET)
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--navy)", marginBottom: 12 }}>Quick Links</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <Link href="/about/staff-directory" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--blue)", fontWeight: 600 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }} aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    Staff Directory
                  </Link>
                  <Link href="/about/clergy-directory" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--blue)", fontWeight: 600 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }} aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    Clergy Directory
                  </Link>
                  <Link href="/about/offices" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--blue)", fontWeight: 600 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }} aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    Offices &amp; Departments
                  </Link>
                  <Link href="/about/press-room" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--blue)", fontWeight: 600 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }} aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    Media Inquiries
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="info-block" style={{ borderRadius: 20, padding: 32 }}>
              <h3 style={{ fontSize: 24 }}>Send Us a Message</h3>
              <p style={{ marginBottom: 24 }}>
                Fill out the form below and we will respond within two business days.
              </p>

              <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="first-name" style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--navy)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--line)", background: "white", fontSize: 14, color: "var(--navy)" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--navy)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--line)", background: "white", fontSize: 14, color: "var(--navy)" }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--navy)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--line)", background: "white", fontSize: 14, color: "var(--navy)" }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--navy)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--line)", background: "white", fontSize: 14, color: "var(--navy)" }}
                  />
                </div>

                <div>
                  <label htmlFor="department" style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--navy)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--line)", background: "white", fontSize: 14, color: "var(--navy)" }}
                  >
                    <option value="">Select a department...</option>
                    <option value="general">General Inquiry</option>
                    <option value="bishop">Office of the Bishop</option>
                    <option value="schools">Catholic Schools</option>
                    <option value="charities">Catholic Charities</option>
                    <option value="communications">Communications / The Message</option>
                    <option value="worship">Office of Worship</option>
                    <option value="catechesis">Catechesis &amp; Evangelization</option>
                    <option value="finance">Finance Office</option>
                    <option value="hr">Human Resources</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--navy)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid var(--line)", background: "white", fontSize: 14, color: "var(--navy)", resize: "vertical" }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Map Placeholder */}
        <div className="page-content section-navy">
          <div style={{ borderRadius: 20, border: "1px solid rgba(238,218,179,0.15)", overflow: "hidden" }}>
            <div style={{ aspectRatio: "3/1", minHeight: 250, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(238,218,179,0.06)", position: "relative" }}>
              <div style={{ textAlign: "center" }}>
                <svg viewBox="0 0 24 24" style={{ width: 48, height: 48, fill: "rgba(238,218,179,0.3)", margin: "0 auto 12px" }} aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <p style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--cream)", marginBottom: 4 }}>Catholic Center</p>
                <p style={{ fontSize: 14, color: "rgba(238,218,179,0.7)" }}>4200 N. Kentucky Ave., Evansville, IN 47711</p>
                <a
                  href="https://maps.google.com/?q=4200+N+Kentucky+Ave+Evansville+IN+47711"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--bgold)", marginTop: 12 }}
                >
                  Open in Google Maps
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }} aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
