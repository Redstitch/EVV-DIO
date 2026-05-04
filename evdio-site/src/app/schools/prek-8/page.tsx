import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Elementary & Middle Schools",
  description:
    "Explore PreK-8 Catholic schools in the Diocese of Evansville. Find elementary and middle schools by deanery across twelve counties of southwestern Indiana.",
};

export default function PreK8Schools() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Schools</p>
            <h1 id="title">Elementary &amp; Middle <em>Schools.</em></h1>
            <p className="deck">Our PreK&ndash;8 schools provide a foundation of faith and academic excellence that prepares students for high school and a lifetime of learning.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Catholic school students participating in a liturgy with the Bishop."
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
            <span className="section-tag">PreK &ndash; 8th Grade</span>
            <h2 className="section-h2">Building Strong Foundations</h2>
            <p className="section-desc">
              The Diocese of Evansville&rsquo;s PreK&ndash;8 schools combine rigorous academics with daily faith formation in nurturing, community-centered environments. From the earliest years of preschool through the transition to high school, our teachers and staff are dedicated to developing the whole child &mdash; academically, spiritually, and socially. Each school is anchored in a parish community, creating a seamless partnership between families, educators, and the Church.
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

        {/* ─── SCHOOLS BY DEANERY ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">By Deanery</span>
            <h2 className="section-h2">Schools Across the <em>Diocese</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Evansville East Deanery</h3>
              <ul>
                <li>Good Shepherd School</li>
                <li>Holy Redeemer School</li>
                <li>St. Benedict Cathedral School</li>
                <li>Christ the King School</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Evansville West Deanery</h3>
              <ul>
                <li>Corpus Christi School</li>
                <li>Holy Spirit School</li>
                <li>St. Joseph School (Evansville)</li>
                <li>West Side Catholic Consolidated School</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Gibson &amp; Posey Deanery</h3>
              <ul>
                <li>St. Joseph School (Princeton)</li>
                <li>SS. Peter &amp; Paul School (Haubstadt)</li>
                <li>Holy Cross School (Fort Branch)</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Perry &amp; Spencer Deanery</h3>
              <ul>
                <li>St. Augustine School (Leopold)</li>
                <li>Holy Family School (Jasper)</li>
                <li>St. Celestine School</li>
                <li>St. Joseph School (Dale)</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Dubois Deanery</h3>
              <ul>
                <li>Precious Blood School (Jasper)</li>
                <li>St. Joseph School (Jasper)</li>
                <li>Holy Trinity School (Schnellville)</li>
                <li>Pine Ridge Catholic Academy</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Warrick &amp; Vanderburgh Deanery</h3>
              <ul>
                <li>Annunciation School (Newburgh)</li>
                <li>St. John the Baptist School (Newburgh)</li>
                <li>Sacred Heart School (Schnellville)</li>
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

        {/* ─── WHAT SETS US APART ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Why Choose Catholic</span>
            <h2 className="section-h2">What Sets Our Schools Apart</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Faith-Centered Environment</h3>
              <p>Daily prayer, weekly Mass, sacramental preparation, and service projects are woven into the school experience. Students grow in their relationship with God alongside their academic growth.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Small Class Sizes</h3>
              <p>With lower student-to-teacher ratios than most public schools, our teachers know each child by name and can provide individualized attention and differentiated instruction.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Strong Academic Results</h3>
              <p>Our students consistently perform above state and national averages on standardized assessments. The curriculum emphasizes critical thinking, creativity, and preparation for the next level of education.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Parish Community</h3>
              <p>Each school is connected to a parish, creating a supportive network of families, clergy, and parishioners who invest in the success of every student. This bond extends well beyond graduation.</p>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Start the journey &mdash; <em style={{ color: "var(--bgold)" }}>enroll today.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Learn about admissions, tuition assistance, and how to schedule a visit to a Catholic school near you.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/schools/enroll" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Enroll now <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
