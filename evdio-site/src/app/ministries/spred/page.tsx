import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Special Needs Religious Education (SPRED) | Diocese of Evansville",
  description:
    "SPRED provides adapted faith formation for individuals with intellectual and developmental disabilities in the Diocese of Evansville.",
};

export default function SpredPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Special Needs Religious Education"
        subtitle="Every person is created in God's image and deserves to know His love."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Disability & Inclusion", href: "/ministries/disability" },
          { label: "Special Needs Religious Ed" },
        ]}
      />

      <main id="main-content">
        {/* About SPRED */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">About SPRED</div>
              <h2 className="section-title">Faith for Every Person</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                SPRED (Special Religious Education) is a faith formation program designed for children, teens, and adults with intellectual and developmental disabilities. Rooted in the belief that every person is created in the image and likeness of God, SPRED provides an adapted environment where participants can encounter Christ, experience community, and grow in their relationship with God.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-cream rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Our Approach</h3>
                <p className="text-sm text-text-medium leading-relaxed">
                  The program uses a sensory-based approach to catechesis, incorporating visual aids, music, movement, and hands-on activities to make the faith accessible to all learning styles and abilities. Small groups meet regularly, led by trained volunteer catechists who companion participants through the liturgical year.
                </p>
              </div>

              <div className="bg-cream rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Sacramental Preparation</h3>
                <p className="text-sm text-text-medium leading-relaxed">
                  SPRED supports parishes in preparing individuals with disabilities for the sacraments of Reconciliation, Eucharist, and Confirmation. Preparation is individualized and progresses at each participant&rsquo;s own pace, honoring their unique gifts and needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Participate */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Who We Serve</div>
              <h2 className="section-title">Participation & Volunteering</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Who Can Participate?</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  Children, teens, and adults with intellectual disabilities, developmental disabilities, autism spectrum disorders, and other special needs are welcome. No prior religious education is required. SPRED groups are organized by age and ability level to provide the most supportive environment.
                </p>
                <ul className="space-y-2 text-sm text-text-medium">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Children (ages 6-12)</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Teens (ages 13-18)</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Adults (18 and older)</span></li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Volunteer Catechists</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  SPRED relies on dedicated volunteers who receive specialized training in adaptive catechesis. No previous experience with disabilities is needed, just a generous heart and a willingness to learn. Volunteer catechists serve as companions in faith, walking alongside participants in their journey.
                </p>
                <ul className="space-y-2 text-sm text-text-medium">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Initial training provided by the diocesan office</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Ongoing formation throughout the year</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Safe Environment training required</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* A SPRED Session */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">What Happens</div>
              <h2 className="section-title">A Typical SPRED Session</h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
              <div className="space-y-5 text-sm text-text-medium">
                <SessionStep number="1" title="Gathering & Welcome" desc="Participants and catechists gather in a calm, prepared environment. The session opens with a greeting and a simple prayer." />
                <SessionStep number="2" title="Liturgy of the Word" desc="A Scripture passage is proclaimed using adapted language, images, and symbols. Participants engage with the Word through their senses." />
                <SessionStep number="3" title="Activity & Response" desc="Hands-on activities such as art, music, movement, or tactile exploration help participants connect with the theme of the session." />
                <SessionStep number="4" title="Prayer & Sending" desc="The session closes with a communal prayer, a blessing, and a commissioning to carry the joy of Christ into the week ahead." />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-gold/10 rounded-xl border border-gold/20 p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">Get Involved</h2>
              <p className="text-text-medium text-sm mb-4 max-w-[500px] mx-auto">
                To enroll a participant or to volunteer as a catechist, contact the Office of Catechesis.
              </p>
              <div className="font-semibold text-navy text-lg">(812) 424-5536 | catechesis@evdio.org</div>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap justify-center">
              <Link href="/ministries/disability" className="btn btn-secondary">
                Disability & Inclusion
              </Link>
              <Link href="/about/offices" className="btn btn-outline">
                Office of Catechesis
              </Link>
              <Link href="/ministries" className="btn btn-outline">
                All Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SessionStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="font-semibold text-navy text-[15px] mb-0.5">{title}</div>
        <div className="leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
