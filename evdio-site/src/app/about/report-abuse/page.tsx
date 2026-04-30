import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Report Abuse",
  description:
    "How to report suspected abuse involving Catholic Church personnel in the Diocese of Evansville. We take every report seriously and are committed to transparency and justice.",
};

export default function ReportAbusePage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Safety</p>
            <h1 id="title">Report <em>Abuse.</em></h1>
            <p className="deck">We take every report seriously. If you or someone you know has been harmed, please reach out.</p>
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
        {/* Emergency Banner */}
        <div style={{ background: "var(--brick)", padding: "24px 32px", textAlign: "center" }}>
          <p style={{ color: "var(--cream)", fontWeight: 600, fontSize: 16, margin: 0 }}>
            If a child is in immediate danger, call <a href="tel:911" style={{ color: "var(--dgold)", fontWeight: 700, textDecoration: "underline" }}>911</a> immediately.
          </p>
        </div>

        {/* How to Report */}
        <section className="page-content">
          <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
            <span className="section-tag" style={{ marginInline: 0 }}>How to Report</span>
            <h2 className="section-h2" style={{ textAlign: "left" }}>Reporting Suspected Abuse</h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, marginBottom: 32, maxWidth: 900 }}>
            The Diocese of Evansville encourages anyone who suspects abuse by Church personnel &mdash; whether current or past &mdash; to report it. You do not need to be certain that abuse has occurred; if you have concerns, please report them. All reports are taken seriously and investigated thoroughly.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
            {/* Step 1 */}
            <div className="info-block" style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(163,31,52,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "var(--brick)" }}>1</span>
              </div>
              <div>
                <h3 style={{ marginBottom: 8 }}>Contact Civil Authorities</h3>
                <p style={{ marginBottom: 16 }}>
                  Indiana law requires that any person who has reason to believe a child is a victim of abuse or neglect must report it to authorities. We strongly encourage reporting to civil authorities first.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>Local Law Enforcement:</span>
                    <span style={{ color: "var(--navy)", fontWeight: 600 }}>Call your local police department or sheriff&rsquo;s office</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>Indiana Child Abuse Hotline:</span>
                    <a href="tel:18008005556" style={{ color: "var(--blue)", fontWeight: 600 }}>1-800-800-5556</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>Indiana Dept. of Child Services:</span>
                    <a href="https://www.in.gov/dcs/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)", fontWeight: 600 }}>www.in.gov/dcs</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="info-block" style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(163,31,52,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "var(--brick)" }}>2</span>
              </div>
              <div>
                <h3 style={{ marginBottom: 8 }}>Contact the Diocese</h3>
                <p style={{ marginBottom: 16 }}>
                  After reporting to civil authorities, please contact the Diocese of Evansville so we can take immediate action within the Church. Reports can be made to the Victim Assistance Coordinator.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>Victim Assistance Coordinator:</span>
                    <a href="tel:8124245536" style={{ color: "var(--blue)", fontWeight: 600 }}>(812) 424-5536</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>Email:</span>
                    <a href="mailto:reportabuse@evdio.org" style={{ color: "var(--blue)", fontWeight: 600 }}>reportabuse@evdio.org</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>Mail:</span>
                    <span style={{ color: "var(--navy)", fontWeight: 600 }}>Diocese of Evansville, Attn: Victim Assistance Coordinator, 4200 N. Kentucky Ave., Evansville, IN 47711</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="info-block" style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(163,31,52,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "var(--brick)" }}>3</span>
              </div>
              <div>
                <h3 style={{ marginBottom: 8 }}>National Reporting Resources</h3>
                <p style={{ marginBottom: 16 }}>
                  Additional resources are available at the national level for reporting abuse and accessing support services.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>Childhelp Hotline:</span>
                    <a href="tel:18004224453" style={{ color: "var(--blue)", fontWeight: 600 }}>1-800-422-4453</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>USCCB Reporting:</span>
                    <a href="https://www.reportbishopabuse.org" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)", fontWeight: 600 }}>www.reportbishopabuse.org</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "var(--muted)", flexShrink: 0, minWidth: 140 }}>Bishop Abuse Reporting:</span>
                    <a href="tel:18002761562" style={{ color: "var(--blue)", fontWeight: 600 }}>1-800-276-1562</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Our Commitment */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
            <span className="section-tag" style={{ marginInline: 0 }}>Our Promise</span>
            <h2 className="section-h2" style={{ textAlign: "left" }}>What Happens After a Report</h2>
          </div>
          <div style={{ maxWidth: 900 }}>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
              When the diocese receives a report of abuse, we take the following steps:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { bold: "Immediate notification", text: "to civil authorities if they have not already been contacted." },
                { bold: "Removal of the accused", text: "from ministry pending investigation, in accordance with the USCCB Charter." },
                { bold: "Full cooperation", text: "with law enforcement and the investigation process." },
                { bold: "Outreach to the victim/survivor", text: "through the Victim Assistance Coordinator, offering counseling, spiritual support, and other resources." },
                { bold: "Review by the Diocesan Review Board,", text: "an independent body of lay professionals and clergy who advise the Bishop on all allegations." },
              ].map((item) => (
                <li key={item.bold} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 16, color: "var(--muted)", lineHeight: 1.75 }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--brick)" style={{ flexShrink: 0, marginTop: 4 }} aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span><strong style={{ color: "var(--navy)" }}>{item.bold}</strong> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Support CTA */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="cta-block">
            <h3>You Are Not Alone</h3>
            <p>
              If you have experienced abuse, we believe you. Support and healing are available. Please do not hesitate to reach out.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
              <a href="tel:8124245536" className="btn-gold">
                Call (812) 424-5536
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <Link href="/about/safe-environment" className="btn-ghost-white">
                Safe Environment Programs
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
