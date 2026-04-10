import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Student Health & Wellness | Diocese of Evansville",
  description:
    "Student health, wellness, and safety policies in Catholic schools of the Diocese of Evansville. Immunizations, counseling, nutrition, and safe environment programs.",
};

export default function HealthPage() {
  return (
    <>
      <PageHero
        label="Catholic Schools"
        title="Student Health & Wellness"
        subtitle="The well-being of every student — body, mind, and spirit — is at the heart of Catholic education. Our schools create safe, healthy environments where children can flourish."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Catholic Schools", href: "/schools" },
          { label: "Student Health & Wellness" },
        ]}
      />

      <main id="main-content">
        {/* Overview */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Whole-Child Care</div>
              <h2 className="section-title">Caring for the Whole Person</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Catholic schools educate the whole person. That means not only nurturing intellectual growth and faith formation, but also attending to the physical health, emotional well-being, and safety of every student. Our commitment to student wellness is rooted in the Catholic understanding that every child is made in the image of God and deserves to be cared for with dignity.
              </p>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Health & Safety</div>
              <h2 className="section-title">Our Wellness Programs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WellnessCard
                title="Immunization Requirements"
                desc="All students must meet Indiana state immunization requirements for school enrollment. Schools maintain up-to-date records and work with families to ensure compliance. Your child's pediatrician can provide the required documentation."
              />
              <WellnessCard
                title="School Nursing"
                desc="Trained health personnel are available to assist with daily health needs, administer prescribed medications, respond to emergencies, and maintain student health records. Each school has a health plan for managing illness and injury during the school day."
              />
              <WellnessCard
                title="Mental Health & Counseling"
                desc="School counselors provide social-emotional support, conflict resolution, and referrals to outside professionals when needed. Many schools offer small-group programs addressing topics such as grief, anxiety, and social skills development."
              />
              <WellnessCard
                title="Nutrition & School Meals"
                desc="Catholic schools participate in the National School Lunch Program, providing nutritious breakfast and lunch options for students. Schools follow federal nutrition guidelines and offer free and reduced-price meals for eligible families."
              />
              <WellnessCard
                title="Physical Education"
                desc="All students participate in physical education classes that develop motor skills, fitness, teamwork, and a love of physical activity. High school programs include options for competitive athletics and lifetime fitness."
              />
              <WellnessCard
                title="Allergy & Medical Plans"
                desc="Schools work with families and physicians to create individualized health plans for students with allergies, asthma, diabetes, or other medical conditions. Staff are trained in emergency procedures including EpiPen administration."
              />
            </div>
          </div>
        </section>

        {/* Safe Environment */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Safe Environment</div>
                <h2 className="section-title text-left">Protecting Our Children</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  The Diocese of Evansville is committed to the protection of children and vulnerable adults. All employees and volunteers who work with children must complete the diocesan Safe Environment training program, which includes background checks and education on recognizing and reporting abuse.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Schools maintain comprehensive safety protocols, including crisis response plans, active safety drills, secure entrance procedures, and visitor management systems. We work closely with local law enforcement and emergency management agencies.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  Students also receive age-appropriate safety education, including programs that teach them about personal boundaries, safe and unsafe situations, and how to report concerns to a trusted adult.
                </p>
              </div>

              <div className="bg-cream rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-5">Safety Measures</h3>
                <ul className="space-y-3 text-sm text-text-medium">
                  <SafeItem text="Background checks for all employees and volunteers" />
                  <SafeItem text="Safe Environment training (required and ongoing)" />
                  <SafeItem text="Secure building entrances with visitor sign-in" />
                  <SafeItem text="Regular emergency drills (fire, tornado, lockdown)" />
                  <SafeItem text="Crisis response plans reviewed annually" />
                  <SafeItem text="Partnership with local law enforcement" />
                  <SafeItem text="Age-appropriate safety education for students" />
                  <SafeItem text="Anti-bullying policies and programs" />
                  <SafeItem text="Designated reporting procedures for concerns" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social-Emotional */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto text-center">
            <div className="section-label">Social-Emotional Learning</div>
            <h2 className="section-title">Building Resilient Hearts</h2>
            <p className="text-base text-text-medium leading-relaxed mb-8 max-w-[680px] mx-auto">
              Rooted in Catholic virtues, our social-emotional learning programs help students develop self-awareness, empathy, responsible decision-making, and healthy relationships. When students feel safe and supported, they are free to learn, grow, and become the people God created them to be.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[700px] mx-auto">
              {["Self-Awareness", "Empathy", "Resilience", "Gratitude", "Respect", "Responsibility", "Compassion", "Integrity"].map(
                (virtue) => (
                  <div
                    key={virtue}
                    className="bg-white rounded-xl p-4 border border-border text-center"
                  >
                    <div className="font-heading text-base font-bold text-navy">{virtue}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Your Child&rsquo;s Well-Being Matters
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Contact your child&rsquo;s school or the Catholic Schools Office with questions about health policies, counseling services, or safe environment programs.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/schools/find" className="btn btn-primary">
                Find a School
              </Link>
              <Link href="/about/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function WellnessCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function SafeItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{text}</span>
    </li>
  );
}
