import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Diocesan News",
  description:
    "The latest news from the Diocese of Evansville. Updates from the Bishop, parish news, Catholic school updates, and ministry announcements.",
};

const articles = [
  { date: "April 4, 2026", title: "Bishop Siegel Announces Pastoral Priorities for 2026-2030", excerpt: "A renewed vision centered on encounter, formation, and engagement calls every Catholic to participate in building the future of the Church in Southwestern Indiana." },
  { date: "March 28, 2026", title: "Diocesan Pastoral Council Approves New Strategic Plan", excerpt: "After months of parish listening sessions, the council has approved a comprehensive plan addressing evangelization, youth ministry, and stewardship." },
  { date: "March 21, 2026", title: "Two Seminarians to Be Ordained Transitional Deacons", excerpt: "The diocese celebrates as two men take the next step toward priesthood, continuing a trend of growing vocations in recent years." },
  { date: "March 14, 2026", title: "Catholic Schools Week Highlights Academic Excellence", excerpt: "Enrollment across the 26 diocesan schools remains strong, with several schools reporting waiting lists for the 2026-2027 academic year." },
  { date: "March 7, 2026", title: "Annual Chrism Mass Set for April 5 at Cathedral", excerpt: "Bishop Siegel will bless the sacred oils and priests will renew their promises at the annual celebration of the priesthood." },
  { date: "February 28, 2026", title: "Catholic Ministries Appeal Reaches 67% of Goal", excerpt: "The annual appeal has raised $2.1 million so far, supporting parishes, schools, and charitable ministries across the diocese." },
  { date: "February 21, 2026", title: "Lenten Mission Series Begins Across All Four Deaneries", excerpt: "Guest speakers and parish missions offer opportunities for spiritual renewal during the penitential season." },
  { date: "February 14, 2026", title: "Diocese Launches New Online Giving Platform", excerpt: "A modern, secure giving platform makes it easier for parishioners to support their parish and the diocese." },
];

export default function DiocesanNewsPage() {
  return (
    <>
      <PageHero
        label="The Message"
        title="Diocesan News"
        subtitle="The latest updates from the Diocese of Evansville."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Message", href: "/the-message" },
          { label: "Diocesan News" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="space-y-6">
              {articles.map((a, i) => (
                <article key={i} className="bg-white rounded-xl border border-border p-7 hover:shadow-[var(--shadow-soft)] transition-shadow">
                  <div className="text-xs text-text-light mb-2">{a.date}</div>
                  <h2 className="font-heading text-[22px] font-bold text-navy leading-tight mb-2">
                    {a.title}
                  </h2>
                  <p className="text-sm text-text-medium leading-relaxed">{a.excerpt}</p>
                  <span className="text-xs text-blue font-semibold mt-3 inline-block">Read More &rarr;</span>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/the-message" className="btn btn-secondary">
                Back to The Message
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
