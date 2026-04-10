import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Faith & Sacraments | Diocese of Evansville",
  description:
    "Explore the Catholic faith in the Diocese of Evansville. From the sacraments to prayer resources, find everything you need to encounter Christ, deepen your faith, and engage your community.",
};

export default function FaithPage() {
  return (
    <>
      <PageHero
        label="Faith & Sacraments"
        title="Your Journey of Faith"
        subtitle="Whether you are exploring Catholicism for the first time or seeking to deepen a lifelong relationship with Christ, we are here to walk with you."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faith & Sacraments" },
        ]}
      />

      <main id="main-content">
        {/* Three Pillars */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Pastoral Vision</span>
            <h2 className="section-h2">Encounter. Deepen. Engage.</h2>
            <p className="section-desc">
              Bishop Siegel&rsquo;s pastoral vision guides everything we do. Each pillar offers a pathway into the life of the Church.
            </p>
          </div>

          {/* Encounter */}
          <span className="section-tag section-tag-left">Pillar One</span>
          <h2 className="section-h2 section-h2-left" style={{ fontSize: "clamp(24px,3vw,34px)" }}>
            Encounter &mdash; Meet Christ &amp; His Church
          </h2>
          <div className="interior-grid interior-grid-3" style={{ marginTop: 24, marginBottom: 48 }}>
            <Link href="/faith/become-catholic" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>How to Become Catholic</h3>
              <p>Begin your journey through OCIA (formerly RCIA). Learn what it means to enter the Catholic Church and how to take your first step.</p>
            </Link>

            <Link href="/faith/baptism" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <h3>Baptism</h3>
              <p>The gateway to life in the Spirit. Learn about infant baptism, adult baptism, and how to prepare for this first sacrament.</p>
            </Link>

            <Link href="/parishes" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3>Find a Parish</h3>
              <p>Connect with one of 45 parish communities across the diocese. Search by location, Mass time, or deanery.</p>
            </Link>
          </div>

          <hr className="section-divider" />

          {/* Deepen */}
          <span className="section-tag section-tag-left">Pillar Two</span>
          <h2 className="section-h2 section-h2-left" style={{ fontSize: "clamp(24px,3vw,34px)" }}>
            Deepen &mdash; Grow in Faith &amp; Grace
          </h2>
          <div className="interior-grid interior-grid-3" style={{ marginTop: 24, marginBottom: 48 }}>
            <Link href="/faith/first-communion" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 21h20v-2H2v2zm0-4h20v-2H2v2zM5.5 9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5S9.38 7 8 7 5.5 8.12 5.5 9.5zm7 0c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5S16.38 7 15 7s-2.5 1.12-2.5 2.5z" />
                </svg>
              </div>
              <h3>First Communion</h3>
              <p>Preparing to receive the source and summit of Christian life &mdash; the Body and Blood of Christ in the Eucharist.</p>
            </Link>

            <Link href="/faith/confirmation" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 6.06V3h-2v3.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17h13.98C20.1 17 21 16.1 21 14.99c0-4.62-3.5-8.43-8-8.93zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </div>
              <h3>Confirmation</h3>
              <p>Sealed with the gifts of the Holy Spirit. Discover how teens and adults prepare for this sacrament of initiation.</p>
            </Link>

            <Link href="/faith/prayer-worship" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
                </svg>
              </div>
              <h3>Prayer &amp; Worship Resources</h3>
              <p>Daily readings, prayer guides, and spiritual resources to enrich your personal and family prayer life.</p>
            </Link>

            <Link href="/faith/calendar" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                </svg>
              </div>
              <h3>Church Calendar</h3>
              <p>Follow the liturgical year: Advent, Lent, Easter, Ordinary Time, and the feasts and solemnities of the Church.</p>
            </Link>

            <Link href="/faith/vocations" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3>Vocations</h3>
              <p>Discern God&rsquo;s call for your life &mdash; priesthood, diaconate, religious life, or the lay vocation.</p>
            </Link>
          </div>

          <hr className="section-divider" />

          {/* Engage */}
          <span className="section-tag section-tag-left">Pillar Three</span>
          <h2 className="section-h2 section-h2-left" style={{ fontSize: "clamp(24px,3vw,34px)" }}>
            Engage &mdash; Live &amp; Share the Faith
          </h2>
          <div className="interior-grid interior-grid-3" style={{ marginTop: 24 }}>
            <Link href="/faith/marriage" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3>Catholic Marriage</h3>
              <p>Prepare for the sacrament of Matrimony. Marriage prep, enrichment programs, and support for married couples.</p>
            </Link>

            <Link href="/faith/anointing" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98z" />
                </svg>
              </div>
              <h3>Anointing of the Sick</h3>
              <p>Healing, comfort, and spiritual strength for those who are seriously ill or facing surgery.</p>
            </Link>

            <Link href="/faith/deacon" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L13.09 8.26L20 9L14.14 13.14L15.68 20L12 16.27L8.32 20L9.86 13.14L4 9L10.91 8.26L12 2z" />
                </svg>
              </div>
              <h3>Becoming a Deacon</h3>
              <p>Learn about the permanent diaconate formation program and how to discern a call to ordained service.</p>
            </Link>

            <Link href="/faith/music" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <h3>Music Resources</h3>
              <p>Liturgical music resources, workshops, and training for parish musicians and worship leaders.</p>
            </Link>
          </div>
        </section>

        {/* Sacraments Overview */}
        <section className="page-content" style={{ background: "var(--cream)" }}>
          <div className="section-head">
            <span className="section-tag">The Seven Sacraments</span>
            <h2 className="section-h2">Signs of Grace, Encounters with Christ</h2>
            <p className="section-desc">
              The sacraments are the foundation of Catholic life. Through them, we receive God&rsquo;s grace at every stage of our journey.
            </p>
          </div>

          <div className="interior-grid interior-grid-4">
            <Link href="/faith/baptism" className="interior-card" style={{ textAlign: "center" }}>
              <h3>Baptism</h3>
              <p>New life in Christ and entry into the Church</p>
            </Link>
            <Link href="/faith/first-communion" className="interior-card" style={{ textAlign: "center" }}>
              <h3>Eucharist</h3>
              <p>The source and summit of the Christian life</p>
            </Link>
            <Link href="/faith/confirmation" className="interior-card" style={{ textAlign: "center" }}>
              <h3>Confirmation</h3>
              <p>Strengthened by the Holy Spirit</p>
            </Link>
            <Link href="/parishes" className="interior-card" style={{ textAlign: "center" }}>
              <h3>Reconciliation</h3>
              <p>God&rsquo;s mercy and forgiveness restored</p>
            </Link>
            <Link href="/faith/marriage" className="interior-card" style={{ textAlign: "center" }}>
              <h3>Matrimony</h3>
              <p>A covenant of love mirroring Christ and the Church</p>
            </Link>
            <Link href="/faith/vocations" className="interior-card" style={{ textAlign: "center" }}>
              <h3>Holy Orders</h3>
              <p>Called to serve as priest, bishop, or deacon</p>
            </Link>
            <Link href="/faith/anointing" className="interior-card" style={{ textAlign: "center" }}>
              <h3>Anointing of the Sick</h3>
              <p>Healing, comfort, and spiritual strength</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="page-content">
          <div className="cta-block">
            <h3>Not Sure Where to Start?</h3>
            <p>
              Whether you are curious about the Catholic faith, returning after time away, or looking to receive a sacrament, we are here to help. Contact your local parish or reach out to our diocesan offices.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/faith/become-catholic" className="btn-gold">
                How to Become Catholic
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
              <Link href="/parishes" className="btn-ghost-white">
                Find a Parish
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
