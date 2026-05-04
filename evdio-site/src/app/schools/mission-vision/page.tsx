import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "The mission and vision of Catholic schools in the Diocese of Evansville — forming students in faith, academic excellence, and service to the community.",
};

export default function MissionVision() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Catholic Schools</p>
            <h1 id="title">Mission &amp; <em>Vision.</em></h1>
            <p className="deck">Forming the whole person &mdash; mind, heart, and spirit &mdash; through a Catholic education rooted in faith, academic excellence, and service.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Students and Bishop gathered for a school Mass in the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── MISSION ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2">Why Catholic Education Matters</h2>
            <p className="section-desc">
              The Catholic schools of the Diocese of Evansville exist to form students who are grounded in the Gospel of Jesus Christ, committed to academic excellence, and prepared to serve the Church and the world. We believe that every child is created in the image of God and deserves an education that nurtures their unique gifts &mdash; intellectually, spiritually, socially, and morally.
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

        {/* ─── VISION & VALUES ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Our Vision &amp; Values</span>
            <h2 className="section-h2">What Guides <em>Us</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Vision</h3>
              <p>
                We envision Catholic schools in the Diocese of Evansville as vibrant communities of faith and learning where every student encounters Christ, discovers their God-given potential, and is equipped to be a leader of character and conscience. Our schools will be recognized for academic rigor, welcoming communities, and graduates who make a positive difference in the world.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Faith Formation</h3>
              <p>
                Catholic identity permeates every dimension of our schools. Students participate in daily prayer, regular Mass, and the sacramental life of the Church. Religious education is woven into the curriculum so that students develop a deep and personal relationship with Jesus Christ and a love for His Church.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Academic Excellence</h3>
              <p>
                We hold ourselves to the highest academic standards. Our curriculum is designed to challenge students, cultivate critical thinking, and inspire a lifelong love of learning. Teachers are dedicated professionals who see their work as a vocation and who know each student by name.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Service &amp; Justice</h3>
              <p>
                Following the example of Christ, our students learn to serve others with compassion and to stand for justice. Service projects, community partnerships, and outreach to the poor and vulnerable are integral to the Catholic school experience, forming students who understand that faith must be lived through action.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Community &amp; Belonging</h3>
              <p>
                Our schools are places where every family is welcomed and known. Strong partnerships between parents, teachers, pastors, and parish communities create an environment of trust, support, and shared purpose. We celebrate diversity and foster a culture of respect and inclusion.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Stewardship</h3>
              <p>
                We are committed stewards of the resources entrusted to us. Through responsible financial management, strategic planning, and transparent governance, we ensure that Catholic education remains accessible and sustainable for future generations of families in southwestern Indiana.
              </p>
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

        {/* ─── BY THE NUMBERS ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Impact</span>
            <h2 className="section-h2">Catholic Schools by the Numbers</h2>
            <p className="section-desc">
              The Diocese of Evansville educates thousands of students each year across a network of elementary, middle, and high schools spanning twelve counties. With dedicated faculty, strong parish partnerships, and a curriculum anchored in faith, our schools consistently produce graduates who are prepared for high school, college, and a life of purpose.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            See our schools &mdash; <em style={{ color: "var(--bgold)" }}>find your fit.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Explore the Catholic schools of the Diocese of Evansville and discover the right community for your family.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/schools/find" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Find a school <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
