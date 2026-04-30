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
        {/* ─── INTRO ─── */}
        <section className="intro">
          <div className="inner">
            <p className="pull">
              Through water and the Holy Spirit, we are <em>born anew</em> — freed from sin, made children of God, and welcomed into the Body of Christ.
            </p>
            <div className="body">
              <p>
                Baptism is the first and most fundamental of the seven sacraments. It opens the door to all the others. Through it, we receive sanctifying grace, are freed from original sin, and are incorporated into the Church — the People of God. It imprints an indelible spiritual mark on the soul, signifying that we belong to Christ forever.
              </p>
              <p>
                In the Diocese of Evansville, Baptism is celebrated for infants born into Catholic families and for adults entering the Church through the Order of Christian Initiation of Adults. Both paths lead to the same font, the same grace, the same community of faith waiting to welcome a new member.
              </p>
              <p>
                What follows is a guide to both paths — what the Church teaches about Baptism, how to prepare, and answers to the questions families most often ask.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FLOURISH ─── */}
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

        {/* ─── INFANT BAPTISM ─── */}
        <section className="page-content section-cream">
          <span className="section-tag section-tag-left">For Families</span>
          <h2 className="section-h2 section-h2-left">Infant <em>Baptism</em></h2>
          <div className="prose" style={{ maxWidth: 780 }}>
            <p>
              The Catholic Church baptizes infants because Baptism is a gift of grace that does not depend on human merit. Parents and godparents promise to raise the child in the Catholic faith, surrounding a new life with the prayer and witness of the whole community.
            </p>
            <p>
              Most parishes celebrate infant Baptism on Sundays, either during Mass or at a designated time. Preparation is required first — a chance for parents to reflect on the meaning of the sacrament and the commitment they are making.
            </p>
          </div>
          <div className="info-block" style={{ maxWidth: 780, marginTop: 32 }}>
            <h3>To prepare for your child&rsquo;s Baptism</h3>
            <ul style={{ paddingLeft: 18, lineHeight: 1.75, color: "var(--muted)" }}>
              <li style={{ marginBottom: 10 }}>Contact your parish as early as possible, ideally during pregnancy or shortly after birth.</li>
              <li style={{ marginBottom: 10 }}>Attend a Baptism preparation class offered by your parish.</li>
              <li style={{ marginBottom: 10 }}>Choose godparents who are confirmed, practicing Catholics at least 16 years of age.</li>
              <li>Gather required documents, including a copy of the child&rsquo;s birth certificate.</li>
            </ul>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;Go therefore and make disciples of all nations, <em>baptizing</em> them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;
            <cite>Matthew 28:19</cite>
          </blockquote>
        </section>

        {/* ─── ADULT BAPTISM ─── */}
        <section className="page-content section-warm">
          <span className="section-tag section-tag-left">For Adults</span>
          <h2 className="section-h2 section-h2-left">Adult <em>Baptism</em></h2>
          <div className="prose" style={{ maxWidth: 780 }}>
            <p>
              Adults who have never been baptized receive the sacrament through the Order of Christian Initiation of Adults (OCIA). This journey of faith typically culminates at the Easter Vigil, when adults receive Baptism, Confirmation, and Eucharist together — the three sacraments of initiation, given in a single night.
            </p>
            <p>
              There is no timeline you must follow and no prior knowledge required. OCIA is a journey taken at your own pace, guided by a parish community that is genuinely glad you are asking the question.
            </p>
          </div>
          <div className="info-block" style={{ maxWidth: 780, marginTop: 32 }}>
            <h3>What to expect in OCIA</h3>
            <ul style={{ paddingLeft: 18, lineHeight: 1.75, color: "var(--muted)" }}>
              <li style={{ marginBottom: 10 }}>A welcoming community that will walk with you at your own pace.</li>
              <li style={{ marginBottom: 10 }}>Weekly sessions exploring Catholic teaching, Scripture, and prayer.</li>
              <li style={{ marginBottom: 10 }}>A sponsor from the parish to support you throughout the process.</li>
              <li>The Rite of Election celebrated with Bishop Siegel at St. Benedict Cathedral.</li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <Link href="/faith/become-catholic" className="read-link">
                Learn more about OCIA <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FLOURISH ─── */}
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

        {/* ─── FAQ ─── */}
        <section className="steps" aria-labelledby="faq-title">
          <div className="inner">
            <div>
              <p className="kicker">Common questions</p>
              <h2 id="faq-title">Preparing for <em>Baptism</em></h2>
              <p className="note">
                Every parish has a priest or staff member ready to answer your questions. There is no wrong time to reach out.
              </p>
            </div>
            <div className="faq">
              <details open>
                <summary>When can my child be baptized?</summary>
                <p>Baptisms are typically celebrated on Sundays after Mass or at a designated time set by the parish. Contact your parish to schedule a date, as preparation is usually required first.</p>
              </details>
              <details>
                <summary>What if I was baptized in another Christian church?</summary>
                <p>The Catholic Church recognizes baptisms from most Christian denominations if they were performed with water and in the name of the Father, Son, and Holy Spirit. You would not be re-baptized but would complete your initiation through Confirmation and Eucharist.</p>
              </details>
              <details>
                <summary>Can I choose godparents from outside the diocese?</summary>
                <p>Yes. Godparents must be confirmed, practicing Catholics at least 16 years old. If they are from outside the diocese, they may need a letter of eligibility from their own parish.</p>
              </details>
              <details>
                <summary>Is there a fee for Baptism?</summary>
                <p>There is no fee for any sacrament. Some families choose to make a free-will offering to the parish, but it is never required.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Ready to schedule — <em style={{ color: "var(--bgold)" }}>take the first step.</em>
          </h2>
          <p className="section-desc" style={{ color: "rgba(238,218,179,0.7)" }}>
            Contact your parish to begin the preparation process. There is no wrong time to reach out.
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
