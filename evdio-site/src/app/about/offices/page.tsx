import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Offices & Departments",
  description:
    "Explore the offices and departments of the Catholic Diocese of Evansville that coordinate education, worship, charitable services, and pastoral care across 12 counties.",
};

const offices = [
  {
    name: "Office of the Bishop",
    description:
      "The office of Bishop Joseph M. Siegel coordinates episcopal activities, pastoral visits, confirmations, and the governance of the diocese. The office also handles official correspondence and appointments.",
    contact: "bishop@evdio.org",
  },
  {
    name: "Office of the Vicar General",
    description:
      "The Vicar General serves as the Bishop's chief collaborator in diocesan governance, overseeing administrative operations and exercising executive authority in the Bishop's name.",
    contact: "vicargeneral@evdio.org",
  },
  {
    name: "Office of Catholic Schools",
    description:
      "Oversees 26 Catholic schools across the diocese, providing faith-based academic excellence, curriculum development, teacher formation, and 850 scholarships annually to ensure accessibility.",
    contact: "schools@evdio.org",
  },
  {
    name: "Office of Worship",
    description:
      "Supports parishes with liturgical guidance, sacramental policies, music ministry resources, and formation for liturgical ministers. Coordinates diocesan liturgies and celebrations.",
    contact: "worship@evdio.org",
  },
  {
    name: "Catholic Charities",
    description:
      "Serves 2,400 families annually with food assistance, emergency aid, counseling, refugee resettlement, immigration legal services, and disaster response across the diocese.",
    contact: "charities@evdio.org",
  },
  {
    name: "Office of Catechesis & Evangelization",
    description:
      "Coordinates faith formation programs for children, teens, and adults. Supports OCIA, sacramental preparation, VBS, and parish-based evangelization initiatives.",
    contact: "catechesis@evdio.org",
  },
  {
    name: "Office of Youth & Young Adult Ministry",
    description:
      "Serves young people through diocesan youth events, retreats, campus ministry, young adult groups, and summer camp programs that foster faith and community.",
    contact: "youth@evdio.org",
  },
  {
    name: "Office of Vocations",
    description:
      "Promotes and supports discernment for the priesthood, permanent diaconate, and consecrated religious life. Provides formation guidance and accompaniment for candidates.",
    contact: "vocations@evdio.org",
  },
  {
    name: "Office of Communications",
    description:
      "Manages diocesan communications, including The Message newspaper, the diocesan website, social media, press relations, and internal communications to parishes.",
    contact: "communications@evdio.org",
  },
  {
    name: "Finance Office",
    description:
      "Manages diocesan finances, parish financial oversight, the Catholic Ministries Appeal, insurance programs, and ensures transparent stewardship of resources.",
    contact: "finance@evdio.org",
  },
  {
    name: "Office of Marriage & Family Life",
    description:
      "Supports marriage preparation, enrichment, and family ministry. Coordinates natural family planning, marriage encounter weekends, and programs for families in crisis.",
    contact: "familylife@evdio.org",
  },
  {
    name: "Tribunal",
    description:
      "The diocesan Tribunal handles marriage cases, annulment processes, and other canonical matters with pastoral sensitivity and adherence to Church law.",
    contact: "tribunal@evdio.org",
  },
  {
    name: "Office of Safe Environment",
    description:
      "Oversees child protection policies, background checks, safe environment training, and compliance with the USCCB Charter for the Protection of Children and Young People.",
    contact: "safeenvironment@evdio.org",
  },
  {
    name: "Office of Human Resources",
    description:
      "Manages employment for Catholic Center staff, benefits administration, and supports parishes and schools with hiring, policies, and personnel matters.",
    contact: "hr@evdio.org",
  },
];

export default function OfficesPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Offices & Departments"
        subtitle="The offices that serve our 45 parishes, 26 schools, and ministries across the diocese."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Offices & Departments" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label text-left">Catholic Center</div>
            <h2 className="section-title text-left">Serving Our Diocese</h2>
            <p className="text-base text-text-medium leading-relaxed mb-4 max-w-[680px]">
              The Catholic Center at 4200 N. Kentucky Ave., Evansville, IN 47711 serves as the administrative hub of the diocese. Our offices coordinate resources, training, and support for parishes, schools, and ministries across all 12 counties.
            </p>
            <p className="text-sm text-text-light mb-10">
              General Inquiries: <a href="tel:8124245536" className="text-blue hover:text-navy font-semibold transition-colors">(812) 424-5536</a>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {offices.map((office) => (
                <div
                  key={office.name}
                  className="bg-cream rounded-xl p-6 border border-border hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">
                    {office.name}
                  </h3>
                  <p className="text-sm text-text-medium leading-relaxed mb-3">
                    {office.description}
                  </p>
                  <a
                    href={`mailto:${office.contact}`}
                    className="text-xs font-semibold text-blue hover:text-navy transition-colors"
                  >
                    {office.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Need Help Finding the Right Office?
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              Call the Catholic Center and our front desk team will connect you with the right department.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/about/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/about/staff-directory" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Staff Directory
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
