/* =========================================================
   全屏气泡背景（最终稳健版）
   - 颜色：#85a428（绿色）
   - 气泡更小、更细腻
   - 自动适配高分屏（devicePixelRatio）
   - 仅在首页存在 <canvas id="dots-bg"> 时运行
   ========================================================= */

(function () {
  var c = document.getElementById('dots-bg');
  if (!c) return; // 页面没有画布就退出

  var ctx = c.getContext('2d', { alpha: true });
  var w = 0, h = 0, dpr = Math.max(1, window.devicePixelRatio || 1);
  var dots = [];

  /* ===== 参数可调（按需改动） ===== */
  var COLOR = { r: 133, g: 164, b: 40 }; // #85a428
  var R = 1.6;       // 每个气泡半径基准（更小更细腻）
  var N = 110;       // 气泡数量
  var SPEED = 0.25;  // 移动速度（越大越快）

  function rgba(a) { return 'rgba(' + COLOR.r + ',' + COLOR.g + ',' + COLOR.b + ',' + a + ')'; }

  function resize() {
    // 逻辑尺寸（CSS像素）
    w = window.innerWidth;
    h = window.innerHeight;

    // 真正像素尺寸（考虑 dpr）
    c.width = Math.floor(w * dpr);
    c.height = Math.floor(h * dpr);

    // 将坐标系缩放回 CSS 像素，避免一切要 *dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.style.width = w + 'px';
    c.style.height = h + 'px';
  }

  function init() {
    dots = Array.from({ length: N }).map(function () {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * R + 0.5,
        dx: (Math.random() - 0.5) * SPEED,
        dy: (Math.random() - 0.5) * SPEED
      };
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      d.x += d.dx; d.y += d.dy;

      // 边界反弹
      if (d.x < 0 || d.x > w) d.dx *= -1;
      if (d.y < 0 || d.y > h) d.dy *= -1;

      // 渐变气泡（中心更亮，外圈透明）
      var radius = d.r * 6; // 可调：整体气泡视觉尺寸
      var g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, radius);
      g.addColorStop(0, rgba(0.90)); // 中心 90% 不透明
      g.addColorStop(1, rgba(0.00)); // 外缘透明

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  // 初始化
  window.addEventListener('resize', function () { resize(); init(); });
  resize();
  init();
  draw();
})();
