import json, urllib.request, time, os

BASE = "https://evdiomessage.org/wp-json/wp/v2"
OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")
os.makedirs(OUT_DIR, exist_ok=True)

# Fetch categories first
print("Fetching categories...")
cats_url = f"{BASE}/categories?per_page=100"
req = urllib.request.Request(cats_url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as r:
    categories = json.loads(r.read())
cat_map = {c["id"]: {"name": c["name"], "slug": c["slug"], "count": c["count"]} for c in categories}
print(f"  Found {len(cat_map)} categories")

# Fetch all posts
all_posts = []
page = 1
per_page = 100

while True:
    url = f"{BASE}/posts?per_page={per_page}&page={page}&_fields=id,title,date,slug,link,excerpt,content,categories,featured_media,author"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            posts = json.loads(r.read())
            if not posts:
                break
            all_posts.extend(posts)
            print(f"  Page {page}: got {len(posts)} posts (total: {len(all_posts)})")
            page += 1
            time.sleep(0.3)
    except urllib.error.HTTPError as e:
        if e.code == 400:
            break
        print(f"  Error on page {page}: {e.code}, retrying...")
        time.sleep(2)
        continue
    except Exception as e:
        print(f"  Error on page {page}: {e}, retrying...")
        time.sleep(2)
        continue

print(f"\nTotal posts fetched: {len(all_posts)}")

# Save categories
with open(os.path.join(OUT_DIR, "categories.json"), "w") as f:
    json.dump(cat_map, f)
print("Saved categories.json")

# Save all posts
with open(os.path.join(OUT_DIR, "articles.json"), "w") as f:
    json.dump(all_posts, f)
print(f"Saved articles.json ({len(all_posts)} articles)")

# Print summary
print("\nCategory breakdown:")
for cid, info in sorted(cat_map.items(), key=lambda x: x[1]["count"], reverse=True):
    print(f"  {info['name']}: {info['count']}")
