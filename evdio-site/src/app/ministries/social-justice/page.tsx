import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Social Justice Ministry | Diocese of Evansville",
  description:
    "Catholic Social Teaching in action. The Social Justice Ministry of the Diocese of Evansville promotes human dignity, the common good, and solidarity across Southwestern Indiana.",
};

export default function SocialJusticePage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Social Justice"
        subtitle="Putting Catholic Social Teaching into action for the common good of Southwestern Indiana."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Social Justice" },
        ]}
      />

      <main id="main-content">
        {/* Mission */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Our Mission</div>
              <h2 className="section-title">Faith That Does Justice</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Social Justice Ministry of the Diocese of Evansville calls Catholics to live out the Gospel by working for justice, peace, and the common good. Rooted in Catholic Social Teaching, we educate, advocate, and organize for systemic change that upholds the dignity of every human person, from conception to natural death.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Foundation</div>
              <h2 className="section-title">Principles of Catholic Social Teaching</h2>
              <p className="section-subtitle mx-auto">
                These seven principles, drawn from Scripture and the teaching of the Church, guide all of our social justice work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <PrincipleCard title="Human Dignity" desc="Every person is created in the image of God and possesses an inherent dignity that must be respected in all social, economic, and political decisions." />
              <PrincipleCard title="Common Good" desc="We are called to work together for social conditions that allow all people to reach their full potential, prioritizing the needs of the most vulnerable." />
              <PrincipleCard title="Solidarity" desc="We are one human family. Our commitment to justice extends beyond borders, races, and economic classes to embrace all of God's children." />
              <PrincipleCard title="Preferential Option for the Poor" desc="The moral test of society is how we treat our most vulnerable members. The needs of the poor must come first." />
              <PrincipleCard title="Subsidiarity" desc="Decisions should be made at the most local level possible, empowering individuals and communities to address their own needs." />
              <PrincipleCard title="Care for Creation" desc="We are stewards of God's creation. Protecting the environment is a moral obligation that affects the poorest communities most." />
              <PrincipleCard title="Dignity of Work" desc="Workers have a right to productive work, fair wages, and safe working conditions. The economy must serve people, not the other way around." />
              <PrincipleCard title="Rights & Responsibilities" desc="Every person has fundamental rights and a corresponding responsibility to contribute to the good of the whole community." />
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">In Action</div>
              <h2 className="section-title">Our Focus Areas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FocusCard
                title="Poverty & Economic Justice"
                desc="Working with Catholic Charities and community partners to address poverty in our region through direct service, systemic advocacy, and education. We support living wage initiatives, affordable housing, and food security programs."
              />
              <FocusCard
                title="Racial Justice & Reconciliation"
                desc="Promoting dialogue, education, and action to dismantle racism and build communities of genuine inclusion. Parish-based programs explore the intersection of faith and racial justice through the lens of Catholic teaching."
              />
              <FocusCard
                title="Immigration & Refugee Welcome"
                desc="Advocating for just immigration policies and welcoming refugees and immigrants into our communities. We partner with Catholic Charities to provide resettlement services, legal assistance referrals, and cultural integration support."
              />
              <FocusCard
                title="Environmental Stewardship"
                desc="Inspired by Laudato Si', we encourage parishes to adopt care-for-creation practices including energy conservation, recycling programs, and community gardens. We advocate for environmental policies that protect the vulnerable."
              />
              <FocusCard
                title="Criminal Justice Reform"
                desc="Working for restorative justice practices, alternatives to incarceration, re-entry support, and the abolition of the death penalty, in line with the teaching of the Catholic Church."
              />
              <FocusCard
                title="Legislative Advocacy"
                desc="Providing resources for faithful citizenship, coordinating advocacy on state and federal legislation that affects the vulnerable, and equipping parish social justice committees to engage in the public square."
              />
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Take Action</div>
              <h2 className="section-title">Get Involved</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ActionCard title="Parish Justice Committee" desc="Start or join a social justice committee in your parish. We provide formation materials, meeting guides, and support." />
              <ActionCard title="Legislative Network" desc="Join the Indiana Catholic Conference legislative network to receive action alerts and advocate on key issues at the Statehouse." />
              <ActionCard title="JustFaith Groups" desc="Participate in JustFaith, an intensive small-group process that transforms participants through education, prayer, and immersion experiences." />
              <ActionCard title="Service Days" desc="Join diocesan-wide service days that bring parishioners together for hands-on projects addressing poverty, homelessness, and environmental care." />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Justice & Peace</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Stand for Justice. Act with Mercy.
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Contact the Social Justice Ministry to learn more, start a parish committee, or get involved in advocacy efforts.
            </p>
            <div className="text-gold font-semibold text-lg mb-8">(812) 424-5536 | justice@evdio.org</div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/ministries/mission-outreach" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Mission & Outreach
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

function PrincipleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-5">
      <h3 className="font-heading text-base font-bold text-navy mb-2">{title}</h3>
      <p className="text-xs text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function FocusCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl border border-border p-7">
      <h3 className="font-heading text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function ActionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}
