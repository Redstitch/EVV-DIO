import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Official Statements & Decrees",
  description:
    "Read official statements, decrees, and pastoral letters from Bishop Siegel and the leadership of the Catholic Diocese of Evansville.",
};

const statements = [
  {
    date: "March 15, 2026",
    type: "Pastoral Letter",
    title: "A Call to Encounter: Pastoral Priorities for 2025\u20132030",
    excerpt:
      "Bishop Siegel outlines his pastoral vision of Encounter, Deepen, and Engage, calling each parish and ministry to embrace a renewed commitment to evangelization and service.",
    featured: true,
  },
  {
    date: "February 28, 2026",
    type: "Statement",
    title: "Lenten Message from Bishop Siegel",
    excerpt:
      "A reflection on the Lenten season, inviting the faithful to prayer, fasting, and almsgiving as a path to deeper conversion and renewed encounter with Christ.",
    featured: false,
  },
  {
    date: "January 15, 2026",
    type: "Decree",
    title: "Decree on Parish Pastoral Council Norms",
    excerpt:
      "Updated norms for parish pastoral councils across the diocese, strengthening lay participation in parish governance and pastoral planning.",
    featured: false,
  },
  {
    date: "December 20, 2025",
    type: "Pastoral Letter",
    title: "Christmas Message: The Light of Bethlehem in Our Midst",
    excerpt:
      "Bishop Siegel\u2019s Christmas message reflecting on the Incarnation and the call to bring the light of Christ to every corner of Southwestern Indiana.",
    featured: false,
  },
  {
    date: "November 10, 2025",
    type: "Statement",
    title: "Statement on Catholic Charities Expansion",
    excerpt:
      "Announcing the expansion of Catholic Charities services in Vanderburgh County, with new programs to serve an additional 400 families annually.",
    featured: false,
  },
  {
    date: "October 1, 2025",
    type: "Statement",
    title: "Respect Life Month: Upholding the Dignity of Every Person",
    excerpt:
      "A statement affirming the Church\u2019s commitment to the sanctity of human life from conception to natural death, with a call to action for parish communities.",
    featured: false,
  },
  {
    date: "August 15, 2025",
    type: "Decree",
    title: "Decree Establishing the Office of Synodal Life",
    excerpt:
      "In response to the universal Church\u2019s call to synodality, a new office is established to facilitate listening, discernment, and collaboration across the diocese.",
    featured: false,
  },
  {
    date: "June 1, 2025",
    type: "Pastoral Letter",
    title: "Becoming One: A Letter on Parish Community",
    excerpt:
      "A pastoral letter encouraging parishes to deepen their sense of communion, welcome newcomers, and build bridges across generations and cultures.",
    featured: false,
  },
];

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    "Pastoral Letter": "bg-blue/10 text-blue",
    Statement: "bg-gold/15 text-navy",
    Decree: "bg-accent-red/10 text-accent-red",
  };
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${colors[type] || "bg-cream text-text-medium"}`}>
      {type}
    </span>
  );
}

export default function StatementsPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Official Statements & Decrees"
        subtitle="Pastoral letters, official statements, and decrees from Bishop Siegel and diocesan leadership."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Statements & Decrees" },
        ]}
      />

      <main id="main-content">
        {/* Featured Statement */}
        {statements.filter((s) => s.featured).map((statement) => (
          <section key={statement.title} className="section-padding bg-cream">
            <div className="max-w-[900px] mx-auto">
              <div className="bg-white rounded-2xl border border-border p-8 md:p-10 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 mb-4">
                  <TypeBadge type={statement.type} />
                  <span className="text-xs text-text-light">{statement.date}</span>
                </div>
                <h2 className="font-heading text-[clamp(24px,3vw,32px)] font-bold text-navy leading-tight mb-4">
                  {statement.title}
                </h2>
                <p className="text-base text-text-medium leading-relaxed mb-6">
                  {statement.excerpt}
                </p>
                <button className="btn btn-primary text-sm">
                  Read Full Document
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        ))}

        {/* All Statements */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[900px] mx-auto">
            <div className="section-label text-left">Archive</div>
            <h2 className="section-title text-left">All Statements & Decrees</h2>

            <div className="space-y-4 mt-8">
              {statements.filter((s) => !s.featured).map((statement) => (
                <div
                  key={statement.title}
                  className="bg-cream rounded-xl p-6 border border-border hover:border-gold/30 transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <TypeBadge type={statement.type} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-text-light mb-1">{statement.date}</p>
                      <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                        {statement.title}
                      </h3>
                      <p className="text-sm text-text-medium leading-relaxed">
                        {statement.excerpt}
                      </p>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5 text-text-light group-hover:text-blue transition-colors" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Stay Informed
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              Receive official statements and pastoral letters directly in your inbox. Subscribe to diocesan communications.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/about/press-room" className="btn btn-primary">
                Visit the Press Room
              </Link>
              <Link href="/about/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Contact Communications
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
