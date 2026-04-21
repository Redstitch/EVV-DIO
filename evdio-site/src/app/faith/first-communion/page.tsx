import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "First Communion",
  description:
    "Prepare your child for First Holy Communion in the Diocese of Evansville. Learn about requirements, preparation, and the meaning of the Eucharist.",
};

export default function FirstCommunion() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">First <em>Communion.</em></h1>
            <p className="deck">The Eucharist is the source and summit of the Christian life. First Holy Communion marks a child&#8217;s first reception of the Body and Blood of Christ.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="St. Benedict Cathedral, Evansville."
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
              <div className="section-label">The Sacrament of the Eucharist</div>
              <h2 className="section-title">The Source and Summit of Our Faith</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Eucharist is the most important sacrament of the Catholic Church. In the breaking of bread, we truly receive the Body and Blood of Jesus Christ. First Holy Communion is a milestone in a child&rsquo;s faith journey, marking the beginning of a lifelong relationship with Christ in the Eucharist.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-border">
              <p className="font-heading text-xl italic text-navy text-center leading-relaxed">
                &ldquo;I am the living bread that came down from heaven; whoever eats this bread will live forever; and the bread that I will give is my flesh for the life of the world.&rdquo;
              </p>
              <p className="text-center text-sm text-text-light mt-3">&mdash; John 6:51</p>
            </div>
          </div>
        </section>

        {/* Preparation */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Preparation</div>
                <h2 className="section-title text-left">Preparing Your Child</h2>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  In the Diocese of Evansville, children typically receive First Holy Communion in second grade, around age seven or eight. Preparation usually takes place through the parish religious education program or Catholic school.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  Before receiving First Communion, a child must also celebrate the Sacrament of Reconciliation (First Confession) for the first time. This usually occurs in the weeks leading up to First Communion.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  Parents play an essential role in this preparation. Your parish will provide resources and guidance to help you talk with your child about the Eucharist and deepen your family&rsquo;s faith together.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                <h3 className="font-heading text-2xl font-bold text-navy mb-6">What Your Child Will Learn</h3>
                <div className="space-y-4">
                  <LearnItem
                    title="The Real Presence"
                    desc="That the bread and wine truly become the Body and Blood of Jesus Christ."
                  />
                  <LearnItem
                    title="The Mass"
                    desc="The meaning and flow of the Mass, and how to participate reverently."
                  />
                  <LearnItem
                    title="Reconciliation"
                    desc="How to examine their conscience and receive God's forgiveness in Confession."
                  />
                  <LearnItem
                    title="Living the Eucharist"
                    desc="How receiving Communion connects them to Jesus and to the community of believers."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements & Timeline */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Requirements</div>
              <h2 className="section-title">What You Need to Know</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard
                title="Age & Grade"
                desc="Children are typically prepared in second grade. Older children or adults who have not received First Communion should contact their parish."
              />
              <InfoCard
                title="Baptism Required"
                desc="A child must be baptized before receiving First Communion. If your child has not been baptized, contact your parish about preparation."
              />
              <InfoCard
                title="First Confession"
                desc="Children must celebrate the Sacrament of Reconciliation before receiving First Communion, typically in the weeks prior."
              />
              <InfoCard
                title="Regular Mass Attendance"
                desc="Families are expected to attend Sunday Mass regularly as part of the preparation process and ongoing faith life."
              />
              <InfoCard
                title="Preparation Program"
                desc="Complete the parish's required sacramental preparation program, whether through religious education or Catholic school."
              />
              <InfoCard
                title="Parish Registration"
                desc="Families should be registered members of a parish in the Diocese of Evansville."
              />
            </div>
          </div>
        </section>

        {/* For Parents */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label">For Parents</div>
            <h2 className="section-title">Walking with Your Child</h2>
            <p className="text-base text-text-medium leading-relaxed mb-8 max-w-[600px] mx-auto">
              First Communion is a grace-filled time for the whole family. Here are some ways to make this season meaningful at home: pray together before meals, read the Sunday Gospel as a family, attend Mass together each week, and talk with your child about what it means to receive Jesus in the Eucharist.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/parishes" className="btn btn-primary">
                Find Your Parish
              </Link>
              <Link href="/faith/prayer-worship" className="btn btn-secondary">
                Prayer Resources
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function LearnItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
      <div>
        <div className="font-semibold text-navy text-[15px] mb-0.5">{title}</div>
        <div className="text-sm text-text-medium leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}
