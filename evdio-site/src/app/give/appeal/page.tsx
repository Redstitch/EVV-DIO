import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catholic Ministries Appeal | Diocese of Evansville",
  description:
    "Support the annual Catholic Ministries Appeal. Your gift funds education, charity, vocations, and parish life across 12 counties in Southwestern Indiana.",
};

const impactAreas = [
  { title: "Catholic Education", pct: "35%", desc: "Tuition assistance for over 850 students, teacher formation, curriculum development, and support for 26 Catholic schools serving 6,800 students." },
  { title: "Catholic Charities", pct: "25%", desc: "Emergency assistance, food pantries, counseling services, refugee resettlement, and family support programs that serve 2,400 families each year." },
  { title: "Parish Life & Evangelization", pct: "20%", desc: "Funding for religious education, liturgical ministry training, marriage and family programs, youth ministry, and new evangelization initiatives across 45 parishes." },
  { title: "Vocations & Seminarians", pct: "12%", desc: "Support for the formation and education of seminarians, permanent deacon candidates, and vocation awareness programs that help young people hear and respond to God's call." },
  { title: "Clergy Support", pct: "5%", desc: "Health care, retirement benefits, and continuing education for our priests and deacons who serve the faithful across the diocese." },
  { title: "Communications & Stewardship", pct: "3%", desc: "The Message newspaper, digital communications, and stewardship programs that keep our diocesan community informed and connected." },
];

const recognitionLevels = [
  { level: "Platinum", amount: "$10,000+", desc: "Personal invitation to the Bishop's dinner, name listed in The Message, blessed Deo Gratias medal." },
  { level: "Gold", amount: "$5,000 - $9,999", desc: "Invitation to recognition reception, name listed in The Message, blessed Deo Gratias medal." },
  { level: "Silver", amount: "$2,500 - $4,999", desc: "Certificate of gratitude from the Bishop, name listed in The Message, blessed Deo Gratias medal." },
];

const givingMethods = [
  { title: "Online", desc: "Give securely through the diocesan OSV online giving portal. You can make a one-time gift or set up monthly payments." },
  { title: "By Mail", desc: "Complete a pledge card and return it to your parish or the diocesan office at P.O. Box 4169, Evansville, IN 47724." },
  { title: "Through Your Parish", desc: "Drop your pledge card in the collection basket or deliver it to your parish office. Your parish receives credit for every gift." },
  { title: "Stock or IRA Gift", desc: "Contact the diocesan Finance Office at (812) 424-5536 for instructions on giving appreciated securities or qualified charitable IRA distributions." },
];

export default function AppealPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Ministries Appeal</p>
            <h1 id="title">Catholic Ministries <em>Appeal.</em></h1>
            <p className="deck">
              One gift. Many ministries. Every corner of the diocese.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/articles/catholic-ministries-appeal.png"
              alt="Catholic Ministries Appeal — Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Campaign Progress */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">2025&ndash;2026 Campaign</span>
            <h2 className="section-h2">Together, We Are Making a Difference</h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "-32px auto 40px", textAlign: "center" }}>
            The Catholic Ministries Appeal is the single annual campaign that funds the shared ministries of the Diocese of Evansville. Every parish participates. Every dollar stays local.
          </p>

          {/* Goal Progress */}
          <div className="interior-card" style={{ cursor: "default", maxWidth: 900, margin: "0 auto 40px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 4 }}>Campaign Goal</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700, color: "var(--navy)" }}>$4,200,000</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 4 }}>Raised So Far</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700, color: "var(--dgold)" }}>$2,814,000</div>
              </div>
            </div>
            <div style={{ height: 20, background: "var(--cream-lt)", borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", marginBottom: 12 }}>
              <div style={{ height: "100%", background: "var(--dgold)", borderRadius: 20, width: "67%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
              <span style={{ color: "var(--muted)" }}>67% of goal reached</span>
              <span style={{ color: "var(--muted)" }}>Updated monthly</span>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="#" className="btn-gold">
              Make Your Appeal Gift
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Impact Areas */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Where Your Gift Goes</span>
            <h2 className="section-h2">Impact Areas</h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "-32px auto 40px", textAlign: "center" }}>
            Every Appeal gift is divided among the core ministries that serve our 79,500 Catholics across Southwestern Indiana.
          </p>

          <div className="interior-grid interior-grid-3">
            {impactAreas.map((area) => (
              <div key={area.title} className="interior-card" style={{ cursor: "default" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, color: "var(--dgold)" }}>{area.pct}</div>
                  <h3 style={{ marginBottom: 0 }}>{area.title}</h3>
                </div>
                <p>{area.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Bishop's Message */}
        <section className="page-content">
          <div className="cta-block" style={{ maxWidth: 800, margin: "0 auto" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "var(--dgold)", marginBottom: 16 }}>A Message from Our Bishop</p>
            <blockquote style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.55, marginBottom: 24, fontStyle: "italic" }}>
              &ldquo;The Catholic Ministries Appeal is not simply a fundraiser. It is a profound act of faith and communion. When you give, you are saying to your brothers and sisters across Southwestern Indiana: I believe in what we are building together.&rdquo;
            </blockquote>
            <cite style={{ color: "var(--dgold)", fontWeight: 600, fontSize: 16, fontStyle: "normal" }}>
              &mdash; Bishop Joseph M. Siegel
            </cite>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Donor Recognition */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Donor Recognition</span>
            <h2 className="section-h2">Deo Gratias Society</h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "-32px auto 40px", textAlign: "center" }}>
            The Deo Gratias Society honors donors who demonstrate extraordinary generosity to the Catholic Ministries Appeal. Members are recognized at a special annual dinner with the Bishop and receive a blessed medal as a token of the diocese&rsquo;s gratitude.
          </p>

          <div className="interior-grid interior-grid-3">
            {recognitionLevels.map((r) => (
              <div key={r.level} className="interior-card" style={{ cursor: "default", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 400, color: "var(--dgold)", marginBottom: 4 }}>{r.level}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", marginBottom: 12 }}>{r.amount}</div>
                <p style={{ fontSize: 12 }}>{r.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 14, color: "var(--muted)", textAlign: "center", marginTop: 32 }}>
            Every donor at every level receives a personal thank-you from the diocese. Every gift matters.
          </p>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* How to Give */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">How to Give</span>
            <h2 className="section-h2">Make Your Gift Today</h2>
          </div>

          <div className="interior-grid interior-grid-2" style={{ maxWidth: 900, margin: "0 auto" }}>
            {givingMethods.map((m) => (
              <div key={m.title} className="info-block" style={{ marginBottom: 0 }}>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="#" className="btn-gold">
              Give to the Appeal Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
        </section>

        {/* CTA */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="cta-block">
            <h3>We Are Here to Help</h3>
            <p>
              Contact the Stewardship and Development Office for questions about the Catholic Ministries Appeal, pledge payments, or donor recognition.
            </p>
            <p style={{ color: "var(--dgold)", fontWeight: 600, fontSize: 18, marginTop: 16 }}>(812) 424-5536 | appeal@evdio.org</p>
          </div>
        </div>
      </main>
    </>
  );
}
