# Carlberg Advisory — website

Static site (plain HTML/CSS/JS, no build step) for GitHub Pages.

## Structure
- `index.html`, `dde.html`, `advisory.html`, `about.html`, `insights.html`, `contact.html`
- `impressum.html`, `datenschutz.html` (placeholder), `404.html`
- `assets/css/style.css`: all styling; colours are variables at the top
- `assets/js/main.js`: mobile menu, scroll reveal
- `assets/img/`: images

## Still to fill in
- `datenschutz.html`: full privacy policy text (placeholder for now)
- Insights articles: currently "Coming soon"; article images are placeholders (`class="ph"`)

## Publish on GitHub Pages
1. Create a repository and push these files to the `main` branch.
2. Repository → Settings → Pages → Source: "Deploy from a branch", `main`, `/ (root)`.
3. Live at https://carlberg-advisory.github.io/
4. Custom domain later: enter it under Settings → Pages and point DNS at GitHub.

## Preview locally
    python3 -m http.server 8000
