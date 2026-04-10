import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Parishes & Mass | Diocese of Evansville",
  description:
    "Find a Catholic parish near you in the Diocese of Evansville. 45 parishes across 12 counties in Southwestern Indiana, organized into four deaneries.",
};

export default function ParishesPage() {
  return (
    <>
      <PageHero
        label="Parishes & Mass"
        title="Find Your Parish"
        subtitle="45 parishes across 12 counties in Southwestern Indiana, united in faith and service under four deaneries."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Parishes & Mass" },
        ]}
      />

      <main id="main-content">
        {/* Parish Finder CTA */}
        <div className="page-content">
          <div className="cta-block" style={{ padding: "48px 36px" }}>
            <div style={{ marginBottom: 16 }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="var(--gold)" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <h3 style={{ fontSize: "clamp(28px,4vw,40px)" }}>Explore Our Interactive Parish Map</h3>
            <p>
              Use our interactive map to find the parish closest to you. View locations, Mass times, contact information, and directions for all 45 parishes. Search by ZIP code, city, or county.
            </p>
            <Link href="/parishes/directory" className="btn-gold-lg">
              Open Parish Finder
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Mass &amp; Worship</span>
            <h2 className="section-h2">Find Mass Times &amp; More</h2>
            <p className="section-desc">
              Find Mass times, watch Mass online, or browse our complete parish directory.
            </p>
          </div>

          <div className="interior-grid interior-grid-3">
            <Link href="/parishes/mass-times" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
              </div>
              <h3>Mass Times</h3>
              <p>Find daily and weekend Mass schedules, Holy Day schedules, and confession times at parishes near you.</p>
            </Link>

            <Link href="/parishes/watch-mass" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zM10 8v6l5-3-5-3z" />
                </svg>
              </div>
              <h3>Watch Mass Online</h3>
              <p>Join us for livestreamed Masses when you are unable to attend in person. Multiple parishes offer livestreaming.</p>
            </Link>

            <Link href="/parishes/directory" className="interior-card">
              <div className="interior-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z" />
                </svg>
              </div>
              <h3>Parish Directory</h3>
              <p>A complete listing of all 45 parishes with addresses, phone numbers, pastor information, and parish websites.</p>
            </Link>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Deaneries */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Four Deaneries</span>
            <h2 className="section-h2">Explore by Deanery</h2>
            <p className="section-desc">
              Our 45 parishes are organized into four deaneries spanning 12 counties across Southwestern Indiana.
            </p>
          </div>

          <div className="interior-grid interior-grid-4">
            <Link href="/parishes/north-deanery" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <h3>North Deanery</h3>
              <p style={{ fontSize: 13, marginBottom: 8 }}>Knox, Daviess, Martin Counties</p>
              <span style={{ display: "inline-block", background: "var(--gold-pale)", color: "var(--gold)", padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>12 Parishes</span>
            </Link>

            <Link href="/parishes/south-deanery" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <h3>South Deanery</h3>
              <p style={{ fontSize: 13, marginBottom: 8 }}>Vanderburgh, Warrick Counties</p>
              <span style={{ display: "inline-block", background: "var(--gold-pale)", color: "var(--gold)", padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>14 Parishes</span>
            </Link>

            <Link href="/parishes/east-deanery" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <h3>East Deanery</h3>
              <p style={{ fontSize: 13, marginBottom: 8 }}>Dubois, Spencer, Perry Counties</p>
              <span style={{ display: "inline-block", background: "var(--gold-pale)", color: "var(--gold)", padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>11 Parishes</span>
            </Link>

            <Link href="/parishes/west-deanery" className="interior-card" style={{ textAlign: "center" }}>
              <div className="interior-card-icon" style={{ margin: "0 auto 16px" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <h3>West Deanery</h3>
              <p style={{ fontSize: 13, marginBottom: 8 }}>Gibson, Pike, Posey, Crawford Counties</p>
              <span style={{ display: "inline-block", background: "var(--gold-pale)", color: "var(--gold)", padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>8 Parishes</span>
            </Link>
          </div>
        </section>

        {/* New to the Area */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="info-block">
            <h3>New to the Area?</h3>
            <p>
              Welcome to Southwestern Indiana! Whether you are relocating for work, school, or family, we are glad you are here. Registering at a parish is the best way to get connected, receive sacraments, and become part of a faith community. Use our Parish Finder to discover the parish closest to your new home, or call the Catholic Center at <strong>(812) 424-5536</strong> for personal assistance.
            </p>
            <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/parishes/directory" className="btn-gold btn-sm">
                Browse All Parishes
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
              <Link href="/faith/become-catholic" className="btn-navy btn-sm">
                Interested in Becoming Catholic?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
