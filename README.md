# Carlberg Advisory — website

Static site (plain HTML/CSS/JS, no build step) for GitHub Pages.

## Structure
- `index.html`, `dde.html`, `advisory.html`, `about.html`, `insights.html`, `contact.html`
- `impressum.html`, `datenschutz.html` (placeholder), `404.html`
- `assets/css/style.css`: all styling; colours are variables at the top
- `assets/js/main.js`: mobile menu, scroll reveal
- `assets/js/insights-data.js`: the list of Insights items (edit this to add content)
- `assets/js/insights.js`: renders the Insights page from that list
- `assets/img/`: images

## Adding an insight
1. Open `assets/js/insights-data.js` and copy an existing entry.
2. Fill in `category`, `title`, `summary`, `date` (YYYY-MM-DD), `contentType`
   ("Article" or "LinkedIn"), `url` and `external`. `image` is optional.
3. Items are sorted newest first automatically. Set `featured: true` on the one
   item that should appear large at the top (and remove it from the old one).

Native articles (hosted on this site): create the page as `insights/article-slug.html`,
link it with `url: "insights/article-slug.html"` and `external: false`. Inside that
page, asset paths need `../` (e.g. `../assets/css/style.css`).

## Still to fill in
- `datenschutz.html`: full privacy policy text (placeholder for now)
- Insights entries marked `// DRAFT` in `insights-data.js`: wording taken from the
  original posts' opening lines; confirm or refine

## Publish on GitHub Pages
1. Create a repository and push these files to the `main` branch.
2. Repository → Settings → Pages → Source: "Deploy from a branch", `main`, `/ (root)`.
3. Live at https://carlberg-advisory.github.io/
4. Custom domain later: enter it under Settings → Pages and point DNS at GitHub.

## Preview locally
    python3 -m http.server 8000
