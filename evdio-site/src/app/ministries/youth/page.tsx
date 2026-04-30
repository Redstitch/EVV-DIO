import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Youth & Young Adults",
  description:
    "Youth and young adult ministry in the Diocese of Evansville. Programs, retreats, and community for teens and young adults growing in faith.",
};

export default function YouthPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Youth &amp; Young <em>Adults.</em></h1>
            <p className="deck">Encounter Christ. Build community. Discover your purpose.</p>
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
            <h2 className="section-h2">Meeting Young People Where They Are</h2>
          </div>

          <div className="prose">
            <p>
              The Office of Youth and Young Adult Ministry serves teens and young adults (ages 13&ndash;35) across the Diocese of Evansville. We create spaces where young people can encounter Jesus, build genuine friendships, ask honest questions, and discover their unique calling in the Church and the world.
            </p>
            <p>
              From high school retreats and summer camps to young adult small groups and service trips, we meet young people where they are and invite them into a deeper relationship with Christ and his Church.
            </p>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* High School */}
        <section className="page-content">
          <span className="section-tag section-tag-left">High School Ministry</span>
          <h2 className="section-h2 section-h2-left">Programs for Teens</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Youth Encounter Weekends</h3>
              <p>Powerful retreat weekends featuring music, talks by young Catholic speakers, small groups, Adoration, and the sacraments. Held three times per year.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Summer Mission Trips</h3>
              <p>Week-long service trips where teens serve communities in need while deepening their faith through prayer and reflection.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Diocesan Youth Rally</h3>
              <p>An annual gathering bringing together hundreds of Catholic teens from across all four deaneries for worship, speakers, and fellowship.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Young Adults */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Young Adult Ministry (18&ndash;35)</span>
          <h2 className="section-h2 section-h2-left">Community &amp; Formation</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Theology on Tap</h3>
              <p>Casual monthly gatherings in local venues featuring a speaker on a topic of faith, followed by open discussion and fellowship.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Young Adult Small Groups</h3>
              <p>Bible studies, book clubs, and faith-sharing groups meeting weekly at parishes across the diocese.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Service &amp; Social Events</h3>
              <p>Volunteer projects, outdoor adventures, game nights, and pilgrimages that build community and put faith into action.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* CTA */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Get Involved</h3>
            <p>
              Whether you are a teen, a young adult, or a parish volunteer, we would love to connect with you. Reach out to our Youth Ministry Office.
            </p>
            <p><strong>youth@evdio.org | (812) 424-5536</strong></p>
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
