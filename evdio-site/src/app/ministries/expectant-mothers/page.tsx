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

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
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

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* CTA */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Need Help Now?</h3>
            <p>
              Contact Catholic Charities of the Diocese of Evansville. All services are confidential.
            </p>
            <p><strong>(812) 423-5456</strong></p>
            <p>Monday&ndash;Friday, 8:30 AM &ndash; 4:30 PM</p>
          </div>
        </section>

        <section className="page-content" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/ministries/respect-life" className="btn btn-secondary">
              Respect for Life
            </Link>
            <Link href="/ministries" className="btn btn-outline">
              All Ministries
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
