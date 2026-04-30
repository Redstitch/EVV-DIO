import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Church Calendar",
  description:
    "Follow the liturgical calendar of the Catholic Church in the Diocese of Evansville. View seasons, feast days, holy days of obligation, and special observances.",
};

export default function Calendar() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Church <em>Calendar.</em></h1>
            <p className="deck">The liturgical calendar guides the Church through the mysteries of Christ&#8217;s life each year, from Advent through Ordinary Time.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/evigil-1.jpg"
              alt="Easter Vigil in the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── LITURGICAL SEASONS ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">The Liturgical Year</span>
            <h2 className="section-h2">Seasons of the Church</h2>
            <p className="section-desc">
              The Catholic liturgical year unfolds the whole mystery of Christ, from His Incarnation through His Ascension, Pentecost, and the expectation of His return in glory.
            </p>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default", borderTop: "4px solid #5B3A8C" }}>
              <h3>Advent</h3>
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dgold)", marginBottom: 8 }}>Four weeks before Christmas</p>
              <p>A season of joyful anticipation as we prepare for the coming of Christ at Christmas and His second coming at the end of time. The liturgical color is violet.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default", borderTop: "4px solid var(--dgold)" }}>
              <h3>Christmas</h3>
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dgold)", marginBottom: 8 }}>Dec 25 through the Baptism of the Lord</p>
              <p>We celebrate the Incarnation &mdash; God becoming human in the person of Jesus Christ. The liturgical color is white or gold.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default", borderTop: "4px solid #2E7D32" }}>
              <h3>Ordinary Time (I)</h3>
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dgold)", marginBottom: 8 }}>After Epiphany through Ash Wednesday</p>
              <p>A brief period of Ordinary Time focused on Christ&#8217;s public ministry. The liturgical color is green, symbolizing hope and growth.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default", borderTop: "4px solid #5B3A8C" }}>
              <h3>Lent</h3>
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dgold)", marginBottom: 8 }}>Ash Wednesday through Holy Thursday</p>
              <p>Forty days of prayer, fasting, and almsgiving in preparation for Easter. A season of conversion and renewal. The liturgical color is violet.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default", borderTop: "4px solid var(--dgold)" }}>
              <h3>Easter</h3>
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dgold)", marginBottom: 8 }}>Easter Sunday through Pentecost (50 days)</p>
              <p>The most joyful season of the Church year, celebrating Christ&#8217;s Resurrection from the dead. The liturgical color is white or gold.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default", borderTop: "4px solid #2E7D32" }}>
              <h3>Ordinary Time (II)</h3>
              <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--dgold)", marginBottom: 8 }}>After Pentecost through the Solemnity of Christ the King</p>
              <p>The longest season of the year, focused on the teachings and miracles of Christ. We grow in our discipleship as we await the coming of the Kingdom.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── HOLY DAYS OF OBLIGATION ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Holy Days of Obligation</span>
            <h2 className="section-h2">Days When Catholics Must Attend Mass</h2>
            <p className="section-desc">
              In addition to every Sunday, Catholics in the United States are obligated to attend Mass on these holy days.
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>January 1 &mdash; Solemnity of Mary, Mother of God</h3>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>40 Days After Easter &mdash; Ascension of the Lord</h3>
              <p>Observed on a Thursday or transferred to the following Sunday depending on the diocese.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>August 15 &mdash; Assumption of the Blessed Virgin Mary</h3>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>November 1 &mdash; All Saints&#8217; Day</h3>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>December 8 &mdash; Immaculate Conception of the Blessed Virgin Mary</h3>
              <p>Patronal feast of the United States.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>December 25 &mdash; The Nativity of the Lord (Christmas)</h3>
            </div>
          </div>

          <div className="info-block" style={{ marginTop: 32 }}>
            <p>
              <strong>Note:</strong> When a holy day falls on a Saturday or Monday, the obligation to attend Mass may be lifted by the bishops&rsquo; conference. Check with your parish for specific schedules each year.
            </p>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── KEY DATES ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">2026 Key Dates</span>
            <h2 className="section-h2">Important Dates This Year</h2>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            {[
              { month: "Feb", day: "18", title: "Ash Wednesday" },
              { month: "Mar", day: "29", title: "Palm Sunday" },
              { month: "Apr", day: "2", title: "Holy Thursday" },
              { month: "Apr", day: "3", title: "Good Friday" },
              { month: "Apr", day: "5", title: "Easter Sunday" },
              { month: "May", day: "14", title: "Ascension of the Lord" },
              { month: "May", day: "24", title: "Pentecost Sunday" },
              { month: "Jun", day: "14", title: "Corpus Christi" },
              { month: "Nov", day: "29", title: "First Sunday of Advent" },
            ].map((d) => (
              <div className="interior-card" key={d.title} style={{ cursor: "default", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ background: "var(--navy)", borderRadius: 8, width: 56, height: 56, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--dgold)", textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1 }}>{d.month}</span>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1, marginTop: 2 }}>{d.day}</span>
                </div>
                <h3 style={{ margin: 0 }}>{d.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Find Mass Times Near You</h3>
            <p>
              Check with your local parish for Mass schedules, including vigil Masses for Sundays and holy days of obligation.
            </p>
            <Link href="/parishes" className="btn btn-primary">
              Find a Parish
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
