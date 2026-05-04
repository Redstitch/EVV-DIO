import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Diocesan Leadership",
  description:
    "Meet the leadership team of the Catholic Diocese of Evansville — the Vicar General, Chancellor, and key diocesan officials who guide our mission and administration.",
};

const leaders = [
  {
    name: "Most Rev. Joseph M. Siegel, D.D.",
    title: "Bishop of Evansville",
    description:
      "Sixth Bishop of the Diocese of Evansville, installed December 15, 2017. Bishop Siegel leads the diocese with a pastoral vision centered on Encounter, Deepen, and Engage.",
    link: "/about/our-bishop",
  },
  {
    name: "Very Rev. Alex Zenthoefer",
    title: "Vicar General",
    description:
      "Serves as the Bishop's principal collaborator in the governance of the diocese, exercising executive authority in the Bishop's name across all diocesan operations.",
  },
  {
    name: "Rev. Msgr. Steven Engber",
    title: "Chancellor",
    description:
      "Oversees official diocesan records, canonical documentation, and administrative procedures. Serves as the principal notary for canonical acts of the diocese.",
  },
  {
    name: "Dr. Daryl Hagan",
    title: "Superintendent of Catholic Schools",
    description:
      "Leads the Office of Catholic Schools, overseeing 26 schools serving thousands of students across the diocese with a commitment to academic excellence and faith formation.",
  },
  {
    name: "Tim McGuire",
    title: "Chief Financial Officer",
    description:
      "Manages diocesan finances, stewardship programs, and the Catholic Ministries Appeal. Ensures transparency and accountability in all financial operations.",
  },
  {
    name: "Sarah Weber",
    title: "Director of Communications",
    description:
      "Leads diocesan communications, including The Message newspaper, media relations, digital outreach, and the diocese's public communications strategy.",
  },
];

const consultativeGroups = [
  {
    name: "College of Consultors",
    description:
      "A body of priests who advise the Bishop on significant matters of diocesan governance, including financial decisions and policy matters that affect the entire diocese.",
  },
  {
    name: "Presbyteral Council",
    description:
      "A representative body of diocesan priests serving as a senate to the Bishop, offering counsel on matters pertaining to the pastoral ministry and life of the presbyterate.",
  },
  {
    name: "Diocesan Finance Council",
    description:
      "A consultative body of lay and clergy financial professionals who advise the Bishop on the financial administration of the diocese, budgets, and financial policies.",
  },
  {
    name: "Diocesan Pastoral Council",
    description:
      "Representatives from parishes across all four deaneries who advise the Bishop on the pastoral needs and priorities of the faithful throughout the diocese.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Diocesan <em>Leadership.</em></h1>
            <p className="deck">The leaders and consultative bodies guiding the mission and administration of our diocese.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="Diocesan leadership"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Leadership Team */}
        <div className="page-content">
          <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
            <span className="section-tag section-tag-left">Senior Leadership</span>
            <h2 className="section-h2 section-h2-left">Diocesan Leadership Team</h2>
          </div>
          <p style={{ marginBottom: 40, maxWidth: 640 }}>
            The Catholic Center in Evansville serves as the administrative hub of the diocese. Our leadership team works collaboratively to support the Bishop&rsquo;s vision and serve our 45 parishes, 26 schools, and ministries.
          </p>

          <div className="interior-grid interior-grid-2">
            {leaders.map((leader) => (
              <div key={leader.name} className="info-block">
                <h3>{leader.name}</h3>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--blue)", marginBottom: 12 }}>{leader.title}</p>
                <p>{leader.description}</p>
                {leader.link && (
                  <Link
                    href={leader.link}
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--blue)", marginTop: 16 }}
                  >
                    Read Full Bio
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }} aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
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

        {/* Consultative Bodies */}
        <div className="page-content">
          <div className="section-head">
            <span className="section-tag">Governance</span>
            <h2 className="section-h2">Consultative Bodies</h2>
          </div>
          <p style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            These councils and bodies advise the Bishop on matters of pastoral life, finances, and governance throughout the diocese.
          </p>
          <div className="interior-grid interior-grid-2">
            {consultativeGroups.map((group) => (
              <div key={group.name} className="interior-card" style={{ cursor: "default" }}>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
              </div>
            ))}
          </div>
        </div>

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

        {/* Four Deaneries */}
        <div className="page-content">
          <div className="section-head">
            <span className="section-tag">Structure</span>
            <h2 className="section-h2">Four Deaneries</h2>
          </div>
          <p style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            The diocese is organized into four deaneries, each led by a dean who coordinates pastoral activity and represents the parishes in that region.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              { name: "Evansville Deanery", counties: "Vanderburgh County", parishes: "16 parishes" },
              { name: "East Deanery", counties: "Warrick, Spencer, Perry Counties", parishes: "11 parishes" },
              { name: "North Deanery", counties: "Gibson, Pike, Dubois, Martin Counties", parishes: "10 parishes" },
              { name: "West Deanery", counties: "Posey, Gibson, Knox, Daviess, Sullivan Counties", parishes: "8 parishes" },
            ].map((deanery) => (
              <div key={deanery.name} className="info-block" style={{ textAlign: "center" }}>
                <h3>{deanery.name}</h3>
                <p style={{ fontSize: 12, marginBottom: 4 }}>{deanery.counties}</p>
                <p style={{ fontWeight: 600, color: "var(--blue)" }}>{deanery.parishes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Contact Our Leadership Team
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Reach the Catholic Center to connect with any member of our diocesan leadership.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact the Catholic Center <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
