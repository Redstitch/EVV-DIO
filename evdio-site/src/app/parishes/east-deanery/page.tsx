import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "East Deanery",
  description:
    "Catholic parishes in the East Deanery of the Diocese of Evansville, serving Dubois, Spencer, and Perry counties in Southwestern Indiana.",
};

const parishes = [
  { name: "St. Joseph", city: "Jasper", pastor: "Fr. Peter Balili", phone: "(812) 634-2511", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "Holy Family", city: "Jasper", pastor: "Fr. Peter Balili", phone: "(812) 634-2511", masses: "Sun 9:00 AM" },
  { name: "Precious Blood", city: "Jasper", pastor: "Fr. Mark Kurzendoerfer", phone: "(812) 482-2992", masses: "Sat 4:00 PM, Sun 7:30 AM & 10:00 AM" },
  { name: "St. Ferdinand", city: "Ferdinand", pastor: "Fr. Michael Madden, OSB", phone: "(812) 367-1591", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "St. Meinrad", city: "St. Meinrad", pastor: "Fr. Lorenzo Ato, OSB", phone: "(812) 357-5533", masses: "Sun 9:30 AM" },
  { name: "St. Henry", city: "St. Henry", pastor: "Fr. Thomas Lueken", phone: "(812) 937-4394", masses: "Sat 4:00 PM, Sun 9:30 AM" },
  { name: "St. Raphael", city: "Dubois", pastor: "Fr. Thomas Lueken", phone: "(812) 678-3083", masses: "Sun 8:00 AM" },
  { name: "Immaculate Conception", city: "Celestine", pastor: "Fr. Gerald Burkert", phone: "(812) 482-5553", masses: "Sat 5:00 PM, Sun 10:00 AM" },
  { name: "St. Celestine", city: "Celestine", pastor: "Fr. Gerald Burkert", phone: "(812) 482-5553", masses: "Sun 8:00 AM" },
  { name: "St. Mary", city: "Huntingburg", pastor: "Fr. Nicholas Keucher", phone: "(812) 683-4775", masses: "Sat 4:30 PM, Sun 9:00 AM" },
  { name: "St. Paul", city: "Tell City", pastor: "Fr. Adrian Burke, OSB", phone: "(812) 547-7994", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
];

export default function EastDeaneryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">East <em>Deanery.</em></h1>
            <p className="deck">Serving Dubois, Spencer, and Perry counties, rich in Catholic heritage and tradition.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/cathedral-interior.jpg"
              alt="Cathedral interior"
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
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">About the East Deanery</h2>
              <p className="text-text-medium text-sm leading-relaxed">
                The East Deanery covers Dubois, Spencer, and Perry counties and is one of the most distinctively Catholic regions in the United States. The area was settled by German Catholic immigrants in the 19th century, and their legacy lives on in thriving parishes, a strong Catholic school system, and the Benedictine communities at Saint Meinrad Archabbey and the Monastery of the Immaculate Conception in Ferdinand. Jasper, the county seat of Dubois County, is often cited as one of the most Catholic cities in the country.
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
