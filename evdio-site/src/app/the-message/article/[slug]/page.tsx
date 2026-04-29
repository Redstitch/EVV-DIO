import type { Metadata } from "next";
import Link from "next/link";
import {
  getArticleBySlug,
  getAllSlugs,
  getCategoriesForArticle,
  formatDate,
  stripHtml,
} from "@/lib/articles";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: stripHtml(article.title.rendered),
    description: stripHtml(article.excerpt.rendered).slice(0, 160),
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const cats = getCategoriesForArticle(article);
  const dateStr = formatDate(article.date);

  return (
    <main id="main-content">
      {/* Article Header */}
      <article>
        <header className="page-hero" style={{ paddingBottom: 40 }}>
          <div className="page-hero-inner">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep" aria-hidden="true">/</span>
              <Link href="/the-message">The Message</Link>
              <span className="sep" aria-hidden="true">/</span>
              <b dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
            </nav>

            {cats.length > 0 && (
              <div style={{ marginBottom: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {cats.map((cat) => (
                  <span
                    key={cat.id}
                    className="kicker"
                    style={{ fontSize: 10, padding: "6px 14px", margin: 0 }}
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            )}

            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                lineHeight: 1.08,
                fontWeight: 400,
                color: "var(--navy)",
                maxWidth: "20ch",
                marginBottom: 16,
              }}
              dangerouslySetInnerHTML={{ __html: article.title.rendered }}
            />

            <time
              dateTime={article.date}
              style={{
                fontSize: 13,
                color: "var(--muted)",
                letterSpacing: "0.04em",
              }}
            >
              {dateStr}
            </time>
          </div>
        </header>

        {/* Article Body */}
        <div className="page-content">
          <div
            className="prose"
            style={{ maxWidth: 780, margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: article.content.rendered }}
          />
        </div>

        {/* Back link */}
        <div className="page-content" style={{ paddingTop: 0 }}>
          <hr className="section-divider" />
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/the-message" className="btn btn-outline">
              Back to The Message <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
