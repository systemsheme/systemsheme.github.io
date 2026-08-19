---
layout: gridlay
title: Resources
subtitle: Asiri Lab Resources
---

<style>
/* ── Page heading ── */
.res-heading { font-weight: 700; color: #333; margin-bottom: 8px; }
.res-heading-bar { width: 52px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 18px; }
.res-subhead { font-size: 14px; color: #888; margin-bottom: 34px; }

/* ── Responsive grid (matches Team/Publications) ── */
.res-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  justify-content: center;
  gap: 34px 26px;
  margin-bottom: 55px;
}

/* ── Card ── */
.res-card {
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.32s cubic-bezier(.2,.7,.2,1), box-shadow 0.32s ease;
  display: flex;
  flex-direction: column;
}
.res-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(157,72,68,0.20);
}

.res-photo-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.res-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 18px;
  transition: transform 0.5s ease;
}
.res-card:hover .res-photo-wrap img,
.res-card.res-active .res-photo-wrap img { transform: scale(1.04); }

/* Hover reveals the description: white, scrollable, red scrollbar */
.res-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.98);
  color: #3a3a3a;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: default;
}
.res-card:hover .res-overlay,
.res-card.res-active .res-overlay { opacity: 1; }
.res-overlay-inner {
  height: 100%;
  overflow-y: auto;
  padding: 15px 17px;
  font-size: 12.5px;
  line-height: 1.55;
  text-align: left;
}
.res-overlay-inner p { margin: 0; }
.res-overlay-inner a { color: #9d4844; font-weight: 600; }
.res-overlay-inner::-webkit-scrollbar { width: 6px; }
.res-overlay-inner::-webkit-scrollbar-track { background: #f2f2f2; }
.res-overlay-inner::-webkit-scrollbar-thumb { background: #9d4844; border-radius: 3px; }

/* ── Meta ── */
.res-meta { padding: 15px 16px 18px; }
.res-title { font-weight: 700; font-size: 15px; line-height: 1.35; }
.res-title, .res-title a { color: #9d4844; }
.res-title a:hover { color: #6f2f2c; }

.res-touch-hint { display: none; }
@media (hover: none) { .res-touch-hint { display: inline; } }

@media (max-width: 576px) {
  .res-grid { grid-template-columns: 1fr; }
  .res-overlay-inner { font-size: 11px; padding: 12px; }
  .res-title { font-size: 13.5px; }
}
</style>

<div class="container">
  <h1 class="res-heading">Resources</h1>
  <div class="res-heading-bar"></div>
  <p class="res-subhead">Hover over a resource to read about it.<span class="res-touch-hint"> Tap a card to read about it.</span></p>

  <div class="res-grid" id="resGrid">
  {% for item in site.data.Resources %}
    <div class="res-card">
      <div class="res-photo-wrap">
        <img src="{{ item.image }}" alt="{{ item.title }}">
        <div class="res-overlay"><div class="res-overlay-inner">{{ item.description | markdownify }}</div></div>
      </div>
      <div class="res-meta">
        <div class="res-title">{% if item.imageLink %}<a href="{{ item.imageLink }}" target="_blank" rel="noopener">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</div>
      </div>
    </div>
  {% endfor %}
  </div>
</div>

<script>
(function () {
  var cards = document.querySelectorAll('#resGrid .res-card');
  // Tap-to-reveal on touch devices (no hover there); links still work
  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      var wasActive = card.classList.contains('res-active');
      cards.forEach(function (c) { c.classList.remove('res-active'); });
      if (!wasActive) card.classList.add('res-active');
    });
  });
})();
</script>
