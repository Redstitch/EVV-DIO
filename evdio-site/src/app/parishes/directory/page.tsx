import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Parish Directory",
  description:
    "Complete directory of all 45 Catholic parishes in the Diocese of Evansville. Addresses, phone numbers, pastors, and Mass times for parishes across Southwestern Indiana.",
};

export default function ParishDirectoryPage() {
  return (
    <>
      <PageHero
        label="Parishes & Mass"
        title="Parish Directory"
        subtitle="A complete listing of all 45 parishes across the Diocese of Evansville."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Parishes & Mass", href: "/parishes" },
          { label: "Parish Directory" },
        ]}
      />

      <main id="main-content">
        {/* Map Placeholder */}
        <section className="bg-navy py-12 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-16 text-center">
              <svg viewBox="0 0 24 24" className="w-16 h-16 fill-gold mx-auto mb-4" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Interactive Parish Map</h2>
              <p className="text-white/60 text-sm max-w-[400px] mx-auto">
                Our interactive map is coming soon. In the meantime, browse parishes by deanery below.
              </p>
            </div>
          </div>
        </section>

        {/* Directory by Deanery */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-[clamp(24px,3.5vw,32px)] font-bold text-navy mb-3">
                Browse by Deanery
              </h2>
              <p className="text-text-medium max-w-[500px] mx-auto text-sm">
                Select a deanery to view the full list of parishes, pastors, and contact information.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              <DeaneryLink href="/parishes/north-deanery" name="North Deanery" counties="Knox, Daviess, Martin" count={12} />
              <DeaneryLink href="/parishes/south-deanery" name="South Deanery" counties="Vanderburgh, Warrick" count={14} />
              <DeaneryLink href="/parishes/east-deanery" name="East Deanery" counties="Dubois, Spencer, Perry" count={11} />
              <DeaneryLink href="/parishes/west-deanery" name="West Deanery" counties="Gibson, Pike, Posey, Crawford" count={8} />
            </div>

            {/* Alphabetical Sample */}
            <h2 className="font-heading text-2xl font-bold text-navy mb-6">All Parishes (A-Z)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Annunciation", city: "Evansville", phone: "(812) 476-3061" },
                { name: "Christ the King", city: "Evansville", phone: "(812) 477-1051" },
                { name: "Corpus Christi", city: "Evansville", phone: "(812) 476-4110" },
                { name: "Good Shepherd", city: "Evansville", phone: "(812) 477-5405" },
                { name: "Holy Cross", city: "Fort Branch", phone: "(812) 753-3548" },
                { name: "Holy Family", city: "Jasper", phone: "(812) 634-2511" },
                { name: "Holy Redeemer", city: "Evansville", phone: "(812) 476-3613" },
                { name: "Holy Rosary", city: "Evansville", phone: "(812) 424-8953" },
                { name: "Holy Spirit", city: "Evansville", phone: "(812) 477-6027" },
                { name: "Immaculate Conception", city: "Celestine", phone: "(812) 482-5553" },
                { name: "Nativity", city: "Evansville", phone: "(812) 424-4020" },
                { name: "Our Lady of Hope", city: "Washington", phone: "(812) 254-3497" },
                { name: "Precious Blood", city: "Jasper", phone: "(812) 482-2992" },
                { name: "Sacred Heart", city: "Vincennes", phone: "(812) 882-0610" },
                { name: "St. Agnes", city: "Uniontown", phone: "(812) 726-4522" },
                { name: "St. Augustine", city: "Leopold", phone: "(812) 843-5036" },
                { name: "St. Benedict Cathedral", city: "Evansville", phone: "(812) 423-4509" },
                { name: "St. Boniface", city: "Evansville", phone: "(812) 423-4509" },
                { name: "St. Celestine", city: "Celestine", phone: "(812) 482-5553" },
                { name: "St. Ferdinand", city: "Ferdinand", phone: "(812) 367-1591" },
                { name: "St. Francis Xavier", city: "Vincennes", phone: "(812) 882-1535" },
                { name: "St. Henry", city: "St. Henry", phone: "(812) 937-4394" },
                { name: "St. Isidore the Farmer", city: "Bristow", phone: "(812) 843-5036" },
                { name: "St. John the Baptist", city: "Newburgh", phone: "(812) 853-5750" },
                { name: "St. John the Evangelist", city: "Daylight", phone: "(812) 963-3526" },
                { name: "St. Joseph", city: "Jasper", phone: "(812) 634-2511" },
                { name: "St. Joseph", city: "Princeton", phone: "(812) 385-2617" },
                { name: "St. Mark", city: "Perry County", phone: "(812) 547-7994" },
                { name: "St. Mary", city: "Huntingburg", phone: "(812) 683-4775" },
                { name: "St. Meinrad", city: "St. Meinrad", phone: "(812) 357-5533" },
                { name: "St. Patrick", city: "Terre Haute", phone: "(812) 232-8404" },
                { name: "St. Paul", city: "Tell City", phone: "(812) 547-7994" },
                { name: "St. Peter", city: "Montgomery", phone: "(812) 486-3519" },
                { name: "St. Philip", city: "Posey County", phone: "(812) 874-2111" },
                { name: "St. Raphael", city: "Dubois", phone: "(812) 678-3083" },
                { name: "St. Wendel", city: "St. Wendel", phone: "(812) 963-3526" },
                { name: "Sts. Peter & Paul", city: "Haubstadt", phone: "(812) 768-6369" },
              ].map((p) => (
                <div key={`${p.name}-${p.city}`} className="bg-white rounded-lg border border-border p-4 hover:shadow-[var(--shadow-soft)] transition-shadow">
                  <h3 className="font-heading text-base font-bold text-navy">{p.name}</h3>
                  <p className="text-xs text-text-light">{p.city}</p>
                  <p className="text-xs text-text-medium mt-1">{p.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function DeaneryLink({
  href,
  name,
  counties,
  count,
}: {
  href: string;
  name: string;
  counties: string;
  count: number;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl p-6 border border-border hover:border-gold/40 hover:shadow-[var(--shadow-card)] transition-all duration-300 text-center"
    >
      <h3 className="font-heading text-lg font-bold text-navy mb-1 group-hover:text-blue transition-colors">{name}</h3>
      <p className="text-xs text-text-light mb-2">{counties}</p>
      <span className="text-xs text-gold font-semibold">{count} Parishes</span>
    </Link>
  );
}
