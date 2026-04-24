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
/* Desktop: constrained width and moderate height */
.social-carousel-wrap {
  max-width: 860px;
  margin: 0 auto;
}
.social-carousel-wrap .carousel__holder {
  padding-bottom: 48% !important;
}
/* Tablet */
@media (max-width: 992px) {
  .social-carousel-wrap {
    max-width: 100%;
  }
  .social-carousel-wrap .carousel__holder {
    padding-bottom: 58% !important;
  }
}
/* Phone */
@media (max-width: 576px) {
  .social-carousel-wrap .carousel__holder {
    padding-bottom: 75% !important;
  }
}
</style>

<div class="social-carousel-wrap">
  {% include carousel.html height="48" unit="%" duration="7" number="1" %}
</div>


<div class="container" style="margin-top:30px">
  <h4>News</h4>
  <hr>
  
  {% for item in site.data.News %}
  <div class="row" style="margin-bottom:15px; padding:10px; border-left:3px solid #9d4844ff">
    <div class="col-md-3">
      <em style="color:#666">{{ item.date }}</em>
    </div>
    <div class="col-md-9">
      {{ item.headline }}
    </div>
  </div>
  {% endfor %}
</div>