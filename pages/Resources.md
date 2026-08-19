---
layout: gridlay
title: Resources
subtitle: Asiri Lab Resources
---

<style>
/* ── Page heading ── */
.res-page-title { font-weight: 700; color: #333; margin-bottom: 10px; }
.res-heading-bar { width: 52px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 34px; }

/* ── Responsive grid (matches Team page style) ── */
.res-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px 26px;
  margin-bottom: 60px;
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

.res-media {
  height: 175px;
  background: #f7f7f8;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
}
.res-media a { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
.res-media img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}
.res-card:hover .res-media img { transform: scale(1.04); }

.res-body { padding: 18px 20px 22px; flex: 1 1 auto; }
.res-body h5 {
  margin: 0 0 10px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #9d4844;
  line-height: 1.3;
}
.res-body p {
  margin: 0;
  color: #404040;
  font-size: 13.5px;
  line-height: 1.6;
  text-align: left;
}
.res-body a { color: #9d4844; font-weight: 600; }

@media (max-width: 576px) {
  .res-grid { grid-template-columns: 1fr; gap: 20px; }
  .res-media { height: 155px; }
}
</style>

<div class="container">
  <h1 class="res-page-title">Resources</h1>
  <div class="res-heading-bar"></div>

  <div class="res-grid">
  {% for item in site.data.Resources %}
    <div id="{{item.title}}" class="res-card" style="scroll-margin-top: 90px;">
      <div class="res-media">
        {% if item.imageLink %}<a href="{{item.imageLink}}" target="_blank" rel="noopener"><img src="{{item.image}}" alt="{{item.title}}"></a>{% else %}<img src="{{item.image}}" alt="{{item.title}}">{% endif %}
      </div>
      <div class="res-body">
        <h5>{{item.title}}</h5>
        {{item.description | markdownify}}
      </div>
    </div>
  {% endfor %}
  </div>
</div>
