/*
  Insights content
  ================
  Every item on the Insights page comes from this list. To add an insight,
  copy an entry, edit it and save. Newest items are shown first
  automatically (sorted by date).

  Fields
    category     Short topic label, e.g. "Organisations & delivery"
    title        Headline
    summary      One or two sentences
    date         "YYYY-MM-DD"
    image        Optional. Path to an image, e.g. "assets/img/insights/slug.jpg".
                 Leave out for a text-only item.
    contentType  "Article" (long-form) or "LinkedIn" (post)
    url          Where the item lives. External: full https:// link.
                 Native article on this site: "insights/article-slug.html"
    external     true  = hosted elsewhere, opens in a new tab and shows its source
                 false = hosted on carlberg-advisory, opens in the same tab
    source       Optional. Name shown for external items. If left out it is
                 worked out from the url (e.g. "LinkedIn").
    featured     Optional. true = shown as the large featured item at the top.
                 Only one item should be featured.
    lang         Language of the piece itself, "en" (default) or "de". German pages
                 add "(auf Englisch)" to English-language items.
    de           German version for /de/insights.html:
                 de: { category: "...", title: "...", summary: "..." }
                 Optional url/image inside de override them on the German page.
                 Without it, the German page shows the English text.
    quote        Optional, featured item only. A short line from the piece,
                 shown in the visual panel when there is no image.

  Example of a future native article:
    {
      category: "Organisations & delivery",
      title: "Example article",
      summary: "One or two sentences.",
      date: "2026-10-01",
      image: "assets/img/insights/example-article.jpg",
      contentType: "Article",
      url: "insights/example-article.html",
      external: false
    }

  DRAFT = wording taken from the opening lines of the original post;
  please confirm or refine.
*/
window.CA_INSIGHTS = [
  {
    featured: true,
    category: "Logistics & commercial models",
    title: "The Rise of Tech-Driven Product-Based Logistics",
    de: { category: "Logistik & Geschäftsmodelle", title: "Der Aufstieg technologiegetriebener, produktbasierter Logistik", summary: "Die Zukunft der Kontraktlogistik und darüber hinaus." },
    summary: "The future within contract logistics and beyond.", // DRAFT
    quote: "Tech-driven companies with a clear customer segmentation are poised to dominate the market with a product-based approach.",
    date: "2024-05-21",
    contentType: "Article",
    url: "https://www.linkedin.com/posts/1johancarlberg_tech-innovation-businessstrategy-activity-7198699050261450752-ozIj",
    external: true
  },
  {
    category: "Organisations & delivery",
    title: "Execution isn’t a personality trait",
    de: { category: "Organisation & Umsetzung", title: "Umsetzungsstärke ist keine Charaktereigenschaft", summary: "Was passiert, wenn die Umsetzung einer Organisation von einer Handvoll Menschen abhängt, die einfach wissen, wie man Dinge erledigt?" },
    summary: "What happens when organisational delivery depends on a handful of people who simply know how to get things done?",
    date: "2026-09-25",
    contentType: "LinkedIn",
    url: "https://www.linkedin.com/posts/1johancarlberg_%F0%9D%97%98%F0%9D%98%83%F0%9D%97%B2%F0%9D%97%BF%F0%9D%98%86-%F0%9D%97%BC%F0%9D%97%BF%F0%9D%97%B4%F0%9D%97%AE%F0%9D%97%BB%F0%9D%97%B6%F0%9D%98%80%F0%9D%97%AE%F0%9D%98%81%F0%9D%97%B6%F0%9D%97%BC%F0%9D%97%BB-%F0%9D%98%80%F0%9D%97%B2%F0%9D%97%B2%F0%9D%97%BA%F0%9D%98%80-activity-7509167923265966080-pyZo",
    external: true
  },
  {
    category: "Growth & operating models",
    title: "Growth is a stress test for your organisation",
    de: { category: "Wachstum & Operating Models", title: "Wachstum ist ein Stresstest für Ihre Organisation", summary: "Wachstum schafft nicht unbedingt organisatorische Schwächen. Es legt meist die offen, die schon da waren." },
    summary: "Growth doesn’t necessarily create organisational weaknesses. It has a habit of exposing the ones that were already there.",
    date: "2026-09-15",
    contentType: "LinkedIn",
    url: "https://www.linkedin.com/posts/1johancarlberg_ive-seen-companies-grow-surprisingly-far-activity-7505588724810928128-92HV",
    external: true
  },
  {
    category: "AI & management",
    title: "AI is making execution cheaper. Judgement isn’t.",
    de: { category: "KI & Management", title: "KI macht Umsetzung billiger. Urteilsvermögen nicht.", summary: "Je schneller KI produziert, desto mehr verlagert sich der Engpass in Organisationen hin zu Urteilsvermögen, Priorisierung und Verantwortung." },
    summary: "As AI increases the speed of production, the organisational bottleneck increasingly shifts towards judgement, prioritisation and accountability.",
    date: "2026-09-10",
    contentType: "LinkedIn",
    url: "https://www.linkedin.com/posts/1johancarlberg_ai-is-making-execution-cheaper-sure-but-activity-7503745322339426304-lAdq",
    external: true
  },
  {
    category: "Organisations & delivery",
    title: "Most organisations don’t have an energy problem", // DRAFT
    de: { category: "Organisation & Umsetzung", title: "Die meisten Organisationen haben kein Energieproblem", summary: "Die Menschen sind beschäftigt. Kalender sind voll. Projekte laufen. Aber Aktivität ist nicht dasselbe wie Fortschritt." },
    summary: "People are busy. Calendars are full. Projects are running. But activity isn’t the same as progress.", // DRAFT
    date: "2026-09-08",
    contentType: "LinkedIn",
    url: "https://www.linkedin.com/posts/1johancarlberg_%F0%9D%97%A0%F0%9D%97%BC%F0%9D%98%80%F0%9D%98%81-%F0%9D%97%BC%F0%9D%97%BF%F0%9D%97%B4%F0%9D%97%AE%F0%9D%97%BB%F0%9D%97%B6%F0%9D%98%80%F0%9D%97%AE%F0%9D%98%81%F0%9D%97%B6%F0%9D%97%BC%F0%9D%97%BB%F0%9D%98%80-%F0%9D%97%9C%F0%9D%98%83-activity-7503000412480880640-Svl9",
    external: true
  },
  {
    category: "Logistics & supply chain",
    title: "Most logistics setups still run like bespoke consulting projects", // DRAFT
    de: { category: "Logistik & Supply Chain", title: "Die meisten Logistik-Setups laufen noch wie individuelle Beratungsprojekte", summary: "Deshalb skalieren sie nicht." },
    summary: "That’s why they can’t scale.", // DRAFT
    date: "2025-10-28",
    contentType: "LinkedIn",
    url: "https://www.linkedin.com/posts/1johancarlberg_%F0%9D%97%A0%F0%9D%97%BC%F0%9D%98%80%F0%9D%98%81-%F0%9D%97%B9%F0%9D%97%BC%F0%9D%97%B4%F0%9D%97%B6%F0%9D%98%80%F0%9D%98%81%F0%9D%97%B6%F0%9D%97%B0%F0%9D%98%80-%F0%9D%98%80%F0%9D%97%B2%F0%9D%98%81%F0%9D%98%82%F0%9D%97%BD%F0%9D%98%80-activity-7388854457893056512-GX19",
    external: true
  }
];
