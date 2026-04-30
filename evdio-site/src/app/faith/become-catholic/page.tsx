import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "How to Become Catholic",
  description:
    "Interested in the Catholic faith? Learn about OCIA (Order of Christian Initiation of Adults) and how to begin your journey into the Catholic Church in the Diocese of Evansville.",
};

export default function BecomeCatholic() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Becoming <em>Catholic.</em></h1>
            <p className="deck">Every journey of faith is unique. The Catholic Church welcomes you wherever you are, and we are here to walk with you every step of the way.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/holy-week-good-friday.jpg"
              alt="Good Friday observance in the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── INTRODUCTION ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Welcome Home</span>
            <h2 className="section-h2">You Belong Here</h2>
            <p className="section-desc">
              Whether you have never been baptized, were baptized in another Christian tradition, or are a baptized Catholic who has not yet received Confirmation or First Eucharist, the Catholic Church has a place for you. In the Diocese of Evansville, over 127 people are currently journeying toward full communion with the Church through the Order of Christian Initiation of Adults (OCIA).
            </p>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── WHAT IS OCIA ─── */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <span className="section-tag section-tag-left">The Path</span>
          <h2 className="section-h2 section-h2-left">What Is OCIA?</h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="prose">
              <p>
                The Order of Christian Initiation of Adults (formerly RCIA) is the process by which adults are prepared to receive the sacraments of Baptism, Confirmation, and Eucharist and enter into full communion with the Catholic Church.
              </p>
              <p>
                OCIA is not a class you pass or fail. It is a journey of faith, guided by a parish community that supports you through prayer, teaching, and friendship. You will explore the teachings of the Church, ask questions, and discern whether God is calling you to become Catholic.
              </p>
              <p>
                Most parishes in the Diocese of Evansville offer OCIA sessions beginning in the fall, with the sacraments typically celebrated at the Easter Vigil. However, you can reach out to a parish at any time of year to begin the conversation.
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Who Is OCIA For?</h3>
              <ul>
                <li><strong>Never Been Baptized</strong> &mdash; You will receive all three sacraments of initiation: Baptism, Confirmation, and Eucharist.</li>
                <li><strong>Baptized in Another Christian Tradition</strong> &mdash; Your baptism is recognized. You will be prepared for Confirmation and Eucharist to enter full communion.</li>
                <li><strong>Baptized Catholic, Incomplete Sacraments</strong> &mdash; If you were baptized Catholic but never received First Communion or Confirmation, OCIA can help you complete your initiation.</li>
                <li><strong>Returning to the Faith</strong> &mdash; If you have been away from the Church and want to come home, your parish community is ready to welcome you back.</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── JOURNEY STEPS ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">The Journey</span>
            <h2 className="section-h2">Steps Along the Way</h2>
          </div>

          <div className="steps">
            <div className="inner">
              <div className="step">
                <span className="num">1</span>
                <h3>Inquiry</h3>
                <p>Begin by reaching out to a parish near you. During this period, you are welcome to ask questions, attend Mass, and explore what the Catholic faith is all about. There is no commitment required.</p>
              </div>
              <div className="step">
                <span className="num">2</span>
                <h3>Catechumenate</h3>
                <p>You will enter a period of learning and formation, studying Scripture, the Creed, the sacraments, and Catholic moral teaching. You will be paired with a sponsor from the parish community who will walk alongside you.</p>
              </div>
              <div className="step">
                <span className="num">3</span>
                <h3>Purification &amp; Enlightenment</h3>
                <p>During the season of Lent, you will enter a time of intense spiritual preparation. The Rite of Election is celebrated at St. Benedict Cathedral, where Bishop Siegel formally recognizes those preparing for the sacraments.</p>
              </div>
              <div className="step">
                <span className="num">4</span>
                <h3>Sacraments of Initiation</h3>
                <p>At the Easter Vigil, you will receive the sacraments of Baptism (if not already baptized), Confirmation, and Eucharist. This is one of the most beautiful celebrations of the Church year.</p>
              </div>
              <div className="step">
                <span className="num">5</span>
                <h3>Mystagogy</h3>
                <p>After Easter, you will continue to grow in your understanding of the sacraments and find your place in the life and mission of the parish. The journey of faith continues for a lifetime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Take the First Step Today</h3>
            <p>
              Contact a parish near you to learn about their OCIA program, or reach out to the diocesan Office of Worship for guidance. There is no wrong time to begin asking questions.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/parishes" className="btn btn-primary">
                Find a Parish Near You
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact the Diocese
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
