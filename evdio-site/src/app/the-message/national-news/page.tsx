import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "National & World News",
  description:
    "National and international Catholic news. Updates from the Vatican, USCCB, and the universal Church, curated by The Message.",
};

const articles = [
  { date: "April 3, 2026", title: "USCCB Releases New Resources for Parish Evangelization", excerpt: "A comprehensive toolkit designed to help parishes create welcoming environments and reach out to inactive Catholics and those exploring the faith." },
  { date: "March 27, 2026", title: "Vatican Announces Theme for World Youth Day 2027", excerpt: "Pope Francis has chosen 'Be Not Afraid' as the theme for the next World Youth Day gathering, to be held in Seoul, South Korea." },
  { date: "March 20, 2026", title: "Catholic Relief Services Responds to Earthquake in Central Asia", excerpt: "CRS teams are on the ground providing emergency shelter, clean water, and medical supplies to thousands of displaced families." },
  { date: "March 13, 2026", title: "U.S. Bishops Call for Renewed Commitment to Immigration Reform", excerpt: "The USCCB Committee on Migration urges Congress to pursue comprehensive reform that upholds the dignity of every human person." },
  { date: "March 6, 2026", title: "Pope Francis Canonizes Three New Saints", excerpt: "The Holy Father declared three new saints during a Mass in St. Peter's Square, including a 20th-century catechist and a foundress of a religious order." },
  { date: "February 27, 2026", title: "National Catholic Schools Report Record Enrollment Growth", excerpt: "For the third consecutive year, Catholic school enrollment in the United States has grown, driven by strong demand for faith-based education." },
];

export default function NationalNewsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">THE MESSAGE</p>
            <h1 id="title">National <em>News.</em></h1>
            <p className="deck">Catholic news from across the nation and around the world.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Interior of the cathedral"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

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
