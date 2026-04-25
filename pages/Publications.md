---
layout: gridlay
title: Publications
subtitle: Asiri Lab Publications
---

# **Publications**
#### For a complete list of publications see <a href="https://scholar.google.com/citations?user=6VtjQ5gAAAAJ&hl=en">Google Scholar</a> or <a href="https://www.ncbi.nlm.nih.gov/myncbi/asiri.ediriwickrema.1/bibliography/public/">PubMed</a>.

<div class="container ps-slider-outer" style="margin-top: 30px;">
  <div class="ps-slider-row" id="pubSlider">
    <button class="ps-arrow ps-prev" aria-label="Previous">&#8249;</button>
    <div class="ps-viewport">
      <div class="ps-track">
        {% for pub in site.data.Publications %}
        <div class="ps-slide">
          <div class="row" style="font-size: 17px;">
            <div class="col-sm-5" style="text-align: center;">
              <img src="{{ pub.image }}" alt="{{ pub.title }}" class="img-responsive" style="max-width:100%; height:auto;">
            </div>
            <div class="col-sm-7" style="text-align: justify;">
              <strong>{{ pub.title }}</strong><br>
              {% if pub.journal %}<strong>{{ pub.journal }} {{ pub.year }}</strong><br>{% else %}<strong>{{ pub.year }}</strong><br>{% endif %}
              {{ pub.authors | markdownify }}
              {{ pub.description | markdownify }}
              <div style="margin-top: 8px;">
                {% if pub.pubmed %}<a href="{{ pub.pubmed }}">[pubmed]</a> {% endif %}
                {% if pub.pdf %}<a href="{{ pub.pdf }}">[pdf]</a> {% endif %}
                {% if pub.journalLink %}<a href="{{ pub.journalLink }}">[{{ pub.journalShort }}]</a>{% endif %}
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
    <button class="ps-arrow ps-next" aria-label="Next">&#8250;</button>
  </div>
  <div class="ps-dots-row">
    {% for pub in site.data.Publications %}
    <button class="ps-dot{% if forloop.first %} ps-dot-active{% endif %}" aria-label="Publication {{ forloop.index }}"></button>
    {% endfor %}
  </div>
</div>

{% include page-slider.html slider_id="pubSlider" %}

<style>
@media (max-width: 576px) {
  .ps-slide .row { display: flex; flex-wrap: nowrap; align-items: flex-start; }
  .ps-slide .col-sm-5 { width: 40% !important; flex: 0 0 40%; padding-right: 8px; }
  .ps-slide .col-sm-7 { width: 60% !important; flex: 0 0 60%; font-size: 13px !important; }
}
</style>
