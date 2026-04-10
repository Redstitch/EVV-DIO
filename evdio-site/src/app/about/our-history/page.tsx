import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our History",
  description:
    "Explore the history of the Catholic Diocese of Evansville, established in 1944. From pioneer missionaries to today, discover how Catholicism has shaped Southwestern Indiana.",
};

const timeline = [
  {
    year: "1749",
    title: "French Missionaries Arrive",
    description:
      "French Catholic missionaries first bring the faith to the Wabash and Ohio River valleys, establishing some of the earliest Catholic communities in what would become Indiana.",
  },
  {
    year: "1834",
    title: "Diocese of Vincennes Established",
    description:
      "The Diocese of Vincennes (later the Archdiocese of Indianapolis) is established, bringing organized Catholic governance to Indiana. Southwestern Indiana parishes fall under its jurisdiction.",
  },
  {
    year: "1853",
    title: "Assumption Parish Founded in Evansville",
    description:
      "One of the earliest Catholic parishes in Evansville is established, serving the growing German and Irish immigrant communities in the river city.",
  },
  {
    year: "1912",
    title: "Growth of Catholic Schools",
    description:
      "Catholic schools multiply across Southwestern Indiana, providing faith-based education to generations of families and establishing the foundation for today's 26-school system.",
  },
  {
    year: "1944",
    title: "Diocese of Evansville Established",
    description:
      "On November 11, 1944, Pope Pius XII establishes the Diocese of Evansville, carving it from the Diocese of Indianapolis. The Most Reverend Henry J. Grimmelsman is appointed the first Bishop.",
  },
  {
    year: "1944",
    title: "Bishop Henry J. Grimmelsman",
    description:
      "First Bishop of Evansville (1944\u20131965). Bishop Grimmelsman organized the new diocese, established essential institutions, and oversaw a period of significant growth in parishes and schools.",
  },
  {
    year: "1965",
    title: "Bishop Paul F. Leibold",
    description:
      "Second Bishop of Evansville (1965\u20131969). Bishop Leibold led the diocese during the transformative period following the Second Vatican Council before being appointed Archbishop of Cincinnati.",
  },
  {
    year: "1970",
    title: "The Message Newspaper Founded",
    description:
      "The Message begins publication as the diocesan newspaper, providing Catholic journalism and community news to families across all 12 counties. It continues serving readers today.",
  },
  {
    year: "1970",
    title: "Bishop Francis R. Shea",
    description:
      "Third Bishop of Evansville (1970\u20131989). During his nearly two decades of leadership, Bishop Shea strengthened Catholic education, expanded charitable services, and deepened ecumenical relationships.",
  },
  {
    year: "1989",
    title: "Bishop Gerald A. Gettelfinger",
    description:
      "Fourth Bishop of Evansville (1989\u20132011). Bishop Gettelfinger guided the diocese through a period of consolidation and renewal, emphasizing stewardship, vocations, and parish pastoral planning.",
  },
  {
    year: "2011",
    title: "Bishop Charles C. Thompson",
    description:
      "Fifth Bishop of Evansville (2011\u20132017). Bishop Thompson launched new evangelization efforts and strengthened the diocese's commitment to social justice before being appointed Archbishop of Indianapolis.",
  },
  {
    year: "2017",
    title: "Bishop Joseph M. Siegel Installed",
    description:
      "On December 15, 2017, Bishop Joseph M. Siegel is installed as the sixth Bishop of Evansville. He brings a pastoral vision of Encounter, Deepen, and Engage to revitalize the life of the diocese.",
  },
  {
    year: "Today",
    title: "A Vibrant Community of Faith",
    description:
      "The Diocese of Evansville serves 79,500 Catholics across 45 parishes, 26 schools, and 12 counties. Catholic Charities serves 2,400 families annually, and 850 scholarships are awarded each year.",
  },
];

export default function OurHistoryPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Our History"
        subtitle="Over 275 years of Catholic faith, community, and service in Southwestern Indiana."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our History" },
        ]}
      />

      <main id="main-content">
        {/* Intro */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              From Pioneer Missionaries to a Thriving Diocese
            </h2>
            <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
              The Catholic faith in Southwestern Indiana traces its roots to French missionaries who traveled the river valleys in the eighteenth century. Through generations of immigrants, pioneers, and faithful families, the Church has grown into the vibrant diocese we know today &mdash; 79,500 Catholics strong across 12 counties.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[39px] top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    {/* Year Badge */}
                    <div className="hidden md:flex flex-shrink-0 w-[80px] h-[80px] rounded-full bg-navy items-center justify-center relative z-10">
                      <span className="font-heading text-sm font-bold text-gold leading-none text-center">
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
                      <span className="md:hidden inline-block text-xs font-bold text-gold bg-navy rounded-full px-3 py-1 mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bishops Summary */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Episcopal Lineage</div>
            <h2 className="section-title">Bishops of Evansville</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {[
                { name: "Henry J. Grimmelsman", years: "1944\u20131965", ordinal: "1st" },
                { name: "Paul F. Leibold", years: "1965\u20131969", ordinal: "2nd" },
                { name: "Francis R. Shea", years: "1970\u20131989", ordinal: "3rd" },
                { name: "Gerald A. Gettelfinger", years: "1989\u20132011", ordinal: "4th" },
                { name: "Charles C. Thompson", years: "2011\u20132017", ordinal: "5th" },
                { name: "Joseph M. Siegel", years: "2017\u2013Present", ordinal: "6th" },
              ].map((bishop) => (
                <div key={bishop.name} className="bg-cream rounded-xl p-6 border border-border text-center">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading text-sm font-bold text-gold">{bishop.ordinal}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-1">
                    Bishop {bishop.name}
                  </h3>
                  <p className="text-sm text-text-light">{bishop.years}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Continue the Story
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              The history of our diocese is still being written. Learn about our vision for the future and how you can be part of the next chapter.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/about/our-vision" className="btn btn-primary">
                Our Vision &amp; Priorities
              </Link>
              <Link href="/about/our-bishop" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Meet Our Bishop
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
