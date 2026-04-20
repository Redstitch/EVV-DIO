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
        {/* Introduction */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Welcome Home</div>
              <h2 className="section-title">You Belong Here</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                Whether you have never been baptized, were baptized in another Christian tradition, or are a baptized Catholic who has not yet received Confirmation or First Eucharist, the Catholic Church has a place for you. In the Diocese of Evansville, over 127 people are currently journeying toward full communion with the Church through the Order of Christian Initiation of Adults (OCIA).
              </p>
            </div>
          </div>
        </section>

        {/* What is OCIA */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-label text-left">The Path</div>
                <h2 className="section-title text-left">What Is OCIA?</h2>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  The Order of Christian Initiation of Adults (formerly RCIA) is the process by which adults are prepared to receive the sacraments of Baptism, Confirmation, and Eucharist and enter into full communion with the Catholic Church.
                </p>
                <p className="text-base text-text-medium leading-relaxed mb-5">
                  OCIA is not a class you pass or fail. It is a journey of faith, guided by a parish community that supports you through prayer, teaching, and friendship. You will explore the teachings of the Church, ask questions, and discern whether God is calling you to become Catholic.
                </p>
                <p className="text-base text-text-medium leading-relaxed">
                  Most parishes in the Diocese of Evansville offer OCIA sessions beginning in the fall, with the sacraments typically celebrated at the Easter Vigil. However, you can reach out to a parish at any time of year to begin the conversation.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
                <h3 className="font-heading text-2xl font-bold text-navy mb-6">Who Is OCIA For?</h3>
                <div className="space-y-5">
                  <WhoCard
                    title="Never Been Baptized"
                    desc="You will receive all three sacraments of initiation: Baptism, Confirmation, and Eucharist."
                  />
                  <WhoCard
                    title="Baptized in Another Christian Tradition"
                    desc="Your baptism is recognized. You will be prepared for Confirmation and Eucharist to enter full communion."
                  />
                  <WhoCard
                    title="Baptized Catholic, Incomplete Sacraments"
                    desc="If you were baptized Catholic but never received First Communion or Confirmation, OCIA can help you complete your initiation."
                  />
                  <WhoCard
                    title="Returning to the Faith"
                    desc="If you have been away from the Church and want to come home, your parish community is ready to welcome you back."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Steps */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">The Journey</div>
              <h2 className="section-title">Steps Along the Way</h2>
            </div>

            <div className="space-y-0">
              <StepCard
                number="1"
                title="Inquiry"
                desc="Begin by reaching out to a parish near you. During this period, you are welcome to ask questions, attend Mass, and explore what the Catholic faith is all about. There is no commitment required."
              />
              <StepCard
                number="2"
                title="Catechumenate"
                desc="You will enter a period of learning and formation, studying Scripture, the Creed, the sacraments, and Catholic moral teaching. You will be paired with a sponsor from the parish community who will walk alongside you."
              />
              <StepCard
                number="3"
                title="Purification & Enlightenment"
                desc="During the season of Lent, you will enter a time of intense spiritual preparation. The Rite of Election is celebrated at St. Benedict Cathedral, where Bishop Siegel formally recognizes those preparing for the sacraments."
              />
              <StepCard
                number="4"
                title="Sacraments of Initiation"
                desc="At the Easter Vigil, you will receive the sacraments of Baptism (if not already baptized), Confirmation, and Eucharist. This is one of the most beautiful celebrations of the Church year."
              />
              <StepCard
                number="5"
                title="Mystagogy"
                desc="After Easter, you will continue to grow in your understanding of the sacraments and find your place in the life and mission of the parish. The journey of faith continues for a lifetime."
                last
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Ready to Begin?</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Take the First Step Today
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Contact a parish near you to learn about their OCIA program, or reach out to the diocesan Office of Worship for guidance. There is no wrong time to begin asking questions.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/parishes" className="btn btn-primary">
                Find a Parish Near You
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Contact the Diocese
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function WhoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
      <div>
        <div className="font-semibold text-navy text-[15px] mb-0.5">{title}</div>
        <div className="text-sm text-text-medium leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  desc,
  last,
}: {
  number: string;
  title: string;
  desc: string;
  last?: boolean;
}) {
  return (
    <div className={`flex gap-6 ${!last ? "pb-10" : ""}`}>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-navy text-gold font-heading font-bold text-lg flex items-center justify-center flex-shrink-0">
          {number}
        </div>
        {!last && <div className="w-px flex-1 bg-border mt-3" />}
      </div>
      <div className="pb-2">
        <h3 className="font-heading text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
