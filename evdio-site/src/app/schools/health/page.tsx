import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Student Health & Wellness | Diocese of Evansville",
  description:
    "Student health, wellness, and safety policies in Catholic schools of the Diocese of Evansville. Immunizations, counseling, nutrition, and safe environment programs.",
};

export default function HealthPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title">Student <em>Health.</em></h1>
            <p className="deck">The well-being of every student — body, mind, and spirit — is at the heart of Catholic education. Our schools create safe, healthy environments where children can flourish.</p>
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
            <span className="section-tag">Whole-Child Care</span>
            <h2 className="section-h2">Caring for the Whole Person</h2>
            <p className="section-desc">
              Catholic schools educate the whole person. That means not only nurturing intellectual growth and faith formation, but also attending to the physical health, emotional well-being, and safety of every student. Our commitment to student wellness is rooted in the Catholic understanding that every child is made in the image of God and deserves to be cared for with dignity.
            </p>
          </div>
        </section>

        <div className="page-content bg-eggshell" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Areas */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Health &amp; Safety</span>
            <h2 className="section-h2">Our Wellness Programs</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Immunization Requirements</h3>
              <p>All students must meet Indiana state immunization requirements for school enrollment. Schools maintain up-to-date records and work with families to ensure compliance. Your child&rsquo;s pediatrician can provide the required documentation.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>School Nursing</h3>
              <p>Trained health personnel are available to assist with daily health needs, administer prescribed medications, respond to emergencies, and maintain student health records. Each school has a health plan for managing illness and injury during the school day.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Mental Health &amp; Counseling</h3>
              <p>School counselors provide social-emotional support, conflict resolution, and referrals to outside professionals when needed. Many schools offer small-group programs addressing topics such as grief, anxiety, and social skills development.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Nutrition &amp; School Meals</h3>
              <p>Catholic schools participate in the National School Lunch Program, providing nutritious breakfast and lunch options for students. Schools follow federal nutrition guidelines and offer free and reduced-price meals for eligible families.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Physical Education</h3>
              <p>All students participate in physical education classes that develop motor skills, fitness, teamwork, and a love of physical activity. High school programs include options for competitive athletics and lifetime fitness.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Allergy &amp; Medical Plans</h3>
              <p>Schools work with families and physicians to create individualized health plans for students with allergies, asthma, diabetes, or other medical conditions. Staff are trained in emergency procedures including EpiPen administration.</p>
            </div>
          </div>
        </section>

        <div className="page-content bg-eggshell" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Safe Environment */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2">
            <div>
              <div className="section-head" style={{ textAlign: "left" }}>
                <span className="section-tag" style={{ textAlign: "left" }}>Safe Environment</span>
                <h2 className="section-h2" style={{ textAlign: "left" }}>Protecting Our Children</h2>
              </div>
              <p>
                The Diocese of Evansville is committed to the protection of children and vulnerable adults. All employees and volunteers who work with children must complete the diocesan Safe Environment training program, which includes background checks and education on recognizing and reporting abuse.
              </p>
              <p>
                Schools maintain comprehensive safety protocols, including crisis response plans, active safety drills, secure entrance procedures, and visitor management systems. We work closely with local law enforcement and emergency management agencies.
              </p>
              <p>
                Students also receive age-appropriate safety education, including programs that teach them about personal boundaries, safe and unsafe situations, and how to report concerns to a trusted adult.
              </p>
            </div>

            <div className="info-block">
              <h3>Safety Measures</h3>
              <ul>
                <li>Background checks for all employees and volunteers</li>
                <li>Safe Environment training (required and ongoing)</li>
                <li>Secure building entrances with visitor sign-in</li>
                <li>Regular emergency drills (fire, tornado, lockdown)</li>
                <li>Crisis response plans reviewed annually</li>
                <li>Partnership with local law enforcement</li>
                <li>Age-appropriate safety education for students</li>
                <li>Anti-bullying policies and programs</li>
                <li>Designated reporting procedures for concerns</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="page-content bg-eggshell" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Social-Emotional */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Social-Emotional Learning</span>
            <h2 className="section-h2">Building Resilient Hearts</h2>
            <p className="section-desc">
              Rooted in Catholic virtues, our social-emotional learning programs help students develop self-awareness, empathy, responsible decision-making, and healthy relationships. When students feel safe and supported, they are free to learn, grow, and become the people God created them to be.
            </p>
          </div>

          <div className="interior-grid interior-grid-2" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {["Self-Awareness", "Empathy", "Resilience", "Gratitude", "Respect", "Responsibility", "Compassion", "Integrity"].map(
              (virtue) => (
                <div key={virtue} className="interior-card" style={{ cursor: "default", textAlign: "center" }}>
                  <h3 style={{ marginBottom: 0 }}>{virtue}</h3>
                </div>
              )
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="page-content bg-blue-subtle">
          <div className="cta-block">
            <h3>Your Child&rsquo;s Well-Being Matters</h3>
            <p>
              Contact your child&rsquo;s school or the Catholic Schools Office with questions about health policies, counseling services, or safe environment programs.
            </p>
            <div className="btn-row">
              <Link href="/schools/find" className="btn btn-primary">
                Find a School
              </Link>
              <Link href="/about/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
