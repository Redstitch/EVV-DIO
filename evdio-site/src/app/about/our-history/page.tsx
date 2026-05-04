import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "Explore the history of the Catholic Diocese of Evansville, established in 1944. From pioneer missionaries to today, discover how Catholicism has shaped Southwestern Indiana.",
};

const timeline = [
  {
    year: "1749",
    title: "French Missionaries Arrive",
    description:
      "French Catholic missionaries first bring the faith to the Wabash and Ohio River valleys, establishing some of the earliest Catholic communities in what would become Indiana.",
  },
  {
    year: "1834",
    title: "Diocese of Vincennes Established",
    description:
      "The Diocese of Vincennes (later the Archdiocese of Indianapolis) is established, bringing organized Catholic governance to Indiana. Southwestern Indiana parishes fall under its jurisdiction.",
  },
  {
    year: "1853",
    title: "Assumption Parish Founded in Evansville",
    description:
      "One of the earliest Catholic parishes in Evansville is established, serving the growing German and Irish immigrant communities in the river city.",
  },
  {
    year: "1912",
    title: "Growth of Catholic Schools",
    description:
      "Catholic schools multiply across Southwestern Indiana, providing faith-based education to generations of families and establishing the foundation for today's 26-school system.",
  },
  {
    year: "1944",
    title: "Diocese of Evansville Established",
    description:
      "On November 11, 1944, Pope Pius XII establishes the Diocese of Evansville, carving it from the Diocese of Indianapolis. The Most Reverend Henry J. Grimmelsman is appointed the first Bishop.",
  },
  {
    year: "1944",
    title: "Bishop Henry J. Grimmelsman",
    description:
      "First Bishop of Evansville (1944\u20131965). Bishop Grimmelsman organized the new diocese, established essential institutions, and oversaw a period of significant growth in parishes and schools.",
  },
  {
    year: "1965",
    title: "Bishop Paul F. Leibold",
    description:
      "Second Bishop of Evansville (1965\u20131969). Bishop Leibold led the diocese during the transformative period following the Second Vatican Council before being appointed Archbishop of Cincinnati.",
  },
  {
    year: "1970",
    title: "The Message Newspaper Founded",
    description:
      "The Message begins publication as the diocesan newspaper, providing Catholic journalism and community news to families across all 12 counties. It continues serving readers today.",
  },
  {
    year: "1970",
    title: "Bishop Francis R. Shea",
    description:
      "Third Bishop of Evansville (1970\u20131989). During his nearly two decades of leadership, Bishop Shea strengthened Catholic education, expanded charitable services, and deepened ecumenical relationships.",
  },
  {
    year: "1989",
    title: "Bishop Gerald A. Gettelfinger",
    description:
      "Fourth Bishop of Evansville (1989\u20132011). Bishop Gettelfinger guided the diocese through a period of consolidation and renewal, emphasizing stewardship, vocations, and parish pastoral planning.",
  },
  {
    year: "2011",
    title: "Bishop Charles C. Thompson",
    description:
      "Fifth Bishop of Evansville (2011\u20132017). Bishop Thompson launched new evangelization efforts and strengthened the diocese's commitment to social justice before being appointed Archbishop of Indianapolis.",
  },
  {
    year: "2017",
    title: "Bishop Joseph M. Siegel Installed",
    description:
      "On December 15, 2017, Bishop Joseph M. Siegel is installed as the sixth Bishop of Evansville. He brings a pastoral vision of Encounter, Deepen, and Engage to revitalize the life of the diocese.",
  },
  {
    year: "Today",
    title: "A Vibrant Community of Faith",
    description:
      "The Diocese of Evansville serves 79,500 Catholics across 45 parishes, 26 schools, and 12 counties. Catholic Charities serves 2,400 families annually, and 850 scholarships are awarded each year.",
  },
];

export default function OurHistoryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Our <em>History.</em></h1>
            <p className="deck">
              Over 275 years of Catholic faith, community, and service in Southwestern Indiana.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/branding/coat-of-arms.jpg"
              alt="The coat of arms of the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Intro */}
        <div className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Story</span>
            <h2 className="section-h2">From Pioneer Missionaries to a Thriving Diocese</h2>
          </div>
          <p style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            The Catholic faith in Southwestern Indiana traces its roots to French missionaries who traveled the river valleys in the eighteenth century. Through generations of immigrants, pioneers, and faithful families, the Church has grown into the vibrant diocese we know today &mdash; 79,500 Catholics strong across 12 counties.
          </p>
        </div>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Timeline */}
        <div className="page-content bg-eggshell">
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            {/* Vertical Line */}
            <div style={{ position: "absolute", left: 39, top: 0, bottom: 0, width: 1, background: "var(--line)", display: "var(--md-show, none)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                  {/* Year Badge */}
                  <div style={{ display: "var(--md-show, none)", flexShrink: 0, width: 80, height: 80, borderRadius: "50%", background: "var(--navy)", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }} className="hidden md:flex">
                    <span style={{ fontFamily: "var(--serif)", fontSize: 13, fontWeight: 700, color: "var(--dgold)", lineHeight: 1, textAlign: "center" }}>
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="interior-card" style={{ cursor: "default", flex: 1 }}>
                    <span className="md:hidden" style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "var(--dgold)", background: "var(--navy)", borderRadius: 999, padding: "4px 12px", marginBottom: 12 }}>
                      {item.year}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

        {/* Bishops Summary */}
        <div className="page-content">
          <div className="section-head">
            <span className="section-tag">Episcopal Lineage</span>
            <h2 className="section-h2">Bishops of Evansville</h2>
          </div>
          <div className="interior-grid interior-grid-3">
            {[
              { name: "Henry J. Grimmelsman", years: "1944\u20131965", ordinal: "1st" },
              { name: "Paul F. Leibold", years: "1965\u20131969", ordinal: "2nd" },
              { name: "Francis R. Shea", years: "1970\u20131989", ordinal: "3rd" },
              { name: "Gerald A. Gettelfinger", years: "1989\u20132011", ordinal: "4th" },
              { name: "Charles C. Thompson", years: "2011\u20132017", ordinal: "5th" },
              { name: "Joseph M. Siegel", years: "2017\u2013Present", ordinal: "6th" },
            ].map((bishop) => (
              <div key={bishop.name} className="info-block" style={{ textAlign: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(183,141,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: 14, fontWeight: 700, color: "var(--dgold)" }}>{bishop.ordinal}</span>
                </div>
                <h3>Bishop {bishop.name}</h3>
                <p>{bishop.years}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Continue the Story
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            The history of our diocese is still being written. Learn about our vision for the future and how you can be part of the next chapter.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
            <Link href="/about/our-vision" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Our Vision &amp; Priorities <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/about/our-bishop" className="btn btn-outline">
              Meet Our Bishop
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
