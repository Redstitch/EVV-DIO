import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Director Discussions",
  description:
    "Learn about the Diocese of Evansville's Director Discussion series — regular gatherings where diocesan office directors share updates, collaborate, and align on pastoral priorities.",
};

export default function DirectorDiscussions() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Director <em>Discussions.</em></h1>
            <p className="deck">A collaborative forum where diocesan leaders convene to share insights, coordinate ministry efforts, and strengthen the mission of the Church in southwestern Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="Diocesan leaders gathered for a collaborative discussion."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── OVERVIEW ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Collaborative Leadership</span>
            <h2 className="section-h2">Strengthening Our Shared Mission</h2>
            <p className="section-desc">
              The Director Discussion series brings together the directors of diocesan offices for regular, structured conversations about pastoral priorities, emerging challenges, and opportunities for collaboration. These gatherings foster communication across ministries, ensuring that the diverse work of the diocese moves forward in unity and purpose.
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

        {/* ─── FORMAT & PURPOSE ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">How It Works</span>
            <h2 className="section-h2">Purpose &amp; <em>Format</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Purpose</h3>
              <p>
                Each Director Discussion is designed to create space for honest dialogue among diocesan leaders. The series serves several goals:
              </p>
              <ul>
                <li>Align office priorities with the bishop&rsquo;s pastoral vision and diocesan strategic plan.</li>
                <li>Share best practices and lessons learned across departments.</li>
                <li>Identify areas of overlap where offices can combine resources for greater impact.</li>
                <li>Surface challenges early so collaborative solutions can be developed.</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Format</h3>
              <p>
                Director Discussions typically follow a structured agenda that balances presentations, open dialogue, and small-group breakout sessions. Each meeting focuses on a theme or topic selected in advance, often drawn from:
              </p>
              <ul>
                <li>Seasonal pastoral priorities (Advent/Lent planning, school year transitions).</li>
                <li>Diocesan-wide initiatives such as stewardship campaigns or evangelization efforts.</li>
                <li>Operational topics including communications, technology, and safe environment compliance.</li>
                <li>Guest speakers offering expertise on timely issues in Catholic ministry.</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Schedule</h3>
              <p>
                The series meets monthly during the program year (September through June). Meetings are typically held on the first Wednesday of the month at the Catholic Center in Evansville, from 10:00 AM to 12:00 PM.
              </p>
              <p style={{ marginTop: 12 }}>
                Summer months are reserved for individual office planning and goal-setting in preparation for the fall series.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Who Participates</h3>
              <p>
                All diocesan office directors and designated associate directors attend the discussions. The Vicar General and Chancellor typically participate to provide direct connection to episcopal leadership. Guest presenters from parishes, schools, or outside organizations are invited as topics warrant.
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

        {/* ─── OUTCOMES ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Impact</span>
            <h2 className="section-h2">Building a Culture of Collaboration</h2>
            <p className="section-desc">
              Since the series began, Director Discussions have produced tangible results: streamlined communications calendars, coordinated parish support visits, joint training programs, and shared resource libraries. Most importantly, they have built personal relationships among office leaders that make day-to-day collaboration natural and effective.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Questions about our offices &mdash; <em style={{ color: "var(--bgold)" }}>we&rsquo;re here.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Connect with the diocesan offices to learn more about current initiatives and collaborative projects.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about/offices" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              View offices <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
