import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "The Message | Diocese of Evansville",
  description:
    "The Message is the weekly Catholic newspaper of the Diocese of Evansville, serving Southwestern Indiana with faith-based journalism since 1970.",
};

export default function TheMessagePage() {
  return (
    <>
      <PageHero
        label="The Message"
        title="Catholic News & Stories"
        subtitle="Serving Southwestern Indiana with faith-based journalism since 1970."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Message" },
        ]}
      />

      <div style={{ padding: "0 40px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "var(--navy)", height: 480 }}>
          <Image
            src="/images/stock/presbyterate-group.jpg"
            alt="The presbyterate of the Diocese of Evansville at the 2025 Chrism Mass."
            fill
            style={{ objectFit: "cover", objectPosition: "center 45%" }}
          />
        </div>
      </div>

      <main id="main-content">
        {/* Featured Article */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Featured Story</span>

          <div className="interior-card" style={{ overflow: "hidden", padding: 0, cursor: "default" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
              <div style={{ background: "linear-gradient(135deg, var(--navy), var(--blue))", padding: "48px 40px", position: "relative" }}>
                <span style={{ display: "inline-block", background: "var(--gold)", color: "var(--navy)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, padding: "4px 12px", borderRadius: 4, marginBottom: 16 }}>
                  Diocesan News
                </span>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(26px,3.5vw,36px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 12 }}>
                  Bishop Siegel Announces Pastoral Priorities for 2026-2030
                </h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 16, maxWidth: 640 }}>
                  A renewed vision for encounter, formation, and engagement invites every Catholic across the 12 counties of the diocese to participate in building the future of the Church in Southwestern Indiana.
                </p>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>April 4, 2026</span>
                <div style={{ marginTop: 20 }}>
                  <Link href="/the-message/diocesan-news" className="btn-gold btn-sm">
                    Read the Full Story
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Headlines */}
          <div className="interior-grid interior-grid-3" style={{ marginTop: 24 }}>
            <Link href="/the-message/local-news" className="interior-card">
              <span style={{ display: "block", fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "var(--gold)", fontWeight: 700, marginBottom: 8 }}>Local News</span>
              <h3 style={{ fontSize: 18 }}>Catholic Charities Expands Family Services to Warrick County</h3>
              <p style={{ marginTop: 8, fontSize: 12, color: "var(--text-light)" }}>April 2, 2026</p>
            </Link>

            <Link href="/the-message/faith-spirituality" className="interior-card">
              <span style={{ display: "block", fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "var(--gold)", fontWeight: 700, marginBottom: 8 }}>Faith &amp; Spirituality</span>
              <h3 style={{ fontSize: 18 }}>Preparing for Easter: A Journey Through Holy Week</h3>
              <p style={{ marginTop: 8, fontSize: 12, color: "var(--text-light)" }}>March 30, 2026</p>
            </Link>

            <Link href="/the-message/national-news" className="interior-card">
              <span style={{ display: "block", fontSize: 10, textTransform: "uppercase", letterSpacing: 2, color: "var(--gold)", fontWeight: 700, marginBottom: 8 }}>National News</span>
              <h3 style={{ fontSize: 18 }}>USCCB Releases New Resources for Parish Evangelization</h3>
              <p style={{ marginTop: 8, fontSize: 12, color: "var(--text-light)" }}>March 28, 2026</p>
            </Link>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Browse by Section */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Sections</span>
            <h2 className="section-h2">Browse by Section</h2>
            <p className="section-desc">
              Explore the latest stories across all sections of The Message.
            </p>
          </div>

          <div className="interior-grid interior-grid-4">
            <Link href="/the-message/diocesan-news" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px", background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M12 2L13.09 8.26L20 9L14.14 13.14L15.68 20L12 16.27L8.32 20L9.86 13.14L4 9L10.91 8.26L12 2z" />
                </svg>
              </div>
              <h3>Diocesan News</h3>
              <p>The latest from the Diocese of Evansville</p>
            </Link>

            <Link href="/the-message/local-news" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px", background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3>Local &amp; Regional</h3>
              <p>Southwestern Indiana community coverage</p>
            </Link>

            <Link href="/the-message/national-news" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px", background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3>National &amp; World</h3>
              <p>Catholic news from across the nation</p>
            </Link>

            <Link href="/the-message/faith-spirituality" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px", background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                </svg>
              </div>
              <h3>Faith &amp; Spirituality</h3>
              <p>Deepen your faith with spiritual reflections</p>
            </Link>

            <Link href="/the-message/features" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px", background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <h3>Special Features</h3>
              <p>In-depth stories and investigative pieces</p>
            </Link>

            <Link href="/the-message/columns" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px", background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </div>
              <h3>Opinion &amp; Columns</h3>
              <p>Voices and perspectives on faith and life</p>
            </Link>

            <Link href="/the-message/reviews" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px", background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                </svg>
              </div>
              <h3>Movie Reviews</h3>
              <p>Faith-based film and media reviews</p>
            </Link>

            <Link href="/the-message/archives" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px", background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                </svg>
              </div>
              <h3>Archives</h3>
              <p>Every issue since 1970</p>
            </Link>
          </div>
        </section>

        {/* About & Subscribe */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="info-block">
            <h3>About The Message</h3>
            <p>
              The Message has been the voice of the Catholic community in Southwestern Indiana since 1970. Published weekly, it provides news, features, opinion, and spiritual reflection for Catholics across the diocese. Our award-winning journalists cover diocesan events, parish life, Catholic education, and the intersection of faith and culture in Southern Indiana.
            </p>
            <div style={{ marginTop: 12 }}>
              <Link href="/the-message/about" className="link-blue">
                Learn more about The Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="cta-block">
            <h3>Subscribe to The Message</h3>
            <p>
              Receive The Message delivered to your home each week, or access our digital edition online. Stay connected with the Catholic community in Southwestern Indiana.
            </p>
            <Link href="/the-message/subscribe" className="btn-gold">
              Subscribe Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
