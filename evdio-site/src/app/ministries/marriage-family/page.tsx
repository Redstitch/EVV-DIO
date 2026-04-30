import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Marriage & Family Life",
  description:
    "Marriage preparation, enrichment, and family life ministry in the Diocese of Evansville. Supporting couples and families at every stage of life.",
};

export default function MarriageFamilyPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Marriage &amp; Family <em>Life.</em></h1>
            <p className="deck">Strengthening marriages and families as the foundation of the domestic church.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="St. Benedict Cathedral, Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Our Mission */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-h2">The Domestic Church</h2>
          </div>

          <div className="prose">
            <p>
              The Office of Marriage and Family Life supports couples and families across the Diocese of Evansville through every season of life. From marriage preparation to enrichment programs, from parenting resources to support during difficult times, we walk alongside families as they strive to live out their vocation in the domestic church.
            </p>
            <p>
              Marriage is a sacrament, a covenant of love that reflects Christ&rsquo;s love for the Church. Our ministry exists to help couples encounter that love more deeply, to grow together in faith, and to build a family life rooted in prayer, forgiveness, and service.
            </p>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Programs & Services */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Programs &amp; Services</span>
          <h2 className="section-h2 section-h2-left">What We Offer</h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Marriage Preparation</h3>
              <p>Required preparation for couples planning to marry in the Catholic Church, including Sponsor Couple programs, weekend retreats, and natural family planning instruction.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Marriage Enrichment</h3>
              <p>Ongoing programs for married couples, including date nights, retreats, and small group studies designed to strengthen the bond of marriage.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Natural Family Planning</h3>
              <p>Classes and support in the Creighton Model, Sympto-Thermal Method, and Marquette Method, offered at parishes and the Catholic Center.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Divorce &amp; Separation Support</h3>
              <p>Pastoral support and referrals for those experiencing the pain of divorce or separation, including annulment guidance.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Parenting Resources</h3>
              <p>Workshops, book studies, and speaker events for parents navigating the joys and challenges of raising children in the faith.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Contact & Getting Married */}
        <section className="page-content">
          <div className="interior-grid interior-grid-2">
            <div className="info-block">
              <h3>Contact Information</h3>
              <p><strong>Director:</strong> Office of Family Life</p>
              <p><strong>Phone:</strong> (812) 424-5536</p>
              <p><strong>Email:</strong> familylife@evdio.org</p>
            </div>

            <div className="cta-block">
              <h3>Getting Married?</h3>
              <p>
                Couples should contact their parish at least six months before their desired wedding date to begin the marriage preparation process.
              </p>
              <Link href="/parishes/directory" className="btn btn-primary">
                Find Your Parish
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
