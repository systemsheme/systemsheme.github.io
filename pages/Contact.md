---
layout: gridlay
title: Contact Us
subtitle: Asiri Lab Contact
---

<style>
.contact-section { margin-top: 34px; }
.contact-img img {
  width: 100%;
  height: auto;
  border-radius: 0;
  box-shadow: 0 2px 14px rgba(0,0,0,0.10);
  display: block;
}
.contact-text p { color: #404040; line-height: 1.7; text-align: justify; font-size: 15px; }
.contact-map iframe {
  width: 100%;
  height: 320px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 2px 14px rgba(0,0,0,0.10);
  display: block;
}
.contact-card {
  background: rgba(157, 72, 68, 0.06);
  border: 1px solid rgba(157, 72, 68, 0.14);
  border-radius: 10px;
  padding: 22px 24px;
}
.contact-card h4 { color: #9d4844; font-weight: 700; margin: 0 0 14px; font-size: 1.2rem; }
.contact-line { font-size: 14.5px; color: #333; line-height: 1.75; }
.contact-line + .contact-line { margin-top: 12px; }
.contact-line strong { color: #6f2f2c; }

/* Space between the map and the address card when stacked on phones/tablets */
@media (max-width: 991px) {
  .contact-map { margin-bottom: 26px; }
}
</style>

<div class="container" style="padding-top: 60px; margin-top: -60px;">
  <div class="jumbotron jumbotron-correct" style="padding-top: 12px; padding-bottom: 12px;">
      <h3 style="text-align:left"> Contact Us</h3>
  </div>
</div>

<div class="container contact-section">
  <div class="row">
    <div class="col-md-5 contact-img">
      <img src="/img/chihuly.png" alt="Lorry I. Lokey Stem Cell Research Building" />
    </div>
    <div class="col-md-7 contact-text">
      <p>We are located on the 3rd floor of the <strong><a href="https://med.stanford.edu/stemcell/research/sim1.html">Lorry I. Lokey Stem Cell Research Building</a></strong> at 265 Campus Drive, Stanford University School of Medicine. Asiri's office is room number G3101D and the lab is room number G3015.</p>

      <p>We encourage you to review our research <strong><a href="{{ site.baseurl }}/pages/Research">interests</a></strong> and <strong><a href="{{ site.baseurl }}/pages/Publications">publications</a></strong> on this website to learn more about our group. If you are interested in interviewing, rotating, collaborating, or learning more about our research, <strong><a href="mailto:asiri@stanford.edu">send Asiri an email</a></strong> to set up a time to talk about ongoing projects or new collaborations. Potential postdoctoral research and clinical fellows can include their CV or Biosketch, and a short statement on the types of projects that they are interested in pursuing in the Asiri Lab. You can learn about postdoctoral research positions at Stanford by visiting this <strong><a href="https://postdocs.stanford.edu/prospective-postdocs">website</a></strong>.</p>

      <p>If you are interested in philanthropically supporting our research, please visit our <strong><a href="https://med.stanford.edu/hematology/support-us.html">donations</a></strong> page for more information on how to contribute to our work.</p>
    </div>
  </div>

  <div class="row contact-section">
    <div class="col-md-7 contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.240070233619!2d-122.17755500000001!3d37.4314331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa4d3a0409ddd%3A0xcd7c01452d0736f0!2sLokey%20Stem%20Cell%20Research%20Building!5e0!3m2!1sen!2sus!4v1761548562264!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="col-md-5">
      <div class="contact-card">
        <h4>Asiri Lab</h4>
        <div class="contact-line">
          Lokey Stem Cell Research Building<br>
          Room G3015<br>
          265 Campus Drive<br>
          Stanford, CA 94305
        </div>
        <div class="contact-line">
          <strong>PI Phone:</strong> (650) 723-1358<br>
          <strong>PI Email:</strong> asiri (at) stanford.edu<br>
          <strong>Admin Phone:</strong> (650) 498-8643<br>
          <strong>Admin Email:</strong> evecarol (at) stanford.edu
        </div>
      </div>
    </div>
  </div>
</div>
