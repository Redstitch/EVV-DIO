import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
    link: { href: "/about/press-room", label: "Media Inquiries →" },
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
      "Coordinates faith formation programs for children, teens, and adults across the diocese. Supports parish education leaders, Teacher Formation Day, religion curriculum, OCIA, sacramental preparation, VBS, and parish-based evangelization.",
    contact: "catechesis@evdio.org",
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
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">About</p>
            <h1 id="title">Offices &amp; <em>Departments.</em></h1>
            <p className="deck">The 17 offices that serve our 45 parishes, 26 schools, and ministries across the diocese.</p>
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
        <div className="page-content">
          <div className="section-head" style={{ textAlign: "left", marginBottom: 24 }}>
            <span className="section-tag section-tag-left">Catholic Center</span>
            <h2 className="section-h2 section-h2-left">Serving Our Diocese</h2>
          </div>
          <p style={{ marginBottom: 16, maxWidth: 680 }}>
            The Catholic Center at 4200 N. Kentucky Ave., Evansville, IN 47711 serves as the administrative hub of the diocese. Our offices coordinate resources, training, and support for parishes, schools, and ministries across all 12 counties.
          </p>
          <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 40 }}>
            General Inquiries: <a href="tel:8124245536" style={{ color: "var(--blue)", fontWeight: 600 }}>(812) 424-5536</a>
          </p>

          <div className="interior-grid interior-grid-2">
            {offices.map((office) => (
              <div key={office.name} className="info-block">
                <h3>{office.name}</h3>
                <p style={{ marginBottom: 12 }}>{office.description}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <a href={`mailto:${office.contact}`} style={{ fontSize: 13, fontWeight: 600, color: "var(--blue)" }}>
                    {office.contact}
                  </a>
                  {office.link && (
                    <Link href={office.link.href} style={{ fontSize: 13, fontWeight: 600, color: "var(--dgold)" }}>
                      {office.link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" /><circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" /><circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* CTA */}
        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Need Help Finding the Right Office?</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Call the Catholic Center and our front desk team will connect you with the right department.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/about/contact" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Contact Us <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/about/staff-directory" className="btn btn-outline" style={{ color: "var(--cream)", borderColor: "rgba(238,218,179,0.3)" }}>Staff Directory</Link>
          </div>
        </section>
      </main>
    </>
  );
}
