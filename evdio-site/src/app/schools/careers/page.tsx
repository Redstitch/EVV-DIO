import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teaching & Staff Careers | Diocese of Evansville",
  description:
    "Explore teaching and staff career opportunities in Catholic schools of the Diocese of Evansville. Join a community dedicated to faith-based education across 26 schools.",
};

export default function CareersPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title">Teaching <em>Careers.</em></h1>
            <p className="deck">Teaching in a Catholic school is more than a career. It is a vocation. Join a community of educators who are shaping minds, forming hearts, and building the future of the Church.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Catholic school students at Mass with the Bishop"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Why Teach */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Your Calling</div>
              <h2 className="section-title">Why Teach in a Catholic School?</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Catholic school teachers do more than educate. They mentor, minister, and model the faith for their students every day. In the Diocese of Evansville, our 26 schools offer a supportive, mission-driven environment where your work has eternal significance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ReasonCard
                title="Mission-Driven Work"
                desc="Every lesson, every interaction, every day is an opportunity to bring students closer to Christ. Your work in the classroom is a form of ministry."
              />
              <ReasonCard
                title="Smaller Class Sizes"
                desc="With an average class size of 18 students, you can build meaningful relationships with every child and provide individualized attention."
              />
              <ReasonCard
                title="Supportive Community"
                desc="Catholic schools are close-knit communities where teachers, parents, and administrators work together with shared values and mutual respect."
              />
              <ReasonCard
                title="Professional Growth"
                desc="The diocese provides ongoing professional development, mentoring for new teachers, and opportunities for advanced education and faith formation."
              />
              <ReasonCard
                title="Whole-Child Approach"
                desc="Catholic education addresses the intellectual, spiritual, physical, and social-emotional development of every student. This approach is deeply rewarding for educators."
              />
              <ReasonCard
                title="Making a Difference"
                desc="Our teachers consistently report that seeing their students grow in faith, character, and academic achievement is the most fulfilling aspect of their career."
              />
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Opportunities</div>
              <h2 className="section-title">Types of Positions</h2>
              <p className="section-subtitle mx-auto">
                We are always looking for talented, faith-filled individuals to join our school communities. Positions are available across all grade levels and subject areas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <PosCard title="Classroom Teachers" desc="Pre-K through 12th grade across all core subjects and electives." />
              <PosCard title="Administrators" desc="Principals, assistant principals, and academic deans." />
              <PosCard title="Support Staff" desc="Teacher aides, administrative assistants, and maintenance personnel." />
              <PosCard title="Specialists" desc="School counselors, resource teachers, librarians, and technology coordinators." />
              <PosCard title="Campus Ministry" desc="Youth ministers, campus ministry coordinators, and retreat leaders." />
              <PosCard title="Athletics" desc="Coaches and athletic directors across all sports programs." />
              <PosCard title="Music & Arts" desc="Music teachers, band directors, art teachers, and drama instructors." />
              <PosCard title="Extended Care" desc="Before and after school program staff and coordinators." />
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Qualifications</div>
                <h2 className="section-title text-left">What We Look For</h2>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  We seek educators and staff who combine professional excellence with a genuine commitment to the Catholic mission. You do not need to be Catholic to work in our schools, but all employees are expected to support the Catholic identity of the school.
                </p>
                <ul className="space-y-3 text-sm text-text-medium">
                  <QualItem text="Valid Indiana teaching license (for teaching positions)" />
                  <QualItem text="Bachelor&rsquo;s degree minimum; advanced degrees preferred" />
                  <QualItem text="Willingness to support the Catholic mission of the school" />
                  <QualItem text="Successful completion of Safe Environment training and background check" />
                  <QualItem text="Strong communication and collaboration skills" />
                  <QualItem text="Passion for working with young people" />
                </ul>
              </div>

              <div className="bg-cream rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-5">Benefits</h3>
                <div className="space-y-3 text-sm text-text-medium">
                  <BenefitItem text="Competitive salary schedule" />
                  <BenefitItem text="Health, dental, and vision insurance" />
                  <BenefitItem text="Retirement plan" />
                  <BenefitItem text="Professional development funding" />
                  <BenefitItem text="Tuition discount for children of employees" />
                  <BenefitItem text="Life insurance and disability coverage" />
                  <BenefitItem text="Paid holidays, sick days, and personal days" />
                  <BenefitItem text="Mission-centered work environment" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">How to Apply</div>
              <h2 className="section-title">Join Our Team</h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
              <div className="space-y-5 text-sm text-text-medium">
                <ApplyStep
                  number="1"
                  title="Browse Open Positions"
                  desc="Check with individual schools or the Catholic Schools Office for current openings. Positions are posted throughout the year as they become available."
                />
                <ApplyStep
                  number="2"
                  title="Submit Your Application"
                  desc="Send your resume, cover letter, and a completed diocesan application form to the school or the Catholic Schools Office."
                />
                <ApplyStep
                  number="3"
                  title="Interview"
                  desc="Selected candidates will be invited for an interview with the school principal and hiring committee."
                />
                <ApplyStep
                  number="4"
                  title="Background Check & Training"
                  desc="All offers are contingent on successful completion of a background check and Safe Environment training."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Answer the Call</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Contact the Catholic Schools Office to learn about current openings and how to apply. Your talents and faith can change lives.
            </p>
            <Link href="/about/contact" className="btn btn-primary">
              Contact the Catholic Schools Office
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function ReasonCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function PosCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-base font-bold text-navy mb-1">{title}</h3>
      <p className="text-xs text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function QualItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-border last:border-b-0">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{text}</span>
    </div>
  );
}

function ApplyStep({ number, title, desc }: { number: string; title: string; desc: string }) {
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
