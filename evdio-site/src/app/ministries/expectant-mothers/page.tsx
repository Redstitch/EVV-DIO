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
        <section className="section-padding bg-cream">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">How We Help</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                The Diocese of Evansville, through Catholic Charities and our parish communities, provides comprehensive support for women facing unexpected or difficult pregnancies. We believe that every mother and every child deserve love, support, and care, and we are committed to walking alongside women throughout their pregnancy and beyond.
              </p>
              <p className="text-text-medium leading-relaxed">
                Our support is offered freely and without judgment. Whether you need material assistance, emotional support, help navigating resources, or simply someone to listen, we are here for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Material Assistance</h3>
                <p className="text-sm text-text-medium leading-relaxed">Diapers, formula, clothing, car seats, cribs, and other essential baby supplies through Catholic Charities and parish baby pantries.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Counseling & Support</h3>
                <p className="text-sm text-text-medium leading-relaxed">Professional counseling, peer support, and connection with other mothers who understand what you are going through.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Housing Referrals</h3>
                <p className="text-sm text-text-medium leading-relaxed">Referrals to safe housing options for mothers in crisis, including partnerships with local shelters and transitional housing programs.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Ongoing Care</h3>
                <p className="text-sm text-text-medium leading-relaxed">Support does not end at birth. We connect new mothers with parenting resources, childcare assistance, and community groups.</p>
              </div>
            </div>

            <div className="bg-gold/10 rounded-xl border border-gold/20 p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">Need Help Now?</h2>
              <p className="text-text-medium text-sm mb-6 max-w-[500px] mx-auto leading-relaxed">
                Contact Catholic Charities of the Diocese of Evansville. All services are confidential.
              </p>
              <div className="font-heading text-2xl font-bold text-navy mb-2">(812) 423-5456</div>
              <p className="text-sm text-text-light">Monday-Friday, 8:30 AM - 4:30 PM</p>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap justify-center">
              <Link href="/ministries/respect-life" className="btn btn-secondary">
                Respect for Life
              </Link>
              <Link href="/ministries" className="btn btn-outline">
                All Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
