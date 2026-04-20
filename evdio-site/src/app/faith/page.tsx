import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Faith & Sacraments | Diocese of Evansville",
  description:
    "Explore the Catholic faith in the Diocese of Evansville — the seven sacraments, becoming Catholic, and resources for every stage of your journey.",
};

export default function FaithPage() {
  return (
    <main id="main-content">
      {/* ─── FEATURE HEAD (split: text + arch photo) ─── */}
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">
              A grace-filled <em>life,</em> marked in seven signs.
            </h1>
            <p className="deck">
              The sacraments are the ordinary ways Christ continues to act in the
              world — outward signs of an inward grace, traced from font to altar
              to the final anointing.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/confirmation-stmary.jpg"
              alt="Young Catholics at a Confirmation Mass at St. Mary Parish, Ireland, Indiana."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="intro">
        <div className="inner">
          <p className="pull">
            Every Catholic life moves through these <em>seven doors.</em> Some
            open once — baptism, confirmation, ordination, marriage. Others we
            return to again and again.
          </p>
          <div className="body">
            <p>
              The sacraments are not symbols of something absent but encounters
              with Someone present: the risen Lord, acting in water and oil,
              bread and wine, word and touch.
            </p>
            <p>
              In the Diocese of Evansville, every parish is a place where this
              grace is offered freely — at the font where new Christians are
              born, at the altar where the Paschal Mystery is renewed, in the
              confessional where mercy is spoken aloud, at the bedside where the
              sick are anointed with holy oil.
            </p>
            <p>
              Each of the seven sacraments has its own shape, its own history,
              its own rite. But all seven speak in the same grammar: God gives,
              and we receive. Taken together, they form the arc of a grace-filled
              life.
            </p>
            <p>
              What follows is a short guide — the seven doors and where each of
              them opens. If you have questions, any priest or parish staff
              member in the diocese is ready to answer them.
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

      {/* ─── SEVEN SACRAMENTS ─── */}
      <section className="seven" aria-labelledby="seven-title">
        <div className="head">
          <p className="label">The Sacraments</p>
          <h2 id="seven-title">
            Seven doors, <em>one Christ.</em>
          </h2>
        </div>
        <div className="list">
          {sacraments.map((s) => (
            <Link key={s.label} className="item" href={s.href}>
              <span
                className="num"
                dangerouslySetInnerHTML={{ __html: s.icon }}
              />
              <div className="body">
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="cta">
                {s.cta} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── SCRIPTURE ─── */}
      <section className="scripture" aria-label="Scripture">
        <blockquote>
          &ldquo;I came that they might have life, and have it{" "}
          <em>abundantly.</em>&rdquo;
          <cite>John 10:10</cite>
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

      {/* ─── STEPS / FAQ ─── */}
      <section className="steps" aria-labelledby="steps-title">
        <div className="inner">
          <div>
            <p className="kicker">Begin here</p>
            <h2 id="steps-title">
              Questions about <em>becoming</em> Catholic?
            </h2>
            <p className="note">
              Every parish has a priest or staff member ready to answer. There is
              no form you need to fill out first, and no cost.
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
        <div className="flourish" aria-hidden="true" style={{ padding: "0 0 32px" }}>
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>
        <p className="kicker">Next</p>
        <h2>
          Find a parish — <em>take the first step.</em>
        </h2>
        <Link href="/parishes" className="btn btn-primary">
          Open the parish map <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}

/* ─── Data ─── */

const sacraments = [
  {
    label: "Baptism",
    href: "/faith/baptism",
    desc: "Entry into the life of Christ. Celebrated for infants and adults alike, usually at a parish Mass or Easter Vigil.",
    cta: "Learn more",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 C11 12 8 16 8 20 A8 8 0 0 0 24 20 C24 16 21 12 16 4 Z"/></svg>',
  },
  {
    label: "Confirmation",
    href: "/faith/confirmation",
    desc: "The sealing of baptism with the Holy Spirit. Typically received in the teenage years, or at the Easter Vigil for new Catholics.",
    cta: "Learn more",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 C12 10 10 14 10 18 C10 23 13 26 16 28 C19 26 22 23 22 18 C22 14 20 10 16 4 Z"/><path d="M16 14 C15 17 14 19 14 21"/></svg>',
  },
  {
    label: "Eucharist",
    href: "/faith/first-communion",
    desc: "The source and summit of Christian life — the Body and Blood of Christ offered at every Mass in every parish.",
    cta: "Learn more",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6 H24 V10 A8 8 0 0 1 16 18 A8 8 0 0 1 8 10 V6 Z"/><line x1="16" y1="18" x2="16" y2="25"/><line x1="11" y1="26" x2="21" y2="26"/></svg>',
  },
  {
    label: "Reconciliation",
    href: "/faith/prayer-worship",
    desc: "Confession, absolution, and return. Every parish offers regular hours; most hear confessions before each weekend Mass.",
    cta: "Find a time",
    icon: '<svg viewBox="0 0 32 32" fill="currentColor"><rect x="14" y="4" width="4" height="24" rx="1"/><rect x="6" y="12" width="20" height="4" rx="1"/></svg>',
  },
  {
    label: "Anointing of the Sick",
    href: "/faith/anointing",
    desc: "Prayer and holy oil for healing, courage, and peace. Call your parish when serious illness or surgery is coming.",
    cta: "How to request",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 H20 V8 L22 12 V24 A4 4 0 0 1 18 28 H14 A4 4 0 0 1 10 24 V12 L12 8 Z"/><line x1="13" y1="14" x2="19" y2="14"/></svg>',
  },
  {
    label: "Holy Orders",
    href: "/faith/vocations",
    desc: "The consecration of deacons, priests, and bishops for service of the Church. Pray for our seminarians; consider your own call.",
    cta: "Vocations",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12 L16 4 L24 12 V26 H8 V12 Z"/><line x1="8" y1="18" x2="24" y2="18"/><line x1="16" y1="6" x2="16" y2="14"/><line x1="13" y1="10" x2="19" y2="10"/></svg>',
  },
  {
    label: "Matrimony",
    href: "/faith/marriage",
    desc: "A covenant between husband and wife that images Christ's love for the Church. Begin with your parish priest at least six months ahead.",
    cta: "Begin preparation",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="16" r="7"/><circle cx="20" cy="16" r="7"/></svg>',
  },
];

const faqs = [
  {
    q: "What is OCIA / RCIA?",
    a: "The Order of Christian Initiation of Adults is the Church's process for welcoming new Catholics. It meets weekly at most parishes and culminates in reception of the sacraments at the Easter Vigil each spring.",
  },
  {
    q: "I was baptized in another Christian tradition. Do I need to be re-baptized?",
    a: "No. The Catholic Church recognizes valid baptism from most Christian traditions. Speak with your local priest about what the full reception into the Catholic Church looks like for you.",
  },
  {
    q: "How do I know which parish I belong to?",
    a: "In general, you belong to the parish whose boundaries include your home. But you are welcome to register at any parish whose community and Mass schedule suit your family best.",
  },
  {
    q: "How do I request the Anointing of the Sick?",
    a: "Call your parish office as soon as serious illness, surgery, or decline is known. Any Catholic priest can anoint; you do not need to be actively dying.",
  },
  {
    q: "How soon should we begin marriage preparation?",
    a: "The diocese asks engaged couples to meet with a priest or deacon at least six months before the wedding. Longer is welcome — preparation is meant to serve the marriage, not just the wedding.",
  },
];
