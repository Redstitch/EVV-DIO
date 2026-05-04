import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "College Campus Ministry",
  description:
    "Catholic campus ministry at colleges and universities in the Diocese of Evansville. Mass, fellowship, and faith formation for college students.",
};

export default function CampusMinistryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Campus <em>Ministry.</em></h1>
            <p className="deck">Catholic community and spiritual growth at universities across the diocese.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/confirmation-stmary.jpg"
              alt="Confirmation at St. Mary"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Mission */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2">A Spiritual Home on Campus</h2>
          </div>

          <div className="prose">
            <p>
              College is a time of tremendous growth, new ideas, and important decisions. Campus ministry in the Diocese of Evansville provides Catholic students with a spiritual home away from home, a community of faith that supports them through the joys and challenges of college life.
            </p>
            <p>
              Whether you are a cradle Catholic, returning to the faith, or simply curious, our campus ministers and student communities welcome you. Come as you are.
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

        {/* Campus Communities */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Campus Communities</span>
          <h2 className="section-h2 section-h2-left">Where to Find Us</h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>University of Southern Indiana</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Evansville, Indiana</p>
              <p>
                The Catholic Campus Center at USI hosts weekly Mass, Bible studies, Adoration, social events, and service projects. A full-time campus minister is available for spiritual direction and pastoral support.
              </p>
              <p><strong>Mass:</strong> Sunday 6:00 PM at the campus chapel</p>
              <p><strong>Contact:</strong> campusministry@usi.edu</p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>University of Evansville</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Evansville, Indiana</p>
              <p>
                Catholic students at UE are served through Neu Chapel programs and the Newman Club, which organizes Mass, social events, retreats, and volunteer opportunities throughout the academic year.
              </p>
              <p><strong>Mass:</strong> Sunday 9:00 PM at Neu Chapel</p>
              <p><strong>Contact:</strong> newman@evansville.edu</p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Vincennes University</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>Vincennes, Indiana</p>
              <p>
                Students at Vincennes University are welcomed at Sacred Heart and St. Francis Xavier parishes, which host student-focused events, meals, and faith-sharing groups during the school year.
              </p>
              <p><strong>Mass:</strong> See parish schedules</p>
              <p><strong>Contact:</strong> (812) 882-0610</p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Saint Meinrad Seminary</h3>
              <p style={{ marginBottom: 4, fontSize: 13, opacity: 0.6 }}>St. Meinrad, Indiana</p>
              <p>
                One of the premier Catholic seminaries in the United States, Saint Meinrad Seminary and School of Theology forms future priests, deacons, and lay ministers in the Benedictine tradition.
              </p>
              <p><strong>Daily liturgy available</strong></p>
              <p><strong>Website:</strong> saintmeinrad.edu</p>
            </div>
          </div>
        </section>

        <section className="page-content" style={{ textAlign: "center" }}>
          <Link href="/ministries" className="btn btn-secondary">
            All Ministries
          </Link>
        </section>
      </main>
    </>
  );
}
