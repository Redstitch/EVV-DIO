import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Catholic Schools | Diocese of Evansville",
  description:
    "Discover the 26 Catholic schools of the Diocese of Evansville. Faith-based education, academic excellence, and community across 12 counties in Southwestern Indiana.",
};

export default function SchoolsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Schools</p>
            <h1 id="title">Catholic <em>Schools.</em></h1>
            <p className="deck">
              26 schools across Southwestern Indiana where faith and academic excellence come together to form the whole child — mind, body, and spirit.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Catholic school students at Mass with Bishop Siegel."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
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
              Catholic schools do more than educate &mdash; they{" "}
              <em>form.</em> Our students attend Mass, pray daily, serve their
              communities, and develop a personal relationship with Jesus
              Christ.
            </p>
            <div className="body">
              <p>
                For over 150 years, the Catholic schools of the Diocese of
                Evansville have been shaping young lives in faith, knowledge,
                and character. From pre-kindergarten through high school,
                26 schools across 12 counties offer an education that is
                academically rigorous, spiritually grounded, and deeply rooted
                in community.
              </p>
              <p>
                With a 98% graduation rate, an average class size of 18, a 14:1
                student-teacher ratio, and 100% licensed teachers, our schools
                consistently outperform state and national averages. All 26
                schools are fully accredited by Cognia. Catholic identity is
                woven into every aspect of school life, producing graduates who
                are prepared academically, spiritually, and morally for the
                challenges ahead.
              </p>
              <p>
                Whether your family is exploring Catholic education for the
                first time or continuing a multi-generational tradition,
                you&rsquo;ll find a school community ready to welcome you.
              </p>
            </div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section
          className="page-content section-cream"
          aria-labelledby="stats-title"
        >
          <span className="section-tag section-tag-left">At a Glance</span>
          <h2
            className="section-h2 section-h2-left"
            id="stats-title"
          >
            Excellence rooted in <em>faith.</em>
          </h2>

          <div className="stat-row" style={{ justifyContent: "center", marginTop: 32 }}>
            <div className="stat-item">
              <span className="stat-num">26</span>
              <span className="stat-label">Schools</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">6,842</span>
              <span className="stat-label">Students Enrolled</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">850</span>
              <span className="stat-label">Scholarships Awarded</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">98%</span>
              <span className="stat-label">Graduation Rate</span>
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

        {/* ─── ACTION CARDS ─── */}
        <section className="page-content" aria-labelledby="explore-title">
          <span className="section-tag section-tag-left">Explore</span>
          <h2
            className="section-h2 section-h2-left"
            id="explore-title"
          >
            What are you <em>looking for?</em>
          </h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <Link href="/schools/find" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
              <h3>Find a School</h3>
              <p>Search our 26 schools by location, grade level, and programs to find the right fit for your family.</p>
            </Link>

            <Link href="/schools/enroll" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3>Inquire About Enrollment</h3>
              <p>Learn about the enrollment process, important dates, and how to get started at any of our 26 schools.</p>
            </Link>

            <Link href="/schools/tuition" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <h3>Tuition Assistance</h3>
              <p>Explore scholarships, Indiana Choice vouchers, SGO tax credits, and financial aid that make Catholic education accessible.</p>
            </Link>

            <Link href="/schools/map" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                </svg>
              </div>
              <h3>Schools Map</h3>
              <p>View all Catholic school locations across the 12 counties of the diocese on an interactive map.</p>
            </Link>

            <Link href="/schools/special-needs" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                </svg>
              </div>
              <h3>Special Needs Programs</h3>
              <p>Discover programs and support for children with learning differences and special needs across our schools.</p>
            </Link>

            <Link href="/schools/careers" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
              </div>
              <h3>Teaching &amp; Staff Careers</h3>
              <p>Join our team. Explore open positions in Catholic schools across the diocese and make a difference.</p>
            </Link>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;Train up a child in the way he should go; even when he is
            old he will not <em>depart from it.</em>&rdquo;
            <cite>Proverbs 22:6</cite>
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

        {/* ─── ACCREDITATION ─── */}
        <section className="page-content section-warm" aria-labelledby="accreditation-title">
          <span className="section-tag section-tag-left">Quality Assurance</span>
          <h2
            className="section-h2 section-h2-left"
            id="accreditation-title"
          >
            Accredited &amp; <em>accountable.</em>
          </h2>

          <div className="stat-row" style={{ justifyContent: "center", marginTop: 24 }}>
            <div className="stat-item">
              <span className="stat-num">18</span>
              <span className="stat-label">Avg. Class Size</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">14:1</span>
              <span className="stat-label">Student-Teacher Ratio</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-label">Licensed Teachers</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">42,000+</span>
              <span className="stat-label">Service Hours Annually</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/schools/accreditation" className="link-blue">
              Learn about our accreditation standards
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section className="page-content section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)" }}>
            Give your child the gift of Catholic <em>education.</em>
          </h2>
          <p className="section-desc" style={{ color: "rgba(238,218,179,0.75)" }}>
            Schedule a tour, attend an open house, or contact one of our 26
            schools to learn how Catholic education can make a difference for
            your family.
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
            <Link href="/schools/find" className="btn btn-primary">
              Find a School{" "}
              <span className="arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
            <Link href="/schools/enroll" className="btn btn-outline">
              Start the Enrollment Process
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
