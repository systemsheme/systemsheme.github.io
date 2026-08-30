---
layout: gridlay
title: Social
subtitle: Social and News
---

<div class="clear"></div>

<div class="container" style="padding-top: 60px; margin-top: -60px;">
  <div class="jumbotron jumbotron-correct" style="padding-top: 12px; padding-bottom: 12px;">
      <h3 style="text-align:left"> Social Events</h3>
  </div>
</div>

<style>
.social-layout {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-top: 24px;
}
.social-pics { flex: 1 1 auto; min-width: 0; }
.social-news {
  flex: 0 0 clamp(300px, 36%, 440px);
  background: rgba(157, 72, 68, 0.06);
  border: 1px solid rgba(157, 72, 68, 0.14);
  border-radius: 10px;
  padding: 20px 22px 8px;
}
.social-news-title { font-weight: 700; color: #333; margin: 0 0 6px; }
.social-news-bar { width: 46px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 18px; }
.news-item {
  padding: 4px 0 12px 14px;
  border-left: 3px solid #9d4844;
  margin-bottom: 14px;
}
.news-date { font-size: 12.5px; color: #777; font-style: italic; margin-bottom: 3px; }
.news-text { font-size: 14px; color: #333; line-height: 1.5; }

@media (max-width: 900px) {
  .social-layout { flex-direction: column; }
  .social-news { flex: 1 1 auto; width: 100%; margin-top: 30px; }
}
</style>

<div class="container">
  <div class="social-layout">
    <div class="social-pics">
      {% include carousel.html duration="7" number="1" %}
    </div>

    <aside class="social-news">
      <h4 class="social-news-title">News</h4>
      <div class="social-news-bar"></div>
      {% for item in site.data.News %}
      <div class="news-item">
        <div class="news-date">{{ item.date }}</div>
        <div class="news-text">{{ item.headline }}</div>
      </div>
      {% endfor %}
    </aside>
  </div>
</div>