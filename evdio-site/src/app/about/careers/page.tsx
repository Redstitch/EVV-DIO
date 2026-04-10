import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore employment opportunities at the Catholic Center, parishes, and schools throughout the Diocese of Evansville. Join our mission to serve 79,500 Catholics in Southwestern Indiana.",
};

const openPositions = [
  {
    title: "Elementary School Principal",
    location: "Holy Redeemer School, Evansville",
    type: "Full-Time",
    department: "Catholic Schools",
    posted: "March 28, 2026",
    description:
      "Lead a vibrant Catholic elementary school community, overseeing academics, faith formation, and school operations in partnership with the parish pastor.",
  },
  {
    title: "Director of Youth Ministry",
    location: "Catholic Center, Evansville",
    type: "Full-Time",
    department: "Catechesis & Evangelization",
    posted: "March 20, 2026",
    description:
      "Develop and coordinate diocesan youth ministry programs, retreats, and events serving young people across all four deaneries.",
  },
  {
    title: "Parish Business Manager",
    location: "St. Benedict Cathedral, Evansville",
    type: "Full-Time",
    department: "Parish Administration",
    posted: "March 15, 2026",
    description:
      "Manage the financial, administrative, and facility operations of the cathedral parish, working closely with the rector and parish staff.",
  },
  {
    title: "Music Minister",
    location: "Holy Family Parish, Jasper",
    type: "Part-Time",
    department: "Liturgy & Worship",
    posted: "March 10, 2026",
    description:
      "Lead the music ministry for weekend liturgies and holy days, directing the choir and coordinating cantors and instrumentalists.",
  },
  {
    title: "Case Manager — Catholic Charities",
    location: "Catholic Charities, Evansville",
    type: "Full-Time",
    department: "Catholic Charities",
    posted: "March 5, 2026",
    description:
      "Provide direct client services including needs assessments, referrals, and case management for families in crisis across Vanderburgh County.",
  },
  {
    title: "Middle School Religion Teacher",
    location: "Reitz Memorial High School, Evansville",
    type: "Full-Time",
    department: "Catholic Schools",
    posted: "February 25, 2026",
    description:
      "Teach middle school religion courses, fostering students\u2019 understanding of Catholic faith and traditions in a supportive school community.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Careers"
        subtitle="Join our mission to serve 79,500 Catholics across Southwestern Indiana."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Careers" },
        ]}
      />

      <main id="main-content">
        {/* Intro */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
              <div>
                <div className="section-label text-left">Work With Us</div>
                <h2 className="section-title text-left">
                  Your Career, Our Mission
                </h2>
                <p className="text-base text-text-medium leading-relaxed mb-4">
                  Working for the Diocese of Evansville is more than a job &mdash; it is a calling. Whether at the Catholic Center, in one of our 26 schools, at a parish, or through Catholic Charities, every role contributes to our mission of Encounter, Deepen, and Engage.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  We offer competitive compensation, comprehensive benefits, a faith-filled work environment, and the opportunity to make a meaningful difference in the lives of families across 12 counties.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cream rounded-xl p-6 border border-border text-center">
                  <div className="font-heading text-[32px] font-bold text-navy leading-none">45</div>
                  <div className="text-xs text-text-light mt-1 uppercase tracking-wider font-semibold">Parishes</div>
                </div>
                <div className="bg-cream rounded-xl p-6 border border-border text-center">
                  <div className="font-heading text-[32px] font-bold text-navy leading-none">26</div>
                  <div className="text-xs text-text-light mt-1 uppercase tracking-wider font-semibold">Schools</div>
                </div>
                <div className="bg-cream rounded-xl p-6 border border-border text-center">
                  <div className="font-heading text-[32px] font-bold text-navy leading-none">12</div>
                  <div className="text-xs text-text-light mt-1 uppercase tracking-wider font-semibold">Counties</div>
                </div>
                <div className="bg-cream rounded-xl p-6 border border-border text-center">
                  <div className="font-heading text-[32px] font-bold text-navy leading-none">4</div>
                  <div className="text-xs text-text-light mt-1 uppercase tracking-wider font-semibold">Deaneries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Open Positions</div>
            <h2 className="section-title">Current Opportunities</h2>
            <p className="section-subtitle">
              Explore current openings across the diocese. New positions are posted as they become available.
            </p>

            <div className="space-y-4 mt-10">
              {openPositions.map((position) => (
                <div
                  key={position.title + position.location}
                  className="bg-white rounded-xl p-6 border border-border hover:border-gold/30 transition-colors group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue bg-blue/10 px-2.5 py-1 rounded-full">
                          {position.type}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-text-light bg-cream px-2.5 py-1 rounded-full">
                          {position.department}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-navy mb-1 group-hover:text-blue transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-sm text-text-light mb-3 flex items-center gap-1.5">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-text-light" aria-hidden="true">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        {position.location}
                      </p>
                      <p className="text-sm text-text-medium leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <p className="text-xs text-text-light">Posted {position.posted}</p>
                      <button className="btn btn-secondary text-xs py-2 px-4">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Why Work Here</div>
            <h2 className="section-title">Employee Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {[
                { title: "Health & Dental", desc: "Comprehensive medical, dental, and vision coverage for employees and their families." },
                { title: "Retirement Plan", desc: "Diocesan retirement plan with employer contributions to support your future." },
                { title: "Paid Time Off", desc: "Generous vacation, sick leave, and paid holidays including holy days of obligation." },
                { title: "Tuition Benefits", desc: "Reduced tuition at diocesan Catholic schools for employees and their children." },
                { title: "Professional Development", desc: "Ongoing training, conference attendance, and continuing education support." },
                { title: "Mission-Driven Culture", desc: "Work alongside dedicated colleagues in an environment centered on faith and service." },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-cream rounded-xl p-6 border border-border">
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-sm text-text-medium leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Don&rsquo;t See Your Ideal Position?
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              We are always interested in hearing from talented professionals who share our mission. Send your resume to the Office of Human Resources.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/about/contact" className="btn btn-primary">
                Contact Human Resources
              </Link>
              <a href="mailto:hr@evdio.org" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                hr@evdio.org
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
