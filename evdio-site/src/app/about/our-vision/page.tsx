import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Our Vision & Priorities",
  description:
    "Encounter. Deepen. Engage. Explore Bishop Siegel's pastoral vision and the strategic priorities guiding the Diocese of Evansville through 2030.",
};

const priorities = [
  {
    number: "01",
    title: "Encounter",
    subtitle: "Meet People Where They Are",
    goals: [
      "Create welcoming parish communities where every person feels at home",
      "Invest in outreach to inactive Catholics, young adults, and seekers",
      "Strengthen OCIA (formerly RCIA) programs across all parishes",
      "Leverage digital communications and social media for evangelization",
      "Support parish-based small groups and personal invitation initiatives",
    ],
  },
  {
    number: "02",
    title: "Deepen",
    subtitle: "Grow in Faith and Understanding",
    goals: [
      "Expand adult faith formation opportunities in every deanery",
      "Strengthen sacramental preparation programs for families",
      "Invest in Catholic school excellence and affordability with 850 scholarships annually",
      "Develop youth and young adult ministry programs across the diocese",
      "Promote devotional life, retreats, and spiritual direction",
    ],
  },
  {
    number: "03",
    title: "Engage",
    subtitle: "Live the Mission of the Church",
    goals: [
      "Empower laity for leadership in parishes, schools, and ministries",
      "Expand Catholic Charities services to reach more than 2,400 families",
      "Grow stewardship and the Catholic Ministries Appeal to fund our mission",
      "Promote social justice advocacy rooted in Catholic Social Teaching",
      "Foster vocations to the priesthood, diaconate, and religious life",
    ],
  },
];

const strategicAreas = [
  {
    title: "Parish Vitality",
    description:
      "Ensuring every parish is a vibrant center of worship, formation, and community life, with the resources and leadership to thrive.",
  },
  {
    title: "Catholic Education",
    description:
      "Sustaining and growing our 26 schools, providing academic excellence rooted in faith formation for every family that desires it.",
  },
  {
    title: "Charitable Mission",
    description:
      "Expanding our outreach through Catholic Charities, serving the poor, vulnerable, and marginalized with the compassion of Christ.",
  },
  {
    title: "Vocations & Ministry",
    description:
      "Actively promoting and supporting vocations to the priesthood, diaconate, and religious life while empowering lay ministry leaders.",
  },
  {
    title: "Transparency & Trust",
    description:
      "Building trust through open communication, monthly dashboards, financial accountability, and authentic parish-center relationships.",
  },
  {
    title: "Communications & Outreach",
    description:
      "Telling our story through modern communications, The Message newspaper, digital media, and personal invitation across all 12 counties.",
  },
];

export default function OurVisionPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Our Vision &amp; <em>Priorities.</em></h1>
            <p className="deck">Encounter. Deepen. Engage. A pastoral vision for the Diocese of Evansville.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/articles/becoming-one-roadmap.jpg"
              alt="The pastoral vision: Encounter, Deepen, Engage."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Vision Statement */}
        <div className="page-content">
          <div className="section-head">
            <span className="section-tag">Pastoral Vision 2025&ndash;2030</span>
            <h2 className="section-h2">Encounter. Deepen. Engage.</h2>
          </div>
          <p style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 16px" }}>
            Bishop Siegel&rsquo;s pastoral vision calls every Catholic in Southwestern Indiana to a three-fold mission: to encounter the living Christ in our daily lives, to deepen our faith through formation and community, and to engage as active participants in the mission of the Church.
          </p>
          <p style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            This vision is not a program &mdash; it is a way of life. It shapes every decision at the Catholic Center, every initiative in our parishes, and every investment in our schools and ministries.
          </p>
        </div>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Three Pillars */}
        <div className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">The Three Pillars</span>
            <h2 className="section-h2">Pastoral Priorities</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {priorities.map((pillar) => (
              <div key={pillar.title} className="interior-card" style={{ cursor: "default" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                  <div style={{ display: "var(--sm-show, none)", flexShrink: 0 }} className="hidden sm:block">
                    <div style={{ fontFamily: "var(--serif)", fontSize: 56, color: "rgba(183,141,58,0.2)", lineHeight: 1 }}>
                      {pillar.number}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3>{pillar.title}</h3>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "var(--blue)", marginBottom: 16 }}>{pillar.subtitle}</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
                      {pillar.goals.map((goal, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                          <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "var(--dgold)", flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Strategic Areas */}
        <div className="page-content">
          <div className="section-head">
            <span className="section-tag">Strategic Focus</span>
            <h2 className="section-h2">Areas of Investment</h2>
          </div>
          <p style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            These strategic areas guide our resource allocation, staffing, and initiatives across the diocese.
          </p>
          <div className="interior-grid interior-grid-3">
            {strategicAreas.map((area) => (
              <div key={area.title} className="info-block">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Impact Numbers */}
        <div className="page-content">
          <div className="cta-block">
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, color: "var(--dgold)" }}>By the Numbers</span>
            </div>
            <h3>Our Diocese at a Glance</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 32, marginTop: 32 }}>
              {[
                { value: "79,500", label: "Catholics" },
                { value: "45", label: "Parishes" },
                { value: "26", label: "Schools" },
                { value: "12", label: "Counties" },
                { value: "2,400", label: "Families Served" },
                { value: "850", label: "Scholarships" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 36, fontWeight: 700, color: "var(--dgold)", lineHeight: 1, marginBottom: 4 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(238,218,179,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="page-content">
          <div style={{ textAlign: "center" }}>
            <h2 className="section-h2">Be Part of the Vision</h2>
            <p style={{ maxWidth: 560, margin: "0 auto 32px" }}>
              Every Catholic in our diocese has a role to play. Whether through parish involvement, volunteering, giving, or prayer, you can help us Encounter, Deepen, and Engage.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/give" className="btn btn-primary">
                Support Our Mission
              </Link>
              <Link href="/about/our-bishop" className="btn btn-secondary">
                Meet Our Bishop
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
