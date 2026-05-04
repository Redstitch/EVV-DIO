import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Catholic High Schools | Diocese of Evansville",
  description:
    "Three Catholic high schools in the Diocese of Evansville: Mater Dei, Memorial, and Washington Catholic. Faith-centered secondary education in Southwestern Indiana.",
};

export default function HighSchoolsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Schools</p>
            <h1 id="title">High <em>Schools.</em></h1>
            <p className="deck">
              Three Catholic high schools form young men and women for lives of
              faith, scholarship, and service across Southwestern Indiana.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Catholic high school students at Mass with Bishop Siegel."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Intro */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Secondary Education</span>
            <h2 className="section-h2">Faith Meets Future</h2>
            <p className="section-desc">
              Catholic high school education in the Diocese of Evansville goes
              beyond college preparation. Our three high schools cultivate the
              whole person &mdash; intellectual curiosity, moral character,
              spiritual depth, and a habit of service. Rooted in the Gospel and
              guided by a tradition stretching back more than a century, these
              schools send graduates into the world ready to lead with integrity
              and compassion.
            </p>
          </div>
        </section>

        {/* School Cards */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Our Schools</span>
            <h2 className="section-h2">Four Schools, One <em>Mission</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <a href="http://www.materdeiwildcats.com/" target="_blank" rel="noopener noreferrer" className="interior-card">
              <h3>Mater Dei High School</h3>
              <p><strong>Evansville, IN</strong></p>
              <p>
                A college-preparatory curriculum alongside a vibrant faith life.
                Advanced Placement courses, fine arts, and more than 20 varsity
                sports. The Wildcats are known for academic excellence,
                championship athletics, and a close-knit community.
              </p>
              <span className="read-link" style={{ marginTop: 12 }}>Visit website <span aria-hidden="true">→</span></span>
            </a>

            <a href="http://www.reitzmemorial.org/" target="_blank" rel="noopener noreferrer" className="interior-card">
              <h3>Reitz Memorial High School</h3>
              <p><strong>Evansville, IN</strong></p>
              <p>
                Strong academics with deep Catholic identity. An extensive
                selection of honors and AP courses, award-winning performing
                arts, and competitive athletics. Campus ministry ensures faith
                formation is woven into every aspect of student life.
              </p>
              <span className="read-link" style={{ marginTop: 12 }}>Visit website <span aria-hidden="true">→</span></span>
            </a>

            <a href="https://www.rivetchs.org" target="_blank" rel="noopener noreferrer" className="interior-card">
              <h3>Rivet High School</h3>
              <p><strong>Vincennes, IN</strong></p>
              <p>
                Serving students in Knox County and surrounding communities,
                Rivet provides a faith-centered education with small class sizes,
                personal attention, and a strong sense of community rooted in the
                Catholic tradition.
              </p>
              <span className="read-link" style={{ marginTop: 12 }}>Visit website <span aria-hidden="true">→</span></span>
            </a>

            <a href="https://www.wccardinals.org/" target="_blank" rel="noopener noreferrer" className="interior-card">
              <h3>Washington Catholic High School</h3>
              <p><strong>Washington, IN</strong> &mdash; PreK&ndash;12</p>
              <p>
                A PreK&ndash;12 school offering the personal attention that only
                a small school can provide. Under the leadership of Dr. Douglas
                Palmer, the school is expanding its vision for Catholic education
                in Daviess County.
              </p>
              <span className="read-link" style={{ marginTop: 12 }}>Visit website <span aria-hidden="true">→</span></span>
            </a>
          </div>
        </section>

        {/* Info Block */}
        <div className="page-content">
          <div className="info-block">
            <h3>The Catholic High School Difference</h3>
            <p>
              Catholic high schools do more than prepare students for college
              &mdash; they prepare students for life. Daily prayer, regular
              Mass, retreats, service hours, and campus ministry form young
              people who understand that faith and reason work together. Our
              graduates consistently exceed state and national averages in
              college readiness, and they carry with them a moral framework
              built on the teachings of Jesus Christ. Academic rigor, faith
              formation, and authentic community &mdash; that is the Catholic
              high school difference.
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Interested in Catholic High School?</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Whether your child is entering ninth grade or transferring
            mid-year, our high schools welcome inquiries year-round. Schedule
            a campus visit, attend an open house, or start the enrollment
            process today.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/schools/enroll" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Inquire About Enrollment <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
