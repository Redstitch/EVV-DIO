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
        <section className="page-content">
          <div className="info-block" style={{ borderLeft: "4px solid var(--gold)" }}>
            <span className="section-tag" style={{ textAlign: "left" }}>Important</span>
            <h2 style={{ marginBottom: 12 }}>Enrollment Happens at Each School</h2>
            <p>
              Each of our 26 Catholic schools manages its own enrollment process, application forms, and admissions timeline. There is no central diocesan application — you apply directly to the school your child will attend.
            </p>
            <p>
              The steps below walk you through the general process. To apply, find your school and follow its specific enrollment instructions.
            </p>
            <div style={{ marginTop: 20 }}>
              <Link href="/schools/find" className="btn btn-primary">
                Find Your School to Enroll
              </Link>
            </div>
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Steps */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Enrollment Process</span>
            <h2 className="section-h2">How to Enroll</h2>
            <p className="section-desc">
              The enrollment process is designed to be straightforward and welcoming. Here is what to expect.
            </p>
          </div>

          <div className="interior-card" style={{ cursor: "default" }}>
            <div className="step-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div>
                  <h3>Choose a School</h3>
                  <p>Browse our 26 schools by location, grade level, and programs. Visit our Find a School page or contact the Catholic Schools Office for help choosing the right fit for your family.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div>
                  <h3>Schedule a Visit</h3>
                  <p>Contact the school directly to schedule a campus tour. Seeing the school in action — the classrooms, the chapel, the playground — is the best way to understand what makes our schools special.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div>
                  <h3>Submit an Application</h3>
                  <p>Complete the school&rsquo;s enrollment application. Most schools accept applications online or in person at the school office. Application deadlines vary, but spring registration (January through March) is typical for the following school year.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div>
                  <h3>Gather Documents</h3>
                  <p>Prepare the required documents for enrollment, including birth certificate, immunization records, baptismal certificate (if applicable), and records from a previous school.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">5</div>
                <div>
                  <h3>Explore Financial Assistance</h3>
                  <p>Catholic education is more affordable than many families expect. Explore tuition assistance, scholarships, and the Indiana School Choice Scholarship (voucher) program.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">6</div>
                <div>
                  <h3>Welcome to the Family</h3>
                  <p>Once accepted, your family will receive orientation information, supply lists, and details about back-to-school events. You are now part of the Catholic school community.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" /><circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" /><circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* Required Documents */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2">
            <div>
              <div className="section-head" style={{ textAlign: "left" }}>
                <span className="section-tag" style={{ textAlign: "left" }}>Checklist</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>Required Documents</h2>
              </div>
              <p>
                While requirements may vary slightly by school, most Catholic schools in the diocese will request the following documents at enrollment.
              </p>
              <ul style={{ marginTop: 16 }}>
                <li>Completed enrollment application</li>
                <li>Copy of the child&rsquo;s birth certificate</li>
                <li>Up-to-date immunization records</li>
                <li>Baptismal certificate (if Catholic)</li>
                <li>Most recent report card or academic records</li>
                <li>IEP or 504 plan (if applicable)</li>
                <li>Custody documentation (if applicable)</li>
                <li>Emergency contact information</li>
              </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="interior-card" style={{ cursor: "default" }}>
                <h3>Important Dates</h3>
                <table style={{ width: "100%", fontSize: 14 }}>
                  <tbody>
                    <tr><td>Open Houses</td><td style={{ fontWeight: 600, textAlign: "right" }}>January - February</td></tr>
                    <tr><td>Registration Opens</td><td style={{ fontWeight: 600, textAlign: "right" }}>January</td></tr>
                    <tr><td>Priority Deadline</td><td style={{ fontWeight: 600, textAlign: "right" }}>March 1</td></tr>
                    <tr><td>Voucher Applications</td><td style={{ fontWeight: 600, textAlign: "right" }}>February - April</td></tr>
                    <tr><td>New Family Orientation</td><td style={{ fontWeight: 600, textAlign: "right" }}>August</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="interior-card" style={{ cursor: "default" }}>
                <h3>Non-Catholic Families Welcome</h3>
                <p>
                  Catholic schools welcome families of all faith backgrounds. Non-Catholic students participate in the academic program and school community while their own faith tradition is respected. All students attend religion classes and school liturgies as part of the educational experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Indiana Voucher */}
        <section className="page-content bg-blue">
          <div className="section-head">
            <span className="section-tag">Indiana School Choice</span>
            <h2 className="section-h2">School Voucher Program</h2>
            <p className="section-desc">
              Indiana&rsquo;s School Choice Scholarship Program allows eligible families to use state funding toward tuition at an accredited private school, including all Catholic schools in the diocese. Many families qualify for partial or full vouchers that cover most or all of tuition.
            </p>
            <p className="section-desc">
              Contact your preferred school to learn whether your family qualifies and for help navigating the application process.
            </p>
          </div>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/schools/tuition" className="btn btn-primary">
              Learn About Tuition Assistance
            </Link>
            <Link href="/schools/find" className="btn btn-secondary">
              Find a School
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Questions About Enrollment?</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the Catholic Schools Office or reach out to the school of your choice directly. We are happy to help your family through every step of the process.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Contact the Schools Office <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
