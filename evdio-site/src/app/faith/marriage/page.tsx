import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Catholic Marriage",
  description:
    "Plan your Catholic wedding in the Diocese of Evansville. Learn about marriage preparation, requirements, annulments, and how to strengthen your marriage.",
};

export default function Marriage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Catholic <em>Marriage.</em></h1>
            <p className="deck">The Sacrament of Matrimony is a covenant by which a man and a woman establish a partnership of the whole of life, ordered toward the good of the spouses and the procreation and education of children.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="St. Benedict Cathedral, Evansville."
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
              Marriage is not merely a contract between two people — it is a
              covenant, a living image of Christ&rsquo;s own love for
              his <em>Church.</em>
            </p>
            <div className="body">
              <p>
                Catholic marriage is more than a legal agreement or a beautiful
                ceremony. It is a sacrament — one of the seven sacred signs
                through which Christ acts in the world. When a man and a woman
                exchange their vows before God and the Church, they receive a
                grace that binds them not only to each other but to the mission
                of love itself. Through their fidelity, their patience, their
                daily sacrifice, they become a living icon of the relationship
                between Christ and his people.
              </p>
              <p>
                The Church asks couples to prepare seriously for this sacrament
                because marriage is ordered toward something greater than the
                wedding day. It is ordered toward the whole of life: the good of
                the spouses, the welcoming of children, and the building of a
                family rooted in faith. Every Catholic marriage in the Diocese of
                Evansville begins with a conversation — between the couple and
                their parish priest or deacon — that opens the door to a
                preparation process designed to serve the marriage, not just the
                ceremony.
              </p>
              <p>
                Whether you are newly engaged, exploring an interfaith marriage,
                or returning to the Church after a previous marriage, there is a
                path forward. The pages below walk through the steps, the
                requirements, and the resources available to you in the diocese.
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
            &ldquo;What God has joined together, let no one
            {" "}<em>separate.</em>&rdquo;
            <cite>Mark 10:9</cite>
          </blockquote>
        </section>

        {/* ─── FLOURISH ─── */}
        <div
          className="flourish flourish-quatrefoil"
          aria-hidden="true"
          style={{ padding: "48px 0 8px" }}
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

        {/* ─── PREPARATION STEPS ─── */}
        <section className="steps" aria-labelledby="steps-title">
          <div className="inner">
            <div>
              <p className="kicker">Preparation</p>
              <h2 id="steps-title">
                Planning your <em>wedding.</em>
              </h2>
              <p className="note">
                The Diocese of Evansville asks engaged couples to begin
                preparation at least six months before the wedding. Some
                parishes require up to a year. Reach out early — the process is
                meant to serve your marriage, not just your ceremony.
              </p>
            </div>
            <div className="faq">
              {steps.map((step, i) => (
                <details key={i} open={i === 0}>
                  <summary>{step.title}</summary>
                  <p>{step.detail}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SIX-MONTH INFO BLOCK ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="info-block">
            <h3>The Six-Month Preparation Requirement</h3>
            <p>
              The Diocese of Evansville requires a minimum of six months of
              preparation before the celebration of the Sacrament of Matrimony.
              This is not a bureaucratic formality — it is a pastoral practice
              rooted in the Church&rsquo;s conviction that marriage is a
              vocation worthy of serious discernment. During this time, couples
              meet regularly with their priest or deacon, complete a pre-marriage
              inventory such as FOCCUS, participate in an Engaged Encounter
              retreat or approved program, and plan the wedding liturgy itself.
              The goal is a marriage that is free, faithful, fruitful, and
              total — not merely a wedding that is beautiful.
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="info-block" style={{ marginBottom: 0 }}>
              <h3>Requirements at a Glance</h3>
              <p style={{ marginBottom: 12 }}>
                <strong>Freedom to Marry</strong> — Both parties must be free to
                marry in the Catholic Church. If either has been previously
                married, an annulment must be completed first.
              </p>
              <p style={{ marginBottom: 12 }}>
                <strong>Baptismal Certificate</strong> — At least one party must
                be Catholic. A recently issued baptismal certificate (within six
                months) is required.
              </p>
              <p style={{ marginBottom: 12 }}>
                <strong>Marriage Preparation</strong> — Completion of a
                diocesan-approved program, including meetings with your priest or
                deacon and either an Engaged Encounter retreat or approved
                alternative.
              </p>
              <p style={{ marginBottom: 12 }}>
                <strong>Civil License</strong> — A valid marriage license from
                the State of Indiana is required before the wedding.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Two Witnesses</strong> — At least two witnesses (often
                the best man and maid of honor) must be present at the ceremony.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="info-block" style={{ marginBottom: 0 }}>
                <h3>Interfaith Marriages</h3>
                <p>
                  When a Catholic marries a non-Catholic Christian or a person of
                  another faith, permission or dispensation from the bishop may
                  be required. Your parish priest or deacon will guide you
                  through this process. The Catholic party will be asked to
                  reaffirm their commitment to raising children in the Catholic
                  faith.
                </p>
              </div>
              <div className="info-block" style={{ marginBottom: 0 }}>
                <h3>Annulments</h3>
                <p>
                  If you or your intended spouse has been previously married, an
                  annulment (a declaration of nullity) may be necessary. An
                  annulment does not deny that a relationship existed, but
                  determines that a sacramental marriage was not validly
                  established. Contact the diocesan Tribunal Office for
                  guidance — the process is pastoral, confidential, and handled
                  with great care and compassion.
                </p>
              </div>
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

        {/* ─── ENRICHMENT ─── */}
        <section className="steps" aria-labelledby="enrich-title">
          <div className="inner">
            <div>
              <p className="kicker">Already married</p>
              <h2 id="enrich-title">
                Strengthening your <em>marriage.</em>
              </h2>
              <p className="note">
                The sacrament does not end at the altar. The Diocese of
                Evansville offers resources and programs to help married couples
                grow in faith and love throughout every season of life.
              </p>
            </div>
            <div className="faq">
              {enrichment.map((item, i) => (
                <details key={i} open={i === 0}>
                  <summary>{item.title}</summary>
                  <p>{item.detail}</p>
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
            Begin your marriage journey — <em>find your parish.</em>
          </h2>
          <Link href="/parishes" className="btn btn-primary">
            Find your parish <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </>
  );
}

/* ─── Data ─── */

const steps = [
  {
    title: "Contact Your Parish",
    detail:
      "Reach out to your parish at least six months before your desired wedding date. Some parishes require up to a year of notice. Your priest or deacon will guide you through the entire process and help you set a date.",
  },
  {
    title: "Complete the Pre-Marriage Inventory",
    detail:
      "All couples participate in a pre-marriage inventory such as FOCCUS, which helps you and your priest or deacon identify strengths and areas for growth in your relationship. This is not a test — it is a conversation starter.",
  },
  {
    title: "Attend an Engaged Encounter or Approved Program",
    detail:
      "The diocese requires participation in a marriage preparation program — typically an Engaged Encounter weekend retreat or an approved alternative. These programs cover communication, conflict resolution, finances, faith, and family planning.",
  },
  {
    title: "Gather Required Documents",
    detail:
      "You will need a recently issued baptismal certificate (within six months), a civil marriage license from the State of Indiana, and confirmation records. If either party was previously married, annulment documentation is required. Your parish will provide a full checklist.",
  },
  {
    title: "Plan the Wedding Liturgy",
    detail:
      "Work with your priest or deacon to plan the wedding liturgy, including Scripture readings, music, and prayers. You will choose whether to celebrate your wedding within a full Mass or in a Liturgy of the Word. Your parish may have a wedding coordinator to help with logistics.",
  },
];

const enrichment = [
  {
    title: "Marriage Encounter Weekends",
    detail:
      "A weekend retreat designed to help couples communicate more deeply and renew their commitment to one another. Worldwide Marriage Encounter weekends are offered regularly throughout the diocese.",
  },
  {
    title: "Anniversary Blessings",
    detail:
      "Parishes offer special blessings for couples celebrating milestone anniversaries. The bishop celebrates an annual diocesan anniversary Mass honoring couples across southwestern Indiana.",
  },
  {
    title: "Couples Prayer Groups",
    detail:
      "Many parishes host small groups where married couples pray together, study Scripture, and support one another through the joys and challenges of married life.",
  },
  {
    title: "Marriage & Family Life Office",
    detail:
      "The diocesan Office of Marriage and Family Life provides workshops, counseling referrals, and resources for couples at every stage — from newlyweds to empty nesters.",
  },
];
