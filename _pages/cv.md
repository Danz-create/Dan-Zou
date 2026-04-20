---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- 上传 CV PDF 到 files/cv.pdf 后取消下面这行注释:
[📄 Download CV (PDF)](/files/cv.pdf)
-->

## 🎓 Education

<div class="timeline">

  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-head">
      <h3 class="timeline-title">Ph.D. in Human Geography</h3>
      <span class="timeline-date">Sep. 2021 – Jun. 2025</span>
    </div>
    <div class="timeline-sub">Sun Yat-sen University, Guangzhou, China</div>
    <ul class="timeline-meta">
      <li><b>Supervisor:</b> <a href="https://scholar.google.com/citations?user=TTeo-2IAAAAJ&hl=zh-CN">Prof. Suhong Zhou</a></li>
      <li><b>Dissertation:</b> <em>Geospatial differentiation, factors, and individual behavioral effects of virtual activity preferences among Guangzhou residents</em></li>
      <li>🏆 <b>Excellent Doctoral Dissertation Award</b>, School of Geography and Planning</li>
    </ul>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-head">
      <h3 class="timeline-title">Visiting PhD Student</h3>
      <span class="timeline-date">Dec. 2023 – Oct. 2024</span>
    </div>
    <div class="timeline-sub">Pierre Louis Institute of Epidemiology and Public Health, Paris, France</div>
    <ul class="timeline-meta">
      <li><b>Co-supervisor:</b> Dr. Basile Chaix</li>
    </ul>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-head">
      <h3 class="timeline-title">M.S. in Surveying and Mapping Engineering</h3>
      <span class="timeline-date">Sep. 2018 – Jul. 2020</span>
    </div>
    <div class="timeline-sub">Sun Yat-sen University, Guangzhou, China</div>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-head">
      <h3 class="timeline-title">B.S. in Geographic Information Science</h3>
      <span class="timeline-date">Sep. 2014 – Jul. 2018</span>
    </div>
    <div class="timeline-sub">Dalian Maritime University, Dalian, China</div>
  </div>

</div>

## 💼 Work Experience

<div class="timeline">

  <div class="timeline-item timeline-item--current">
    <div class="timeline-dot"></div>
    <div class="timeline-head">
      <h3 class="timeline-title">Postdoctoral Researcher</h3>
      <span class="timeline-date">Dec. 2025 – Present</span>
    </div>
    <div class="timeline-sub">The University of Alabama, Tuscaloosa, USA</div>
    <ul class="timeline-meta">
      <li><b>Supervisor:</b> <a href="https://scholar.google.com/citations?user=Uy76pMcAAAAJ&hl=en">Prof. Xinyue Ye</a></li>
    </ul>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-head">
      <h3 class="timeline-title">Research Assistant</h3>
      <span class="timeline-date">Aug. 2020 – Jul. 2021</span>
    </div>
    <div class="timeline-sub">The Hong Kong Polytechnic University, Hong Kong, China</div>
    <ul class="timeline-meta">
      <li><b>Supervisor:</b> Assoc. Prof. Yang Xu</li>
    </ul>
  </div>

</div>

## 🔬 Research Areas

GIScience and GeoAI, with a focus on spatial–temporal knowledge representation and integration for applications in:

<div class="chip-row">
  <span class="chip chip--primary">Human Mobility</span>
  <span class="chip chip--primary">Disaster Resilience</span>
  <span class="chip chip--primary">Environmental Health</span>
</div>

## 📁 Project Experience

<div class="project-list">

  <div class="project-card">
    <div class="project-head">
      <h3>Urban Residents' Behavior and Environmental Exposure Health Study</h3>
      <span class="timeline-date">May – Nov. 2023</span>
    </div>
    <p>Designed surveys, coordinated sensor customization with suppliers, and provided ongoing support to participants to ensure full completion of the study (<em>n = 20</em>).</p>
  </div>

  <div class="project-card">
    <div class="project-head">
      <h3>Optimizing Locations for Emergency Medical Service</h3>
      <span class="timeline-date">Oct. 2022 – Apr. 2023</span>
    </div>
    <p>Analyzed large-scale time-series data, optimized models, and developed a user-friendly interface for data visualization.</p>
  </div>

</div>

## 📝 Registered Software Copyright

<div class="project-card">
  <p><b>Dan Zou</b>, Yitong Liao, Ye Xie, Suhong Zhou. <em>AED Deployment Planning Software Based on Urban Building Distribution</em>, Version 1.0. Copyright Registration No. <code>2024SR1452436</code>, 2025.</p>
</div>

## 🛠 Skills

<div class="skills-grid">

  <div class="skill-card">
    <div class="skill-icon">💻</div>
    <h4>Programming</h4>
    <p>Python, MATLAB, R — data processing, machine learning, deep learning, statistical analysis.</p>
  </div>

  <div class="skill-card">
    <div class="skill-icon">🗺️</div>
    <h4>GIS &amp; Remote Sensing</h4>
    <p>ArcGIS Pro, QGIS, Google Earth Engine, satellite image analysis.</p>
  </div>

  <div class="skill-card">
    <div class="skill-icon">🤖</div>
    <h4>Machine Learning / GeoAI</h4>
    <p>Scikit-learn, PyTorch, TensorFlow, spatial ML, deep learning for geospatial data.</p>
  </div>

  <div class="skill-card">
    <div class="skill-icon">📊</div>
    <h4>Data Analysis</h4>
    <p>Spatial statistics, SHAP interpretation, time-series modeling, trajectory analysis.</p>
  </div>

</div>

## 🎯 Teaching

  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
