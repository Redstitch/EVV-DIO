import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Justice Ministry | Diocese of Evansville",
  description:
    "Catholic Social Teaching in action. The Social Justice Ministry of the Diocese of Evansville promotes human dignity, the common good, and solidarity across Southwestern Indiana.",
};

const principles = [
  { title: "Human Dignity", desc: "Every person is created in the image of God and possesses an inherent dignity that must be respected in all social, economic, and political decisions." },
  { title: "Common Good", desc: "We are called to work together for social conditions that allow all people to reach their full potential, prioritizing the needs of the most vulnerable." },
  { title: "Solidarity", desc: "We are one human family. Our commitment to justice extends beyond borders, races, and economic classes to embrace all of God's children." },
  { title: "Preferential Option for the Poor", desc: "The moral test of society is how we treat our most vulnerable members. The needs of the poor must come first." },
  { title: "Subsidiarity", desc: "Decisions should be made at the most local level possible, empowering individuals and communities to address their own needs." },
  { title: "Care for Creation", desc: "We are stewards of God's creation. Protecting the environment is a moral obligation that affects the poorest communities most." },
  { title: "Dignity of Work", desc: "Workers have a right to productive work, fair wages, and safe working conditions. The economy must serve people, not the other way around." },
  { title: "Rights & Responsibilities", desc: "Every person has fundamental rights and a corresponding responsibility to contribute to the good of the whole community." },
];

const focusAreas = [
  { title: "Poverty & Economic Justice", desc: "Working with Catholic Charities and community partners to address poverty in our region through direct service, systemic advocacy, and education. We support living wage initiatives, affordable housing, and food security programs." },
  { title: "Racial Justice & Reconciliation", desc: "Promoting dialogue, education, and action to dismantle racism and build communities of genuine inclusion. Parish-based programs explore the intersection of faith and racial justice through the lens of Catholic teaching." },
  { title: "Immigration & Refugee Welcome", desc: "Advocating for just immigration policies and welcoming refugees and immigrants into our communities. We partner with Catholic Charities to provide resettlement services, legal assistance referrals, and cultural integration support." },
  { title: "Environmental Stewardship", desc: "Inspired by Laudato Si', we encourage parishes to adopt care-for-creation practices including energy conservation, recycling programs, and community gardens. We advocate for environmental policies that protect the vulnerable." },
  { title: "Criminal Justice Reform", desc: "Working for restorative justice practices, alternatives to incarceration, re-entry support, and the abolition of the death penalty, in line with the teaching of the Catholic Church." },
  { title: "Legislative Advocacy", desc: "Providing resources for faithful citizenship, coordinating advocacy on state and federal legislation that affects the vulnerable, and equipping parish social justice committees to engage in the public square." },
];

const actions = [
  { title: "Parish Justice Committee", desc: "Start or join a social justice committee in your parish. We provide formation materials, meeting guides, and support." },
  { title: "Legislative Network", desc: "Join the Indiana Catholic Conference legislative network to receive action alerts and advocate on key issues at the Statehouse." },
  { title: "JustFaith Groups", desc: "Participate in JustFaith, an intensive small-group process that transforms participants through education, prayer, and immersion experiences." },
  { title: "Service Days", desc: "Join diocesan-wide service days that bring parishioners together for hands-on projects addressing poverty, homelessness, and environmental care." },
];

export default function SocialJusticePage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Social <em>Justice.</em></h1>
            <p className="deck">Putting Catholic Social Teaching into action for the common good of Southwestern Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/catholics-for-habitat.jpg"
              alt="Catholics for Habitat volunteers."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Mission */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2">Faith That Does Justice</h2>
          </div>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "-32px auto 0", textAlign: "center" }}>
            The Social Justice Ministry of the Diocese of Evansville calls Catholics to live out the Gospel by working for justice, peace, and the common good. Rooted in Catholic Social Teaching, we educate, advocate, and organize for systemic change that upholds the dignity of every human person, from conception to natural death.
          </p>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* Principles */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Foundation</span>
            <h2 className="section-h2">Principles of Catholic Social Teaching</h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, maxWidth: 680, margin: "-32px auto 40px", textAlign: "center" }}>
            These seven principles, drawn from Scripture and the teaching of the Church, guide all of our social justice work.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {principles.map((p) => (
              <div key={p.title} className="interior-card" style={{ cursor: "default" }}>
                <h3 style={{ fontSize: 16 }}>{p.title}</h3>
                <p style={{ fontSize: 12 }}>{p.desc}</p>
              </div>
            ))}
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

        {/* Focus Areas */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">In Action</span>
            <h2 className="section-h2">Our Focus Areas</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            {focusAreas.map((f) => (
              <div key={f.title} className="info-block" style={{ marginBottom: 0 }}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
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

        {/* Get Involved */}
        <section className="page-content bg-blue-subtle">
          <div className="section-head">
            <span className="section-tag">Take Action</span>
            <h2 className="section-h2">Get Involved</h2>
          </div>

          <div className="interior-grid interior-grid-2">
            {actions.map((a) => (
              <div key={a.title} className="interior-card" style={{ cursor: "default" }}>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Stand for Justice. Act with Mercy.</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the Social Justice Ministry to learn more, start a parish committee, or get involved in advocacy efforts.
          </p>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "12px auto 0", fontWeight: 600, fontSize: 18 }}>(812) 424-5536 | justice@evdio.org</p>
          <div style={{ marginTop: 32 }}>
            <Link href="/ministries" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>All Ministries <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
