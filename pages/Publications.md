---
layout: gridlay
title: Publications
subtitle: Asiri Lab Publications
---

<style>
/* ── Heading ── */
.pub-heading { font-weight: 700; color: #333; margin-bottom: 8px; }
.pub-heading-bar { width: 52px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 18px; }
.pub-subhead { font-size: 14px; color: #888; margin-bottom: 30px; }
.pub-subhead a { color: #9d4844; font-weight: 600; }

/* ── Two-column layout: featured cards (left) + full list rail (right) ── */
.pub-layout {
  display: flex;
  align-items: flex-start;
  gap: 34px;
}
.pub-main { flex: 1 1 auto; min-width: 0; }
.pub-rail {
  flex: 0 0 clamp(300px, 32%, 400px);
  position: sticky;
  top: 16px;
}
.pub-rail-title { font-weight: 700; color: #333; font-size: clamp(1.2rem, 1.6vw, 1.5rem); margin: 0 0 6px; }
.pub-rail-bar { width: 46px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 6px; }
.pub-rail-note { font-size: 11.5px; color: #999; margin: 0 0 12px; }

/* Featured ("selected") publications — emphasized on a light maroon panel */
.pub-main-title { font-weight: 700; color: #333; font-size: clamp(1.2rem, 1.6vw, 1.5rem); margin: 0 0 6px; }
.pub-main-bar { width: 46px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 16px; }
.pub-featured {
  background: rgba(157, 72, 68, 0.06);
  border: 1px solid rgba(157, 72, 68, 0.14);
  border-radius: 10px;
  padding: 22px 22px 24px;
}
.pub-featured-title {
  font-weight: 700;
  color: #9d4844;
  font-size: clamp(1.1rem, 1.4vw, 1.35rem);
  margin: 0 0 18px;
}
.pub-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 26px 22px;
  margin: 0;
}

/* ── Card ── */
.pub-card {
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.32s cubic-bezier(.2,.7,.2,1), box-shadow 0.32s ease;
  display: flex;
  flex-direction: column;
}
.pub-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(157,72,68,0.20);
}

.pub-photo-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.pub-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 12px;
  transition: transform 0.5s ease;
}
.pub-card:hover .pub-photo-wrap img,
.pub-card.pub-active .pub-photo-wrap img { transform: scale(1.04); }

/* Hover reveals details: white, scrollable */
.pub-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.98);
  color: #3a3a3a;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: default;
}
.pub-card:hover .pub-overlay,
.pub-card.pub-active .pub-overlay { opacity: 1; }
.pub-overlay-inner {
  height: 100%;
  overflow-y: auto;
  padding: 15px 17px;
  font-size: 12px;
  line-height: 1.55;
  text-align: left;
}
.pub-overlay-inner p { margin: 0 0 9px; }
.pub-authors { color: #666; margin-bottom: 10px !important; }
.pub-overlay-inner a { color: #9d4844; font-weight: 600; }
.pub-links { margin-top: 10px; }
.pub-links a {
  display: inline-block;
  margin: 0 12px 4px 0;
  color: #9d4844;
  font-weight: 700;
  font-size: 12px;
}
.pub-overlay-inner::-webkit-scrollbar { width: 6px; }
.pub-overlay-inner::-webkit-scrollbar-track { background: #f2f2f2; }
.pub-overlay-inner::-webkit-scrollbar-thumb { background: #9d4844; border-radius: 3px; }

/* ── Card meta ── */
.pub-meta { padding: 14px 15px 16px; }
.pub-title { font-weight: 700; font-size: 14px; color: #2b2b2b; line-height: 1.35; }
.pub-journal { color: #9d4844; font-weight: 700; font-size: 12px; margin-top: 6px; }

/* ── Full publication list (right rail, live from PubMed) ── */
.pub-list {
  max-height: 82vh;
  overflow-y: auto;
  padding-right: 6px;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.16) transparent;
}
.pub-list::-webkit-scrollbar { width: 6px; }
.pub-list::-webkit-scrollbar-track { background: transparent; }
.pub-list::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.16); border-radius: 4px; }
.pub-list-item {
  display: block;
  padding: 12px 2px;
  border-bottom: 1px solid #eee;
  text-decoration: none;
}
.pub-list-item:hover { background: #faf6f6; }
.pli-title { display: block; font-weight: 700; font-size: 13px; color: #2b2b2b; line-height: 1.35; }
.pub-list-item:hover .pli-title { color: #9d4844; }
.pli-auth { display: block; font-size: 11.5px; color: #777; margin-top: 3px; line-height: 1.4; }
.pli-auth strong { color: #333; }
.pli-jrnl { display: block; font-size: 11.5px; color: #9d4844; font-weight: 600; margin-top: 2px; }
.pub-list-msg { font-size: 12.5px; color: #888; padding: 8px 2px; }
.pub-list-msg a { color: #9d4844; font-weight: 600; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .pub-layout { flex-direction: column; }
  .pub-rail { position: static; flex: 1 1 auto; width: 100%; margin-top: 34px; }
  .pub-list { max-height: 560px; }
}
@media (max-width: 576px) {
  .pub-grid { grid-template-columns: repeat(2, 1fr); gap: 22px 14px; }
  .pub-title { font-size: 13px; }
  .pub-journal { font-size: 11.5px; }
  .pub-overlay-inner { font-size: 11px; line-height: 1.45; padding: 11px; }
}
</style>

<div class="container" style="padding-top: 60px; margin-top: -60px;">
  <div class="jumbotron jumbotron-correct" style="padding-top: 12px; padding-bottom: 12px;">
      <h3 style="text-align:left"> Publications</h3>
  </div>
</div>

<div class="container">
  <div class="pub-layout">
    <div class="pub-main">
      <div class="pub-featured">
      <h2 class="pub-featured-title">Selected Publications</h2>
      <div class="pub-grid" id="pubGrid">
      {% for pub in site.data.Publications %}
        <div class="pub-card">
          <div class="pub-photo-wrap">
            {% if pub.image %}<img src="{{ pub.image }}" alt="{{ pub.title }}">{% endif %}
            <div class="pub-overlay">
              <div class="pub-overlay-inner">
                <div class="pub-authors">{{ pub.authors | markdownify }}</div>
                <div class="pub-desc">{{ pub.description | markdownify }}</div>
                <div class="pub-links">
                  {% if pub.pubmed %}<a href="{{ pub.pubmed }}" target="_blank" rel="noopener">PubMed</a>{% endif %}
                  {% if pub.pdf %}<a href="{{ pub.pdf }}" target="_blank" rel="noopener">PDF</a>{% endif %}
                  {% if pub.journalLink %}<a href="{{ pub.journalLink }}" target="_blank" rel="noopener">{{ pub.journalShort }}</a>{% endif %}
                </div>
              </div>
            </div>
          </div>
          <div class="pub-meta">
            <div class="pub-title">{{ pub.title }}</div>
            <div class="pub-journal">{% if pub.journal %}{{ pub.journal }} &middot; {{ pub.year }}{% else %}{{ pub.year }}{% endif %}</div>
          </div>
        </div>
      {% endfor %}
      </div>
      </div>
    </div>

    <aside class="pub-rail">
      <div class="pub-list" id="pubList">
        <p class="pub-list-msg">Loading publications&hellip;</p>
      </div>
    </aside>
  </div>
</div>

<script>
// Featured cards: tap-to-reveal on touch devices (links still work)
(function () {
  var cards = document.querySelectorAll('#pubGrid .pub-card');
  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      var wasActive = card.classList.contains('pub-active');
      cards.forEach(function (c) { c.classList.remove('pub-active'); });
      if (!wasActive) card.classList.add('pub-active');
    });
  });
})();

// Right rail: live complete list from PubMed (NCBI E-utilities)
(function () {
  var list = document.getElementById('pubList');
  if (!list) return;
  var eutils = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
  var term = 'Ediriwickrema+A%5BAuthor%5D';

  function esc(s) {
    return String(s || '').replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }

  fetch(eutils + 'esearch.fcgi?db=pubmed&retmode=json&retmax=300&sort=pub+date&term=' + term)
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var ids = (d.esearchresult && d.esearchresult.idlist) || [];
      if (!ids.length) { list.innerHTML = '<p class="pub-list-msg">No publications found.</p>'; return; }
      return fetch(eutils + 'esummary.fcgi?db=pubmed&retmode=json&id=' + ids.join(','))
        .then(function (r) { return r.json(); })
        .then(function (s) {
          var res = s.result || {};
          var order = res.uids || ids;
          var html = '';
          order.forEach(function (id) {
            var it = res[id];
            if (!it) return;
            var authors = (it.authors || []).map(function (a) { return a.name; });
            var authHtml = authors.map(function (n) {
              return /^Ediriwickrema/i.test(n) ? '<strong>' + esc(n) + '</strong>' : esc(n);
            });
            var shown = authHtml.join(', ');
            var year = (it.pubdate || '').split(' ')[0];
            var jrnl = esc(it.source || '');
            html += '<a class="pub-list-item" href="https://pubmed.ncbi.nlm.nih.gov/' + id + '/" target="_blank" rel="noopener">'
                 +    '<span class="pli-title">' + esc(it.title || '') + '</span>'
                 +    '<span class="pli-auth">' + shown + '</span>'
                 +    '<span class="pli-jrnl">' + jrnl + (year ? ' &middot; ' + year : '') + '</span>'
                 +  '</a>';
          });
          list.innerHTML = html;
        });
    })
    .catch(function () {
      list.innerHTML = '<p class="pub-list-msg">Unable to load the live list right now. See the <a href="https://www.ncbi.nlm.nih.gov/myncbi/asiri.ediriwickrema.1/bibliography/public/" target="_blank" rel="noopener">full list on PubMed</a>.</p>';
    });
})();
</script>
