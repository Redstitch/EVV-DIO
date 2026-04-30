import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "West Deanery",
  description:
    "Catholic parishes in the West Deanery of the Diocese of Evansville, serving Gibson, Pike, Posey, and Crawford counties in Southwestern Indiana.",
};

const parishes = [
  { name: "St. Joseph", city: "Princeton", pastor: "Fr. Philip Bowers", phone: "(812) 385-2617", masses: "Sat 5:00 PM, Sun 10:00 AM" },
  { name: "Sts. Peter & Paul", city: "Haubstadt", pastor: "Fr. Sudhakar Bhastati", phone: "(812) 768-6369", masses: "Sat 4:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "St. Philip", city: "Posey County", pastor: "Fr. Gene Schroeder", phone: "(812) 874-2111", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:00 AM" },
  { name: "St. Agnes", city: "Uniontown", pastor: "Fr. Gene Schroeder", phone: "(812) 726-4522", masses: "Sun 8:30 AM" },
  { name: "St. Augustine", city: "Leopold", pastor: "Fr. Adrian Burke, OSB", phone: "(812) 843-5036", masses: "Sun 8:00 AM" },
  { name: "St. Isidore the Farmer", city: "Bristow", pastor: "Fr. Adrian Burke, OSB", phone: "(812) 843-5036", masses: "Sun 10:00 AM" },
  { name: "St. Mark", city: "Perry County", pastor: "Fr. Garrett Braun", phone: "(812) 547-7994", masses: "Sat 4:00 PM, Sun 10:30 AM" },
  { name: "Holy Cross", city: "Fort Branch", pastor: "Fr. Phillip Bowers", phone: "(812) 753-3548", masses: "Sat 4:30 PM, Sun 8:00 AM" },
];

export default function WestDeaneryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">West <em>Deanery.</em></h1>
            <p className="deck">Serving Gibson, Pike, Posey, and Crawford counties in Southwestern Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/blue-mass-cathedral.jpg"
              alt="Cathedral Mass celebration"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="info-block">
            <h3>About the West Deanery</h3>
            <p>
              The West Deanery spans Gibson, Pike, Posey, and Crawford counties along the western and southern edges of the diocese. This largely rural deanery includes historic river towns, farming communities, and some of the most beautiful countryside in Southern Indiana. The parishes of the West Deanery are known for their warm hospitality, strong sense of community, and deep devotion to the traditions of the faith. Many parishes in this deanery share pastors and collaborate closely on ministry and outreach.
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
            <Link href="/parishes" className="btn-ghost-white">
              All Deaneries
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
