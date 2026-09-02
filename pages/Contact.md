---
layout: gridlay
title: Contact Us
subtitle: Asiri Lab Contact
---

<style>
.contact-section { margin-top: 34px; }

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: stretch;
  margin-top: 34px;
}
@media (max-width: 820px) { .contact-grid { grid-template-columns: 1fr; } }

.contact-tile {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 6px 18px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}
.contact-tile:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(157,72,68,0.16); }

.contact-tile-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #f4f4f4;
  border-bottom: 1px solid #f0f0f0;
}
.contact-tile-media img,
.contact-tile-media iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
  display: block;
}
/* Location image sits centered at its natural ratio (no cover-crop distortion) */
.contact-tile-media--img { background: #fff; }
.contact-tile-media--img img {
  object-fit: contain;
  padding: 16px;
}

.contact-tile-body {
  padding: 22px 26px 26px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
.contact-tile-body h4 {
  color: #9d4844;
  font-weight: 700;
  margin: 0 0 14px;
  font-size: clamp(1.15rem, 0.6vw + 1rem, 1.4rem);
}
.contact-tile-body p {
  color: #404040;
  line-height: 1.7;
  font-size: 14.5px;
  margin: 0 0 12px;
}
.contact-tile-body p:last-child { margin-bottom: 0; }
.contact-tile-body a { color: #9d4844; font-weight: 600; }

.contact-addr { font-size: 14.5px; color: #333; line-height: 1.8; }
.contact-addr + .contact-addr { margin-top: 16px; }
.contact-addr strong { color: #6f2f2c; }
</style>

<div class="container" style="padding-top: 60px; margin-top: -60px;">
  <div class="jumbotron jumbotron-correct" style="padding-top: 12px; padding-bottom: 12px;">
      <h3 style="text-align:left"> Contact Us</h3>
  </div>
</div>

<div class="container">
  <div class="contact-grid">

    <div class="contact-tile">
      <div class="contact-tile-media contact-tile-media--img">
        <img src="/img/chihuly.png" alt="Lorry I. Lokey Stem Cell Research Building" />
      </div>
      <div class="contact-tile-body">
        <h4>Our Location</h4>
        <p>We are located on the 3rd floor of the <strong><a href="https://med.stanford.edu/stemcell/research/sim1.html">Lorry I. Lokey Stem Cell Research Building</a></strong> at 265 Campus Drive, Stanford University School of Medicine. Asiri's office is room number G3101D and the lab is room number G3015.</p>
        <p>We encourage you to review our research <strong><a href="{{ site.baseurl }}/pages/Research">interests</a></strong> and <strong><a href="{{ site.baseurl }}/pages/Publications">publications</a></strong> on this website to learn more about our group. If you are interested in interviewing, rotating, collaborating, or learning more about our research, <strong><a href="mailto:asiri@stanford.edu">send Asiri an email</a></strong> to set up a time to talk about ongoing projects or new collaborations. Potential postdoctoral research and clinical fellows can include their CV or Biosketch, and a short statement on the types of projects that they are interested in pursuing in the Asiri Lab. You can learn about postdoctoral research positions at Stanford by visiting this <strong><a href="https://postdocs.stanford.edu/prospective-postdocs">website</a></strong>.</p>
        <p>If you are interested in philanthropically supporting our research, please visit our <strong><a href="https://med.stanford.edu/hematology/support-us.html">donations</a></strong> page for more information on how to contribute to our work.</p>
      </div>
    </div>

    <div class="contact-tile">
      <div class="contact-tile-media">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.240070233619!2d-122.17755500000001!3d37.4314331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa4d3a0409ddd%3A0xcd7c01452d0736f0!2sLokey%20Stem%20Cell%20Research%20Building!5e0!3m2!1sen!2sus!4v1761548562264!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="contact-tile-body">
        <h4>Asiri Lab</h4>
        <div class="contact-addr">
          Lokey Stem Cell Research Building<br>
          Room G3015<br>
          265 Campus Drive<br>
          Stanford, CA 94305
        </div>
        <div class="contact-addr">
          <strong>PI Phone:</strong> (650) 723-1358<br>
          <strong>PI Email:</strong> asiri (at) stanford.edu<br>
          <strong>Admin Phone:</strong> (650) 498-8643<br>
          <strong>Admin Email:</strong> evecarol (at) stanford.edu
        </div>
      </div>
    </div>

  </div>
</div>
