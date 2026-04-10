import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mission & Outreach | Diocese of Evansville",
  description:
    "Mission and outreach ministries of the Diocese of Evansville. Local, national, and international service and evangelization.",
};

export default function MissionOutreachPage() {
  return (
    <>
      <PageHero
        label="Ministries"
        title="Mission & Outreach"
        subtitle="Called to go forth and make disciples. Serving our neighbors near and far."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ministries", href: "/ministries" },
          { label: "Mission & Outreach" },
        ]}
      />

      <main id="main-content">
        {/* Mission */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Our Calling</div>
              <h2 className="section-title">Go and Make Disciples</h2>
              <p className="text-base text-text-medium leading-relaxed max-w-[680px] mx-auto">
                The Mission and Outreach Ministry of the Diocese of Evansville coordinates local, national, and international mission activities. We believe that every Catholic is called to be a missionary, whether that means serving in your own parish, traveling to serve communities in need, or supporting mission work through prayer and financial contributions.
              </p>
            </div>
          </div>
        </section>

        {/* Local Outreach */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Local Mission</div>
              <h2 className="section-title">Serving Our Community</h2>
              <p className="section-subtitle mx-auto">
                Across our 12 counties, parishes and diocesan organizations reach out to those in need through direct service, advocacy, and community partnership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <OutreachCard
                title="Catholic Charities"
                desc="The charitable arm of the diocese provides emergency assistance, food pantries, counseling, adoption services, refugee resettlement, and disaster relief. Catholic Charities served over 2,400 families last year."
              />
              <OutreachCard
                title="St. Vincent de Paul Society"
                desc="Parish-based conferences of the Society of St. Vincent de Paul make home visits to families in need, providing rent assistance, utility help, food, and clothing, all with the personal touch of Christian friendship."
              />
              <OutreachCard
                title="Parish Food Pantries"
                desc="Many parishes operate food pantries and community meals programs, providing nutritious food to hungry families. Parish volunteers collect, sort, and distribute food throughout the year."
              />
              <OutreachCard
                title="Habitat for Humanity"
                desc="Parishes and schools partner with Habitat for Humanity to build affordable housing. Volunteer build days bring parishioners together for hands-on service in their communities."
              />
              <OutreachCard
                title="Disaster Response"
                desc="When disasters strike our region, the diocese coordinates volunteer response teams, donation drives, and long-term recovery support in partnership with Catholic Charities USA."
              />
              <OutreachCard
                title="Community Gardens"
                desc="Several parishes maintain community gardens that provide fresh produce to food-insecure families and teach sustainable gardening practices. These gardens are places of fellowship and environmental stewardship."
              />
            </div>
          </div>
        </section>

        {/* National & International */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Beyond Our Borders</div>
              <h2 className="section-title">National & International Mission</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Mission Trips</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  The diocese coordinates mission trip opportunities for parishioners and youth groups to serve communities in Appalachia, the U.S.-Mexico border region, and international mission sites. Trips include service projects, cultural immersion, and spiritual reflection.
                </p>
                <p className="text-sm text-text-medium leading-relaxed">
                  Past missions have included construction projects, medical clinics, vacation Bible school programs, and community development initiatives.
                </p>
              </div>

              <div className="bg-cream rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Mission Collections</h3>
                <p className="text-sm text-text-medium leading-relaxed mb-4">
                  The diocese participates in national and papal mission collections throughout the year, including:
                </p>
                <ul className="space-y-2 text-sm text-text-medium">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Catholic Relief Services (CRS) Collection</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>World Mission Sunday (Propagation of the Faith)</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Catholic Campaign for Human Development</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Peter&rsquo;s Pence</span></li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" /><span>Holy Land Collection</span></li>
                </ul>
              </div>

              <div className="bg-cream rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Sister Diocese Relationships</h3>
                <p className="text-sm text-text-medium leading-relaxed">
                  The Diocese of Evansville maintains relationships with Catholic communities in developing nations, providing financial support, prayer partnerships, and exchange visits. These sister diocese relationships foster solidarity and mutual enrichment between our communities of faith.
                </p>
              </div>

              <div className="bg-cream rounded-xl border border-border p-7">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">Prayer & Spiritual Support</h3>
                <p className="text-sm text-text-medium leading-relaxed">
                  Not everyone can travel on a mission trip, but everyone can be a missionary through prayer. We encourage all parishioners to pray daily for missionaries, for the conversion of hearts, and for peace and justice throughout the world. The Rosary, Holy Hours, and parish prayer chains are powerful tools of mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="section-padding bg-cream">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-10">
              <div className="section-label">Take Action</div>
              <h2 className="section-title">Ways to Get Involved</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <ActionCard title="Volunteer Locally" desc="Serve at a food pantry, build a house, visit the homebound, or tutor a child. Your local parish can connect you with opportunities." />
              <ActionCard title="Join a Mission Trip" desc="Travel with a team to serve communities in need. Trips are open to adults, families, and youth groups." />
              <ActionCard title="Give to Missions" desc="Support mission work through the Catholic Ministries Appeal, national collections, or direct gifts to mission organizations." />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Be a Missionary</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              The World Needs Your Witness
            </h2>
            <p className="text-base text-white/70 mb-6 leading-relaxed max-w-[560px] mx-auto">
              Contact the Mission and Outreach Office to learn about volunteer opportunities, mission trips, and ways to support the Church&rsquo;s mission around the world.
            </p>
            <div className="text-gold font-semibold text-lg mb-8">(812) 424-5536 | mission@evdio.org</div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/ministries/social-justice" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Social Justice
              </Link>
              <Link href="/ministries" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                All Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function OutreachCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-7 shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function ActionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 text-center">
      <h3 className="font-heading text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}
