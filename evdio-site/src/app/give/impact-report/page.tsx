import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Impact Report",
  description:
    "See how your gifts to the Diocese of Evansville are making a difference — families served, scholarships awarded, and ministries strengthened across southwest Indiana.",
};

export default function ImpactReport() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Stewardship</p>
            <h1 id="title">Impact <em>Report.</em></h1>
            <p className="deck">A look at how your generosity is building up the Body of Christ across the 12 counties of southwest Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community members united in service and fellowship."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── OVERVIEW ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Year in Review</span>
            <h2 className="section-h2">Your Gifts at Work</h2>
            <p className="section-desc">
              Every dollar given to the Diocese of Evansville goes directly to strengthening parishes, schools, charitable outreach, and vocations across our 12-county region. Here is a snapshot of what your generosity accomplished this past year.
            </p>
          </div>
        </section>

        {/* ─── CROSS FLOURISH ─── */}
        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── STATS (on eggshell) ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">By the Numbers</span>
            <h2 className="section-h2">Impact <em>Highlights</em></h2>
          </div>

          <div className="stat-row">
            <div className="stat-item">
              <span className="stat-number">5,200+</span>
              <span className="stat-label">Students educated in Catholic schools</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$1.8M</span>
              <span className="stat-label">Tuition assistance awarded to families in need</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12,000+</span>
              <span className="stat-label">Individuals served by Catholic Charities</span>
            </div>
          </div>

          <div className="stat-row" style={{ marginTop: 32 }}>
            <div className="stat-item">
              <span className="stat-number">68</span>
              <span className="stat-label">Parishes supported across 12 counties</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">14</span>
              <span className="stat-label">Men in seminary formation for the priesthood</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$420K</span>
              <span className="stat-label">Invested in faith formation and ministry programs</span>
            </div>
          </div>
        </section>

        {/* ─── QUATREFOIL FLOURISH ─── */}
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

        {/* ─── WHERE GIFTS GO (on white) ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Allocation</span>
            <h2 className="section-h2">Where Your Gifts Go</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Catholic Schools &amp; Education</h3>
              <p>Your gifts provide tuition assistance for families who otherwise could not afford a Catholic education, fund teacher salaries and professional development, and maintain school facilities across the diocese.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Catholic Charities</h3>
              <p>From food pantries and emergency shelter to counseling and disaster relief, Catholic Charities serves thousands of individuals each year regardless of faith, providing a safety net for the most vulnerable in our communities.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Vocations &amp; Seminarian Formation</h3>
              <p>It costs approximately $40,000 per year to educate and form a seminarian. Your support ensures that every man who discerns a call to the priesthood in our diocese can pursue that vocation without financial barriers.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Parish Support &amp; Ministry</h3>
              <p>Smaller and rural parishes receive supplemental support to maintain vibrant worship communities. Your gifts also fund youth ministry, adult faith formation, marriage preparation, and sacramental programs diocese-wide.</p>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Continue the <em style={{ color: "var(--bgold)" }}>mission.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Your ongoing generosity makes all of this possible. Join thousands of faithful stewards who are building up the Church in southwest Indiana.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/give/appeal" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Give to the Bishop&rsquo;s Appeal <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
