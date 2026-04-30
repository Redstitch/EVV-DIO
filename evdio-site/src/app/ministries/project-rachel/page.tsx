import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Healing After Abortion - Project Rachel",
  description:
    "Project Rachel provides confidential support and healing for anyone affected by an abortion experience in the Diocese of Evansville.",
};

export default function ProjectRachelPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Project <em>Rachel.</em></h1>
            <p className="deck">Confidential support and God&rsquo;s mercy for all who have been affected by abortion.</p>
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
        {/* About */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">About Project Rachel</span>
            <h2 className="section-h2">A Ministry of Healing</h2>
          </div>

          <div className="prose">
            <p>
              Project Rachel is the Catholic Church&rsquo;s ministry of healing and reconciliation for those who have been involved in or affected by abortion. Named after the Old Testament figure Rachel, who wept for her lost children, this ministry offers a path of hope, mercy, and healing.
            </p>
            <p>
              If you or someone you know is carrying the pain of an abortion experience, please know that you are not alone. God&rsquo;s mercy is greater than any sin, and healing is possible. Our ministry provides a safe, confidential, and compassionate space to begin the journey toward peace.
            </p>
          </div>

          <div className="info-block" style={{ marginTop: 32 }}>
            <p style={{ fontStyle: "italic" }}>
              &ldquo;Thus says the Lord: &lsquo;Cease your cries of mourning, wipe the tears from your eyes. The sorrow you have known shall have its reward&hellip; there is hope for your future.&rsquo;&rdquo; &mdash; Jeremiah 31:16-17
            </p>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* What We Offer */}
        <section className="page-content">
          <span className="section-tag section-tag-left">What We Offer</span>
          <h2 className="section-h2 section-h2-left">Support &amp; Resources</h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Confidential Referrals</h3>
              <p>Connection to trained counselors, priests, and support groups who understand the unique dimensions of post-abortion grief.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Sacramental Healing</h3>
              <p>Access to the Sacrament of Reconciliation with a priest trained in post-abortion ministry, and spiritual direction.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Retreat Weekends</h3>
              <p>Rachel&rsquo;s Vineyard retreats provide a safe, supportive environment for women and men to process their grief and experience God&rsquo;s healing love.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Support for All Affected</h3>
              <p>Mothers, fathers, grandparents, siblings, and friends who have been touched by abortion are all welcome to seek support.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* CTA */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Reach Out Today</h3>
            <p>
              All inquiries are completely confidential. You do not need to give your name. A compassionate listener is ready to help.
            </p>
            <p><strong>(812) 424-5536</strong> or email projectrachel@evdio.org</p>
          </div>
        </section>

        <section className="page-content" style={{ textAlign: "center" }}>
          <Link href="/ministries/respect-life" className="btn btn-secondary">
            Respect for Life Ministry
          </Link>
        </section>
      </main>
    </>
  );
}
