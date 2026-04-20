import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ministries | Diocese of Evansville",
  description:
    "Explore the ministries of the Diocese of Evansville, serving families, youth, seniors, and communities across 12 counties in Southwestern Indiana.",
};

export default function MinistriesPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Our <em>Ministries.</em></h1>
            <p className="deck">
              Serving the whole person, the whole family, and the whole community across Southwestern Indiana.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Diocesan volunteers serving the community."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Family & Life */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Family &amp; Life</span>
          <h2 className="section-h2 section-h2-left">Marriage, Family &amp; Respect for Life</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <Link href="/ministries/marriage-family" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3>Marriage &amp; Family Life</h3>
              <p>Marriage preparation, enrichment weekends, and support for families at every stage of life.</p>
            </Link>

            <Link href="/ministries/respect-life" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>Respect for Life</h3>
              <p>Defending the dignity of every human life from conception to natural death through prayer, education, and advocacy.</p>
            </Link>

            <Link href="/ministries/project-rachel" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98z" />
                </svg>
              </div>
              <h3>Healing After Abortion</h3>
              <p>Project Rachel offers confidential support and healing for anyone affected by an abortion experience.</p>
            </Link>

            <Link href="/ministries/expectant-mothers" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3>Support for Expectant Mothers</h3>
              <p>Resources, assistance, and community for mothers facing unexpected pregnancies.</p>
            </Link>

            <Link href="/ministries/mens-ministry" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3>Men&rsquo;s Ministry</h3>
              <p>Helping men grow as Catholic fathers, husbands, and leaders in their communities.</p>
            </Link>

            <Link href="/ministries/senior-ministry" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h3>Senior Ministry</h3>
              <p>Companionship, spiritual enrichment, and support for older adults in our diocese.</p>
            </Link>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Youth & Education */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Youth &amp; Education</span>
          <h2 className="section-h2 section-h2-left">Young People &amp; Faith Formation</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <Link href="/ministries/youth" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <h3>Youth &amp; Young Adults</h3>
              <p>Programs, retreats, mission trips, and community for teens and young adults growing in faith.</p>
            </Link>

            <Link href="/ministries/campus-ministry" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>
              <h3>College Campus Ministry</h3>
              <p>Catholic community and spiritual formation at universities across the diocese, including USI and UE.</p>
            </Link>

            <Link href="/ministries/scholarships" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>
              <h3>Scholarships &amp; Financial Aid</h3>
              <p>Over 850 scholarships awarded annually to make Catholic education accessible to every family.</p>
            </Link>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Community & Outreach */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Community &amp; Outreach</span>
          <h2 className="section-h2 section-h2-left">Service, Justice &amp; Inclusion</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <Link href="/ministries/hispanic" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3>Ministerio Hispano</h3>
              <p>Welcoming and serving the Hispanic Catholic community with culturally relevant ministry and bilingual resources.</p>
            </Link>

            <Link href="/ministries/disability" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                </svg>
              </div>
              <h3>Disability &amp; Inclusion</h3>
              <p>Ensuring every person with a disability can fully participate in the sacramental and community life of the Church.</p>
            </Link>

            <Link href="/ministries/spred" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                </svg>
              </div>
              <h3>Special Needs Religious Ed</h3>
              <p>SPRED provides faith formation adapted for individuals with intellectual and developmental disabilities — a program of Disability &amp; Inclusion Ministry.</p>
            </Link>

            <Link href="/ministries/prison-ministry" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <h3>Prison &amp; Jail Ministry</h3>
              <p>Bringing the sacraments and pastoral care to the incarcerated and their families across the diocese.</p>
            </Link>

            <Link href="/ministries/social-justice" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3>Social Justice</h3>
              <p>Advocacy and action rooted in Catholic Social Teaching for the common good of all people.</p>
            </Link>
          </div>
        </section>

        {/* Impact info-block */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="info-block">
            <h3>Your Generosity at Work</h3>
            <p>
              Last year, Catholic Charities served <strong>2,400 families</strong> across the diocese. The Catholic Ministries Appeal funded <strong>850 scholarships</strong>, supported all <strong>45 parishes</strong>, and sustained every ministry listed on this page. Every dollar you give goes directly to serving people in Southwestern Indiana.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="cta-block" style={{ background: "var(--accent-red)" }}>
            <h3>Your Gifts Make These Ministries Possible</h3>
            <p style={{ color: "rgba(255,255,255,0.85)" }}>
              Every dollar given to the Catholic Ministries Appeal directly supports the programs and services on this page. Join thousands of faithful Catholics in building up the Body of Christ.
            </p>
            <Link href="/give" className="btn-gold">
              Support Our Ministries
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
