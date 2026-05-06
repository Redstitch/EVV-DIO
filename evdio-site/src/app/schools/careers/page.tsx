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
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Your Calling</span>
            <h2 className="section-h2">Why Teach in a Catholic School?</h2>
            <p className="section-desc">
              Catholic school teachers do more than educate. They mentor, minister, and model the faith for their students every day. In the Diocese of Evansville, our 26 schools offer a supportive, mission-driven environment where your work has eternal significance.
            </p>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="info-block">
              <h3>Mission-Driven Work</h3>
              <p>Every lesson, every interaction, every day is an opportunity to bring students closer to Christ. Your work in the classroom is a form of ministry.</p>
            </div>
            <div className="info-block">
              <h3>Smaller Class Sizes</h3>
              <p>With an average class size of 18 students, you can build meaningful relationships with every child and provide individualized attention.</p>
            </div>
            <div className="info-block">
              <h3>Supportive Community</h3>
              <p>Catholic schools are close-knit communities where teachers, parents, and administrators work together with shared values and mutual respect.</p>
            </div>
            <div className="info-block">
              <h3>Professional Growth</h3>
              <p>The diocese provides ongoing professional development, mentoring for new teachers, and opportunities for advanced education and faith formation.</p>
            </div>
            <div className="info-block">
              <h3>Whole-Child Approach</h3>
              <p>Catholic education addresses the intellectual, spiritual, physical, and social-emotional development of every student. This approach is deeply rewarding for educators.</p>
            </div>
            <div className="info-block">
              <h3>Making a Difference</h3>
              <p>Our teachers consistently report that seeing their students grow in faith, character, and academic achievement is the most fulfilling aspect of their career.</p>
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

        {/* Open Positions */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Opportunities</span>
            <h2 className="section-h2">Types of Positions</h2>
            <p className="section-desc">
              We are always looking for talented, faith-filled individuals to join our school communities. Positions are available across all grade levels and subject areas.
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Classroom Teachers</h3>
              <p>Pre-K through 12th grade across all core subjects and electives.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Administrators</h3>
              <p>Principals, assistant principals, and academic deans.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Support Staff</h3>
              <p>Teacher aides, administrative assistants, and maintenance personnel.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Specialists</h3>
              <p>School counselors, resource teachers, librarians, and technology coordinators.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Campus Ministry</h3>
              <p>Youth ministers, campus ministry coordinators, and retreat leaders.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Athletics</h3>
              <p>Coaches and athletic directors across all sports programs.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Music &amp; Arts</h3>
              <p>Music teachers, band directors, art teachers, and drama instructors.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Extended Care</h3>
              <p>Before and after school program staff and coordinators.</p>
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

        {/* Qualifications */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2">
            <div>
              <div className="section-head" style={{ textAlign: "left" }}>
                <span className="section-tag" style={{ textAlign: "left" }}>Qualifications</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>What We Look For</h2>
              </div>
              <p>
                We seek educators and staff who combine professional excellence with a genuine commitment to the Catholic mission. You do not need to be Catholic to work in our schools, but all employees are expected to support the Catholic identity of the school.
              </p>
              <ul style={{ marginTop: 16 }}>
                <li>Valid Indiana teaching license (for teaching positions)</li>
                <li>Bachelor&rsquo;s degree minimum; advanced degrees preferred</li>
                <li>Willingness to support the Catholic mission of the school</li>
                <li>Successful completion of Safe Environment training and background check</li>
                <li>Strong communication and collaboration skills</li>
                <li>Passion for working with young people</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>Benefits</h3>
              <ul>
                <li>Competitive salary schedule</li>
                <li>Health, dental, and vision insurance</li>
                <li>Retirement plan</li>
                <li>Professional development funding</li>
                <li>Tuition discount for children of employees</li>
                <li>Life insurance and disability coverage</li>
                <li>Paid holidays, sick days, and personal days</li>
                <li>Mission-centered work environment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="page-content bg-blue-subtle">
          <div className="section-head">
            <span className="section-tag">How to Apply</span>
            <h2 className="section-h2">Join Our Team</h2>
          </div>

          <div className="interior-card" style={{ cursor: "default" }}>
            <div className="step-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Browse Open Positions</h4>
                  <p>Check with individual schools or the Catholic Schools Office for current openings. Positions are posted throughout the year as they become available.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Submit Your Application</h4>
                  <p>Send your resume, cover letter, and a completed diocesan application form to the school or the Catholic Schools Office.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Interview</h4>
                  <p>Selected candidates will be invited for an interview with the school principal and hiring committee.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Background Check &amp; Training</h4>
                  <p>All offers are contingent on successful completion of a background check and Safe Environment training.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Ready to Make a Difference?</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the Catholic Schools Office to learn about current openings and how to apply. Your talents and faith can change lives.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Contact the Catholic Schools Office <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
