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
        {/* Teaching */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">A Sacrament of Healing</div>
              <h2 className="section-title">Comfort, Strength, and Peace</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Anointing of the Sick is not only for those who are at the point of death. It is for anyone who is seriously ill, facing surgery, or weakened by old age. Through the prayer of the priest and the anointing with the Oil of the Sick, the person receives spiritual strength, peace, and courage to endure their suffering in union with Christ.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-border">
              <p className="font-heading text-xl italic text-navy text-center leading-relaxed">
                &ldquo;Is any among you sick? Let him call for the elders of the Church, and let them pray over him, anointing him with oil in the name of the Lord.&rdquo;
              </p>
              <p className="text-center text-sm text-text-light mt-3">&mdash; James 5:14</p>
            </div>
          </div>
        </section>

        {/* Who Can Receive */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Who May Receive</div>
              <h2 className="section-title">When Should You Request This Sacrament?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <WhenCard
                title="Serious Illness"
                desc="Anyone suffering from a serious illness, whether physical or mental, may receive the Anointing of the Sick. The illness need not be life-threatening."
              />
              <WhenCard
                title="Before Surgery"
                desc="If you are about to undergo a serious surgical procedure, the Anointing of the Sick can bring spiritual comfort and strength for the journey ahead."
              />
              <WhenCard
                title="Advanced Age"
                desc="Elderly persons who are weakened by age, even without a specific illness, may receive this sacrament as a source of grace and peace."
              />
              <WhenCard
                title="Chronic Conditions"
                desc="Those living with chronic or long-term illnesses may receive the sacrament again whenever their condition worsens or a new illness arises."
              />
              <WhenCard
                title="End of Life"
                desc="When a person is nearing death, the Anointing of the Sick is accompanied by Viaticum — the reception of Holy Communion as food for the final journey."
              />
              <WhenCard
                title="Children"
                desc="Children who are old enough to be comforted by the sacrament may also receive the Anointing of the Sick when seriously ill."
              />
            </div>
          </div>
        </section>

        {/* How to Request */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">How to Request</div>
                <h2 className="section-title text-left">Requesting the Sacrament</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Do not wait until a loved one is unconscious or has already passed away. The sacrament is most effective when the person can consciously participate and receive its graces.
                </p>
                <ul className="space-y-3 text-sm text-text-medium">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span><strong className="text-navy">At the parish:</strong> Contact your parish office to arrange for a priest to visit and celebrate the sacrament.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span><strong className="text-navy">In the hospital:</strong> Ask the hospital chaplain or call your parish priest. Most hospitals in the Diocese of Evansville have Catholic chaplains available.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span><strong className="text-navy">In an emergency:</strong> Call your parish immediately. Most parishes have an after-hours number for emergencies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span><strong className="text-navy">Communal celebrations:</strong> Many parishes offer communal Anointing of the Sick services, often during Lent or the World Day of the Sick.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cream rounded-2xl border border-border p-8">
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">What Happens During the Rite</h3>
                <div className="space-y-4 text-sm text-text-medium">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <div className="font-semibold text-navy mb-0.5">Prayer & Laying on of Hands</div>
                      <div className="leading-relaxed">The priest prays in silence while laying hands on the head of the sick person, calling upon the Holy Spirit.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <div className="font-semibold text-navy mb-0.5">Anointing with Oil</div>
                      <div className="leading-relaxed">The priest anoints the forehead and hands of the sick person with the Oil of the Sick, blessed by the bishop at the Chrism Mass.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <div className="font-semibold text-navy mb-0.5">Prayer of Faith</div>
                      <div className="leading-relaxed">The priest offers a prayer asking God to comfort and heal the person, and those present join in prayer for their loved one.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">4</div>
                    <div>
                      <div className="font-semibold text-navy mb-0.5">Holy Communion (Viaticum)</div>
                      <div className="leading-relaxed">If the person is able to receive, the priest offers Holy Communion. For those nearing death, this is called Viaticum — food for the journey.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Do Not Wait to Ask
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
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

function WhenCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}
