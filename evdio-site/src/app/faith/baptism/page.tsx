import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Baptism",
  description:
    "Learn about the Sacrament of Baptism in the Diocese of Evansville. Find information on infant baptism, adult baptism through OCIA, and how to prepare.",
};

export default function Baptism() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title"><em>Baptism.</em></h1>
            <p className="deck">The Sacrament of Baptism is the gateway to life in the Spirit and the door that gives access to the other sacraments.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/blue-mass-cathedral.jpg"
              alt="St. Benedict Cathedral during a liturgical celebration."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── TEACHING ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">The First Sacrament</span>
            <h2 className="section-h2">Born of Water and Spirit</h2>
            <p className="section-desc">
              Through Baptism, we are freed from sin, reborn as children of God, and incorporated into the Church. Baptism imprints an indelible spiritual mark on the soul, signifying that we belong to Christ forever. It is the foundation of the entire Christian life.
            </p>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;
            <cite>Matthew 28:19</cite>
          </blockquote>
        </section>

        {/* ─── TYPES ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="interior-grid interior-grid-2">
            {/* Infant Baptism */}
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Infant Baptism</h3>
              <p>
                The Catholic Church baptizes infants because Baptism is a gift of grace that does not depend on human merit. Parents and godparents promise to raise the child in the Catholic faith.
              </p>
              <h4 style={{ fontWeight: 600, marginTop: 20, marginBottom: 10 }}>To prepare for your child&rsquo;s Baptism:</h4>
              <ul>
                <li>Contact your parish as early as possible, ideally during pregnancy or shortly after birth.</li>
                <li>Attend a Baptism preparation class offered by your parish.</li>
                <li>Choose godparents who are confirmed, practicing Catholics at least 16 years of age.</li>
                <li>Gather required documents, including a copy of the child&#8217;s birth certificate.</li>
              </ul>
            </div>

            {/* Adult Baptism */}
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Adult Baptism</h3>
              <p>
                Adults who have never been baptized receive the sacrament through the Order of Christian Initiation of Adults (OCIA). This journey of faith typically culminates at the Easter Vigil, when adults receive Baptism, Confirmation, and Eucharist together.
              </p>
              <h4 style={{ fontWeight: 600, marginTop: 20, marginBottom: 10 }}>What to expect:</h4>
              <ul>
                <li>A welcoming community that will walk with you at your own pace.</li>
                <li>Weekly sessions exploring Catholic teaching, Scripture, and prayer.</li>
                <li>A sponsor from the parish to support you throughout the process.</li>
                <li>The Rite of Election celebrated with Bishop Siegel at St. Benedict Cathedral.</li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <Link href="/faith/become-catholic" className="read-link">
                  Learn more about OCIA &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── FAQ ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-h2">Frequently Asked Questions</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>When can my child be baptized?</h3>
              <p>Baptisms are typically celebrated on Sundays after Mass or at a designated time set by the parish. Contact your parish to schedule a date, as preparation is usually required first.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>What if I was baptized in another Christian church?</h3>
              <p>The Catholic Church recognizes baptisms from most Christian denominations if they were performed with water and in the name of the Father, Son, and Holy Spirit. You would not be re-baptized but would complete your initiation through Confirmation and Eucharist.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Can I choose godparents from outside the diocese?</h3>
              <p>Yes. Godparents must be confirmed, practicing Catholics at least 16 years old. If they are from outside the diocese, they may need a letter of eligibility from their own parish.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Is there a fee for Baptism?</h3>
              <p>There is no fee for any sacrament. Some families choose to make a free-will offering to the parish, but it is never required.</p>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Ready to Schedule a Baptism?</h3>
            <p>
              Contact your parish to begin the preparation process. Every parish in the Diocese of Evansville is ready to welcome you and your family.
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
