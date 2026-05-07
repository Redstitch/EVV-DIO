/**
 * build-search-index.mjs
 * ---------------------
 * Generates public/search-index.json for client-side site search.
 *
 * Run:  node scripts/build-search-index.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const ROOT = process.cwd(); // evdio-site/
const SRC = join(ROOT, "src");
const APP = join(SRC, "app");
const DATA = join(SRC, "data");
const OUT = join(ROOT, "public", "search-index.json");

/* ─── Helpers ───────────────────────────────────────────────────────── */

/** Strip all HTML tags from a string */
function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;/g, "...")
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&nbsp;/g, " ")
    .replace(/&#\d+;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Truncate to N characters on a word boundary */
function truncate(str, n) {
  if (str.length <= n) return str;
  const cut = str.slice(0, n);
  const last = cut.lastIndexOf(" ");
  return (last > 0 ? cut.slice(0, last) : cut) + "...";
}

/** Walk a directory tree, returning all file paths */
function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      results.push(...walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

// ─── 1. PAGES from src/app/ page.tsx files ────────────────────────────

function buildPages() {
  const pages = [];
  const allFiles = walk(APP).filter((f) => f.endsWith("/page.tsx"));

  for (const file of allFiles) {
    const rel = file.slice(APP.length); // e.g. /about/our-bishop/page.tsx

    // Skip dynamic routes (any path segment wrapped in [])
    if (/\/\[/.test(rel)) continue;

    // Skip the homepage
    if (rel === "/page.tsx") continue;

    const url = rel.replace(/\/page\.tsx$/, ""); // → /about/our-bishop
    const src = readFileSync(file, "utf8");

    // Extract title from metadata export
    let title = "";
    const titleMatch =
      src.match(/title:\s*"([^"]+)"/) ||
      src.match(/title:\s*'([^']+)'/) ||
      src.match(/title:\s*`([^`]+)`/);
    if (titleMatch) title = titleMatch[1];

    // Extract description from metadata export
    let desc = "";
    const descMatch =
      src.match(/description:\s*\n?\s*"([^"]+)"/) ||
      src.match(/description:\s*"([^"]+)"/) ||
      src.match(/description:\s*'([^']+)'/) ||
      src.match(/description:\s*`([^`]+)`/);
    if (descMatch) desc = descMatch[1];

    if (!title) continue; // skip pages without metadata

    pages.push({ type: "page", title, desc, url });
  }

  return pages;
}

/* ─── 2. ARTICLES from src/data/articles.json ──────────────────────── */

function buildArticles() {
  // Build category lookup
  let catMap = {};
  try {
    const cats = JSON.parse(readFileSync(join(DATA, "categories_raw.json"), "utf8"));
    for (const c of cats) {
      catMap[c.id] = c.name;
    }
  } catch {
    // If categories file doesn't exist, we'll just skip category names
  }

  const raw = JSON.parse(readFileSync(join(DATA, "articles.json"), "utf8"));
  const articles = [];

  for (const a of raw) {
    const title = stripHtml(a.title?.rendered || "");
    if (!title) continue;

    const excerptRaw = stripHtml(a.excerpt?.rendered || "");
    const desc = truncate(excerptRaw, 120);
    const url = `/the-message/article/${a.slug}`;

    // First category name
    let cat = "";
    if (a.categories && a.categories.length > 0) {
      cat = catMap[a.categories[0]] || "";
    }

    const entry = { type: "article", title, desc, url };
    if (cat) entry.cat = cat;
    articles.push(entry);
  }

  return articles;
}

/* ─── 3. PARISHES from src/data/parish-details.ts ──────────────────── */

function extractTopLevelBlocks(src) {
  // Find the start of the array
  const arrayStart = src.indexOf("parishDetails: ParishDetail[] = [");
  if (arrayStart === -1) return [];
  const start = src.indexOf("[", arrayStart);

  const blocks = [];
  let i = start + 1;
  while (i < src.length) {
    // Find the next top-level `{`
    const open = src.indexOf("{", i);
    if (open === -1) break;

    // Count brackets to find the matching `}`
    let depth = 0;
    let j = open;
    for (; j < src.length; j++) {
      if (src[j] === "{") depth++;
      else if (src[j] === "}") {
        depth--;
        if (depth === 0) break;
      }
    }
    blocks.push(src.slice(open, j + 1));
    i = j + 1;
  }
  return blocks;
}

function buildParishes() {
  const src = readFileSync(join(DATA, "parish-details.ts"), "utf8");
  const parishes = [];
  const blocks = extractTopLevelBlocks(src);

  for (const block of blocks) {
    const slugM = block.match(/slug:\s*"([^"]+)"/);
    if (!slugM) continue;
    const slug = slugM[1];

    const parishM = block.match(/parish:\s*"([^"]+)"/);
    const cityM = block.match(/city:\s*"([^"]+)"/);
    const deaneryM = block.match(/deanery:\s*"([^"]+)"/);

    // Match the top-level phone (not nested in school/staff)
    // The phone field appears after worshipSites and before fax/website
    const phoneM = block.match(/\n\s*phone:\s*"([^"]+)"/);

    const parish = parishM?.[1] || slug;
    const city = cityM?.[1] || "";
    const deanery = deaneryM?.[1] || "";
    const phone = phoneM?.[1] || "";

    const descParts = [];
    if (city) descParts.push(city);
    if (deanery) descParts.push(`${deanery} Deanery`);
    if (phone) descParts.push(phone);

    parishes.push({
      type: "parish",
      title: parish,
      desc: descParts.join(" \u2014 "),
      url: `/parishes/${slug}`,
    });
  }

  return parishes;
}

/* ─── 4. CLERGY from src/data/clergy.ts ────────────────────────────── */

function buildClergy() {
  const src = readFileSync(join(DATA, "clergy.ts"), "utf8");
  const clergy = [];

  // Match each { name: "...", slug: "...", ordained: "...", assignment: "...", type: "..." }
  const entryRe =
    /\{\s*name:\s*"([^"]+)"\s*,\s*slug:\s*"([^"]+)"\s*,\s*ordained:\s*"([^"]+)"\s*,\s*assignment:\s*"([^"]+)"/g;
  let m;
  while ((m = entryRe.exec(src)) !== null) {
    const [, name, slug, ordained, assignment] = m;
    clergy.push({
      type: "clergy",
      title: name,
      desc: assignment,
      url: "/about/clergy-directory",
    });
  }

  return clergy;
}

/* ─── 5. MASS TIMES from src/data/mass-times.ts ────────────────────── */

function buildMassTimes() {
  const src = readFileSync(join(DATA, "mass-times.ts"), "utf8");
  const locations = [];

  // Match each mass location block
  const blockRe =
    /\{\s*church:\s*"([^"]+)"[\s\S]*?(?=\},\s*\{|\}\s*\])/g;
  let m;
  while ((m = blockRe.exec(src)) !== null) {
    const block = m[0];
    const church = m[1];

    const cityM = block.match(/city:\s*"([^"]+)"/);
    const city = cityM?.[1] || "";

    // Parse saturday and sunday arrays
    const satM = block.match(/saturday:\s*\[([^\]]*)\]/);
    const sunM = block.match(/sunday:\s*\[([^\]]*)\]/);

    const parseTimes = (raw) => {
      if (!raw) return [];
      return [...raw.matchAll(/"([^"]+)"/g)].map((x) => x[1]);
    };

    const sat = parseTimes(satM?.[1]);
    const sun = parseTimes(sunM?.[1]);

    const descParts = [];
    if (city) descParts.push(city);
    const timeParts = [];
    if (sat.length) timeParts.push("Sat " + sat.join(", "));
    if (sun.length) timeParts.push("Sun " + sun.join(", "));
    if (timeParts.length) descParts.push(timeParts.join(", "));

    locations.push({
      type: "mass",
      title: church,
      desc: descParts.join(" \u2014 "),
      url: "/parishes/mass-times",
    });
  }

  return locations;
}

/* ─── 6. SCHOOLS (hardcoded from page data) ────────────────────────── */

function buildSchools() {
  const schools = [
    // High Schools (Grades 9-12)
    { name: "Mater Dei High School", city: "Evansville", grades: "Grades 9-12" },
    { name: "Reitz Memorial High School", city: "Evansville", grades: "Grades 9-12" },
    { name: "Rivet High School", city: "Vincennes", grades: "Grades 9-12" },
    { name: "Washington Catholic High School", city: "Washington", grades: "Grades 9-12" },
    // PreK-8 Schools
    { name: "Annunciation at Christ the King", city: "Evansville", grades: "PreK-8" },
    { name: "Annunciation at Holy Spirit", city: "Evansville", grades: "PreK-8" },
    { name: "Corpus Christi School", city: "Evansville", grades: "PreK-8" },
    { name: "Good Shepherd School", city: "Evansville", grades: "PreK-8" },
    { name: "Holy Redeemer School", city: "Evansville", grades: "PreK-8" },
    { name: "Holy Rosary School", city: "Evansville", grades: "PreK-8" },
    { name: "Holy Trinity School", city: "Jasper", grades: "PreK-8" },
    { name: "Resurrection School", city: "Evansville", grades: "PreK-8" },
    { name: "St. Benedict Cathedral School", city: "Evansville", grades: "PreK-8" },
    { name: "St. Bernard School", city: "Rockport", grades: "PreK-8" },
    { name: "St. James School", city: "Haubstadt", grades: "PreK-8" },
    { name: "St. John the Baptist School", city: "Newburgh", grades: "PreK-8" },
    { name: "St. Joseph School", city: "Evansville", grades: "PreK-8" },
    { name: "St. Phillip School", city: "Mt. Vernon", grades: "PreK-8" },
    { name: "St. Wendel School", city: "Wadesville", grades: "PreK-8" },
    { name: "Washington Catholic Elementary", city: "Washington", grades: "PreK-8" },
    { name: "Westside Catholic School", city: "Evansville", grades: "PreK-8" },
    // PreK-5 Schools
    { name: "Flaget Elementary School", city: "Vincennes", grades: "PreK-5" },
    { name: "Holy Cross School", city: "Fort Branch", grades: "PreK-5" },
    { name: "St. Joseph School", city: "Princeton", grades: "PreK-5" },
    { name: "St. Matthews School", city: "Mt. Vernon", grades: "PreK-5" },
    { name: "Sts. Peter & Paul School", city: "Haubstadt", grades: "PreK-5" },
  ];

  return schools.map((s) => ({
    type: "school",
    title: s.name,
    desc: `${s.city} \u2014 ${s.grades}`,
    url: "/schools/find",
  }));
}

/* ─── Build everything ─────────────────────────────────────────────── */

const pages = buildPages();
const articles = buildArticles();
const parishes = buildParishes();
const clergy = buildClergy();
const massTimes = buildMassTimes();
const schools = buildSchools();

const index = [...pages, ...articles, ...parishes, ...clergy, ...massTimes, ...schools];

writeFileSync(OUT, JSON.stringify(index));

const kb = (Buffer.byteLength(JSON.stringify(index)) / 1024).toFixed(0);

console.log(
  `Built search index: ${pages.length} pages, ${articles.length} articles, ${parishes.length} parishes, ${clergy.length} clergy, ${schools.length} schools, ${massTimes.length} mass locations → public/search-index.json (${kb} KB)`
);
