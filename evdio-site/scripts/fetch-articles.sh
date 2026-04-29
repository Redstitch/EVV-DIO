#!/bin/bash
# Fetch all articles from The Message WordPress API
# Uses curl to avoid Python SSL issues

DATA_DIR="$(dirname "$0")/../src/data"
mkdir -p "$DATA_DIR"

# Fetch categories
echo "Fetching categories..."
curl -s "https://evdiomessage.org/wp-json/wp/v2/categories?per_page=100" -o "$DATA_DIR/categories_raw.json"
echo "  Categories saved"

# Fetch all posts in batches of 100
PAGE=1
TOTAL=0
echo "[]" > "$DATA_DIR/articles.json"

while true; do
    echo "  Fetching page $PAGE..."
    curl -s "https://evdiomessage.org/wp-json/wp/v2/posts?per_page=100&page=$PAGE&_fields=id,title,date,slug,link,excerpt,content,categories,featured_media,author" \
        -o "$DATA_DIR/page_$PAGE.json" \
        -w "%{http_code}" > "$DATA_DIR/status.txt" 2>/dev/null

    STATUS=$(cat "$DATA_DIR/status.txt")

    # Check if we got a valid response
    if [ "$STATUS" != "200" ]; then
        echo "  Got status $STATUS on page $PAGE — done."
        rm -f "$DATA_DIR/page_$PAGE.json" "$DATA_DIR/status.txt"
        break
    fi

    # Check if empty array
    COUNT=$(python3 -c "import json; print(len(json.load(open('$DATA_DIR/page_$PAGE.json'))))" 2>/dev/null)
    if [ "$COUNT" = "0" ] || [ -z "$COUNT" ]; then
        echo "  Empty response on page $PAGE — done."
        rm -f "$DATA_DIR/page_$PAGE.json" "$DATA_DIR/status.txt"
        break
    fi

    TOTAL=$((TOTAL + COUNT))
    echo "  Got $COUNT posts (total: $TOTAL)"
    PAGE=$((PAGE + 1))
    sleep 0.3
done

# Merge all page files into one
echo "Merging $TOTAL articles..."
python3 -c "
import json, glob, os

data_dir = '$DATA_DIR'
all_posts = []
for f in sorted(glob.glob(os.path.join(data_dir, 'page_*.json')), key=lambda x: int(x.split('page_')[1].split('.')[0])):
    with open(f) as fh:
        posts = json.load(fh)
        all_posts.extend(posts)
    os.remove(f)

with open(os.path.join(data_dir, 'articles.json'), 'w') as f:
    json.dump(all_posts, f)

print(f'Saved {len(all_posts)} articles to articles.json')
"

rm -f "$DATA_DIR/status.txt"
echo "Done!"
