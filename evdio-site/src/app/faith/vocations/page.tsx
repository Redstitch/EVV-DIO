import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Vocations",
  description:
    "Discern your vocation in the Diocese of Evansville. Learn about the priesthood, religious life, diaconate, and how God may be calling you to serve.",
};

export default function Vocations() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title"><em>Vocations.</em></h1>
            <p className="deck">God calls each of us to a unique path of love and service. Whether to the priesthood, religious life, the diaconate, or the lay faithful, your vocation is a gift.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="The priests of the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── INTRODUCTION ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Called by Name</span>
            <h2 className="section-h2">What Is a Vocation?</h2>
            <p className="section-desc">
              The word &ldquo;vocation&rdquo; comes from the Latin <em>vocare</em>, meaning &ldquo;to call.&rdquo; Every baptized person has a vocation &mdash; a calling from God to live out their faith in a particular way. The Diocese of Evansville supports men and women in discerning how God is inviting them to serve the Church and the world.
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

        {/* ─── PATHS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Paths of Service</span>
            <h2 className="section-h2">Ways God Calls</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Diocesan Priesthood</h3>
              <p>
                Diocesan priests serve the people of God in parishes, schools, hospitals, and other ministries throughout the 12 counties of our diocese. They celebrate the sacraments, preach the Gospel, and shepherd their communities. The Diocese of Evansville currently has seminarians studying at Saint Meinrad Seminary and other formation programs.
              </p>
              <div style={{ marginTop: 20 }}>
                <Link href="/contact" className="read-link">Contact the Vocation Director &rarr;</Link>
              </div>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Religious Life</h3>
              <p>
                Men and women religious (brothers, sisters, and monks) live out their baptismal call through vows of poverty, chastity, and obedience. They serve in education, healthcare, social services, contemplative prayer, and many other ministries. Southern Indiana is home to several religious communities, including Saint Meinrad Archabbey.
              </p>
              <div style={{ marginTop: 20 }}>
                <Link href="/contact" className="read-link">Explore Religious Communities &rarr;</Link>
              </div>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Permanent Diaconate</h3>
              <p>
                Permanent deacons are ordained ministers who serve the Church through preaching, baptizing, witnessing marriages, and works of charity and justice. Most deacons are married men who serve in their parishes while also maintaining their professional careers.
              </p>
              <div style={{ marginTop: 20 }}>
                <Link href="/faith/deacon" className="read-link">Learn About the Diaconate &rarr;</Link>
              </div>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Marriage &amp; Family Life</h3>
              <p>
                The majority of Catholics are called to the vocation of marriage, where spouses are called to be signs of Christ&#8217;s love for the Church. Through the Sacrament of Matrimony, couples build the domestic church &mdash; the first and most vital cell of the Church&#8217;s life.
              </p>
              <div style={{ marginTop: 20 }}>
                <Link href="/faith/marriage" className="read-link">Catholic Marriage &rarr;</Link>
              </div>
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

        {/* ─── DISCERNMENT ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Discernment</span>
            <h2 className="section-h2">How Do I Discern My Calling?</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Pray</h3>
              <p>Bring your questions to God in prayer. Ask the Lord to reveal His will for your life. Develop a regular prayer practice and consider spending time in Eucharistic Adoration.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Seek Guidance</h3>
              <p>Talk to your parish priest, a spiritual director, or the diocesan Vocation Director. They can help you sort through your thoughts and feelings with wisdom and experience.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Learn</h3>
              <p>Read about the lives of the saints. Attend vocation awareness events. Visit a seminary or religious community. The more you learn, the more clearly you may hear God&#8217;s call.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Serve</h3>
              <p>Volunteer in your parish and community. Experience different forms of ministry. Often God reveals our vocation through the joy we find in serving others.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Be Patient</h3>
              <p>Discernment takes time. God does not usually reveal His plan all at once. Trust that He is guiding you, even when the path is not yet clear.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Attend a Retreat</h3>
              <p>The diocese and local retreat centers offer discernment retreats where you can spend extended time in prayer and reflection, away from the distractions of daily life.</p>
            </div>
          </div>
        </section>

        {/* ─── SEMINARY ─── */}
        <section className="page-content bg-eggshell">
          <div className="interior-grid interior-grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="section-tag">Seminary Formation</span>
              <h2 className="section-h2">The Path to Priesthood</h2>
              <p style={{ marginTop: 16 }}>
                Men who discern a call to the diocesan priesthood enter a formation program that typically lasts six to eight years, depending on prior education. Seminary formation includes academic study in philosophy and theology, spiritual direction, pastoral ministry experience, and community life.
              </p>
              <p style={{ marginTop: 16 }}>
                The Diocese of Evansville has a long history of forming priests at Saint Meinrad Seminary and School of Theology, located just an hour from Evansville in the rolling hills of Southern Indiana.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Seminary at a Glance</h3>
              <table style={{ width: "100%", marginTop: 12, borderCollapse: "collapse" }}>
                <tbody>
                  {[
                    ["Years of Formation", "6\u20138 years"],
                    ["Philosophy Studies", "2 years"],
                    ["Theology Studies", "4 years"],
                    ["Pastoral Internship", "1 year"],
                    ["Cost to Seminarian", "Fully funded"],
                  ].map(([label, value]) => (
                    <tr key={label} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "10px 0" }}>{label}</td>
                      <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 700 }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Is God Calling You?
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            If you are considering the priesthood, religious life, or the diaconate, the Diocese of Evansville is here to support your discernment. Reach out to our Vocation Director to begin the conversation.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact the Vocation Director <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/faith/deacon" className="btn btn-outline">
              Learn About the Diaconate
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
