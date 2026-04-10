import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Watch Mass Online",
  description:
    "Watch Catholic Mass online from parishes in the Diocese of Evansville. Livestreamed and recorded Masses for the homebound and those unable to attend in person.",
};

export default function WatchMassPage() {
  return (
    <>
      <PageHero
        label="Parishes & Mass"
        title="Watch Mass Online"
        subtitle="Join us in worship from wherever you are. Livestreamed Masses from parishes across the diocese."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Parishes & Mass", href: "/parishes" },
          { label: "Watch Mass Online" },
        ]}
      />

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-8">
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">About Online Mass</h2>
              <p className="text-text-medium text-sm leading-relaxed mb-4">
                While nothing replaces the grace of attending Mass in person, we understand that illness, mobility challenges, travel, and other circumstances may prevent you from being physically present. Several parishes in the Diocese of Evansville offer livestreamed Masses so you can participate in worship from your home.
              </p>
              <div className="bg-cream rounded-lg p-5 border-l-4 border-gold">
                <p className="text-sm text-navy font-medium">
                  <strong>Note:</strong> Watching Mass online does not fulfill the Sunday obligation for those who are able to attend in person. If you are homebound or ill, please contact your parish about receiving Communion from an Extraordinary Minister.
                </p>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-bold text-navy mb-6">Livestreaming Parishes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <StreamCard
                parish="St. Benedict Cathedral"
                location="Evansville"
                schedule="Sunday 10:30 AM"
                platform="YouTube & Facebook"
                link="https://youtube.com"
              />
              <StreamCard
                parish="Holy Rosary"
                location="Evansville"
                schedule="Sunday 10:00 AM"
                platform="Facebook Live"
                link="https://facebook.com"
              />
              <StreamCard
                parish="St. Joseph"
                location="Jasper"
                schedule="Saturday 5:00 PM, Sunday 8:00 AM & 10:30 AM"
                platform="YouTube"
                link="https://youtube.com"
              />
              <StreamCard
                parish="Annunciation"
                location="Evansville"
                schedule="Sunday 9:00 AM"
                platform="Parish Website"
                link="https://annunciationevansville.org"
              />
              <StreamCard
                parish="Holy Family"
                location="Jasper"
                schedule="Sunday 10:00 AM"
                platform="Facebook Live"
                link="https://facebook.com"
              />
              <StreamCard
                parish="St. Meinrad"
                location="St. Meinrad"
                schedule="Daily (Archabbey schedule)"
                platform="YouTube"
                link="https://youtube.com"
              />
            </div>

            <div className="bg-navy rounded-xl p-8 text-center">
              <h3 className="font-heading text-2xl font-bold text-white mb-3">National Catholic Resources</h3>
              <p className="text-white/70 text-sm mb-6 max-w-[500px] mx-auto">
                Additional online Mass options are available through national Catholic broadcasters.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://www.catholictv.org" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white rounded-lg px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
                  CatholicTV
                </a>
                <a href="https://www.ewtn.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white rounded-lg px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
                  EWTN
                </a>
                <a href="https://www.wordonfire.org" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white rounded-lg px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
                  Word on Fire
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function StreamCard({
  parish,
  location,
  schedule,
  platform,
  link,
}: {
  parish: string;
  location: string;
  schedule: string;
  platform: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 hover:shadow-[var(--shadow-soft)] transition-shadow">
      <h3 className="font-heading text-xl font-bold text-navy mb-1">{parish}</h3>
      <p className="text-xs text-text-light mb-3">{location}</p>
      <div className="space-y-2 text-sm text-text-medium mb-4">
        <div className="flex items-start gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold flex-shrink-0 mt-0.5" aria-hidden="true">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
          </svg>
          <span>{schedule}</span>
        </div>
        <div className="flex items-start gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold flex-shrink-0 mt-0.5" aria-hidden="true">
            <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
          </svg>
          <span>{platform}</span>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue text-sm font-semibold hover:text-navy transition-colors"
      >
        Watch Live &rarr;
      </a>
    </div>
  );
}
