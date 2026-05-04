import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs for Children with Special Needs",
  description:
    "Catholic schools in the Diocese of Evansville support students with learning differences and special needs. Explore programs, accommodations, and inclusive education.",
};

export default function SpecialNeeds() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title">Special <em>Needs.</em></h1>
            <p className="deck">Every child is a gift from God. Catholic schools in the Diocese of Evansville are committed to welcoming and supporting students of all abilities.</p>
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
        {/* Philosophy */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Commitment</span>
            <h2 className="section-h2">Every Child Belongs</h2>
            <p className="section-desc">
              Catholic teaching affirms the inherent dignity of every person, created in the image and likeness of God. Our schools strive to be communities of inclusion where students with learning differences, developmental disabilities, and other special needs can thrive alongside their peers. We believe that diversity within our classrooms enriches the educational experience for all students.
            </p>
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

        {/* Services */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Support Services</span>
            <h2 className="section-h2">How We Support Students</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Individualized Learning Plans</h3>
              <p>Working in partnership with families, our schools develop individualized plans to address each student&rsquo;s unique learning needs, including accommodations for instruction and assessment.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Resource Specialists</h3>
              <p>Many of our schools employ resource teachers or learning specialists who provide small-group and one-on-one instruction for students who need additional academic support.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Speech &amp; Language Services</h3>
              <p>Through partnerships with local school corporations and private providers, students in Catholic schools can access speech and language therapy services.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Occupational Therapy</h3>
              <p>Occupational therapy services are available to students who need support with fine motor skills, sensory processing, and other functional areas.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Behavioral Support</h3>
              <p>Our schools provide positive behavioral supports and interventions to help students develop social-emotional skills and succeed in the classroom environment.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Assistive Technology</h3>
              <p>Schools utilize assistive technology tools and accommodations to help students with disabilities access the curriculum, including specialized software, audio books, and adaptive equipment.</p>
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

        {/* Partnerships */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2">
            <div>
              <div className="section-head" style={{ textAlign: "left" }}>
                <span className="section-tag" style={{ textAlign: "left" }}>Partnerships</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>Working Together</h2>
              </div>
              <p>
                Catholic schools work in collaboration with local public school corporations, who are required under federal law to make certain services available to students with disabilities regardless of where they attend school. This includes evaluation, identification, and related services such as speech therapy and counseling.
              </p>
              <p>
                Schools also partner with families, pediatricians, psychologists, and community organizations to ensure that each student receives the support they need to succeed.
              </p>
              <p>
                If your child has an IEP (Individualized Education Program) or a 504 plan from a public school, please share this documentation during the enrollment process so that we can determine how best to meet your child&rsquo;s needs.
              </p>
            </div>

            <div className="info-block">
              <h3>For Parents</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Start the Conversation Early</h4>
                  <p>Contact the school before enrollment to discuss your child&rsquo;s needs. Schools want to partner with you to find the right fit.</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Share Documentation</h4>
                  <p>Provide any existing evaluations, IEPs, 504 plans, or medical documentation so the school can prepare to support your child.</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Stay Involved</h4>
                  <p>Regular communication between parents and teachers is essential. Schedule conferences and stay connected with your child&rsquo;s progress.</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Advocate with Love</h4>
                  <p>You know your child best. Do not hesitate to ask questions, share concerns, and work with the school team to adjust supports as needed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Your Child Is Welcome Here</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the Catholic Schools Office or a specific school to discuss how we can support your child&rsquo;s learning journey. Every child deserves to be known, loved, and challenged to grow.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/schools/find" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Find a School <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/schools/enroll" className="btn btn-outline" style={{ borderColor: "rgba(238,218,179,0.3)", color: "var(--cream)" }}>Start Enrollment <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
