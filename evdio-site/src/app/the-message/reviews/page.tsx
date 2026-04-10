import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Movie Reviews",
  description:
    "Catholic movie reviews from The Message. Faith-based perspectives on current films, ratings, and family viewing guides.",
};

const reviews = [
  { date: "April 1, 2026", title: "Risen Again", rating: "A-II (Adults & Adolescents)", grade: "B+", excerpt: "A compelling drama set in first-century Jerusalem that brings fresh perspective to the Resurrection narrative. Strong performances and respectful treatment of the source material make this a worthwhile watch for families during the Easter season." },
  { date: "March 25, 2026", title: "The Quiet Garden", rating: "A-I (General Patronage)", grade: "A", excerpt: "An animated film about a young girl who discovers a hidden monastery garden. Beautiful animation, gentle humor, and themes of patience, faith, and the beauty of creation make this an excellent choice for all ages." },
  { date: "March 18, 2026", title: "Brothers in Arms", rating: "A-III (Adults)", grade: "B", excerpt: "Based on the true story of two brothers separated during World War II, one of whom became a Catholic chaplain. Intense battle sequences are balanced by powerful scenes of faith, sacrifice, and reconciliation." },
  { date: "March 11, 2026", title: "Light in the Window", rating: "A-I (General Patronage)", grade: "A-", excerpt: "A heartwarming family drama about a small-town parish that rallies to help a refugee family. Gentle, well-acted, and unapologetically hopeful. An ideal film for parish movie nights." },
  { date: "March 4, 2026", title: "The Last Homily", rating: "A-II (Adults & Adolescents)", grade: "B+", excerpt: "A retiring pastor reflects on his 40 years of priesthood through a series of flashbacks. Thoughtful exploration of vocation, doubt, and perseverance that will resonate with anyone who has wrestled with their calling." },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        label="The Message"
        title="Movie Reviews"
        subtitle="Catholic perspectives on current films, with ratings and family viewing guides."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Message", href: "/the-message" },
          { label: "Movie Reviews" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-6 mb-8">
              <h2 className="font-heading text-lg font-bold text-navy mb-2">USCCB Film Ratings Guide</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-medium">
                <div><strong className="text-navy">A-I:</strong> General Patronage</div>
                <div><strong className="text-navy">A-II:</strong> Adults & Adolescents</div>
                <div><strong className="text-navy">A-III:</strong> Adults</div>
                <div><strong className="text-navy">O:</strong> Morally Offensive</div>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((r, i) => (
                <article key={i} className="bg-white rounded-xl border border-border p-7 hover:shadow-[var(--shadow-soft)] transition-shadow">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {r.rating}
                    </span>
                    <span className="bg-navy text-white text-sm font-bold px-3 py-0.5 rounded">
                      {r.grade}
                    </span>
                    <span className="text-xs text-text-light">{r.date}</span>
                  </div>
                  <h2 className="font-heading text-[22px] font-bold text-navy leading-tight mb-2 italic">
                    {r.title}
                  </h2>
                  <p className="text-sm text-text-medium leading-relaxed">{r.excerpt}</p>
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
