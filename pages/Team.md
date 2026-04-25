---
layout: gridlay
title: Team
subtitle: Asiri Lab Members
---

<div class="clear"></div>

<div class="container" style="padding-top: 60px; margin-top: -60px;">
  <div class="jumbotron jumbotron-correct">
      <h3 style="text-align:left"> Welcome to the Asiri Lab!</h3>
      <p style="font-size:14px;margin-top:10px">
        In the Asiri lab, our overarching mission is to improve the care of patients with blood disorders. To acheive this goal, we are recruiting highly motivated and passionate personnel to our group. We're committed to fostering a space where every person has the chance to succeed and bring their values to the work we do together. We're eager to share our research with the broader community, mentor trainees at all career stages, and forge meaningful collaborations that extend the reach and impact of our discoveries.
      </p>
  </div>
</div>

{% assign pi_members = site.data.LabMembers | where: "position", "Principal Investigator" %}
{% assign other_members = site.data.LabMembers | where_exp: "person", "person.position != 'Principal Investigator'" | sort: "lastname" %}

<!-- ── PI Section ─────────────────────────────────────────────── -->
{% for person in pi_members %}
<div class="container" style="margin-bottom: 10px;">
  <div class="row">
    <div class="col-sm-4">
      <img class="img-responsive" src="{{ person.image }}"
        {% if person.altimage %}
          onmouseover="this.src='{{ person.altimage }}';"
          onmouseout="this.src='{{ person.image }}';"
        {% endif %}
        alt="{{ person.name }}">
      <div style="margin-top: 8px; font-size: 17px;">
        <strong>{{ person.name }}</strong><br>
        {% if person.pronouns %}<em>{{ person.pronouns }}</em><br>{% endif %}
        {{ person.position }}<br>
        {% if person.advisor %}{{ person.advisor }}<br>{% endif %}
        <em>{{ person.email }}</em><br>
        {% if person.scholar %}<a href="http://scholar.google.com/citations?user={{ person.scholar }}"><span class="fa fa-graduation-cap"></span> Google Scholar</a><br>{% endif %}
        {% if person.orcid %}<a href="https://orcid.org/{{ person.orcid }}"><span class="fa fa-book"></span> ORCID</a><br>{% endif %}
        {% if person.bluesky %}<a href="http://bsky.app/profile/{{ person.bluesky }}"><span class="fab fa-bluesky"></span> @{{ person.bluesky }}</a><br>{% endif %}
        {% if person.website %}<a href="{{ person.website }}"><span class="fa fa-rss"></span> {{ person.website }}</a><br>{% endif %}
      </div>
    </div>
    <div class="col-sm-8" style="text-align: justify; font-size: 17px;">
      {{ person.description | markdownify }}
    </div>
  </div>
</div>
{% endfor %}

<!-- ── Team Member Slider ────────────────────────────────────── -->
<div class="container" style="margin-top: 40px;">
  <h4 style="margin-bottom: 20px;">Lab Members</h4>
  <hr style="margin-top:0;">
</div>

<div class="container tm-slider-outer">
  <div class="tm-slider-row" id="teamSlider">
    <button class="tm-arrow tm-prev" aria-label="Previous">&#8249;</button>
    <div class="tm-viewport">
      <div class="tm-track">
        {% for person in other_members %}
        <div class="tm-slide">
          <div class="row">
            <div class="col-sm-4">
              <img class="img-responsive" src="{{ person.image }}"
                {% if person.altimage %}
                  onmouseover="this.src='{{ person.altimage }}';"
                  onmouseout="this.src='{{ person.image }}';"
                {% endif %}
                alt="{{ person.name }}">
              <div style="margin-top: 8px; font-size: 17px;">
                <strong>{{ person.name }}</strong><br>
                {% if person.pronouns %}<em>{{ person.pronouns }}</em><br>{% endif %}
                {{ person.position }}<br>
                {% if person.advisor %}{{ person.advisor }}<br>{% endif %}
                <em>{{ person.email }}</em><br>
                {% if person.scholar %}<a href="http://scholar.google.com/citations?user={{ person.scholar }}"><span class="fa fa-graduation-cap"></span> Google Scholar</a><br>{% endif %}
                {% if person.orcid %}<a href="https://orcid.org/{{ person.orcid }}"><span class="fa fa-book"></span> ORCID</a><br>{% endif %}
                {% if person.bluesky %}<a href="http://bsky.app/profile/{{ person.bluesky }}"><span class="fab fa-bluesky"></span> @{{ person.bluesky }}</a><br>{% endif %}
                {% if person.website %}<a href="{{ person.website }}"><span class="fa fa-rss"></span> {{ person.website }}</a><br>{% endif %}
              </div>
            </div>
            <div class="col-sm-8" style="text-align: justify; font-size: 17px;">
              {{ person.description | markdownify }}
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    <button class="tm-arrow tm-next" aria-label="Next">&#8250;</button>
  </div>
  <div class="tm-dots-row">
    {% for person in other_members %}
    <button class="tm-dot{% if forloop.first %} tm-dot-active{% endif %}" aria-label="Slide {{ forloop.index }}"></button>
    {% endfor %}
  </div>
</div>

<style>
.tm-slider-row {
  display: flex;
  align-items: center;
  gap: 0;
}
.tm-arrow {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #bbb;
  background: #fff;
  color: #555;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, color 0.2s;
  padding: 0 0 2px 0;
}
.tm-arrow:hover {
  border-color: #9d4844;
  color: #9d4844;
}
.tm-viewport {
  flex: 1;
  overflow: hidden;
}
.tm-track {
  display: flex;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}
.tm-slide {
  min-width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
}
.tm-dots-row {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 18px 0 30px;
}
.tm-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #c8c8c8;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;
}
.tm-dot-active { background: #555; }

@media (max-width: 576px) {
  .tm-arrow {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
  .tm-slide { padding: 0 8px; }
}
</style>

<script>
(function () {
  var slider  = document.getElementById('teamSlider');
  var track   = slider.querySelector('.tm-track');
  var dots    = document.querySelectorAll('.tm-dot');
  var prev    = slider.querySelector('.tm-prev');
  var next    = slider.querySelector('.tm-next');
  var total   = dots.length;
  var current = 0;

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('tm-dot-active', i === current);
    });
  }

  prev.addEventListener('click', function () { goTo(current - 1); });
  next.addEventListener('click', function () { goTo(current + 1); });
  dots.forEach(function (d, i) {
    d.addEventListener('click', function () { goTo(i); });
  });
})();
</script>
