import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tuition Assistance",
  description:
    "Make Catholic education affordable. Explore tuition assistance, scholarships, Indiana school vouchers, and financial aid in the Diocese of Evansville.",
};

export default function Tuition() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title">Tuition &amp; <em>Affordability.</em></h1>
            <p className="deck">Catholic education is an investment in your child's future. We are committed to making it accessible to every family, regardless of financial circumstances.</p>
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
        {/* Overview */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Affordability</span>
            <h2 className="section-h2">More Affordable Than You Think</h2>
            <p className="section-desc">
              Many families are surprised to learn how affordable Catholic education can be. Through a combination of parish support, state vouchers, scholarships, and financial aid, the vast majority of families pay significantly less than the published tuition rate. Last year, the diocese awarded over <strong>850 scholarships</strong> to help students attend Catholic schools.
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <div className="info-block" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, lineHeight: 1 }}>850+</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>Scholarships Awarded</div>
            </div>
            <div className="info-block" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, lineHeight: 1 }}>$2.8M</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>Aid Distributed</div>
            </div>
            <div className="info-block" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, lineHeight: 1 }}>72%</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>Families Receiving Aid</div>
            </div>
            <div className="info-block" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, lineHeight: 1 }}>$0</div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>Net Cost for Many</div>
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

        {/* Assistance Types */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Options Available</span>
            <h2 className="section-h2">How Families Pay for Catholic School</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Indiana Choice Scholarship (Voucher)</h3>
              <p>
                Indiana&rsquo;s School Choice Scholarship Program is the largest state-funded voucher program in the country. Eligible families can receive state funding to cover most or all of Catholic school tuition. Eligibility is based on household income and other criteria. Many families who have never attended a public school now qualify under expanded eligibility.
              </p>
              <p style={{ background: "var(--gold-pale)", borderRadius: 8, padding: 12, fontWeight: 600, marginTop: 16 }}>
                This is the single largest source of tuition assistance for most families.
              </p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Tax Credit Scholarships (SGO)</h3>
              <p>
                The Indiana Scholarship Granting Organization (SGO) program allows individuals and businesses to receive a state tax credit for donations that fund scholarships for students attending Catholic schools. These need-based scholarships can cover a significant portion of tuition for qualifying families.
              </p>
              <p style={{ background: "var(--gold-pale)", borderRadius: 8, padding: 12, fontWeight: 600, marginTop: 16 }}>
                Donations to the diocesan SGO receive a 50% Indiana state tax credit.
              </p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Parish Tuition Support</h3>
              <p>
                Most parishes in the Diocese of Evansville subsidize the cost of Catholic education for registered parishioners. This means that the tuition rate for parishioners is already reduced from the actual per-pupil cost of education. Active parish registration and regular Sunday Mass attendance are typically expected.
              </p>
              <p style={{ background: "var(--gold-pale)", borderRadius: 8, padding: 12, fontWeight: 600, marginTop: 16 }}>
                Parishioner rates are significantly lower than non-parishioner rates.
              </p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Diocesan Scholarship Fund</h3>
              <p>
                The Catholic Ministries Appeal and private donors fund the diocesan scholarship program, which provides need-based and merit-based scholarships to students in Catholic schools across the diocese. Applications are reviewed annually.
              </p>
              <p style={{ background: "var(--gold-pale)", borderRadius: 8, padding: 12, fontWeight: 600, marginTop: 16 }}>
                Funded by the generosity of Catholic Ministries Appeal donors.
              </p>
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

        {/* Additional Options */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Additional Options</span>
            <h2 className="section-h2">More Ways to Make It Work</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="info-block">
              <h3>Payment Plans</h3>
              <p>Most schools offer flexible monthly payment plans so families can spread tuition payments across the school year rather than paying a lump sum.</p>
            </div>
            <div className="info-block">
              <h3>Multi-Child Discounts</h3>
              <p>Families with more than one child enrolled in a Catholic school typically receive a discount on tuition for the second, third, and additional children.</p>
            </div>
            <div className="info-block">
              <h3>Scrip Programs</h3>
              <p>Many schools offer scrip (gift card) programs where families earn tuition credits by purchasing everyday items through the school&rsquo;s program.</p>
            </div>
            <div className="info-block">
              <h3>Employer Tuition Benefits</h3>
              <p>Some employers in the Evansville area offer tuition assistance or educational benefits. Check with your employer&rsquo;s HR department.</p>
            </div>
            <div className="info-block">
              <h3>Education Savings Accounts</h3>
              <p>Indiana&rsquo;s Education Scholarship Account program may provide additional funding options for families who meet certain eligibility criteria.</p>
            </div>
            <div className="info-block">
              <h3>Fundraising &amp; Events</h3>
              <p>Schools host annual fundraisers, galas, and events that help offset operational costs, which in turn helps keep tuition affordable for all families.</p>
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

        {/* How to Apply */}
        <section className="page-content bg-blue-subtle">
          <div className="section-head">
            <span className="section-tag">Get Started</span>
            <h2 className="section-h2">How to Apply for Assistance</h2>
          </div>

          <div className="interior-card" style={{ cursor: "default" }}>
            <div className="step-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Contact your preferred school</h4>
                  <p>The school office can walk you through all available financial assistance options and help determine what you may qualify for.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Apply for the Indiana Choice Scholarship</h4>
                  <p>If eligible, apply through the school for the state voucher program. The school will guide you through the process.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Complete the FACTS application</h4>
                  <p>Many schools use the FACTS Grant &amp; Aid Assessment to determine need-based financial assistance. This confidential process evaluates your family&rsquo;s financial situation.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Receive your aid package</h4>
                  <p>The school will combine all sources of assistance into a financial aid package and work with you on a payment plan for any remaining balance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Do Not Let Cost Be a Barrier</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            We are committed to making Catholic education available to every family that desires it. Contact us and we will work together to find a solution.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/schools/find" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Find a School <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/give/appeal" className="btn btn-outline" style={{ borderColor: "rgba(238,218,179,0.3)", color: "var(--cream)" }}>Support Catholic Schools <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
