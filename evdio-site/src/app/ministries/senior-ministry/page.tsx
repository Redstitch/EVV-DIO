import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Senior Ministry",
  description:
    "Ministry to older adults in the Diocese of Evansville. Companionship, spiritual enrichment, and support for seniors in our Catholic community.",
};

export default function SeniorMinistryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Senior <em>Ministry.</em></h1>
            <p className="deck">Honoring and serving the wisdom, faith, and dignity of our older adults.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community service"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Mission */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2">Vital Members of the Church</h2>
          </div>

          <div className="prose">
            <p>
              The Senior Ministry of the Diocese of Evansville recognizes that older adults are not simply recipients of care but active, vital members of the Church whose wisdom, experience, and faith enrich the entire community. Our ministry seeks to accompany seniors in their spiritual journey while addressing their practical needs.
            </p>
            <p>
              Through parish-based programs, diocesan events, and partnerships with Catholic Charities, we ensure that no senior in our diocese feels isolated or forgotten.
            </p>
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Programs */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Programs</span>
          <h2 className="section-h2 section-h2-left">How We Serve</h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Homebound Ministry</h3>
              <p>Extraordinary Ministers of Holy Communion bring the Eucharist to those unable to attend Mass. Pastoral visits provide companionship and spiritual support.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Senior Retreats</h3>
              <p>Day retreats and half-day gatherings at the Sarto Retreat Center designed for the spiritual needs and interests of older adults.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Parish Social Groups</h3>
              <p>Many parishes host regular gatherings, luncheons, card groups, and outings that provide fellowship and connection for seniors.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Caregiver Support</h3>
              <p>Resources and support groups for family members who care for aging loved ones, including respite care referrals and spiritual support.</p>
            </div>
          </div>
        </section>

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

        {/* Anointing CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Anointing of the Sick</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            The Sacrament of the Anointing of the Sick is available to any Catholic who is seriously ill, facing surgery, or weakened by advanced age. Contact your parish to arrange for a priest to administer this sacrament.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/parishes/directory" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Find Your Parish <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/ministries" className="btn btn-outline" style={{ color: "var(--cream)", borderColor: "rgba(238,218,179,0.3)" }}>All Ministries</Link>
          </div>
        </section>
      </main>
    </>
  );
}
