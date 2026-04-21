import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retreats",
  description:
    "Catholic retreats at the Sarto Retreat Center and other locations across the Diocese of Evansville. Men's, women's, youth, and couples retreats.",
};

export default function RetreatsPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">EVENTS</p>
            <h1 id="title"><em>Retreats.</em></h1>
            <p className="deck">Step away from the everyday and encounter God in a deeper way.</p>
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
        {/* Sarto Retreat Center */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start mb-14">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] tracking-[2.5px] uppercase text-gold font-semibold mb-3">
                  Our Retreat Home
                </div>
                <h2 className="font-heading text-[clamp(28px,4vw,36px)] font-bold text-navy mb-4">
                  Sarto Retreat Center
                </h2>
                <p className="text-text-medium text-sm leading-relaxed mb-4">
                  Nestled in the rolling hills of Southwestern Indiana, the Sarto Retreat Center has been a place of spiritual renewal for Catholics across the diocese for decades. Named after Pope St. Pius X (Giuseppe Sarto), the center offers a peaceful setting for prayer, reflection, and encounter with God.
                </p>
                <p className="text-text-medium text-sm leading-relaxed mb-4">
                  The center accommodates groups of up to 60 overnight guests and offers a chapel, conference rooms, dining facilities, and beautiful grounds for walking and prayer. Whether you are seeking a personal day of reflection or a weekend group retreat, Sarto provides the space and hospitality you need.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/events/spaces" className="btn btn-secondary text-sm">
                    Reserve a Space
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm text-text-medium">
                  <div>
                    <strong className="text-navy block text-xs uppercase tracking-wider mb-0.5">Address</strong>
                    Sarto Retreat Center<br />4200 Kentucky Avenue<br />Evansville, IN 47714
                  </div>
                  <div>
                    <strong className="text-navy block text-xs uppercase tracking-wider mb-0.5">Phone</strong>
                    (812) 464-1042
                  </div>
                  <div>
                    <strong className="text-navy block text-xs uppercase tracking-wider mb-0.5">Email</strong>
                    retreats@evdio.org
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Retreats */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="font-heading text-[clamp(24px,3.5vw,32px)] font-bold text-navy mb-8">
              Upcoming Retreats
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <RetreatCard
                title="Men's Silent Retreat"
                dates="April 18-20, 2026"
                director="Fr. Thomas Haan"
                description="A weekend of silence, prayer, and reflection for men seeking to deepen their relationship with Christ. Includes directed meditation, access to the sacraments, and optional spiritual direction."
                type="Men"
              />
              <RetreatCard
                title="Women's Spring Retreat"
                dates="May 1-3, 2026"
                director="Sr. Maria Grace, OSB"
                description="An invitation for women of all ages to encounter the joy and peace of the Risen Lord. Talks, small group sharing, Adoration, and time for personal prayer."
                type="Women"
              />
              <RetreatCard
                title="Couples Enrichment Weekend"
                dates="May 15-17, 2026"
                director="Deacon Mark & Lisa Thompson"
                description="Strengthen your marriage through guided conversations, prayer as a couple, and presentations on communication, forgiveness, and growing together in faith."
                type="Couples"
              />
              <RetreatCard
                title="Young Adult Encounter"
                dates="June 5-7, 2026"
                director="Campus Ministry Team"
                description="For adults ages 18-35 seeking meaning, community, and a deeper faith. Music, testimonies, Adoration, and small group discussions in a welcoming environment."
                type="Young Adults"
              />
              <RetreatCard
                title="Priests' Annual Retreat"
                dates="June 15-19, 2026"
                director="Bishop Joseph M. Siegel"
                description="The annual gathering of diocesan priests for fraternity, prayer, and spiritual renewal under the guidance of the Bishop."
                type="Clergy"
              />
              <RetreatCard
                title="High School Summer Retreat"
                dates="July 10-12, 2026"
                director="Youth Ministry Office"
                description="A dynamic weekend for high school students featuring praise and worship, speakers, small groups, outdoor activities, and encounters with the sacraments."
                type="Youth"
              />
            </div>
          </div>
        </section>

        {/* Private Retreats */}
        <section className="bg-navy py-14 px-8">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(24px,3vw,32px)] font-bold text-white mb-3">
              Private & Group Retreats
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-[600px] mx-auto leading-relaxed">
              The Sarto Retreat Center is available for parish groups, school faculties, ministry teams, and individuals seeking a personal retreat. Contact us to plan your retreat.
            </p>
            <Link href="mailto:retreats@evdio.org" className="btn btn-primary">
              Inquire About a Retreat
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function RetreatCard({
  title,
  dates,
  director,
  description,
  type,
}: {
  title: string;
  dates: string;
  director: string;
  description: string;
  type: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-7 hover:shadow-[var(--shadow-card)] transition-shadow flex flex-col">
      <span className="inline-block bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded self-start mb-4">
        {type}
      </span>
      <h3 className="font-heading text-xl font-bold text-navy mb-1">{title}</h3>
      <div className="text-xs text-blue font-semibold mb-1">{dates}</div>
      <div className="text-xs text-text-light mb-3">Director: {director}</div>
      <p className="text-sm text-text-medium leading-relaxed flex-1">{description}</p>
    </div>
  );
}
