import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Find a School",
  description:
    "Find a Catholic school in the Diocese of Evansville. Browse by deanery, grade level, and location across 12 counties in Southwestern Indiana.",
};

export default function FindSchool() {
  return (
    <>
      <PageHero
        label="Catholic Schools"
        title="Find a School"
        subtitle="Explore our 26 Catholic schools across four deaneries in Southwestern Indiana. Each school offers a unique combination of faith, academics, and community."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Catholic Schools", href: "/schools" },
          { label: "Find a School" },
        ]}
      />

      <main id="main-content">
        {/* Browse by Deanery */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Browse by Deanery</div>
              <h2 className="section-title">Schools Across Our Diocese</h2>
              <p className="section-subtitle mx-auto">
                The Diocese of Evansville is organized into four deaneries. Select a region below to view schools in that area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DeaneryCard
                title="Evansville Deanery"
                desc="The largest concentration of Catholic schools in the diocese, serving the Evansville metropolitan area with elementary schools, a middle school, and high schools."
                schools={[
                  "Mater Dei High School",
                  "Memorial High School",
                  "Reitz Memorial High School",
                  "Good Shepherd School",
                  "Christ the King School",
                  "Holy Redeemer School",
                  "St. Benedict Cathedral School",
                  "Corpus Christi School",
                ]}
              />
              <DeaneryCard
                title="Jasper Deanery"
                desc="Serving the Dubois County area with schools known for strong community ties, academic excellence, and a rich Catholic heritage."
                schools={[
                  "Jasper High School (Catholic)",
                  "Holy Family School (Jasper)",
                  "Precious Blood School (Jasper)",
                  "Holy Trinity School (Jasper)",
                  "St. Joseph School (Jasper)",
                ]}
              />
              <DeaneryCard
                title="Tell City Deanery"
                desc="Serving the Perry and Spencer County communities along the Ohio River with close-knit schools where every child is known."
                schools={[
                  "Tell City Jr.-Sr. High School",
                  "St. Paul School (Tell City)",
                  "St. Michael School (Cannelton)",
                ]}
              />
              <DeaneryCard
                title="Vincennes Deanery"
                desc="Serving the Knox and Daviess County areas, continuing the legacy of Catholic education that dates back to the earliest days of Indiana statehood."
                schools={[
                  "Rivet Jr.-Sr. High School (Vincennes)",
                  "Flaget Elementary (Vincennes)",
                  "Washington Catholic Schools",
                  "St. Simon School (Washington)",
                ]}
              />
            </div>
          </div>
        </section>

        {/* By Grade Level */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">By Grade Level</div>
              <h2 className="section-title">Schools for Every Age</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <GradeCard
                title="Pre-K & Elementary"
                grades="Pre-K through Grade 5"
                desc="A nurturing environment where young learners build a strong foundation in faith, literacy, math, and character. Small class sizes ensure every child receives individual attention."
                count="20 schools"
              />
              <GradeCard
                title="Middle School"
                grades="Grades 6 through 8"
                desc="A bridge between elementary and high school, middle school programs develop critical thinking, leadership, and a deeper understanding of the Catholic faith."
                count="15 schools"
              />
              <GradeCard
                title="High School"
                grades="Grades 9 through 12"
                desc="College-preparatory academics, competitive athletics, fine arts, and a vibrant spiritual life prepare students for success in college and beyond."
                count="5 schools"
              />
            </div>
          </div>
        </section>

        {/* Map CTA */}
        <section className="section-padding bg-warm-white">
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
              The best way to learn about a Catholic school is to experience it firsthand. Contact a school to schedule a tour or attend an upcoming open house.
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

function DeaneryCard({ title, desc, schools }: { title: string; desc: string; schools: string[] }) {
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-soft)]">
      <div className="bg-navy p-6">
        <h3 className="font-heading text-2xl font-bold text-gold">{title}</h3>
        <p className="text-sm text-white/70 mt-1">{desc}</p>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {schools.map((school) => (
            <li key={school} className="flex items-center gap-2.5 text-sm text-text-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {school}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GradeCard({
  title,
  grades,
  desc,
  count,
}: {
  title: string;
  grades: string;
  desc: string;
  count: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
      <div className="text-xs font-bold text-gold tracking-wider uppercase mb-2">{grades}</div>
      <h3 className="font-heading text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed mb-4">{desc}</p>
      <div className="text-xs font-semibold text-text-light tracking-wider uppercase">{count}</div>
    </div>
  );
}
