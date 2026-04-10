import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Disability & Inclusion Ministry | Diocese of Evansville",
  description:
    "The Disability & Inclusion Ministry ensures that people of all abilities can fully participate in the sacramental and community life of the Diocese of Evansville.",
};

export default function DisabilityPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Disability & Inclusion"
        subtitle="Every person, regardless of ability, belongs at the table of the Lord."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Disability & Inclusion" },
        ]}
      />

      <main id="main-content">
        {/* Mission */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Our Mission</div>
              <h2 className="section-title">Full Participation for All</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Disability and Inclusion Ministry of the Diocese of Evansville works to ensure that individuals with physical, intellectual, sensory, and developmental disabilities can fully participate in the sacramental, educational, and social life of the Church. Every person is created in the image of God, and every person has a place in the Body of Christ.
              </p>
            </div>

            <div className="bg-navy rounded-2xl p-8 md:p-10 text-center">
              <blockquote className="font-heading text-xl md:text-2xl text-white leading-relaxed italic mb-4">
                &ldquo;The Church must be a place of mercy freely given, where everyone can feel welcomed, loved, forgiven, and encouraged to live the good life of the Gospel.&rdquo;
              </blockquote>
              <cite className="text-gold font-semibold text-sm not-italic">&mdash; Pope Francis, Evangelii Gaudium</cite>
            </div>
          </div>
        </section>

        {/* Areas of Focus */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Areas of Focus</div>
              <h2 className="section-title">How We Serve</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FocusCard
                title="Accessibility Assessments"
                desc="We help parishes evaluate their physical spaces, liturgical practices, and communications for accessibility. From wheelchair ramps and accessible restrooms to large-print missalettes and hearing loops, we identify barriers and recommend solutions."
              />
              <FocusCard
                title="Sacramental Inclusion"
                desc="Every baptized person has a right to the sacraments. We work with pastors and parish staffs to ensure that individuals with disabilities can prepare for and receive all sacraments, with accommodations as needed."
              />
              <FocusCard
                title="Adapted Faith Formation"
                desc="Through the SPRED program and other resources, we provide adapted religious education for individuals with intellectual and developmental disabilities. Materials and methods are tailored to individual learning needs."
              />
              <FocusCard
                title="Parish Awareness Training"
                desc="Workshops and resources for parish leaders, ushers, catechists, and volunteers on welcoming and including people with disabilities. Training covers disability etiquette, communication strategies, and practical accommodations."
              />
              <FocusCard
                title="Mental Health Ministry"
                desc="Support for individuals and families affected by mental health conditions. We provide referrals to Catholic counselors, promote mental health awareness within parishes, and work to reduce stigma surrounding mental illness."
              />
              <FocusCard
                title="Advocacy & Resource Connection"
                desc="Connecting individuals and families with community resources, support groups, respite care, and government services. We serve as advocates for the disability community within the diocese and in the broader community."
              />
            </div>
          </div>
        </section>

        {/* Resources for Parishes */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">For Parishes</div>
                <h2 className="section-title text-left">Creating Inclusive Communities</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  Every parish in the Diocese of Evansville is called to be a welcoming community where people of all abilities feel they belong. Inclusion is not a program; it is an attitude and a practice that permeates everything we do.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  The Disability and Inclusion Ministry provides parishes with checklists, toolkits, and one-on-one consulting to assess and improve their inclusivity. We are available to visit parishes, meet with pastoral councils, and train staff and volunteers.
                </p>
              </div>

              <div className="bg-cream rounded-2xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold text-navy mb-5">Inclusion Checklist</h3>
                <ul className="space-y-3 text-sm text-text-medium">
                  <CheckItem text="Accessible entrances, restrooms, and gathering spaces" />
                  <CheckItem text="Hearing assistance systems (hearing loop or FM)" />
                  <CheckItem text="Large-print bulletins and missalettes" />
                  <CheckItem text="Reserved accessible seating in the assembly" />
                  <CheckItem text="Trained greeters and ushers aware of disability needs" />
                  <CheckItem text="Sensory-friendly Mass or quiet space available" />
                  <CheckItem text="Adapted religious education options" />
                  <CheckItem text="Parish website and communications accessible" />
                  <CheckItem text="Designated inclusion coordinator or committee" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Get in Touch</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Everyone Belongs
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Contact the Disability and Inclusion Ministry to request a parish assessment, training, or resources.
            </p>
            <div className="text-gold font-semibold text-lg mb-8">(812) 424-5536 | inclusion@evdio.org</div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/ministries/spred" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                SPRED Program
              </Link>
              <Link href="/ministries" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                All Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function FocusCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-7 shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{text}</span>
    </li>
  );
}
