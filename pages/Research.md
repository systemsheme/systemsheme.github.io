---
layout: gridlay
title: Research
subtitle: Asiri Lab Research
---

<style>
/* Section headings with maroon accent (matches Team/Resources) */
.rs-heading { font-weight: 700; color: #333; margin-bottom: 8px; }
.rs-heading-bar { width: 56px; height: 3px; background: #9d4844; border-radius: 2px; margin-bottom: 26px; }

/* ── Manuscript "page" for Current Research ── */
.manuscript {
  max-width: 880px;
  margin: 10px auto 24px;
  background: #fff;
  padding: clamp(22px, 4vw, 60px);
  border: 1px solid #e5e5e5;
  box-shadow: 0 3px 22px rgba(0,0,0,0.09);
}
.manuscript .rs-heading {
  font-size: clamp(1.7rem, 3.4vw, 2.5rem);
  margin-bottom: 8px;
}
.manuscript h4 {
  font-size: clamp(1.05rem, 1.4vw + 0.6rem, 1.4rem);
  margin-bottom: 14px;
}
.research-section { margin: clamp(20px, 3vw, 32px) 0; }

/* Fluid, justified body text (manuscript feel) */
.research-text,
.research-grid-text {
  text-align: justify;
  font-size: clamp(14px, 0.55vw + 11.5px, 17px);
  line-height: 1.75;
  color: #2b2b2b;
}
.research-grid-text { flex: 1 1 0; min-width: 0; }
.research-grid-text p { margin-bottom: 14px; }

/* Float layout (long text wraps around image) */
.research-float-section { overflow: hidden; }
.research-float-figure {
  float: right;
  width: 42%;
  max-width: 360px;
  margin: 4px 0 16px 26px;
}
/* Left-floated variant (e.g. Figure 3) */
.research-float-left {
  float: left;
  margin: 4px 26px 16px 0;
}
.research-float-figure img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  background: #fff;
  display: block;
  border-radius: 0;
  border: 1px solid #d8d8d8;
  box-shadow: 0 1px 7px rgba(0,0,0,0.08);
}

/* Featured centered figure */
.research-feature {
  margin: clamp(24px, 4vw, 40px) auto;
  text-align: center;
  max-width: 920px;
}
.research-feature img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 0;
  border: 1px solid #d8d8d8;
  box-shadow: 0 1px 8px rgba(0,0,0,0.08);
}

/* Vertically-centered grid (balanced image + text) */
.research-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(18px, 3vw, 30px);
}
.research-grid-image { flex: 0 0 calc(40% - 15px); margin: 0; }
.research-grid-image img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  background: #fff;
  display: block;
  border-radius: 0;
  border: 1px solid #d8d8d8;
  box-shadow: 0 1px 7px rgba(0,0,0,0.08);
}

/* Figure captions (fluid) */
.research-float-figure figcaption,
.research-feature figcaption,
.research-grid-image figcaption {
  font-size: clamp(11.5px, 0.4vw + 10px, 13.5px);
  color: #555;
  margin-top: 9px;
  line-height: 1.5;
  text-align: left;
}
.research-feature figcaption { text-align: center; }

/* Click-to-enlarge figures */
.research-float-figure img,
.research-feature img,
.research-grid-image img { cursor: zoom-in; }
.rf-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.86);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 28px;
  cursor: zoom-out;
}
.rf-lightbox.open { display: flex; }
.rf-lightbox img {
  max-width: 95vw;
  max-height: 92vh;
  object-fit: contain;
  background: #fff;
  border-radius: 0;
  box-shadow: 0 10px 44px rgba(0,0,0,0.55);
}
.rf-lightbox-close {
  position: absolute;
  top: 18px;
  right: 22px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,0.16);
  color: #fff;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 3px 0;
}
.rf-lightbox-close:hover { background: rgba(255,255,255,0.32); }

/* ── Funding / supporters band ── */
.funding-section {
  text-align: center;
  margin: 34px auto 26px;
  padding: 28px 10px 30px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}
.funding-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #9d4844;
  margin: 0 0 24px;
}
.funding-logos {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 34px 52px;
}
.funding-logos img {
  width: auto;
  object-fit: contain;
  opacity: 0.9;
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.funding-logos img:hover {
  opacity: 1;
  transform: scale(1.06);
}
@media (max-width: 576px) {
  .funding-logos { gap: 26px 32px; }
  .funding-logos img { transform: scale(0.85); }
}

/* ── Two-column layout: manuscript (left) + vertical projects rail (right) ── */
.research-layout {
  display: flex;
  align-items: flex-start;
  gap: 34px;
}
.research-layout .manuscript {
  flex: 1 1 auto;
  max-width: none;
  margin: 10px 0 24px;
}
.projects-rail {
  flex: 0 0 clamp(300px, 30%, 380px);
  position: sticky;
  top: 16px;
  margin-top: 10px;
}
.projects-rail .rs-heading { font-size: clamp(1.4rem, 2vw, 1.9rem); }

/* Active Projects: vertical slider of hover-reveal cards */
.rp-vscroll {
  max-height: 82vh;
  overflow-y: auto;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 4px 8px 8px 2px;
  scrollbar-width: thin;
  scrollbar-color: #9d4844 #f2f2f2;
}
.rp-vscroll::-webkit-scrollbar { width: 8px; }
.rp-vscroll::-webkit-scrollbar-track { background: #f2f2f2; border-radius: 4px; }
.rp-vscroll::-webkit-scrollbar-thumb { background: #9d4844; border-radius: 4px; }
.rp-vscroll::-webkit-scrollbar-thumb:hover { background: #6f2f2c; }
.rp-card {
  scroll-snap-align: start;
  flex: 0 0 auto;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}
.rp-card:hover { box-shadow: 0 10px 26px rgba(157,72,68,0.20); }

.rp-photo-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #fff;
}
.rp-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 14px;
  transition: transform 0.5s ease;
}
.rp-card:hover .rp-photo-wrap img,
.rp-card.rp-active .rp-photo-wrap img { transform: scale(1.04); }

/* Hover reveals description: white, scrollable */
.rp-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.97);
  color: #3a3a3a;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: default;
}
.rp-card:hover .rp-overlay,
.rp-card.rp-active .rp-overlay { opacity: 1; }
.rp-overlay-inner {
  height: 100%;
  overflow-y: auto;
  padding: 16px 18px;
  font-size: clamp(12px, 0.4vw + 11px, 14px);
  line-height: 1.6;
  text-align: left;
}
.rp-overlay-inner::-webkit-scrollbar { width: 6px; }
.rp-overlay-inner::-webkit-scrollbar-track { background: #f2f2f2; }
.rp-overlay-inner::-webkit-scrollbar-thumb { background: #9d4844; border-radius: 3px; }

.rp-meta { padding: 13px 16px 16px; }
.rp-title { color: #9d4844; font-weight: 700; font-size: clamp(1.05rem, 0.5vw + 0.9rem, 1.25rem); line-height: 1.3; margin: 0; }

@media (max-width: 768px) {
  .research-float-figure {
    float: none;
    width: 100%;
    max-width: 340px;
    margin: 0 auto 18px;
  }
}
/* Stack the two columns; projects become a grid below Current Research */
@media (max-width: 900px) {
  .research-layout { flex-direction: column; }
  .research-layout .manuscript { max-width: 880px; width: 100%; margin: 10px auto 0; }
  .projects-rail { position: static; flex: 1 1 auto; width: 100%; max-width: 880px; margin: 30px auto 0; }
  .rp-vscroll {
    max-height: none;
    overflow: visible;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 24px;
    padding: 4px 0;
  }
}
@media (max-width: 576px) {
  .research-grid { flex-direction: column; gap: 16px; align-items: stretch; }
  .research-grid-image,
  .research-grid-text { flex: 1 1 100%; }
  .research-grid-image { max-width: 340px; margin: 0 auto; }
  .rp-vscroll { grid-template-columns: repeat(2, 1fr); gap: 16px 14px; }
  .rp-title { font-size: 1.05rem; }
  .rp-overlay-inner { font-size: 11px; line-height: 1.45; padding: 12px; }
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

<div class="container funding-section">
	<p class="funding-label">Supported By</p>
	<div class="funding-logos">
		<img src="{{ site.url }}{{ site.baseurl }}/img/960px-National_Cancer_Institute_logo.png" alt="National Cancer Institute" style="height: 50px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/Ludwig_Cancer_Research_Logo.jpg" alt="Ludwig Cancer Research" style="height: 46px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/evansmds-logo.png" alt="Evans MDS" style="height: 62px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/ASHLogoSVG.png" alt="American Society of Hematology" style="height: 84px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/blueprint.jpg" alt="Blueprint Medicines" style="height: 80px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/Nih-nia-logo-landscape.png" alt="National Institute on Aging" style="height: 60px">
		<img src="{{ site.url }}{{ site.baseurl }}/img/lrf.png" alt="Leukemia Research Foundation" style="height: 68px">
	</div>
</div>

<div class="container">
<div class="research-layout">
<div class="manuscript">
	<h1 class="rs-heading"><strong>Current Research</strong></h1>
	<div class="rs-heading-bar"></div>

<div id="Introduction1" class="research-section research-float-section">
  <h4><u>Introduction</u></h4>
  <figure class="research-float-figure">
    <img src="/img/research/singlecell.jpeg" alt="Single Cell">
    <figcaption>Figure 1: Multi-omic analysis of single cells. <strong style="color:#404040ff"><a href="/pdfs/2023_blood_review.pdf">Ediriwickrema et al. <em>Blood</em> 2023</a></strong></figcaption>
  </figure>
  <p class="research-text">Myeloid neoplasms are heterogenous, clonal disorders arising from the malignant transformation of healthy <strong style="color:#404040ff">hematopoietic stem and progenitor cells (HSPCs)</strong>. The heterogeneity is due to the underlying clonal diversity of the disease and the variable functional properties of these clones. Therefore, it is not surprising that myeloid neoplasms have been historically described as syndromes with mostly ineffective treatment strategies. The inability to completely characterize the cellular architecture of myeloid neoplasms and link it to outcomes has limited our ability to manage and cure patients. Recent advancements in single cell technologies [<strong style="color:#404040ff"><a href="/pdfs/2023_blood_review.pdf">Ediriwickrema et al. <em>Blood</em> 2023</a></strong>] (Figure 1) can provide methods for addressing these limitations by allowing researchers to characterize blood cells with high resolution. However, as the field of single cell genomics expands at unprecedented rates, it is increasingly important to develop a rigorous framework for interpreting and validating important single cell observations with orthogonal computational and functional studies to provide meaningful services for patients. We have developed such a framework for studying normal and malignant hematopoiesis which has allowed us to identify new HSPCs in adult hematopoiesis [<strong style="color:#404040ff"><a href="/pdfs/2025_MPP.pdf">Ediriwickrema et al. <em>Cell Reports</em> 2025</a></strong>] (Figure 2), and clinically high-risk <strong style="color:#404040ff">leukemia stem cells (LSCs)</strong> in <strong style="color:#404040ff">adult acute myeloid leukemia (AML)</strong> at high resolution.</p>
</div>

<div id="Introduction2">
  <figure class="research-feature">
    <img src="/img/research/updated-heme.jpg" alt="hematopoiesis">
    <figcaption>Figure 2: An updated model of adult human hematopoiesis. <strong style="color:#404040ff"><a href="/pdfs/2025_MPP.pdf">Ediriwickrema et al. <em>Cell Reports</em> 2025</a></strong></figcaption>
  </figure>
</div>

<div id="Introduction3" class="research-section research-float-section">
  <figure class="research-float-figure research-float-left">
    <img src="/img/research/csc-model.jpg" alt="LSC model">
    <figcaption>Figure 3: The LSC model of AML. <strong style="color:#404040ff"><a href="/pdfs/2023_blood_review.pdf">Ediriwickrema et al. <em>Blood</em> 2023</a></strong></figcaption>
  </figure>
  <p class="research-text">We are now using these methods to develop an integrative, multi-domain framework (Figure 3) for studying healthy and malignant hematopoiesis, with the long-term goal of designing more effective disease monitoring and treatment strategies for patients.</p>
  <p class="research-text">Specifically, we will answer several important questions using the cancer stem cell model as a reference. First, how do <strong style="color:#404040ff">cancer stem cells (CSCs)</strong> emerge from healthy HSPCs, and can we identify features that distinguish CSCs from <strong style="color:#404040ff">preleukemic HSCs (pHSCs)</strong> and healthy HSPCs (Project 1)? Can we use this framework to study CSCs across other myeloid neoplasms (Project 2)? Finally, can we use this information to improve clinical disease monitoring assays and develop CSC targeted therapies to cure patients (Project 3)?</p>
</div>
</div><!-- .manuscript -->

<aside class="projects-rail">
	<h2 class="rs-heading"><strong>Active Projects</strong></h2>
	<div class="rs-heading-bar"></div>
	<div class="rp-vscroll" id="projectGrid">
	{% for project in site.data.Projects %}
	  <div class="rp-card">
	    <div class="rp-photo-wrap">
	      {% if project.image %}<img src="{{ project.image }}" alt="{{ project.title }}">{% endif %}
	      <div class="rp-overlay"><div class="rp-overlay-inner">{{ project.description }}</div></div>
	    </div>
	    <div class="rp-meta">
	      <h4 class="rp-title">{{ project.title }}</h4>
	    </div>
	  </div>
	{% endfor %}
	</div>
</aside>
</div><!-- .research-layout -->
</div><!-- .container -->

<script>
(function () {
  var grid = document.getElementById('projectGrid');
  if (!grid) return;
  var cards = grid.querySelectorAll('.rp-card');
  // Tap-to-reveal on touch devices (no hover there)
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var wasActive = card.classList.contains('rp-active');
      cards.forEach(function (c) { c.classList.remove('rp-active'); });
      if (!wasActive) card.classList.add('rp-active');
    });
  });
})();
</script>

<!-- Click-to-enlarge lightbox for the main research figures -->
<div class="rf-lightbox" id="rfLightbox" role="dialog" aria-modal="true" aria-label="Enlarged figure">
  <button class="rf-lightbox-close" aria-label="Close">&times;</button>
  <img src="" alt="">
</div>

<script>
(function () {
  var lb = document.getElementById('rfLightbox');
  if (!lb) return;
  var lbImg = lb.querySelector('img');
  var figs = document.querySelectorAll('.research-float-figure img, .research-feature img, .research-grid-image img');

  function open(img) {
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open');
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
  }

  figs.forEach(function (img) {
    img.addEventListener('click', function () { open(img); });
  });
  lb.addEventListener('click', close);          // click anywhere (backdrop, image, or ✕) closes
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) close();
  });
})();
</script>
