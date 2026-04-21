import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Music Resources for Parishes",
  description:
    "Music resources for parish musicians, choir directors, and cantors in the Diocese of Evansville. Guidelines, training opportunities, and liturgical music planning tools.",
};

export default function Music() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Liturgical <em>Music.</em></h1>
            <p className="deck">Sacred music is an integral part of Catholic worship. These resources support parish musicians in their ministry of leading the faithful in song.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="St. Benedict Cathedral interior."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Introduction */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Sacred Music</div>
              <h2 className="section-title">Singing Is Praying Twice</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Second Vatican Council taught that sacred music is &ldquo;a necessary and integral part of the solemn liturgy.&rdquo; Music in the Mass is not a performance but a form of prayer that lifts the hearts of the assembly to God. The Diocese of Evansville is committed to supporting parish musicians in this vital ministry.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-border">
              <p className="font-heading text-xl italic text-navy text-center leading-relaxed">
                &ldquo;He who sings prays twice.&rdquo;
              </p>
              <p className="text-center text-sm text-text-light mt-3">&mdash; Attributed to St. Augustine</p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">For Parish Musicians</div>
              <h2 className="section-title">Resources & Guidelines</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Liturgical Music Guidelines"
                desc="Diocesan guidelines for selecting music for Mass, including principles for choosing hymns that are liturgically appropriate, theologically sound, and pastorally effective."
              />
              <ResourceCard
                title="Music for the Liturgical Seasons"
                desc="Suggested hymns and psalm settings organized by liturgical season — Advent, Christmas, Lent, Easter, and Ordinary Time — to help with long-range planning."
              />
              <ResourceCard
                title="Sacramental Music"
                desc="Guidelines and suggestions for music at weddings, funerals, baptisms, and other sacramental celebrations. Includes approved hymn lists and information on what is and is not permitted."
              />
              <ResourceCard
                title="Cantor Formation"
                desc="Resources and training opportunities for cantors, including vocal technique, microphone use, psalm proclamation, and leading the assembly in song."
              />
              <ResourceCard
                title="Choir Development"
                desc="Guidance for building and sustaining parish choirs, including recruitment, rehearsal planning, repertoire selection, and fostering a spirit of prayer in your choir."
              />
              <ResourceCard
                title="Copyright & Licensing"
                desc="Information on music copyright compliance, licensing through OneLicense and CCLI, and how to properly credit music in worship aids and projections."
              />
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Music Ministers</div>
              <h2 className="section-title">Roles in Liturgical Music</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <RoleCard
                title="Music Director"
                desc="Oversees the entire music ministry of the parish, selects repertoire, coordinates musicians, and ensures that music serves the liturgy."
              />
              <RoleCard
                title="Cantor"
                desc="Leads the assembly in singing, proclaims the Responsorial Psalm, and helps the congregation participate fully in the sung prayer of the Mass."
              />
              <RoleCard
                title="Organist/Pianist"
                desc="Provides instrumental accompaniment for the liturgy. The pipe organ holds a special place of honor in Catholic worship as the traditional instrument of the Church."
              />
              <RoleCard
                title="Choir Members"
                desc="Enhance the liturgy through choral music, support congregational singing, and offer musical prayer on behalf of the assembly."
              />
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">Formation & Training</div>
                <h2 className="section-title text-left">Growing as a Music Minister</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  The Diocese of Evansville offers periodic workshops and training sessions for parish musicians. These events cover topics such as liturgical music selection, vocal technique, keyboard skills, leading ensembles, and understanding the role of music in the Mass.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  We also encourage parish musicians to take advantage of national conferences and resources from organizations such as the National Association of Pastoral Musicians (NPM) and the diocesan Office of Worship.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                <h3 className="font-heading text-xl font-bold text-navy mb-5">Upcoming Opportunities</h3>
                <div className="space-y-4">
                  <EventItem
                    title="Cantor Workshop"
                    desc="A half-day workshop on psalm proclamation, vocal technique, and liturgical presence."
                  />
                  <EventItem
                    title="Music Director Networking"
                    desc="Quarterly gatherings for parish music directors to share resources, discuss challenges, and pray together."
                  />
                  <EventItem
                    title="Summer Choral Festival"
                    desc="An annual event bringing together parish choirs from across the diocese for a day of rehearsal and a combined choral concert."
                  />
                  <EventItem
                    title="Organ Masterclass"
                    desc="Instruction and practice sessions for parish organists, covering repertoire, technique, and liturgical improvisation."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Questions About Parish Music?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Contact the diocesan Office of Worship for guidance on liturgical music, copyright questions, or to learn about upcoming training events.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/contact" className="btn btn-primary">
                Contact the Office of Worship
              </Link>
              <Link href="/faith/calendar" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                View Church Calendar
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ResourceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function RoleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border text-center">
      <h3 className="font-heading text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function EventItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 pb-4 border-b border-border last:border-b-0 last:pb-0">
      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
      <div>
        <div className="font-semibold text-navy text-[15px] mb-0.5">{title}</div>
        <div className="text-sm text-text-medium leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}
