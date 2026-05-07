import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getRecentArticles,
  getArticlesByCategory,
  getCategoriesForArticle,
  formatDate,
  stripHtml,
  getCategoryBySlug,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: "The Message | Diocese of Evansville",
  description:
    "The Message is the weekly Catholic newspaper of the Diocese of Evansville, serving Southwestern Indiana with faith-based journalism since 1970.",
};

export default function TheMessagePage() {
  const recent = getRecentArticles(6);
  const featured = recent[0];
  const headlines = recent.slice(1, 4);

  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">The Message</p>
            <h1
              id="title"
              className="message-masthead"
              style={{ fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 1.05 }}
            >
              <span className="the">The </span>
              <span className="name">Message</span>
            </h1>
            <p className="deck">
              Serving Southwestern Indiana with faith-based journalism since
              1970.
            </p>
          </div>
          <figure className="photo">
            <Image
              src="/images/stock/presbyterate-group.jpg"
              alt="The presbyterate of the Diocese of Evansville."
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 45%" }}
              priority
            />
          </figure>
        </div>
      </section>

      <main id="main-content">
        {/* ─── LATEST NEWS ─── */}
        <section className="page-content">
          <span className="section-tag">Latest</span>

          <Link
            href={`/the-message/article/${featured.slug}`}
            className="interior-card"
            style={{ overflow: "hidden", padding: 0, display: "block" }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, var(--navy), var(--teal))",
                padding: "48px 40px",
              }}
            >
              <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                {getCategoriesForArticle(featured).map((cat) => (
                  <span
                    key={cat.id}
                    style={{
                      display: "inline-block",
                      background: "var(--dgold)",
                      color: "var(--navy)",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      padding: "4px 12px",
                      borderRadius: 4,
                    }}
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(26px,3.5vw,40px)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.12,
                  marginBottom: 12,
                  maxWidth: "28ch",
                }}
                dangerouslySetInnerHTML={{ __html: featured.title.rendered }}
              />
              <p style={{ fontSize: 15, color: "rgba(238,218,179,0.75)", lineHeight: 1.65, marginBottom: 16, maxWidth: 640 }}>
                {stripHtml(featured.excerpt.rendered).slice(0, 200)}...
              </p>
              <span style={{ fontSize: 12, color: "rgba(238,218,179,0.5)" }}>
                {formatDate(featured.date)}
              </span>
            </div>
          </Link>

          <div className="interior-grid interior-grid-3">
            {headlines.map((a) => {
              const cats = getCategoriesForArticle(a);
              return (
                <Link key={a.id} href={`/the-message/article/${a.slug}`} className="interior-card">
                  {cats[0] && (
                    <span style={{ display: "block", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--brick)", fontWeight: 700, marginBottom: 8 }}>
                      {cats[0].name}
                    </span>
                  )}
                  <h3 style={{ fontSize: 18 }} dangerouslySetInnerHTML={{ __html: a.title.rendered }} />
                  <p style={{ marginTop: 8, fontSize: 12, color: "var(--muted)" }}>{formatDate(a.date)}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── NEWS SECTIONS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">News</span>
            <h2 className="section-h2">News Coverage</h2>
            <p className="section-desc">
              Reporting from the diocese, the region, and the universal Church.
            </p>
          </div>

          <div className="interior-grid interior-grid-3">
            {newsSections.map((s) => {
              const cat = getCategoryBySlug(s.slug);
              return (
                <Link key={s.slug} href={`/the-message/category/${s.slug}`} className="interior-card">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  {cat && (
                    <p style={{ marginTop: 12, fontSize: 11, color: "var(--brick)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {cat.count} articles →
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        <div className="flourish flourish-quatrefoil" aria-hidden="true">
          <span className="dot" />
          <span className="line" />
          <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="8" r="6" /><circle cx="16" cy="24" r="6" />
            <circle cx="8" cy="16" r="6" /><circle cx="24" cy="16" r="6" />
            <circle cx="16" cy="16" r="3" fill="var(--cream-lt)" />
          </svg>
          <span className="line" />
          <span className="dot" />
        </div>

        {/* ─── COLUMNS & SERIES ─── */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Columns</span>
            <h2 className="section-h2">Recurring Columns</h2>
            <p className="section-desc">
              Voices and perspectives from across the diocese — faith, family, Scripture, and daily life.
            </p>
          </div>

          <div className="interior-grid interior-grid-3">
            {columnSeries.map((col) => {
              const cat = getCategoryBySlug(col.slug);
              const latest = cat ? getArticlesByCategory(cat.id, 1)[0] : null;
              return (
                <Link key={col.slug} href={`/the-message/category/${col.slug}`} className="interior-card">
                  <h3>{col.name}</h3>
                  {col.author && (
                    <p style={{ fontSize: 13, color: "var(--teal)", fontWeight: 500, marginBottom: 6 }}>
                      By {col.author}
                    </p>
                  )}
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{col.desc}</p>
                  {latest && (
                    <p style={{ marginTop: 12, fontSize: 11, color: "var(--brick)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Latest: {formatDate(latest.date)} →
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        <div className="flourish" aria-hidden="true">
          <span className="line" />
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <rect x="6" y="0" width="2" height="18" />
            <rect x="2" y="5" width="10" height="2" />
          </svg>
          <span className="line" />
        </div>

        {/* ─── MORE SECTIONS ─── */}
        <section className="page-content bg-eggshell">
          <div className="section-head">
            <span className="section-tag">More</span>
            <h2 className="section-h2">Special Sections</h2>
          </div>

          <div className="interior-grid interior-grid-4">
            {specialSections.map((s) => {
              const cat = getCategoryBySlug(s.slug);
              return (
                <Link key={s.slug} href={`/the-message/category/${s.slug}`} className="interior-card" style={{ textAlign: "center" }}>
                  <h3>{s.name}</h3>
                  {cat && <p>{cat.count} articles</p>}
                </Link>
              );
            })}
          </div>
        </section>

        {/* ─── ABOUT & SUBSCRIBE ─── */}
        <div className="page-content" >
          <div className="info-block">
            <h3>About The Message</h3>
            <p>
              The Message has been the voice of the Catholic community in
              Southwestern Indiana since 1970. Published weekly, it provides
              news, features, opinion, and spiritual reflection for Catholics
              across the diocese.
            </p>
            <div style={{ marginTop: 12 }}>
              <Link href="/the-message/about" className="read-link">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <section className="section-band section-navy" style={{ textAlign: "center" }}>
          <h2 className="section-h2" style={{ color: "var(--cream)", maxWidth: "18ch", margin: "0 auto 16px" }}>Subscribe to The Message</h2>
          <p style={{ color: "rgba(238,218,179,0.7)", maxWidth: 540, margin: "0 auto" }}>
            Receive The Message delivered to your home each week, or access
            the digital edition online.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/the-message/subscribe" className="btn btn-primary" style={{ background: "var(--dgold)", color: "var(--navy)", borderColor: "var(--dgold)" }}>Subscribe Now <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}

/* ─── Data ─── */

const newsSections = [
  { slug: "diocesan-news", name: "Diocesan News", desc: "The latest from the Diocese of Evansville" },
  { slug: "local-news", name: "Local & Regional News", desc: "Coverage from Southwestern Indiana parishes and communities" },
  { slug: "news", name: "General News", desc: "Catholic news and announcements" },
  { slug: "school", name: "Catholic Schools", desc: "News from the 26 schools of the diocese" },
  { slug: "us-world-news", name: "National & World", desc: "Catholic news from across the nation and the universal Church" },
  { slug: "spanish", name: "En Español", desc: "Noticias y artículos en español" },
];

const columnSeries = [
  { slug: "bishops-corner", name: "The Bishop's Corner", author: "Bishop Siegel", desc: "Messages from the Bishop of Evansville" },
  { slug: "sunday-scripture", name: "Sunday Scripture", author: null, desc: "Weekly reflections on the Sunday readings" },
  { slug: "connecting-faith-and-life", name: "Connecting Faith and Life", author: null, desc: "Where faith meets everyday life" },
  { slug: "question-corner", name: "Question Corner", author: null, desc: "Answers to common questions about Catholic faith and practice" },
  { slug: "gratitude-for-the-gift-of-faith", name: "Gratitude for the Gift of Faith", author: null, desc: "Personal reflections on the gift of faith" },
  { slug: "journey-of-faith", name: "Journey of Faith", author: null, desc: "Stories of conversion and deepening faith" },
  { slug: "20-something", name: "20-Something", author: null, desc: "Faith and life from a young adult perspective" },
  { slug: "youth-first", name: "Youth First", author: null, desc: "Resources and reflections for young Catholics" },
  { slug: "grace-notes", name: "Grace Notes", author: null, desc: "Brief meditations on grace in daily life" },
  { slug: "meditatione-ignis", name: "Meditatione Ignis", author: null, desc: "Meditations on the fire of faith" },
  { slug: "gods-way", name: "God's Way", author: null, desc: "Following God's path in the modern world" },
  { slug: "liturgical-rhythm-of-life", name: "Liturgical Rhythm of Life", author: null, desc: "Living in tune with the liturgical calendar" },
  { slug: "the-catholic-kitchen", name: "The Catholic Kitchen", author: null, desc: "Faith, food, and family traditions" },
  { slug: "lessons-learned", name: "Lessons Learned", author: null, desc: "Wisdom drawn from life experience" },
  { slug: "radical-joy-catholic-stewardship-and-abundance", name: "Radical Joy", author: null, desc: "Catholic stewardship and the abundance of giving" },
  { slug: "wonderful-adventure", name: "Wonderful Adventure", author: null, desc: "Finding wonder in the journey of faith" },
  { slug: "a-place-for-all", name: "A Place for All", author: null, desc: "Inclusion and belonging in the Catholic community" },
  { slug: "our-mother-earth", name: "Our Mother Earth", author: null, desc: "Care for creation and Catholic ecology" },
  { slug: "it-seems-to-me", name: "It Seems to Me", author: null, desc: "Personal observations on faith and culture" },
  { slug: "making-sense-of-bioethics", name: "Making Sense of Bioethics", author: null, desc: "Catholic perspectives on bioethical issues" },
  { slug: "from-fields-afar", name: "From Fields Afar", author: null, desc: "Global perspectives on Catholic mission" },
  { slug: "catholic-healthcare", name: "Catholic Healthcare", author: null, desc: "Faith-based health and healing" },
  { slug: "guest", name: "Guest Columnists", author: null, desc: "Invited voices and perspectives" },
  { slug: "daily-blessings", name: "Daily Blessings", author: null, desc: "Finding blessings in the ordinary" },
];

const specialSections = [
  { slug: "seminarian-profiles", name: "Seminarian Profiles" },
  { slug: "special-features", name: "Special Features" },
  { slug: "video", name: "Video" },
  { slug: "photo-galleries", name: "Photo Gallery" },
  { slug: "evdio75", name: "#EVDIO75" },
  { slug: "cathedral-dedication", name: "Cathedral Dedication" },
  { slug: "because-i-am-catholic-porque-soy-catolico", name: "Because I Am Catholic" },
  { slug: "natural-family-planning", name: "Natural Family Planning" },
  { slug: "catholic-charities", name: "Catholic Charities" },
  { slug: "faces-of-faith", name: "Faces of Faith" },
  { slug: "a-view-from-campus", name: "A View from Campus" },
  { slug: "footprints-of-our-catholic-brethren", name: "Footprints of Our Catholic Brethren" },
];
