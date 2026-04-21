import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inquire About Enrollment",
  description:
    "Considering Catholic school for your child? Start here to learn about the enrollment process, required documents, important dates, and financial assistance across Diocese of Evansville schools.",
};

export default function Enroll() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title"><em>Enroll.</em></h1>
            <p className="deck">Take the first step toward a Catholic education. Enrollment is open year-round at most schools, with primary registration in the spring for the following academic year.</p>
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
        {/* Important: Enrollment is school-level */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[860px] mx-auto">
            <div className="bg-cream border-l-4 border-gold rounded-r-xl p-7">
              <div className="section-label text-left mb-2">Important</div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                Enrollment Happens at Each School
              </h2>
              <p className="text-base text-text-medium leading-relaxed mb-4">
                Each of our 26 Catholic schools manages its own enrollment process, application forms, and admissions timeline. There is no central diocesan application — you apply directly to the school your child will attend.
              </p>
              <p className="text-base text-text-medium leading-relaxed mb-5">
                The steps below walk you through the general process. To apply, find your school and follow its specific enrollment instructions.
              </p>
              <Link href="/schools/find" className="btn btn-primary">
                Find Your School to Enroll
              </Link>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Enrollment Process</div>
              <h2 className="section-title">How to Enroll</h2>
              <p className="section-subtitle mx-auto">
                The enrollment process is designed to be straightforward and welcoming. Here is what to expect.
              </p>
            </div>

            <div className="space-y-0">
              <StepItem
                number="1"
                title="Choose a School"
                desc="Browse our 26 schools by location, grade level, and programs. Visit our Find a School page or contact the Catholic Schools Office for help choosing the right fit for your family."
              />
              <StepItem
                number="2"
                title="Schedule a Visit"
                desc="Contact the school directly to schedule a campus tour. Seeing the school in action — the classrooms, the chapel, the playground — is the best way to understand what makes our schools special."
              />
              <StepItem
                number="3"
                title="Submit an Application"
                desc="Complete the school's enrollment application. Most schools accept applications online or in person at the school office. Application deadlines vary, but spring registration (January through March) is typical for the following school year."
              />
              <StepItem
                number="4"
                title="Gather Documents"
                desc="Prepare the required documents for enrollment, including birth certificate, immunization records, baptismal certificate (if applicable), and records from a previous school."
              />
              <StepItem
                number="5"
                title="Explore Financial Assistance"
                desc="Catholic education is more affordable than many families expect. Explore tuition assistance, scholarships, and the Indiana School Choice Scholarship (voucher) program."
              />
              <StepItem
                number="6"
                title="Welcome to the Family"
                desc="Once accepted, your family will receive orientation information, supply lists, and details about back-to-school events. You are now part of the Catholic school community."
                last
              />
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Checklist</div>
                <h2 className="section-title text-left">Required Documents</h2>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  While requirements may vary slightly by school, most Catholic schools in the diocese will request the following documents at enrollment.
                </p>
                <ul className="space-y-3 text-sm text-text-medium">
                  <CheckItem text="Completed enrollment application" />
                  <CheckItem text="Copy of the child's birth certificate" />
                  <CheckItem text="Up-to-date immunization records" />
                  <CheckItem text="Baptismal certificate (if Catholic)" />
                  <CheckItem text="Most recent report card or academic records" />
                  <CheckItem text="IEP or 504 plan (if applicable)" />
                  <CheckItem text="Custody documentation (if applicable)" />
                  <CheckItem text="Emergency contact information" />
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">Important Dates</h3>
                  <div className="space-y-3 text-sm text-text-medium">
                    <DateRow label="Open Houses" value="January - February" />
                    <DateRow label="Registration Opens" value="January" />
                    <DateRow label="Priority Deadline" value="March 1" />
                    <DateRow label="Voucher Applications" value="February - April" />
                    <DateRow label="New Family Orientation" value="August" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">Non-Catholic Families Welcome</h3>
                  <p className="text-sm text-text-medium leading-relaxed">
                    Catholic schools welcome families of all faith backgrounds. Non-Catholic students participate in the academic program and school community while their own faith tradition is respected. All students attend religion classes and school liturgies as part of the educational experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indiana Voucher */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label">Indiana School Choice</div>
            <h2 className="section-title">School Voucher Program</h2>
            <p className="text-base text-text-medium leading-relaxed mb-6 max-w-[640px] mx-auto">
              Indiana&rsquo;s School Choice Scholarship Program allows eligible families to use state funding toward tuition at an accredited private school, including all Catholic schools in the diocese. Many families qualify for partial or full vouchers that cover most or all of tuition.
            </p>
            <p className="text-base text-text-medium leading-relaxed mb-8 max-w-[640px] mx-auto">
              Contact your preferred school to learn whether your family qualifies and for help navigating the application process.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/schools/tuition" className="btn btn-primary">
                Learn About Tuition Assistance
              </Link>
              <Link href="/schools/find" className="btn btn-secondary">
                Find a School
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Questions About Enrollment?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Contact the Catholic Schools Office or reach out to the school of your choice directly. We are happy to help your family through every step of the process.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact the Schools Office
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function StepItem({
  number,
  title,
  desc,
  last,
}: {
  number: string;
  title: string;
  desc: string;
  last?: boolean;
}) {
  return (
    <div className={`flex gap-6 ${!last ? "pb-10" : ""}`}>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-navy text-gold font-heading font-bold text-lg flex items-center justify-center flex-shrink-0">
          {number}
        </div>
        {!last && <div className="w-px flex-1 bg-border mt-3" />}
      </div>
      <div className="pb-2">
        <h3 className="font-heading text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{text}</span>
    </li>
  );
}

function DateRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
      <span>{label}</span>
      <span className="font-semibold text-navy">{value}</span>
    </div>
  );
}
