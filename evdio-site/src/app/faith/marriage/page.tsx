import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Catholic Marriage",
  description:
    "Plan your Catholic wedding in the Diocese of Evansville. Learn about marriage preparation, requirements, annulments, and how to strengthen your marriage.",
};

export default function Marriage() {
  return (
    <>
      <PageHero
        label="Faith & Sacraments"
        title="Catholic Marriage"
        subtitle="The Sacrament of Matrimony is a covenant by which a man and a woman establish a partnership of the whole of life, ordered toward the good of the spouses and the procreation and education of children."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faith & Sacraments", href: "/faith" },
          { label: "Catholic Marriage" },
        ]}
      />

      <div style={{ padding: "0 40px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "var(--navy)", height: 480 }}>
          <Image
            src="/images/stock/cathedral-interior.jpg"
            alt="St. Benedict Cathedral, a place of sacramental celebration in the Diocese of Evansville."
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <main id="main-content">
        {/* Teaching */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">A Sacred Covenant</div>
              <h2 className="section-title">A Love That Reflects Christ</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Catholic marriage is more than a legal contract. It is a sacrament in which the couple becomes a living sign of Christ&rsquo;s love for the Church. Through marriage, spouses receive the grace to love one another faithfully, to welcome children, and to build a family rooted in faith.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-border">
              <p className="font-heading text-xl italic text-navy text-center leading-relaxed">
                &ldquo;For this reason a man shall leave his father and mother and be joined to his wife, and the two shall become one flesh. So they are no longer two but one flesh. What therefore God has joined together, let not man put asunder.&rdquo;
              </p>
              <p className="text-center text-sm text-text-light mt-3">&mdash; Mark 10:7-9</p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Planning Your Wedding</div>
              <h2 className="section-title">Getting Started</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard
                number="1"
                title="Contact Your Parish"
                desc="Reach out to your parish at least six months before your desired wedding date. Some parishes require up to a year of notice. Your priest or deacon will guide you through the entire process."
              />
              <StepCard
                number="2"
                title="Marriage Preparation"
                desc="All couples participate in a marriage preparation program. This may include meetings with your priest or deacon, a pre-marriage inventory (like FOCCUS), and an Engaged Encounter retreat or approved program."
              />
              <StepCard
                number="3"
                title="Planning the Liturgy"
                desc="Work with your parish to plan the wedding liturgy, including Scripture readings, music, and prayers. Your priest or deacon will help you understand the options for a wedding within Mass or outside of Mass."
              />
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Requirements</div>
                <h2 className="section-title text-left">What You Need</h2>
                <ul className="space-y-4 text-sm text-text-medium">
                  <ReqItem
                    title="Freedom to Marry"
                    desc="Both parties must be free to marry in the Catholic Church. If either has been previously married, an annulment process must be completed before a new marriage can be celebrated."
                  />
                  <ReqItem
                    title="Baptism & Sacramental Records"
                    desc="At least one party must be Catholic. A recently issued copy of your baptismal certificate (within six months) will be required."
                  />
                  <ReqItem
                    title="Marriage Preparation Program"
                    desc="Completion of a diocesan-approved marriage preparation program, which helps couples communicate effectively and build a strong spiritual foundation."
                  />
                  <ReqItem
                    title="Civil Marriage License"
                    desc="A valid marriage license from the State of Indiana is required before the wedding can be celebrated."
                  />
                  <ReqItem
                    title="Two Witnesses"
                    desc="At least two witnesses (often the best man and maid of honor) must be present at the ceremony."
                  />
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-cream rounded-2xl border border-border p-8">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Interfaith Marriages</h3>
                  <p className="text-sm text-text-medium leading-relaxed">
                    When a Catholic marries a non-Catholic Christian or a person of another faith, permission or dispensation from the bishop may be required. Your parish priest or deacon will help you navigate this process. The Catholic party will be asked to reaffirm their commitment to raising children in the Catholic faith.
                  </p>
                </div>

                <div className="bg-cream rounded-2xl border border-border p-8">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Annulments</h3>
                  <p className="text-sm text-text-medium leading-relaxed mb-3">
                    If you or your intended spouse has been previously married, an annulment (a declaration of nullity) may be necessary. An annulment does not deny that a relationship existed, but rather determines that a sacramental marriage was not validly established.
                  </p>
                  <p className="text-sm text-text-medium leading-relaxed">
                    Contact the diocesan Tribunal Office for guidance. The process is pastoral, confidential, and handled with great care and compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marriage Enrichment */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Strengthening Your Marriage</div>
              <h2 className="section-title">Already Married?</h2>
              <p className="section-subtitle mx-auto">
                The Diocese of Evansville offers resources and programs to help married couples grow in faith and love throughout every season of life.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <EnrichCard
                title="Marriage Encounter Weekends"
                desc="A weekend retreat designed to help couples communicate more deeply and renew their commitment to one another."
              />
              <EnrichCard
                title="Anniversary Blessings"
                desc="Parishes offer special blessings for couples celebrating milestone anniversaries. The bishop celebrates an annual diocesan anniversary Mass."
              />
              <EnrichCard
                title="Couples Prayer Groups"
                desc="Many parishes host small groups where married couples pray together, study Scripture, and support one another."
              />
              <EnrichCard
                title="Marriage & Family Life Office"
                desc="The diocesan Office of Marriage and Family Life provides workshops, counseling referrals, and resources for couples at every stage."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Begin Your Marriage Journey
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
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

function StepCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <div className="w-10 h-10 rounded-full bg-navy text-gold font-heading font-bold text-lg flex items-center justify-center mb-4">
        {number}
      </div>
      <h3 className="font-heading text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function ReqItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
      <div>
        <div className="font-semibold text-navy text-[15px] mb-0.5">{title}</div>
        <div className="leading-relaxed">{desc}</div>
      </div>
    </li>
  );
}

function EnrichCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}
