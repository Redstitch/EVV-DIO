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
        {/* ─── INTRO ─── */}
        <section className="intro">
          <div className="inner">
            <p className="pull">
              &ldquo;We need to be ambassadors of one another &mdash; staff and
              parishes supporting each other. We are called to tell our story
              and meet people <em>where they are.</em>&rdquo;
            </p>
            <div className="body">
              <p>
                Bishop Joseph M. Siegel was ordained and installed as the sixth
                Bishop of the Diocese of Evansville on December 15, 2017, at
                St. Benedict Cathedral. He was appointed by Pope Francis
                following a distinguished career of priestly service and
                episcopal leadership.
              </p>
              <p>
                Born on September 7, 1959, in Joliet, Illinois, Bishop Siegel
                was ordained a priest for the Diocese of Joliet on May 24,
                1986. He served in various pastoral and administrative roles
                before being ordained as an Auxiliary Bishop of the Diocese of
                Joliet on January 19, 2009.
              </p>
              <p>
                As Bishop of Evansville, he leads a diocese of 79,500 Catholics
                across 45 parishes, 26 schools, and 12 counties in
                Southwestern Indiana. His pastoral vision &mdash;{" "}
                <strong>Encounter. Deepen. Engage.</strong> &mdash; calls every
                Catholic to encounter Christ, deepen their faith, and engage in
                the life and mission of the Church.
              </p>
              <p>
                Bishop Siegel is known for his warmth, accessibility, and
                commitment to transparency. He has prioritized outreach to
                young adults, support for Catholic education, strengthening
                parish life, and the charitable mission of the diocese through
                Catholic Charities and the Catholic Ministries Appeal.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FLOURISH ─── */}
        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" />
            <circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" />
            <circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* ─── PASTORAL VISION ─── */}
        <section
          className="page-content"
          aria-labelledby="vision-title"
        >
          <span className="section-tag section-tag-left">Pastoral Vision</span>
          <h2
            className="section-h2 section-h2-left"
            id="vision-title"
          >
            Encounter. Deepen. <em>Engage.</em>
          </h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="info-block">
              <div
                style={{
                  fontSize: 48,
                  fontFamily: "var(--serif)",
                  color: "rgba(183,141,58,0.2)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                01
              </div>
              <h3>Encounter</h3>
              <p>
                Create opportunities for every person to encounter the living
                Christ through worship, parish life, and personal invitation.
                We meet people where they are.
              </p>
            </div>
            <div className="info-block">
              <div
                style={{
                  fontSize: 48,
                  fontFamily: "var(--serif)",
                  color: "rgba(183,141,58,0.2)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                02
              </div>
              <h3>Deepen</h3>
              <p>
                Provide formation and resources that help Catholics at every
                stage of life grow in their understanding of the faith and
                relationship with God.
              </p>
            </div>
            <div className="info-block">
              <div
                style={{
                  fontSize: 48,
                  fontFamily: "var(--serif)",
                  color: "rgba(183,141,58,0.2)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                03
              </div>
              <h3>Engage</h3>
              <p>
                Empower the faithful to actively participate in the mission of
                the Church through service, evangelization, stewardship, and
                leadership.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;So we are ambassadors for Christ, God making his appeal
            through <em>us.</em>&rdquo;
            <cite>2 Corinthians 5:20</cite>
          </blockquote>
        </section>

        {/* ─── FLOURISH ─── */}
        <div
          className="flourish flourish-quatrefoil"
          aria-hidden="true"
          style={{ padding: "48px 0 8px" }}
        >
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" />
            <circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" />
            <circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* ─── KEY PRIORITIES ─── */}
        <section className="page-content bg-eggshell" aria-labelledby="priorities-title">
          <span className="section-tag section-tag-left">
            Bishop&rsquo;s Priorities
          </span>
          <h2
            className="section-h2 section-h2-left"
            id="priorities-title"
          >
            Areas of <em>focus.</em>
          </h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="info-block">
              <h3>Catholic Education</h3>
              <p>
                Sustaining and strengthening our 26 schools, awarding 850
                scholarships annually, and ensuring every child has access to a
                Catholic education rooted in faith and academic excellence.
              </p>
            </div>
            <div className="info-block">
              <h3>Parish Vitality</h3>
              <p>
                Supporting vibrant parish communities across all four deaneries
                with resources for worship, faith formation, and community
                building that bring people together.
              </p>
            </div>
            <div className="info-block">
              <h3>Charitable Mission</h3>
              <p>
                Expanding Catholic Charities to serve more than 2,400 families
                each year with food assistance, counseling, immigration
                services, and emergency aid.
              </p>
            </div>
            <div className="info-block">
              <h3>Transparency &amp; Trust</h3>
              <p>
                Publishing monthly diocesan dashboards, maintaining open
                financial reporting, and fostering a culture of accountability
                that strengthens the bond between parishes and the Catholic
                Center.
              </p>
            </div>
          </div>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section className="page-content" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)" }}>
            Connect with <em>our Bishop.</em>
          </h2>
          <p className="section-desc" style={{ color: "rgba(238,218,179,0.75)" }}>
            Bishop Siegel welcomes your correspondence. Write to the Office of
            the Bishop at the Catholic Center or contact us to request a
            meeting.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 32,
            }}
          >
            <Link href="/about/contact" className="btn btn-primary">
              Contact the Bishop&rsquo;s Office{" "}
              <span className="arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
            <Link href="/about/our-vision" className="btn btn-outline">
              Read Pastoral Priorities
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
