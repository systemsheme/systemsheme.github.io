---
layout: gridlay
title: Research
subtitle: Asiri Lab Research
---

<style>
.research-section { margin: 30px 0; }
.research-section h4 { margin-bottom: 16px; }

/* Float layout (long text wraps around image) */
.research-float-section { overflow: hidden; }
.research-float-figure {
  float: right;
  width: 42%;
  max-width: 380px;
  margin: 4px 0 14px 24px;
}
.research-float-figure img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}
.research-float-figure figcaption {
  font-size: 0.85em;
  color: #404040;
  margin-top: 8px;
  line-height: 1.4;
  text-align: left;
}

/* Featured centered figure */
.research-feature {
  margin: 36px auto;
  text-align: center;
  max-width: 920px;
}
.research-feature img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
}
.research-feature figcaption {
  font-size: 0.9em;
  color: #404040;
  margin-top: 10px;
  line-height: 1.45;
  text-align: center;
}

/* Vertically-centered grid (balanced image + text) */
.research-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 28px;
}
.research-grid-image { flex: 0 0 calc(40% - 14px); margin: 0; }
.research-grid-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}
.research-grid-image figcaption {
  font-size: 0.85em;
  color: #404040;
  margin-top: 8px;
  line-height: 1.4;
  text-align: left;
}
.research-grid-text {
  flex: 1 1 50%;
  text-align: justify;
  font-size: 16px;
  line-height: 1.65;
}

.research-text {
  text-align: justify;
  font-size: 16px;
  line-height: 1.65;
}

@media (max-width: 768px) {
  .research-float-figure {
    float: none;
    width: 100%;
    max-width: 100%;
    margin: 0 0 18px 0;
  }
}
@media (max-width: 576px) {
  .research-section { margin: 22px 0; }
  .research-text,
  .research-grid-text { font-size: 14px; line-height: 1.6; }
  .research-feature { margin: 22px auto; }
  .research-feature figcaption,
  .research-float-figure figcaption,
  .research-grid-image figcaption { font-size: 0.78em; }
  .research-grid { flex-direction: column; gap: 16px; align-items: stretch; }
  .research-grid-image,
  .research-grid-text { flex: 1 1 100%; }
}
</style>

<div class="container" style="padding-top: 60px; margin-top: -60px;">
	<div class="jumbotron jumbotron-correct">
		<p style="font-size:14px;margin-top:10px;text-align:center">
			<em><strong style="color:#404040ff">"Divide each difficulty into as many parts as is feasible and necessary to resolve it." 
			<br>
			-René Descartes</strong></em>
			<br>
		</p>
		<h3 style="text-align:left"> A systems approach for studying hematopoiesis</h3>
		<p style="font-size:14px;margin-top:10px">
			The human blood system and its influence on health and disease is highly complex. Our blood consists of a diverse array of cell types that arise from a <strong style="color:#404040ff">hematopoietic stem cell (HSC)</strong> through a tightly regulated process known as hematopoiesis. Proper functioning of the blood system is essential for maintaining overall health, as blood cells play critical roles in oxygen transport, immune defense, and tissue repair. Dysregulation of hematopoiesis can lead to a variety of blood disorders, including anemia, immunodeficiencies, and hematologic malignancies. Understanding the intricate processes governing hematopoiesis is crucial for developing effective therapies for these conditions, especially in the aging population.
		</p>
	</div>
</div>

<div class="container logos-container">
	<figure class="fifth">
		<img src="{{ site.url }}{{ site.baseurl }}/img/960px-National_Cancer_Institute_logo.png" style="height: 30px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/Ludwig_Cancer_Research_Logo.jpg" style="height: 27px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/evansmds-logo.png" style="height: 37px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/ASHLogoSVG.png" style="height: 52px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/blueprint.jpg" style="height: 50px">
	</figure>
	<p><br></p>
</div>

<div align="left">
	<h1>
		<strong>Current Research</strong>
	</h1>
</div>
<hr>

<div id="Introduction1" class="col-sm-12 research-section research-float-section">
  <h4><u>Introduction</u></h4>
  <figure class="research-float-figure">
    <img src="/img/research/singlecell.jpeg" alt="Single Cell">
    <figcaption>Figure 1: Multi-omic analysis of single cells. <strong style="color:#404040ff"><a href="/pdfs/2023_blood_review.pdf">Ediriwickrema et al. <em>Blood</em> 2023</a></strong></figcaption>
  </figure>
  <p class="research-text">Myeloid neoplasms are heterogenous, clonal disorders arising from the malignant transformation of healthy <strong style="color:#404040ff">hematopoietic stem and progenitor cells (HSPCs)</strong>. The heterogeneity is due to the underlying clonal diversity of the disease and the variable functional properties of these clones. Therefore, it is not surprising that myeloid neoplasms have been historically described as syndromes with mostly ineffective treatment strategies. The inability to completely characterize the cellular architecture of myeloid neoplasms and link it to outcomes has limited our ability to manage and cure patients. Recent advancements in single cell technologies [<strong style="color:#404040ff"><a href="/pdfs/2023_blood_review.pdf">Ediriwickrema et al. <em>Blood</em> 2023</a></strong>] (Figure 1) can provide methods for addressing these limitations by allowing researchers to characterize blood cells with high resolution. However, as the field of single cell genomics expands at unprecedented rates, it is increasingly important to develop a rigorous framework for interpreting and validating important single cell observations with orthogonal computational and functional studies to provide meaningful services for patients. We have developed such a framework for studying normal and malignant hematopoiesis which has allowed us to identify new HSPCs in adult hematopoiesis [<strong style="color:#404040ff"><a href="/pdfs/2025_MPP.pdf">Ediriwickrema et al. <em>Cell Reports</em> 2025</a></strong>] (Figure 2), and clinically high-risk <strong style="color:#404040ff">leukemia stem cells (LSCs)</strong> in <strong style="color:#404040ff">adult acute myeloid leukemia (AML)</strong> at high resolution.</p>
</div>

<div id="Introduction2" class="col-sm-12">
  <figure class="research-feature">
    <img src="/img/research/updated-heme.jpg" alt="hematopoiesis">
    <figcaption>Figure 2: An updated model of adult human hematopoiesis. <strong style="color:#404040ff"><a href="/pdfs/2025_MPP.pdf">Ediriwickrema et al. <em>Cell Reports</em> 2025</a></strong></figcaption>
  </figure>
</div>

<div id="Introduction3" class="col-sm-12 research-section">
  <div class="research-grid">
    <figure class="research-grid-image">
      <img src="/img/research/csc-model.jpg" alt="LSC model">
      <figcaption>Figure 3: The LSC model of AML. <strong style="color:#404040ff"><a href="/pdfs/2023_blood_review.pdf">Ediriwickrema et al. <em>Blood</em> 2023</a></strong></figcaption>
    </figure>
    <div class="research-grid-text">
      <p>We are now using these methods to develop an integrative, multi-domain framework (Figure 3) for studying healthy and malignant hematopoiesis, with the long-term goal of designing more effective disease monitoring and treatment strategies for patients.</p>
      <p>Specifically, we will answer several important questions using the cancer stem cell model as a reference. First, how do <strong style="color:#404040ff">cancer stem cells (CSCs)</strong> emerge from healthy HSPCs, and can we identify features that distinguish CSCs from <strong style="color:#404040ff">preleukemic HSCs (pHSCs)</strong> and healthy HSPCs (Project 1)? Can we use this framework to study CSCs across other myeloid neoplasms (Project 2)? Finally, can we use this information to improve clinical disease monitoring assays and develop CSC targeted therapies to cure patients (Project 3)?</p>
    </div>
  </div>
</div>


<div class="col-sm-12">
	<hr>
	<h2><strong>Active Projects</strong></h2>
	<hr>
</div>

<!-- Project Slider: show/hide approach, no CSS transforms -->
<div class="col-sm-12" id="projectSlider">

  <div class="rp-slide" id="rp-slide-0">
    <h4><u>Project #1: Stem cells in healthy and malignant hematopoiesis</u></h4>
    <div class="row" style="font-size:17px;">
      <div class="col-sm-5" style="text-align:center;">
        <img src="/img/research/project1.png" class="img-responsive" alt="Project 1" style="width:100%;height:auto;">
        <figcaption style="font-size:0.9em;color:#404040ff;text-align:left;margin-top:5px;">Figure 4: Cancer stem cell model</figcaption>
      </div>
      <div class="col-sm-7" style="text-align:justify;">
        <p>Identifying CSCs, pHSCs, and healthy HSPCs requires confirming both the clonal nature of the cell and its functional capacity <em>in vivo</em>. We are developing single cell methods for both lineage tracing and multi-omic profiling to enhance functional and mechanistic studies in CSC pathogenesis. Our long term goal is to use these methods to develop stem cell specific clinical biomarker assays.</p>
      </div>
    </div>
  </div>

  <div class="rp-slide" id="rp-slide-1" style="display:none;">
    <h4><u>Project #2: Stem cell architecture in myeloid neoplasms</u></h4>
    <div class="row" style="font-size:17px;">
      <div class="col-sm-5" style="text-align:center;">
        <img src="/img/research/project2.png" class="img-responsive" alt="Project 2" style="width:65%;height:auto;margin:0 auto;display:block;">
        <figcaption style="font-size:0.9em;color:#404040ff;text-align:left;margin-top:5px;">Figure 5: Cellular hierarchies in myeloid malignancies</figcaption>
      </div>
      <div class="col-sm-7" style="text-align:justify;">
        <p>Myeloid CSCs are poorly defined in myeloid cancers like <strong style="color:#404040ff">myelodysplastic neoplasms (MDS)</strong>, <strong style="color:#404040ff">myeloproliferative neoplasms (MPN)</strong>, <strong style="color:#404040ff">systemic mastocytosis (SM)</strong>, and <strong style="color:#404040ff">chronic myelomonocytic leukemia (CMML)</strong>. We are currently applying our multi-omic single cell methods to study myeloid CSCs across myeloid malignancies. Through collaborations with multiple clinical investigators at Stanford and beyond, we are acquiring pre and on-treatment samples from patients receiving standard and novel anti-cancer therapies. These samples are being profiled prospectively with the goal of defining the cellular architecture across myeloid neoplasms on treatment using both single cell and bulk molecular profiling methods and functional hematologic assays.</p>
      </div>
    </div>
  </div>

  <div class="rp-slide" id="rp-slide-2" style="display:none;">
    <h4><u>Project #3: Predictive models and clinical assays</u></h4>
    <div class="row" style="font-size:17px;">
      <div class="col-sm-5" style="text-align:center;">
        <img src="/img/research/project3.png" class="img-responsive" alt="Project 3" style="width:100%;height:auto;">
        <figcaption style="font-size:0.9em;color:#404040ff;text-align:left;margin-top:5px;">Figure 6: Predictive models</figcaption>
      </div>
      <div class="col-sm-7" style="text-align:justify;">
        <p>A long-term goal is to improve the clinical management of patients with myeloid neoplasms. To address this goal, we are developing a multi-domain framework for linking neoplastic cells obtained at diagnosis and during treatment with outcomes. We are using this data to design computational models using machine learning to predict the natural history of myeloid neoplasms and its response to treatment. The goal is to develop clinical assays and predictive models to guide the study and management of myeloid cancers.</p>
      </div>
    </div>
  </div>

  <!-- Controls -->
  <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin-top:24px;">
    <button id="rp-prev" style="width:40px;height:40px;border-radius:50%;border:2px solid #bbb;background:#fff;color:#555;font-size:26px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0 0 2px 0;">&#8249;</button>
    <span id="rp-dots" style="display:flex;gap:8px;">
      <button class="rp-dot rp-dot-on" data-i="0" style="width:12px;height:12px;border-radius:50%;border:none;background:#555;cursor:pointer;padding:0;"></button>
      <button class="rp-dot" data-i="1" style="width:12px;height:12px;border-radius:50%;border:none;background:#c8c8c8;cursor:pointer;padding:0;"></button>
      <button class="rp-dot" data-i="2" style="width:12px;height:12px;border-radius:50%;border:none;background:#c8c8c8;cursor:pointer;padding:0;"></button>
    </span>
    <button id="rp-next" style="width:40px;height:40px;border-radius:50%;border:2px solid #bbb;background:#fff;color:#555;font-size:26px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0 0 2px 0;">&#8250;</button>
  </div>

</div>

<script>
(function(){
  var total   = 3;
  var current = 0;

  function goTo(n) {
    document.getElementById('rp-slide-' + current).style.display = 'none';
    current = (n + total) % total;
    document.getElementById('rp-slide-' + current).style.display = 'block';
    document.querySelectorAll('.rp-dot').forEach(function(d) {
      d.style.background = (parseInt(d.getAttribute('data-i')) === current) ? '#555' : '#c8c8c8';
    });
  }

  document.getElementById('rp-prev').addEventListener('click', function(){ goTo(current - 1); });
  document.getElementById('rp-next').addEventListener('click', function(){ goTo(current + 1); });
  document.querySelectorAll('.rp-dot').forEach(function(d){
    d.addEventListener('click', function(){ goTo(parseInt(d.getAttribute('data-i'))); });
  });

  var ps = document.getElementById('projectSlider');
  var touchStartX = 0;
  ps.addEventListener('touchstart', function(e){ touchStartX = e.touches[0].clientX; }, {passive: true});
  ps.addEventListener('touchend', function(e){
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  }, {passive: true});
})();
</script>

<style>
@media (max-width: 576px) {
  .rp-slide .row { display: flex; flex-wrap: nowrap; align-items: flex-start; }
  .rp-slide .col-sm-5 { width: 40% !important; flex: 0 0 40%; padding-right: 8px; }
  .rp-slide .col-sm-7 { width: 60% !important; flex: 0 0 60%; font-size: 14px !important; }
  .rp-slide h4 { font-size: 15px !important; }
  #rp-prev, #rp-next { width: 32px !important; height: 32px !important; font-size: 20px !important; }
}
</style>