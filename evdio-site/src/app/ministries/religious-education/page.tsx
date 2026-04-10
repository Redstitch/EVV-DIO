import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Religious Education | Diocese of Evansville",
  description:
    "Parish religious education, Teacher Formation Day, religion curriculum, and faith formation resources in the Diocese of Evansville.",
};

export default function ReligiousEducationPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Religious Education"
        subtitle="Faith formation for every age, at every stage, in every parish."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Religious Education" },
        ]}
      />

      <main id="main-content">
        {/* Mission */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Our Mission</div>
              <h2 className="section-title">Forming Disciples at Every Age</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Office of Catechesis and Religious Education supports parish-based faith formation programs across the Diocese of Evansville. We provide curriculum guidance, catechist training, and resources to ensure that Catholics of all ages have opportunities to learn, grow, and deepen their understanding of the faith.
              </p>
            </div>

            <div className="bg-navy rounded-2xl p-8 md:p-10 text-center">
              <p className="font-heading text-xl md:text-2xl text-white leading-relaxed italic mb-4">
                &ldquo;Religious education is not limited to classrooms. It happens in homes, in parishes, and in the living witness of the community.&rdquo;
              </p>
              <p className="text-white/60 text-sm">Office of Catechesis, Diocese of Evansville</p>
            </div>
          </div>
        </section>

        {/* Parish Education Leaders */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">For Catechists & Directors</div>
              <h2 className="section-title">Parish Education Leaders</h2>
              <p className="section-subtitle mx-auto">
                Directors of Religious Education (DREs), coordinators, and volunteer catechists are the backbone of faith formation in our parishes. We provide the tools, training, and support they need to succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="DRE Network"
                desc="Monthly networking meetings for Directors of Religious Education to share best practices, troubleshoot challenges, and build community. Regional gatherings are held across the four deaneries."
              />
              <ResourceCard
                title="Catechist Certification"
                desc="A multi-year formation program for volunteer catechists covering theology, methodology, and spirituality. Certified catechists are recognized by the Bishop at an annual commissioning Mass."
              />
              <ResourceCard
                title="Mentorship Program"
                desc="New DREs and catechists are paired with experienced mentors for their first year. One-on-one guidance helps new leaders navigate curriculum, parent communication, and sacramental preparation."
              />
              <ResourceCard
                title="Resource Library"
                desc="The diocesan office maintains a lending library of catechetical resources, textbooks, DVDs, and activity kits available to all parishes at no charge."
              />
              <ResourceCard
                title="Technology Support"
                desc="Training on digital catechetical tools, online registration systems, and virtual meeting platforms for parishes offering hybrid or remote faith formation options."
              />
              <ResourceCard
                title="Safe Environment Compliance"
                desc="All catechists and volunteers must complete Safe Environment training. The office coordinates scheduling and tracks compliance for parish programs."
              />
            </div>
          </div>
        </section>

        {/* Teacher Formation Day */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Annual Event</div>
                <h2 className="section-title text-left">Teacher Formation Day</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Teacher Formation Day is the premier annual professional development event for Catholic school teachers and parish catechists in the Diocese of Evansville. Held each fall, it brings together hundreds of educators for a day of spiritual renewal, practical workshops, and fellowship.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  The day begins with Mass celebrated by Bishop Joseph M. Siegel and features a keynote speaker of national prominence, followed by breakout sessions covering topics such as differentiated instruction, integrating faith across the curriculum, classroom management, and the latest catechetical resources.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  Teacher Formation Day is open to all Catholic school teachers, parish DREs, catechists, and school administrators. Registration opens each August.
                </p>
              </div>

              <div className="bg-cream rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-5">What to Expect</h3>
                <ul className="space-y-3 text-sm text-text-medium">
                  <ExpectItem text="Opening Mass with Bishop Siegel" />
                  <ExpectItem text="Nationally recognized keynote speaker" />
                  <ExpectItem text="20+ breakout sessions across all grade levels" />
                  <ExpectItem text="Exhibitor hall with catechetical publishers" />
                  <ExpectItem text="Networking lunch with educators across 26 schools" />
                  <ExpectItem text="Continuing education credits available" />
                  <ExpectItem text="Recognition of newly certified catechists" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Religion Curriculum */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Academics</div>
              <h2 className="section-title">Religion Curriculum</h2>
              <p className="section-subtitle mx-auto">
                The diocesan religion curriculum is aligned with the USCCB Doctrinal Elements and provides a comprehensive, age-appropriate framework for teaching the Catholic faith from Pre-K through high school.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <CurrCard
                title="Pre-K through Grade 2"
                desc="Introduction to God's love, the life of Jesus, prayer, the sacraments of Baptism and Eucharist, the saints, and the Church year. Emphasis on storytelling, prayer rituals, and family involvement."
              />
              <CurrCard
                title="Grades 3 through 5"
                desc="Deeper exploration of the sacraments, the Ten Commandments, the Beatitudes, Scripture, Church history, and moral decision-making. Preparation for First Reconciliation and First Communion."
              />
              <CurrCard
                title="Grades 6 through 8"
                desc="Study of the Old and New Testaments, the Creed, Catholic Social Teaching, the liturgical year, and adolescent faith development. Confirmation preparation typically begins in this stage."
              />
              <CurrCard
                title="High School"
                desc="Four-year sequence covering the Paschal Mystery, Sacred Scripture, the Church, the sacraments, morality, Catholic Social Teaching, and vocational discernment. Courses are aligned with the USCCB Framework."
              />
            </div>

            <div className="bg-gold/10 rounded-xl border border-gold/20 p-6 text-center">
              <p className="text-sm text-text-medium">
                <strong className="text-navy">Approved Textbook Series:</strong> The diocese uses curriculum materials from publishers such as Our Sunday Visitor, Loyola Press, and Pflaum. Parish programs may select from the approved list.
              </p>
            </div>
          </div>
        </section>

        {/* Faith Formation Resources */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Resources</div>
              <h2 className="section-title">Faith Formation Resources</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <SmallCard title="Family Faith at Home" desc="Activities, prayers, and conversation starters for families to practice faith formation at home." />
              <SmallCard title="Sacrament Prep Guides" desc="Parish guides for preparing children and teens for Reconciliation, Eucharist, and Confirmation." />
              <SmallCard title="Adult Faith Formation" desc="Bible study guides, book recommendations, and small group resources for adult learners." />
              <SmallCard title="OCIA Resources" desc="Materials for the Order of Christian Initiation of Adults, for those entering or returning to the Catholic Church." />
              <SmallCard title="Vacation Bible School" desc="Recommended VBS programs and planning guides for parishes hosting summer faith programs." />
              <SmallCard title="Liturgical Year Calendar" desc="Downloadable calendars, saint of the day resources, and seasonal prayer guides." />
              <SmallCard title="Inclusive Catechesis" desc="Resources for adapting faith formation for students with disabilities and special learning needs." />
              <SmallCard title="Digital Tools" desc="Recommended apps, video series, and online platforms for engaging modern learners." />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Get in Touch</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Office of Catechesis
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Contact us for curriculum support, catechist training, or information about parish faith formation programs.
            </p>
            <div className="text-gold font-semibold text-lg mb-8">(812) 424-5536 | catechesis@evdio.org</div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/ministries/spred" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Special Needs Religious Ed
              </Link>
              <Link href="/ministries" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                All Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ResourceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function CurrCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-7">
      <h3 className="font-heading text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function SmallCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl border border-border p-5">
      <h3 className="font-heading text-base font-bold text-navy mb-1">{title}</h3>
      <p className="text-xs text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function ExpectItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{text}</span>
    </li>
  );
}
