import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Prison & Jail Ministry | Diocese of Evansville",
  description:
    "Catholic prison and jail ministry in the Diocese of Evansville. Bringing the sacraments, pastoral care, and hope to the incarcerated and their families.",
};

export default function PrisonMinistryPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Prison & Jail Ministry"
        subtitle="&ldquo;I was in prison and you came to visit me.&rdquo; &mdash; Matthew 25:36"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Prison & Jail Ministry" },
        ]}
      />

      <main id="main-content">
        {/* Mission */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Our Mission</div>
              <h2 className="section-title">Bringing Christ Behind the Walls</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Prison and Jail Ministry of the Diocese of Evansville brings the presence of Christ to men and women who are incarcerated in correctional facilities across Southwestern Indiana. Through the sacraments, Scripture, pastoral counseling, and the simple gift of presence, our ministers accompany the incarcerated on their journey of faith, healing, and hope.
              </p>
            </div>

            <div className="bg-navy rounded-2xl p-8 md:p-10 text-center">
              <blockquote className="font-heading text-xl md:text-2xl text-white leading-relaxed italic mb-4">
                &ldquo;No one is beyond the reach of God&rsquo;s mercy. Every person in a jail or prison cell is a child of God, and the Church must be present to them.&rdquo;
              </blockquote>
              <cite className="text-gold font-semibold text-sm not-italic">&mdash; USCCB, Responsibility, Rehabilitation, and Restoration</cite>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">What We Do</div>
              <h2 className="section-title">Ministry Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Sacramental Ministry"
                desc="Priests and deacons celebrate Mass, hear confessions, and administer the sacraments of the Eucharist and Anointing of the Sick in correctional facilities. For many inmates, the weekly liturgy is the spiritual anchor of their week."
              />
              <ServiceCard
                title="Bible Study & Faith Sharing"
                desc="Trained volunteers lead weekly Bible studies and faith-sharing groups. These small communities provide fellowship, accountability, and a deeper understanding of Scripture and the Catholic faith."
              />
              <ServiceCard
                title="OCIA in Prison"
                desc="The Order of Christian Initiation of Adults is offered for inmates who wish to become Catholic or complete their sacraments of initiation. Catechists prepare candidates for Baptism, Confirmation, and First Eucharist."
              />
              <ServiceCard
                title="Pastoral Visits"
                desc="Volunteer visitors provide one-on-one pastoral care, listening, and prayer. For many inmates, these visits are their only connection to the outside faith community and a powerful reminder that they are not forgotten."
              />
              <ServiceCard
                title="Family Support"
                desc="The families of incarcerated individuals often face stigma, financial hardship, and emotional distress. The ministry connects families with Catholic Charities for counseling, assistance, and support groups."
              />
              <ServiceCard
                title="Re-Entry Support"
                desc="As inmates prepare for release, the ministry connects them with parishes, mentors, and community resources to support their transition. Housing, employment, and spiritual community are essential to reducing recidivism."
              />
            </div>
          </div>
        </section>

        {/* Facilities Served */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Where We Serve</div>
              <h2 className="section-title">Facilities in Our Diocese</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Catholic prison ministry volunteers serve in county jails and state correctional facilities across the 12 counties of the Diocese of Evansville, including:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <FacilityItem name="Vanderburgh County Jail, Evansville" />
              <FacilityItem name="Warrick County Jail, Boonville" />
              <FacilityItem name="Gibson County Jail, Princeton" />
              <FacilityItem name="Dubois County Jail, Jasper" />
              <FacilityItem name="Posey County Jail, Mt. Vernon" />
              <FacilityItem name="Branchville Correctional Facility" />
              <FacilityItem name="Wabash Valley Correctional Facility" />
              <FacilityItem name="Other county and regional facilities" />
            </div>
          </div>
        </section>

        {/* Volunteer */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Get Involved</div>
              <h2 className="section-title">Become a Prison Ministry Volunteer</h2>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)] mb-8">
              <div className="space-y-5 text-sm text-text-medium">
                <StepItem number="1" title="Attend an Orientation" desc="Learn about the ministry, hear from experienced volunteers, and discern whether prison ministry is your calling." />
                <StepItem number="2" title="Complete Training" desc="Volunteers must complete diocesan Safe Environment training, a background check, and facility-specific orientation and security clearance." />
                <StepItem number="3" title="Be Assigned to a Facility" desc="New volunteers are paired with experienced ministers and assigned to a facility based on location and need." />
                <StepItem number="4" title="Ongoing Formation" desc="Regular retreats, prayer, and continuing education help volunteers grow in their ministry and care for their own spiritual well-being." />
              </div>
            </div>

            <p className="text-sm text-text-light text-center">
              You do not need to have any previous experience with correctional facilities. What you need is a compassionate heart, a willingness to listen, and a desire to bring Christ&rsquo;s love to those who need it most.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Answer the Call</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Visit the Imprisoned
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Contact the Prison Ministry coordinator to learn more about volunteering or to request pastoral services for an incarcerated loved one.
            </p>
            <div className="text-gold font-semibold text-lg mb-8">(812) 424-5536 | prisonministry@evdio.org</div>
            <Link href="/ministries" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              All Ministries
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-7 shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function FacilityItem({ name }: { name: string }) {
  return (
    <div className="bg-cream rounded-lg border border-border px-5 py-3">
      <span className="text-sm font-semibold text-navy">{name}</span>
    </div>
  );
}

function StepItem({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-navy text-gold font-heading font-bold text-sm flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="font-semibold text-navy text-[15px] mb-0.5">{title}</div>
        <div className="leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
