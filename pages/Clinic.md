---
layout: gridlay
title: Clinic
subtitle: Asiri Lab Clinic
---

<style>
.clinic-heading { font-weight: 700; color: #333; margin: 8px 0 8px; }
.clinic-heading-bar { width: 52px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 26px; }

.clinic-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px 24px;
  align-items: stretch;
  margin-bottom: 44px;
}
@media (max-width: 820px) { .clinic-grid { grid-template-columns: 1fr; } }
.clinic-card {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 4px 14px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}
.clinic-card:hover { transform: translateY(-4px); box-shadow: 0 12px 26px rgba(157,72,68,0.16); }

/* Image card with hover-reveal (MDS Center) */
.clinic-photo-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}
.clinic-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.clinic-card:hover .clinic-photo-wrap img,
.clinic-card.clinic-active .clinic-photo-wrap img { transform: scale(1.04); }
.clinic-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.98);
  color: #3a3a3a;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: default;
}
.clinic-card:hover .clinic-overlay,
.clinic-card.clinic-active .clinic-overlay { opacity: 1; }
.clinic-overlay-inner {
  height: 100%;
  overflow-y: auto;
  padding: 14px 16px;
  font-size: 12.5px;
  line-height: 1.55;
  text-align: left;
}
.clinic-overlay-inner a { color: #9d4844; font-weight: 600; }
.clinic-overlay-inner::-webkit-scrollbar { width: 6px; }
.clinic-overlay-inner::-webkit-scrollbar-track { background: #f2f2f2; }
.clinic-overlay-inner::-webkit-scrollbar-thumb { background: #9d4844; border-radius: 3px; }

.clinic-meta { padding: 18px 18px 12px; }
.clinic-title { color: #9d4844; font-weight: 700; font-size: clamp(1.05rem, 0.5vw + 0.9rem, 1.25rem); line-height: 1.3; margin: 0; }

/* Text-only card (CH Clinic, Hematology Clinic) */
.clinic-body { padding: 18px 18px 20px; }
.clinic-body h4 { color: #9d4844; font-weight: 700; font-size: clamp(1.05rem, 0.5vw + 0.9rem, 1.25rem); margin: 0 0 10px; }
.clinic-body p { font-size: 13px; line-height: 1.6; color: #404040; text-align: left; margin: 0; }
.clinic-body a { color: #9d4844; font-weight: 600; }
</style>

<div class="container" style="padding-top: 60px; margin-top: -60px;">
	<div class="jumbotron jumbotron-correct">
		<h3 style="text-align:left"> Clinical programs in myeloid malignancies and clonal hematopoiesis</h3>
		<p style="font-size:14px;margin-top:10px">
			Dr. Asiri Ediriwickrema maintains an active clinic within the <a href="https://med.stanford.edu/hematology/patient-care.html" target='_blank'><strong style="color:#404040ff">Division of Hematology at Stanford</strong></a> and the <a href="https://med.stanford.edu/cancer.html" target='_blank'><strong style="color:#404040ff">Stanford Cancer Institute</strong></a>.  His clinical focus is on the diagnosis, evaluation, and management of patients with <strong style="color:#404040ff">myelodysplastic neoplasms (MDS)</strong> and <strong style="color:#404040ff">clonal hematopoiesis</strong>. He works closely with a multidisciplinary team of hematologists, oncologists, pathologists, advanced practice providers, nurse practitioners and researchers to ensure that patients receive comprehensive care tailored to their individual needs. Dr. Ediriwickrema is passionate about educating patients and their families about their diagnosis and treatment options, empowering them to make informed decisions about their care.
		</p>
	</div>
</div>

<div class="container">
	<h2 class="clinic-heading"><strong>Clinical Programs</strong></h2>
	<div class="clinic-heading-bar"></div>

	<div class="clinic-grid" id="clinicGrid">

		<div class="clinic-card">
			<div class="clinic-meta"><h4 class="clinic-title">MDS Center</h4></div>
			<div class="clinic-photo-wrap">
				<img src="/img/som.jpg" alt="MDS Center">
				<div class="clinic-overlay">
					<div class="clinic-overlay-inner">
						<p><a href="https://med.stanford.edu/profiles/peter-greenberg" target="_blank"><strong style="color:#404040ff">Dr. Peter Greenberg</strong></a> built the <a href="https://med.stanford.edu/hematology/patient-care/programs-and-centers.html" target="_blank"><strong style="color:#404040ff">MDS Center at Stanford</strong></a> in 1998 to provide sophisticated expertise for adults with MDS. We offer an integrative resource for both patients and clinicians to improve the care of our patients. If interested, please contact us to learn more about the program and our research initiatives.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="clinic-card">
			<div class="clinic-meta"><h4 class="clinic-title">Clonal Hematopoiesis (CH) Clinic</h4></div>
			<div class="clinic-photo-wrap">
				<img src="/img/background-ccsr-01.jpg" alt="Clonal Hematopoiesis Clinic">
				<div class="clinic-overlay">
					<div class="clinic-overlay-inner">
						<p>In collaboration with <a href="https://www.thezhanglabstanford.com/work/chip-clinic" target="_blank"><strong style="color:#404040ff">Dr. Tian Zhang</strong></a>, we are building a clinic that specializes in the diagnosis and management of patients with CH. As CH is a new entity, we are actively engaging with patients to improve our understanding of CH and build new paradigms in clinical management. Please contact us if you are interested in learning about the CH programs at Stanford.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="clinic-card">
			<div class="clinic-meta"><h4 class="clinic-title">Hematology Clinic</h4></div>
			<div class="clinic-photo-wrap">
				<img src="/img/blakewilbur.png" alt="Hematology Clinic">
				<div class="clinic-overlay">
					<div class="clinic-overlay-inner">
						<p>At Stanford, we treat a variety of malignant and noncancerous blood conditions. You can learn more about our clinical programs at <a href="https://stanfordhealthcare.org/medical-clinics/leukemia-hematology-program.html" target="_blank"><strong style="color:#404040ff">Stanford Health Care</strong></a>.</p>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>

<script>
(function () {
  var cards = document.querySelectorAll('#clinicGrid .clinic-card');
  // Tap-to-reveal on touch devices for cards with a hover overlay
  cards.forEach(function (card) {
    if (!card.querySelector('.clinic-overlay')) return;
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      card.classList.toggle('clinic-active');
    });
  });
})();
</script>
