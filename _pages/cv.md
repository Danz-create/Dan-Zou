---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- Download link — upload your CV PDF to the files/ folder and uncomment:
[📄 Download CV (PDF)](/files/cv.pdf)
-->

Education
======
<!-- TODO: fill in actual years, fields, and institutions -->
* **Ph.D.** in [Your Field], [Your University], [Year]
* **M.S.** in [Your Field], [Your University], [Year]
* **B.S.** in [Your Field], [Your University], [Year]

Academic Positions
======
* **Postdoctoral Researcher** — The University of Alabama, Tuscaloosa, AL *(current)*
  * Research focus: GeoAI, urban health, and environmental resilience

Research Interests
======
* GeoAI & Spatial Machine Learning
* Urban Health & Environmental Resilience
* Remote Sensing & Earth Observation
* Geographic Information Science
* Environmental Justice & Spatial Inequality

Skills
======
* **GeoAI & Machine Learning**
  * Deep learning for geospatial data (CNNs, Transformers, Graph Neural Networks)
  * Spatial machine learning and geostatistics
* **GIS & Remote Sensing**
  * ArcGIS Pro, QGIS
  * Google Earth Engine
  * Satellite image analysis
* **Programming**
  * Python (PyTorch, TensorFlow, GeoPandas, Rasterio, scikit-learn)
  * R (sf, tidyverse, spatialreg)
  * SQL
* **Data & Visualization**
  * Spatial data analysis and visualization
  * Large-scale urban datasets

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Service & Leadership
======
<!-- TODO: add reviewer service, committee work, outreach, etc. -->
* *Reviewer* — [Journal / Conference Name]
* *Committee* — [Role], [Organization]
