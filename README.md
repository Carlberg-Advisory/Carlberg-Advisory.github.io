# Carlberg Advisory — website

Static site (plain HTML/CSS/JS, no build step) for GitHub Pages.

## Structure
- `index.html`, `dde.html`, `advisory.html`, `about.html`, `insights.html`, `contact.html`
- `impressum.html`, `datenschutz.html`, `404.html`
- `assets/css/style.css`: all styling; colours are variables at the top
- `assets/js/main.js`: mobile menu, scroll reveal
- `assets/js/insights-data.js`: the list of Insights items (edit this to add content)
- `assets/js/insights.js`: renders the Insights page from that list
- `assets/img/`: images

## English and German
English pages are the source. The German pages in `de/` are generated; never edit them by hand.

After any change to an English page:
1. Add or update the German wording in `tools/translations_de.py` (English HTML → German).
2. Run `python3 tools/build-de.py`. It rebuilds `de/`, the EN | DE switch, the language
   tags and `sitemap.xml`, and lists any English text that still has no German translation
   (it exits with an error until everything is translated).
3. Publish English and German together in the same commit.

Shared by both languages: `impressum.html`, `datenschutz.html` (German), `book/`, `404.html`.
Insights items get German text through the `de: { ... }` field in `insights-data.js`.

## Adding an insight
1. Open `assets/js/insights-data.js` and copy an existing entry.
2. Fill in `category`, `title`, `summary`, `date` (YYYY-MM-DD), `contentType`
   ("Article" or "LinkedIn"), `url` and `external`. `image` is optional.
3. Items are sorted newest first automatically. Set `featured: true` on the one
   item that should appear large at the top (and remove it from the old one).

Native articles (hosted on this site): create the page as `insights/article-slug.html`,
link it with `url: "insights/article-slug.html"` and `external: false`. Inside that
page, asset paths need `../` (e.g. `../assets/css/style.css`).
For a new top-level page, add it to `PAGES` in `tools/build-de.py`; the sitemap is generated from that list.

## Still to fill in
- Insights entries marked `// DRAFT` in `insights-data.js`: wording taken from the
  original posts' opening lines; confirm or refine

## Publishing
- Every push to `main` goes live at https://carlberg-advisory.com within about a minute
  (GitHub Pages, custom domain set by the `CNAME` file; DNS at Porkbun).
- carlberg-advisory.de and carlbergadvisory.com forward to it (Porkbun URL forwarding).
- carlberg-advisory.com/book forwards to Microsoft Bookings; the booking URL lives only in `book/index.html`.

## Preview locally
    python3 -m http.server 8000
