import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Past Bishops",
  description:
    "The five bishops who led the Diocese of Evansville from its founding in 1944 through 2017, shaping the Catholic community of southwestern Indiana.",
};

export default function PastBishops() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Past <em>Bishops.</em></h1>
            <p className="deck">Since 1944, five bishops have shepherded the Catholic faithful of southwestern Indiana, each leaving an enduring mark on the life of the diocese.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Coat of arms of the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── INTRO ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Heritage</span>
            <h2 className="section-h2">Shepherds of Southwestern Indiana</h2>
            <p className="section-desc">
              The Diocese of Evansville was established on November 11, 1944, when Pope Pius XII divided the Diocese of Indianapolis to create a new see for the twelve southernmost counties of Indiana. Each bishop who has led this diocese brought unique gifts and a deep commitment to the faithful.
            </p>
          </div>
        </section>

        {/* ─── CROSS FLOURISH ─── */}
        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── BISHOPS LIST ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">1944 &ndash; 2017</span>
            <h2 className="section-h2">Five Bishops, One <em>Mission</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Most Rev. Henry J. Grimmelsman</h3>
              <p style={{ fontWeight: 600, marginBottom: 8 }}>First Bishop &middot; 1944&ndash;1965</p>
              <p>
                Bishop Grimmelsman was installed as the first Bishop of Evansville on January 7, 1945. Over two decades of leadership, he organized the new diocese, established parishes and schools across twelve counties, and laid the administrative and spiritual foundation that would serve the faithful for generations. He oversaw the diocese during the transformative years of the Second Vatican Council.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Most Rev. Paul F. Leibold</h3>
              <p style={{ fontWeight: 600, marginBottom: 8 }}>Second Bishop &middot; 1966&ndash;1969</p>
              <p>
                Bishop Leibold guided the diocese through the earliest implementation of Vatican II reforms. During his brief but impactful tenure, he introduced the liturgical changes called for by the Council, encouraged greater lay participation, and strengthened ecumenical relationships in the region. He was later appointed Archbishop of Cincinnati.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Most Rev. Francis R. Shea</h3>
              <p style={{ fontWeight: 600, marginBottom: 8 }}>Third Bishop &middot; 1970&ndash;1989</p>
              <p>
                Bishop Shea served nearly two decades, the longest tenure after the founding bishop. He deepened the post-conciliar renewal, expanded Catholic education and social services, and championed outreach to the poor and marginalized in the rural and urban communities of southwestern Indiana. His pastoral warmth and accessibility made him beloved among the faithful.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Most Rev. Gerald A. Gettelfinger</h3>
              <p style={{ fontWeight: 600, marginBottom: 8 }}>Fourth Bishop &middot; 1989&ndash;2011</p>
              <p>
                Bishop Gettelfinger led the diocese for over twenty years, overseeing significant growth in vocations and a major restoration of St. Benedict Cathedral. He strengthened the Catholic school system, established new pastoral programs, and guided the diocese through periods of economic challenge with steady faith and wise stewardship.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Most Rev. Charles C. Thompson</h3>
              <p style={{ fontWeight: 600, marginBottom: 8 }}>Fifth Bishop &middot; 2011&ndash;2017</p>
              <p>
                Bishop Thompson brought renewed energy to evangelization and youth ministry during his six years in Evansville. He launched new initiatives in faith formation, encouraged parish vitality, and expanded the diocese&rsquo;s presence in digital communications. In 2017, Pope Francis appointed him Archbishop of Indianapolis.
              </p>
            </div>
          </div>
        </section>

        {/* ─── QUATREFOIL FLOURISH ─── */}
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

        {/* ─── CURRENT BISHOP ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Present Day</span>
            <h2 className="section-h2">Our Current Bishop</h2>
            <p className="section-desc">
              Since 2017, the Most Reverend Joseph M. Siegel has served as the sixth Bishop of Evansville, continuing the faithful leadership of his predecessors and guiding the diocese into a new era of evangelization and service.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/about/our-bishop" className="read-link">
              Learn about Bishop Siegel <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Discover our roots &mdash; <em style={{ color: "var(--bgold)" }}>our story continues.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Learn more about the history and heritage of Catholic life in southwestern Indiana.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about/our-history" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Diocesan history <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
