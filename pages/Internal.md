---
layout: gridlay
title: Internal Resources
subtitle: Asiri Lab Resources
---

<style>
.resources-list { margin-top: 1.5rem; }

.resource-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.75rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.resource-card:hover {
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.resource-card .resource-media {
  flex: 0 0 220px;
  max-width: 220px;
  text-align: center;
}
.resource-card .resource-media a {
  display: inline-block;
  width: 100%;
}
.resource-card .resource-media img {
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: contain;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.resource-card .resource-body {
  flex: 1 1 320px;
  min-width: 0;
}
.resource-card .resource-body h5 {
  margin: 0 0 0.65rem 0;
  font-size: 1.9rem;
  font-weight: 700;
  color: #2b2b2b;
  line-height: 1.25;
}
.resource-card .resource-body p {
  text-align: justify;
  margin-bottom: 0;
  color: #404040;
  line-height: 1.55;
}

@media (max-width: 600px) {
  .resource-card { padding: 1rem; gap: 1rem; }
  .resource-card .resource-media { flex: 0 0 100%; max-width: 100%; }
  .resource-card .resource-media img { max-height: 160px; }
}
</style>

# **Resources**

<div class="resources-list">
{% for item in site.data.Internal_Resources %}
<div id="{{item.title}}" class="resource-card" style="scroll-margin-top: 80px;">
  <div class="resource-media">
    <a href="{{item.imageLink}}" target="_blank" rel="noopener"><img src="{{item.image}}" alt="{{item.title}}"></a>
  </div>
  <div class="resource-body">
    <h5>{{item.title}}</h5>
    {{item.description | markdownify}}
  </div>
</div>
{% endfor %}
</div>
