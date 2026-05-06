import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ParishMapWrapper } from "@/components/ParishMapWrapper";

export const metadata: Metadata = {
  title: "Parishes & Mass | Diocese of Evansville",
  description:
    "Find a Catholic parish near you in the Diocese of Evansville. 45 parishes across 12 counties in Southwestern Indiana, organized into four deaneries.",
};

export default function ParishesPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Parishes &amp; Mass</p>
            <h1 id="title">Find your <em>parish.</em></h1>
            <p className="deck">
              45 parishes across 12 counties in Southwestern Indiana, united in
              faith and service under four deaneries.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/white-mass.jpg"
              alt="Catholic faithful at Mass in the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── MAP SECTION ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Parish Finder</span>
            <h2 className="section-h2">
              Explore our <em>parishes</em>
            </h2>
            <p className="section-desc">
              Search by name or city, or filter by deanery. Click a pin on the
              map for details.
            </p>
          </div>

          <ParishMapWrapper />
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

        {/* ─── QUICK LINKS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Quick Links</span>
            <h2 className="section-h2">Mass &amp; <em>More</em></h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <Link href="/parishes/mass-times" className="interior-card">
              <h3>Mass Times</h3>
              <p>
                Find daily and weekend Mass schedules, Holy Day schedules, and
                confession times at parishes near you.
              </p>
            </Link>
            <Link href="/parishes/watch-mass" className="interior-card">
              <h3>Watch Mass Online</h3>
              <p>
                Join us for livestreamed Masses when you are unable to attend in
                person. Multiple parishes offer livestreaming.
              </p>
            </Link>
            <Link href="/parishes/directory" className="interior-card">
              <h3>Parish Directory</h3>
              <p>
                A complete listing of all 45 parishes with addresses, phone
                numbers, pastor information, and parish websites.
              </p>
            </Link>
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

        {/* ─── DEANERIES ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Four Deaneries</span>
            <h2 className="section-h2">Explore by <em>Deanery</em></h2>
            <p className="section-desc">
              Our 45 parishes are organized into four deaneries spanning 12
              counties across Southwestern Indiana.
            </p>
          </div>

          <div className="interior-grid interior-grid-2">
            <Link href="/parishes/south-deanery" className="interior-card">
              <h3>South Deanery</h3>
              <p>
                Evansville, Newburgh, Boonville, Daylight — 12 parishes serving
                the heart of the diocese.
              </p>
            </Link>
            <Link href="/parishes/north-deanery" className="interior-card">
              <h3>North Deanery</h3>
              <p>
                Vincennes, Washington, Loogootee, Sullivan — 9 parishes across
                the northern counties.
              </p>
            </Link>
            <Link href="/parishes/east-deanery" className="interior-card">
              <h3>East Deanery</h3>
              <p>
                Jasper, Ferdinand, Huntingburg, Rockport — 12 parishes in Dubois,
                Spencer, and Perry counties.
              </p>
            </Link>
            <Link href="/parishes/west-deanery" className="interior-card">
              <h3>West Deanery</h3>
              <p>
                Princeton, Fort Branch, Haubstadt, Mount Vernon — 13 parishes in
                Gibson, Posey, and Pike counties.
              </p>
            </Link>
          </div>
        </section>

        {/* ─── NEW TO AREA ─── */}
        <section className="page-content bg-eggshell">
          <div className="info-block">
            <h3>New to the Area?</h3>
            <p>
              Welcome to Southwestern Indiana! Whether you are relocating for
              work, school, or family, registering at a parish is the best way to
              get connected, receive sacraments, and become part of a faith
              community. Use the map above to discover the parish closest to your
              new home, or call the Catholic Center at{" "}
              <strong>(812) 424-5536</strong> for personal assistance.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 16 }}>
              <Link href="/parishes/directory" className="btn btn-primary">
                Browse All Parishes <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/faith/become-catholic" className="btn btn-outline">
                Interested in Becoming Catholic?
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Find your community — <em style={{ color: "var(--bgold)" }}>come home.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Every parish in the Diocese of Evansville is ready to welcome you and
            your family. Visit us this Sunday.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/parishes/mass-times" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Find Mass times <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
