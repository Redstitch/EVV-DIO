import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "First Communion",
  description:
    "Prepare your child for First Holy Communion in the Diocese of Evansville. Learn about requirements, preparation, and the meaning of the Eucharist.",
};

export default function FirstCommunion() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">First <em>Communion.</em></h1>
            <p className="deck">The Eucharist is the source and summit of the Christian life. First Holy Communion marks a child&#8217;s first reception of the Body and Blood of Christ.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/confirmation-stmary.jpg"
              alt="Young Catholics celebrating a sacrament at St. Mary Parish, Ireland, Indiana."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── INTRO ─── */}
        <section className="intro">
          <div className="inner">
            <p className="pull">
              The most important sacrament of the Catholic Church &mdash; in the breaking of bread, we truly receive the Body and Blood of <em>Jesus Christ.</em>
            </p>
            <div className="body">
              <p>
                First Holy Communion is a milestone in a child&rsquo;s faith journey, marking the beginning of a lifelong relationship with Christ in the Eucharist. In the Diocese of Evansville, children typically receive First Holy Communion in second grade, around age seven or eight.
              </p>
              <p>
                Preparation usually takes place through the parish religious education program or Catholic school. Before receiving First Communion, a child must also celebrate the Sacrament of Reconciliation (First Confession) for the first time, usually in the weeks leading up to First Communion.
              </p>
              <p>
                Parents play an essential role in this preparation. Your parish will provide resources and guidance to help you talk with your child about the Eucharist and deepen your family&rsquo;s faith together. First Communion is a grace-filled time for the whole family.
              </p>
            </div>
          </div>
        </section>

        {/* ─── WHAT YOUR CHILD WILL LEARN ─── */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Preparation</span>
          <h2 className="section-h2 section-h2-left">What Your Child Will Learn</h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card">
              <h3>The Real Presence</h3>
              <p>That the bread and wine truly become the Body and Blood of Jesus Christ.</p>
            </div>
            <div className="interior-card">
              <h3>The Mass</h3>
              <p>The meaning and flow of the Mass, and how to participate reverently.</p>
            </div>
            <div className="interior-card">
              <h3>Reconciliation</h3>
              <p>How to examine their conscience and receive God&rsquo;s forgiveness in Confession.</p>
            </div>
            <div className="interior-card">
              <h3>Living the Eucharist</h3>
              <p>How receiving Communion connects them to Jesus and to the community of believers.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── REQUIREMENTS ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Requirements</span>
            <h2 className="section-h2">What You Need to Know</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            <div className="interior-card">
              <h3>Age &amp; Grade</h3>
              <p>Children are typically prepared in second grade. Older children or adults who have not received First Communion should contact their parish.</p>
            </div>
            <div className="interior-card">
              <h3>Baptism Required</h3>
              <p>A child must be baptized before receiving First Communion. If your child has not been baptized, contact your parish about preparation.</p>
            </div>
            <div className="interior-card">
              <h3>First Confession</h3>
              <p>Children must celebrate the Sacrament of Reconciliation before receiving First Communion, typically in the weeks prior.</p>
            </div>
            <div className="interior-card">
              <h3>Regular Mass Attendance</h3>
              <p>Families are expected to attend Sunday Mass regularly as part of the preparation process and ongoing faith life.</p>
            </div>
            <div className="interior-card">
              <h3>Preparation Program</h3>
              <p>Complete the parish&rsquo;s required sacramental preparation program, whether through religious education or Catholic school.</p>
            </div>
            <div className="interior-card">
              <h3>Parish Registration</h3>
              <p>Families should be registered members of a parish in the Diocese of Evansville.</p>
            </div>
          </div>
        </section>

        {/* ─── SCRIPTURE ─── */}
        <section className="scripture" aria-label="Scripture">
          <blockquote>
            &ldquo;I am the living bread that came down from heaven; whoever eats this bread will live forever; and the bread that I will give is my flesh for the life of the <em>world.</em>&rdquo;
            <cite>John 6:51</cite>
          </blockquote>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section className="cta-strip">
          <div className="flourish" aria-hidden="true" style={{ padding: "0 0 32px" }}>
            <span className="line" />
            <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
              <rect x="6" y="0" width="2" height="18" />
              <rect x="2" y="5" width="10" height="2" />
            </svg>
            <span className="line" />
          </div>
          <p className="kicker">Next</p>
          <h2>
            Find a parish &mdash; <em>walk with your child.</em>
          </h2>
          <Link href="/parishes" className="btn btn-primary">
            Find your parish <span className="arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </section>
      </main>
    </>
  );
}
