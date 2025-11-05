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
(function () {
  const c = document.getElementById('dots-bg');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h, dots = [];

  /* ====== 配置：颜色与尺寸 ====== */
  const COLOR_HEX = '#85a428';  // 💚 你要的气泡颜色
  const R = 1.6;                // 气泡半径（更小更细腻）
  const N = 100;                // 气泡数量
  const SPEED = 0.25;           // 移动速度

  /* HEX -> RGBA，确保 Safari/老浏览器也正常 */
  function hexToRgba(hex, alpha) {
    const m = hex.replace('#','');
    const bigint = parseInt(m, 16);
    const r = (m.length===3) ? parseInt(m[0]+m[0],16) : (bigint >> 16) & 255;
    const g = (m.length===3) ? parseInt(m[1]+m[1],16) : (bigint >> 8) & 255;
    const b = (m.length===3) ? parseInt(m[2]+m[2],16) : bigint & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  }

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
      d.x += d.dx; d.y += d.dy;
      if (d.x < 0 || d.x > w) d.dx *= -1;
      if (d.y < 0 || d.y > h) d.dy *= -1;

      const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 6);
      g.addColorStop(0, hexToRgba(COLOR_HEX, 0.9));  // 中心颜色
      g.addColorStop(1, hexToRgba(COLOR_HEX, 0.0));  // 外缘透明
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r * 6, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); init(); });
  resize(); init(); draw();
})();
</script>
<canvas id="dots-bg" aria-hidden="true"></canvas>
<script src="{{ '/assets/js/dots.js' | relative_url }}"></script>


