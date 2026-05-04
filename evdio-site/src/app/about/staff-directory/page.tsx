import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Staff Directory",
  description:
    "Find contact information for staff members at the Catholic Center of the Diocese of Evansville, serving our parishes, schools, and ministries.",
};

const departments = [
  {
    name: "Office of the Bishop",
    staff: [
      { name: "Bishop Joseph M. Siegel", title: "Bishop of Evansville", phone: "(812) 424-5536", email: "bishop@evdio.org" },
      { name: "Michelle Keller", title: "Executive Assistant to the Bishop", phone: "(812) 424-5536 ext. 201", email: "mkeller@evdio.org" },
    ],
  },
  {
    name: "Office of the Vicar General",
    staff: [
      { name: "Very Rev. Alex Zenthoefer", title: "Vicar General", phone: "(812) 424-5536 ext. 210", email: "azenthoefer@evdio.org" },
    ],
  },
  {
    name: "Chancellery",
    staff: [
      { name: "Rev. Msgr. Steven Engber", title: "Chancellor", phone: "(812) 424-5536 ext. 215", email: "sengber@evdio.org" },
      { name: "Janet Rodriguez", title: "Archives & Records Coordinator", phone: "(812) 424-5536 ext. 216", email: "jrodriguez@evdio.org" },
    ],
  },
  {
    name: "Office of Catholic Schools",
    staff: [
      { name: "Dr. Daryl Hagan", title: "Superintendent of Catholic Schools", phone: "(812) 424-5536 ext. 300", email: "dhagan@evdio.org" },
      { name: "Amy Smith", title: "Assistant Superintendent", phone: "(812) 424-5536 ext. 301", email: "asmith@evdio.org" },
      { name: "Mark Thompson", title: "Director of School Finance", phone: "(812) 424-5536 ext. 305", email: "mthompson@evdio.org" },
    ],
  },
  {
    name: "Finance Office",
    staff: [
      { name: "Tim McGuire", title: "Chief Financial Officer", phone: "(812) 424-5536 ext. 250", email: "tmcguire@evdio.org" },
      { name: "Lisa Chen", title: "Controller", phone: "(812) 424-5536 ext. 251", email: "lchen@evdio.org" },
      { name: "David Murray", title: "CMA Coordinator", phone: "(812) 424-5536 ext. 255", email: "dmurray@evdio.org" },
    ],
  },
  {
    name: "Office of Communications",
    staff: [
      { name: "Sarah Weber", title: "Director of Communications", phone: "(812) 424-5536 ext. 270", email: "sweber@evdio.org" },
      { name: "James Patterson", title: "Editor, The Message", phone: "(812) 424-5536 ext. 271", email: "jpatterson@evdio.org" },
      { name: "Rachel Davis", title: "Digital Media Coordinator", phone: "(812) 424-5536 ext. 272", email: "rdavis@evdio.org" },
    ],
  },
  {
    name: "Catholic Charities",
    staff: [
      { name: "Maria Gonzalez", title: "Director of Catholic Charities", phone: "(812) 424-5536 ext. 400", email: "mgonzalez@evdio.org" },
      { name: "Robert Williams", title: "Refugee Resettlement Coordinator", phone: "(812) 424-5536 ext. 405", email: "rwilliams@evdio.org" },
    ],
  },
  {
    name: "Office of Catechesis & Evangelization",
    staff: [
      { name: "Teresa Burke", title: "Director of Catechesis", phone: "(812) 424-5536 ext. 320", email: "tburke@evdio.org" },
      { name: "Michael Harris", title: "Youth & Young Adult Ministry Director", phone: "(812) 424-5536 ext. 325", email: "mharris@evdio.org" },
    ],
  },
  {
    name: "Office of Worship",
    staff: [
      { name: "Sr. Mary Catherine, OSB", title: "Director of Worship", phone: "(812) 424-5536 ext. 340", email: "worship@evdio.org" },
    ],
  },
  {
    name: "Human Resources",
    staff: [
      { name: "Jennifer Walsh", title: "Director of Human Resources", phone: "(812) 424-5536 ext. 230", email: "jwalsh@evdio.org" },
    ],
  },
];

export default function StaffDirectoryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Staff <em>Directory.</em></h1>
            <p className="deck">Contact information for Catholic Center staff serving our diocese.</p>
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
        <div className="page-content">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 40 }}>
            <div>
              <div className="section-head" style={{ textAlign: "left", marginBottom: 8 }}>
                <span className="section-tag">Catholic Center</span>
                <h2 className="section-h2" style={{ marginBottom: 8 }}>Our Team</h2>
              </div>
              <p style={{ fontSize: 14 }}>
                4200 N. Kentucky Ave., Evansville, IN 47711 &middot; <a href="tel:8124245536" style={{ color: "var(--blue)", fontWeight: 600 }}>(812) 424-5536</a>
              </p>
            </div>
            <p style={{ fontSize: 12, color: "var(--muted)", maxWidth: 280 }}>
              Office hours: Monday&ndash;Friday, 8:00 a.m.&ndash;4:30 p.m. (ET)
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {departments.map((dept) => (
              <div key={dept.name}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--navy)", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid rgba(183,141,58,0.2)" }}>
                  {dept.name}
                </h3>
                <div className="interior-grid interior-grid-2">
                  {dept.staff.map((person) => (
                    <div
                      key={person.email}
                      className="info-block"
                      style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{ fontSize: 16 }}>{person.name}</h3>
                        <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>{person.title}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          <a href={`mailto:${person.email}`} style={{ fontSize: 12, color: "var(--blue)" }}>
                            {person.email}
                          </a>
                          <a href={`tel:${person.phone.replace(/[^0-9+]/g, "")}`} style={{ fontSize: 12, color: "var(--muted)" }}>
                            {person.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Looking for Clergy?</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Visit our Clergy Directory for contact information for priests, deacons, and religious serving across the diocese.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about/clergy-directory" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Clergy Directory <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
