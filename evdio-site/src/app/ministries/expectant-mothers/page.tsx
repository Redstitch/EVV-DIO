import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Support for Expectant Mothers",
  description:
    "Resources, assistance, and community for expectant mothers in the Diocese of Evansville. Pregnancy support, material aid, and ongoing care.",
};

export default function ExpectantMothersPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Support for Expectant <em>Mothers.</em></h1>
            <p className="deck">You are not alone. We are here to help, no matter your circumstances.</p>
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
        {/* How We Help */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">How We Help</span>
            <h2 className="section-h2">Comprehensive Support</h2>
          </div>

          <div className="prose">
            <p>
              The Diocese of Evansville, through Catholic Charities and our parish communities, provides comprehensive support for women facing unexpected or difficult pregnancies. We believe that every mother and every child deserve love, support, and care, and we are committed to walking alongside women throughout their pregnancy and beyond.
            </p>
            <p>
              Our support is offered freely and without judgment. Whether you need material assistance, emotional support, help navigating resources, or simply someone to listen, we are here for you.
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

        {/* Services */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Services</span>
          <h2 className="section-h2 section-h2-left">What We Provide</h2>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Material Assistance</h3>
              <p>Diapers, formula, clothing, car seats, cribs, and other essential baby supplies through Catholic Charities and parish baby pantries.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Counseling &amp; Support</h3>
              <p>Professional counseling, peer support, and connection with other mothers who understand what you are going through.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Housing Referrals</h3>
              <p>Referrals to safe housing options for mothers in crisis, including partnerships with local shelters and transitional housing programs.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Ongoing Care</h3>
              <p>Support does not end at birth. We connect new mothers with parenting resources, childcare assistance, and community groups.</p>
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

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Need Help Now?</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Contact Catholic Charities of the Diocese of Evansville. All services are confidential.
          </p>
          <p style={{ color: "var(--cream)", fontWeight: 700, marginTop: 16 }}>(812) 423-5456</p>
          <p style={{ color: "rgba(238,218,179,0.7)", fontSize: 14, marginTop: 4 }}>Monday&ndash;Friday, 8:30 AM &ndash; 4:30 PM</p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/ministries/respect-life" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Respect for Life <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/ministries" className="btn btn-outline" style={{ color: "var(--cream)", borderColor: "rgba(238,218,179,0.3)" }}>All Ministries</Link>
          </div>
        </section>
      </main>
    </>
  );
}
