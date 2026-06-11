import { useEffect, useRef } from 'react';

const LAYERS = [
  { count: 80, blur: 0,   sizeRange: [2, 3], opacityRange: [0.18, 0.28] },
  { count: 50, blur: 1.5, sizeRange: [3, 5], opacityRange: [0.10, 0.18] },
  { count: 30, blur: 3,   sizeRange: [5, 9], opacityRange: [0.05, 0.12] },
];

const HOVER_RADIUS = 80;
const HOVER_NUDGE = 0.4;
const SPRING_K = 0.02;
const DAMPING = 0.85;
const DRIFT_AMP = 0.5;

function rand(a, b) { return a + Math.random() * (b - a); }

function makeParticle(layer, W, H) {
  const ox = rand(0.02, 0.98) * W;
  const oy = rand(0.02, 0.98) * H;
  return {
    ox, oy, x: ox, y: oy, vx: 0, vy: 0,
    size: rand(...layer.sizeRange),
    opacity: rand(...layer.opacityRange),
    freq: rand(0.0003, 0.0008),
    phase: rand(0, Math.PI * 2),
  };
}

export function DotBackground() {
  const canvasRefs = useRef([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const particles = useRef([]);
  const raf = useRef(null);

  useEffect(() => {
    const canvases = canvasRefs.current;
    const ctxs = canvases.map(c => c?.getContext('2d'));

    function init() {
      const W = window.innerWidth;
      const H = window.innerHeight;
      canvases.forEach(c => { if (c) { c.width = W; c.height = H; } });
      particles.current = LAYERS.map(layer =>
        Array.from({ length: layer.count }, () => makeParticle(layer, W, H))
      );
    }

    init();

    const onMouseMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onMouseLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    const onResize = init;

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    let t = 0;

    const animate = () => {
      t++;
      const { x: mx, y: my } = mouse.current;

      LAYERS.forEach((_, li) => {
        const ctx = ctxs[li];
        const canvas = canvases[li];
        if (!ctx || !canvas) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.current[li]?.forEach(p => {
          // ambient drift target
          const tx = p.ox + Math.sin(t * p.freq + p.phase) * DRIFT_AMP;
          const ty = p.oy + Math.cos(t * p.freq + p.phase + 1.3) * DRIFT_AMP;

          // spring toward drift target
          let fx = (tx - p.x) * SPRING_K;
          let fy = (ty - p.y) * SPRING_K;

          // slight push away from cursor when nearby
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < HOVER_RADIUS && dist > 0.1) {
            const strength = (1 - dist / HOVER_RADIUS) * HOVER_NUDGE;
            fx -= (dx / dist) * strength;
            fy -= (dy / dist) * strength;
          }

          p.vx = (p.vx + fx) * DAMPING;
          p.vy = (p.vy + fy) * DAMPING;
          p.x += p.vx;
          p.y += p.vy;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,0,0,${p.opacity})`;
          ctx.fill();
        });
      });

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundColor: '#ffffff',
      }}
    >
      {LAYERS.map((layer, i) => (
        <canvas
          key={i}
          ref={el => (canvasRefs.current[i] = el)}
          style={{
            position: 'absolute',
            inset: 0,
            filter: layer.blur > 0 ? `blur(${layer.blur}px)` : undefined,
          }}
        />
      ))}
    </div>
  );
}
