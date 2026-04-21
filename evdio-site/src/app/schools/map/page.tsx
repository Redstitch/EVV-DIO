import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Schools Map",
  description:
    "View all 26 Catholic schools on a map of the Diocese of Evansville. Find schools near you across 12 counties in Southwestern Indiana.",
};

export default function SchoolsMap() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title">Schools <em>Map.</em></h1>
            <p className="deck">Find all 26 Catholic schools across the 12 counties of the Diocese of Evansville.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/schools-mass-bishop.jpg"
              alt="Catholic school students at Mass with the Bishop"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Map Placeholder */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Interactive Map</div>
              <h2 className="section-title">Catholic Schools Across the Diocese</h2>
              <p className="section-subtitle mx-auto">
                Our 26 schools span from Vincennes in the east to the Illinois border in the west, from Washington in the north to Tell City along the Ohio River.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="bg-cream rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-soft)]">
              <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-cream to-cream-dark relative">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-navy" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-sm text-text-medium max-w-[400px] mx-auto">
                    We are building an interactive map to help you explore Catholic school locations across the diocese. In the meantime, browse schools by deanery below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schools by County */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">By County</div>
              <h2 className="section-title">Schools by Location</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CountyCard
                county="Vanderburgh County"
                city="Evansville"
                schools={["Mater Dei High School", "Memorial High School", "Christ the King School", "Good Shepherd School", "Holy Redeemer School", "St. Benedict Cathedral School", "Corpus Christi School"]}
              />
              <CountyCard
                county="Dubois County"
                city="Jasper"
                schools={["Jasper Catholic High School", "Holy Family School", "Precious Blood School", "Holy Trinity School", "St. Joseph School"]}
              />
              <CountyCard
                county="Knox County"
                city="Vincennes"
                schools={["Rivet Jr.-Sr. High School", "Flaget Elementary"]}
              />
              <CountyCard
                county="Perry County"
                city="Tell City"
                schools={["Tell City Jr.-Sr. High School", "St. Paul School"]}
              />
              <CountyCard
                county="Daviess County"
                city="Washington"
                schools={["Washington Catholic Schools", "St. Simon School"]}
              />
              <CountyCard
                county="Spencer County"
                city="Various"
                schools={["St. Michael School (Cannelton)"]}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Need Help Choosing a School?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Our Catholic Schools Office can help you find the right fit for your family. Contact us for personalized guidance.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/schools/find" className="btn btn-primary">
                Browse All Schools
              </Link>
              <Link href="/schools/enroll" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Start Enrollment
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function CountyCard({ county, city, schools }: { county: string; city: string; schools: string[] }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-1">{county}</h3>
      <div className="text-xs text-text-light font-semibold tracking-wider uppercase mb-4">{city}</div>
      <ul className="space-y-2">
        {schools.map((school) => (
          <li key={school} className="flex items-center gap-2.5 text-sm text-text-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
            {school}
          </li>
        ))}
      </ul>
    </div>
  );
}
