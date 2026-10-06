// Renders the Insights page from window.CA_INSIGHTS (assets/js/insights-data.js)
// Works on both /insights.html and /de/insights.html (German text from item.de).
(function () {
  var featuredEl = document.getElementById('insights-featured');
  var listEl = document.getElementById('insights-list');
  if (!featuredEl || !listEl) return;

  var html = document.documentElement;
  var lang = /^de/i.test(html.lang) ? 'de' : 'en';
  var root = html.getAttribute('data-root') || '';

  var TEXT = {
    en: {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'],
      featured: 'Featured article', fromArticle: 'From the article',
      readArticle: 'Read article', readPost: 'Read post',
      publishedOn: 'Published on ', article: 'Article', inEnglish: '',
      newTab: function (where) { return ' (opens ' + where + ' in a new tab)'; }
    },
    de: {
      months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
        'August', 'September', 'Oktober', 'November', 'Dezember'],
      featured: 'Ausgewählter Artikel', fromArticle: 'Aus dem Artikel',
      readArticle: 'Artikel lesen', readPost: 'Beitrag lesen',
      publishedOn: 'Veröffentlicht auf ', article: 'Artikel', inEnglish: ' (auf Englisch)',
      newTab: function (where) { return ' (öffnet ' + where + ' in neuem Tab)'; }
    }
  }[lang];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Relative paths in the data are written from the site root; German pages sit one folder down.
  function path(p) {
    if (!p || /^([a-z]+:|\/|#)/i.test(p)) return p;
    return root + p;
  }

  // Merge the German fields over the English ones on German pages.
  function localise(item) {
    var v = {};
    for (var k in item) v[k] = item[k];
    if (lang === 'de' && item.de) for (var d in item.de) v[d] = item.de[d];
    v.url = path(v.url);
    v.image = path(v.image);
    return v;
  }

  var items = (window.CA_INSIGHTS || []).slice().sort(function (a, b) {
    return (b.date || '').localeCompare(a.date || '');
  }).map(localise);

  function formatDate(iso, yearOnly) {
    var m = /^(\d{4})-(\d{2})/.exec(iso || '');
    if (!m) return '';
    return yearOnly ? m[1] : TEXT.months[parseInt(m[2], 10) - 1] + ' ' + m[1];
  }

  function sourceOf(item) {
    if (!item.external) return '';
    if (item.source) return item.source;
    try {
      var host = new URL(item.url).hostname.replace(/^www\./, '');
      if (/linkedin\.com$/.test(host)) return 'LinkedIn';
      return host;
    } catch (e) { return ''; }
  }

  // "LinkedIn · September 2026" for posts, "Article · September 2026" for articles
  function metaLabel(item, yearOnly) {
    var type = item.contentType === 'LinkedIn' ? 'LinkedIn' : TEXT.article;
    var date = formatDate(item.date, yearOnly);
    var note = (item.lang || 'en') !== lang ? TEXT.inEnglish : '';
    return (date ? type + ' · ' + date : type) + note;
  }

  function linkAttrs(item) {
    var attrs = 'href="' + esc(item.url) + '"';
    if (item.external) attrs += ' target="_blank" rel="noopener noreferrer"';
    return attrs;
  }

  function newTabNote(item) {
    return item.external ? '<span class="sr-only">' + esc(TEXT.newTab(sourceOf(item) || 'website')) + '</span>' : '';
  }

  function renderFeatured(item) {
    var visual = item.image
      ? '<div class="feature__visual feature__visual--image"><img src="' + esc(item.image) + '" alt="" loading="lazy"></div>'
      : item.quote
        ? '<div class="feature__visual" aria-hidden="true"><span class="feature__quote-label">' + esc(TEXT.fromArticle) + '</span><p class="feature__quote">“' + esc(item.quote).replace(/-/g, '‑') + '”</p></div>'
        : '';
    var source = sourceOf(item);
    return '<a class="feature" ' + linkAttrs(item) + '>' +
      '<div class="feature__body">' +
        '<span class="eyebrow">' + esc(TEXT.featured) + '</span>' +
        '<p class="insight__meta">' + esc(metaLabel(item, true)) + (item.category ? ' · ' + esc(item.category) : '') + '</p>' +
        '<h2 class="feature__title">' + esc(item.title) + '</h2>' +
        (item.summary ? '<p class="feature__summary">' + esc(item.summary) + '</p>' : '') +
        '<span class="feature__cta">' + esc(item.contentType === 'LinkedIn' ? TEXT.readPost : TEXT.readArticle) + ' <span aria-hidden="true">→</span></span>' +
        (source ? '<span class="feature__source">' + esc(TEXT.publishedOn + source) + '</span>' : '') +
        newTabNote(item) +
      '</div>' +
      visual +
    '</a>';
  }

  function renderItem(item) {
    return '<li><a class="insight" ' + linkAttrs(item) + '>' +
      (item.image ? '<img class="insight__image" src="' + esc(item.image) + '" alt="" loading="lazy">' : '') +
      (item.category ? '<span class="insight__category">' + esc(item.category) + '</span>' : '') +
      '<h3 class="insight__title">' + esc(item.title) + '</h3>' +
      (item.summary ? '<p class="insight__summary">' + esc(item.summary) + '</p>' : '') +
      '<span class="insight__meta">' + esc(metaLabel(item)) + ' <span aria-hidden="true">→</span></span>' +
      newTabNote(item) +
    '</a></li>';
  }

  var featured = items.filter(function (i) { return i.featured; })[0];
  var rest = items.filter(function (i) { return i !== featured; });

  if (featured) {
    featuredEl.innerHTML = renderFeatured(featured);
  } else {
    featuredEl.hidden = true;
  }
  listEl.innerHTML = rest.map(renderItem).join('');
})();
