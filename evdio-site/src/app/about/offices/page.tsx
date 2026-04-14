import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Offices & Departments",
  description:
    "Explore the 17 offices and departments of the Catholic Diocese of Evansville that coordinate education, worship, charitable services, and pastoral care across 12 counties.",
};

const offices: {
  name: string;
  description: string;
  contact: string;
  link?: { href: string; label: string };
}[] = [
  {
    name: "Office of the Bishop",
    description:
      "The office of Bishop Joseph M. Siegel coordinates episcopal activities, pastoral visits, confirmations, and the governance of the diocese. Handles official correspondence and appointments.",
    contact: "bishop@evdio.org",
    link: { href: "/about/our-bishop", label: "Our Bishop →" },
  },
  {
    name: "Chancellor's Office",
    description:
      "The Chancellor serves as the diocesan notary and custodian of official records. Coordinates archives, correspondence, and canonical documentation for the Bishop.",
    contact: "chancellor@evdio.org",
    link: { href: "/about/leadership", label: "Diocesan Leadership →" },
  },
  {
    name: "Office of the Vicar General",
    description:
      "The Vicar General serves as the Bishop's chief collaborator in diocesan governance, overseeing administrative operations and exercising executive authority in the Bishop's name.",
    contact: "vicargeneral@evdio.org",
    link: { href: "/about/leadership", label: "Diocesan Leadership →" },
  },
  {
    name: "Office of Communications",
    description:
      "Manages diocesan communications, including The Message newspaper, the diocesan website, social media, press relations, and internal communications to parishes.",
    contact: "communications@evdio.org",
    link: { href: "/about/press-room", label: "Press Room →" },
  },
  {
    name: "Finance Office",
    description:
      "Manages diocesan finances, parish financial oversight, the Catholic Ministries Appeal, insurance programs, and ensures transparent stewardship of resources.",
    contact: "finance@evdio.org",
  },
  {
    name: "Tribunal",
    description:
      "The Marriage & Annulment Tribunal handles marriage cases, annulment processes, and other canonical matters with pastoral sensitivity and adherence to Church law.",
    contact: "tribunal@evdio.org",
  },
  {
    name: "Facilities & Meeting Spaces",
    description:
      "Manages the Catholic Center meeting rooms and Sarto Retreat Center. Books spaces for diocesan events, retreats, and community gatherings.",
    contact: "facilities@evdio.org",
    link: { href: "/events/spaces", label: "Meeting Rooms & Spaces →" },
  },
  {
    name: "Office of Catechesis",
    description:
      "Coordinates faith formation programs for children, teens, and adults. Supports OCIA, sacramental preparation, VBS, and parish-based evangelization. Also known publicly as Religious Education.",
    contact: "catechesis@evdio.org",
    link: { href: "/ministries/religious-education", label: "Religious Education →" },
  },
  {
    name: "Office of Vocations",
    description:
      "Promotes and supports discernment for the priesthood and consecrated religious life. Provides formation guidance and accompaniment for candidates.",
    contact: "vocations@evdio.org",
    link: { href: "/faith/vocations", label: "Vocations →" },
  },
  {
    name: "Office of Worship",
    description:
      "Supports parishes with liturgical guidance, sacramental policies, music ministry resources, and formation for liturgical ministers. Coordinates diocesan liturgies and celebrations.",
    contact: "worship@evdio.org",
    link: { href: "/faith/prayer-worship", label: "Prayer & Worship Resources →" },
  },
  {
    name: "Office of Youth & Young Adult Ministry",
    description:
      "Serves young people through diocesan youth events, retreats, campus ministry, young adult groups, and summer camp programs that foster faith and community.",
    contact: "youth@evdio.org",
    link: { href: "/ministries/youth", label: "Youth & Young Adults →" },
  },
  {
    name: "Office of Marriage & Family Life",
    description:
      "Supports marriage preparation, enrichment, and family ministry. Coordinates natural family planning, marriage encounter weekends, and programs for families in crisis.",
    contact: "familylife@evdio.org",
    link: { href: "/ministries/marriage-family", label: "Marriage & Family Life →" },
  },
  {
    name: "Office of Hispanic Ministry",
    description:
      "Serves the Hispanic Catholic community with bilingual pastoral care, cultural celebrations, Spanish-language sacramental preparation, and community-building programs.",
    contact: "hispanic@evdio.org",
    link: { href: "/ministries/hispanic", label: "Hispanic Ministry →" },
  },
  {
    name: "Office of the Permanent Diaconate",
    description:
      "Handles formation, ongoing education, and ministry support for permanent deacons and their wives. Coordinates the diaconate formation program.",
    contact: "diaconate@evdio.org",
    link: { href: "/faith/deacon", label: "Becoming a Deacon →" },
  },
  {
    name: "Office of Stewardship",
    description:
      "Manages the Catholic Ministries Appeal, the Brute Society, planned giving, and formation resources on Catholic stewardship of time, talent, and treasure.",
    contact: "stewardship@evdio.org",
    link: { href: "/give", label: "Give →" },
  },
  {
    name: "Office of Catholic Schools",
    description:
      "Oversees 26 Catholic schools across the diocese, providing faith-based academic excellence, curriculum development, teacher formation, and 850 scholarships annually.",
    contact: "schools@evdio.org",
    link: { href: "/schools", label: "Catholic Schools →" },
  },
  {
    name: "Office of Safe Environment",
    description:
      "Oversees child protection policies, background checks, safe environment training, and compliance with the USCCB Charter for the Protection of Children and Young People.",
    contact: "safeenvironment@evdio.org",
    link: { href: "/about/safe-environment", label: "Safe Environment →" },
  },
];

export default function OfficesPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Offices & Departments"
        subtitle="The 17 offices that serve our 45 parishes, 26 schools, and ministries across the diocese."
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
                  <div className="flex flex-col gap-1.5">
                    <a
                      href={`mailto:${office.contact}`}
                      className="text-xs font-semibold text-blue hover:text-navy transition-colors"
                    >
                      {office.contact}
                    </a>
                    {office.link && (
                      <Link
                        href={office.link.href}
                        className="text-xs font-semibold text-gold hover:text-navy transition-colors"
                      >
                        {office.link.label}
                      </Link>
                    )}
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
