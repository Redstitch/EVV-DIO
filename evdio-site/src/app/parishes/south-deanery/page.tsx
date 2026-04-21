import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "South Deanery",
  description:
    "Catholic parishes in the South Deanery of the Diocese of Evansville, serving Vanderburgh and Warrick counties in Southwestern Indiana.",
};

const parishes = [
  { name: "St. Benedict Cathedral", city: "Evansville", pastor: "Fr. Michael Hilderbrand", phone: "(812) 423-4509", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "Annunciation", city: "Evansville", pastor: "Fr. Bernard Etienne", phone: "(812) 476-3061", masses: "Sat 4:00 PM, Sun 9:00 AM & 11:00 AM" },
  { name: "Christ the King", city: "Evansville", pastor: "Fr. Alex Zenthoefer", phone: "(812) 477-1051", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "Corpus Christi", city: "Evansville", pastor: "Fr. Tyler Tenbarge", phone: "(812) 476-4110", masses: "Sat 4:30 PM, Sun 9:00 AM" },
  { name: "Good Shepherd", city: "Evansville", pastor: "Fr. Christopher Droste", phone: "(812) 477-5405", masses: "Sat 4:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "Holy Redeemer", city: "Evansville", pastor: "Fr. Andrew Thomas", phone: "(812) 476-3613", masses: "Sat 5:00 PM, Sun 9:00 AM & 11:00 AM" },
  { name: "Holy Rosary", city: "Evansville", pastor: "Fr. Bernard Etienne", phone: "(812) 424-8953", masses: "Sat 4:00 PM, Sun 8:00 AM & 10:00 AM" },
  { name: "Holy Spirit", city: "Evansville", pastor: "Fr. David Doseck", phone: "(812) 477-6027", masses: "Sat 5:00 PM, Sun 8:30 AM & 11:00 AM" },
  { name: "Nativity", city: "Evansville", pastor: "Fr. Michael Mooney", phone: "(812) 424-4020", masses: "Sat 4:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "St. Boniface", city: "Evansville", pastor: "Fr. Michael Hilderbrand", phone: "(812) 423-4509", masses: "Sun 9:00 AM" },
  { name: "St. John the Baptist", city: "Newburgh", pastor: "Fr. Matthew Khoury", phone: "(812) 853-5750", masses: "Sat 5:00 PM, Sun 8:00 AM, 10:00 AM & 12:00 PM" },
  { name: "St. John the Evangelist", city: "Daylight", pastor: "Fr. Godfrey Mullen, OSB", phone: "(812) 963-3526", masses: "Sat 4:30 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "St. Wendel", city: "St. Wendel", pastor: "Fr. Godfrey Mullen, OSB", phone: "(812) 963-3526", masses: "Sun 9:00 AM" },
  { name: "Resurrection", city: "Evansville", pastor: "Fr. Jason Constable", phone: "(812) 867-5111", masses: "Sat 4:30 PM, Sun 9:00 AM & 11:30 AM" },
];

export default function SouthDeaneryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">South <em>Deanery.</em></h1>
            <p className="deck">Serving Vanderburgh and Warrick counties, the heart of the Diocese of Evansville.</p>
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
            <div className="bg-white rounded-xl border border-border p-8 mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">About the South Deanery</h2>
              <p className="text-text-medium text-sm leading-relaxed">
                The South Deanery is the largest in the diocese, encompassing Vanderburgh and Warrick counties. As the urban center of the diocese, Evansville and its surrounding communities are home to 14 parishes, including St. Benedict Cathedral, the mother church of the diocese. The deanery serves the greatest concentration of Catholics in Southwestern Indiana, with vibrant parish communities offering diverse worship, education, and ministry opportunities.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-navy mb-6">
              Parishes ({parishes.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {parishes.map((p) => (
                <div
                  key={`${p.name}-${p.city}`}
                  className="bg-white rounded-xl border border-border p-6 hover:shadow-[var(--shadow-soft)] transition-shadow"
                >
                  <h3 className="font-heading text-xl font-bold text-navy mb-1">{p.name}</h3>
                  <p className="text-xs text-text-light mb-3">{p.city}</p>
                  <div className="space-y-1.5 text-sm text-text-medium">
                    <div><strong className="text-navy">Pastor:</strong> {p.pastor}</div>
                    <div><strong className="text-navy">Phone:</strong> {p.phone}</div>
                    <div><strong className="text-navy">Mass:</strong> {p.masses}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link href="/parishes/directory" className="btn btn-secondary">
                Full Parish Directory
              </Link>
              <Link href="/parishes" className="btn btn-outline">
                All Deaneries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
