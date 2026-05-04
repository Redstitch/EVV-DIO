import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cathedral Library & Museum",
  description:
    "Visit the Cathedral Library and Museum at St. Benedict Cathedral in Evansville, Indiana. Explore rare books, liturgical artifacts, and the history of Catholicism in southwestern Indiana.",
};

export default function CathedralLibrary() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Cathedral Library &amp; <em>Museum.</em></h1>
            <p className="deck">A living archive of faith, art, and heritage housed within the walls of St. Benedict Cathedral in Evansville.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Interior of St. Benedict Cathedral, Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── OVERVIEW ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">History Preserved</span>
            <h2 className="section-h2">A Treasury of Catholic Heritage</h2>
            <p className="section-desc">
              The Cathedral Library and Museum preserves and shares the rich Catholic heritage of southwestern Indiana. Located within St. Benedict Cathedral, the collection tells the story of faith, service, and community that has defined this diocese since 1944. Visitors encounter rare theological texts, historic liturgical vestments, sacred art, and documents that trace the spiritual journey of generations.
            </p>
          </div>
        </section>

        {/* ─── CROSS FLOURISH ─── */}
        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── COLLECTIONS & HOURS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Plan Your Visit</span>
            <h2 className="section-h2">What You&rsquo;ll <em>Find</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>The Library Collection</h3>
              <p>
                The library holds thousands of volumes spanning theology, Church history, canon law, spirituality, and Sacred Scripture. Highlights include early editions of papal encyclicals, hand-illuminated prayer books, and a comprehensive collection of diocesan publications dating to the founding of the see.
              </p>
              <p style={{ marginTop: 16 }}>
                Researchers and students are welcome to access the collection for academic and personal study. Reference assistance is available during open hours.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>The Museum Gallery</h3>
              <p>
                The museum features rotating exhibitions alongside permanent displays of liturgical art, vestments, chalices, and reliquaries. Visitors can view original architectural drawings of St. Benedict Cathedral, photographs documenting parish life across the decades, and artifacts from the diocese&rsquo;s founding.
              </p>
              <p style={{ marginTop: 16 }}>
                Guided tours are available for groups by appointment. Self-guided visits are welcome during regular hours.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Hours &amp; Admission</h3>
              <p>
                The Cathedral Library and Museum is open to the public free of charge. Donations are gratefully accepted to support preservation efforts.
              </p>
              <ul>
                <li>Tuesday &ndash; Friday: 10:00 AM &ndash; 4:00 PM</li>
                <li>Saturday: 10:00 AM &ndash; 2:00 PM</li>
                <li>Sunday &amp; Monday: Closed</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                Holiday hours may vary. Please call ahead to confirm availability.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Location &amp; Access</h3>
              <p>
                The library and museum are located within St. Benedict Cathedral at 1328 Lincoln Avenue, Evansville, Indiana. Enter through the main cathedral doors and follow signs to the lower level. The facility is accessible to visitors with mobility needs.
              </p>
              <p style={{ marginTop: 12 }}>
                Free parking is available in the cathedral lot.
              </p>
            </div>
          </div>
        </section>

        {/* ─── QUATREFOIL FLOURISH ─── */}
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

        {/* ─── SPECIAL PROGRAMS ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Engagement</span>
            <h2 className="section-h2">Programs &amp; Events</h2>
            <p className="section-desc">
              Throughout the year, the Cathedral Library and Museum hosts lectures, book discussions, and special exhibitions that explore topics in Church history, sacred art, and Catholic intellectual life. School groups and parish organizations are encouraged to arrange visits for educational programming tailored to their interests.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Come explore &mdash; <em style={{ color: "var(--bgold)" }}>history awaits.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Plan a visit or arrange a group tour of the Cathedral Library and Museum.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact us <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
