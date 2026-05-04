import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Watch Mass Online",
  description:
    "Watch Catholic Mass online from parishes in the Diocese of Evansville. Livestreamed and recorded Masses for the homebound and those unable to attend in person.",
};

const streams = [
  { parish: "St. Benedict Cathedral", location: "Evansville", schedule: "Sunday 10:30 AM", platform: "YouTube & Facebook", link: "https://youtube.com" },
  { parish: "Holy Rosary", location: "Evansville", schedule: "Sunday 10:00 AM", platform: "Facebook Live", link: "https://facebook.com" },
  { parish: "St. Joseph", location: "Jasper", schedule: "Saturday 5:00 PM, Sunday 8:00 AM & 10:30 AM", platform: "YouTube", link: "https://youtube.com" },
  { parish: "Annunciation", location: "Evansville", schedule: "Sunday 9:00 AM", platform: "Parish Website", link: "https://annunciationevansville.org" },
  { parish: "Holy Family", location: "Jasper", schedule: "Sunday 10:00 AM", platform: "Facebook Live", link: "https://facebook.com" },
  { parish: "St. Meinrad", location: "St. Meinrad", schedule: "Daily (Archabbey schedule)", platform: "YouTube", link: "https://youtube.com" },
];

export default function WatchMassPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">Watch Mass <em>Online.</em></h1>
            <p className="deck">Join us in worship from wherever you are. Livestreamed Masses from parishes across the diocese.</p>
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
        {/* About */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="interior-card" style={{ cursor: "default" }}>
            <h2>About Online Mass</h2>
            <p>
              While nothing replaces the grace of attending Mass in person, we understand that illness, mobility challenges, travel, and other circumstances may prevent you from being physically present. Several parishes in the Diocese of Evansville offer livestreamed Masses so you can participate in worship from your home.
            </p>
            <div className="info-block" style={{ borderLeft: "4px solid var(--gold)", marginTop: 20 }}>
              <p>
                <strong>Note:</strong> Watching Mass online does not fulfill the Sunday obligation for those who are able to attend in person. If you are homebound or ill, please contact your parish about receiving Communion from an Extraordinary Minister.
              </p>
            </div>
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

        {/* Livestreaming Parishes */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <h2 className="section-h2">Livestreaming Parishes</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            {streams.map((s) => (
              <div key={s.parish} className="interior-card" style={{ cursor: "default" }}>
                <h3>{s.parish}</h3>
                <p style={{ fontSize: 13, opacity: 0.6, marginBottom: 12 }}>{s.location}</p>
                <p><strong>Schedule:</strong> {s.schedule}</p>
                <p><strong>Platform:</strong> {s.platform}</p>
                <div style={{ marginTop: 16 }}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="read-link">
                    Watch Live &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* National Resources CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>National Catholic Resources</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Additional online Mass options are available through national Catholic broadcasters.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://www.catholictv.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>CatholicTV <span className="arrow" aria-hidden="true">→</span></a>
            <a href="https://www.ewtn.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: "rgba(238,218,179,0.3)", color: "var(--cream)" }}>EWTN <span className="arrow" aria-hidden="true">→</span></a>
            <a href="https://www.wordonfire.org" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: "rgba(238,218,179,0.3)", color: "var(--cream)" }}>Word on Fire <span className="arrow" aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
