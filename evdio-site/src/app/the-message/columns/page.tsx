import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Opinion & Columns",
  description:
    "Opinion columns and commentary from The Message. Perspectives from the Bishop, clergy, and Catholic voices in the Diocese of Evansville.",
};

const columns = [
  { author: "Bishop Joseph M. Siegel", column: "From the Bishop", date: "April 2, 2026", title: "Being Ambassadors of One Another", excerpt: "Reflecting on what it means to support each other as staff and parishes, and how our shared mission calls us to genuine solidarity." },
  { author: "Fr. Tyler Tenbarge", column: "Faith in Focus", date: "March 30, 2026", title: "Why the Young Church Needs Mentors, Not Programs", excerpt: "As we invest in youth ministry, the most powerful tool we have is the witness of faithful adults who walk alongside young people." },
  { author: "Deacon Mark Sullivan", column: "The Deacon's Corner", date: "March 26, 2026", title: "Service at the Margins: Lessons from the Soup Kitchen", excerpt: "What 15 years of volunteering at a parish soup kitchen taught me about dignity, humility, and the face of Christ in the poor." },
  { author: "Dr. Patricia Engelbrecht", column: "Catholic Education Today", date: "March 19, 2026", title: "Teaching the Whole Child in an Age of Anxiety", excerpt: "How Catholic schools are uniquely positioned to address the mental health crisis among young people through faith, community, and formation." },
  { author: "Sr. Joan Marie, OSB", column: "Monastic Reflections", date: "March 12, 2026", title: "The Gift of Silence in a Noisy World", excerpt: "A Benedictine sister reflects on how the practice of silence in monastic life offers wisdom for everyone seeking peace." },
  { author: "Tim Lilley", column: "Editor's Note", date: "March 5, 2026", title: "Why Local Catholic Journalism Matters More Than Ever", excerpt: "In an era of national narratives, the stories of our own parishes, schools, and neighbors deserve to be told with care and accuracy." },
];

export default function ColumnsPage() {
  return (
    <>
      <PageHero
        label="The Message"
        title="Opinion & Columns"
        subtitle="Voices and perspectives from across the Diocese of Evansville."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "The Message", href: "/the-message" },
          { label: "Opinion & Columns" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="space-y-6">
              {columns.map((c, i) => (
                <article key={i} className="bg-white rounded-xl border border-border p-7 hover:shadow-[var(--shadow-soft)] transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-navy text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {c.column}
                    </span>
                    <span className="text-xs text-text-light">{c.date}</span>
                  </div>
                  <h2 className="font-heading text-[22px] font-bold text-navy leading-tight mb-2">
                    {c.title}
                  </h2>
                  <p className="text-sm text-text-medium leading-relaxed mb-2">{c.excerpt}</p>
                  <div className="text-xs text-blue font-semibold">By {c.author}</div>
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
