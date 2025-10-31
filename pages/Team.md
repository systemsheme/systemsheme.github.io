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


# **Lab Members**
{% for person in site.data.LabMembers %}
<hr>
<!-- The paddingtop and margin-top edits allow anchors to link properly. -->
<div id = "{{person.name}}" class="row" style="padding-top: 60px; margin-top: -60px;">
    <div class="col-sm-3">
        <img class="img-responsive" src="{{person.image}}" {% if person.altimage %} onmouseover="this.src='{{person.altimage}}';" onmouseout="this.src='{{person.image}}';" {% endif %} alt="{{person.name}}"><br>
        <strong>{{person.name}}</strong> <br>
        {% if person.pronouns %}
           <em>{{person.pronouns}}</em> <br>
        {% endif %}
        {{person.position}} <br>
        {% if person.advisor %}
           {{person.advisor}}<br>
        {% endif %}
        <em>{{person.email}}</em> <br>
        {% if person.scholar %}
          <a href= "http://scholar.google.com/citations?user={{person.scholar}}"><span class="fa fa-graduation-cap" aria-hidden="true"></span> Google Scholar </a> <br>
        {% endif %}
        {% if person.orcid %}
          <a href= "https://orcid.org/{{person.orcid}}"><span class="fa fa-book" aria-hidden="true"></span> ORCID </a> <br>
        {% endif %}
        {% if person.bluesky %}
          <a href= "http://bsky.app/profile/{{person.bleusky}}"><span class="fab fa-bluesky" aria-hidden="true"></span> @{{person.bluesky}} </a> <br>
        {% endif %}
        {% if person.website %}
          <a href= "{{person.website}}"><span class="fa fa-rss" aria-hidden="true"></span> {{person.website}} </a> <br>
        {% endif %}
    </div>
    <div class="col-sm-8" style="text-align: justify">
        {{person.description | markdownify}}
    </div>
</div>
{% endfor %}

<!-- <hr>

### **Alumni**
<hr>
<table>
  <tr>
    <th>Name</th>
    <th>Years in Lab</th>
    <th>Position in Lab</th>
    <th>Subsequent Position</th>
  </tr>

  {% for alumni in site.data.Alumni %}

  <tr>
    <td>{{alumni.name}}</td>
    <td>{{alumni.years}}</td>
    <td>{{alumni.position}}</td>
    <td>{{alumni.nextPosition}}</td>
  </tr>

  {% endfor %}
</table>

### **Rotation Students**
<hr>
<table>
  <tr>
    <th>Name</th>
    <th>Program</th>
    <th>Year / Quarter</th>
    <th>Thesis Lab</th>
  </tr>

  {% for rotation in site.data.Rotation %}

  <tr>
    <td>{{rotation.name}}</td>
    <td>{{rotation.program}}</td>
    <td>{{rotation.quarter}}</td>
    <td>{{rotation.thesisLab}}</td>
  </tr>

  {% endfor %}
</table> -->