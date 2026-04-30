import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "How to Become Catholic",
  description:
    "Interested in the Catholic faith? Learn about OCIA (Order of Christian Initiation of Adults) and how to begin your journey into the Catholic Church in the Diocese of Evansville.",
};

export default function BecomeCatholic() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Becoming <em>Catholic.</em></h1>
            <p className="deck">Every journey of faith is unique. The Catholic Church welcomes you wherever you are, and we are here to walk with you every step of the way.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/holy-week-good-friday.jpg"
              alt="Good Friday observance in the Diocese of Evansville."
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
              Something brought you here &mdash; a question, a longing, a person
              you love. Whatever it is, the Church has been waiting for{" "}
              <em>you.</em>
            </p>
            <div className="body">
              <p>
                The Order of Christian Initiation of Adults &mdash; OCIA, formerly
                known as RCIA &mdash; is the ancient path by which men and women
                enter the Catholic Church. It is not a class you pass or fail. It
                is a journey walked in the company of a parish community that will
                pray with you, teach you, and welcome you as one of their own.
              </p>
              <p>
                Whether you have never been baptized, were baptized in another
                Christian tradition, or are a baptized Catholic who has not yet
                received Confirmation or First Eucharist, there is a place for
                you. In the Diocese of Evansville, more than one hundred people
                are journeying toward full communion with the Church right now.
                You are not late. You are not behind. You are exactly on time.
              </p>
              <p>
                Most parishes begin OCIA sessions in the fall, and the sacraments
                are typically celebrated at the Easter Vigil &mdash; one of the
                most beautiful nights in the life of the Church. But you can reach
                out to a parish at any time of year. There is no wrong moment to
                start asking questions.
              </p>
              <p>
                What follows is a guide to the journey: the stages you will move
                through, the questions others have asked before you, and the
                simple first step of calling a parish near you. Nothing on this
                page commits you to anything. It is an open door.
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

        {/* ─── THE OCIA JOURNEY ─── */}
        <section className="steps" aria-labelledby="ocia-title">
          <div className="inner">
            <div>
              <p className="kicker">The Journey</p>
              <h2 id="ocia-title">
                What is <em>OCIA?</em>
              </h2>
              <p className="note">
                There are no forms to fill out, no fees to pay, and no
                commitment required to begin. Just come as you are.
              </p>
            </div>
            <div className="faq">
              <details open>
                <summary>Inquiry</summary>
                <p>
                  Begin by reaching out to a parish near you. During this
                  period, you are welcome to ask questions, attend Mass, and
                  explore what the Catholic faith is all about. You may stay in
                  this stage as long as you need &mdash; there is no pressure
                  and no commitment required. The only requirement is curiosity.
                </p>
              </details>
              <details>
                <summary>Catechumenate</summary>
                <p>
                  You will enter a period of learning and formation, studying
                  Scripture, the Creed, the sacraments, and Catholic moral
                  teaching. You will be paired with a sponsor from the parish
                  community &mdash; someone who will walk alongside you, answer
                  your questions, and pray for you throughout the process.
                </p>
              </details>
              <details>
                <summary>Purification &amp; Enlightenment</summary>
                <p>
                  During the season of Lent, you will enter a time of intense
                  spiritual preparation. The Rite of Election is celebrated at
                  St. Benedict Cathedral, where Bishop Siegel formally recognizes
                  those preparing for the sacraments. This is a season of prayer,
                  reflection, and growing anticipation.
                </p>
              </details>
              <details>
                <summary>Sacraments of Initiation</summary>
                <p>
                  At the Easter Vigil, you will receive the sacraments of
                  Baptism (if not already baptized), Confirmation, and Eucharist.
                  This is one of the most beautiful celebrations of the Church
                  year &mdash; the night when the whole parish community gathers
                  to welcome you home.
                </p>
              </details>
              <details>
                <summary>Mystagogy</summary>
                <p>
                  After Easter, you will continue to grow in your understanding
                  of the sacraments and find your place in the life and mission
                  of the parish. The journey of faith does not end at the font
                  &mdash; it continues for a lifetime, and you will never walk
                  it alone.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;Come to me, all you who are weary and burdened, and I will
            give you <em>rest.</em>&rdquo;
            <cite>Matthew 11:28</cite>
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

        {/* ─── COMMON QUESTIONS ─── */}
        <section className="steps" aria-labelledby="faq-title">
          <div className="inner">
            <div>
              <p className="kicker">Common questions</p>
              <h2 id="faq-title">
                You are not the first <em>to ask.</em>
              </h2>
              <p className="note">
                Every question is welcome. If yours is not answered here, any
                priest or parish staff member in the diocese is ready to help.
              </p>
            </div>
            <div className="faq">
              <details open>
                <summary>Who is OCIA for?</summary>
                <p>
                  OCIA serves anyone drawn to the Catholic faith. If you have
                  never been baptized, you will receive all three sacraments of
                  initiation: Baptism, Confirmation, and Eucharist. If you were
                  baptized in another Christian tradition, your baptism is
                  recognized &mdash; you will be prepared for Confirmation and
                  Eucharist to enter full communion. If you were baptized
                  Catholic but never received First Communion or Confirmation,
                  OCIA can help you complete your initiation. And if you have
                  simply been away and want to come home, your parish community
                  is ready to welcome you back.
                </p>
              </details>
              <details>
                <summary>
                  I was baptized in another tradition. Do I need to be
                  re-baptized?
                </summary>
                <p>
                  No. The Catholic Church recognizes valid baptism from most
                  Christian traditions. Speak with your local priest about what
                  the full reception into the Catholic Church looks like for you.
                </p>
              </details>
              <details>
                <summary>How long does the process take?</summary>
                <p>
                  Most parishes begin OCIA in the fall and celebrate the
                  sacraments at the Easter Vigil the following spring. But the
                  journey is not a fixed timeline &mdash; it moves at the pace
                  of your own discernment. Some people take longer, and that is
                  perfectly fine.
                </p>
              </details>
              <details>
                <summary>How do I know which parish I belong to?</summary>
                <p>
                  In general, you belong to the parish whose boundaries include
                  your home. But you are welcome to register at any parish whose
                  community and Mass schedule suit your family best.
                </p>
              </details>
              <details>
                <summary>Is there a cost?</summary>
                <p>
                  There is no cost to participate in OCIA. Some parishes provide
                  a Bible or catechism as a gift. The sacraments of the Church
                  are offered freely.
                </p>
              </details>
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
          <p className="kicker">Ready to begin?</p>
          <h2>
            Find a parish &mdash; <em>take the first step.</em>
          </h2>
          <Link href="/parishes" className="btn btn-primary">
            Find a Parish Near You{" "}
            <span className="arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
