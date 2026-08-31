---
layout: gridlay
title: Clinic
subtitle: Asiri Lab Clinic
---

<style>
.clinic-heading { font-weight: 700; color: #333; margin: 8px 0 8px; }
.clinic-heading-bar { width: 52px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 26px; }
.clinic-card {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 4px 14px rgba(0,0,0,0.05);
  padding: 24px 26px;
  margin-bottom: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.clinic-card:hover { transform: translateY(-4px); box-shadow: 0 12px 26px rgba(157,72,68,0.16); }
.clinic-card h4 { color: #9d4844; font-weight: 700; margin: 0 0 12px; font-size: clamp(1.1rem, 1.4vw, 1.3rem); }
.clinic-card p { color: #404040; line-height: 1.65; margin: 0; text-align: justify; font-size: 15px; }
.clinic-card-media { display: flex; gap: 28px; align-items: center; }
.clinic-card-media .clinic-text { flex: 1 1 auto; min-width: 0; }
.clinic-card-media .clinic-media { flex: 0 0 34%; max-width: 300px; }
.clinic-card-media .clinic-media img { width: 100%; height: auto; border-radius: 6px; display: block; }
@media (max-width: 700px) {
  .clinic-card-media { flex-direction: column; align-items: stretch; }
  .clinic-card-media .clinic-media { flex: 1 1 auto; max-width: 100%; margin-top: 16px; }
}
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

	<div class="clinic-card clinic-card-media">
		<div class="clinic-text">
			<h4>MDS Center</h4>
			<p><a href="https://med.stanford.edu/profiles/peter-greenberg" target="_blank"><strong style="color:#404040ff">Dr. Peter Greenberg</strong></a> built the <a href="https://med.stanford.edu/hematology/patient-care/programs-and-centers.html" target="_blank"><strong style="color:#404040ff">MDS Center at Stanford</strong></a> in 1998 to provide sophisticated expertise for adults with MDS. We offer an integrative resource for both patients and clinicians to improve the care of our patients. If interested, please contact us to learn more about the program and our research initiatives.</p>
		</div>
		<div class="clinic-media">
			<img src="/img/blakewilbur.png" alt="Blake Wilbur Clinic">
		</div>
	</div>

	<div class="clinic-card">
		<h4>Clonal Hematopoiesis (CH) Clinic</h4>
		<p>In collaboration with <a href="https://www.thezhanglabstanford.com/work/chip-clinic" target="_blank"><strong style="color:#404040ff">Dr. Tian Zhang</strong></a>, we are building a clinic that specializes in the diagnosis and management of patients with CH. As CH is a new entity, we are actively engaging with patients to improve our understanding of CH and build new paradigms in clinical management. Please contact us if you are interested in learning about the CH programs at Stanford.</p>
	</div>

	<div class="clinic-card">
		<h4>Hematology Clinic</h4>
		<p>At Stanford, we treat a variety of malignant and noncancerous blood conditions. You can learn more about our clinical programs at <a href="https://stanfordhealthcare.org/medical-clinics/leukemia-hematology-program.html" target="_blank"><strong style="color:#404040ff">Stanford Health Care</strong></a>.</p>
	</div>
</div>
