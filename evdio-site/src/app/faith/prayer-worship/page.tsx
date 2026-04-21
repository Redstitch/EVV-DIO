import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Prayer & Worship Resources",
  description:
    "Explore prayer and worship resources from the Diocese of Evansville. Find daily prayers, devotions, liturgical guides, and ways to deepen your spiritual life.",
};

export default function PrayerWorship() {
  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">Faith &amp; Sacraments</p>
            <h1 id="title">Prayer &amp; <em>Worship.</em></h1>
            <p className="deck">Prayer is the foundation of the Christian life. Whether you are new to prayer or looking to deepen an existing practice, these resources are here to help.</p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/blue-mass-cathedral.jpg"
              alt="Liturgical celebration at St. Benedict Cathedral."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* Daily Prayers */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Daily Prayer</div>
              <h2 className="section-title">Prayers for Every Day</h2>
              <p className="section-subtitle mx-auto">
                These foundational prayers of the Catholic faith can be prayed at any time, anywhere. They connect us to the living tradition of the Church across centuries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PrayerCard
                title="Morning Offering"
                text="O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world."
              />
              <PrayerCard
                title="The Our Father"
                text="Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen."
              />
              <PrayerCard
                title="Hail Mary"
                text="Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
              />
              <PrayerCard
                title="Glory Be"
                text="Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen."
              />
              <PrayerCard
                title="Act of Contrition"
                text="O my God, I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of heaven and the pains of hell, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen."
              />
              <PrayerCard
                title="Prayer to St. Michael"
                text="Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, cast into hell Satan, and all the evil spirits, who prowl about the world seeking the ruin of souls. Amen."
              />
            </div>
          </div>
        </section>

        {/* Devotions */}
        <section className="section-padding bg-cream">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">Catholic Devotions</div>
              <h2 className="section-title">Deepen Your Prayer Life</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DevotionCard
                title="The Rosary"
                desc="The Rosary is a meditation on the mysteries of Christ's life, prayed through the intercession of the Blessed Virgin Mary. It is one of the most beloved and powerful prayers of the Catholic tradition. Many parishes in the Diocese of Evansville pray the Rosary before daily Mass."
              />
              <DevotionCard
                title="Eucharistic Adoration"
                desc="In Eucharistic Adoration, the Blessed Sacrament is exposed in a monstrance so that the faithful may pray in the Real Presence of Christ. Several parishes across the diocese offer perpetual or scheduled adoration hours. This is a profound way to deepen your relationship with the Lord."
              />
              <DevotionCard
                title="Stations of the Cross"
                desc="The Stations of the Cross follow Jesus on His journey from His condemnation to His burial. This devotion is especially popular during Lent and is prayed in parishes throughout the diocese on Fridays during the Lenten season."
              />
              <DevotionCard
                title="Liturgy of the Hours"
                desc="The Liturgy of the Hours, also known as the Divine Office, is the daily prayer of the Church. It sanctifies the hours of the day through psalms, readings, and prayers. While priests and religious are obliged to pray it, all the faithful are encouraged to participate."
              />
            </div>
          </div>
        </section>

        {/* Liturgical Resources */}
        <section className="section-padding bg-warm-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <div className="section-label">For Parishes</div>
              <h2 className="section-title">Worship & Liturgical Resources</h2>
              <p className="section-subtitle mx-auto">
                Resources for parish liturgical ministers, musicians, and worship committees to support beautiful and reverent celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Office of Worship"
                desc="The diocesan Office of Worship provides guidance on liturgical norms, sacramental preparation, and worship training for parishes across the diocese."
              />
              <ResourceCard
                title="Lector & Extraordinary Minister Training"
                desc="Formation and resources for those who serve as lectors (readers) and extraordinary ministers of Holy Communion at Mass."
              />
              <ResourceCard
                title="Liturgical Calendar"
                desc="Access the diocesan liturgical calendar for feast days, solemnities, and special observances throughout the year."
                href="/faith/calendar"
              />
              <ResourceCard
                title="Music Resources"
                desc="Guidelines, suggested hymn lists, and resources for parish music directors and choirs."
                href="/faith/music"
              />
              <ResourceCard
                title="Environment & Art"
                desc="Best practices for liturgical environment, seasonal decorations, and sacred art in worship spaces."
              />
              <ResourceCard
                title="RCIA / OCIA Resources"
                desc="Materials and guidance for parish OCIA teams preparing catechumens and candidates for the sacraments of initiation."
                href="/faith/become-catholic"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="section-label text-gold">Go Deeper</div>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-4">
              Want to Grow in Prayer?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-[560px] mx-auto">
              Your parish is the best place to start. Many parishes offer prayer groups, adoration hours, and spiritual direction. Find a parish near you and get connected.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/parishes" className="btn btn-primary">
                Find a Parish
              </Link>
              <Link href="/faith/calendar" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                View the Church Calendar
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function PrayerCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-border">
      <h3 className="font-heading text-lg font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed italic">{text}</p>
    </div>
  );
}

function DevotionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-8 shadow-[var(--shadow-soft)]">
      <h3 className="font-heading text-2xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function ResourceCard({ title, desc, href }: { title: string; desc: string; href?: string }) {
  const content = (
    <>
      <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-blue transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text-medium leading-relaxed">{desc}</p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all group block"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-[var(--shadow-soft)] group">
      {content}
    </div>
  );
}
