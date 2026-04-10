import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Scholarships & Financial Aid | Diocese of Evansville",
  description:
    "Over 850 scholarships awarded annually to make Catholic education accessible in the Diocese of Evansville. Financial aid for Catholic school families.",
};

export default function ScholarshipsPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Scholarships & Financial Aid"
        subtitle="Making Catholic education accessible to every family in the diocese."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Scholarships & Financial Aid" },
        ]}
      />

      <main id="main-content">
        {/* Commitment */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Our Commitment</div>
              <h2 className="section-title">No Family Left Behind</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Diocese of Evansville is committed to ensuring that no family is denied a Catholic education for their children due to financial hardship. Each year, more than 850 scholarships are awarded to students across our 26 Catholic schools, funded by the generosity of donors to the Catholic Ministries Appeal and dedicated scholarship funds.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-cream rounded-xl border border-border p-7 text-center">
                <div className="font-heading text-4xl font-bold text-gold mb-1">850+</div>
                <div className="font-heading text-base font-bold text-navy mb-1">Scholarships Awarded Annually</div>
                <div className="text-xs text-text-light">Across Pre-K through 12th grade</div>
              </div>
              <div className="bg-cream rounded-xl border border-border p-7 text-center">
                <div className="font-heading text-4xl font-bold text-gold mb-1">26</div>
                <div className="font-heading text-base font-bold text-navy mb-1">Catholic Schools</div>
                <div className="text-xs text-text-light">In the Diocese of Evansville</div>
              </div>
              <div className="bg-cream rounded-xl border border-border p-7 text-center">
                <div className="font-heading text-4xl font-bold text-gold mb-1">6,800+</div>
                <div className="font-heading text-base font-bold text-navy mb-1">Students Enrolled</div>
                <div className="text-xs text-text-light">Across 12 counties in SW Indiana</div>
              </div>
            </div>

            <p className="text-base text-text-medium leading-relaxed text-center max-w-[680px] mx-auto">
              Catholic education is an investment in the whole child: academically, spiritually, and socially. Our scholarship program makes this transformative experience available to families across all 12 counties of the diocese.
            </p>
          </div>
        </section>

        {/* Available Programs */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Programs</div>
              <h2 className="section-title">Available Financial Aid Programs</h2>
            </div>

            <div className="space-y-5">
              <ProgramCard
                title="Diocesan Tuition Assistance"
                desc="Need-based tuition assistance funded through the Catholic Ministries Appeal. Families complete a financial application through FACTS Grant & Aid Assessment. Available for grades K-12 at any diocesan Catholic school."
                deadline="Application deadline: March 15 annually"
              />
              <ProgramCard
                title="Indiana Choice Scholarship (Voucher)"
                desc="Indiana families who meet income guidelines may qualify for a state-funded voucher that covers up to 90% of tuition at participating Catholic schools. The diocese assists families with the application process."
                deadline="Apply through the Indiana Department of Education"
              />
              <ProgramCard
                title="SGO Tax Credit Scholarships"
                desc="The Diocese operates a Scholarship Granting Organization (SGO) that allows donors to receive a 50% Indiana state tax credit for contributions to scholarships. Families with qualifying income may apply for these scholarships for K-12 students."
                deadline="Applications accepted on a rolling basis"
              />
              <ProgramCard
                title="School-Based Scholarships"
                desc="Many individual schools offer merit-based and need-based scholarships funded by alumni associations, parish organizations, and endowments. Contact your school's admissions office for details on available awards."
                deadline="Varies by school"
              />
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">How to Apply</div>
              <h2 className="section-title">Steps to Apply for Financial Aid</h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
              <div className="space-y-5 text-sm text-text-medium">
                <StepItem number="1" title="Complete FACTS Application" desc="Create an account at factsaid.com and complete the Grant & Aid Assessment. You will need tax returns, W-2s, and documentation of income and expenses." />
                <StepItem number="2" title="Contact Your School" desc="Notify the admissions office at your desired school that you have applied for financial aid. Ask about any school-specific scholarships or grants." />
                <StepItem number="3" title="Check Voucher Eligibility" desc="Visit the Indiana Department of Education website to determine if your family qualifies for the Indiana Choice Scholarship (voucher) program." />
                <StepItem number="4" title="Receive Your Award" desc="Financial aid awards are communicated in the spring. The diocese and schools work together to assemble the best possible aid package for each family." />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Apply for Financial Aid</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Every Child Deserves a Catholic Education
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Contact the Catholic Schools Office for guidance on scholarship applications and financial aid options.
            </p>
            <div className="text-gold font-semibold text-lg mb-8">(812) 424-5536 | schools@evdio.org</div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/schools/tuition" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Tuition & Affordability
              </Link>
              <Link href="/give/appeal" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm bg-accent-red text-white hover:bg-accent-red/90 transition-colors">
                Support Scholarships
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ProgramCard({ title, desc, deadline }: { title: string; desc: string; deadline: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-7">
      <h3 className="font-heading text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed mb-3">{desc}</p>
      <span className="text-xs text-blue font-semibold">{deadline}</span>
    </div>
  );
}

function StepItem({ number, title, desc }: { number: string; title: string; desc: string }) {
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
