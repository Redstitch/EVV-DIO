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
        {/* What is a Deacon */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Ordained to Serve</div>
              <h2 className="section-title">What Is a Permanent Deacon?</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The word &ldquo;deacon&rdquo; comes from the Greek <em>diakonos</em>, meaning &ldquo;servant.&rdquo; Permanent deacons are ordained to a ministry of service in three areas: the Word, the Liturgy, and Charity. Unlike transitional deacons preparing for the priesthood, permanent deacons are called to this ministry for life. Most are married men who serve their parishes while continuing in their secular professions.
              </p>
            </div>
          </div>
        </section>

        {/* Three Areas */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Ministry of Service</div>
              <h2 className="section-title">Three Pillars of Diaconal Ministry</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PillarCard
                title="Word"
                desc="Deacons proclaim the Gospel at Mass, preach homilies, teach in parish faith formation programs, lead Bible studies, and bring the message of Christ to those outside the parish walls."
              />
              <PillarCard
                title="Liturgy"
                desc="Deacons assist the priest at Mass, baptize, witness marriages, preside at funerals and wake services, lead Communion services, and bring the Eucharist to the homebound and hospitalized."
              />
              <PillarCard
                title="Charity"
                desc="Deacons are called to be a living sign of Christ the Servant. They lead outreach ministries, visit the sick and imprisoned, advocate for the poor, and help connect those in need with the resources of the Church and community."
              />
            </div>
          </div>
        </section>

        {/* Formation */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Formation Program</div>
                <h2 className="section-title text-left">The Path to Ordination</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Formation for the permanent diaconate in the Diocese of Evansville typically spans four to five years. The program includes academic coursework in theology, Scripture, Church history, and pastoral ministry, as well as spiritual formation, pastoral field education, and human development.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Wives of married candidates participate in the formation process and provide their consent to their husband&rsquo;s ordination. The support of the entire family is considered essential.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  After ordination, deacons continue their formation through ongoing education, spiritual direction, and regular gatherings with the diaconal community.
                </p>
              </div>

              <div className="bg-cream rounded-2xl border border-border p-8">
                <h3 className="font-heading text-2xl font-bold text-navy mb-6">Requirements</h3>
                <ul className="space-y-3 text-sm text-text-medium">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>Be a man at least 35 years old at the time of ordination (or 30 if unmarried).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>Be a practicing Catholic in good standing with the Church.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>If married, have been in a valid sacramental marriage for at least five years and have the full support of your wife.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>Be recommended by your pastor and approved by the bishop.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>Demonstrate a commitment to prayer, service, and ongoing faith formation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>Complete the diocesan diaconate formation program (approximately 4-5 years).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>Successfully pass background checks and psychological evaluations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Common Questions</div>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <FaqItem
                q="Can a deacon perform weddings and baptisms?"
                a="Yes. Deacons are authorized to witness marriages, baptize, and preside at funeral services and wake services. They cannot celebrate Mass, hear Confessions, or administer the Anointing of the Sick."
              />
              <FaqItem
                q="Do deacons get paid?"
                a="Most permanent deacons are not paid by the diocese or parish for their diaconal ministry. They maintain their secular employment and serve the Church as part of their vocation. Some deacons may serve in paid diocesan positions."
              />
              <FaqItem
                q="Can a deacon remarry if his wife dies?"
                a="A permanent deacon who is widowed may not remarry without a special dispensation from the Holy See. This reflects the Church's understanding of the commitment made at ordination."
              />
              <FaqItem
                q="How do I know if I am called to the diaconate?"
                a="Discernment involves prayer, conversation with your wife and family, guidance from your pastor, and meeting with the diocesan Director of Diaconate Formation. Many men begin by simply asking the question."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Begin the Conversation</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Is God Calling You to the Diaconate?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              If you feel stirred by the idea of ordained service, the first step is a conversation. Talk with your pastor, your wife, and the diocesan Diaconate Formation Office.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Diaconate Formation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function PillarCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-2xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{q}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{a}</p>
    </div>
  );
}
