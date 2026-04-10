import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Confirmation",
  description:
    "Learn about the Sacrament of Confirmation in the Diocese of Evansville. Preparation for teens and adults, choosing a sponsor, and what to expect.",
};

export default function Confirmation() {
  return (
    <>
      <PageHero
        label="Faith & Sacraments"
        title="Confirmation"
        subtitle="Through Confirmation, the baptized are more perfectly bound to the Church and enriched with a special strength of the Holy Spirit."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faith & Sacraments", href: "/faith" },
          { label: "Confirmation" },
        ]}
      />

      <main id="main-content">
        {/* Teaching */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Sealed with the Spirit</div>
              <h2 className="section-title">Strengthened for Mission</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Confirmation completes the grace of Baptism. Through the anointing with Sacred Chrism and the laying on of hands by the bishop, the Holy Spirit strengthens us to spread and defend the faith by word and action, to confess the name of Christ boldly, and never to be ashamed of the Cross.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-border">
              <p className="font-heading text-xl italic text-navy text-center leading-relaxed">
                &ldquo;But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.&rdquo;
              </p>
              <p className="text-center text-sm text-text-light mt-3">&mdash; Acts 1:8</p>
            </div>
          </div>
        </section>

        {/* Gifts of the Spirit */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">The Seven Gifts</div>
              <h2 className="section-title">Gifts of the Holy Spirit</h2>
              <p className="section-subtitle mx-auto">
                In Confirmation, the Holy Spirit bestows seven gifts that empower us to live as faithful disciples of Christ.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {["Wisdom", "Understanding", "Counsel", "Fortitude", "Knowledge", "Piety", "Fear of the Lord"].map(
                (gift) => (
                  <div
                    key={gift}
                    className="bg-white rounded-xl p-5 text-center border border-border shadow-[var(--shadow-soft)]"
                  >
                    <div className="font-heading text-lg font-bold text-navy">{gift}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Preparation */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Teens */}
              <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                <div className="inline-block bg-navy text-gold text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                  Teens
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Teen Confirmation</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-5">
                  In the Diocese of Evansville, teens typically receive Confirmation during high school. Preparation programs vary by parish but generally span one to two years and include catechesis, service projects, retreats, and spiritual mentoring.
                </p>
                <ul className="space-y-2.5 text-sm text-text-medium">
                  <ListItem text="Participate in your parish's Confirmation preparation program." />
                  <ListItem text="Choose a Confirmation sponsor who is a confirmed, practicing Catholic." />
                  <ListItem text="Select a Confirmation name — a saint whose life inspires you." />
                  <ListItem text="Complete required service hours as an expression of faith in action." />
                  <ListItem text="Attend a Confirmation retreat for spiritual preparation." />
                </ul>
              </div>

              {/* Adults */}
              <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                <div className="inline-block bg-accent-red text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                  Adults
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Adult Confirmation</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-5">
                  If you are an adult who was baptized Catholic but never received Confirmation, it is never too late. Many parishes offer adult Confirmation preparation, often in conjunction with the OCIA process or as a separate program.
                </p>
                <ul className="space-y-2.5 text-sm text-text-medium">
                  <ListItem text="Contact your parish to learn about adult Confirmation preparation." />
                  <ListItem text="Gather a copy of your baptismal certificate from the parish where you were baptized." />
                  <ListItem text="Adult Confirmation is often celebrated by the bishop at a special liturgy." />
                  <ListItem text="Preparation may be brief if you are already active in your faith life." />
                </ul>
                <div className="mt-6">
                  <Link
                    href="/faith/become-catholic"
                    className="text-sm font-semibold text-blue hover:text-navy transition-colors inline-flex items-center gap-1.5"
                  >
                    Learn about OCIA for adults
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor Info */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Choosing a Sponsor</div>
              <h2 className="section-title">Your Confirmation Sponsor</h2>
            </div>
            <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
              <p className="text-base text-text-medium leading-relaxed mb-5">
                A Confirmation sponsor serves as a spiritual guide and role model. They stand with the candidate during the sacrament and commit to helping them live out their Catholic faith. Ideally, one of the candidate&rsquo;s baptismal godparents serves as the Confirmation sponsor, but another qualified person may be chosen.
              </p>
              <h4 className="font-semibold text-navy text-sm mb-3">A sponsor must:</h4>
              <ul className="space-y-2 text-sm text-text-medium">
                <ListItem text="Be at least 16 years old and have received Baptism, Confirmation, and Eucharist." />
                <ListItem text="Be a practicing Catholic who attends Mass regularly." />
                <ListItem text="Not be the candidate's parent." />
                <ListItem text="Be willing to support the candidate's spiritual growth." />
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Begin Your Confirmation Journey
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Contact your parish to learn about Confirmation preparation programs. Bishop Siegel celebrates Confirmation at parishes across all four deaneries of the diocese each year.
            </p>
            <Link href="/parishes" className="btn btn-primary">
              Find Your Parish
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}
