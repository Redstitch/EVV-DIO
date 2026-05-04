import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Disability & Inclusion Ministry | Diocese of Evansville",
  description:
    "The Disability & Inclusion Ministry ensures that people of all abilities can fully participate in the sacramental and community life of the Diocese of Evansville.",
};

export default function DisabilityPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Disability &amp; <em>Inclusion.</em></h1>
            <p className="deck">Every person, regardless of ability, belongs at the table of the Lord.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/community-service.jpg"
              alt="Community service"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Mission */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2">Full Participation for All</h2>
          </div>

          <div className="prose">
            <p>
              The Disability and Inclusion Ministry of the Diocese of Evansville works to ensure that individuals with physical, intellectual, sensory, and developmental disabilities can fully participate in the sacramental, educational, and social life of the Church. Every person is created in the image of God, and every person has a place in the Body of Christ.
            </p>
          </div>

          <div className="info-block" style={{ marginTop: 32, textAlign: "center" }}>
            <blockquote style={{ fontStyle: "italic", marginBottom: 8 }}>
              &ldquo;The Church must be a place of mercy freely given, where everyone can feel welcomed, loved, forgiven, and encouraged to live the good life of the Gospel.&rdquo;
            </blockquote>
            <p><strong>&mdash; Pope Francis, Evangelii Gaudium</strong></p>
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

        {/* Areas of Focus */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Areas of Focus</span>
            <h2 className="section-h2">How We Serve</h2>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Accessibility Assessments</h3>
              <p>We help parishes evaluate their physical spaces, liturgical practices, and communications for accessibility. From wheelchair ramps and accessible restrooms to large-print missalettes and hearing loops, we identify barriers and recommend solutions.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Sacramental Inclusion</h3>
              <p>Every baptized person has a right to the sacraments. We work with pastors and parish staffs to ensure that individuals with disabilities can prepare for and receive all sacraments, with accommodations as needed.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Adapted Faith Formation</h3>
              <p>Through the SPRED program and other resources, we provide adapted religious education for individuals with intellectual and developmental disabilities. Materials and methods are tailored to individual learning needs.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Parish Awareness Training</h3>
              <p>Workshops and resources for parish leaders, ushers, catechists, and volunteers on welcoming and including people with disabilities. Training covers disability etiquette, communication strategies, and practical accommodations.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Mental Health Ministry</h3>
              <p>Support for individuals and families affected by mental health conditions. We provide referrals to Catholic counselors, promote mental health awareness within parishes, and work to reduce stigma surrounding mental illness.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Advocacy &amp; Resource Connection</h3>
              <p>Connecting individuals and families with community resources, support groups, respite care, and government services. We serve as advocates for the disability community within the diocese and in the broader community.</p>
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

        {/* Resources for Parishes */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2">
            <div>
              <span className="section-tag section-tag-left">For Parishes</span>
              <h2 className="section-h2 section-h2-left">Creating Inclusive Communities</h2>
              <div className="prose" style={{ marginTop: 16 }}>
                <p>
                  Every parish in the Diocese of Evansville is called to be a welcoming community where people of all abilities feel they belong. Inclusion is not a program; it is an attitude and a practice that permeates everything we do.
                </p>
                <p>
                  The Disability and Inclusion Ministry provides parishes with checklists, toolkits, and one-on-one consulting to assess and improve their inclusivity. We are available to visit parishes, meet with pastoral councils, and train staff and volunteers.
                </p>
              </div>
            </div>

            <div className="info-block">
              <h3>Inclusion Checklist</h3>
              <ul>
                <li>Accessible entrances, restrooms, and gathering spaces</li>
                <li>Hearing assistance systems (hearing loop or FM)</li>
                <li>Large-print bulletins and missalettes</li>
                <li>Reserved accessible seating in the assembly</li>
                <li>Trained greeters and ushers aware of disability needs</li>
                <li>Sensory-friendly Mass or quiet space available</li>
                <li>Adapted religious education options</li>
                <li>Parish website and communications accessible</li>
                <li>Designated inclusion coordinator or committee</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Everyone Belongs</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact the Disability and Inclusion Ministry to request a parish assessment, training, or resources.
          </p>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "12px auto 0" }}><strong>(812) 424-5536 | inclusion@evdio.org</strong></p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/ministries/spred" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>SPRED Program <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/ministries" className="btn btn-outline" style={{ borderColor: "rgba(238,218,179,0.3)", color: "var(--cream)" }}>All Ministries <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
