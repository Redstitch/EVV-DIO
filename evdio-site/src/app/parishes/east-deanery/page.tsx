import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "East Deanery",
  description:
    "Catholic parishes in the East Deanery of the Diocese of Evansville, serving Dubois, Spencer, and Perry counties in Southwestern Indiana.",
};

const parishes = [
  { name: "St. Joseph", city: "Jasper", pastor: "Fr. Peter Balili", phone: "(812) 634-2511", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "Holy Family", city: "Jasper", pastor: "Fr. Peter Balili", phone: "(812) 634-2511", masses: "Sun 9:00 AM" },
  { name: "Precious Blood", city: "Jasper", pastor: "Fr. Mark Kurzendoerfer", phone: "(812) 482-2992", masses: "Sat 4:00 PM, Sun 7:30 AM & 10:00 AM" },
  { name: "St. Ferdinand", city: "Ferdinand", pastor: "Fr. Michael Madden, OSB", phone: "(812) 367-1591", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "St. Meinrad", city: "St. Meinrad", pastor: "Fr. Lorenzo Ato, OSB", phone: "(812) 357-5533", masses: "Sun 9:30 AM" },
  { name: "St. Henry", city: "St. Henry", pastor: "Fr. Thomas Lueken", phone: "(812) 937-4394", masses: "Sat 4:00 PM, Sun 9:30 AM" },
  { name: "St. Raphael", city: "Dubois", pastor: "Fr. Thomas Lueken", phone: "(812) 678-3083", masses: "Sun 8:00 AM" },
  { name: "Immaculate Conception", city: "Celestine", pastor: "Fr. Gerald Burkert", phone: "(812) 482-5553", masses: "Sat 5:00 PM, Sun 10:00 AM" },
  { name: "St. Celestine", city: "Celestine", pastor: "Fr. Gerald Burkert", phone: "(812) 482-5553", masses: "Sun 8:00 AM" },
  { name: "St. Mary", city: "Huntingburg", pastor: "Fr. Nicholas Keucher", phone: "(812) 683-4775", masses: "Sat 4:30 PM, Sun 9:00 AM" },
  { name: "St. Paul", city: "Tell City", pastor: "Fr. Adrian Burke, OSB", phone: "(812) 547-7994", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
];

export default function EastDeaneryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">East <em>Deanery.</em></h1>
            <p className="deck">Serving Dubois, Spencer, and Perry counties, rich in Catholic heritage and tradition.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Cathedral interior"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="info-block">
            <h3>About the East Deanery</h3>
            <p>
              The East Deanery covers Dubois, Spencer, and Perry counties and is one of the most distinctively Catholic regions in the United States. The area was settled by German Catholic immigrants in the 19th century, and their legacy lives on in thriving parishes, a strong Catholic school system, and the Benedictine communities at Saint Meinrad Archabbey and the Monastery of the Immaculate Conception in Ferdinand. Jasper, the county seat of Dubois County, is often cited as one of the most Catholic cities in the country.
            </p>
          </div>

          <div className="section-head">
            <span className="section-tag">DIRECTORY</span>
            <h2 className="section-h2">Parishes ({parishes.length})</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            {parishes.map((p) => (
              <div
                key={`${p.name}-${p.city}`}
                className="interior-card"
                style={{ cursor: "default" }}
              >
                <h3>{p.name}</h3>
                <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 12 }}>{p.city}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: "var(--muted)" }}>
                  <div><strong style={{ color: "var(--navy)" }}>Pastor:</strong> {p.pastor}</div>
                  <div><strong style={{ color: "var(--navy)" }}>Phone:</strong> {p.phone}</div>
                  <div><strong style={{ color: "var(--navy)" }}>Mass:</strong> {p.masses}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/parishes/directory" className="btn-gold">
              Full Parish Directory
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link href="/parishes" className="btn btn-outline">
              All Deaneries
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
