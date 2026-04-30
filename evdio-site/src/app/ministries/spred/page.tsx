import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Special Needs Religious Education (SPRED) | Diocese of Evansville",
  description:
    "SPRED provides adapted faith formation for individuals with intellectual and developmental disabilities in the Diocese of Evansville.",
};

export default function SpredPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title"><em>SPRED.</em></h1>
            <p className="deck">Every person is created in God&rsquo;s image and deserves to know His love.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community service"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* About SPRED */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">About SPRED</span>
            <h2 className="section-h2">Faith for Every Person</h2>
          </div>

          <div className="prose">
            <p>
              SPRED (Special Religious Education) is a faith formation program designed for children, teens, and adults with intellectual and developmental disabilities. Rooted in the belief that every person is created in the image and likeness of God, SPRED provides an adapted environment where participants can encounter Christ, experience community, and grow in their relationship with God.
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="info-block">
              <h3>Our Approach</h3>
              <p>
                The program uses a sensory-based approach to catechesis, incorporating visual aids, music, movement, and hands-on activities to make the faith accessible to all learning styles and abilities. Small groups meet regularly, led by trained volunteer catechists who companion participants through the liturgical year.
              </p>
            </div>

            <div className="info-block">
              <h3>Sacramental Preparation</h3>
              <p>
                SPRED supports parishes in preparing individuals with disabilities for the sacraments of Reconciliation, Eucharist, and Confirmation. Preparation is individualized and progresses at each participant&rsquo;s own pace, honoring their unique gifts and needs.
              </p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Who Can Participate */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Who We Serve</span>
            <h2 className="section-h2">Participation &amp; Volunteering</h2>
          </div>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Who Can Participate?</h3>
              <p>
                Children, teens, and adults with intellectual disabilities, developmental disabilities, autism spectrum disorders, and other special needs are welcome. No prior religious education is required. SPRED groups are organized by age and ability level to provide the most supportive environment.
              </p>
              <ul style={{ marginTop: 12 }}>
                <li>Children (ages 6&ndash;12)</li>
                <li>Teens (ages 13&ndash;18)</li>
                <li>Adults (18 and older)</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Volunteer Catechists</h3>
              <p>
                SPRED relies on dedicated volunteers who receive specialized training in adaptive catechesis. No previous experience with disabilities is needed, just a generous heart and a willingness to learn. Volunteer catechists serve as companions in faith, walking alongside participants in their journey.
              </p>
              <ul style={{ marginTop: 12 }}>
                <li>Initial training provided by the diocesan office</li>
                <li>Ongoing formation throughout the year</li>
                <li>Safe Environment training required</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* A Typical Session */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">What Happens</span>
            <h2 className="section-h2">A Typical SPRED Session</h2>
          </div>

          <div className="interior-card" style={{ cursor: "default", marginTop: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--gold)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>1</div>
                <div>
                  <h4 style={{ marginBottom: 2 }}>Gathering &amp; Welcome</h4>
                  <p>Participants and catechists gather in a calm, prepared environment. The session opens with a greeting and a simple prayer.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--gold)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>2</div>
                <div>
                  <h4 style={{ marginBottom: 2 }}>Liturgy of the Word</h4>
                  <p>A Scripture passage is proclaimed using adapted language, images, and symbols. Participants engage with the Word through their senses.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--gold)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>3</div>
                <div>
                  <h4 style={{ marginBottom: 2 }}>Activity &amp; Response</h4>
                  <p>Hands-on activities such as art, music, movement, or tactile exploration help participants connect with the theme of the session.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--navy)", color: "var(--gold)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>4</div>
                <div>
                  <h4 style={{ marginBottom: 2 }}>Prayer &amp; Sending</h4>
                  <p>The session closes with a communal prayer, a blessing, and a commissioning to carry the joy of Christ into the week ahead.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Contact */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Get Involved</h3>
            <p>
              To enroll a participant or to volunteer as a catechist, contact the Office of Catechesis.
            </p>
            <p><strong>(812) 424-5536 | catechesis@evdio.org</strong></p>
          </div>
        </section>

        <section className="page-content" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/ministries/disability" className="btn btn-secondary">
              Disability &amp; Inclusion
            </Link>
            <Link href="/about/offices" className="btn btn-outline">
              Office of Catechesis
            </Link>
            <Link href="/ministries" className="btn btn-outline">
              All Ministries
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
