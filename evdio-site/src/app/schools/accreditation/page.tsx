import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accreditation & Standards",
  description:
    "Learn about accreditation and academic standards in Catholic schools of the Diocese of Evansville. Cognia accreditation, Indiana Academic Standards, and teacher qualifications.",
};

export default function Accreditation() {
  return (
    <>
      <PageHero
        label="Catholic Schools"
        title="Accreditation & Standards"
        subtitle="Catholic schools in the Diocese of Evansville meet or exceed the same rigorous academic standards as public schools, with the added dimension of faith formation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Catholic Schools", href: "/schools" },
          { label: "Accreditation & Standards" },
        ]}
      />

      <main id="main-content">
        {/* Accreditation */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Accreditation</div>
              <h2 className="section-title">Accredited by Cognia</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                All 26 Catholic schools in the Diocese of Evansville are accredited by Cognia (formerly AdvancED/North Central Association). This accreditation is a mark of quality that assures families, communities, and stakeholders that our schools meet high standards for teaching, learning, and organizational effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AccredCard
                title="External Review"
                desc="Every five years, each school undergoes a rigorous external review by a team of trained educators who evaluate the quality of teaching, learning, and leadership."
              />
              <AccredCard
                title="Continuous Improvement"
                desc="Accreditation requires schools to engage in ongoing improvement planning, using data to identify strengths and areas for growth."
              />
              <AccredCard
                title="National Recognition"
                desc="Cognia accreditation is recognized across the United States and internationally, ensuring that our students' education is valued by colleges and other institutions."
              />
            </div>
          </div>
        </section>

        {/* Academic Standards */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Academic Standards</div>
                <h2 className="section-title text-left">Rigorous Academics</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Our curriculum is aligned with Indiana Academic Standards, ensuring that students in Catholic schools are learning the same core content as their peers in public schools. In many areas, our curriculum exceeds state requirements by integrating Catholic social teaching, ethics, and service learning.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Students in our schools consistently perform above state and national averages on standardized assessments, including ILEARN and NWEA MAP testing. Our high school graduates are accepted into colleges and universities at rates that exceed state averages.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  In addition to core academics, many of our schools offer enrichment programs in STEM, fine arts, foreign language, and advanced coursework.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                  <h3 className="font-heading text-xl font-bold text-navy mb-5">Core Curriculum</h3>
                  <ul className="space-y-2.5 text-sm text-text-medium">
                    <CurrItem label="Religion & Theology" />
                    <CurrItem label="English Language Arts" />
                    <CurrItem label="Mathematics" />
                    <CurrItem label="Science" />
                    <CurrItem label="Social Studies" />
                    <CurrItem label="Physical Education & Health" />
                    <CurrItem label="Fine Arts (Music & Visual Art)" />
                    <CurrItem label="World Languages (select schools)" />
                    <CurrItem label="Technology & Digital Literacy" />
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                  <h3 className="font-heading text-xl font-bold text-navy mb-5">Assessment</h3>
                  <p className="text-sm text-text-medium leading-relaxed mb-3">
                    Catholic schools participate in standardized assessment programs to measure student progress and inform instruction:
                  </p>
                  <ul className="space-y-2 text-sm text-text-medium">
                    <CurrItem label="NWEA MAP (Grades K-8)" />
                    <CurrItem label="ILEARN (Indiana state assessment)" />
                    <CurrItem label="PSAT, SAT, ACT (High School)" />
                    <CurrItem label="AP Exams (select courses)" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teacher Quality */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Teacher Quality</div>
              <h2 className="section-title">Qualified, Dedicated Educators</h2>
              <p className="section-subtitle mx-auto">
                Our teachers are not only academically qualified but are also committed to the Catholic mission. They see their work as a vocation, not just a career.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <QualCard
                title="State-Licensed"
                desc="100% of our teachers hold valid Indiana teaching licenses in their subject areas, meeting the same licensing requirements as public school teachers."
              />
              <QualCard
                title="Ongoing Formation"
                desc="Teachers participate in regular professional development, including faith formation, instructional strategies, classroom technology, and curriculum development."
              />
              <QualCard
                title="Advanced Degrees"
                desc="A significant percentage of our teachers hold master's degrees or higher, reflecting a commitment to excellence in their fields."
              />
              <QualCard
                title="Catholic Mission"
                desc="All teachers in Catholic schools commit to supporting the Catholic mission of the school, serving as role models of faith for their students."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              See Our Standards in Action
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              The best way to see what makes our schools exceptional is to visit. Schedule a tour and experience the quality, faith, and community of Catholic education firsthand.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/schools/find" className="btn btn-primary">
                Find a School
              </Link>
              <Link href="/schools/careers" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccredCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border text-center">
      <h3 className="font-heading text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function CurrItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2.5">
      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
      {label}
    </li>
  );
}

function QualCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}
