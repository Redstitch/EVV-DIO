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
        <section className="page-content bg-eggshell" style={{ background: "var(--cream)" }}>
          <div className="section-head">
            <span className="section-tag">Our Schools</span>
            <h2 className="section-h2">Three Schools, One Mission</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="interior-card">
              <h3>Mater Dei High School</h3>
              <p>
                <strong>Evansville, IN</strong> &mdash; Co-ed &bull; 700+ students
              </p>
              <p>
                Mater Dei provides a rigorous college-preparatory curriculum
                alongside a vibrant faith life. Students choose from Advanced
                Placement courses, fine arts, and more than 20 varsity sports.
                The Wildcats are known for academic excellence, championship
                athletics, and a close-knit community where every student is
                known by name.
              </p>
            </div>

            <div className="interior-card">
              <h3>Memorial High School</h3>
              <p>
                <strong>Evansville, IN</strong> &mdash; Co-ed &bull; 800+ students
              </p>
              <p>
                Memorial combines strong academics with deep Catholic identity.
                The Tigers offer an extensive selection of honors and AP courses,
                award-winning performing arts, and competitive athletics. A
                comprehensive campus ministry program ensures that faith
                formation is woven into every aspect of student life.
              </p>
            </div>

            <div className="interior-card">
              <h3>Washington Catholic High School</h3>
              <p>
                <strong>Washington, IN</strong> &mdash; Co-ed &bull; ~100 students
              </p>
              <p>
                Washington Catholic offers the personal attention that only a
                small school can provide. With a student-teacher ratio that
                allows individualized instruction, students build meaningful
                relationships with faculty and peers. Under the leadership of
                recently appointed first president Dr. Douglas Palmer, the
                school is expanding its vision for Catholic secondary education
                in Daviess County.
              </p>
            </div>
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
