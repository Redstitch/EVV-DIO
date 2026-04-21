import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Our Bishop — Bishop Joseph M. Siegel",
  description:
    "Meet Bishop Joseph M. Siegel, the sixth Bishop of Evansville, installed December 15, 2017. Learn about his life, ministry, and pastoral vision: Encounter. Deepen. Engage.",
};

export default function OurBishopPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Our <em>Bishop.</em></h1>
            <p className="deck">Bishop Joseph M. Siegel, sixth Bishop of the Diocese of Evansville</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/bishop/bishop-siegel.jpg"
              alt="Bishop Joseph M. Siegel"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Bishop Portrait & Bio */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start">
              <div className="flex flex-col items-center">
                <div className="w-[280px] h-[360px] rounded-[140px_140px_20px_20px] relative overflow-hidden shadow-[0_12px_40px_rgba(27,42,74,0.2)]">
                  <Image
                    src="/images/bishop/bishop-siegel.jpg"
                    alt="Bishop Joseph M. Siegel"
                    fill
                    className="object-cover object-[center_top]"
                    priority
                  />
                </div>
                <div className="mt-6 text-center">
                  <Image
                    src="/images/branding/diocese-crest.png"
                    alt="Diocese of Evansville crest"
                    width={80}
                    height={80}
                    className="mx-auto mb-3"
                  />
                  <p className="text-xs text-text-light tracking-wider uppercase font-semibold">
                    Sixth Bishop of Evansville
                  </p>
                  <p className="text-xs text-text-light mt-1">
                    Installed December 15, 2017
                  </p>
                </div>
              </div>

              <div>
                <div className="section-label text-left">Meet Our Bishop</div>
                <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-navy leading-tight mb-2">
                  Most Reverend Joseph M. Siegel, D.D.
                </h2>
                <p className="font-heading text-xl italic text-blue mb-6 leading-snug">
                  &ldquo;We need to be ambassadors of one another &mdash; staff and parishes supporting each other. We are called to tell our story and meet people where they are.&rdquo;
                </p>

                <div className="space-y-4 text-base text-text-medium leading-relaxed">
                  <p>
                    Bishop Joseph M. Siegel was ordained and installed as the sixth Bishop of the Diocese of Evansville on December 15, 2017, at St. Benedict Cathedral. He was appointed by Pope Francis following a distinguished career of priestly service and episcopal leadership.
                  </p>
                  <p>
                    Born on September 7, 1959, in Joliet, Illinois, Bishop Siegel was ordained a priest for the Diocese of Joliet on May 24, 1986. He served in various pastoral and administrative roles before being ordained as an Auxiliary Bishop of the Diocese of Joliet on January 19, 2009.
                  </p>
                  <p>
                    As Bishop of Evansville, he leads a diocese of 79,500 Catholics across 45 parishes, 26 schools, and 12 counties in Southwestern Indiana. His pastoral vision &mdash; <strong className="text-navy">Encounter. Deepen. Engage.</strong> &mdash; calls every Catholic to encounter Christ, deepen their faith, and engage in the life and mission of the Church.
                  </p>
                  <p>
                    Bishop Siegel is known for his warmth, accessibility, and commitment to transparency. He has prioritized outreach to young adults, support for Catholic education, strengthening parish life, and the charitable mission of the diocese through Catholic Charities and the Catholic Ministries Appeal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pastoral Vision Highlight */}
        <section className="bg-cream py-16 px-8">
          <div className="max-w-[1080px] mx-auto">
            <div className="bg-white rounded-2xl border border-border p-10 shadow-[var(--shadow-soft)]">
              <div className="section-label text-left">Pastoral Vision</div>
              <h2 className="section-title text-left">Encounter. Deepen. Engage.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <VisionCard
                  number="01"
                  title="Encounter"
                  description="Create opportunities for every person to encounter the living Christ through worship, parish life, and personal invitation. We meet people where they are."
                />
                <VisionCard
                  number="02"
                  title="Deepen"
                  description="Provide formation and resources that help Catholics at every stage of life grow in their understanding of the faith and relationship with God."
                />
                <VisionCard
                  number="03"
                  title="Engage"
                  description="Empower the faithful to actively participate in the mission of the Church through service, evangelization, stewardship, and leadership."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Priorities */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Bishop&rsquo;s Priorities</div>
            <h2 className="section-title">Areas of Focus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <PriorityCard
                title="Catholic Education"
                description="Sustaining and strengthening our 26 schools, awarding 850 scholarships annually, and ensuring every child has access to a Catholic education rooted in faith and academic excellence."
              />
              <PriorityCard
                title="Parish Vitality"
                description="Supporting vibrant parish communities across all four deaneries with resources for worship, faith formation, and community building that bring people together."
              />
              <PriorityCard
                title="Charitable Mission"
                description="Expanding Catholic Charities to serve more than 2,400 families each year with food assistance, counseling, immigration services, and emergency aid."
              />
              <PriorityCard
                title="Transparency & Trust"
                description="Publishing monthly diocesan dashboards, maintaining open financial reporting, and fostering a culture of accountability that strengthens the bond between parishes and the Catholic Center."
              />
            </div>
          </div>
        </section>

        {/* Contact / Learn More */}
        <section className="bg-navy py-16 px-8 relative overflow-hidden">
          <div className="absolute -top-[150px] -right-[150px] w-[400px] h-[400px] border border-gold/[0.08] rounded-full pointer-events-none" />
          <div className="max-w-[900px] mx-auto text-center relative z-10">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Connect with Our Bishop
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              Bishop Siegel welcomes your correspondence. Write to the Office of the Bishop at the Catholic Center or contact us to request a meeting.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/about/contact" className="btn btn-primary">
                Contact the Bishop&rsquo;s Office
              </Link>
              <Link href="/about/our-vision" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Read Pastoral Priorities
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function VisionCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">
      <div className="text-[48px] font-heading font-bold text-gold/20 leading-none mb-2">
        {number}
      </div>
      <h3 className="font-heading text-2xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{description}</p>
    </div>
  );
}

function PriorityCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border">
      <h3 className="font-heading text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{description}</p>
    </div>
  );
}
