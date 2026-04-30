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
        {/* ─── TEACHING ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">A Sacred Covenant</span>
            <h2 className="section-h2">A Love That Reflects Christ</h2>
            <p className="section-desc">
              Catholic marriage is more than a legal contract. It is a sacrament in which the couple becomes a living sign of Christ&rsquo;s love for the Church. Through marriage, spouses receive the grace to love one another faithfully, to welcome children, and to build a family rooted in faith.
            </p>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;For this reason a man shall leave his father and mother and be joined to his wife, and the two shall become one flesh. So they are no longer two but one flesh. What therefore God has joined together, let not man put asunder.&rdquo;
            <cite>Mark 10:7&#8211;9</cite>
          </blockquote>
        </section>

        {/* ─── GETTING STARTED ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Planning Your Wedding</span>
            <h2 className="section-h2">Getting Started</h2>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <span className="section-tag section-tag-left" style={{ marginBottom: 8 }}>Step 1</span>
              <h3>Contact Your Parish</h3>
              <p>Reach out to your parish at least six months before your desired wedding date. Some parishes require up to a year of notice. Your priest or deacon will guide you through the entire process.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <span className="section-tag section-tag-left" style={{ marginBottom: 8 }}>Step 2</span>
              <h3>Marriage Preparation</h3>
              <p>All couples participate in a marriage preparation program. This may include meetings with your priest or deacon, a pre-marriage inventory (like FOCCUS), and an Engaged Encounter retreat or approved program.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <span className="section-tag section-tag-left" style={{ marginBottom: 8 }}>Step 3</span>
              <h3>Planning the Liturgy</h3>
              <p>Work with your parish to plan the wedding liturgy, including Scripture readings, music, and prayers. Your priest or deacon will help you understand the options for a wedding within Mass or outside of Mass.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── REQUIREMENTS ─── */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="section-tag section-tag-left">Requirements</span>
              <h2 className="section-h2 section-h2-left">What You Need</h2>
              <ul style={{ marginTop: 16 }}>
                <li><strong>Freedom to Marry</strong> &mdash; Both parties must be free to marry in the Catholic Church. If either has been previously married, an annulment process must be completed before a new marriage can be celebrated.</li>
                <li><strong>Baptism &amp; Sacramental Records</strong> &mdash; At least one party must be Catholic. A recently issued copy of your baptismal certificate (within six months) will be required.</li>
                <li><strong>Marriage Preparation Program</strong> &mdash; Completion of a diocesan-approved marriage preparation program, which helps couples communicate effectively and build a strong spiritual foundation.</li>
                <li><strong>Civil Marriage License</strong> &mdash; A valid marriage license from the State of Indiana is required before the wedding can be celebrated.</li>
                <li><strong>Two Witnesses</strong> &mdash; At least two witnesses (often the best man and maid of honor) must be present at the ceremony.</li>
              </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="interior-card" style={{ cursor: "default" }}>
                <h3>Interfaith Marriages</h3>
                <p>
                  When a Catholic marries a non-Catholic Christian or a person of another faith, permission or dispensation from the bishop may be required. Your parish priest or deacon will help you navigate this process. The Catholic party will be asked to reaffirm their commitment to raising children in the Catholic faith.
                </p>
              </div>

              <div className="interior-card" style={{ cursor: "default" }}>
                <h3>Annulments</h3>
                <p>
                  If you or your intended spouse has been previously married, an annulment (a declaration of nullity) may be necessary. An annulment does not deny that a relationship existed, but rather determines that a sacramental marriage was not validly established.
                </p>
                <p>
                  Contact the diocesan Tribunal Office for guidance. The process is pastoral, confidential, and handled with great care and compassion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── MARRIAGE ENRICHMENT ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Strengthening Your Marriage</span>
            <h2 className="section-h2">Already Married?</h2>
            <p className="section-desc">
              The Diocese of Evansville offers resources and programs to help married couples grow in faith and love throughout every season of life.
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Marriage Encounter Weekends</h3>
              <p>A weekend retreat designed to help couples communicate more deeply and renew their commitment to one another.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Anniversary Blessings</h3>
              <p>Parishes offer special blessings for couples celebrating milestone anniversaries. The bishop celebrates an annual diocesan anniversary Mass.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Couples Prayer Groups</h3>
              <p>Many parishes host small groups where married couples pray together, study Scripture, and support one another.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Marriage &amp; Family Life Office</h3>
              <p>The diocesan Office of Marriage and Family Life provides workshops, counseling referrals, and resources for couples at every stage.</p>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Begin Your Marriage Journey</h3>
            <p>
              Contact your parish to begin marriage preparation. Remember to reach out at least six months before your hoped-for wedding date.
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
