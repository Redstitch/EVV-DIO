import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Vocations",
  description:
    "Discern your vocation in the Diocese of Evansville. Learn about the priesthood, religious life, diaconate, and how God may be calling you to serve.",
};

export default function Vocations() {
  return (
    <>
      <PageHero
        label="Faith & Sacraments"
        title="Vocations"
        subtitle="God calls each of us to a unique path of love and service. Whether to the priesthood, religious life, the diaconate, or the lay faithful, your vocation is a gift."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faith & Sacraments", href: "/faith" },
          { label: "Vocations" },
        ]}
      />

      <div style={{ padding: "0 40px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "var(--navy)", height: 480 }}>
          <Image
            src="/images/stock/presbyterate-group.jpg"
            alt="The priests of the Diocese of Evansville gathered at the 2025 Chrism Mass."
            fill
            style={{ objectFit: "cover", objectPosition: "center 45%" }}
          />
        </div>
      </div>

      <main id="main-content">
        {/* Introduction */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Called by Name</div>
              <h2 className="section-title">What Is a Vocation?</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The word &ldquo;vocation&rdquo; comes from the Latin <em>vocare</em>, meaning &ldquo;to call.&rdquo; Every baptized person has a vocation &mdash; a calling from God to live out their faith in a particular way. The Diocese of Evansville supports men and women in discerning how God is inviting them to serve the Church and the world.
              </p>
            </div>
          </div>
        </section>

        {/* Paths */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Paths of Service</div>
              <h2 className="section-title">Ways God Calls</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <VocationCard
                title="Diocesan Priesthood"
                desc="Diocesan priests serve the people of God in parishes, schools, hospitals, and other ministries throughout the 12 counties of our diocese. They celebrate the sacraments, preach the Gospel, and shepherd their communities. The Diocese of Evansville currently has seminarians studying at Saint Meinrad Seminary and other formation programs."
                cta="Contact the Vocation Director"
                href="/contact"
              />
              <VocationCard
                title="Religious Life"
                desc="Men and women religious (brothers, sisters, and monks) live out their baptismal call through vows of poverty, chastity, and obedience. They serve in education, healthcare, social services, contemplative prayer, and many other ministries. Southern Indiana is home to several religious communities, including Saint Meinrad Archabbey."
                cta="Explore Religious Communities"
                href="/contact"
              />
              <VocationCard
                title="Permanent Diaconate"
                desc="Permanent deacons are ordained ministers who serve the Church through preaching, baptizing, witnessing marriages, and works of charity and justice. Most deacons are married men who serve in their parishes while also maintaining their professional careers."
                cta="Learn About the Diaconate"
                href="/faith/deacon"
              />
              <VocationCard
                title="Marriage & Family Life"
                desc="The majority of Catholics are called to the vocation of marriage, where spouses are called to be signs of Christ's love for the Church. Through the Sacrament of Matrimony, couples build the domestic church — the first and most vital cell of the Church's life."
                cta="Catholic Marriage"
                href="/faith/marriage"
              />
            </div>
          </div>
        </section>

        {/* Discernment */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Discernment</div>
              <h2 className="section-title">How Do I Discern My Calling?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <DiscernCard
                title="Pray"
                desc="Bring your questions to God in prayer. Ask the Lord to reveal His will for your life. Develop a regular prayer practice and consider spending time in Eucharistic Adoration."
              />
              <DiscernCard
                title="Seek Guidance"
                desc="Talk to your parish priest, a spiritual director, or the diocesan Vocation Director. They can help you sort through your thoughts and feelings with wisdom and experience."
              />
              <DiscernCard
                title="Learn"
                desc="Read about the lives of the saints. Attend vocation awareness events. Visit a seminary or religious community. The more you learn, the more clearly you may hear God's call."
              />
              <DiscernCard
                title="Serve"
                desc="Volunteer in your parish and community. Experience different forms of ministry. Often God reveals our vocation through the joy we find in serving others."
              />
              <DiscernCard
                title="Be Patient"
                desc="Discernment takes time. God does not usually reveal His plan all at once. Trust that He is guiding you, even when the path is not yet clear."
              />
              <DiscernCard
                title="Attend a Retreat"
                desc="The diocese and local retreat centers offer discernment retreats where you can spend extended time in prayer and reflection, away from the distractions of daily life."
              />
            </div>
          </div>
        </section>

        {/* Seminary */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
              <div>
                <div className="section-label text-left">Seminary Formation</div>
                <h2 className="section-title text-left">The Path to Priesthood</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Men who discern a call to the diocesan priesthood enter a formation program that typically lasts six to eight years, depending on prior education. Seminary formation includes academic study in philosophy and theology, spiritual direction, pastoral ministry experience, and community life.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  The Diocese of Evansville has a long history of forming priests at Saint Meinrad Seminary and School of Theology, located just an hour from Evansville in the rolling hills of Southern Indiana.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Seminary at a Glance</h3>
                <div className="space-y-4">
                  <StatRow label="Years of Formation" value="6-8 years" />
                  <StatRow label="Philosophy Studies" value="2 years" />
                  <StatRow label="Theology Studies" value="4 years" />
                  <StatRow label="Pastoral Internship" value="1 year" />
                  <StatRow label="Cost to Seminarian" value="Fully funded" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Take the Next Step</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Is God Calling You?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              If you are considering the priesthood, religious life, or the diaconate, the Diocese of Evansville is here to support your discernment. Reach out to our Vocation Director to begin the conversation.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/contact" className="btn btn-primary">
                Contact the Vocation Director
              </Link>
              <Link href="/faith/deacon" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Learn About the Diaconate
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function VocationCard({
  title,
  desc,
  cta,
  href,
}: {
  title: string;
  desc: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)] flex flex-col">
      <h3 className="font-heading text-2xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed mb-5 flex-1">{desc}</p>
      <Link
        href={href}
        className="text-sm font-semibold text-blue hover:text-navy transition-colors inline-flex items-center gap-1.5"
      >
        {cta}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
}

function DiscernCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
      <span className="text-sm text-text-medium">{label}</span>
      <span className="font-heading text-lg font-bold text-navy">{value}</span>
    </div>
  );
}
