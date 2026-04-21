import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Local & Regional News",
  description:
    "Local and regional Catholic news from Southwestern Indiana. Community stories, parish events, and regional updates from The Message.",
};

const articles = [
  { date: "April 2, 2026", title: "Catholic Charities Expands Family Services to Warrick County", excerpt: "A new satellite office in Newburgh will serve an additional 400 families annually with counseling, emergency assistance, and job training." },
  { date: "March 29, 2026", title: "Jasper Parish Celebrates 175th Anniversary", excerpt: "St. Joseph Parish in Jasper marks a century and three-quarters of faith, community, and service in the heart of Dubois County." },
  { date: "March 22, 2026", title: "Holy Rosary Food Pantry Serves Record Number of Families", excerpt: "Volunteers distributed food to over 800 families in February, the highest monthly total in the pantry's 30-year history." },
  { date: "March 15, 2026", title: "Mater Dei High School Students Win Regional STEM Competition", excerpt: "A team of juniors took first place in the regional Science Olympiad, advancing to the state competition in Indianapolis." },
  { date: "March 8, 2026", title: "Knights of Columbus Donate New Playground to Evansville Parish School", excerpt: "Council 565 raised $45,000 for new playground equipment at Corpus Christi School, benefiting 320 students." },
  { date: "March 1, 2026", title: "Vincennes Parish Restores Historic Stained Glass Windows", excerpt: "The 19th-century windows at Sacred Heart Church have been carefully restored to their original beauty after a two-year project." },
];

export default function LocalNewsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">THE MESSAGE</p>
            <h1 id="title">Local <em>News.</em></h1>
            <p className="deck">Stories from parishes, schools, and communities across Southwestern Indiana.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community service in the Diocese of Evansville"
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
