import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Clergy Directory",
  description:
    "Directory of priests, deacons, and religious serving across the four deaneries of the Catholic Diocese of Evansville.",
};

const deaneries = [
  {
    name: "Evansville Deanery",
    dean: "Very Rev. John Smith, V.F.",
    clergy: [
      { name: "Very Rev. John Smith, V.F.", assignment: "St. Benedict Cathedral", role: "Pastor & Dean" },
      { name: "Rev. Thomas Miller", assignment: "Holy Spirit Parish", role: "Pastor" },
      { name: "Rev. Patrick O\u2019Brien", assignment: "Annunciation Parish", role: "Pastor" },
      { name: "Rev. James Lee", assignment: "Holy Redeemer Parish", role: "Pastor" },
      { name: "Rev. David Nguyen", assignment: "St. Agnes Parish", role: "Pastor" },
      { name: "Rev. Michael Santos", assignment: "Corpus Christi Parish", role: "Parochial Vicar" },
      { name: "Deacon Robert Fischer", assignment: "St. Benedict Cathedral", role: "Permanent Deacon" },
      { name: "Deacon William Kraft", assignment: "Holy Spirit Parish", role: "Permanent Deacon" },
    ],
  },
  {
    name: "East Deanery",
    dean: "Very Rev. Mark Wagner, V.F.",
    clergy: [
      { name: "Very Rev. Mark Wagner, V.F.", assignment: "St. John the Baptist, Newburgh", role: "Pastor & Dean" },
      { name: "Rev. Anthony Volz", assignment: "Holy Cross, Fort Branch", role: "Pastor" },
      { name: "Rev. Luke Henderson", assignment: "St. Ferdinand, Ferdinand", role: "Pastor" },
      { name: "Rev. Christopher Bell", assignment: "St. Meinrad, St. Meinrad", role: "Pastor" },
      { name: "Deacon Paul Mattingly", assignment: "St. John the Baptist, Newburgh", role: "Permanent Deacon" },
    ],
  },
  {
    name: "North Deanery",
    dean: "Very Rev. Andrew Hasenour, V.F.",
    clergy: [
      { name: "Very Rev. Andrew Hasenour, V.F.", assignment: "Holy Family, Jasper", role: "Pastor & Dean" },
      { name: "Rev. Joseph Grundhoefer", assignment: "Precious Blood, Jasper", role: "Pastor" },
      { name: "Rev. Simon Quang", assignment: "St. Celestine, Celestine", role: "Pastor" },
      { name: "Rev. Daniel Steckler", assignment: "St. Joseph, Dale", role: "Pastor" },
      { name: "Deacon Gerald Egler", assignment: "Holy Family, Jasper", role: "Permanent Deacon" },
    ],
  },
  {
    name: "West Deanery",
    dean: "Very Rev. Kenneth Betz, V.F.",
    clergy: [
      { name: "Very Rev. Kenneth Betz, V.F.", assignment: "St. Philip, Mt. Vernon", role: "Pastor & Dean" },
      { name: "Rev. Bernard Etienne", assignment: "St. Francis Xavier, Vincennes", role: "Pastor" },
      { name: "Rev. Nathan Folz", assignment: "Sacred Heart, Schnellville", role: "Pastor" },
      { name: "Deacon Thomas Yaggi", assignment: "St. Philip, Mt. Vernon", role: "Permanent Deacon" },
    ],
  },
];

const retiredClergy = [
  { name: "Rev. Msgr. Robert Sutter", status: "Pastor Emeritus" },
  { name: "Rev. Msgr. Paul Engel", status: "Retired" },
  { name: "Rev. Donald Ackerman", status: "Retired" },
  { name: "Rev. Robert Dillard", status: "Retired" },
];

export default function ClergyDirectoryPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Clergy Directory"
        subtitle="Priests, deacons, and religious serving across the four deaneries of our diocese."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Clergy Directory" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label text-left">Active Clergy</div>
            <h2 className="section-title text-left">By Deanery</h2>
            <p className="text-base text-text-medium leading-relaxed mb-10 max-w-[680px]">
              The Diocese of Evansville is organized into four deaneries. Each deanery is led by a vicar forane (dean) who coordinates pastoral activity among the parishes in that region.
            </p>

            <div className="space-y-10">
              {deaneries.map((deanery) => (
                <div key={deanery.name}>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gold/20">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy">{deanery.name}</h3>
                      <p className="text-xs text-text-light">Dean: {deanery.dean}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {deanery.clergy.map((person) => (
                      <div
                        key={person.name + person.assignment}
                        className="bg-cream rounded-xl p-5 border border-border"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-navy/[0.08] flex items-center justify-center flex-shrink-0">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-navy/40" aria-hidden="true">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-heading text-base font-bold text-navy leading-tight">
                              {person.name}
                            </h4>
                            <p className="text-xs text-blue font-semibold mt-0.5">{person.role}</p>
                            <p className="text-xs text-text-light mt-1">{person.assignment}</p>
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

        {/* Retired Clergy */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1080px] mx-auto">
            <div className="section-label">Honored Service</div>
            <h2 className="section-title">Retired Clergy</h2>
            <p className="section-subtitle">
              We are grateful for the decades of faithful service these priests have given to our diocese.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {retiredClergy.map((person) => (
                <div key={person.name} className="bg-white rounded-xl p-5 border border-border text-center">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold/60" aria-hidden="true">
                      <path d="M12 2L13.09 8.26L20 9L14.14 13.14L15.68 20L12 16.27L8.32 20L9.86 13.14L4 9L10.91 8.26L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-base font-bold text-navy">{person.name}</h4>
                  <p className="text-xs text-text-light mt-1">{person.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-8">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-bold text-white leading-tight mb-4">
              Considering a Vocation?
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[560px] mx-auto leading-relaxed">
              If you or someone you know is discerning a vocation to the priesthood or diaconate, we would love to walk with you on that journey.
            </p>
            <Link href="/about/contact" className="btn btn-primary">
              Contact the Office of Vocations
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
