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

{% assign all_members = site.data.LabMembers | sort: "lastname" %}

<!-- ── Team heading ──────────────────────────────────────────── -->
<div class="container" style="margin-top: 40px;">
  <h4 class="tm-heading">Meet the Team</h4>
  <div class="tm-heading-bar"></div>
</div>

<!-- ── Responsive team grid ──────────────────────────────────── -->
<div class="container">
  <div class="tm-grid">
    {% for person in all_members %}
    <div class="tm-card">
      <div class="tm-photo-wrap">
        <img src="{{ person.image }}" alt="{{ person.name }}" loading="lazy">
        <div class="tm-overlay">
          <div class="tm-overlay-inner">{{ person.description | markdownify }}</div>
        </div>
      </div>
      <div class="tm-meta">
        <div class="tm-name">{{ person.name }}</div>
        <div class="tm-position">{{ person.position }}</div>
        <div class="tm-links">
          {% if person.email %}<a href="mailto:{{ person.email | replace: ' (at) ', '@' }}" title="Email"><span class="fa fa-envelope"></span></a>{% endif %}
          {% if person.scholar %}<a href="http://scholar.google.com/citations?user={{ person.scholar }}" title="Google Scholar"><span class="fa fa-graduation-cap"></span></a>{% endif %}
          {% if person.orcid %}<a href="https://orcid.org/{{ person.orcid }}" title="ORCID"><span class="fa fa-book"></span></a>{% endif %}
          {% if person.bluesky %}<a href="http://bsky.app/profile/{{ person.bluesky }}" title="Bluesky"><span class="fab fa-bluesky"></span></a>{% endif %}
          {% if person.website %}<a href="{{ person.website }}" title="Website"><span class="fa fa-rss"></span></a>{% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<style>
/* ── Section heading ── */
.tm-heading {
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}
.tm-heading-bar {
  width: 52px;
  height: 3px;
  background: #9d4844;
  border-radius: 2px;
  margin-bottom: 14px;
}
.tm-subhead {
  font-size: 14px;
  color: #999;
  margin-bottom: 34px;
}

/* ── Responsive grid: column count adapts to the viewport width ── */
.tm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px 26px;
  margin-bottom: 60px;
}

/* ── Card ── */
.tm-card {
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.32s cubic-bezier(.2,.7,.2,1), box-shadow 0.32s ease;
  display: flex;
  flex-direction: column;
}
.tm-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(157,72,68,0.20);
}

.tm-photo-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background: #f2f3f5;
}
.tm-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
  display: block;
  transition: transform 0.5s ease;
}
.tm-card:hover .tm-photo-wrap img,
.tm-card.tm-active .tm-photo-wrap img { transform: scale(1.06); }

/* ── Hover bio: white background, scrollable, brand accent ── */
.tm-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.97);
  color: #3a3a3a;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: default;
}
.tm-card:hover .tm-overlay,
.tm-card.tm-active .tm-overlay { opacity: 1; }
.tm-overlay-inner {
  height: 100%;
  overflow-y: auto;
  padding: 13px 15px;
  font-size: 12px;
  line-height: 1.55;
  text-align: left;
}
.tm-overlay-inner p { margin: 0 0 8px; }
.tm-overlay-inner p:last-child { margin-bottom: 0; }
.tm-overlay-inner a { color: #9d4844; font-weight: 600; }
.tm-overlay-inner::-webkit-scrollbar { width: 6px; }
.tm-overlay-inner::-webkit-scrollbar-track { background: #f2f2f2; }
.tm-overlay-inner::-webkit-scrollbar-thumb { background: #9d4844; border-radius: 3px; }

/* ── Meta ── */
.tm-meta { padding: 15px 16px 18px; }
.tm-name {
  font-weight: 700;
  font-size: 15.5px;
  color: #2b2b2b;
  line-height: 1.3;
}
.tm-position {
  color: #9d4844;
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 5px;
}
.tm-links { margin-top: 12px; display: flex; gap: 8px; }
.tm-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f4dddb;
  color: #9d4844;
  font-size: 13px;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.tm-links a:hover {
  background: #9d4844;
  color: #fff;
  transform: translateY(-2px);
}

.tm-touch-hint { display: none; }
@media (hover: none) { .tm-touch-hint { display: inline; } }

/* ── Phones: two columns ── */
@media (max-width: 576px) {
  .tm-grid { grid-template-columns: repeat(2, 1fr); gap: 18px 14px; }
  .tm-meta { padding: 12px 12px 14px; }
  .tm-overlay-inner { font-size: 10.5px; line-height: 1.4; padding: 10px; }
  .tm-name { font-size: 13.5px; }
  .tm-position { font-size: 10px; }
  .tm-links a { width: 27px; height: 27px; font-size: 12px; }
}
</style>

<script>
(function () {
  var cards = document.querySelectorAll('.tm-grid .tm-card');
  // Tap-to-reveal on touch devices (no hover there)
  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;          // let links work
      var wasActive = card.classList.contains('tm-active');
      cards.forEach(function (c) { c.classList.remove('tm-active'); });
      if (!wasActive) card.classList.add('tm-active');
    });
  });
})();
</script>
