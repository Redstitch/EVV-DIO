import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Parish Directory",
  description:
    "Complete directory of all 45 Catholic parishes in the Diocese of Evansville. Addresses, phone numbers, pastors, and Mass times for parishes across Southwestern Indiana.",
};

const allParishes = [
  { name: "Annunciation", city: "Evansville", phone: "(812) 476-3061" },
  { name: "Christ the King", city: "Evansville", phone: "(812) 477-1051" },
  { name: "Corpus Christi", city: "Evansville", phone: "(812) 476-4110" },
  { name: "Good Shepherd", city: "Evansville", phone: "(812) 477-5405" },
  { name: "Holy Cross", city: "Fort Branch", phone: "(812) 753-3548" },
  { name: "Holy Family", city: "Jasper", phone: "(812) 634-2511" },
  { name: "Holy Redeemer", city: "Evansville", phone: "(812) 476-3613" },
  { name: "Holy Rosary", city: "Evansville", phone: "(812) 424-8953" },
  { name: "Holy Spirit", city: "Evansville", phone: "(812) 477-6027" },
  { name: "Immaculate Conception", city: "Celestine", phone: "(812) 482-5553" },
  { name: "Nativity", city: "Evansville", phone: "(812) 424-4020" },
  { name: "Our Lady of Hope", city: "Washington", phone: "(812) 254-3497" },
  { name: "Precious Blood", city: "Jasper", phone: "(812) 482-2992" },
  { name: "Sacred Heart", city: "Vincennes", phone: "(812) 882-0610" },
  { name: "St. Agnes", city: "Uniontown", phone: "(812) 726-4522" },
  { name: "St. Augustine", city: "Leopold", phone: "(812) 843-5036" },
  { name: "St. Benedict Cathedral", city: "Evansville", phone: "(812) 423-4509" },
  { name: "St. Boniface", city: "Evansville", phone: "(812) 423-4509" },
  { name: "St. Celestine", city: "Celestine", phone: "(812) 482-5553" },
  { name: "St. Ferdinand", city: "Ferdinand", phone: "(812) 367-1591" },
  { name: "St. Francis Xavier", city: "Vincennes", phone: "(812) 882-1535" },
  { name: "St. Henry", city: "St. Henry", phone: "(812) 937-4394" },
  { name: "St. Isidore the Farmer", city: "Bristow", phone: "(812) 843-5036" },
  { name: "St. John the Baptist", city: "Newburgh", phone: "(812) 853-5750" },
  { name: "St. John the Evangelist", city: "Daylight", phone: "(812) 963-3526" },
  { name: "St. Joseph", city: "Jasper", phone: "(812) 634-2511" },
  { name: "St. Joseph", city: "Princeton", phone: "(812) 385-2617" },
  { name: "St. Mark", city: "Perry County", phone: "(812) 547-7994" },
  { name: "St. Mary", city: "Huntingburg", phone: "(812) 683-4775" },
  { name: "St. Meinrad", city: "St. Meinrad", phone: "(812) 357-5533" },
  { name: "St. Patrick", city: "Terre Haute", phone: "(812) 232-8404" },
  { name: "St. Paul", city: "Tell City", phone: "(812) 547-7994" },
  { name: "St. Peter", city: "Montgomery", phone: "(812) 486-3519" },
  { name: "St. Philip", city: "Posey County", phone: "(812) 874-2111" },
  { name: "St. Raphael", city: "Dubois", phone: "(812) 678-3083" },
  { name: "St. Wendel", city: "St. Wendel", phone: "(812) 963-3526" },
  { name: "Sts. Peter & Paul", city: "Haubstadt", phone: "(812) 768-6369" },
];

export default function ParishDirectoryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">Parish <em>Directory.</em></h1>
            <p className="deck">A complete listing of all 45 parishes across the Diocese of Evansville.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/white-mass.jpg"
              alt="Catholic Mass celebration"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Map Placeholder */}
        <section className="page-content">
          <div className="cta-block">
            <svg viewBox="0 0 24 24" style={{ width: 48, height: 48, fill: "var(--gold)", margin: "0 auto 16px", display: "block" }} aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <h3>Interactive Parish Map</h3>
            <p>
              Our interactive map is coming soon. In the meantime, browse parishes by deanery below.
            </p>
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

        {/* Directory by Deanery */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <h2 className="section-h2">Browse by Deanery</h2>
            <p className="section-desc">
              Select a deanery to view the full list of parishes, pastors, and contact information.
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <Link href="/parishes/north-deanery" className="interior-card" style={{ textAlign: "center", textDecoration: "none" }}>
              <h3>North Deanery</h3>
              <p style={{ fontSize: 13, marginBottom: 4 }}>Knox, Daviess, Martin</p>
              <p style={{ fontWeight: 600, color: "var(--gold)" }}>12 Parishes</p>
            </Link>
            <Link href="/parishes/south-deanery" className="interior-card" style={{ textAlign: "center", textDecoration: "none" }}>
              <h3>South Deanery</h3>
              <p style={{ fontSize: 13, marginBottom: 4 }}>Vanderburgh, Warrick</p>
              <p style={{ fontWeight: 600, color: "var(--gold)" }}>14 Parishes</p>
            </Link>
            <Link href="/parishes/east-deanery" className="interior-card" style={{ textAlign: "center", textDecoration: "none" }}>
              <h3>East Deanery</h3>
              <p style={{ fontSize: 13, marginBottom: 4 }}>Dubois, Spencer, Perry</p>
              <p style={{ fontWeight: 600, color: "var(--gold)" }}>11 Parishes</p>
            </Link>
            <Link href="/parishes/west-deanery" className="interior-card" style={{ textAlign: "center", textDecoration: "none" }}>
              <h3>West Deanery</h3>
              <p style={{ fontSize: 13, marginBottom: 4 }}>Gibson, Pike, Posey, Crawford</p>
              <p style={{ fontWeight: 600, color: "var(--gold)" }}>8 Parishes</p>
            </Link>
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

        {/* Alphabetical */}
        <section className="page-content">
          <div className="section-head">
            <h2 className="section-h2">All Parishes (A-Z)</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            {allParishes.map((p) => (
              <div key={`${p.name}-${p.city}`} className="interior-card" style={{ cursor: "default" }}>
                <h3>{p.name}</h3>
                <p style={{ fontSize: 13, opacity: 0.6 }}>{p.city}</p>
                <p style={{ fontSize: 13, marginTop: 4 }}>{p.phone}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
