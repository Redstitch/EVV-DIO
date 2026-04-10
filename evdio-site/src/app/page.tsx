import Link from "next/link";
import Image from "next/image";

import { AnimatedStats } from "@/components/AnimatedStats";

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO
          ───────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-grain" />

        {/* Decorative gold circle motif */}
        <div className="hero-orb" aria-hidden="true" />
        <div className="hero-orb-inner" aria-hidden="true" />

        {/* Content */}
        <div className="hero-inner">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-rule" />
            The Catholic Church in Southwestern Indiana
          </span>

          <h1 className="hero-headline">
            <span className="hero-headline-light">Encounter. Deepen.</span>
            <span className="hero-headline-bold">Engage.</span>
          </h1>

          <p className="hero-sub">
            Whether you&rsquo;ve been Catholic your whole life, are raising a family
            in the faith, just moved to the area, or are curious about what we
            believe &mdash; there&rsquo;s a place for you here.
          </p>

          <div className="hero-actions">
            <Link href="/parishes" className="hero-btn-gold">
              Find a Parish Near You
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link href="/faith/become-catholic" className="hero-btn-ghost">
              How to Become Catholic
            </Link>
            <Link href="/parishes/mass-times" className="hero-btn-ghost">
              Mass Times
            </Link>
          </div>

          <p className="hero-stats-line">
            45 parishes &middot; 26 schools &middot; 12 counties &middot; 79,500 Catholics
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* ─────────────────────────────────────────────
            QUICK ACCESS CARDS
            ───────────────────────────────────────────── */}
        <section className="quick-section">
          <div className="container-wide">
            <div className="quick-grid">
              {quickCards.map((card) => (
                <Link key={card.title} href={card.href} className="qcard">
                  <div className="qcard-accent" />
                  <div className="qcard-icon" dangerouslySetInnerHTML={{ __html: card.icon }} />
                  <h3 className="qcard-title">{card.title}</h3>
                  <p className="qcard-text">{card.text}</p>
                  <span className="qcard-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            THE MESSAGE — STORIES
            ───────────────────────────────────────────── */}
        <section className="stories-section">
          <div className="stories-rule" />
          <div className="container-wide">
            <div className="section-head">
              <span className="section-tag">The Message</span>
              <h2 className="section-h2">Stories of Faith &amp; Community</h2>
              <p className="section-desc">
                Catholic journalism serving Southwestern Indiana since 1970.
                News, reflections, and voices from across our diocese.
              </p>
            </div>

            <div className="story-grid">
              {articles.map((a) => (
                <Link key={a.title} href={a.href} className="story-card">
                  <div className="story-img" style={{ backgroundImage: `url('${a.image}')` }}>
                    <span className="story-badge">{a.category}</span>
                  </div>
                  <div className="story-body">
                    <time className="story-date">{a.date}</time>
                    <h3 className="story-title">{a.title}</h3>
                    <p className="story-excerpt">{a.excerpt}</p>
                    <span className="story-more">
                      Read More
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="section-cta-row">
              <Link href="/the-message" className="btn-navy">
                Read More from The Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            IMPACT / MINISTRY SPOTLIGHT
            ───────────────────────────────────────────── */}
        <section className="impact-section">
          <div className="container-wide">
            <div className="impact-layout">
              <div className="impact-visual">
                <div className="impact-img-wrap">
                  <Image
                    src="/images/articles/become-one.jpg"
                    alt="Catholic Ministries serving the community"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="impact-img"
                  />
                </div>
                <div className="impact-badge">
                  <span className="impact-badge-num">2,400</span>
                  <span className="impact-badge-label">Families Served</span>
                </div>
              </div>

              <div className="impact-content">
                <span className="section-tag section-tag-left">Making a Difference</span>
                <h2 className="section-h2 section-h2-left">
                  Our Ministries<br />Touch Every Life
                </h2>
                <p className="impact-text">
                  From marriage preparation to youth programs, from supporting
                  families in crisis to welcoming those exploring the Catholic
                  faith, our ministries serve the whole community. Every gift and
                  every volunteer hour makes this work possible.
                </p>
                <AnimatedStats />
                <Link href="/ministries" className="btn-gold">
                  Explore Our Ministries
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            GIVING CTA BANNER
            ───────────────────────────────────────────── */}
        <section className="giving-section">
          <div className="giving-orb giving-orb-1" />
          <div className="giving-orb giving-orb-2" />

          <div className="container-wide giving-inner">
            <div className="giving-content">
              <span className="giving-tag">
                <span className="giving-tag-rule" />
                Catholic Ministries Appeal
              </span>
              <h2 className="giving-h2">
                Your Generosity Builds<br />a Stronger Diocese
              </h2>
              <p className="giving-desc">
                Every gift to the Catholic Ministries Appeal directly supports our
                parishes, schools, and charitable ministries. Last year, your
                generosity funded 850 scholarships, served 2,400 families through
                Catholic Charities, and sustained faith formation across all 12
                counties.
              </p>
              <div className="giving-actions">
                <Link href="/give" className="btn-gold-lg">
                  Give Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
                <Link href="/give/appeal" className="btn-ghost-white">
                  Learn About the Appeal
                </Link>
              </div>
            </div>

            <div className="giving-stat-card">
              <span className="giving-stat-num">67%</span>
              <span className="giving-stat-label">of Goal Reached</span>
              <span className="giving-stat-sub">Help us reach 100%</span>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            EVENTS
            ───────────────────────────────────────────── */}
        <section className="events-section">
          <div className="events-orb" />
          <div className="container-wide">
            <div className="section-head">
              <span className="section-tag section-tag-gold">What&rsquo;s Happening</span>
              <h2 className="section-h2 section-h2-white">Upcoming Events</h2>
              <p className="section-desc section-desc-muted">
                Join us for worship, fellowship, and community across the diocese.
              </p>
            </div>

            <div className="event-grid">
              {events.map((e) => (
                <Link key={e.title} href={e.href} className="ev-card">
                  <div className="ev-date">
                    <span className="ev-month">{e.month}</span>
                    <span className="ev-day">{e.day}</span>
                  </div>
                  <div className="ev-body">
                    <h3 className="ev-title">{e.title}</h3>
                    <span className="ev-location">
                      <svg viewBox="0 0 24 24" className="ev-pin" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>
                      {e.location}
                    </span>
                    <span className="ev-cta">
                      {e.cta}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="section-cta-row">
              <Link href="/events" className="btn-ghost-white">
                View All Events
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            DASHBOARD / TRANSPARENCY
            ───────────────────────────────────────────── */}
        <section className="dash-section">
          <div className="container-wide">
            <div className="dash-layout">
              <div className="dash-content">
                <span className="section-tag section-tag-left">Transparency</span>
                <h2 className="section-h2 section-h2-left">Monthly Diocesan Dashboard</h2>
                <p className="dash-text">
                  We believe in transparency and accountability. Each month, we
                  share a comprehensive report on our ministries, finances, and the
                  impact of your support. Because being ambassadors of one another
                  starts with trust.
                </p>
                <Link href="/about/dashboard" className="btn-gold">
                  View All Reports
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>

              <div className="dash-card">
                <div className="dash-card-head">
                  <h4>February 2026 Report</h4>
                  <span className="dash-badge">Latest</span>
                </div>
                <div className="dash-card-body">
                  {dashRows.map((r) => (
                    <div key={r.label} className="dash-row">
                      <span>{r.label}</span>
                      <span className="dash-val">{r.value}</span>
                    </div>
                  ))}
                </div>
                <div className="dash-card-foot">
                  <Link href="/about/dashboard">Download Full Report (PDF) &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            BISHOP SECTION
            ───────────────────────────────────────────── */}
        <section className="bishop-section">
          <div className="container-narrow">
            <div className="bishop-layout">
              <div className="bishop-portrait-wrap">
                <div className="bishop-portrait">
                  <Image
                    src="/images/bishop/bishop-siegel.jpg"
                    alt="Bishop Joseph M. Siegel"
                    fill
                    sizes="220px"
                    className="bishop-img"
                  />
                </div>
              </div>

              <div className="bishop-content">
                <span className="section-tag section-tag-left">A Message from Our Bishop</span>
                <h2 className="bishop-name">Bishop Joseph M. Siegel</h2>
                <blockquote className="bishop-quote">
                  &ldquo;We need to be ambassadors of one another &mdash; staff and
                  parishes supporting each other. We are called to tell our story
                  and meet people where they are.&rdquo;
                </blockquote>
                <p className="bishop-bio">
                  As the sixth Bishop of Evansville, Bishop Siegel leads our
                  diocese with a vision rooted in encounter, transparency, and
                  service. His pastoral priorities for 2025&ndash;2030 call each of
                  us to deepen our faith and engage with our communities across all
                  12 counties of Southwestern Indiana.
                </p>
                <div className="bishop-actions">
                  <Link href="/about/our-bishop" className="btn-navy btn-sm">
                    Meet Our Bishop
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                  <Link href="/about/our-vision" className="link-blue">
                    Read Pastoral Priorities
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            VIDEO SECTION
            ───────────────────────────────────────────── */}
        <section className="video-section">
          <div className="container-wide">
            <div className="section-head">
              <span className="section-tag">Watch</span>
              <h2 className="section-h2">See Our Diocese in Action</h2>
              <p className="section-desc">
                Experience the faith, community, and ministry that define the
                Catholic Church in Southwestern Indiana.
              </p>
            </div>

            <div className="video-wrap">
              <div
                className="video-player"
                role="button"
                tabIndex={0}
                aria-label="Play video: A Video Tour of the Diocese of Evansville"
                style={{ backgroundImage: `url('/images/video/diocese-video-tour.jpg')` }}
              >
                <div className="video-overlay" />
                <div className="video-play">
                  <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="video-caption">
                  <h3>A Video Tour of the Diocese of Evansville</h3>
                  <p>Discover the communities, ministries, and people of our diocese</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ─── Data ─── */

const quickCards = [
  {
    href: "/parishes",
    title: "Find a Parish",
    text: "Locate a parish near you, view Mass times, and connect with your community",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
  },
  {
    href: "/schools",
    title: "Catholic Schools",
    text: "26 schools providing faith-based education across Southwestern Indiana",
    icon: `<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
  },
  {
    href: "/the-message",
    title: "The Message",
    text: "Your source for Catholic news, stories, and community journalism since 1970",
    icon: `<svg viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
  },
  {
    href: "/give",
    title: "Give",
    text: "Support our parishes, schools, and ministries. Your generosity changes lives.",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  },
];

const articles = [
  {
    href: "/the-message/diocesan-news",
    image: "/images/articles/become-one.jpg",
    category: "Diocesan News",
    date: "March 28, 2026",
    title: "Bishop Siegel Announces Pastoral Priorities for the Next Five Years",
    excerpt:
      "A new vision for encounter, deepening faith, and engagement across all 45 parishes of the diocese.",
  },
  {
    href: "/the-message/local-news",
    image: "/images/articles/catholic-ministries-appeal.png",
    category: "Local News",
    date: "March 25, 2026",
    title: "Catholic Charities Expands Family Services in Vanderburgh County",
    excerpt:
      "New programs to serve an additional 400 families annually, bringing hope and support to those in need.",
  },
  {
    href: "/the-message/faith-spirituality",
    image: "/images/articles/becoming-one-roadmap.jpg",
    category: "Faith & Spirituality",
    date: "March 22, 2026",
    title: "Preparing for Easter: A Journey Through Holy Week in Our Diocese",
    excerpt:
      "Parishes across all four deaneries invite the faithful to celebrate the most sacred days of the liturgical year.",
  },
];

const events = [
  {
    href: "/events",
    month: "Apr",
    day: "5",
    title: "Chrism Mass",
    location: "St. Benedict Cathedral, Evansville",
    cta: "Learn More",
  },
  {
    href: "/events",
    month: "Apr",
    day: "12",
    title: "Marriage & Family Life Conference",
    location: "Sarto Retreat Center",
    cta: "Register via OSV",
  },
  {
    href: "/events",
    month: "Apr",
    day: "19",
    title: "Youth Encounter Weekend",
    location: "Catholic Center, Evansville",
    cta: "Register via OSV",
  },
];

const dashRows = [
  { label: "Sunday Mass Attendance", value: "18,240" },
  { label: "OCIA Candidates", value: "127" },
  { label: "Catholic Charities Families Served", value: "198" },
  { label: "Catholic Ministries Appeal Progress", value: "67%" },
  { label: "School Enrollment", value: "6,842" },
];
