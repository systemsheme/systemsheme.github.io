---
layout: gridlay
title: Publications
subtitle: Asiri Lab Publications
---

<style>
/* ── Heading ── */
.pub-heading { font-weight: 700; color: #333; margin-bottom: 8px; }
.pub-heading-bar { width: 52px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 18px; }
.pub-subhead { font-size: 14px; color: #888; margin-bottom: 34px; }
.pub-subhead a { color: #9d4844; font-weight: 600; }

/* ── Responsive grid (matches Team page) ── */
.pub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 34px 26px;
  margin-bottom: 55px;
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

/* ── Meta ── */
.pub-meta { padding: 15px 16px 18px; }
.pub-title { font-weight: 700; font-size: 14.5px; color: #2b2b2b; line-height: 1.35; }
.pub-journal { color: #9d4844; font-weight: 700; font-size: 12.5px; margin-top: 7px; }

.pub-touch-hint { display: none; }
@media (hover: none) { .pub-touch-hint { display: inline; } }

@media (max-width: 576px) {
  .pub-grid { grid-template-columns: repeat(2, 1fr); gap: 22px 14px; }
  .pub-title { font-size: 13px; }
  .pub-journal { font-size: 11.5px; }
  .pub-overlay-inner { font-size: 11px; line-height: 1.45; padding: 11px; }
}
</style>

<div class="container">
  <h1 class="pub-heading">Publications</h1>
  <div class="pub-heading-bar"></div>
  <p class="pub-subhead">For a complete list, see <a href="https://scholar.google.com/citations?user=6VtjQ5gAAAAJ&hl=en">Google Scholar</a> or <a href="https://www.ncbi.nlm.nih.gov/myncbi/asiri.ediriwickrema.1/bibliography/public/">PubMed</a>.</p>

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

<script>
(function () {
  var cards = document.querySelectorAll('#pubGrid .pub-card');
  // Tap-to-reveal on touch devices (no hover there); links still work
  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      var wasActive = card.classList.contains('pub-active');
      cards.forEach(function (c) { c.classList.remove('pub-active'); });
      if (!wasActive) card.classList.add('pub-active');
    });
  });
})();
</script>
