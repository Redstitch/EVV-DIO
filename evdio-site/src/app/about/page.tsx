import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About the Diocese | Diocese of Evansville",
  description:
    "Learn about the Catholic Diocese of Evansville — our bishop, leadership, history, pastoral vision, and the offices serving 79,500 Catholics across 12 counties in Southwestern Indiana.",
};

export default function AboutPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">About the Diocese of <em>Evansville.</em></h1>
            <p className="deck">
              Serving 79,500 Catholics across 45 parishes, 26 schools, and 12 counties in Southwestern Indiana since 1944.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Interior of St. Benedict Cathedral, Evansville, Indiana."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Diocesan Snapshot */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">At a Glance</span>
            <h2 className="section-h2">The Catholic Church in Southwestern Indiana</h2>
            <p className="section-desc">
              Established in 1944 by Pope Pius XII, the Diocese of Evansville spans four deaneries across the rolling hills and river valleys of Southern Indiana.
            </p>
          </div>

          <div className="stat-row" style={{ justifyContent: "center" }}>
            <div className="stat-item">
              <span className="stat-num">79,500</span>
              <span className="stat-label">Catholics</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">45</span>
              <span className="stat-label">Parishes</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">26</span>
              <span className="stat-label">Schools</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">12</span>
              <span className="stat-label">Counties</span>
            </div>
          </div>
        </section>

        {/* Pastoral Vision */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="info-block">
            <h3>Our Pastoral Vision: Encounter. Deepen. Engage.</h3>
            <p>
              Under the leadership of Bishop Joseph M. Siegel, the sixth Bishop of Evansville, our diocese is guided by a clear pastoral vision. We invite every person to <strong>encounter</strong> the living Christ, <strong>deepen</strong> their relationship with Him through the sacraments and prayer, and <strong>engage</strong> the world through service, charity, and evangelization. This vision shapes every program, ministry, and initiative across our 12-county community through 2030.
            </p>
          </div>
        </div>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Leadership */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Leadership</span>
          <h2 className="section-h2 section-h2-left">Our Bishop &amp; Diocesan Leaders</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <Link href="/about/our-bishop" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h3>Our Bishop</h3>
              <p>Meet Bishop Joseph M. Siegel, the sixth Bishop of Evansville, and learn about his pastoral vision for our diocese.</p>
            </Link>

            <Link href="/about/leadership" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3>Diocesan Leadership</h3>
              <p>The Vicar General, Chancellor, and senior leaders guiding our diocesan mission and administration.</p>
            </Link>

            <Link href="/about/our-vision" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3>Our Vision &amp; Priorities</h3>
              <p>Encounter. Deepen. Engage. Explore the pastoral priorities guiding our diocese through 2030.</p>
            </Link>

            <Link href="/about/our-history" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                </svg>
              </div>
              <h3>Our History</h3>
              <p>From our founding in 1944 to today, discover the story of Catholicism in Southwestern Indiana.</p>
            </Link>

            <Link href="/about/clergy-directory" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L13.09 8.26L20 9L14.14 13.14L15.68 20L12 16.27L8.32 20L9.86 13.14L4 9L10.91 8.26L12 2z" />
                </svg>
              </div>
              <h3>Clergy Directory</h3>
              <p>A directory of priests, deacons, and religious serving across the four deaneries of our diocese.</p>
            </Link>

            <Link href="/about/staff-directory" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
                </svg>
              </div>
              <h3>Staff Directory</h3>
              <p>Find contact information for Catholic Center staff serving our parishes, schools, and ministries.</p>
            </Link>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Offices & Administration */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Administration</span>
          <h2 className="section-h2 section-h2-left">Offices &amp; Transparency</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <Link href="/about/offices" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
              </div>
              <h3>Offices &amp; Departments</h3>
              <p>Explore the offices that coordinate education, worship, charitable services, and pastoral care.</p>
            </Link>

            <Link href="/about/dashboard" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <h3>Monthly Dashboard</h3>
              <p>Transparent monthly reports on Mass attendance, ministry impact, finances, and school enrollment.</p>
            </Link>

            <Link href="/about/statements" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <h3>Official Statements</h3>
              <p>Read official statements, decrees, and pastoral letters from the Bishop and diocesan leadership.</p>
            </Link>

            <Link href="/about/press-room" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
              </div>
              <h3>Media Inquiries</h3>
              <p>Media resources, press releases, brand guidelines, and contact information for journalists.</p>
            </Link>

            <Link href="/about/careers" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
              </div>
              <h3>Careers</h3>
              <p>Explore employment opportunities at the Catholic Center, parishes, and schools throughout the diocese.</p>
            </Link>

            <Link href="/about/resources" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                </svg>
              </div>
              <h3>Catholic Resources</h3>
              <p>Helpful links to the USCCB, Vatican, Catholic Charities, and other faith-based organizations.</p>
            </Link>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Safety & Accountability */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Safety &amp; Accountability</span>
          <h2 className="section-h2 section-h2-left">Protecting Our Community</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <Link href="/about/safe-environment" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
              </div>
              <h3>Safe Environment</h3>
              <p>Our commitment to protecting children and vulnerable adults through prevention, education, and accountability.</p>
            </Link>

            <Link href="/about/report-abuse" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                </svg>
              </div>
              <h3>Report Abuse</h3>
              <p>How to report suspected abuse. We take every report seriously and are committed to transparency.</p>
            </Link>

            <Link href="/about/contact" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3>Contact Us</h3>
              <p>Reach the Catholic Center at 4200 N. Kentucky Ave., Evansville, or call (812) 424-5536.</p>
            </Link>
          </div>
        </section>

        {/* CTA Block */}
        <div className="page-content">
          <div className="cta-block">
            <h3>Have Questions? We Are Here to Help.</h3>
            <p>
              The Catholic Center is open Monday through Friday, 8:00 a.m. to 4:30 p.m. Reach us by phone, email, or visit us in person at 4200 N. Kentucky Avenue, Evansville, IN 47711.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/about/contact" className="btn-gold">
                Contact Us
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
              <a href="tel:8124245536" className="btn-ghost-white">
                (812) 424-5536
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
