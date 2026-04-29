import articlesData from "@/data/articles.json";
import categoriesData from "@/data/categories_raw.json";

export interface Article {
  id: number;
  title: { rendered: string };
  date: string;
  slug: string;
  link: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  featured_media: number;
  author: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const articles = articlesData as Article[];
const categories = categoriesData as Category[];

// Build category lookup
const catMap = new Map<number, Category>();
for (const c of categories) {
  catMap.set(c.id, c);
}

// Build slug lookup
const slugMap = new Map<string, Article>();
for (const a of articles) {
  slugMap.set(a.slug, a);
}

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return slugMap.get(slug);
}

export function getArticlesByCategory(categoryId: number, limit?: number): Article[] {
  const filtered = articles.filter((a) => a.categories.includes(categoryId));
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getArticlesByCategorySlug(slug: string, limit?: number): Article[] {
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return [];
  return getArticlesByCategory(cat.id, limit);
}

export function getRecentArticles(limit: number = 10): Article[] {
  return articles.slice(0, limit);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryById(id: number): Category | undefined {
  return catMap.get(id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoriesForArticle(article: Article): Category[] {
  return article.categories
    .map((id) => catMap.get(id))
    .filter((c): c is Category => c !== undefined);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}
