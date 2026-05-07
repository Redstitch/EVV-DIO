import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main id="main-content">
      {/* ─── HERO (cathedral image backdrop) ─── */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-inner">
          <p className="hero-eyebrow">The Catholic Diocese of Evansville</p>
          <h1 id="hero-title" className="hero-headline">
            Welcome <em>home.</em>
          </h1>
          <p className="hero-lede">
            <b>Forty-five parishes, twenty-six schools, and a Church alive</b>{" "}
            across twelve counties of Southwest Indiana &mdash; from the Ohio
            River to the cornfields of the north. Wherever you are on the
            journey, you belong here.
          </p>
          <div className="hero-actions">
            <Link href="/parishes/mass-times" className="btn btn-primary">
              Find a Mass time <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/parishes" className="btn btn-outline">
              Find a parish <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/faith/become-catholic" className="link-cta">
              Becoming Catholic <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <p className="hero-credit">
          <b>St. Benedict Cathedral</b> &middot; Blue Mass 2025
        </p>
      </section>

      {/* ─── INDEX (Three ways in) ─── */}
      <section className="index-section" aria-labelledby="index-title">
        <div className="index-inner">
          <div>
            <p className="index-label">Get started</p>
            <h2
              id="index-title"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "48px",
                lineHeight: 1,
                color: "var(--navy)",
                fontWeight: 400,
                marginTop: "16px",
              }}
            >
              <em style={{ fontStyle: "italic", color: "var(--teal)" }}>Three</em> ways in.
            </h2>
          </div>
          <div className="index-cols">
            {indexCards.map((card) => (
              <article key={card.num} className="index-col">
                <span className="num">{card.num}</span>
                <h3 dangerouslySetInnerHTML={{ __html: card.title }} />
                <p>{card.text}</p>
                <Link href={card.href} className="read-link">
                  {card.cta} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BISHOP FEATURE ─── */}
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
              Read the Bishop&rsquo;s Letter{" "}
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
              trace the arc of a Catholic life — outward signs of an inward
              grace.
            </p>
            <ol className="sacraments-list">
              {sacraments.map((s) => (
                <li key={s.label}>
                  <span
                    className="icon"
                    dangerouslySetInnerHTML={{ __html: s.icon }}
                  />
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── ACTION ROW ─── */}
      <section className="action-section" aria-label="Next steps">
        <div className="action-grid">
          <Link className="action-card" href="/parishes">
            <h3>
              Find a <em>parish</em> near you.
            </h3>
            <p>
              Mass times, deanery map, and directions to every parish in the
              diocese — from Evansville to the river towns of Southwest Indiana.
            </p>
            <span className="cta">
              Open the parish map <span aria-hidden="true">→</span>
            </span>
          </Link>
          <Link className="action-card" href="/give">
            <h3>
              Make a <em>gift.</em>
            </h3>
            <p>
              Support the Catholic Ministries Appeal, give to your parish, or
              establish a legacy gift. Every gift is stewarded carefully.
            </p>
            <span className="cta">
              Give online today <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ─── Data ─── */

const indexCards = [
  {
    num: "I.",
    title: 'Find your <em>parish.</em>',
    text: "Forty-five parishes across twelve counties. Enter your town, your ZIP, or the name of a saint — we'll get you to the right door.",
    cta: "Open the map",
    href: "/parishes",
  },
  {
    num: "II.",
    title: 'Become <em>Catholic.</em>',
    text: "The Order of Christian Initiation of Adults (OCIA) welcomes new Catholics each Easter. Questions, conversations, and companionship — begin here.",
    cta: "Start the conversation",
    href: "/faith/become-catholic",
  },
  {
    num: "III.",
    title: 'Give — and <em>give thanks.</em>',
    text: "Your gift to the Catholic Ministries Appeal supports seminarians, Catholic Charities, schools, and every parish in the diocese.",
    cta: "See where your gift goes",
    href: "/give",
  },
];

const articles = [
  {
    href: "/the-message/diocesan-news",
    image: "https://evdiomessage.org/wp-content/uploads/2026/04/p01_or_p06_or_p07___Holy_Week___Holy_Saturday_2026___FOUR__1775841432_39613.jpg",
    alt: "Easter Vigil at St. Benedict Cathedral.",
    category: "Liturgy",
    date: "April 10, 2026",
    title: 'A light in the darkness: Easter <em>Vigil</em> at the cathedral.',
    excerpt:
      "From darkness to Easter fire — the ancient liturgy marks the heart of the Christian year. Images and reflections from Holy Saturday at St. Benedict.",
  },
  {
    href: "/the-message/local-news",
    image: "https://evdiomessage.org/wp-content/uploads/2026/04/p01___Dr._Palmer_and_family__1775744140_65409.jpg",
    alt: "Dr. Douglas Palmer with family.",
    category: "Schools",
    date: "April 8, 2026",
    title: 'Washington Catholic names <em>first president.</em>',
    excerpt:
      "Dr. Douglas Palmer begins a new chapter for Catholic education in Daviess County.",
  },
  {
    href: "/the-message/faith-spirituality",
    image: "https://evdiomessage.org/wp-content/uploads/2026/04/Folz_and_Riecker_Headshots__1775224519_49623.jpg",
    alt: "Seminarians Folz and Riecker.",
    category: "Vocations",
    date: "April 3, 2026",
    title: 'Two seminarians to be ordained <em>transitional deacons.</em>',
    excerpt:
      "Folz and Riecker move one step closer to the priesthood this June at the cathedral.",
  },
];

const sacraments = [
  {
    label: "Baptism",
    href: "/faith/baptism",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 C11 12 8 16 8 20 A8 8 0 0 0 24 20 C24 16 21 12 16 4 Z"/></svg>',
  },
  {
    label: "Confirmation",
    href: "/faith/confirmation",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4 C12 10 10 14 10 18 C10 23 13 26 16 28 C19 26 22 23 22 18 C22 14 20 10 16 4 Z"/><path d="M16 14 C15 17 14 19 14 21"/></svg>',
  },
  {
    label: "Eucharist",
    href: "/faith/first-communion",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6 H24 V10 A8 8 0 0 1 16 18 A8 8 0 0 1 8 10 V6 Z"/><line x1="16" y1="18" x2="16" y2="25"/><line x1="11" y1="26" x2="21" y2="26"/></svg>',
  },
  {
    label: "Reconciliation",
    href: "/faith/prayer-worship",
    icon: '<svg viewBox="0 0 32 32" fill="currentColor"><rect x="14" y="4" width="4" height="24" rx="1"/><rect x="6" y="12" width="20" height="4" rx="1"/></svg>',
  },
  {
    label: "Anointing of the Sick",
    href: "/faith/anointing",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 H20 V8 L22 12 V24 A4 4 0 0 1 18 28 H14 A4 4 0 0 1 10 24 V12 L12 8 Z"/><line x1="13" y1="14" x2="19" y2="14"/></svg>',
  },
  {
    label: "Holy Orders",
    href: "/faith/vocations",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12 L16 4 L24 12 V26 H8 V12 Z"/><line x1="8" y1="18" x2="24" y2="18"/><line x1="16" y1="6" x2="16" y2="14"/><line x1="13" y1="10" x2="19" y2="10"/></svg>',
  },
  {
    label: "Matrimony",
    href: "/faith/marriage",
    icon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="16" r="7"/><circle cx="20" cy="16" r="7"/></svg>',
  },
];
