import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Staff & Administrators",
  description:
    "Resources for current Catholic school staff and administrators in the Diocese of Evansville. Access HR information, professional development, and diocesan policies.",
};

export default function StaffAdmin() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Schools</p>
            <h1 id="title">Staff &amp; <em>Administrators.</em></h1>
            <p className="deck">Supporting the educators and leaders who shape the hearts and minds of our students across the Diocese of Evansville.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/educator-award.jpg"
              alt="Bishop Siegel celebrating Mass with Catholic school students."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── OVERVIEW ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Your Vocation</span>
            <h2 className="section-h2">Called to Teach and Lead</h2>
            <p className="section-desc">
              Catholic school educators share in the Church&rsquo;s mission of forming the whole person &mdash; intellectually, spiritually, and morally. The Diocese of Evansville provides resources to help you thrive in your vocation, from human resources support to ongoing professional growth opportunities.
            </p>
          </div>
        </section>

        {/* ─── CROSS FLOURISH ─── */}
        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── RESOURCES (on eggshell) ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Staff Resources</span>
            <h2 className="section-h2">Human Resources &amp; <em>Policies</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Human Resources</h3>
              <p>
                The diocesan HR office supports all school employees with benefits administration, onboarding, employment verification, and workplace policies. Whether you&rsquo;re a new hire or a veteran educator, HR is here to assist you.
              </p>
              <h4 style={{ fontWeight: 600, marginTop: 20, marginBottom: 10 }}>Key HR services:</h4>
              <ul>
                <li>Health insurance, retirement plans, and benefits enrollment</li>
                <li>Employee handbooks and workplace conduct policies</li>
                <li>Leave of absence requests and FMLA guidance</li>
                <li>Background check processing and Safe Environment compliance</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Diocesan Policies</h3>
              <p>
                All Catholic schools in the diocese operate under a shared set of policies that ensure consistency, safety, and fidelity to the Church&rsquo;s educational mission.
              </p>
              <h4 style={{ fontWeight: 600, marginTop: 20, marginBottom: 10 }}>Policy areas include:</h4>
              <ul>
                <li>Academic standards and curriculum guidelines</li>
                <li>Student conduct and discipline frameworks</li>
                <li>Safe Environment training requirements for all staff</li>
                <li>Technology acceptable-use policies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── QUATREFOIL FLOURISH ─── */}
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

        {/* ─── PROFESSIONAL DEVELOPMENT (on white) ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Growth &amp; Formation</span>
            <h2 className="section-h2">Professional Development</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Continuing Education</h3>
              <p>The diocese partners with universities and educational organizations to offer graduate coursework, workshops, and certification programs. Teachers can pursue advanced credentials while staying rooted in Catholic pedagogy.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Faith Formation for Educators</h3>
              <p>Beyond academics, Catholic school staff are invited into ongoing faith formation. Retreats, prayer groups, and theological study opportunities help educators deepen their own relationship with Christ so they can witness to students.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>New Teacher Mentoring</h3>
              <p>First-year teachers in diocesan schools are paired with experienced mentors who provide guidance on classroom management, curriculum planning, and navigating the unique culture of Catholic education.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Leadership Development</h3>
              <p>Aspiring principals and administrators can participate in diocesan leadership cohorts that prepare them for school leadership roles, covering topics from Catholic identity to fiscal management and strategic planning.</p>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Questions? <em style={{ color: "var(--bgold)" }}>We&rsquo;re here to help.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Reach out to the Catholic Schools Office for assistance with HR, policies, professional development, or any other staff needs.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact the Schools Office <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
