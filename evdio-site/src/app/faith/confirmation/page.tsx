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
        {/* ─── INTRO ─── */}
        <section className="intro">
          <div className="inner">
            <p className="pull">
              The Spirit descends not as spectacle but as <em>seal</em> — an
              anointing that marks the baptized for a life of witness, courage,
              and apostolic fire.
            </p>
            <div className="body">
              <p>
                Confirmation completes the grace of Baptism. Through the laying
                on of hands and the anointing with Sacred Chrism by the bishop,
                the Holy Spirit strengthens the baptized to spread and defend the
                faith by word and action, to confess the name of Christ boldly,
                and never to be ashamed of the Cross. It is not a graduation
                from the faith but a commissioning into it.
              </p>
              <p>
                The sacrament has roots in the first Pentecost, when the
                apostles received the power Jesus had promised them. That same
                Spirit is given today to every candidate who presents
                themselves — teenagers preparing in their parish, adults
                completing the sacraments of initiation, anyone who comes
                forward in freedom and faith.
              </p>
              <p>
                In the Diocese of Evansville, Bishop Siegel celebrates
                Confirmation at parishes across all four deaneries each year.
                The liturgy is solemn and beautiful: the candidates are
                presented, the bishop extends his hands in prayer, each
                forehead is anointed with the oil of chrism, and the ancient
                words are spoken: &ldquo;Be sealed with the Gift of the Holy
                Spirit.&rdquo;
              </p>
              <p>
                What follows on this page is a guide to the sacrament — what
                it means, what it requires, and how to begin preparation. If
                you have questions, your parish office is the place to start.
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

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;But you will receive power when the Holy Spirit has come upon
            you, and you will be my witnesses in Jerusalem and in all Judea and
            Samaria, and to the end of the <em>earth.</em>&rdquo;
            <cite>Acts 1:8</cite>
          </blockquote>
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

        {/* ─── WHAT TO EXPECT ─── */}
        <section className="page-content">
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <span className="section-tag section-tag-left">What to Expect</span>
            <h2 className="section-h2 section-h2-left" style={{ marginBottom: 12 }}>
              The seven gifts, the rite, the preparation
            </h2>
            <p style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: 680,
              marginBottom: 48,
            }}>
              Confirmation is not complicated, but it is serious. Here is what
              the sacrament involves — and what the Church asks of candidates
              who receive it.
            </p>

            {/* Gifts of the Spirit — info block */}
            <div className="info-block">
              <h3>The Seven Gifts of the Holy Spirit</h3>
              <p>
                In Confirmation, the Holy Spirit bestows seven gifts that
                empower the baptized to live as faithful disciples of Christ.
                They are not talents to be earned but graces to be received:
              </p>
              <p style={{ marginTop: 16 }}>
                <strong style={{ color: "var(--navy)" }}>Wisdom</strong> — to
                see as God sees.{" "}
                <strong style={{ color: "var(--navy)" }}>Understanding</strong>{" "}
                — to grasp the truths of faith.{" "}
                <strong style={{ color: "var(--navy)" }}>Counsel</strong> — to
                judge rightly in difficult moments.{" "}
                <strong style={{ color: "var(--navy)" }}>Fortitude</strong> — to
                stand firm when the cost is real.{" "}
                <strong style={{ color: "var(--navy)" }}>Knowledge</strong> — to
                know the world as God&rsquo;s creation.{" "}
                <strong style={{ color: "var(--navy)" }}>Piety</strong> — to
                worship with a son&rsquo;s or daughter&rsquo;s heart.{" "}
                <strong style={{ color: "var(--navy)" }}>Fear of the Lord</strong>{" "}
                — to stand in awe before the Holy.
              </p>
            </div>

            {/* The Rite — prose block */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{
                fontFamily: "var(--serif)",
                fontSize: 26,
                fontWeight: 400,
                color: "var(--navy)",
                marginBottom: 16,
              }}>
                The Rite of Confirmation
              </h3>
              <div className="prose">
                <p>
                  Confirmation is ordinarily celebrated within Mass by the
                  diocesan bishop. Candidates are presented by name. The bishop
                  extends his hands over them and prays that the Holy Spirit
                  will come upon them with all seven gifts. Then each candidate
                  approaches, accompanied by their sponsor.
                </p>
                <p>
                  The bishop anoints the forehead of the candidate with Sacred
                  Chrism — a mixture of olive oil and balsam consecrated at the
                  Chrism Mass each Holy Thursday — and says:{" "}
                  <em>&ldquo;Be sealed with the Gift of the Holy Spirit.&rdquo;</em>{" "}
                  The candidate responds: <em>&ldquo;Amen.&rdquo;</em> The
                  bishop then offers the sign of peace.
                </p>
              </div>
            </div>

            {/* Teen vs. Adult — two info blocks */}
            <div className="info-block" style={{ marginBottom: 24 }}>
              <h3>Teen Confirmation</h3>
              <p>
                In the Diocese of Evansville, teens typically receive
                Confirmation during high school. Preparation programs vary by
                parish but generally span one to two years and include
                catechesis, service projects, retreats, and spiritual mentoring.
              </p>
              <ul style={{
                paddingLeft: 20,
                marginTop: 16,
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--muted)",
              }}>
                <li>Participate in your parish&#8217;s Confirmation preparation program.</li>
                <li>Choose a Confirmation sponsor who is a confirmed, practicing Catholic.</li>
                <li>Select a Confirmation name — a saint whose life inspires you.</li>
                <li>Complete required service hours as an expression of faith in action.</li>
                <li>Attend a Confirmation retreat for spiritual preparation.</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>Adult Confirmation</h3>
              <p>
                If you are an adult who was baptized Catholic but never received
                Confirmation, it is never too late. Many parishes offer adult
                Confirmation preparation, often in conjunction with the OCIA
                process or as a separate program.
              </p>
              <ul style={{
                paddingLeft: 20,
                marginTop: 16,
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--muted)",
              }}>
                <li>Contact your parish to learn about adult Confirmation preparation.</li>
                <li>Gather a copy of your baptismal certificate from the parish where you were baptized.</li>
                <li>Adult Confirmation is often celebrated by the bishop at a special liturgy.</li>
                <li>Preparation may be brief if you are already active in your faith life.</li>
              </ul>
              <div style={{ marginTop: 20 }}>
                <Link href="/faith/become-catholic" className="read-link">
                  Learn about OCIA for adults →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STEPS / FAQ ─── */}
        <section className="steps section-warm" aria-labelledby="steps-title">
          <div className="inner">
            <div>
              <p className="kicker">Common questions</p>
              <h2 id="steps-title">
                Sponsors, names, <em>and readiness.</em>
              </h2>
              <p className="note">
                Every parish has a priest or staff member ready to walk you
                through the details. There is no wrong question.
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
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)" }}>
            Start your Confirmation <em>journey.</em>
          </h2>
          <p className="section-desc" style={{ color: "rgba(238,218,179,0.75)" }}>
            Your parish is ready to help you prepare. Reach out today and take the first step.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/parishes" className="btn btn-primary">
              Find your parish <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

/* ─── Data ─── */

const faqs = [
  {
    q: "What does a Confirmation sponsor do?",
    a: "A Confirmation sponsor serves as a spiritual guide and role model. They stand with the candidate during the sacrament and commit to helping them live out their Catholic faith. Ideally, one of the candidate\u2019s baptismal godparents serves as the Confirmation sponsor, but another qualified person may be chosen.",
  },
  {
    q: "Who is eligible to be a sponsor?",
    a: "A sponsor must be at least 16 years old and have received Baptism, Confirmation, and Eucharist. They must be a practicing Catholic who attends Mass regularly and cannot be the candidate\u2019s parent. They should be willing to support the candidate\u2019s spiritual growth over the long term.",
  },
  {
    q: "How do I choose a Confirmation name?",
    a: "Candidates select the name of a saint whose life and witness inspire them. You might choose a saint who shares your vocation, who overcame struggles similar to yours, or whose virtues you want to cultivate. Your Confirmation name becomes part of your spiritual identity.",
  },
  {
    q: "Can an adult who missed Confirmation still receive it?",
    a: "Absolutely. If you were baptized Catholic but never confirmed, contact your parish. Many offer adult Confirmation preparation, sometimes through the OCIA process. Preparation is often shorter for adults who are already active in their faith.",
  },
  {
    q: "When does Confirmation happen in the diocese?",
    a: "Bishop Siegel celebrates Confirmation at parishes across all four deaneries each year, typically in the spring. Your parish will announce the date well in advance so candidates and families can prepare.",
  },
  {
    q: "Is Confirmation required for marriage in the Church?",
    a: "Yes. The Church asks that Catholics be confirmed before entering the Sacrament of Matrimony. If you were not confirmed as a teen, speak with the priest who is preparing you for marriage — arrangements can be made.",
  },
];
