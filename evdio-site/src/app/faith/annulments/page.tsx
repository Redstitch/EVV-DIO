import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Annulments | Diocese of Evansville",
  description:
    "Learn about the Catholic annulment process (declaration of nullity) in the Diocese of Evansville. A pastoral, confidential process for examining the validity of a marriage bond.",
};

export default function AnnulmentsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title"><em>Annulments.</em></h1>
            <p className="deck">
              The Church&rsquo;s process for examining whether a valid
              sacramental marriage bond was established &mdash; a path toward
              healing, clarity, and peace.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/confessional.jpg"
              alt="Interior of St. Benedict Cathedral, Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Understanding Annulments */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Understanding Annulments</span>
            <h2 className="section-h2">A Declaration of Nullity</h2>
          </div>

          <div className="prose">
            <p>
              An annulment &mdash; formally called a <strong>declaration of
              nullity</strong> &mdash; is not a Catholic divorce. A civil
              divorce ends a legal contract. An annulment is something
              altogether different: it is the Church&rsquo;s careful,
              prayerful determination that one or more essential elements
              required for a valid sacramental marriage were absent from the
              beginning. In other words, the tribunal examines whether a true
              marriage bond was ever formed in the eyes of God and the Church.
            </p>
            <p>
              An annulment does not deny that a real relationship existed. It
              does not erase the years shared together or call into question
              the legitimacy of children born of that union. Children of an
              annulled marriage remain fully legitimate in every sense &mdash;
              civil, moral, and canonical. What an annulment does is offer a
              declaration about the sacramental nature of the bond itself.
            </p>
            <p>
              Many people who have experienced the pain of a failed marriage
              wonder whether they still have a place in the Church. The answer
              is an unequivocal <strong>yes</strong>. Catholics who are
              divorced are not excommunicated and are always welcome to
              participate fully in the life of the Church. If you wish to
              marry again in the Catholic Church, however, the annulment
              process is the path the Church provides.
            </p>
            <p>
              Anyone who has been through a civil divorce &mdash; Catholic or
              non-Catholic &mdash; may petition for a declaration of nullity.
              The process is pastoral, confidential, and handled with great
              care and compassion by the diocesan Tribunal.
            </p>
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

        {/* The Process */}
        <section className="page-content bg-eggshell">
          <span className="section-tag">The Process</span>
          <h2 className="section-h2">Steps Toward a Declaration</h2>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card">
              <h3>Initial Consultation</h3>
              <p>
                The process begins with a conversation &mdash; usually with
                your parish priest, deacon, or a trained advocate. This meeting
                is informal and confidential. You will share the story of your
                marriage and learn whether there may be grounds for a formal
                case. There is no obligation to proceed, and no judgment is
                made at this stage. The goal is simply to listen, answer your
                questions, and help you understand your options.
              </p>
            </div>

            <div className="interior-card">
              <h3>Formal Petition</h3>
              <p>
                If you choose to move forward, you will complete a written
                petition that describes the circumstances of your marriage.
                Your advocate will help you prepare this document, which
                includes a personal narrative, the names of witnesses who knew
                you and your former spouse, and relevant background
                information. The petition is submitted to the diocesan
                Tribunal, and your former spouse is notified and given the
                opportunity to participate.
              </p>
            </div>

            <div className="interior-card">
              <h3>Tribunal Review</h3>
              <p>
                The Tribunal &mdash; a team of trained canon lawyers, judges,
                and staff &mdash; carefully reviews the testimony from both
                parties and their witnesses. The investigation seeks to
                determine whether one or more of the essential elements of a
                valid marriage (such as proper intention, freedom from
                coercion, psychological capacity, or openness to children)
                were lacking at the time of the wedding. This review is
                thorough, fair, and confidential.
              </p>
            </div>

            <div className="interior-card">
              <h3>Decision</h3>
              <p>
                After the review is complete, the Tribunal issues a decision.
                If a declaration of nullity is granted, both parties are free
                to marry in the Catholic Church. If the petition is not
                granted, the decision is explained and there may be an option
                to appeal to a higher tribunal. The entire process typically
                takes several months to a year, though timelines vary
                depending on the complexity of the case and the availability
                of witnesses.
              </p>
            </div>
          </div>
        </section>

        {/* Info Block */}
        <div className="page-content">
          <div className="info-block">
            <h3>A Process Meant to Heal</h3>
            <p>
              The annulment process can feel daunting, but it is not meant to
              be adversarial or punitive. The Church approaches each case with
              pastoral sensitivity, recognizing the deep pain that often
              accompanies the end of a marriage. Many who have been through the
              process describe it as an experience of healing &mdash; a chance
              to reflect honestly on what happened, to find closure, and to
              move forward with greater clarity and peace. The Tribunal staff
              of the Diocese of Evansville is committed to walking with you
              through every step with compassion and respect for your dignity.
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Ready to Learn More?
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            If you are considering seeking an annulment, the first step is a
            confidential conversation. Reach out to your parish priest or
            contact the diocesan Tribunal office directly. There is no cost
            for an initial consultation, and no obligation to proceed.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/about/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Contact the Diocese <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
