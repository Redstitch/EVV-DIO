import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Schools Map",
  description:
    "View all 26 Catholic schools on a map of the Diocese of Evansville. Find schools near you across 12 counties in Southwestern Indiana.",
};

export default function SchoolsMap() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title">Schools <em>Map.</em></h1>
            <p className="deck">Find all 26 Catholic schools across the 12 counties of the Diocese of Evansville.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Catholic school students at Mass with the Bishop"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Map Placeholder */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Interactive Map</span>
            <h2 className="section-h2">Catholic Schools Across the Diocese</h2>
            <p className="section-desc">
              Our 26 schools span from Vincennes in the east to the Illinois border in the west, from Washington in the north to Tell City along the Ohio River.
            </p>
          </div>

          {/* Map placeholder */}
          <div className="info-block" style={{ overflow: "hidden" }}>
            <div style={{ aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", padding: 32 }}>
                <svg viewBox="0 0 24 24" style={{ width: 48, height: 48, margin: "0 auto 16px" }} fill="var(--navy)" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <h3>Interactive Map Coming Soon</h3>
                <p>
                  We are building an interactive map to help you explore Catholic school locations across the diocese. In the meantime, browse schools by county below.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Schools by County */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">By County</span>
            <h2 className="section-h2">Schools by Location</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Vanderburgh County</h3>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Evansville</p>
              <ul>
                <li>Mater Dei High School</li>
                <li>Memorial High School</li>
                <li>Christ the King School</li>
                <li>Good Shepherd School</li>
                <li>Holy Redeemer School</li>
                <li>St. Benedict Cathedral School</li>
                <li>Corpus Christi School</li>
              </ul>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Dubois County</h3>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Jasper</p>
              <ul>
                <li>Jasper Catholic High School</li>
                <li>Holy Family School</li>
                <li>Precious Blood School</li>
                <li>Holy Trinity School</li>
                <li>St. Joseph School</li>
              </ul>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Knox County</h3>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Vincennes</p>
              <ul>
                <li>Rivet Jr.-Sr. High School</li>
                <li>Flaget Elementary</li>
              </ul>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Perry County</h3>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Tell City</p>
              <ul>
                <li>Tell City Jr.-Sr. High School</li>
                <li>St. Paul School</li>
              </ul>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Daviess County</h3>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Washington</p>
              <ul>
                <li>Washington Catholic Schools</li>
                <li>St. Simon School</li>
              </ul>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Spencer County</h3>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12 }}>Various</p>
              <ul>
                <li>St. Michael School (Cannelton)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Need Help Choosing a School?</h3>
            <p>
              Our Catholic Schools Office can help you find the right fit for your family. Contact us for personalized guidance.
            </p>
            <div className="btn-row">
              <Link href="/schools/find" className="btn btn-primary">
                Browse All Schools
              </Link>
              <Link href="/schools/enroll" className="btn btn-secondary">
                Start Enrollment
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
