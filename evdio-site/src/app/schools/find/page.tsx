import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Find a School",
  description:
    "Find a Catholic school in the Diocese of Evansville. Browse all 26 schools by grade level and city across Southwestern Indiana.",
};

const highSchools = [
  { name: "Mater Dei High School", city: "Evansville" },
  { name: "Reitz Memorial High School", city: "Evansville" },
  { name: "Rivet High School", city: "Vincennes" },
  { name: "Washington Catholic High School", city: "Washington" },
];

const elementaryMiddleSchools = [
  { name: "Annunciation at Christ the King", city: "Evansville" },
  { name: "Annunciation at Holy Spirit", city: "Evansville" },
  { name: "Corpus Christi School", city: "Evansville" },
  { name: "Good Shepherd School", city: "Evansville" },
  { name: "Holy Redeemer School", city: "Evansville" },
  { name: "Holy Rosary School", city: "Evansville" },
  { name: "Holy Trinity School", city: "Jasper" },
  { name: "Resurrection School", city: "Evansville" },
  { name: "St. Benedict Cathedral School", city: "Evansville" },
  { name: "St. Bernard School", city: "Rockport" },
  { name: "St. James School", city: "Haubstadt" },
  { name: "St. John the Baptist School", city: "Newburgh" },
  { name: "St. Joseph School", city: "Evansville" },
  { name: "St. Phillip School", city: "Mt. Vernon" },
  { name: "St. Wendel School", city: "Wadesville" },
  { name: "Washington Catholic Elementary", city: "Washington" },
  { name: "Westside Catholic School", city: "Evansville" },
];

const elementarySchools = [
  { name: "Flaget Elementary School", city: "Vincennes" },
  { name: "Holy Cross School", city: "Fort Branch" },
  { name: "St. Joseph School", city: "Princeton" },
  { name: "St. Matthews School", city: "Mt. Vernon" },
  { name: "Sts. Peter & Paul School", city: "Haubstadt" },
];

export default function FindSchool() {
  return (
    <>
      <PageHero
        label="Catholic Schools"
        title="Find a School"
        subtitle="Explore all 26 Catholic schools in the Diocese of Evansville, serving Pre-K through 12th grade across Southwestern Indiana."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Catholic Schools", href: "/schools" },
          { label: "Find a School" },
        ]}
      />

      <main id="main-content">
        {/* High Schools */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <div className="section-label">Grades 9–12</div>
              <h2 className="section-title">High Schools</h2>
              <p className="section-subtitle mx-auto">
                Four college-preparatory high schools across the diocese, each rooted in Catholic identity, competitive academics, and vibrant student life.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highSchools.map((school) => (
                <SchoolCard key={`${school.name}-${school.city}`} name={school.name} city={school.city} />
              ))}
            </div>
          </div>
        </section>

        {/* Elementary / Middle */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <div className="section-label">Pre-K through Grade 8</div>
              <h2 className="section-title">Elementary &amp; Middle Schools</h2>
              <p className="section-subtitle mx-auto">
                Seventeen combined Pre-K–8 schools building a foundation of faith, academics, and character from the earliest years through middle school.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {elementaryMiddleSchools.map((school) => (
                <SchoolCard key={`${school.name}-${school.city}`} name={school.name} city={school.city} />
              ))}
            </div>
          </div>
        </section>

        {/* Elementary Only */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <div className="section-label">Pre-K through Grade 5</div>
              <h2 className="section-title">Elementary Schools</h2>
              <p className="section-subtitle mx-auto">
                Five elementary schools serving younger students with small class sizes and a strong sense of community.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {elementarySchools.map((school) => (
                <SchoolCard key={`${school.name}-${school.city}`} name={school.name} city={school.city} />
              ))}
            </div>
          </div>
        </section>

        {/* Map CTA */}
        <section className="section-padding bg-cream">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label">Visual Guide</div>
            <h2 className="section-title">See All Schools on a Map</h2>
            <p className="text-base text-text-medium leading-relaxed mb-8 max-w-[560px] mx-auto">
              View all 26 Catholic schools plotted on an interactive map of the Diocese of Evansville. Find the school closest to your home.
            </p>
            <Link href="/schools/map" className="btn btn-primary">
              View Schools Map
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Ready to Visit?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Enrollment happens at each school. Contact the school directly to schedule a tour or attend an upcoming open house.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/schools/enroll" className="btn btn-primary">
                Enroll Your Child
              </Link>
              <Link href="/schools/tuition" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Tuition Assistance
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SchoolCard({ name, city }: { name: string; city: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-5 shadow-[var(--shadow-soft)] hover:border-gold/30 transition-colors">
      <h3 className="font-heading text-base font-bold text-navy mb-1 leading-tight">{name}</h3>
      <p className="text-xs text-text-light">{city}, Indiana</p>
    </div>
  );
}
