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
        {/* ─── DAILY PRAYERS ─── */}
        <section className="page-content section-warm">
          <div className="section-head">
            <span className="section-tag">Daily Prayer</span>
            <h2 className="section-h2">Prayers for Every Day</h2>
            <p className="section-desc">
              These foundational prayers of the Catholic faith can be prayed at any time, anywhere. They connect us to the living tradition of the Church across centuries.
            </p>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Morning Offering</h3>
              <p style={{ fontStyle: "italic" }}>O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>The Our Father</h3>
              <p style={{ fontStyle: "italic" }}>Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Hail Mary</h3>
              <p style={{ fontStyle: "italic" }}>Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Glory Be</h3>
              <p style={{ fontStyle: "italic" }}>Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Act of Contrition</h3>
              <p style={{ fontStyle: "italic" }}>O my God, I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of heaven and the pains of hell, but most of all because they offend Thee, my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Prayer to St. Michael</h3>
              <p style={{ fontStyle: "italic" }}>Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, cast into hell Satan, and all the evil spirits, who prowl about the world seeking the ruin of souls. Amen.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── DEVOTIONS ─── */}
        <section className="page-content section-cream">
          <div className="section-head">
            <span className="section-tag">Catholic Devotions</span>
            <h2 className="section-h2">Deepen Your Prayer Life</h2>
          </div>

          <div className="interior-grid interior-grid-2" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>The Rosary</h3>
              <p>The Rosary is a meditation on the mysteries of Christ&#8217;s life, prayed through the intercession of the Blessed Virgin Mary. It is one of the most beloved and powerful prayers of the Catholic tradition. Many parishes in the Diocese of Evansville pray the Rosary before daily Mass.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Eucharistic Adoration</h3>
              <p>In Eucharistic Adoration, the Blessed Sacrament is exposed in a monstrance so that the faithful may pray in the Real Presence of Christ. Several parishes across the diocese offer perpetual or scheduled adoration hours. This is a profound way to deepen your relationship with the Lord.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Stations of the Cross</h3>
              <p>The Stations of the Cross follow Jesus on His journey from His condemnation to His burial. This devotion is especially popular during Lent and is prayed in parishes throughout the diocese on Fridays during the Lenten season.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Liturgy of the Hours</h3>
              <p>The Liturgy of the Hours, also known as the Divine Office, is the daily prayer of the Church. It sanctifies the hours of the day through psalms, readings, and prayers. While priests and religious are obliged to pray it, all the faithful are encouraged to participate.</p>
            </div>
          </div>
        </section>

        <div className="page-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <hr className="section-divider" />
        </div>

        {/* ─── LITURGICAL RESOURCES ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">For Parishes</span>
            <h2 className="section-h2">Worship &amp; Liturgical Resources</h2>
            <p className="section-desc">
              Resources for parish liturgical ministers, musicians, and worship committees to support beautiful and reverent celebrations.
            </p>
          </div>

          <div className="interior-grid interior-grid-3" style={{ marginTop: 32 }}>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Office of Worship</h3>
              <p>The diocesan Office of Worship provides guidance on liturgical norms, sacramental preparation, and worship training for parishes across the diocese.</p>
            </div>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Lector &amp; Extraordinary Minister Training</h3>
              <p>Formation and resources for those who serve as lectors (readers) and extraordinary ministers of Holy Communion at Mass.</p>
            </div>
            <Link href="/faith/calendar" className="interior-card">
              <h3>Liturgical Calendar</h3>
              <p>Access the diocesan liturgical calendar for feast days, solemnities, and special observances throughout the year.</p>
            </Link>
            <Link href="/faith/music" className="interior-card">
              <h3>Music Resources</h3>
              <p>Guidelines, suggested hymn lists, and resources for parish music directors and choirs.</p>
            </Link>
            <div className="interior-card" style={{ cursor: "default" }}>
              <h3>Environment &amp; Art</h3>
              <p>Best practices for liturgical environment, seasonal decorations, and sacred art in worship spaces.</p>
            </div>
            <Link href="/faith/become-catholic" className="interior-card">
              <h3>RCIA / OCIA Resources</h3>
              <p>Materials and guidance for parish OCIA teams preparing catechumens and candidates for the sacraments of initiation.</p>
            </Link>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="page-content section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2">Want to Grow in Prayer?</h2>
          <p className="section-desc">
            Your parish is the best place to start. Many parishes offer prayer groups, adoration hours, and spiritual direction. Find a parish near you and get connected.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
            <Link href="/parishes" className="btn btn-primary">
              Find a Parish
            </Link>
            <Link href="/faith/calendar" className="btn btn-outline">
              View the Church Calendar
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
