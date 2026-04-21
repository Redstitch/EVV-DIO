import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Youth & Young Adults",
  description:
    "Youth and young adult ministry in the Diocese of Evansville. Programs, retreats, and community for teens and young adults growing in faith.",
};

export default function YouthPage() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Ministries</p>
            <h1 id="title">Youth &amp; Young <em>Adults.</em></h1>
            <p className="deck">Encounter Christ. Build community. Discover your purpose.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/confirmation-stmary.jpg"
              alt="Confirmation at St. Mary"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="bg-white rounded-xl border border-border p-8 mb-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-text-medium leading-relaxed mb-4">
                The Office of Youth and Young Adult Ministry serves teens and young adults (ages 13-35) across the Diocese of Evansville. We create spaces where young people can encounter Jesus, build genuine friendships, ask honest questions, and discover their unique calling in the Church and the world.
              </p>
              <p className="text-text-medium leading-relaxed">
                From high school retreats and summer camps to young adult small groups and service trips, we meet young people where they are and invite them into a deeper relationship with Christ and his Church.
              </p>
            </div>

            <h2 className="font-heading text-2xl font-bold text-navy mb-6">High School Ministry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Youth Encounter Weekends</h3>
                <p className="text-sm text-text-medium leading-relaxed">Powerful retreat weekends featuring music, talks by young Catholic speakers, small groups, Adoration, and the sacraments. Held three times per year.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Summer Mission Trips</h3>
                <p className="text-sm text-text-medium leading-relaxed">Week-long service trips where teens serve communities in need while deepening their faith through prayer and reflection.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Diocesan Youth Rally</h3>
                <p className="text-sm text-text-medium leading-relaxed">An annual gathering bringing together hundreds of Catholic teens from across all four deaneries for worship, speakers, and fellowship.</p>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-bold text-navy mb-6">Young Adult Ministry (18-35)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Theology on Tap</h3>
                <p className="text-sm text-text-medium leading-relaxed">Casual monthly gatherings in local venues featuring a speaker on a topic of faith, followed by open discussion and fellowship.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Young Adult Small Groups</h3>
                <p className="text-sm text-text-medium leading-relaxed">Bible studies, book clubs, and faith-sharing groups meeting weekly at parishes across the diocese.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">Service & Social Events</h3>
                <p className="text-sm text-text-medium leading-relaxed">Volunteer projects, outdoor adventures, game nights, and pilgrimages that build community and put faith into action.</p>
              </div>
            </div>

            <div className="bg-accent-red rounded-xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-white mb-3">Get Involved</h2>
              <p className="text-white/80 text-sm mb-6 max-w-[500px] mx-auto">
                Whether you are a teen, a young adult, or a parish volunteer, we would love to connect with you. Reach out to our Youth Ministry Office.
              </p>
              <div className="text-gold font-semibold">youth@evdio.org | (812) 424-5536</div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/ministries" className="btn btn-secondary">
                All Ministries
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
