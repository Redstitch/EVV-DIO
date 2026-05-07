import Link from "next/link";
import Image from "next/image";
import { ParishMapWrapper } from "@/components/ParishMapWrapper";

export default function Home() {
  return (
    <main id="main-content">
      {/* ─── HERO ─── */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="stained-glass" aria-hidden="true">
          <div className="sg-ray sg-ray-1" />
          <div className="sg-ray sg-ray-2" />
          <div className="sg-ray sg-ray-3" />
          <div className="sg-ray sg-ray-4" />
          <div className="sg-ray sg-ray-5" />
        </div>
        <div className="hero-inner">
          <p className="hero-eyebrow">The Catholic Diocese of Evansville</p>
          <h1 id="hero-title" className="hero-headline">
            Welcome <em>home.</em>
          </h1>
          <p className="hero-lede">
            <b>Forty-five parishes, twenty-six schools, and a Church alive</b>{" "}
            across twelve counties of Southwest Indiana. Wherever you are on the
            journey, you belong here.
          </p>
          <div className="hero-actions">
            <Link href="/parishes/mass-times" className="btn btn-primary">
              Find a Mass time <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/parishes" className="btn btn-outline">
              Find a parish <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <p className="hero-credit">
          <b>St. Benedict Cathedral</b> &middot; Blue Mass 2025
        </p>
      </section>

      {/* ─── QUICK ACTIONS ─── */}
      <section className="quick-actions" aria-label="Quick links">
        <div className="quick-actions-inner">
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href} className="quick-card">
              <span className="quick-icon" dangerouslySetInnerHTML={{ __html: link.icon }} />
              <span className="quick-label">{link.label}</span>
              <span className="quick-desc">{link.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── PARISH FINDER ─── */}
      <section className="hp-parish-finder">
        <div className="hp-parish-inner">
          <div className="hp-parish-head">
            <p className="hp-parish-eyebrow">45 Parishes Across 12 Counties</p>
            <h2 className="hp-parish-headline">Find a Parish <em>Near You</em></h2>
            <p className="hp-parish-desc">
              Search by city, ZIP code, or parish name to find Mass times and parish
              information in the Diocese of Evansville.
            </p>
          </div>
          <div className="hp-parish-map">
            <ParishMapWrapper />
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/parishes" className="btn btn-outline" style={{ fontSize: 13 }}>
              View All Parishes <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PASTORAL PRIORITIES ─── */}
      <section className="priorities-section">
        <div className="priorities-inner">
          <p className="priorities-eyebrow">Pastoral Priorities 2025–2030</p>
          <h2 className="priorities-headline">
            Encounter. Deepen. <em>Engage.</em>
          </h2>
          <p className="priorities-lede">
            Bishop Siegel&rsquo;s pastoral vision calls each of us to meet Christ, grow in faith,
            and serve the world. Three pillars guide everything we do as a diocesan community.
          </p>
          <div className="priorities-grid">
            {priorities.map((p) => (
              <div key={p.title} className="priority-card">
                <span className="priority-num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <Link href={p.href} className="read-link">
                  {p.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BISHOP ─── */}
      <section className="bishop-section" aria-labelledby="bishop-title">
        <div className="bishop-inner">
          <figure className="bishop-portrait">
            <Image
              src="/images/bishop/bishop-siegel.jpg"
              alt="The Most Reverend Joseph M. Siegel, Bishop of the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 280px, 45vw"
              style={{ objectFit: "cover" }}
            />
          </figure>
          <div className="bishop-text">
            <p className="eyebrow">From the Bishop</p>
            <p className="quote" id="bishop-title">
              &ldquo;The Church is not a museum for the perfect. It is a{" "}
              <em>field hospital</em> for the soul.&rdquo;
            </p>
            <p className="attrib">
              <b>The Most Rev. Joseph M. Siegel</b>
              <br />
              Sixth Bishop of the Diocese of Evansville
            </p>
            <Link href="/about/our-bishop" className="btn btn-primary">
              About Bishop Siegel{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STORIES ─── */}
      <section className="stories-section" aria-labelledby="stories-title">
        <div className="stories-head">
          <div>
            <p className="kicker">From <span className="message-masthead"><span className="the">The </span><span className="name">Message</span></span></p>
            <h2 id="stories-title">
              News from the <em>diocese.</em>
            </h2>
          </div>
          <Link href="/the-message" className="all">
            All stories →
          </Link>
        </div>
        <div className="stories-grid">
          {articles.map((a, i) => (
            <Link
              key={a.title}
              href={a.href}
              className={`story-card ${i === 0 ? "lead" : ""}`}
            >
              <div className="img">
                <Image
                  src={a.image}
                  alt={a.alt}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className="meta">
                {a.category} &middot; <b>{a.date}</b>
              </p>
              <h3 dangerouslySetInnerHTML={{ __html: a.title }} />
              <p>{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── SACRAMENTS ─── */}
      <section className="sacraments-section" aria-labelledby="sacraments-title">
        <div className="sacraments-inner">
          <figure className="sacraments-photo">
            <Image
              src="/images/stock/confirmation-stmary.jpg"
              alt="Young Catholics at a Confirmation Mass at St. Mary Parish, Ireland, Indiana."
              fill
              sizes="(max-width: 960px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
          </figure>
          <div className="sacraments-text">
            <p className="kicker">A Life in the Sacraments</p>
            <h2 id="sacraments-title">
              Seven gifts, one <em>grace-filled</em> life.
            </h2>
            <p className="lede">
              From the waters of baptism to the final anointing, the sacraments
              trace the arc of a Catholic life — outward signs of an inward grace.
            </p>
            <ol className="sacraments-list">
              {sacraments.map((s) => (
                <li key={s.label}>
                  <span className="icon" dangerouslySetInnerHTML={{ __html: s.icon }} />
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── IMPACT / CMA ─── */}
      <section className="impact-section" aria-label="Catholic Ministries Appeal">
        <div className="impact-inner">
          <div className="impact-text">
            <p className="impact-eyebrow">Catholic Ministries Appeal</p>
            <h2 className="impact-headline">Your generosity transforms <em>lives.</em></h2>
            <p className="impact-lede">
              The Catholic Ministries Appeal funds the essential work of our diocese — from
              Catholic Charities to seminarian education. Every gift makes a direct impact
              across all 12 counties we serve.
            </p>
            <Link href="/give/appeal" className="btn btn-primary">
              Support the Appeal <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="impact-stats">
            {impactStats.map((s) => (
              <div key={s.label} className="impact-stat">
                <span className="impact-num">{s.num}</span>
                <span className="impact-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── Data ─── */

const quickLinks = [
  {
    label: "Find a Parish",
    desc: "Mass times & locations",
    href: "/parishes",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  },
  {
    label: "Become Catholic",
    desc: "Start the journey",
    href: "/faith/become-catholic",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M2 12h20"/></svg>',
  },
  {
    label: "Catholic Schools",
    desc: "26 schools, Pre-K–12",
    href: "/schools",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19V10l8-6 8 6v9"/><path d="M9 19v-5h6v5"/></svg>',
  },
  {
    label: "Make a Gift",
    desc: "Support our mission",
    href: "/give",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/><path d="M20 12H4"/><rect x="4" y="12" width="16" height="9" rx="1"/></svg>',
  },
  {
    label: "The Message",
    desc: "Diocesan newspaper",
    href: "/the-message",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6"/></svg>',
  },
  {
    label: "Contact Us",
    desc: "We\u2019re here to help",
    href: "/about/contact",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>',
  },
];

const priorities = [
  {
    num: "01",
    title: "Encounter",
    text: "Whether you\u2019re returning to the Church after many years or stepping through the doors for the first time, we\u2019re here to walk with you.",
    cta: "Begin the journey",
    href: "/faith/become-catholic",
  },
  {
    num: "02",
    title: "Deepen",
    text: "Grow in faith through the sacraments, prayer, and formation. Discover the richness of the Catholic tradition through lifelong learning and spiritual growth.",
    cta: "Explore the sacraments",
    href: "/faith",
  },
  {
    num: "03",
    title: "Engage",
    text: "Serve your community through our ministries, support Catholic education, and share the Good News across Southwestern Indiana.",
    cta: "Find your ministry",
    href: "/ministries",
  },
];

const articles = [
  {
    href: "/the-message/article/fifth-sunday-of-easter-year-a-2",
    image: "https://evdiomessage.org/wp-content/uploads/2026/04/p01_or_p06_or_p07___Holy_Week___Holy_Saturday_2026___FOUR__1775841432_39613.jpg",
    alt: "Easter Vigil at St. Benedict Cathedral.",
    category: "Liturgy",
    date: "April 10, 2026",
    title: 'A light in the darkness: Easter <em>Vigil</em> at the cathedral.',
    excerpt: "From darkness to Easter fire — the ancient liturgy marks the heart of the Christian year.",
  },
  {
    href: "/the-message/article/do-promises-really-matter",
    image: "https://evdiomessage.org/wp-content/uploads/2026/04/p01___Dr._Palmer_and_family__1775744140_65409.jpg",
    alt: "Dr. Douglas Palmer with family.",
    category: "Schools",
    date: "April 8, 2026",
    title: 'Washington Catholic names <em>first president.</em>',
    excerpt: "Dr. Douglas Palmer begins a new chapter for Catholic education in Daviess County.",
  },
  {
    href: "/the-message/article/seagull-on-the-sistine-the-rare-gift-of-shared-delight",
    image: "https://evdiomessage.org/wp-content/uploads/2026/04/Folz_and_Riecker_Headshots__1775224519_49623.jpg",
    alt: "Seminarians Folz and Riecker.",
    category: "Vocations",
    date: "April 3, 2026",
    title: 'Two seminarians to be ordained <em>transitional deacons.</em>',
    excerpt: "Folz and Riecker move one step closer to the priesthood this June at the cathedral.",
  },
];

const sacraments = [
  { label: "Baptism", href: "/faith/baptism", icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 C11 12 8 16 8 20 A8 8 0 0 0 24 20 C24 16 21 12 16 4 Z"/></svg>' },
  { label: "Confirmation", href: "/faith/confirmation", icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 C12 10 10 14 10 18 C10 23 13 26 16 28 C19 26 22 23 22 18 C22 14 20 10 16 4 Z"/><path d="M16 14 C15 17 14 19 14 21"/></svg>' },
  { label: "Eucharist", href: "/faith/first-communion", icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6 H24 V10 A8 8 0 0 1 16 18 A8 8 0 0 1 8 10 V6 Z"/><line x1="16" y1="18" x2="16" y2="25"/><line x1="11" y1="26" x2="21" y2="26"/></svg>' },
  { label: "Reconciliation", href: "/faith/prayer-worship", icon: '<svg viewBox="0 0 32 32" fill="currentColor"><rect x="14" y="4" width="4" height="24" rx="1"/><rect x="6" y="12" width="20" height="4" rx="1"/></svg>' },
  { label: "Anointing of the Sick", href: "/faith/anointing", icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 H20 V8 L22 12 V24 A4 4 0 0 1 18 28 H14 A4 4 0 0 1 10 24 V12 L12 8 Z"/><line x1="13" y1="14" x2="19" y2="14"/></svg>' },
  { label: "Holy Orders", href: "/faith/vocations", icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12 L16 4 L24 12 V26 H8 V12 Z"/><line x1="8" y1="18" x2="24" y2="18"/><line x1="16" y1="6" x2="16" y2="14"/><line x1="13" y1="10" x2="19" y2="10"/></svg>' },
  { label: "Matrimony", href: "/faith/marriage", icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="16" r="7"/><circle cx="20" cy="16" r="7"/></svg>' },
];

const impactStats = [
  { num: "$3.7M", label: "Raised in 2025" },
  { num: "45", label: "Parishes Supported" },
  { num: "850", label: "Scholarships Awarded" },
  { num: "2,400", label: "Families Served" },
];
