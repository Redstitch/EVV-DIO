import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Diocesan Leadership",
  description:
    "Meet the leadership team of the Catholic Diocese of Evansville — the Vicar General, Chancellor, and key diocesan officials who guide our mission and administration.",
};

const leaders = [
  {
    name: "Most Rev. Joseph M. Siegel, D.D.",
    title: "Bishop of Evansville",
    description:
      "Sixth Bishop of the Diocese of Evansville, installed December 15, 2017. Bishop Siegel leads the diocese with a pastoral vision centered on Encounter, Deepen, and Engage.",
    link: "/about/our-bishop",
  },
  {
    name: "Very Rev. Alex Zenthoefer",
    title: "Vicar General",
    description:
      "Serves as the Bishop's principal collaborator in the governance of the diocese, exercising executive authority in the Bishop's name across all diocesan operations.",
  },
  {
    name: "Rev. Msgr. Steven Engber",
    title: "Chancellor",
    description:
      "Oversees official diocesan records, canonical documentation, and administrative procedures. Serves as the principal notary for canonical acts of the diocese.",
  },
  {
    name: "Dr. Daryl Hagan",
    title: "Superintendent of Catholic Schools",
    description:
      "Leads the Office of Catholic Schools, overseeing 26 schools serving thousands of students across the diocese with a commitment to academic excellence and faith formation.",
  },
  {
    name: "Tim McGuire",
    title: "Chief Financial Officer",
    description:
      "Manages diocesan finances, stewardship programs, and the Catholic Ministries Appeal. Ensures transparency and accountability in all financial operations.",
  },
  {
    name: "Sarah Weber",
    title: "Director of Communications",
    description:
      "Leads diocesan communications, including The Message newspaper, media relations, digital outreach, and the diocese's public communications strategy.",
  },
];

const consultativeGroups = [
  {
    name: "College of Consultors",
    description:
      "A body of priests who advise the Bishop on significant matters of diocesan governance, including financial decisions and policy matters that affect the entire diocese.",
  },
  {
    name: "Presbyteral Council",
    description:
      "A representative body of diocesan priests serving as a senate to the Bishop, offering counsel on matters pertaining to the pastoral ministry and life of the presbyterate.",
  },
  {
    name: "Diocesan Finance Council",
    description:
      "A consultative body of lay and clergy financial professionals who advise the Bishop on the financial administration of the diocese, budgets, and financial policies.",
  },
  {
    name: "Diocesan Pastoral Council",
    description:
      "Representatives from parishes across all four deaneries who advise the Bishop on the pastoral needs and priorities of the faithful throughout the diocese.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Diocesan <em>Leadership.</em></h1>
            <p className="deck">The leaders and consultative bodies guiding the mission and administration of our diocese.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="Diocesan leadership"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Leadership Team */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label text-left">Senior Leadership</div>
            <h2 className="section-title text-left">Diocesan Leadership Team</h2>
            <p className="text-base text-text-medium leading-relaxed mb-10 max-w-[640px]">
              The Catholic Center in Evansville serves as the administrative hub of the diocese. Our leadership team works collaboratively to support the Bishop&rsquo;s vision and serve our 45 parishes, 26 schools, and ministries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="bg-cream rounded-xl p-6 border border-border hover:border-gold/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-navy/[0.08] flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-navy" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue mb-3">{leader.title}</p>
                  <p className="text-sm text-text-medium leading-relaxed">
                    {leader.description}
                  </p>
                  {leader.link && (
                    <Link
                      href={leader.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue mt-4 hover:text-navy transition-colors"
                    >
                      Read Full Bio
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultative Bodies */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Governance</div>
            <h2 className="section-title">Consultative Bodies</h2>
            <p className="section-subtitle">
              These councils and bodies advise the Bishop on matters of pastoral life, finances, and governance throughout the diocese.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {consultativeGroups.map((group) => (
                <div
                  key={group.name}
                  className="bg-white rounded-xl p-6 border border-border"
                >
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">
                    {group.name}
                  </h3>
                  <p className="text-sm text-text-medium leading-relaxed">
                    {group.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four Deaneries */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Structure</div>
            <h2 className="section-title">Four Deaneries</h2>
            <p className="section-subtitle">
              The diocese is organized into four deaneries, each led by a dean who coordinates pastoral activity and represents the parishes in that region.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {[
                { name: "Evansville Deanery", counties: "Vanderburgh County", parishes: "16 parishes" },
                { name: "East Deanery", counties: "Warrick, Spencer, Perry Counties", parishes: "11 parishes" },
                { name: "North Deanery", counties: "Gibson, Pike, Dubois, Martin Counties", parishes: "10 parishes" },
                { name: "West Deanery", counties: "Posey, Gibson, Knox, Daviess, Sullivan Counties", parishes: "8 parishes" },
              ].map((deanery) => (
                <div key={deanery.name} className="bg-cream rounded-xl p-6 border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-1">{deanery.name}</h3>
                  <p className="text-xs text-text-light mb-1">{deanery.counties}</p>
                  <p className="text-sm font-semibold text-blue">{deanery.parishes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Contact Our Leadership Team
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              Reach the Catholic Center to connect with any member of our diocesan leadership.
            </p>
            <Link href="/about/contact" className="btn btn-primary">
              Contact the Catholic Center
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
