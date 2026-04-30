import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Confirmation",
  description:
    "Learn about the Sacrament of Confirmation in the Diocese of Evansville. Preparation for teens and adults, choosing a sponsor, and what to expect.",
};

export default function Confirmation() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title"><em>Confirmation.</em></h1>
            <p className="deck">Through Confirmation, the baptized are more perfectly bound to the Church and enriched with a special strength of the Holy Spirit.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/confirmation-stmary.jpg"
              alt="Young Catholics at Confirmation at St. Mary Parish."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── TEACHING ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Sealed with the Spirit</span>
            <h2 className="section-h2">Strengthened for Mission</h2>
            <p className="section-desc">
              Confirmation completes the grace of Baptism. Through the anointing with Sacred Chrism and the laying on of hands by the bishop, the Holy Spirit strengthens us to spread and defend the faith by word and action, to confess the name of Christ boldly, and never to be ashamed of the Cross.
            </p>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.&rdquo;
            <cite>Acts 1:8</cite>
          </blockquote>
        </section>

        {/* ─── GIFTS OF THE SPIRIT ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">The Seven Gifts</span>
            <h2 className="section-h2">Gifts of the Holy Spirit</h2>
            <p className="section-desc">
              In Confirmation, the Holy Spirit bestows seven gifts that empower us to live as faithful disciples of Christ.
            </p>
          </div>

          <div className="interior-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", marginTop: 32 }}>
            {["Wisdom", "Understanding", "Counsel", "Fortitude", "Knowledge", "Piety", "Fear of the Lord"].map(
              (gift) => (
                <div className="interior-card" key={gift} style={{ cursor: "default", textAlign: "center" }}>
                  <h3>{gift}</h3>
                </div>
              )
            )}
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── PREPARATION ─── */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2">
            {/* Teens */}
            <div className="interior-card" style={{ cursor: "default" }}>
              <span className="section-tag section-tag-left" style={{ marginBottom: 12 }}>Teens</span>
              <h3>Teen Confirmation</h3>
              <p>
                In the Diocese of Evansville, teens typically receive Confirmation during high school. Preparation programs vary by parish but generally span one to two years and include catechesis, service projects, retreats, and spiritual mentoring.
              </p>
              <ul>
                <li>Participate in your parish&#8217;s Confirmation preparation program.</li>
                <li>Choose a Confirmation sponsor who is a confirmed, practicing Catholic.</li>
                <li>Select a Confirmation name &mdash; a saint whose life inspires you.</li>
                <li>Complete required service hours as an expression of faith in action.</li>
                <li>Attend a Confirmation retreat for spiritual preparation.</li>
              </ul>
            </div>

            {/* Adults */}
            <div className="interior-card" style={{ cursor: "default" }}>
              <span className="section-tag section-tag-left" style={{ marginBottom: 12 }}>Adults</span>
              <h3>Adult Confirmation</h3>
              <p>
                If you are an adult who was baptized Catholic but never received Confirmation, it is never too late. Many parishes offer adult Confirmation preparation, often in conjunction with the OCIA process or as a separate program.
              </p>
              <ul>
                <li>Contact your parish to learn about adult Confirmation preparation.</li>
                <li>Gather a copy of your baptismal certificate from the parish where you were baptized.</li>
                <li>Adult Confirmation is often celebrated by the bishop at a special liturgy.</li>
                <li>Preparation may be brief if you are already active in your faith life.</li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <Link href="/faith/become-catholic" className="read-link">
                  Learn about OCIA for adults &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── SPONSOR INFO ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Choosing a Sponsor</span>
            <h2 className="section-h2">Your Confirmation Sponsor</h2>
          </div>

          <div className="interior-card" style={{ cursor: "default", maxWidth: 720, margin: "0 auto" }}>
            <p>
              A Confirmation sponsor serves as a spiritual guide and role model. They stand with the candidate during the sacrament and commit to helping them live out their Catholic faith. Ideally, one of the candidate&rsquo;s baptismal godparents serves as the Confirmation sponsor, but another qualified person may be chosen.
            </p>
            <h4 style={{ fontWeight: 600, marginTop: 20, marginBottom: 10 }}>A sponsor must:</h4>
            <ul>
              <li>Be at least 16 years old and have received Baptism, Confirmation, and Eucharist.</li>
              <li>Be a practicing Catholic who attends Mass regularly.</li>
              <li>Not be the candidate&#8217;s parent.</li>
              <li>Be willing to support the candidate&#8217;s spiritual growth.</li>
            </ul>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Begin Your Confirmation Journey</h3>
            <p>
              Contact your parish to learn about Confirmation preparation programs. Bishop Siegel celebrates Confirmation at parishes across all four deaneries of the diocese each year.
            </p>
            <Link href="/parishes" className="btn btn-primary">
              Find Your Parish
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
