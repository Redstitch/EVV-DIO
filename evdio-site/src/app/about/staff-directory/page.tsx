import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Staff Directory",
  description:
    "Find contact information for staff members at the Catholic Center of the Diocese of Evansville, serving our parishes, schools, and ministries.",
};

const departments = [
  {
    name: "Office of the Bishop",
    staff: [
      { name: "Bishop Joseph M. Siegel", title: "Bishop of Evansville", phone: "(812) 424-5536", email: "bishop@evdio.org" },
      { name: "Michelle Keller", title: "Executive Assistant to the Bishop", phone: "(812) 424-5536 ext. 201", email: "mkeller@evdio.org" },
    ],
  },
  {
    name: "Office of the Vicar General",
    staff: [
      { name: "Very Rev. Alex Zenthoefer", title: "Vicar General", phone: "(812) 424-5536 ext. 210", email: "azenthoefer@evdio.org" },
    ],
  },
  {
    name: "Chancellery",
    staff: [
      { name: "Rev. Msgr. Steven Engber", title: "Chancellor", phone: "(812) 424-5536 ext. 215", email: "sengber@evdio.org" },
      { name: "Janet Rodriguez", title: "Archives & Records Coordinator", phone: "(812) 424-5536 ext. 216", email: "jrodriguez@evdio.org" },
    ],
  },
  {
    name: "Office of Catholic Schools",
    staff: [
      { name: "Dr. Daryl Hagan", title: "Superintendent of Catholic Schools", phone: "(812) 424-5536 ext. 300", email: "dhagan@evdio.org" },
      { name: "Amy Smith", title: "Assistant Superintendent", phone: "(812) 424-5536 ext. 301", email: "asmith@evdio.org" },
      { name: "Mark Thompson", title: "Director of School Finance", phone: "(812) 424-5536 ext. 305", email: "mthompson@evdio.org" },
    ],
  },
  {
    name: "Finance Office",
    staff: [
      { name: "Tim McGuire", title: "Chief Financial Officer", phone: "(812) 424-5536 ext. 250", email: "tmcguire@evdio.org" },
      { name: "Lisa Chen", title: "Controller", phone: "(812) 424-5536 ext. 251", email: "lchen@evdio.org" },
      { name: "David Murray", title: "CMA Coordinator", phone: "(812) 424-5536 ext. 255", email: "dmurray@evdio.org" },
    ],
  },
  {
    name: "Office of Communications",
    staff: [
      { name: "Sarah Weber", title: "Director of Communications", phone: "(812) 424-5536 ext. 270", email: "sweber@evdio.org" },
      { name: "James Patterson", title: "Editor, The Message", phone: "(812) 424-5536 ext. 271", email: "jpatterson@evdio.org" },
      { name: "Rachel Davis", title: "Digital Media Coordinator", phone: "(812) 424-5536 ext. 272", email: "rdavis@evdio.org" },
    ],
  },
  {
    name: "Catholic Charities",
    staff: [
      { name: "Maria Gonzalez", title: "Director of Catholic Charities", phone: "(812) 424-5536 ext. 400", email: "mgonzalez@evdio.org" },
      { name: "Robert Williams", title: "Refugee Resettlement Coordinator", phone: "(812) 424-5536 ext. 405", email: "rwilliams@evdio.org" },
    ],
  },
  {
    name: "Office of Catechesis & Evangelization",
    staff: [
      { name: "Teresa Burke", title: "Director of Catechesis", phone: "(812) 424-5536 ext. 320", email: "tburke@evdio.org" },
      { name: "Michael Harris", title: "Youth & Young Adult Ministry Director", phone: "(812) 424-5536 ext. 325", email: "mharris@evdio.org" },
    ],
  },
  {
    name: "Office of Worship",
    staff: [
      { name: "Sr. Mary Catherine, OSB", title: "Director of Worship", phone: "(812) 424-5536 ext. 340", email: "worship@evdio.org" },
    ],
  },
  {
    name: "Human Resources",
    staff: [
      { name: "Jennifer Walsh", title: "Director of Human Resources", phone: "(812) 424-5536 ext. 230", email: "jwalsh@evdio.org" },
    ],
  },
];

export default function StaffDirectoryPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Staff Directory"
        subtitle="Contact information for Catholic Center staff serving our diocese."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Staff Directory" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="section-label text-left">Catholic Center</div>
                <h2 className="section-title text-left !mb-2">Our Team</h2>
                <p className="text-sm text-text-medium">
                  4200 N. Kentucky Ave., Evansville, IN 47711 &middot; <a href="tel:8124245536" className="text-blue font-semibold hover:text-navy transition-colors">(812) 424-5536</a>
                </p>
              </div>
              <p className="text-xs text-text-light max-w-[280px]">
                Office hours: Monday&ndash;Friday, 8:00 a.m.&ndash;4:30 p.m. (ET)
              </p>
            </div>

            <div className="space-y-8">
              {departments.map((dept) => (
                <div key={dept.name}>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4 pb-2 border-b-2 border-gold/20">
                    {dept.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dept.staff.map((person) => (
                      <div
                        key={person.email}
                        className="bg-cream rounded-xl p-5 border border-border flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-navy/[0.08] flex items-center justify-center flex-shrink-0">
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-navy/40" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading text-base font-bold text-navy leading-tight">
                            {person.name}
                          </h4>
                          <p className="text-xs text-text-light mt-0.5">{person.title}</p>
                          <div className="mt-2 flex flex-col gap-0.5">
                            <a
                              href={`mailto:${person.email}`}
                              className="text-xs text-blue hover:text-navy transition-colors truncate"
                            >
                              {person.email}
                            </a>
                            <a
                              href={`tel:${person.phone.replace(/[^0-9+]/g, "")}`}
                              className="text-xs text-text-medium hover:text-navy transition-colors"
                            >
                              {person.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Looking for Clergy?
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              Visit our Clergy Directory for contact information for priests, deacons, and religious serving across the diocese.
            </p>
            <Link href="/about/clergy-directory" className="btn btn-primary">
              Clergy Directory
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
