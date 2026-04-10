import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Baptism",
  description:
    "Learn about the Sacrament of Baptism in the Diocese of Evansville. Find information on infant baptism, adult baptism through OCIA, and how to prepare.",
};

export default function Baptism() {
  return (
    <>
      <PageHero
        label="Faith & Sacraments"
        title="Baptism"
        subtitle="The Sacrament of Baptism is the gateway to life in the Spirit and the door that gives access to the other sacraments."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faith & Sacraments", href: "/faith" },
          { label: "Baptism" },
        ]}
      />

      <main id="main-content">
        {/* Teaching */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">The First Sacrament</div>
              <h2 className="section-title">Born of Water and Spirit</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Through Baptism, we are freed from sin, reborn as children of God, and incorporated into the Church. Baptism imprints an indelible spiritual mark on the soul, signifying that we belong to Christ forever. It is the foundation of the entire Christian life.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-border">
              <p className="font-heading text-xl italic text-navy text-center leading-relaxed">
                &ldquo;Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo;
              </p>
              <p className="text-center text-sm text-text-light mt-3">&mdash; Matthew 28:19</p>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Infant Baptism */}
              <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Infant Baptism</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-5">
                  The Catholic Church baptizes infants because Baptism is a gift of grace that does not depend on human merit. Parents and godparents promise to raise the child in the Catholic faith.
                </p>
                <h4 className="font-semibold text-navy text-sm mb-3">To prepare for your child&rsquo;s Baptism:</h4>
                <ul className="space-y-2.5 text-sm text-text-medium">
                  <ListItem text="Contact your parish as early as possible, ideally during pregnancy or shortly after birth." />
                  <ListItem text="Attend a Baptism preparation class offered by your parish." />
                  <ListItem text="Choose godparents who are confirmed, practicing Catholics at least 16 years of age." />
                  <ListItem text="Gather required documents, including a copy of the child's birth certificate." />
                </ul>
              </div>

              {/* Adult Baptism */}
              <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Adult Baptism</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-5">
                  Adults who have never been baptized receive the sacrament through the Order of Christian Initiation of Adults (OCIA). This journey of faith typically culminates at the Easter Vigil, when adults receive Baptism, Confirmation, and Eucharist together.
                </p>
                <h4 className="font-semibold text-navy text-sm mb-3">What to expect:</h4>
                <ul className="space-y-2.5 text-sm text-text-medium">
                  <ListItem text="A welcoming community that will walk with you at your own pace." />
                  <ListItem text="Weekly sessions exploring Catholic teaching, Scripture, and prayer." />
                  <ListItem text="A sponsor from the parish to support you throughout the process." />
                  <ListItem text="The Rite of Election celebrated with Bishop Siegel at St. Benedict Cathedral." />
                </ul>
                <div className="mt-6">
                  <Link
                    href="/faith/become-catholic"
                    className="text-sm font-semibold text-blue hover:text-navy transition-colors inline-flex items-center gap-1.5"
                  >
                    Learn more about OCIA
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Common Questions</div>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <FaqItem
                q="When can my child be baptized?"
                a="Baptisms are typically celebrated on Sundays after Mass or at a designated time set by the parish. Contact your parish to schedule a date, as preparation is usually required first."
              />
              <FaqItem
                q="What if I was baptized in another Christian church?"
                a="The Catholic Church recognizes baptisms from most Christian denominations if they were performed with water and in the name of the Father, Son, and Holy Spirit. You would not be re-baptized but would complete your initiation through Confirmation and Eucharist."
              />
              <FaqItem
                q="Can I choose godparents from outside the diocese?"
                a="Yes. Godparents must be confirmed, practicing Catholics at least 16 years old. If they are from outside the diocese, they may need a letter of eligibility from their own parish."
              />
              <FaqItem
                q="Is there a fee for Baptism?"
                a="There is no fee for any sacrament. Some families choose to make a free-will offering to the parish, but it is never required."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Ready to Schedule a Baptism?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Contact your parish to begin the preparation process. Every parish in the Diocese of Evansville is ready to welcome you and your family.
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

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{q}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{a}</p>
    </div>
  );
}
