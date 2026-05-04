import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How Your Gift Makes a Difference",
  description:
    "See exactly how your gifts to the Diocese of Evansville are used — from Catholic education and charitable outreach to vocations and parish support.",
};

export default function HowYourGiftMakesADifference() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Stewardship</p>
            <h1 id="title">How Your Gift Makes a <em>Difference.</em></h1>
            <p className="deck">Every gift to the diocese is a direct investment in the people, parishes, and ministries of southwest Indiana. Here is how your generosity is put to work.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Diocesan community members serving together in faith."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── OVERVIEW ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Faithful Stewardship</span>
            <h2 className="section-h2">Transparent &amp; Accountable</h2>
            <p className="section-desc">
              The Diocese of Evansville is committed to responsible stewardship of every dollar entrusted to us. Gifts to the Bishop&rsquo;s Annual Appeal and other diocesan funds are carefully allocated to the areas of greatest need, ensuring your generosity reaches the people and programs that need it most.
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

        {/* ─── BREAKDOWN (on eggshell) ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Gift Allocation</span>
            <h2 className="section-h2">Where Every Dollar <em>Goes</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Catholic Education &mdash; 38%</h3>
              <p>
                The single largest portion of diocesan giving supports Catholic schools. These funds provide tuition assistance to families in need, competitive teacher salaries, curriculum development, and facility maintenance across 26 schools serving more than 5,200 students.
              </p>
              <ul style={{ marginTop: 16 }}>
                <li>Tuition assistance and need-based scholarships</li>
                <li>Teacher professional development and formation</li>
                <li>Classroom technology and instructional materials</li>
                <li>School facility upkeep and safety improvements</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Catholic Charities &mdash; 24%</h3>
              <p>
                Catholic Charities of the Diocese of Evansville serves thousands of individuals and families each year regardless of faith. Your gifts fund programs that provide an essential safety net for the most vulnerable in our communities.
              </p>
              <ul style={{ marginTop: 16 }}>
                <li>Food pantries and emergency assistance</li>
                <li>Counseling and mental health services</li>
                <li>Refugee resettlement and immigration support</li>
                <li>Disaster relief and recovery</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Vocations &amp; Seminary &mdash; 18%</h3>
              <p>
                Forming the next generation of priests is a critical investment in the future of the Church. Your gifts cover the cost of seminary education, room and board, spiritual direction, and pastoral training for men discerning a call to the priesthood.
              </p>
              <ul style={{ marginTop: 16 }}>
                <li>Seminary tuition and living expenses</li>
                <li>Vocation discernment retreats and programs</li>
                <li>Ongoing formation for newly ordained priests</li>
                <li>Support for permanent diaconate formation</li>
              </ul>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Parish Support &amp; Ministry &mdash; 20%</h3>
              <p>
                Parishes are the heart of Catholic life. Your gifts help smaller and rural parishes maintain vibrant worship communities, and they fund diocese-wide programs that strengthen faith at every stage of life.
              </p>
              <ul style={{ marginTop: 16 }}>
                <li>Supplemental support for smaller and rural parishes</li>
                <li>Youth ministry and young adult programs</li>
                <li>Marriage preparation and family life ministry</li>
                <li>Adult faith formation and OCIA programs</li>
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

        {/* ─── ACCOUNTABILITY (on white) ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Financial Integrity</span>
            <h2 className="section-h2">Our Commitment to You</h2>
            <p className="section-desc">
              The Diocese of Evansville undergoes an independent financial audit each year and publishes the results for full transparency. Our Finance Council, composed of lay professionals from across the diocese, provides oversight and guidance on all financial matters. We take seriously our responsibility to be faithful stewards of your trust.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Make your gift <em style={{ color: "var(--bgold)" }}>today.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Every gift, no matter the size, strengthens the Church in southwest Indiana. Your generosity funds education, serves the vulnerable, and forms the next generation of Catholic leaders.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/give/appeal" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Give to the Bishop&rsquo;s Appeal <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
