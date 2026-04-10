import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Why Give? | Diocese of Evansville",
  description:
    "Your generosity transforms lives across 12 counties. Support Catholic education, charitable outreach, and parish life in the Diocese of Evansville.",
};

export default function GivePage() {
  return (
    <>
      <PageHero
        label="Stewardship"
        title="Why Give?"
        subtitle="Every gift, no matter the size, strengthens parishes, educates children, feeds families, and brings the light of Christ to Southwestern Indiana."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Why Give?" },
        ]}
      />

      <main id="main-content">
        {/* Impact Stats */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Your Impact</span>
            <h2 className="section-h2">What Your Generosity Makes Possible</h2>
            <p className="section-desc">
              When you give to the Diocese of Evansville, your support reaches every corner of our 12-county community. Here is what your generosity accomplished last year.
            </p>
          </div>

          <div className="stat-row" style={{ justifyContent: "center" }}>
            <div className="stat-item">
              <span className="stat-num" style={{ color: "var(--gold)" }}>850</span>
              <span className="stat-label">Scholarships Awarded</span>
            </div>
            <div className="stat-item">
              <span className="stat-num" style={{ color: "var(--gold)" }}>2,400</span>
              <span className="stat-label">Families Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-num" style={{ color: "var(--gold)" }}>26</span>
              <span className="stat-label">Schools Supported</span>
            </div>
            <div className="stat-item">
              <span className="stat-num" style={{ color: "var(--gold)" }}>45</span>
              <span className="stat-label">Parishes Strengthened</span>
            </div>
          </div>
        </section>

        {/* Stories of Impact */}
        <section className="page-content" style={{ background: "var(--cream)" }}>
          <div className="section-head">
            <span className="section-tag">Stories of Impact</span>
            <h2 className="section-h2">Lives Changed by Your Gift</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="interior-card" style={{ cursor: "default" }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--gold)" aria-hidden="true" style={{ marginBottom: 12 }}>
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p style={{ fontStyle: "italic", lineHeight: 1.75, marginBottom: 12 }}>
                Without the scholarship from the diocese, our daughter would not have been able to attend Catholic school. She is thriving academically and spiritually, and we are forever grateful.
              </p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)" }}>&mdash; Parent, Mater Dei High School</p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--gold)" aria-hidden="true" style={{ marginBottom: 12 }}>
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p style={{ fontStyle: "italic", lineHeight: 1.75, marginBottom: 12 }}>
                Catholic Charities helped our family when we had nowhere else to turn. They provided food, counseling, and hope. We felt the love of Christ through every person we met.
              </p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)" }}>&mdash; Family served by Catholic Charities</p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--gold)" aria-hidden="true" style={{ marginBottom: 12 }}>
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p style={{ fontStyle: "italic", lineHeight: 1.75, marginBottom: 12 }}>
                As a young seminarian, the support of the diocese gave me the formation and encouragement I needed to answer God&rsquo;s call. Every donor is part of my vocation story.
              </p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)" }}>&mdash; Seminarian, Diocese of Evansville</p>
            </div>
          </div>
        </section>

        {/* Three Giving Pathways */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Ways to Give</span>
            <h2 className="section-h2">Choose How You Give</h2>
            <p className="section-desc">
              There are many ways to support the mission of the Diocese of Evansville. Every gift makes a difference.
            </p>
          </div>

          <div className="interior-grid interior-grid-3">
            <Link href="/give/appeal" className="interior-card">
              <div className="interior-card-icon" style={{ background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3>Catholic Ministries Appeal</h3>
              <p>The annual CMA is the single most important way to support the work of the diocese. Your gift funds education, charity, vocations, and parish life across all 12 counties.</p>
            </Link>

            <Link href="/give/planned-giving" className="interior-card">
              <div className="interior-card-icon" style={{ background: "var(--navy)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3>Planned &amp; Legacy Giving</h3>
              <p>Leave a lasting legacy through bequests, charitable trusts, IRA rollovers, and estate planning. Your planned gift ensures the Church serves future generations.</p>
            </Link>

            <div className="interior-card" style={{ background: "var(--navy)", borderColor: "var(--navy)", cursor: "default" }}>
              <div className="interior-card-icon" style={{ background: "rgba(255,255,255,0.1)" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "var(--gold)" }}>
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <h3 style={{ color: "#fff" }}>Give Online</h3>
              <p style={{ color: "rgba(255,255,255,0.65)" }}>Make a secure one-time or recurring gift through Our Sunday Visitor. Fast, convenient, and you can designate your gift to the fund or parish of your choice.</p>
              <div style={{ marginTop: 12 }}>
                <a href="#" className="btn-gold btn-sm" style={{ display: "inline-flex" }}>
                  Give Now via OSV
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* More Ways to Give */}
        <section className="page-content">
          <span className="section-tag section-tag-left">More Ways to Give</span>
          <h2 className="section-h2 section-h2-left">Every Gift Counts</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <Link href="/parishes/directory" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <h3>Parish Offertory</h3>
              <p>Your weekly offertory sustains the day-to-day ministry of your parish &mdash; sacramental life, religious education, and outreach to those in need.</p>
            </Link>

            <Link href="/give/planned-giving" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <h3>Give Stock</h3>
              <p>Donating appreciated securities can provide significant tax advantages while supporting the diocese. Avoid capital gains tax and receive a charitable deduction.</p>
            </Link>

            <Link href="/ministries" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3>Volunteer Your Time</h3>
              <p>Stewardship is not only about financial gifts. Your time and talent are invaluable. Volunteer at a parish, school, or Catholic Charities program.</p>
            </Link>
          </div>
        </section>

        {/* Allocation Breakdown */}
        <section className="page-content" style={{ background: "var(--cream)" }}>
          <div className="container-narrow">
            <div className="section-head">
              <span className="section-tag">Transparency</span>
              <h2 className="section-h2">Where Your Gift Goes</h2>
              <p className="section-desc">
                We are committed to faithful stewardship of every dollar entrusted to us. Here is how Catholic Ministries Appeal funds are distributed.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <AllocationBar label="Catholic Education & Scholarships" pct={35} />
              <AllocationBar label="Catholic Charities & Social Services" pct={25} />
              <AllocationBar label="Parish Support & Evangelization" pct={20} />
              <AllocationBar label="Vocations & Seminarian Formation" pct={12} />
              <AllocationBar label="Administration & Stewardship" pct={8} />
            </div>

            <p style={{ fontSize: 13, color: "var(--text-light)", textAlign: "center", marginTop: 24 }}>
              Financial reports are available in the annual Diocesan Report and on our{" "}
              <Link href="/about/dashboard" style={{ color: "var(--blue)", textDecoration: "underline" }}>
                Transparency Dashboard
              </Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="page-content">
          <div className="cta-block">
            <h3 style={{ fontSize: "clamp(28px,4vw,40px)" }}>Your Generosity Changes Lives</h3>
            <p>
              Join the thousands of faithful Catholics across the Diocese of Evansville who give generously to build up the Body of Christ. Make a gift today.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#" className="btn-gold">
                Give Online Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <Link href="/give/appeal" className="btn-ghost-white">
                Catholic Ministries Appeal
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function AllocationBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 6 }}>
        <span style={{ fontWeight: 600, color: "var(--navy)" }}>{label}</span>
        <span style={{ color: "var(--text-medium)" }}>{pct}%</span>
      </div>
      <div style={{ height: 10, background: "var(--warm-white)", borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", borderRadius: 20, width: `${pct}%` }} />
      </div>
    </div>
  );
}
