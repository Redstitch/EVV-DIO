import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore employment opportunities at the Catholic Center, parishes, and schools throughout the Diocese of Evansville. Join our mission to serve 79,500 Catholics in Southwestern Indiana.",
};

const openPositions = [
  {
    title: "Elementary School Principal",
    location: "Holy Redeemer School, Evansville",
    type: "Full-Time",
    department: "Catholic Schools",
    posted: "March 28, 2026",
    description:
      "Lead a vibrant Catholic elementary school community, overseeing academics, faith formation, and school operations in partnership with the parish pastor.",
  },
  {
    title: "Director of Youth Ministry",
    location: "Catholic Center, Evansville",
    type: "Full-Time",
    department: "Catechesis & Evangelization",
    posted: "March 20, 2026",
    description:
      "Develop and coordinate diocesan youth ministry programs, retreats, and events serving young people across all four deaneries.",
  },
  {
    title: "Parish Business Manager",
    location: "St. Benedict Cathedral, Evansville",
    type: "Full-Time",
    department: "Parish Administration",
    posted: "March 15, 2026",
    description:
      "Manage the financial, administrative, and facility operations of the cathedral parish, working closely with the rector and parish staff.",
  },
  {
    title: "Music Minister",
    location: "Holy Family Parish, Jasper",
    type: "Part-Time",
    department: "Liturgy & Worship",
    posted: "March 10, 2026",
    description:
      "Lead the music ministry for weekend liturgies and holy days, directing the choir and coordinating cantors and instrumentalists.",
  },
  {
    title: "Case Manager \u2014 Catholic Charities",
    location: "Catholic Charities, Evansville",
    type: "Full-Time",
    department: "Catholic Charities",
    posted: "March 5, 2026",
    description:
      "Provide direct client services including needs assessments, referrals, and case management for families in crisis across Vanderburgh County.",
  },
  {
    title: "Middle School Religion Teacher",
    location: "Reitz Memorial High School, Evansville",
    type: "Full-Time",
    department: "Catholic Schools",
    posted: "February 25, 2026",
    description:
      "Teach middle school religion courses, fostering students\u2019 understanding of Catholic faith and traditions in a supportive school community.",
  },
];

const benefits = [
  { title: "Health & Dental", desc: "Comprehensive medical, dental, and vision coverage for employees and their families." },
  { title: "Retirement Plan", desc: "Diocesan retirement plan with employer contributions to support your future." },
  { title: "Paid Time Off", desc: "Generous vacation, sick leave, and paid holidays including holy days of obligation." },
  { title: "Tuition Benefits", desc: "Reduced tuition at diocesan Catholic schools for employees and their children." },
  { title: "Professional Development", desc: "Ongoing training, conference attendance, and continuing education support." },
  { title: "Mission-Driven Culture", desc: "Work alongside dedicated colleagues in an environment centered on faith and service." },
];

export default function CareersPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title"><em>Careers.</em></h1>
            <p className="deck">Join our mission to serve 79,500 Catholics across Southwestern Indiana.</p>
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
        {/* Intro */}
        <section className="page-content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
                <span className="section-tag" style={{ marginInline: 0 }}>Work With Us</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>Your Career, Our Mission</h2>
              </div>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
                Working for the Diocese of Evansville is more than a job &mdash; it is a calling. Whether at the Catholic Center, in one of our 26 schools, at a parish, or through Catholic Charities, every role contributes to our mission of Encounter, Deepen, and Engage.
              </p>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75 }}>
                We offer competitive compensation, comprehensive benefits, a faith-filled work environment, and the opportunity to make a meaningful difference in the lives of families across 12 counties.
              </p>
            </div>
            <div className="interior-grid interior-grid-2">
              {[
                { num: "45", label: "Parishes" },
                { num: "26", label: "Schools" },
                { num: "12", label: "Counties" },
                { num: "4", label: "Deaneries" },
              ].map((s) => (
                <div key={s.label} className="info-block" style={{ textAlign: "center", marginBottom: 0 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, color: "var(--navy)", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4, textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
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

        {/* Open Positions */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Open Positions</span>
            <h2 className="section-h2">Current Opportunities</h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "-32px auto 40px", textAlign: "center" }}>
            Explore current openings across the diocese. New positions are posted as they become available.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {openPositions.map((position) => (
              <div
                key={position.title + position.location}
                className="interior-card"
                style={{ cursor: "default" }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--blue)", background: "rgba(0,78,115,0.08)", padding: "5px 14px", borderRadius: 20 }}>
                        {position.type}
                      </span>
                      <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--muted)", background: "var(--cream-lt)", padding: "5px 14px", borderRadius: 20 }}>
                        {position.department}
                      </span>
                    </div>
                    <h3>{position.title}</h3>
                    <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="var(--muted)" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {position.location}
                    </p>
                    <p>{position.description}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                    <p style={{ fontSize: 12, color: "var(--muted)" }}>Posted {position.posted}</p>
                    <span className="btn-gold" style={{ fontSize: 12, padding: "8px 16px" }}>Apply Now</span>
                  </div>
                </div>
              </div>
            ))}
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

        {/* Benefits */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Why Work Here</span>
            <h2 className="section-h2">Employee Benefits</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            {benefits.map((b) => (
              <div key={b.title} className="info-block" style={{ marginBottom: 0 }}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Don&rsquo;t See Your Ideal Position?</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            We are always interested in hearing from talented professionals who share our mission. Send your resume to the Office of Human Resources.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Contact Human Resources <span className="arrow" aria-hidden="true">→</span></Link>
            <a href="mailto:hr@evdio.org" className="btn btn-outline" style={{ color: "var(--cream)", borderColor: "rgba(238,218,179,0.3)" }}>hr@evdio.org</a>
          </div>
        </section>
      </main>
    </>
  );
}
