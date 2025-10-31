---
layout: gridlay
title: Social
subtitle: Social and News
---

<div class="clear"></div>

<div class="container" style="padding-top: 60px; margin-top: -60px;">
  <div class="jumbotron jumbotron-correct">
      <h3 style="text-align:left"> Social Events</h3>
      <p style="font-size:14px;margin-top:10px">
        Coming soon!
      </p>
  </div>
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