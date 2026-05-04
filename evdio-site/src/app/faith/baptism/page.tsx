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

        {/* ─── CROSS FLOURISH ─── */}
        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── TYPES (on white) ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Two Paths, One Grace</span>
            <h2 className="section-h2">Infant &amp; Adult <em>Baptism</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
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
                <li>Gather required documents, including a copy of the child&rsquo;s birth certificate.</li>
              </ul>
            </div>

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
                  Learn more about OCIA <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;Go therefore and make disciples of all nations, <em>baptizing</em> them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;
            <cite>Matthew 28:19</cite>
          </blockquote>
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

        {/* ─── FAQ (back on cream) ─── */}
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
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Ready to schedule — <em style={{ color: "var(--bgold)" }}>take the first step.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact your parish to begin the preparation process. Every parish in the Diocese of Evansville is ready to welcome you and your family.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/parishes" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Find your parish <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
