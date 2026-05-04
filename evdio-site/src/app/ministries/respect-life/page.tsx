import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Respect for Life",
  description:
    "The Respect Life ministry of the Diocese of Evansville defends the dignity of every human life from conception to natural death.",
};

export default function RespectLifePage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Respect for <em>Life.</em></h1>
            <p className="deck">Defending the dignity of every human life from conception to natural death.</p>
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
            <h2 className="section-h2">A Culture of Life</h2>
          </div>

          <div className="prose">
            <p>
              The Catholic Church teaches that every human life is sacred from the moment of conception to natural death. The Respect Life Office of the Diocese of Evansville works to promote a culture of life through education, advocacy, prayer, and direct support for those in need.
            </p>
            <p>
              We address a wide range of life issues including abortion, euthanasia, the death penalty, assisted suicide, embryonic stem cell research, and human trafficking. Our approach is rooted in the conviction that every person, regardless of age, ability, or circumstances, is made in the image and likeness of God.
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

        {/* Areas of Focus */}
        <section className="page-content bg-eggshell">
          <span className="section-tag">Areas of Focus</span>
          <h2 className="section-h2">How We Serve</h2>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Education</h3>
              <p>Parish presentations, school programs, and community workshops on Catholic social teaching and the consistent ethic of life.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Prayer &amp; Witness</h3>
              <p>Rosary vigils, 40 Days for Life campaigns, participation in the annual March for Life, and parish prayer intentions for life.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Advocacy</h3>
              <p>Legislative advocacy through the Indiana Catholic Conference, voter education, and grassroots mobilization on life issues.</p>
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

        {/* Related Ministries */}
        <section className="page-content">
          <span className="section-tag">Related Ministries</span>
          <h2 className="section-h2">Support &amp; Healing</h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <Link href="/ministries/project-rachel" className="interior-card" style={{ textDecoration: "none", color: "inherit" }}>
              <h3>Healing After Abortion</h3>
              <p>Confidential support through Project Rachel for anyone affected by an abortion experience.</p>
              <p><strong>Learn More &rarr;</strong></p>
            </Link>
            <Link href="/ministries/expectant-mothers" className="interior-card" style={{ textDecoration: "none", color: "inherit" }}>
              <h3>Support for Expectant Mothers</h3>
              <p>Resources, assistance, and community for mothers facing unexpected or challenging pregnancies.</p>
              <p><strong>Learn More &rarr;</strong></p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
