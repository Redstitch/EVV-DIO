import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clergy Directory",
  description:
    "Directory of priests, deacons, and religious serving across the four deaneries of the Catholic Diocese of Evansville.",
};

const deaneries = [
  {
    name: "Evansville Deanery",
    dean: "Very Rev. John Smith, V.F.",
    clergy: [
      { name: "Very Rev. John Smith, V.F.", assignment: "St. Benedict Cathedral", role: "Pastor & Dean" },
      { name: "Rev. Thomas Miller", assignment: "Holy Spirit Parish", role: "Pastor" },
      { name: "Rev. Patrick O\u2019Brien", assignment: "Annunciation Parish", role: "Pastor" },
      { name: "Rev. James Lee", assignment: "Holy Redeemer Parish", role: "Pastor" },
      { name: "Rev. David Nguyen", assignment: "St. Agnes Parish", role: "Pastor" },
      { name: "Rev. Michael Santos", assignment: "Corpus Christi Parish", role: "Parochial Vicar" },
      { name: "Deacon Robert Fischer", assignment: "St. Benedict Cathedral", role: "Permanent Deacon" },
      { name: "Deacon William Kraft", assignment: "Holy Spirit Parish", role: "Permanent Deacon" },
    ],
  },
  {
    name: "East Deanery",
    dean: "Very Rev. Mark Wagner, V.F.",
    clergy: [
      { name: "Very Rev. Mark Wagner, V.F.", assignment: "St. John the Baptist, Newburgh", role: "Pastor & Dean" },
      { name: "Rev. Anthony Volz", assignment: "Holy Cross, Fort Branch", role: "Pastor" },
      { name: "Rev. Luke Henderson", assignment: "St. Ferdinand, Ferdinand", role: "Pastor" },
      { name: "Rev. Christopher Bell", assignment: "St. Meinrad, St. Meinrad", role: "Pastor" },
      { name: "Deacon Paul Mattingly", assignment: "St. John the Baptist, Newburgh", role: "Permanent Deacon" },
    ],
  },
  {
    name: "North Deanery",
    dean: "Very Rev. Andrew Hasenour, V.F.",
    clergy: [
      { name: "Very Rev. Andrew Hasenour, V.F.", assignment: "Holy Family, Jasper", role: "Pastor & Dean" },
      { name: "Rev. Joseph Grundhoefer", assignment: "Precious Blood, Jasper", role: "Pastor" },
      { name: "Rev. Simon Quang", assignment: "St. Celestine, Celestine", role: "Pastor" },
      { name: "Rev. Daniel Steckler", assignment: "St. Joseph, Dale", role: "Pastor" },
      { name: "Deacon Gerald Egler", assignment: "Holy Family, Jasper", role: "Permanent Deacon" },
    ],
  },
  {
    name: "West Deanery",
    dean: "Very Rev. Kenneth Betz, V.F.",
    clergy: [
      { name: "Very Rev. Kenneth Betz, V.F.", assignment: "St. Philip, Mt. Vernon", role: "Pastor & Dean" },
      { name: "Rev. Bernard Etienne", assignment: "St. Francis Xavier, Vincennes", role: "Pastor" },
      { name: "Rev. Nathan Folz", assignment: "Sacred Heart, Schnellville", role: "Pastor" },
      { name: "Deacon Thomas Yaggi", assignment: "St. Philip, Mt. Vernon", role: "Permanent Deacon" },
    ],
  },
];

const retiredClergy = [
  { name: "Rev. Msgr. Robert Sutter", status: "Pastor Emeritus" },
  { name: "Rev. Msgr. Paul Engel", status: "Retired" },
  { name: "Rev. Donald Ackerman", status: "Retired" },
  { name: "Rev. Robert Dillard", status: "Retired" },
];

export default function ClergyDirectoryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Clergy <em>Directory.</em></h1>
            <p className="deck">Priests, deacons, and religious serving across the four deaneries of our diocese.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="Clergy of the diocese"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <div className="page-content">
          <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
            <span className="section-tag section-tag-left">Active Clergy</span>
            <h2 className="section-h2 section-h2-left">By Deanery</h2>
          </div>
          <p style={{ marginBottom: 40, maxWidth: 680 }}>
            The Diocese of Evansville is organized into four deaneries. Each deanery is led by a vicar forane (dean) who coordinates pastoral activity among the parishes in that region.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {deaneries.map((deanery) => (
              <div key={deanery.name}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid rgba(183,141,58,0.2)" }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, color: "var(--navy)", marginBottom: 2 }}>{deanery.name}</h3>
                    <p style={{ fontSize: 12, color: "var(--muted)" }}>Dean: {deanery.dean}</p>
                  </div>
                </div>

                <div className="interior-grid interior-grid-3">
                  {deanery.clergy.map((person) => (
                    <div
                      key={person.name + person.assignment}
                      className="info-block"
                    >
                      <h3 style={{ fontSize: 16 }}>{person.name}</h3>
                      <p style={{ fontSize: 12, fontWeight: 600, color: "var(--blue)", marginBottom: 4 }}>{person.role}</p>
                      <p style={{ fontSize: 12, color: "var(--muted)" }}>{person.assignment}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Retired Clergy */}
        <div className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Honored Service</span>
            <h2 className="section-h2">Retired Clergy</h2>
          </div>
          <p style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            We are grateful for the decades of faithful service these priests have given to our diocese.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {retiredClergy.map((person) => (
              <div key={person.name} className="interior-card" style={{ cursor: "default", textAlign: "center" }}>
                <h3>{person.name}</h3>
                <p style={{ fontSize: 12 }}>{person.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="page-content">
          <div className="cta-block">
            <h3>Considering a Vocation?</h3>
            <p>
              If you or someone you know is discerning a vocation to the priesthood or diaconate, we would love to walk with you on that journey.
            </p>
            <Link href="/about/contact" className="btn btn-primary">
              Contact the Office of Vocations
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
