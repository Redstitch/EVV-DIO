import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Programs for Children with Special Needs",
  description:
    "Catholic schools in the Diocese of Evansville support students with learning differences and special needs. Explore programs, accommodations, and inclusive education.",
};

export default function SpecialNeeds() {
  return (
    <>
      <PageHero
        label="Catholic Schools"
        title="Programs for Children with Special Needs"
        subtitle="Every child is a gift from God. Catholic schools in the Diocese of Evansville are committed to welcoming and supporting students of all abilities."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Catholic Schools", href: "/schools" },
          { label: "Special Needs Programs" },
        ]}
      />

      <main id="main-content">
        {/* Philosophy */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Our Commitment</div>
              <h2 className="section-title">Every Child Belongs</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Catholic teaching affirms the inherent dignity of every person, created in the image and likeness of God. Our schools strive to be communities of inclusion where students with learning differences, developmental disabilities, and other special needs can thrive alongside their peers. We believe that diversity within our classrooms enriches the educational experience for all students.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Support Services</div>
              <h2 className="section-title">How We Support Students</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Individualized Learning Plans"
                desc="Working in partnership with families, our schools develop individualized plans to address each student's unique learning needs, including accommodations for instruction and assessment."
              />
              <ServiceCard
                title="Resource Specialists"
                desc="Many of our schools employ resource teachers or learning specialists who provide small-group and one-on-one instruction for students who need additional academic support."
              />
              <ServiceCard
                title="Speech & Language Services"
                desc="Through partnerships with local school corporations and private providers, students in Catholic schools can access speech and language therapy services."
              />
              <ServiceCard
                title="Occupational Therapy"
                desc="Occupational therapy services are available to students who need support with fine motor skills, sensory processing, and other functional areas."
              />
              <ServiceCard
                title="Behavioral Support"
                desc="Our schools provide positive behavioral supports and interventions to help students develop social-emotional skills and succeed in the classroom environment."
              />
              <ServiceCard
                title="Assistive Technology"
                desc="Schools utilize assistive technology tools and accommodations to help students with disabilities access the curriculum, including specialized software, audio books, and adaptive equipment."
              />
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Partnerships</div>
                <h2 className="section-title text-left">Working Together</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Catholic schools work in collaboration with local public school corporations, who are required under federal law to make certain services available to students with disabilities regardless of where they attend school. This includes evaluation, identification, and related services such as speech therapy and counseling.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Schools also partner with families, pediatricians, psychologists, and community organizations to ensure that each student receives the support they need to succeed.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  If your child has an IEP (Individualized Education Program) or a 504 plan from a public school, please share this documentation during the enrollment process so that we can determine how best to meet your child&rsquo;s needs.
                </p>
              </div>

              <div className="bg-cream rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-5">For Parents</h3>
                <div className="space-y-4">
                  <TipItem
                    title="Start the Conversation Early"
                    desc="Contact the school before enrollment to discuss your child's needs. Schools want to partner with you to find the right fit."
                  />
                  <TipItem
                    title="Share Documentation"
                    desc="Provide any existing evaluations, IEPs, 504 plans, or medical documentation so the school can prepare to support your child."
                  />
                  <TipItem
                    title="Stay Involved"
                    desc="Regular communication between parents and teachers is essential. Schedule conferences and stay connected with your child's progress."
                  />
                  <TipItem
                    title="Advocate with Love"
                    desc="You know your child best. Do not hesitate to ask questions, share concerns, and work with the school team to adjust supports as needed."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Your Child Is Welcome Here
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Contact the Catholic Schools Office or a specific school to discuss how we can support your child&rsquo;s learning journey. Every child deserves to be known, loved, and challenged to grow.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/schools/find" className="btn btn-primary">
                Find a School
              </Link>
              <Link href="/schools/enroll" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Start Enrollment
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function TipItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 pb-4 border-b border-border last:border-b-0 last:pb-0">
      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
      <div>
        <div className="font-semibold text-navy text-[15px] mb-0.5">{title}</div>
        <div className="text-sm text-text-medium leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
