import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Faith & Spirituality",
  description:
    "Faith formation, spiritual reflections, prayer resources, and devotional content from The Message, the Catholic newspaper of the Diocese of Evansville.",
};

const articles = [
  { date: "March 30, 2026", title: "Preparing for Easter: A Journey Through Holy Week", excerpt: "A guide to the sacred liturgies of Palm Sunday, Holy Thursday, Good Friday, and the Easter Vigil, with reflections on their meaning for our daily lives." },
  { date: "March 23, 2026", title: "The Stations of the Cross: Walking with Christ in Our Suffering", excerpt: "How this ancient devotion continues to transform hearts and offer comfort during Lent and beyond." },
  { date: "March 16, 2026", title: "Lectio Divina: Praying with Scripture in the Benedictine Tradition", excerpt: "An introduction to this contemplative practice rooted in the monastic tradition of Saint Meinrad Archabbey." },
  { date: "March 9, 2026", title: "The Eucharist: Source and Summit of Our Faith", excerpt: "Reflections on the Real Presence and why the Mass is the center of Catholic life, continuing the Eucharistic Revival in our diocese." },
  { date: "March 2, 2026", title: "Saints Who Struggled: Finding Hope in Spiritual Dryness", excerpt: "Even the greatest saints experienced periods of doubt and dryness. What their stories teach us about perseverance in prayer." },
  { date: "February 23, 2026", title: "A Family Rosary: Praying Together in the Domestic Church", excerpt: "Practical tips for families to pray the Rosary together, with age-appropriate adaptations for young children." },
];

export default function FaithSpiritualityPage() {
  return (
    <>
      <PageHero
        label="The Message"
        title="Faith & Spirituality"
        subtitle="Reflections, resources, and inspiration to deepen your relationship with God."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Message", href: "/the-message" },
          { label: "Faith & Spirituality" },
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
