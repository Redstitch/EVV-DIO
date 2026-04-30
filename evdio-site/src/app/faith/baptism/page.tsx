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
              Through water and the Holy Spirit, we are <em>born anew</em> — freed
              from sin, made children of God, and welcomed into the Church that
              Christ founded.
            </p>
            <div className="body">
              <p>
                Baptism is the first of the seven sacraments and the foundation of
                the entire Christian life. It imprints an indelible spiritual mark
                on the soul, signifying that we belong to Christ forever. No other
                sacrament can be received without it.
              </p>
              <p>
                The Church has baptized from the very beginning — in rivers and
                fountains, in house churches and basilicas, at Easter Vigils and
                quiet Sunday afternoons. The form has always been the same: water
                poured or immersed, the words spoken in the name of the Father and
                of the Son and of the Holy Spirit.
              </p>
              <p>
                In the Diocese of Evansville, Baptism is celebrated for infants
                born into Catholic families and for adults entering the Church
                through the Order of Christian Initiation of Adults. Both paths
                lead to the same font, the same grace, the same community of faith
                waiting to welcome a new member.
              </p>
              <p>
                What follows is a guide to both paths — what the Church teaches
                about Baptism, how to prepare, and answers to the questions
                families most often ask.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FLOURISH ─── */}
        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" />
            <circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" />
            <circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* ─── INFANT BAPTISM ─── */}
        <section
          className="page-content"
          style={{ background: "var(--cream-lt)", paddingTop: 80, paddingBottom: 80 }}
        >
          <div
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              padding: "0 40px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--teal)",
                  marginBottom: 12,
                }}
              >
                For Families
              </p>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 34,
                  fontWeight: 400,
                  color: "var(--navy)",
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Infant <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Baptism</em>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                The Catholic Church baptizes infants because Baptism is a gift of
                grace that does not depend on human merit. Parents and godparents
                promise to raise the child in the Catholic faith, surrounding a new
                life with the prayer and witness of the whole community.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                }}
              >
                Most parishes celebrate infant Baptism on Sundays, either during
                Mass or at a designated time. Preparation is required first — a
                chance for parents to reflect on the meaning of the sacrament and
                the commitment they are making.
              </p>
            </div>

            <div className="info-block" style={{ marginBottom: 0 }}>
              <h3>To prepare for your child&rsquo;s Baptism</h3>
              <ul
                style={{
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  paddingLeft: 18,
                }}
              >
                <li style={{ marginBottom: 10 }}>
                  Contact your parish as early as possible, ideally during
                  pregnancy or shortly after birth.
                </li>
                <li style={{ marginBottom: 10 }}>
                  Attend a Baptism preparation class offered by your parish.
                </li>
                <li style={{ marginBottom: 10 }}>
                  Choose godparents who are confirmed, practicing Catholics at
                  least 16 years of age.
                </li>
                <li>
                  Gather required documents, including a copy of the child&#8217;s
                  birth certificate.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;Go therefore and make disciples of all nations, <em>baptizing</em> them
            in the name of the Father and of the Son and of the Holy Spirit.&rdquo;
            <cite>Matthew 28:19</cite>
          </blockquote>
        </section>

        {/* ─── ADULT BAPTISM ─── */}
        <section
          className="page-content"
          style={{ paddingTop: 80, paddingBottom: 80 }}
        >
          <div
            style={{
              maxWidth: 1040,
              margin: "0 auto",
              padding: "0 40px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div className="info-block" style={{ marginBottom: 0 }}>
              <h3>What to expect in OCIA</h3>
              <ul
                style={{
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  paddingLeft: 18,
                }}
              >
                <li style={{ marginBottom: 10 }}>
                  A welcoming community that will walk with you at your own pace.
                </li>
                <li style={{ marginBottom: 10 }}>
                  Weekly sessions exploring Catholic teaching, Scripture, and
                  prayer.
                </li>
                <li style={{ marginBottom: 10 }}>
                  A sponsor from the parish to support you throughout the process.
                </li>
                <li>
                  The Rite of Election celebrated with Bishop Siegel at
                  St.&nbsp;Benedict Cathedral.
                </li>
              </ul>
              <div style={{ marginTop: 24 }}>
                <Link href="/faith/become-catholic" className="read-link">
                  Learn more about OCIA →
                </Link>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "var(--teal)",
                  marginBottom: 12,
                }}
              >
                For Adults
              </p>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 34,
                  fontWeight: 400,
                  color: "var(--navy)",
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                Adult <em style={{ fontStyle: "italic", color: "var(--blue)" }}>Baptism</em>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                Adults who have never been baptized receive the sacrament through
                the Order of Christian Initiation of Adults (OCIA). This journey of
                faith typically culminates at the Easter Vigil, when adults receive
                Baptism, Confirmation, and Eucharist together — the three
                sacraments of initiation, given in a single night.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                }}
              >
                There is no timeline you must follow and no prior knowledge
                required. OCIA is a journey taken at your own pace, guided by a
                parish community that is genuinely glad you are asking the
                question.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FLOURISH ─── */}
        <div
          className="flourish flourish-quatrefoil"
          aria-hidden="true"
          style={{ padding: "48px 0 8px", background: "var(--cream-lt)" }}
        >
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" />
            <circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" />
            <circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* ─── FAQ ACCORDION ─── */}
        <section
          className="steps"
          aria-labelledby="faq-title"
          style={{ background: "var(--cream-lt)" }}
        >
          <div className="inner">
            <div>
              <p className="kicker">Common questions</p>
              <h2 id="faq-title">
                Preparing for <em>Baptism</em>
              </h2>
              <p className="note">
                Every parish has a priest or staff member ready to help. There is
                no wrong question, no form to fill out first, and no cost for any
                sacrament.
              </p>
            </div>
            <div className="faq">
              {faqs.map((faq, i) => (
                <details key={i} open={i === 0}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section className="cta-strip">
          <div
            className="flourish"
            aria-hidden="true"
            style={{ padding: "0 0 32px" }}
          >
            <span className="line" />
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="currentColor"
            >
              <rect x="6" y="0" width="2" height="18" />
              <rect x="2" y="5" width="10" height="2" />
            </svg>
            <span className="line" />
          </div>
          <p className="kicker">Next</p>
          <h2>
            Ready to schedule — <em>take the first step.</em>
          </h2>
          <Link href="/parishes" className="btn btn-primary">
            Find your parish{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}

/* ─── Data ─── */

const faqs = [
  {
    q: "When can my child be baptized?",
    a: "Baptisms are typically celebrated on Sundays after Mass or at a designated time set by the parish. Contact your parish to schedule a date, as preparation is usually required first.",
  },
  {
    q: "What if I was baptized in another Christian church?",
    a: "The Catholic Church recognizes baptisms from most Christian denominations if they were performed with water and in the name of the Father, Son, and Holy Spirit. You would not be re-baptized but would complete your initiation through Confirmation and Eucharist.",
  },
  {
    q: "Can I choose godparents from outside the diocese?",
    a: "Yes. Godparents must be confirmed, practicing Catholics at least 16 years old. If they are from outside the diocese, they may need a letter of eligibility from their own parish.",
  },
  {
    q: "Is there a fee for Baptism?",
    a: "There is no fee for any sacrament. Some families choose to make a free-will offering to the parish, but it is never required.",
  },
];
