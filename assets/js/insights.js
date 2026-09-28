// Renders the Insights page from window.CA_INSIGHTS (assets/js/insights-data.js)
(function () {
  var items = (window.CA_INSIGHTS || []).slice().sort(function (a, b) {
    return (b.date || '').localeCompare(a.date || '');
  });
  var featuredEl = document.getElementById('insights-featured');
  var listEl = document.getElementById('insights-list');
  if (!featuredEl || !listEl) return;

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function formatDate(iso, yearOnly) {
    var m = /^(\d{4})-(\d{2})/.exec(iso || '');
    if (!m) return '';
    return yearOnly ? m[1] : MONTHS[parseInt(m[2], 10) - 1] + ' ' + m[1];
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
    var type = item.contentType === 'LinkedIn' ? 'LinkedIn' : 'Article';
    var date = formatDate(item.date, yearOnly);
    return date ? type + ' · ' + date : type;
  }

  function linkAttrs(item) {
    var attrs = 'href="' + esc(item.url) + '"';
    if (item.external) attrs += ' target="_blank" rel="noopener noreferrer"';
    return attrs;
  }

  function newTabNote(item) {
    return item.external ? '<span class="sr-only"> (opens ' + esc(sourceOf(item) || 'external site') + ' in a new tab)</span>' : '';
  }

  function renderFeatured(item) {
    var visual = item.image
      ? '<div class="feature__visual feature__visual--image"><img src="' + esc(item.image) + '" alt="" loading="lazy"></div>'
      : item.quote
        ? '<div class="feature__visual" aria-hidden="true"><span class="feature__quote-label">From the article</span><p class="feature__quote">“' + esc(item.quote).replace(/-/g, '‑') + '”</p></div>'
        : '';
    var source = sourceOf(item);
    return '<a class="feature" ' + linkAttrs(item) + '>' +
      '<div class="feature__body">' +
        '<span class="eyebrow">Featured article</span>' +
        '<p class="insight__meta">' + esc(metaLabel(item, true)) + (item.category ? ' · ' + esc(item.category) : '') + '</p>' +
        '<h2 class="feature__title">' + esc(item.title) + '</h2>' +
        (item.summary ? '<p class="feature__summary">' + esc(item.summary) + '</p>' : '') +
        '<span class="feature__cta">' + (item.contentType === 'LinkedIn' ? 'Read post' : 'Read article') + ' <span aria-hidden="true">→</span></span>' +
        (source ? '<span class="feature__source">Published on ' + esc(source) + '</span>' : '') +
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
