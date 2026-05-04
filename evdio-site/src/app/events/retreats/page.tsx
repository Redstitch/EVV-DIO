import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retreats",
  description:
    "Catholic retreats at the Sarto Retreat Center and other locations across the Diocese of Evansville. Men's, women's, youth, and couples retreats.",
};

const retreats = [
  { title: "Men's Silent Retreat", dates: "April 18-20, 2026", director: "Fr. Thomas Haan", description: "A weekend of silence, prayer, and reflection for men seeking to deepen their relationship with Christ. Includes directed meditation, access to the sacraments, and optional spiritual direction.", type: "Men" },
  { title: "Women's Spring Retreat", dates: "May 1-3, 2026", director: "Sr. Maria Grace, OSB", description: "An invitation for women of all ages to encounter the joy and peace of the Risen Lord. Talks, small group sharing, Adoration, and time for personal prayer.", type: "Women" },
  { title: "Couples Enrichment Weekend", dates: "May 15-17, 2026", director: "Deacon Mark & Lisa Thompson", description: "Strengthen your marriage through guided conversations, prayer as a couple, and presentations on communication, forgiveness, and growing together in faith.", type: "Couples" },
  { title: "Young Adult Encounter", dates: "June 5-7, 2026", director: "Campus Ministry Team", description: "For adults ages 18-35 seeking meaning, community, and a deeper faith. Music, testimonies, Adoration, and small group discussions in a welcoming environment.", type: "Young Adults" },
  { title: "Priests' Annual Retreat", dates: "June 15-19, 2026", director: "Bishop Joseph M. Siegel", description: "The annual gathering of diocesan priests for fraternity, prayer, and spiritual renewal under the guidance of the Bishop.", type: "Clergy" },
  { title: "High School Summer Retreat", dates: "July 10-12, 2026", director: "Youth Ministry Office", description: "A dynamic weekend for high school students featuring praise and worship, speakers, small groups, outdoor activities, and encounters with the sacraments.", type: "Youth" },
];

export default function RetreatsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">EVENTS</p>
            <h1 id="title"><em>Retreats.</em></h1>
            <p className="deck">Step away from the everyday and encounter God in a deeper way.</p>
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
        {/* Sarto Retreat Center */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "start" }}>
            <div>
              <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
                <span className="section-tag" style={{ marginInline: 0 }}>Our Retreat Home</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>Sarto Retreat Center</h2>
              </div>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
                Nestled in the rolling hills of Southwestern Indiana, the Sarto Retreat Center has been a place of spiritual renewal for Catholics across the diocese for decades. Named after Pope St. Pius X (Giuseppe Sarto), the center offers a peaceful setting for prayer, reflection, and encounter with God.
              </p>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>
                The center accommodates groups of up to 60 overnight guests and offers a chapel, conference rooms, dining facilities, and beautiful grounds for walking and prayer. Whether you are seeking a personal day of reflection or a weekend group retreat, Sarto provides the space and hospitality you need.
              </p>
              <Link href="/events/spaces" className="btn-gold">
                Reserve a Space
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Contact Information</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "var(--muted)", marginTop: 16 }}>
                <div>
                  <strong style={{ color: "var(--navy)", display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 2 }}>Address</strong>
                  Sarto Retreat Center<br />4200 Kentucky Avenue<br />Evansville, IN 47714
                </div>
                <div>
                  <strong style={{ color: "var(--navy)", display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 2 }}>Phone</strong>
                  (812) 464-1042
                </div>
                <div>
                  <strong style={{ color: "var(--navy)", display: "block", fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 2 }}>Email</strong>
                  retreats@evdio.org
                </div>
              </div>
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

        {/* Upcoming Retreats */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Coming Up</span>
            <h2 className="section-h2">Upcoming Retreats</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            {retreats.map((r) => (
              <div key={r.title} className="interior-card" style={{ cursor: "default", display: "flex", flexDirection: "column" }}>
                <span style={{ display: "inline-block", background: "rgba(196,164,105,0.12)", color: "var(--dgold)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", padding: "5px 14px", borderRadius: 20, alignSelf: "flex-start", marginBottom: 16 }}>
                  {r.type}
                </span>
                <h3>{r.title}</h3>
                <p style={{ fontSize: 13, color: "var(--blue)", fontWeight: 600, marginBottom: 4 }}>{r.dates}</p>
                <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 12 }}>Director: {r.director}</p>
                <p style={{ flex: 1 }}>{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Private Retreats CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Private &amp; Group Retreats</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            The Sarto Retreat Center is available for parish groups, school faculties, ministry teams, and individuals seeking a personal retreat. Contact us to plan your retreat.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="mailto:retreats@evdio.org" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Inquire About a Retreat <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
