import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  getAllCategories,
  getCategoryBySlug,
  getArticlesByCategorySlug,
  getCategoriesForArticle,
  formatDate,
  stripHtml,
} from "@/lib/articles";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const cats = getAllCategories();
  return cats.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: `${cat.name} | The Message`,
    description: `Browse ${cat.count} articles in ${cat.name} from The Message, the Catholic newspaper of the Diocese of Evansville.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);

  if (!cat) {
    notFound();
  }

  const articles = getArticlesByCategorySlug(slug);

  return (
    <>
      <section className="feature-head" aria-labelledby="title">
        <div className="grid">
          <div className="text">
            <p className="kicker">The Message</p>
            <h1 id="title">{cat.name}</h1>
            <p className="deck">
              {articles.length} articles in this section.
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
        <section className="page-content">
          <div className="interior-grid interior-grid-3">
            {articles.map((a) => {
              const cats = getCategoriesForArticle(a);
              return (
                <Link
                  key={a.id}
                  href={`/the-message/article/${a.slug}`}
                  className="interior-card"
                >
                  {cats[0] && cats[0].id !== cat.id && (
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
                    {stripHtml(a.excerpt.rendered).slice(0, 120)}
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

        <div className="page-content" style={{ paddingTop: 0 }}>
          <div style={{ textAlign: "center" }}>
            <Link href="/the-message" className="btn btn-outline">
              Back to The Message <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
