import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "North Deanery",
  description:
    "Catholic parishes in the North Deanery of the Diocese of Evansville, serving Knox, Daviess, and Martin counties in Southwestern Indiana.",
};

const parishes = [
  { name: "Sacred Heart", city: "Vincennes", pastor: "Fr. Anthony Vinson", phone: "(812) 882-0610", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "St. Francis Xavier", city: "Vincennes", pastor: "Fr. Anthony Vinson", phone: "(812) 882-1535", masses: "Sun 9:00 AM" },
  { name: "Our Lady of Hope", city: "Washington", pastor: "Fr. Joseph Erbacher", phone: "(812) 254-3497", masses: "Sat 4:00 PM, Sun 9:00 AM & 11:00 AM" },
  { name: "St. Simon", city: "Washington", pastor: "Fr. Joseph Erbacher", phone: "(812) 254-3497", masses: "Sun 7:30 AM" },
  { name: "St. Peter", city: "Montgomery", pastor: "Fr. James Koressel", phone: "(812) 486-3519", masses: "Sat 5:00 PM, Sun 10:00 AM" },
  { name: "St. Martin of Tours", city: "Whitfield", pastor: "Fr. James Koressel", phone: "(812) 486-3225", masses: "Sun 8:00 AM" },
  { name: "St. Mary", city: "Barr Township", pastor: "Fr. Thomas Haan", phone: "(812) 295-3421", masses: "Sat 4:30 PM, Sun 8:30 AM" },
  { name: "St. Joseph", city: "Bramble", pastor: "Fr. Thomas Haan", phone: "(812) 295-3421", masses: "Sun 10:30 AM" },
  { name: "St. John the Baptist", city: "Loogootee", pastor: "Fr. Kenneth Walker", phone: "(812) 295-2636", masses: "Sat 5:00 PM, Sun 10:00 AM" },
  { name: "St. Thomas", city: "Shoals", pastor: "Fr. Kenneth Walker", phone: "(812) 247-3523", masses: "Sun 8:00 AM" },
  { name: "St. Mary", city: "Bicknell", pastor: "Fr. David Kiesel", phone: "(812) 735-4519", masses: "Sat 4:00 PM, Sun 9:00 AM" },
  { name: "Holy Cross", city: "Fort Branch", pastor: "Fr. David Kiesel", phone: "(812) 753-3548", masses: "Sun 11:00 AM" },
];

export default function NorthDeaneryPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">PARISHES & MASS</p>
            <h1 id="title">North <em>Deanery.</em></h1>
            <p className="deck">Serving Knox, Daviess, and Martin counties in Southwestern Indiana.</p>
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
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">About the North Deanery</h2>
              <p className="text-text-medium text-sm leading-relaxed">
                The North Deanery encompasses parishes in Knox, Daviess, and Martin counties. This region includes the historic city of Vincennes, Indiana&rsquo;s first state capital and the site of some of the oldest Catholic communities in the state. The deanery is home to 12 parishes serving the faithful across a largely rural area with deep roots in the Catholic tradition brought by French missionaries in the 18th century.
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
