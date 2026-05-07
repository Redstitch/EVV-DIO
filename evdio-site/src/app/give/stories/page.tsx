import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stories of Impact",
  description:
    "Read testimonials from families, students, and ministry recipients whose lives have been changed by generous giving to the Diocese of Evansville.",
};

export default function StoriesOfImpact() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Stewardship</p>
            <h1 id="title">Stories of <em>Impact.</em></h1>
            <p className="deck">Real people. Real lives changed. Hear from the families, students, and neighbors whose lives have been transformed by your generosity.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/habitat-build-action.jpg"
              alt="Volunteers and community members working together in service."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── INTRO ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Voices of Gratitude</span>
            <h2 className="section-h2">Lives Changed by Your Giving</h2>
            <p className="section-desc">
              Behind every dollar given to the Diocese of Evansville is a person whose life is made better. These stories represent just a few of the thousands touched each year by the generosity of faithful stewards like you.
            </p>
          </div>
        </section>

        {/* ─── CROSS FLOURISH ─── */}
        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── TESTIMONIALS (on eggshell) ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-h2">In Their Own <em>Words</em></h2>
          </div>

          <div className="interior-grid interior-grid-2">
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>A Family Finds Hope Through Catholic Charities</h3>
              <p>
                &ldquo;When my husband lost his job, we didn&rsquo;t know where to turn. Catholic Charities helped us with rent, groceries, and counseling during the hardest months of our lives. They didn&rsquo;t just give us resources &mdash; they gave us dignity. We felt seen and loved, and that made all the difference.&rdquo;
              </p>
              <p style={{ marginTop: 16, fontStyle: "italic", color: "var(--navy-70)" }}>
                &mdash; Maria, mother of three, Vanderburgh County
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>A Scholarship Opens Doors</h3>
              <p>
                &ldquo;I never thought I&rsquo;d be able to attend a Catholic high school. The tuition assistance I received through the diocese changed the trajectory of my life. My teachers saw potential in me that I didn&rsquo;t see in myself. Now I&rsquo;m the first person in my family to go to college.&rdquo;
              </p>
              <p style={{ marginTop: 16, fontStyle: "italic", color: "var(--navy-70)" }}>
                &mdash; James, Mater Dei High School graduate
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>A Seminarian Answers the Call</h3>
              <p>
                &ldquo;I felt called to the priesthood in high school, but I worried about the cost of seminary. When I learned the diocese would support my formation, a weight was lifted. The people of this diocese are investing in my vocation, and I carry their prayers with me every day. I can&rsquo;t wait to serve them as a priest.&rdquo;
              </p>
              <p style={{ marginTop: 16, fontStyle: "italic", color: "var(--navy-70)" }}>
                &mdash; Andrew, fourth-year seminarian
              </p>
            </div>

            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>A Parish Renewed</h3>
              <p>
                &ldquo;Our small rural parish was struggling. We couldn&rsquo;t afford repairs to our church or fund youth programs. With support from the diocese, we renovated our worship space and launched a vibrant youth ministry. Families are coming back. There&rsquo;s a real sense of hope and new life here.&rdquo;
              </p>
              <p style={{ marginTop: 16, fontStyle: "italic", color: "var(--navy-70)" }}>
                &mdash; Fr. Michael, pastor in Dubois County
              </p>
            </div>
          </div>
        </section>

        {/* ─── QUATREFOIL FLOURISH ─── */}
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

        {/* ─── SHARE YOUR STORY (on white) ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Your Story Matters</span>
            <h2 className="section-h2">Share Your Experience</h2>
            <p className="section-desc">
              Has your life been touched by the generosity of the Diocese of Evansville? Whether through a Catholic school education, a Catholic Charities program, parish ministry, or any other diocesan outreach, we would love to hear from you. Your story can inspire others to give and strengthen the community of faith.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>
            Be part of the <em style={{ color: "var(--bgold)" }}>next story.</em>
          </h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Your gift today writes the next chapter. Help more families, students, and neighbors experience the transforming power of Catholic generosity.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/give/appeal" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>
              Give to the Bishop&rsquo;s Appeal <span className="arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
