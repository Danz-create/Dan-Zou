---
layout: default
title: "Dan Zou"
permalink: /
---

<style>
  /* 首页隐藏页脚，但保留顶部导航方便跳转 */
  .page__footer { display: none !important; }
</style>

<section class="hero-landing">
  <div class="hero-inner">
    <h1>🤗 Welcome to Dan's Portfolio</h1>
    <p class="hero-lead">
      Dan Zou is a postdoctoral researcher using GeoAI to study urban health and resilience
      across environmental and social dimensions.
    </p>

    <div class="hero-tags">
      <span class="pill">Urban Health</span>
      <span class="pill">Human Mobility</span>
      <span class="pill">Geospatial AI</span>
    </div>

    <div class="hero-cta">
      <a class="btn btn-primary" href="{{ '/publications/' | relative_url }}">Publications</a>
      <a class="btn btn-plain" href="{{ '/cv/' | relative_url }}">View CV</a>
      <a class="btn btn-plain" href="{{ '/portfolio/' | relative_url }}">Projects</a>
    </div>
  </div>
</section>

<canvas id="dots-bg" aria-hidden="true"></canvas>
<script src="{{ '/assets/js/dots.js' | relative_url }}"></script>
