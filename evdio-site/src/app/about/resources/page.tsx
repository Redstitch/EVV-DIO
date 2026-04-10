import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Catholic Resources & Links",
  description:
    "Helpful links to Catholic organizations, the USCCB, Vatican, Catholic Charities, and other faith-based resources for the Diocese of Evansville community.",
};

const resourceGroups = [
  {
    heading: "The Universal Church",
    resources: [
      {
        name: "The Vatican",
        url: "https://www.vatican.va",
        description:
          "The official website of the Holy See, including papal documents, news, and the teachings of Pope Francis.",
      },
      {
        name: "United States Conference of Catholic Bishops (USCCB)",
        url: "https://www.usccb.org",
        description:
          "The official body of Catholic bishops in the United States, offering resources on Church teaching, advocacy, and daily readings.",
      },
      {
        name: "Catholic News Service",
        url: "https://www.catholicnews.com",
        description:
          "The news agency of the U.S. Catholic bishops, providing Catholic journalism from around the world.",
      },
      {
        name: "Catechism of the Catholic Church",
        url: "https://www.usccb.org/beliefs-and-teachings/what-we-believe/catechism/catechism-of-the-catholic-church",
        description:
          "The official summary of the beliefs and teachings of the Catholic Church, available online for study and reference.",
      },
    ],
  },
  {
    heading: "Catholic Education & Formation",
    resources: [
      {
        name: "National Catholic Educational Association (NCEA)",
        url: "https://www.ncea.org",
        description:
          "The largest professional organization in the world for Catholic education, supporting Catholic schools and religious education programs.",
      },
      {
        name: "FORMED",
        url: "https://www.formed.org",
        description:
          "A Catholic digital platform offering movies, programs, audio, and books for faith formation. Many diocesan parishes offer free subscriptions.",
      },
      {
        name: "Ascension Press",
        url: "https://ascensionpress.com",
        description:
          "Catholic Bible studies, courses, and programs including the popular Bible in a Year and Catechism in a Year podcasts with Fr. Mike Schmitz.",
      },
      {
        name: "Catholic Answers",
        url: "https://www.catholic.com",
        description:
          "Apologetics and evangelization resources to help Catholics understand and share their faith.",
      },
    ],
  },
  {
    heading: "Service & Charity",
    resources: [
      {
        name: "Catholic Charities USA",
        url: "https://www.catholiccharitiesusa.org",
        description:
          "The national network of Catholic Charities agencies serving millions in need across the United States.",
      },
      {
        name: "Catholic Relief Services (CRS)",
        url: "https://www.crs.org",
        description:
          "The official international humanitarian agency of the Catholic community in the United States, serving the poorest and most vulnerable overseas.",
      },
      {
        name: "St. Vincent de Paul Society",
        url: "https://www.svdpusa.org",
        description:
          "A Catholic lay organization dedicated to serving the poor through person-to-person service in local communities.",
      },
      {
        name: "Knights of Columbus",
        url: "https://www.kofc.org",
        description:
          "The world's largest Catholic fraternal service organization, active in parishes throughout our diocese.",
      },
    ],
  },
  {
    heading: "Prayer & Spiritual Life",
    resources: [
      {
        name: "USCCB Daily Readings",
        url: "https://bible.usccb.org/daily-bible-reading",
        description:
          "The daily Mass readings from the United States Conference of Catholic Bishops, available each day.",
      },
      {
        name: "Hallow",
        url: "https://hallow.com",
        description:
          "A Catholic prayer and meditation app offering guided prayers, daily reflections, music, and sleep content.",
      },
      {
        name: "Magnificat",
        url: "https://us.magnificat.net",
        description:
          "A monthly spiritual guide featuring daily Mass prayers, reflections from the saints, and meditations.",
      },
      {
        name: "Saint Meinrad Archabbey",
        url: "https://www.saintmeinrad.edu",
        description:
          "A Benedictine monastery and seminary located in our diocese, offering retreats, theological education, and a place of prayer.",
      },
    ],
  },
  {
    heading: "Indiana Catholic Community",
    resources: [
      {
        name: "Archdiocese of Indianapolis",
        url: "https://www.archindy.org",
        description:
          "The metropolitan see of the Province of Indianapolis, which includes the Diocese of Evansville.",
      },
      {
        name: "Diocese of Fort Wayne-South Bend",
        url: "https://www.diocesefwsb.org",
        description:
          "Our fellow Indiana diocese serving northeastern Indiana.",
      },
      {
        name: "Diocese of Lafayette-in-Indiana",
        url: "https://www.dol-in.org",
        description:
          "Our fellow Indiana diocese serving north-central Indiana.",
      },
      {
        name: "Indiana Catholic Conference",
        url: "https://www.indianacc.org",
        description:
          "The official public policy voice of the Catholic Church in Indiana, representing all five Indiana dioceses.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Catholic Resources & Links"
        subtitle="Helpful links to Catholic organizations, educational resources, and spiritual tools."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Catholic Resources" },
        ]}
      />

      <main id="main-content">
        {resourceGroups.map((group, i) => (
          <section
            key={group.heading}
            className={`section-padding ${i % 2 === 0 ? "bg-warm-white" : "bg-cream"}`}
          >
            <div className="max-w-[1080px] mx-auto">
              <div className="section-label text-left">{group.heading}</div>
              <h2 className="section-title text-left">{group.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                {group.resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-xl p-6 border border-border hover:border-gold/40 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                        {resource.name}
                      </h3>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="w-4 h-4 text-text-light group-hover:text-blue transition-colors flex-shrink-0 mt-1"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                    <p className="text-sm text-text-medium leading-relaxed">
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Suggest a Resource
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              Know of a helpful Catholic resource that should be listed here? Let us know and we will review it for inclusion.
            </p>
            <Link href="/about/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
