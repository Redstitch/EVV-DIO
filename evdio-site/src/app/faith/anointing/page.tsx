import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Anointing of the Sick",
  description:
    "Learn about the Sacrament of the Anointing of the Sick in the Diocese of Evansville. Find out when and how to request this sacrament for yourself or a loved one.",
};

export default function Anointing() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Anointing of the <em>Sick.</em></h1>
            <p className="deck">Through the Anointing of the Sick, the Church commends those who are ill to the suffering and glorified Lord, asking that He may lighten their suffering and save them.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/holy-week-good-friday.jpg"
              alt="Holy Week observance in the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── TEACHING ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">A Sacrament of Healing</span>
            <h2 className="section-h2">Comfort, Strength, and Peace</h2>
            <p className="section-desc">
              The Anointing of the Sick is not only for those who are at the point of death. It is for anyone who is seriously ill, facing surgery, or weakened by old age. Through the prayer of the priest and the anointing with the Oil of the Sick, the person receives spiritual strength, peace, and courage to endure their suffering in union with Christ.
            </p>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;Is any among you sick? Let him call for the elders of the Church, and let them pray over him, anointing him with oil in the name of the Lord.&rdquo;
            <cite>James 5:14</cite>
          </blockquote>
        </section>

        {/* ─── WHO CAN RECEIVE ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Who May Receive</span>
            <h2 className="section-h2">When Should You Request This Sacrament?</h2>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Serious Illness</h3>
              <p>Anyone suffering from a serious illness, whether physical or mental, may receive the Anointing of the Sick. The illness need not be life-threatening.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Before Surgery</h3>
              <p>If you are about to undergo a serious surgical procedure, the Anointing of the Sick can bring spiritual comfort and strength for the journey ahead.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Advanced Age</h3>
              <p>Elderly persons who are weakened by age, even without a specific illness, may receive this sacrament as a source of grace and peace.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Chronic Conditions</h3>
              <p>Those living with chronic or long-term illnesses may receive the sacrament again whenever their condition worsens or a new illness arises.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>End of Life</h3>
              <p>When a person is nearing death, the Anointing of the Sick is accompanied by Viaticum &mdash; the reception of Holy Communion as food for the final journey.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Children</h3>
              <p>Children who are old enough to be comforted by the sacrament may also receive the Anointing of the Sick when seriously ill.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── HOW TO REQUEST ─── */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="section-tag section-tag-left">How to Request</span>
              <h2 className="section-h2 section-h2-left">Requesting the Sacrament</h2>
              <p style={{ marginTop: 16 }}>
                Do not wait until a loved one is unconscious or has already passed away. The sacrament is most effective when the person can consciously participate and receive its graces.
              </p>
              <ul style={{ marginTop: 16 }}>
                <li><strong>At the parish:</strong> Contact your parish office to arrange for a priest to visit and celebrate the sacrament.</li>
                <li><strong>In the hospital:</strong> Ask the hospital chaplain or call your parish priest. Most hospitals in the Diocese of Evansville have Catholic chaplains available.</li>
                <li><strong>In an emergency:</strong> Call your parish immediately. Most parishes have an after-hours number for emergencies.</li>
                <li><strong>Communal celebrations:</strong> Many parishes offer communal Anointing of the Sick services, often during Lent or the World Day of the Sick.</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>What Happens During the Rite</h3>
              <ul>
                <li><strong>Prayer &amp; Laying on of Hands</strong> &mdash; The priest prays in silence while laying hands on the head of the sick person, calling upon the Holy Spirit.</li>
                <li><strong>Anointing with Oil</strong> &mdash; The priest anoints the forehead and hands of the sick person with the Oil of the Sick, blessed by the bishop at the Chrism Mass.</li>
                <li><strong>Prayer of Faith</strong> &mdash; The priest offers a prayer asking God to comfort and heal the person, and those present join in prayer for their loved one.</li>
                <li><strong>Holy Communion (Viaticum)</strong> &mdash; If the person is able to receive, the priest offers Holy Communion. For those nearing death, this is called Viaticum &mdash; food for the journey.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Do Not Wait to Ask</h3>
            <p>
              If you or a loved one is seriously ill, facing surgery, or weakened by age, do not hesitate to reach out. Your parish priest is ready to bring the comfort and grace of this sacrament.
            </p>
            <Link href="/parishes" className="btn btn-primary">
              Contact Your Parish
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
