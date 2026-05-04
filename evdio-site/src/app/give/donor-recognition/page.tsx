import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Deo Gratias Society",
  description:
    "Learn about the Deo Gratias Society, the Diocese of Evansville's donor recognition program. Discover giving levels, membership benefits, and how to join.",
};

export default function DonorRecognition() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Stewardship</p>
            <h1 id="title">Deo Gratias <em>Society.</em></h1>
            <p className="deck">Honoring the faithful stewards whose generosity sustains the mission of the Church across southwest Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community members gathered in fellowship and service."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── ABOUT ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Thanks Be to God</span>
            <h2 className="section-h2">About the Deo Gratias Society</h2>
            <p className="section-desc">
              The Deo Gratias Society &mdash; Latin for &ldquo;Thanks Be to God&rdquo; &mdash; recognizes individuals and families whose cumulative lifetime giving to the Diocese of Evansville reflects an extraordinary commitment to the Church&rsquo;s mission. Members are partners in every life touched by Catholic education, charitable outreach, and ministry formation.
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

        {/* ─── GIVING LEVELS (on eggshell) ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Recognition Levels</span>
            <h2 className="section-h2">Giving <em>Levels</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Bronze &mdash; Faithful Steward</h3>
              <p>Cumulative lifetime giving of $10,000&ndash;$24,999. Faithful Stewards demonstrate a sustained commitment to the diocesan mission and are recognized annually at the Bishop&rsquo;s Stewardship Dinner.</p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Silver &mdash; Generous Heart</h3>
              <p>Cumulative lifetime giving of $25,000&ndash;$49,999. Generous Heart members receive a personal letter of gratitude from Bishop Siegel and are listed in the annual Stewardship Report.</p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Gold &mdash; Pillar of the Church</h3>
              <p>Cumulative lifetime giving of $50,000&ndash;$99,999. Pillars of the Church are invited to an exclusive annual reception with the Bishop and are recognized with a commemorative gift.</p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Platinum &mdash; Apostle of Mercy</h3>
              <p>Cumulative lifetime giving of $100,000 or more. Apostles of Mercy represent the highest level of generosity and are honored with permanent recognition at the Catholic Center and a special blessing from the Bishop.</p>
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

        {/* ─── HOW TO JOIN (on white) ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Membership</span>
            <h2 className="section-h2">How to Join &amp; Benefits</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>How to Join</h3>
              <p>
                Membership in the Deo Gratias Society is based on cumulative lifetime giving to the Diocese of Evansville, including gifts to the Bishop&rsquo;s Annual Appeal, Catholic Charities, Catholic schools, and other diocesan entities. There is no separate application &mdash; your generosity qualifies you automatically.
              </p>
              <p style={{ marginTop: 16 }}>
                If you believe your giving history qualifies you and you have not been contacted, please reach out to the Stewardship Office so we can review your records.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Member Benefits</h3>
              <ul>
                <li>Invitation to the annual Bishop&rsquo;s Stewardship Dinner</li>
                <li>Personal updates from the Bishop on how your gifts make a difference</li>
                <li>Recognition in the annual diocesan Stewardship Report</li>
                <li>A commemorative lapel pin or keepsake at each recognition level</li>
                <li>Enrollment in a perpetual Mass intention offered for all Deo Gratias Society members</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Your generosity <em style={{ color: "var(--bgold)" }}>changes lives.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Learn more about planned and annual giving opportunities that can deepen your partnership with the Diocese of Evansville.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/give" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Explore ways to give <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
