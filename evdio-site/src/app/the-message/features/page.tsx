import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Special Features",
  description:
    "In-depth feature stories from The Message. Profiles, investigations, and long-form journalism from the Catholic newspaper of the Diocese of Evansville.",
};

const articles = [
  { date: "March 25, 2026", title: "Profiles in Faith: Three Generations of Catholic Educators", excerpt: "A grandmother, mother, and daughter share their experiences teaching in diocesan schools across five decades, witnessing the evolution of Catholic education in Southwestern Indiana." },
  { date: "March 11, 2026", title: "Building the Future: Inside the Diocese's Parish Renewal Initiative", excerpt: "An in-depth look at how parishes across all four deaneries are reimagining their facilities, programs, and outreach to serve the next generation of Catholics." },
  { date: "February 25, 2026", title: "From Field to Table: Catholic Farmers Feeding Southern Indiana", excerpt: "How Catholic families working the land in Dubois and Spencer counties are living out their faith through agriculture and community food programs." },
  { date: "February 11, 2026", title: "The Monks of Saint Meinrad: A Day in the Life of the Archabbey", excerpt: "A rare behind-the-scenes look at the daily rhythm of prayer, work, and community at one of only two archabbeys in the United States." },
  { date: "January 28, 2026", title: "Walking Together: How the Synodal Process Shaped Our Diocese", excerpt: "Reflections from parish leaders on how listening sessions changed the way the diocese approaches decision-making and pastoral planning." },
  { date: "January 14, 2026", title: "Restoring Sacred Spaces: The Art of Church Renovation", excerpt: "Artists, architects, and parish communities collaborate to preserve and renew the beautiful churches that define our Catholic landscape." },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">THE MESSAGE</p>
            <h1 id="title">Special <em>Features.</em></h1>
            <p className="deck">In-depth stories, profiles, and long-form journalism from our award-winning staff.</p>
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
