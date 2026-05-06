import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Becoming a Deacon",
  description:
    "Learn about the Permanent Diaconate in the Diocese of Evansville. Discover the formation process, requirements, and how to discern a call to ordained service.",
};

export default function Deacon() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Becoming a <em>Deacon.</em></h1>
            <p className="deck">Permanent deacons are ordained ministers who serve the Church through word, liturgy, and charity. They bring the light of the Gospel into their families, workplaces, and communities.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="The clergy of the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── WHAT IS A DEACON ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Ordained to Serve</span>
            <h2 className="section-h2">What Is a Permanent Deacon?</h2>
            <p className="section-desc">
              The word &ldquo;deacon&rdquo; comes from the Greek <em>diakonos</em>, meaning &ldquo;servant.&rdquo; Permanent deacons are ordained to a ministry of service in three areas: the Word, the Liturgy, and Charity. Unlike transitional deacons preparing for the priesthood, permanent deacons are called to this ministry for life. Most are married men who serve their parishes while continuing in their secular professions.
            </p>
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── THREE AREAS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Ministry of Service</span>
            <h2 className="section-h2">Three Pillars of Diaconal Ministry</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Word</h3>
              <p>Deacons proclaim the Gospel at Mass, preach homilies, teach in parish faith formation programs, lead Bible studies, and bring the message of Christ to those outside the parish walls.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Liturgy</h3>
              <p>Deacons assist the priest at Mass, baptize, witness marriages, preside at funerals and wake services, lead Communion services, and bring the Eucharist to the homebound and hospitalized.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Charity</h3>
              <p>Deacons are called to be a living sign of Christ the Servant. They lead outreach ministries, visit the sick and imprisoned, advocate for the poor, and help connect those in need with the resources of the Church and community.</p>
            </div>
          </div>
        </section>

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

        {/* ─── FORMATION ─── */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="section-tag">Formation Program</span>
              <h2 className="section-h2">The Path to Ordination</h2>
              <p style={{ marginTop: 16 }}>
                Formation for the permanent diaconate in the Diocese of Evansville typically spans four to five years. The program includes academic coursework in theology, Scripture, Church history, and pastoral ministry, as well as spiritual formation, pastoral field education, and human development.
              </p>
              <p style={{ marginTop: 16 }}>
                Wives of married candidates participate in the formation process and provide their consent to their husband&rsquo;s ordination. The support of the entire family is considered essential.
              </p>
              <p style={{ marginTop: 16 }}>
                After ordination, deacons continue their formation through ongoing education, spiritual direction, and regular gatherings with the diaconal community.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Requirements</h3>
              <ul>
                <li>Be a man at least 35 years old at the time of ordination (or 30 if unmarried).</li>
                <li>Be a practicing Catholic in good standing with the Church.</li>
                <li>If married, have been in a valid sacramental marriage for at least five years and have the full support of your wife.</li>
                <li>Be recommended by your pastor and approved by the bishop.</li>
                <li>Demonstrate a commitment to prayer, service, and ongoing faith formation.</li>
                <li>Complete the diocesan diaconate formation program (approximately 4&#8211;5 years).</li>
                <li>Successfully pass background checks and psychological evaluations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-h2">Frequently Asked Questions</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Can a deacon perform weddings and baptisms?</h3>
              <p>Yes. Deacons are authorized to witness marriages, baptize, and preside at funeral services and wake services. They cannot celebrate Mass, hear Confessions, or administer the Anointing of the Sick.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Do deacons get paid?</h3>
              <p>Most permanent deacons are not paid by the diocese or parish for their diaconal ministry. They maintain their secular employment and serve the Church as part of their vocation. Some deacons may serve in paid diocesan positions.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Can a deacon remarry if his wife dies?</h3>
              <p>A permanent deacon who is widowed may not remarry without a special dispensation from the Holy See. This reflects the Church&#8217;s understanding of the commitment made at ordination.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>How do I know if I am called to the diaconate?</h3>
              <p>Discernment involves prayer, conversation with your wife and family, guidance from your pastor, and meeting with the diocesan Director of Diaconate Formation. Many men begin by simply asking the question.</p>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Is God Calling You to the Diaconate?
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            If you feel stirred by the idea of ordained service, the first step is a conversation. Talk with your pastor, your wife, and the diocesan Diaconate Formation Office.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact Diaconate Formation <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
