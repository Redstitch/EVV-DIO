import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Men's Ministry",
  description:
    "Catholic men's ministry in the Diocese of Evansville. Retreats, fellowship, and formation for men growing as fathers, husbands, and leaders in faith.",
};

export default function MensMinistryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Men&rsquo;s <em>Ministry.</em></h1>
            <p className="deck">Calling men to lead with faith, serve with courage, and grow in holiness.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community service"
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
            <h2 className="section-h2">Faith, Fraternity &amp; Formation</h2>
          </div>

          <div className="prose">
            <p>
              The Men&rsquo;s Ministry of the Diocese of Evansville exists to help Catholic men grow in their faith, strengthen their families, and serve their communities. We believe that when men encounter Christ and commit to lives of prayer, sacrifice, and integrity, the impact reaches far beyond themselves, transforming homes, parishes, and workplaces.
            </p>
            <p>
              Through retreats, small groups, conferences, and acts of service, we provide the fraternity and formation that men need to live out their vocations as Catholic fathers, husbands, sons, and brothers.
            </p>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Programs */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Programs</span>
          <h2 className="section-h2 section-h2-left">Opportunities for Men</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Annual Men&rsquo;s Conference</h3>
              <p>A full-day event featuring national Catholic speakers, worship, Adoration, and the Sacrament of Reconciliation. Held each fall at the Catholic Center.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>That Man Is You!</h3>
              <p>A parish-based interactive program combining Scripture, solid teaching, and small group discussion to help men become better husbands, fathers, and leaders.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Silent Retreats</h3>
              <p>Weekend retreat experiences at the Sarto Retreat Center that offer men space for silence, prayer, and encounter with the Lord.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Service Projects</h3>
              <p>Hands-on service opportunities including home repair for elderly parishioners, food drives, and community volunteer days.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Knights of Columbus</h3>
              <p>Councils throughout the diocese offer men opportunities for fraternity, charitable works, and defense of the faith. Contact your parish for local council information.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Father-Son Events</h3>
              <p>Outdoor adventures, sports tournaments, and prayer experiences designed to strengthen the bond between fathers and sons in the context of faith.</p>
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
