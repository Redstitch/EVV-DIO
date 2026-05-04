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
        {/* ─── INTRODUCTION ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Sacred Music</span>
            <h2 className="section-h2">Singing Is Praying Twice</h2>
            <p className="section-desc">
              The Second Vatican Council taught that sacred music is &ldquo;a necessary and integral part of the solemn liturgy.&rdquo; Music in the Mass is not a performance but a form of prayer that lifts the hearts of the assembly to God. The Diocese of Evansville is committed to supporting parish musicians in this vital ministry.
            </p>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;He who sings prays twice.&rdquo;
            <cite>Attributed to St. Augustine</cite>
          </blockquote>
        </section>

        {/* ─── RESOURCES GRID ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">For Parish Musicians</span>
            <h2 className="section-h2">Resources &amp; Guidelines</h2>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Liturgical Music Guidelines</h3>
              <p>Diocesan guidelines for selecting music for Mass, including principles for choosing hymns that are liturgically appropriate, theologically sound, and pastorally effective.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Music for the Liturgical Seasons</h3>
              <p>Suggested hymns and psalm settings organized by liturgical season &mdash; Advent, Christmas, Lent, Easter, and Ordinary Time &mdash; to help with long-range planning.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Sacramental Music</h3>
              <p>Guidelines and suggestions for music at weddings, funerals, baptisms, and other sacramental celebrations. Includes approved hymn lists and information on what is and is not permitted.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Cantor Formation</h3>
              <p>Resources and training opportunities for cantors, including vocal technique, microphone use, psalm proclamation, and leading the assembly in song.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Choir Development</h3>
              <p>Guidance for building and sustaining parish choirs, including recruitment, rehearsal planning, repertoire selection, and fostering a spirit of prayer in your choir.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Copyright &amp; Licensing</h3>
              <p>Information on music copyright compliance, licensing through OneLicense and CCLI, and how to properly credit music in worship aids and projections.</p>
            </div>
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── ROLES ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Music Ministers</span>
            <h2 className="section-h2">Roles in Liturgical Music</h2>
          </div>

          <div className="interior-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default", textAlign: "center" }}>
              <h3>Music Director</h3>
              <p>Oversees the entire music ministry of the parish, selects repertoire, coordinates musicians, and ensures that music serves the liturgy.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default", textAlign: "center" }}>
              <h3>Cantor</h3>
              <p>Leads the assembly in singing, proclaims the Responsorial Psalm, and helps the congregation participate fully in the sung prayer of the Mass.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default", textAlign: "center" }}>
              <h3>Organist / Pianist</h3>
              <p>Provides instrumental accompaniment for the liturgy. The pipe organ holds a special place of honor in Catholic worship as the traditional instrument of the Church.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default", textAlign: "center" }}>
              <h3>Choir Members</h3>
              <p>Enhance the liturgy through choral music, support congregational singing, and offer musical prayer on behalf of the assembly.</p>
            </div>
          </div>
        </section>

        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" /><circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" /><circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* ─── TRAINING ─── */}
        <section className="page-content bg-eggshell">
          <div className="interior-grid interior-grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="section-tag">Formation &amp; Training</span>
              <h2 className="section-h2">Growing as a Music Minister</h2>
              <p style={{ marginTop: 16 }}>
                The Diocese of Evansville offers periodic workshops and training sessions for parish musicians. These events cover topics such as liturgical music selection, vocal technique, keyboard skills, leading ensembles, and understanding the role of music in the Mass.
              </p>
              <p style={{ marginTop: 16 }}>
                We also encourage parish musicians to take advantage of national conferences and resources from organizations such as the National Association of Pastoral Musicians (NPM) and the diocesan Office of Worship.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Upcoming Opportunities</h3>
              <ul>
                <li><strong>Cantor Workshop</strong> &mdash; A half-day workshop on psalm proclamation, vocal technique, and liturgical presence.</li>
                <li><strong>Music Director Networking</strong> &mdash; Quarterly gatherings for parish music directors to share resources, discuss challenges, and pray together.</li>
                <li><strong>Summer Choral Festival</strong> &mdash; An annual event bringing together parish choirs from across the diocese for a day of rehearsal and a combined choral concert.</li>
                <li><strong>Organ Masterclass</strong> &mdash; Instruction and practice sessions for parish organists, covering repertoire, technique, and liturgical improvisation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Questions About Parish Music?
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the diocesan Office of Worship for guidance on liturgical music, copyright questions, or to learn about upcoming training events.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
            <Link href="/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact the Office of Worship <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/faith/calendar" className="btn btn-outline">
              View Church Calendar
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
