import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Official Statements & Decrees",
  description:
    "Read official statements, decrees, and pastoral letters from Bishop Siegel and the leadership of the Catholic Diocese of Evansville.",
};

const statements = [
  {
    date: "March 15, 2026",
    type: "Pastoral Letter",
    title: "A Call to Encounter: Pastoral Priorities for 2025\u20132030",
    excerpt: "Bishop Siegel outlines his pastoral vision of Encounter, Deepen, and Engage, calling each parish and ministry to embrace a renewed commitment to evangelization and service.",
    featured: true,
  },
  {
    date: "February 28, 2026",
    type: "Statement",
    title: "Lenten Message from Bishop Siegel",
    excerpt: "A reflection on the Lenten season, inviting the faithful to prayer, fasting, and almsgiving as a path to deeper conversion and renewed encounter with Christ.",
    featured: false,
  },
  {
    date: "January 15, 2026",
    type: "Decree",
    title: "Decree on Parish Pastoral Council Norms",
    excerpt: "Updated norms for parish pastoral councils across the diocese, strengthening lay participation in parish governance and pastoral planning.",
    featured: false,
  },
  {
    date: "December 20, 2025",
    type: "Pastoral Letter",
    title: "Christmas Message: The Light of Bethlehem in Our Midst",
    excerpt: "Bishop Siegel\u2019s Christmas message reflecting on the Incarnation and the call to bring the light of Christ to every corner of Southwestern Indiana.",
    featured: false,
  },
  {
    date: "November 10, 2025",
    type: "Statement",
    title: "Statement on Catholic Charities Expansion",
    excerpt: "Announcing the expansion of Catholic Charities services in Vanderburgh County, with new programs to serve an additional 400 families annually.",
    featured: false,
  },
  {
    date: "October 1, 2025",
    type: "Statement",
    title: "Respect Life Month: Upholding the Dignity of Every Person",
    excerpt: "A statement affirming the Church\u2019s commitment to the sanctity of human life from conception to natural death, with a call to action for parish communities.",
    featured: false,
  },
  {
    date: "August 15, 2025",
    type: "Decree",
    title: "Decree Establishing the Office of Synodal Life",
    excerpt: "In response to the universal Church\u2019s call to synodality, a new office is established to facilitate listening, discernment, and collaboration across the diocese.",
    featured: false,
  },
  {
    date: "June 1, 2025",
    type: "Pastoral Letter",
    title: "Becoming One: A Letter on Parish Community",
    excerpt: "A pastoral letter encouraging parishes to deepen their sense of communion, welcome newcomers, and build bridges across generations and cultures.",
    featured: false,
  },
];

const badgeColors: Record<string, { bg: string; color: string }> = {
  "Pastoral Letter": { bg: "rgba(0,78,115,0.08)", color: "var(--blue)" },
  Statement: { bg: "rgba(196,164,105,0.15)", color: "var(--navy)" },
  Decree: { bg: "rgba(163,31,52,0.08)", color: "var(--brick)" },
};

export default function StatementsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Official <em>Statements.</em></h1>
            <p className="deck">Pastoral letters, official statements, and decrees from Bishop Siegel and diocesan leadership.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/chrism-mass.jpg"
              alt="Diocesan coat of arms"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Featured Statement */}
        {statements.filter((s) => s.featured).map((statement) => (
          <section key={statement.title} className="page-content">
            <div className="interior-card" style={{ cursor: "default", maxWidth: 900, margin: "0 auto", padding: "40px 48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", padding: "5px 14px", borderRadius: 20, background: badgeColors[statement.type]?.bg, color: badgeColors[statement.type]?.color }}>
                  {statement.type}
                </span>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>{statement.date}</span>
              </div>
              <h3 style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.25, marginBottom: 16 }}>{statement.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>{statement.excerpt}</p>
              <span className="btn-gold">
                Read Full Document
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </section>
        ))}

        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" /><circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" /><circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* All Statements */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Archive</span>
            <h2 className="section-h2">All Statements &amp; Decrees</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900, margin: "0 auto" }}>
            {statements.filter((s) => !s.featured).map((statement) => (
              <div
                key={statement.title}
                className="interior-card"
                style={{ cursor: "pointer" }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ flexShrink: 0 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", padding: "5px 14px", borderRadius: 20, background: badgeColors[statement.type]?.bg, color: badgeColors[statement.type]?.color }}>
                      {statement.type}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 4 }}>{statement.date}</p>
                    <h3 style={{ marginBottom: 8 }}>{statement.title}</h3>
                    <p>{statement.excerpt}</p>
                  </div>
                  <div style={{ flexShrink: 0, alignSelf: "center" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="20" height="20" style={{ color: "var(--muted)" }} aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Stay Informed</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Receive official statements and pastoral letters directly in your inbox. Subscribe to diocesan communications.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about/press-room" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Media Inquiries <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/about/contact" className="btn btn-outline" style={{ color: "var(--cream)", borderColor: "rgba(238,218,179,0.3)" }}>Contact Communications</Link>
          </div>
        </section>
      </main>
    </>
  );
}
