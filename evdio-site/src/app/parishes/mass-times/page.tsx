import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mass Times",
  description:
    "Find Mass times at Catholic parishes across the Diocese of Evansville. Daily Mass, weekend Mass, Holy Days, and confession schedules.",
};

export default function MassTimesPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">Mass <em>Times.</em></h1>
            <p className="deck">Find daily, weekend, and Holy Day Mass schedules at parishes across the diocese.</p>
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
        {/* Weekend Mass */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="interior-card" style={{ cursor: "default" }}>
            <h2>Weekend Mass Schedule</h2>
            <p>
              Most parishes in the Diocese of Evansville offer Saturday vigil Masses and Sunday morning Masses. Some parishes also offer Sunday evening Masses. Contact your parish for the most current schedule.
            </p>
            <div className="interior-grid interior-grid-2" style={{ marginTop: 20 }}>
              <div className="info-block">
                <h3>Saturday Vigil</h3>
                <p>Typically 4:00 PM or 5:00 PM. Fulfills the Sunday obligation.</p>
              </div>
              <div className="info-block">
                <h3>Sunday</h3>
                <p>Most parishes offer Masses at 8:00 AM, 10:00 AM, and/or 12:00 PM.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Daily Mass */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="interior-card" style={{ cursor: "default" }}>
            <h2>Daily Mass</h2>
            <p>
              Daily Mass is celebrated Monday through Friday at many parishes, with some also offering Saturday morning Mass. Common times include 7:00 AM, 8:00 AM, and 12:10 PM.
            </p>
            <p>
              The following parishes offer daily Mass on a regular basis:
            </p>
            <div className="interior-grid interior-grid-3" style={{ marginTop: 16 }}>
              {[
                "St. Benedict Cathedral, Evansville",
                "Holy Rosary, Evansville",
                "Annunciation, Evansville",
                "Holy Redeemer, Evansville",
                "St. Joseph, Jasper",
                "Holy Family, Jasper",
                "St. Ferdinand, Ferdinand",
                "St. Meinrad, St. Meinrad",
                "Sts. Peter & Paul, Haubstadt",
                "St. Philip, Posey County",
                "St. Francis Xavier, Vincennes",
                "Good Shepherd, Evansville",
              ].map((parish) => (
                <div key={parish} className="info-block" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: 500 }}>{parish}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Confession */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="interior-card" style={{ cursor: "default" }}>
            <h2>Confession (Sacrament of Reconciliation)</h2>
            <p>
              The Sacrament of Reconciliation is typically available 30 minutes before Saturday vigil Mass at most parishes. Many parishes also offer confession by appointment. Contact your parish office to schedule.
            </p>
            <p>
              During Advent and Lent, communal penance services with individual absolution are offered at parishes across the diocese.
            </p>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Holy Days */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="interior-card" style={{ cursor: "default" }}>
            <h2>Holy Days of Obligation</h2>
            <p>
              In addition to every Sunday, Catholics are obligated to attend Mass on six Holy Days throughout the year. Parishes offer vigil and day-of Masses for each Holy Day.
            </p>
            <ul style={{ marginTop: 12 }}>
              <li><strong>January 1</strong> &mdash; Solemnity of Mary, Mother of God</li>
              <li><strong>Ascension Thursday</strong> &mdash; 40 days after Easter</li>
              <li><strong>August 15</strong> &mdash; Assumption of the Blessed Virgin Mary</li>
              <li><strong>November 1</strong> &mdash; All Saints Day</li>
              <li><strong>December 8</strong> &mdash; Immaculate Conception</li>
              <li><strong>December 25</strong> &mdash; Christmas</li>
            </ul>
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/parishes/watch-mass" className="btn btn-secondary">
              Watch Mass Online
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
