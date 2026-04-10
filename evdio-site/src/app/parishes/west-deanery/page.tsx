import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "West Deanery",
  description:
    "Catholic parishes in the West Deanery of the Diocese of Evansville, serving Gibson, Pike, Posey, and Crawford counties in Southwestern Indiana.",
};

const parishes = [
  { name: "St. Joseph", city: "Princeton", pastor: "Fr. Philip Bowers", phone: "(812) 385-2617", masses: "Sat 5:00 PM, Sun 10:00 AM" },
  { name: "Sts. Peter & Paul", city: "Haubstadt", pastor: "Fr. Sudhakar Bhastati", phone: "(812) 768-6369", masses: "Sat 4:00 PM, Sun 8:00 AM & 10:30 AM" },
  { name: "St. Philip", city: "Posey County", pastor: "Fr. Gene Schroeder", phone: "(812) 874-2111", masses: "Sat 5:00 PM, Sun 8:00 AM & 10:00 AM" },
  { name: "St. Agnes", city: "Uniontown", pastor: "Fr. Gene Schroeder", phone: "(812) 726-4522", masses: "Sun 8:30 AM" },
  { name: "St. Augustine", city: "Leopold", pastor: "Fr. Adrian Burke, OSB", phone: "(812) 843-5036", masses: "Sun 8:00 AM" },
  { name: "St. Isidore the Farmer", city: "Bristow", pastor: "Fr. Adrian Burke, OSB", phone: "(812) 843-5036", masses: "Sun 10:00 AM" },
  { name: "St. Mark", city: "Perry County", pastor: "Fr. Garrett Braun", phone: "(812) 547-7994", masses: "Sat 4:00 PM, Sun 10:30 AM" },
  { name: "Holy Cross", city: "Fort Branch", pastor: "Fr. Phillip Bowers", phone: "(812) 753-3548", masses: "Sat 4:30 PM, Sun 8:00 AM" },
];

export default function WestDeaneryPage() {
  return (
    <>
      <PageHero
        label="Parishes & Mass"
        title="West Deanery"
        subtitle="Serving Gibson, Pike, Posey, and Crawford counties in Southwestern Indiana."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Parishes & Mass", href: "/parishes" },
          { label: "West Deanery" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">About the West Deanery</h2>
              <p className="text-text-medium text-sm leading-relaxed">
                The West Deanery spans Gibson, Pike, Posey, and Crawford counties along the western and southern edges of the diocese. This largely rural deanery includes historic river towns, farming communities, and some of the most beautiful countryside in Southern Indiana. The parishes of the West Deanery are known for their warm hospitality, strong sense of community, and deep devotion to the traditions of the faith. Many parishes in this deanery share pastors and collaborate closely on ministry and outreach.
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
