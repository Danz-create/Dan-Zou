---
layout: default
title: "Dan Zou"
permalink: /
---
<style>
  /* 首页隐藏导航和页脚（可按需去掉 footer 这行） */
  .masthead { display: none !important; }
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
      <span class="pill">Human Mobility</span>
      <span class="pill">Geospatial AI</span>
      <span class="pill">Urban Informatics</span>
    </div>

    <div class="hero-cta">
      <a class="btn btn-primary" href="{{ '/publications/' | relative_url }}">Publications →</a>
      <a class="btn btn-plain" href="{{ '/cv/' | relative_url }}">View CV</a>
      <a class="btn btn-plain" href="{{ '/project/' | relative_url }}">Projects</a>
    </div>
  </div>

  <!-- 蓝色小点背景 -->
  <canvas id="dots-bg" aria-hidden="true"></canvas>
</section>

<script>
(function() {
  const c = document.getElementById('dots-bg'); if (!c) return;
  const ctx = c.getContext('2d'); let w, h, dots=[];
  const R=2.6, N=70, SPEED=.3;

  function resize(){ w=c.width= c.offsetWidth; h=c.height= c.offsetHeight; }
  function init(){
    dots = Array.from({length:N}).map(()=>({
      x: Math.random()*w, y: Math.random()*h,
      r: Math.random()*R+1, dx:(Math.random()-.5)*SPEED, dy:(Math.random()-.5)*SPEED
    }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    dots.forEach(d=>{
      d.x+=d.dx; d.y+=d.dy;
      if(d.x<0||d.x>w) d.dx*=-1; if(d.y<0||d.y>h) d.dy*=-1;
      const g=ctx.createRadialGradient(d.x,d.y,0,d.x,d.y,d.r*5);
      g.addColorStop(0,'rgba(59,130,246,.9)');
      g.addColorStop(1,'rgba(59,130,246,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(d.x,d.y,d.r*4,0,Math.PI*2); ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', ()=>{resize(); init();});
  resize(); init(); draw();
})();
</script>
