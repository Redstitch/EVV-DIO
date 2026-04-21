import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Men's Ministry",
  description:
    "Catholic men's ministry in the Diocese of Evansville. Retreats, fellowship, and formation for men growing as fathers, husbands, and leaders in faith.",
};

export default function MensMinistryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Men&rsquo;s <em>Ministry.</em></h1>
            <p className="deck">Calling men to lead with faith, serve with courage, and grow in holiness.</p>
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
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                The Men&rsquo;s Ministry of the Diocese of Evansville exists to help Catholic men grow in their faith, strengthen their families, and serve their communities. We believe that when men encounter Christ and commit to lives of prayer, sacrifice, and integrity, the impact reaches far beyond themselves, transforming homes, parishes, and workplaces.
              </p>
              <p className="text-text-medium leading-relaxed">
                Through retreats, small groups, conferences, and acts of service, we provide the fraternity and formation that men need to live out their vocations as Catholic fathers, husbands, sons, and brothers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Annual Men&rsquo;s Conference</h3>
                <p className="text-sm text-text-medium leading-relaxed">A full-day event featuring national Catholic speakers, worship, Adoration, and the Sacrament of Reconciliation. Held each fall at the Catholic Center.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">That Man Is You!</h3>
                <p className="text-sm text-text-medium leading-relaxed">A parish-based interactive program combining Scripture, solid teaching, and small group discussion to help men become better husbands, fathers, and leaders.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Silent Retreats</h3>
                <p className="text-sm text-text-medium leading-relaxed">Weekend retreat experiences at the Sarto Retreat Center that offer men space for silence, prayer, and encounter with the Lord.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Service Projects</h3>
                <p className="text-sm text-text-medium leading-relaxed">Hands-on service opportunities including home repair for elderly parishioners, food drives, and community volunteer days.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Knights of Columbus</h3>
                <p className="text-sm text-text-medium leading-relaxed">Councils throughout the diocese offer men opportunities for fraternity, charitable works, and defense of the faith. Contact your parish for local council information.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Father-Son Events</h3>
                <p className="text-sm text-text-medium leading-relaxed">Outdoor adventures, sports tournaments, and prayer experiences designed to strengthen the bond between fathers and sons in the context of faith.</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/ministries" className="btn btn-secondary">
                All Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
