import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getRecentArticles,
  getCategoriesForArticle,
  formatDate,
  stripHtml,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: "The Message | Diocese of Evansville",
  description:
    "The Message is the weekly Catholic newspaper of the Diocese of Evansville, serving Southwestern Indiana with faith-based journalism since 1970.",
};

export default function TheMessagePage() {
  const recent = getRecentArticles(25);
  const featured = recent[0];
  const headlines = recent.slice(1, 4);
  const moreStories = recent.slice(4, 16);

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
        {/* Featured Article */}
        <section className="page-content">
          <span className="section-tag section-tag-left">Latest</span>

          <Link
            href={`/the-message/article/${featured.slug}`}
            className="interior-card"
            style={{ overflow: "hidden", padding: 0, display: "block" }}
          >
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--navy), var(--teal))",
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
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(238,218,179,0.75)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                  maxWidth: 640,
                }}
              >
                {stripHtml(featured.excerpt.rendered).slice(0, 200)}...
              </p>
              <span
                style={{ fontSize: 12, color: "rgba(238,218,179,0.5)" }}
              >
                {formatDate(featured.date)}
              </span>
            </div>
          </Link>

          {/* Next 3 Headlines */}
          <div className="interior-grid interior-grid-3" style={{ marginTop: 24 }}>
            {headlines.map((a) => {
              const cats = getCategoriesForArticle(a);
              return (
                <Link
                  key={a.id}
                  href={`/the-message/article/${a.slug}`}
                  className="interior-card"
                >
                  {cats[0] && (
                    <span
                      style={{
                        display: "block",
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "var(--brick)",
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      {cats[0].name}
                    </span>
                  )}
                  <h3
                    style={{ fontSize: 18 }}
                    dangerouslySetInnerHTML={{ __html: a.title.rendered }}
                  />
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 12,
                      color: "var(--muted)",
                    }}
                  >
                    {formatDate(a.date)}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <div
          className="page-content"
          style={{ paddingTop: 0, paddingBottom: 0 }}
        >
          <hr className="section-divider" />
        </div>

        {/* More Stories */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">More Stories</span>
            <h2 className="section-h2">Recent Articles</h2>
          </div>

          <div className="interior-grid interior-grid-3">
            {moreStories.map((a) => {
              const cats = getCategoriesForArticle(a);
              return (
                <Link
                  key={a.id}
                  href={`/the-message/article/${a.slug}`}
                  className="interior-card"
                >
                  {cats[0] && (
                    <span
                      style={{
                        display: "block",
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "var(--brick)",
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      {cats[0].name}
                    </span>
                  )}
                  <h3
                    style={{ fontSize: 17 }}
                    dangerouslySetInnerHTML={{ __html: a.title.rendered }}
                  />
                  <p
                    style={{
                      marginTop: 6,
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {stripHtml(a.excerpt.rendered).slice(0, 120)}...
                  </p>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 11,
                      color: "var(--muted)",
                    }}
                  >
                    {formatDate(a.date)}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <div
          className="page-content"
          style={{ paddingTop: 0, paddingBottom: 0 }}
        >
          <hr className="section-divider" />
        </div>

        {/* Browse by Section */}
        <section className="page-content">
          <div className="section-head">
            <span className="section-tag">Sections</span>
            <h2 className="section-h2">Browse by Section</h2>
          </div>

          <div className="interior-grid interior-grid-4">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="interior-card"
                style={{ textAlign: "center" }}
              >
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* About & Subscribe */}
        <div className="page-content" style={{ paddingTop: 0 }}>
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

        <div className="page-content" style={{ paddingTop: 0 }}>
          <div className="cta-block">
            <h3>Subscribe to The Message</h3>
            <p>
              Receive The Message delivered to your home each week, or access
              the digital edition online.
            </p>
            <Link href="/the-message/subscribe" className="btn btn-primary">
              Subscribe Now{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

const sections = [
  { name: "Diocesan News", desc: "The latest from the diocese", href: "/the-message/diocesan-news" },
  { name: "Local & Regional", desc: "SW Indiana coverage", href: "/the-message/local-news" },
  { name: "National & World", desc: "Catholic news nationwide", href: "/the-message/national-news" },
  { name: "Faith & Spirituality", desc: "Spiritual reflections", href: "/the-message/faith-spirituality" },
  { name: "Columns", desc: "Voices and perspectives", href: "/the-message/columns" },
  { name: "Special Features", desc: "In-depth stories", href: "/the-message/features" },
  { name: "Archives", desc: "Every issue since 1970", href: "/the-message/archives" },
  { name: "Subscribe", desc: "Get The Message weekly", href: "/the-message/subscribe" },
];
