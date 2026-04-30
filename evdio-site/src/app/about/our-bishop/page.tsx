import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Our Bishop — Bishop Joseph M. Siegel",
  description:
    "Meet Bishop Joseph M. Siegel, the sixth Bishop of Evansville, installed December 15, 2017. Learn about his life, ministry, and pastoral vision: Encounter. Deepen. Engage.",
};

export default function OurBishopPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Our <em>Bishop.</em></h1>
            <p className="deck">Bishop Joseph M. Siegel, sixth Bishop of the Diocese of Evansville</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/bishop/bishop-siegel.jpg"
              alt="Bishop Joseph M. Siegel"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Bishop Portrait & Bio */}
        <div className="page-content">
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 48, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 280, height: 360, borderRadius: "140px 140px 20px 20px", position: "relative", overflow: "hidden", boxShadow: "0 12px 40px rgba(27,42,74,0.2)" }}>
                <Image
                  src="/images/bishop/bishop-siegel.jpg"
                  alt="Bishop Joseph M. Siegel"
                  fill
                  className="object-cover object-[center_top]"
                  priority
                />
              </div>
              <div style={{ marginTop: 24, textAlign: "center" }}>
                <Image
                  src="/images/branding/diocese-crest.png"
                  alt="Diocese of Evansville crest"
                  width={80}
                  height={80}
                  style={{ margin: "0 auto 12px" }}
                />
                <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, color: "var(--muted)" }}>
                  Sixth Bishop of Evansville
                </p>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>
                  Installed December 15, 2017
                </p>
              </div>
            </div>

            <div>
              <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
                <span className="section-tag section-tag-left">Meet Our Bishop</span>
                <h2 className="section-h2 section-h2-left">Most Reverend Joseph M. Siegel, D.D.</h2>
              </div>
              <p style={{ fontFamily: "var(--serif)", fontSize: 20, fontStyle: "italic", color: "var(--blue)", marginBottom: 24, lineHeight: 1.4 }}>
                &ldquo;We need to be ambassadors of one another &mdash; staff and parishes supporting each other. We are called to tell our story and meet people where they are.&rdquo;
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p>
                  Bishop Joseph M. Siegel was ordained and installed as the sixth Bishop of the Diocese of Evansville on December 15, 2017, at St. Benedict Cathedral. He was appointed by Pope Francis following a distinguished career of priestly service and episcopal leadership.
                </p>
                <p>
                  Born on September 7, 1959, in Joliet, Illinois, Bishop Siegel was ordained a priest for the Diocese of Joliet on May 24, 1986. He served in various pastoral and administrative roles before being ordained as an Auxiliary Bishop of the Diocese of Joliet on January 19, 2009.
                </p>
                <p>
                  As Bishop of Evansville, he leads a diocese of 79,500 Catholics across 45 parishes, 26 schools, and 12 counties in Southwestern Indiana. His pastoral vision &mdash; <strong>Encounter. Deepen. Engage.</strong> &mdash; calls every Catholic to encounter Christ, deepen their faith, and engage in the life and mission of the Church.
                </p>
                <p>
                  Bishop Siegel is known for his warmth, accessibility, and commitment to transparency. He has prioritized outreach to young adults, support for Catholic education, strengthening parish life, and the charitable mission of the diocese through Catholic Charities and the Catholic Ministries Appeal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Pastoral Vision Highlight */}
        <div className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="interior-card" style={{ cursor: "default" }}>
            <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
              <span className="section-tag section-tag-left">Pastoral Vision</span>
              <h2 className="section-h2 section-h2-left">Encounter. Deepen. Engage.</h2>
            </div>
            <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
              <div>
                <div style={{ fontSize: 48, fontFamily: "var(--serif)", color: "rgba(183,141,58,0.2)", lineHeight: 1, marginBottom: 8 }}>01</div>
                <h3>Encounter</h3>
                <p>Create opportunities for every person to encounter the living Christ through worship, parish life, and personal invitation. We meet people where they are.</p>
              </div>
              <div>
                <div style={{ fontSize: 48, fontFamily: "var(--serif)", color: "rgba(183,141,58,0.2)", lineHeight: 1, marginBottom: 8 }}>02</div>
                <h3>Deepen</h3>
                <p>Provide formation and resources that help Catholics at every stage of life grow in their understanding of the faith and relationship with God.</p>
              </div>
              <div>
                <div style={{ fontSize: 48, fontFamily: "var(--serif)", color: "rgba(183,141,58,0.2)", lineHeight: 1, marginBottom: 8 }}>03</div>
                <h3>Engage</h3>
                <p>Empower the faithful to actively participate in the mission of the Church through service, evangelization, stewardship, and leadership.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Key Priorities */}
        <div className="page-content">
          <div className="section-head">
            <span className="section-tag">Bishop&rsquo;s Priorities</span>
            <h2 className="section-h2">Areas of Focus</h2>
          </div>
          <div className="interior-grid interior-grid-2">
            <div className="info-block">
              <h3>Catholic Education</h3>
              <p>Sustaining and strengthening our 26 schools, awarding 850 scholarships annually, and ensuring every child has access to a Catholic education rooted in faith and academic excellence.</p>
            </div>
            <div className="info-block">
              <h3>Parish Vitality</h3>
              <p>Supporting vibrant parish communities across all four deaneries with resources for worship, faith formation, and community building that bring people together.</p>
            </div>
            <div className="info-block">
              <h3>Charitable Mission</h3>
              <p>Expanding Catholic Charities to serve more than 2,400 families each year with food assistance, counseling, immigration services, and emergency aid.</p>
            </div>
            <div className="info-block">
              <h3>Transparency &amp; Trust</h3>
              <p>Publishing monthly diocesan dashboards, maintaining open financial reporting, and fostering a culture of accountability that strengthens the bond between parishes and the Catholic Center.</p>
            </div>
          </div>
        </div>

        {/* Connect CTA */}
        <div className="page-content">
          <div className="cta-block">
            <h3>Connect with Our Bishop</h3>
            <p>
              Bishop Siegel welcomes your correspondence. Write to the Office of the Bishop at the Catholic Center or contact us to request a meeting.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/about/contact" className="btn btn-primary">
                Contact the Bishop&rsquo;s Office
              </Link>
              <Link href="/about/our-vision" className="btn btn-outline">
                Read Pastoral Priorities
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
