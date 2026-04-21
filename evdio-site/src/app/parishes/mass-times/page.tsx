import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mass Times",
  description:
    "Find Mass times at Catholic parishes across the Diocese of Evansville. Daily Mass, weekend Mass, Holy Days, and confession schedules.",
};

export default function MassTimesPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">Mass <em>Times.</em></h1>
            <p className="deck">Find daily, weekend, and Holy Day Mass schedules at parishes across the diocese.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/white-mass.jpg"
              alt="Catholic Mass celebration"
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
            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Weekend Mass Schedule</h2>
              <p className="text-text-medium text-sm mb-6">
                Most parishes in the Diocese of Evansville offer Saturday vigil Masses and Sunday morning Masses. Some parishes also offer Sunday evening Masses. Contact your parish for the most current schedule.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cream rounded-lg p-5">
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">Saturday Vigil</h3>
                  <p className="text-sm text-text-medium">Typically 4:00 PM or 5:00 PM. Fulfills the Sunday obligation.</p>
                </div>
                <div className="bg-cream rounded-lg p-5">
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">Sunday</h3>
                  <p className="text-sm text-text-medium">Most parishes offer Masses at 8:00 AM, 10:00 AM, and/or 12:00 PM.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Daily Mass</h2>
              <p className="text-text-medium text-sm mb-4">
                Daily Mass is celebrated Monday through Friday at many parishes, with some also offering Saturday morning Mass. Common times include 7:00 AM, 8:00 AM, and 12:10 PM.
              </p>
              <p className="text-text-medium text-sm">
                The following parishes offer daily Mass on a regular basis:
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "St. Benedict Cathedral, Evansville",
                  "Holy Rosary, Evansville",
                  "Annunciation, Evansville",
                  "Holy Redeemer, Evansville",
                  "St. Joseph, Jasper",
                  "Holy Family, Jasper",
                  "St. Ferdinand, Ferdinand",
                  "St. Meinrad, St. Meinrad",
                  "Sts. Peter & Paul, Haubstadt",
                  "St. Philip, Posey County",
                  "St. Francis Xavier, Vincennes",
                  "Good Shepherd, Evansville",
                ].map((parish) => (
                  <div key={parish} className="text-sm text-navy font-medium bg-cream/60 rounded-lg px-4 py-2.5">
                    {parish}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Confession (Sacrament of Reconciliation)</h2>
              <p className="text-text-medium text-sm mb-4">
                The Sacrament of Reconciliation is typically available 30 minutes before Saturday vigil Mass at most parishes. Many parishes also offer confession by appointment. Contact your parish office to schedule.
              </p>
              <p className="text-text-medium text-sm">
                During Advent and Lent, communal penance services with individual absolution are offered at parishes across the diocese.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Holy Days of Obligation</h2>
              <p className="text-text-medium text-sm mb-4">
                In addition to every Sunday, Catholics are obligated to attend Mass on six Holy Days throughout the year. Parishes offer vigil and day-of Masses for each Holy Day.
              </p>
              <ul className="space-y-2 text-sm text-text-medium">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  <span><strong className="text-navy">January 1</strong> &mdash; Solemnity of Mary, Mother of God</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  <span><strong className="text-navy">Ascension Thursday</strong> &mdash; 40 days after Easter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  <span><strong className="text-navy">August 15</strong> &mdash; Assumption of the Blessed Virgin Mary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  <span><strong className="text-navy">November 1</strong> &mdash; All Saints Day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  <span><strong className="text-navy">December 8</strong> &mdash; Immaculate Conception</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#8226;</span>
                  <span><strong className="text-navy">December 25</strong> &mdash; Christmas</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Link href="/parishes/watch-mass" className="btn btn-secondary">
                Watch Mass Online
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
