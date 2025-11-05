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
      <span class="pill">Urban Health</span>
      <span class="pill">Human Mobility</span>
      <span class="pill">Geospatial AI</span>
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
  const c = document.getElementById('dots-bg');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h, dots = [];

  /* === 气泡参数设置 === */
  const R = 1.6;         // 每个气泡半径（原来是 2.6 → 更小更细腻）
  const N = 100;         // 气泡数量
  const SPEED = 0.25;    // 气泡移动速度
  const COLOR = '#85a428'; // 💚 气泡颜色（你指定的绿色）

  function resize() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
  }

  function init() {
    dots = Array.from({ length: N }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * R + 0.5,
      dx: (Math.random() - 0.5) * SPEED,
      dy: (Math.random() - 0.5) * SPEED
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    dots.forEach(d => {
      d.x += d.dx;
      d.y += d.dy;
      if (d.x < 0 || d.x > w) d.dx *= -1;
      if (d.y < 0 || d.y > h) d.dy *= -1;
      const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 6);
      g.addColorStop(0, COLOR + 'e6'); // 气泡中心颜色（略亮）
      g.addColorStop(1, COLOR + '00'); // 气泡外缘透明
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r * 6, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); init(); });
  resize();
  init();
  draw();
})();
</script>

