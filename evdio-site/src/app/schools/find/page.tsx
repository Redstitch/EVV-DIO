import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">CATHOLIC SCHOOLS</p>
            <h1 id="title">Find a <em>School.</em></h1>
            <p className="deck">Explore all 26 Catholic schools in the Diocese of Evansville, serving Pre-K through 12th grade across Southwestern Indiana.</p>
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
        {/* High Schools */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Grades 9-12</span>
            <h2 className="section-h2">High Schools</h2>
            <p className="section-desc">
              Four college-preparatory high schools across the diocese, each rooted in Catholic identity, competitive academics, and vibrant student life.
            </p>
          </div>

          <div className="interior-grid interior-grid-2">
            {highSchools.map((school) => (
              <div key={`${school.name}-${school.city}`} className="interior-card" style={{ cursor: "default" }}>
                <h3>{school.name}</h3>
                <p>{school.city}, Indiana</p>
              </div>
            ))}
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Elementary / Middle */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Pre-K through Grade 8</span>
            <h2 className="section-h2">Elementary &amp; Middle Schools</h2>
            <p className="section-desc">
              Seventeen combined Pre-K-8 schools building a foundation of faith, academics, and character from the earliest years through middle school.
            </p>
          </div>

          <div className="interior-grid interior-grid-3">
            {elementaryMiddleSchools.map((school) => (
              <div key={`${school.name}-${school.city}`} className="interior-card" style={{ cursor: "default" }}>
                <h3>{school.name}</h3>
                <p>{school.city}, Indiana</p>
              </div>
            ))}
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Elementary Only */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Pre-K through Grade 5</span>
            <h2 className="section-h2">Elementary Schools</h2>
            <p className="section-desc">
              Five elementary schools serving younger students with small class sizes and a strong sense of community.
            </p>
          </div>

          <div className="interior-grid interior-grid-3">
            {elementarySchools.map((school) => (
              <div key={`${school.name}-${school.city}`} className="interior-card" style={{ cursor: "default" }}>
                <h3>{school.name}</h3>
                <p>{school.city}, Indiana</p>
              </div>
            ))}
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* Map CTA */}
        <section className="page-content" style={{ background: "var(--cream-lt)" }}>
          <div className="section-head">
            <span className="section-tag">Visual Guide</span>
            <h2 className="section-h2">See All Schools on a Map</h2>
            <p className="section-desc">
              View all 26 Catholic schools plotted on an interactive map of the Diocese of Evansville. Find the school closest to your home.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/schools/map" className="btn btn-primary">
              View Schools Map
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="page-content">
          <div className="cta-block">
            <h3>Ready to Visit?</h3>
            <p>
              Enrollment happens at each school. Contact the school directly to schedule a tour or attend an upcoming open house.
            </p>
            <div className="btn-row">
              <Link href="/schools/enroll" className="btn btn-primary">
                Inquire About Enrollment
              </Link>
              <Link href="/schools/tuition" className="btn btn-secondary">
                Tuition Assistance
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
