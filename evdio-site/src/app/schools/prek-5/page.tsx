import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Elementary Schools",
  description:
    "Explore PreK-5 Catholic elementary schools in the Diocese of Evansville. Find schools by deanery and learn about our approach to early childhood and elementary education.",
};

export default function PreK5Schools() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Schools</p>
            <h1 id="title">Elementary <em>Schools.</em></h1>
            <p className="deck">Our PreK&ndash;5 elementary schools nurture young learners with a joyful Catholic environment where faith, curiosity, and character take root.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Young students gathered with the Bishop during a school liturgy."
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
            <span className="section-tag">PreK &ndash; 5th Grade</span>
            <h2 className="section-h2">Where Learning Begins</h2>
            <p className="section-desc">
              The early years of education are among the most formative. Our PreK&ndash;5 elementary schools create warm, structured environments where children develop strong reading, writing, and math skills alongside daily faith formation. Experienced teachers guide each child with patience and purpose, helping them discover the joy of learning and the love of God from the very start.
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
            <h2 className="section-h2">Elementary Schools Across the <em>Diocese</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Evansville East Deanery</h3>
              <ul>
                <li>Good Shepherd School (PreK&ndash;5)</li>
                <li>Holy Redeemer School (PreK&ndash;5)</li>
                <li>St. Benedict Cathedral School (PreK&ndash;5)</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Evansville West Deanery</h3>
              <ul>
                <li>Corpus Christi School (PreK&ndash;5)</li>
                <li>Holy Spirit School (PreK&ndash;5)</li>
                <li>St. Joseph School, Evansville (PreK&ndash;5)</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Gibson &amp; Posey Deanery</h3>
              <ul>
                <li>St. Joseph School, Princeton (PreK&ndash;5)</li>
                <li>SS. Peter &amp; Paul School, Haubstadt (PreK&ndash;5)</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Perry &amp; Spencer Deanery</h3>
              <ul>
                <li>St. Augustine School, Leopold (PreK&ndash;5)</li>
                <li>St. Celestine School (PreK&ndash;5)</li>
                <li>St. Joseph School, Dale (PreK&ndash;5)</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Dubois Deanery</h3>
              <ul>
                <li>Precious Blood School, Jasper (PreK&ndash;5)</li>
                <li>Holy Trinity School, Schnellville (PreK&ndash;5)</li>
                <li>Pine Ridge Catholic Academy (PreK&ndash;5)</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Warrick &amp; Vanderburgh Deanery</h3>
              <ul>
                <li>Annunciation School, Newburgh (PreK&ndash;5)</li>
                <li>St. John the Baptist School, Newburgh (PreK&ndash;5)</li>
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

        {/* ─── EARLY CHILDHOOD ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Early Childhood</span>
            <h2 className="section-h2">Our Approach to the Youngest Learners</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Preschool &amp; Pre-Kindergarten</h3>
              <p>
                Our preschool and pre-kindergarten programs use play-based and structured learning to develop school readiness skills in a faith-filled setting. Children explore language, numbers, social skills, and creative expression while learning to pray, share, and care for one another. Full-day and half-day options are available at most locations.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Kindergarten &amp; Primary Grades</h3>
              <p>
                In kindergarten through second grade, students build foundational literacy and numeracy skills through engaging, hands-on instruction. Religion class, weekly Mass, and seasonal prayer services introduce young children to the rhythms of the liturgical year and the beauty of the Catholic faith. Each classroom is a community where kindness and respect are practiced daily.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Upper Elementary</h3>
              <p>
                Third through fifth graders take on greater academic challenges, including deeper exploration of science, social studies, and the arts. Students prepare for the Sacraments of Reconciliation and Eucharist, participate in service projects, and develop leadership skills through school ministry roles and extracurricular activities.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Indiana Choice Scholarships</h3>
              <p>
                Many families qualify for Indiana Choice Scholarships (vouchers) that cover a significant portion of tuition. Our schools also offer parish-based tuition assistance and financial aid. We are committed to making Catholic education accessible to every family that seeks it.
              </p>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Give them a great start &mdash; <em style={{ color: "var(--bgold)" }}>enroll today.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Schedule a tour, learn about tuition options, and begin the enrollment process at a Catholic elementary school near you.
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
