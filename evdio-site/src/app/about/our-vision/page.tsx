import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Our Vision & Priorities",
  description:
    "Encounter. Deepen. Engage. Explore Bishop Siegel's pastoral vision and the strategic priorities guiding the Diocese of Evansville through 2030.",
};

const priorities = [
  {
    number: "01",
    title: "Encounter",
    subtitle: "Meet People Where They Are",
    goals: [
      "Create welcoming parish communities where every person feels at home",
      "Invest in outreach to inactive Catholics, young adults, and seekers",
      "Strengthen OCIA (formerly RCIA) programs across all parishes",
      "Leverage digital communications and social media for evangelization",
      "Support parish-based small groups and personal invitation initiatives",
    ],
  },
  {
    number: "02",
    title: "Deepen",
    subtitle: "Grow in Faith and Understanding",
    goals: [
      "Expand adult faith formation opportunities in every deanery",
      "Strengthen sacramental preparation programs for families",
      "Invest in Catholic school excellence and affordability with 850 scholarships annually",
      "Develop youth and young adult ministry programs across the diocese",
      "Promote devotional life, retreats, and spiritual direction",
    ],
  },
  {
    number: "03",
    title: "Engage",
    subtitle: "Live the Mission of the Church",
    goals: [
      "Empower laity for leadership in parishes, schools, and ministries",
      "Expand Catholic Charities services to reach more than 2,400 families",
      "Grow stewardship and the Catholic Ministries Appeal to fund our mission",
      "Promote social justice advocacy rooted in Catholic Social Teaching",
      "Foster vocations to the priesthood, diaconate, and religious life",
    ],
  },
];

const strategicAreas = [
  {
    title: "Parish Vitality",
    description:
      "Ensuring every parish is a vibrant center of worship, formation, and community life, with the resources and leadership to thrive.",
    icon: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    ),
  },
  {
    title: "Catholic Education",
    description:
      "Sustaining and growing our 26 schools, providing academic excellence rooted in faith formation for every family that desires it.",
    icon: (
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    ),
  },
  {
    title: "Charitable Mission",
    description:
      "Expanding our outreach through Catholic Charities, serving the poor, vulnerable, and marginalized with the compassion of Christ.",
    icon: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
  },
  {
    title: "Vocations & Ministry",
    description:
      "Actively promoting and supporting vocations to the priesthood, diaconate, and religious life while empowering lay ministry leaders.",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    title: "Transparency & Trust",
    description:
      "Building trust through open communication, monthly dashboards, financial accountability, and authentic parish-center relationships.",
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    ),
  },
  {
    title: "Communications & Outreach",
    description:
      "Telling our story through modern communications, The Message newspaper, digital media, and personal invitation across all 12 counties.",
    icon: (
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    ),
  },
];

export default function OurVisionPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Our Vision &amp; <em>Priorities.</em></h1>
            <p className="deck">Encounter. Deepen. Engage. A pastoral vision for the Diocese of Evansville.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/articles/becoming-one-roadmap.jpg"
              alt="The pastoral vision: Encounter, Deepen, Engage."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Vision Statement */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="section-label">Pastoral Vision 2025&ndash;2030</div>
            <h2 className="font-heading text-[clamp(36px,5vw,56px)] font-bold text-navy leading-tight mb-6">
              Encounter. Deepen. Engage.
            </h2>
            <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto mb-4">
              Bishop Siegel&rsquo;s pastoral vision calls every Catholic in Southwestern Indiana to a three-fold mission: to encounter the living Christ in our daily lives, to deepen our faith through formation and community, and to engage as active participants in the mission of the Church.
            </p>
            <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
              This vision is not a program &mdash; it is a way of life. It shapes every decision at the Catholic Center, every initiative in our parishes, and every investment in our schools and ministries.
            </p>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">The Three Pillars</div>
            <h2 className="section-title">Pastoral Priorities</h2>
            <div className="space-y-8 mt-10">
              {priorities.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]"
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:block flex-shrink-0">
                      <div className="font-heading text-[56px] font-bold text-gold/20 leading-none">
                        {pillar.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-[clamp(24px,3vw,32px)] font-bold text-navy mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue mb-4">{pillar.subtitle}</p>
                      <ul className="space-y-2">
                        {pillar.goals.map((goal, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-text-medium leading-relaxed">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold flex-shrink-0 mt-0.5" aria-hidden="true">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Areas */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Strategic Focus</div>
            <h2 className="section-title">Areas of Investment</h2>
            <p className="section-subtitle">
              These strategic areas guide our resource allocation, staffing, and initiatives across the diocese.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {strategicAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-cream rounded-xl p-6 border border-border"
                >
                  <div className="w-11 h-11 rounded-lg bg-navy/[0.06] flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-navy" aria-hidden="true">
                      {area.icon}
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">{area.title}</h3>
                  <p className="text-sm text-text-medium leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="bg-navy py-20 px-8">
          <div className="max-w-[1080px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[2.5px] uppercase text-gold font-semibold mb-4">
              <span className="w-6 h-px bg-gold" />
              By the Numbers
            </div>
            <h2 className="font-heading text-[clamp(28px,3.5vw,40px)] font-bold text-white leading-tight mb-12">
              Our Diocese at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { value: "79,500", label: "Catholics" },
                { value: "45", label: "Parishes" },
                { value: "26", label: "Schools" },
                { value: "12", label: "Counties" },
                { value: "2,400", label: "Families Served" },
                { value: "850", label: "Scholarships" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-[36px] font-bold text-gold leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 tracking-wider uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="section-title">Be Part of the Vision</h2>
            <p className="text-base text-text-medium leading-relaxed max-w-[560px] mx-auto mb-8">
              Every Catholic in our diocese has a role to play. Whether through parish involvement, volunteering, giving, or prayer, you can help us Encounter, Deepen, and Engage.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/give" className="btn btn-primary">
                Support Our Mission
              </Link>
              <Link href="/about/our-bishop" className="btn btn-secondary">
                Meet Our Bishop
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
