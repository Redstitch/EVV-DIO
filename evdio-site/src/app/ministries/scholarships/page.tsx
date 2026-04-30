import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Scholarships & Financial Aid | Diocese of Evansville",
  description:
    "Over 850 scholarships awarded annually to make Catholic education accessible in the Diocese of Evansville. Financial aid for Catholic school families.",
};

const programs = [
  { title: "Diocesan Tuition Assistance", desc: "Need-based tuition assistance funded through the Catholic Ministries Appeal. Families complete a financial application through FACTS Grant & Aid Assessment. Available for grades K-12 at any diocesan Catholic school.", deadline: "Application deadline: March 15 annually" },
  { title: "Indiana Choice Scholarship (Voucher)", desc: "Indiana families who meet income guidelines may qualify for a state-funded voucher that covers up to 90% of tuition at participating Catholic schools. The diocese assists families with the application process.", deadline: "Apply through the Indiana Department of Education" },
  { title: "SGO Tax Credit Scholarships", desc: "The Diocese operates a Scholarship Granting Organization (SGO) that allows donors to receive a 50% Indiana state tax credit for contributions to scholarships. Families with qualifying income may apply for these scholarships for K-12 students.", deadline: "Applications accepted on a rolling basis" },
  { title: "School-Based Scholarships", desc: "Many individual schools offer merit-based and need-based scholarships funded by alumni associations, parish organizations, and endowments. Contact your school's admissions office for details on available awards.", deadline: "Varies by school" },
];

const steps = [
  { number: "1", title: "Complete FACTS Application", desc: "Create an account at factsaid.com and complete the Grant & Aid Assessment. You will need tax returns, W-2s, and documentation of income and expenses." },
  { number: "2", title: "Contact Your School", desc: "Notify the admissions office at your desired school that you have applied for financial aid. Ask about any school-specific scholarships or grants." },
  { number: "3", title: "Check Voucher Eligibility", desc: "Visit the Indiana Department of Education website to determine if your family qualifies for the Indiana Choice Scholarship (voucher) program." },
  { number: "4", title: "Receive Your Award", desc: "Financial aid awards are communicated in the spring. The diocese and schools work together to assemble the best possible aid package for each family." },
];

export default function ScholarshipsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title"><em>Scholarships.</em></h1>
            <p className="deck">Making Catholic education accessible to every family in the diocese.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Bishop celebrating Mass with school students"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Commitment */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Commitment</span>
            <h2 className="section-h2">No Family Left Behind</h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "-32px auto 40px", textAlign: "center" }}>
            The Diocese of Evansville is committed to ensuring that no family is denied a Catholic education for their children due to financial hardship. Each year, more than 850 scholarships are awarded to students across our 26 Catholic schools, funded by the generosity of donors to the Catholic Ministries Appeal and dedicated scholarship funds.
          </p>

          <div className="interior-grid interior-grid-3">
            {[
              { num: "850+", label: "Scholarships Awarded Annually", sub: "Across Pre-K through 12th grade" },
              { num: "26", label: "Catholic Schools", sub: "In the Diocese of Evansville" },
              { num: "6,800+", label: "Students Enrolled", sub: "Across 12 counties in SW Indiana" },
            ].map((s) => (
              <div key={s.label} className="info-block" style={{ textAlign: "center", marginBottom: 0 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 40, fontWeight: 700, color: "var(--dgold)", marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 400, color: "var(--navy)", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{s.sub}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, textAlign: "center", maxWidth: 680, margin: "32px auto 0" }}>
            Catholic education is an investment in the whole child: academically, spiritually, and socially. Our scholarship program makes this transformative experience available to families across all 12 counties of the diocese.
          </p>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Available Programs */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Programs</span>
            <h2 className="section-h2">Available Financial Aid Programs</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {programs.map((p) => (
              <div key={p.title} className="interior-card" style={{ cursor: "default" }}>
                <h3>{p.title}</h3>
                <p style={{ marginBottom: 12 }}>{p.desc}</p>
                <span style={{ fontSize: 13, color: "var(--blue)", fontWeight: 600 }}>{p.deadline}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* How to Apply */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">How to Apply</span>
            <h2 className="section-h2">Steps to Apply for Financial Aid</h2>
          </div>

          <div className="interior-card" style={{ cursor: "default", maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {steps.map((s) => (
                <div key={s.number} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--dgold)", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {s.number}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--navy)", fontSize: 15, marginBottom: 2 }}>{s.title}</div>
                    <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="cta-block">
            <h3>Every Child Deserves a Catholic Education</h3>
            <p>
              Contact the Catholic Schools Office for guidance on scholarship applications and financial aid options.
            </p>
            <p style={{ color: "var(--dgold)", fontWeight: 600, fontSize: 18, margin: "16px 0" }}>(812) 424-5536 | schools@evdio.org</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/schools/tuition" className="btn btn-outline">
                Tuition &amp; Affordability
              </Link>
              <Link href="/give/appeal" className="btn-gold">
                Support Scholarships
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
