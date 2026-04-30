import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accreditation & Standards",
  description:
    "Learn about accreditation and academic standards in Catholic schools of the Diocese of Evansville. Cognia accreditation, Indiana Academic Standards, and teacher qualifications.",
};

export default function Accreditation() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title"><em>Accreditation.</em></h1>
            <p className="deck">Catholic schools in the Diocese of Evansville meet or exceed the same rigorous academic standards as public schools, with the added dimension of faith formation.</p>
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
        {/* Accreditation */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Accreditation</span>
            <h2 className="section-h2">Accredited by Cognia</h2>
            <p className="section-desc">
              All 26 Catholic schools in the Diocese of Evansville are accredited by Cognia (formerly AdvancED/North Central Association). This accreditation is a mark of quality that assures families, communities, and stakeholders that our schools meet high standards for teaching, learning, and organizational effectiveness.
            </p>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="info-block" style={{ textAlign: "center" }}>
              <h3>External Review</h3>
              <p>Every five years, each school undergoes a rigorous external review by a team of trained educators who evaluate the quality of teaching, learning, and leadership.</p>
            </div>
            <div className="info-block" style={{ textAlign: "center" }}>
              <h3>Continuous Improvement</h3>
              <p>Accreditation requires schools to engage in ongoing improvement planning, using data to identify strengths and areas for growth.</p>
            </div>
            <div className="info-block" style={{ textAlign: "center" }}>
              <h3>National Recognition</h3>
              <p>Cognia accreditation is recognized across the United States and internationally, ensuring that our students&rsquo; education is valued by colleges and other institutions.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Academic Standards */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="interior-grid interior-grid-2">
            <div>
              <div className="section-head" style={{ textAlign: "left" }}>
                <span className="section-tag" style={{ textAlign: "left" }}>Academic Standards</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>Rigorous Academics</h2>
              </div>
              <p>
                Our curriculum is aligned with Indiana Academic Standards, ensuring that students in Catholic schools are learning the same core content as their peers in public schools. In many areas, our curriculum exceeds state requirements by integrating Catholic social teaching, ethics, and service learning.
              </p>
              <p>
                Students in our schools consistently perform above state and national averages on standardized assessments, including ILEARN and NWEA MAP testing. Our high school graduates are accepted into colleges and universities at rates that exceed state averages.
              </p>
              <p>
                In addition to core academics, many of our schools offer enrichment programs in STEM, fine arts, foreign language, and advanced coursework.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="interior-card" style={{ cursor: "default" }}>
                <h3>Core Curriculum</h3>
                <ul>
                  <li>Religion &amp; Theology</li>
                  <li>English Language Arts</li>
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Studies</li>
                  <li>Physical Education &amp; Health</li>
                  <li>Fine Arts (Music &amp; Visual Art)</li>
                  <li>World Languages (select schools)</li>
                  <li>Technology &amp; Digital Literacy</li>
                </ul>
              </div>

              <div className="interior-card" style={{ cursor: "default" }}>
                <h3>Assessment</h3>
                <p>
                  Catholic schools participate in standardized assessment programs to measure student progress and inform instruction:
                </p>
                <ul>
                  <li>NWEA MAP (Grades K-8)</li>
                  <li>ILEARN (Indiana state assessment)</li>
                  <li>PSAT, SAT, ACT (High School)</li>
                  <li>AP Exams (select courses)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Teacher Quality */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Teacher Quality</span>
            <h2 className="section-h2">Qualified, Dedicated Educators</h2>
            <p className="section-desc">
              Our teachers are not only academically qualified but are also committed to the Catholic mission. They see their work as a vocation, not just a career.
            </p>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="info-block">
              <h3>State-Licensed</h3>
              <p>100% of our teachers hold valid Indiana teaching licenses in their subject areas, meeting the same licensing requirements as public school teachers.</p>
            </div>
            <div className="info-block">
              <h3>Ongoing Formation</h3>
              <p>Teachers participate in regular professional development, including faith formation, instructional strategies, classroom technology, and curriculum development.</p>
            </div>
            <div className="info-block">
              <h3>Advanced Degrees</h3>
              <p>A significant percentage of our teachers hold master&rsquo;s degrees or higher, reflecting a commitment to excellence in their fields.</p>
            </div>
            <div className="info-block">
              <h3>Catholic Mission</h3>
              <p>All teachers in Catholic schools commit to supporting the Catholic mission of the school, serving as role models of faith for their students.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-content">
          <div className="cta-block">
            <h3>See Our Standards in Action</h3>
            <p>
              The best way to see what makes our schools exceptional is to visit. Schedule a tour and experience the quality, faith, and community of Catholic education firsthand.
            </p>
            <div className="btn-row">
              <Link href="/schools/find" className="btn btn-primary">
                Find a School
              </Link>
              <Link href="/schools/careers" className="btn btn-secondary">
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
