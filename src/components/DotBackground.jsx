import { useEffect, useRef, useMemo } from 'react';

const DOT_COUNT = 80;
const LAYERS = [
  { speed: 0.012, blur: 0,   size: [2, 3],   opacity: [0.18, 0.28] },
  { speed: 0.025, blur: 1.5, size: [3, 5],   opacity: [0.10, 0.18] },
  { speed: 0.045, blur: 3,   size: [5, 9],   opacity: [0.05, 0.12] },
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export function DotBackground() {
  const layerRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  const dots = useMemo(() => {
    return LAYERS.map((layer) =>
      Array.from({ length: DOT_COUNT }, () => ({
        x: randomBetween(0, 100),
        y: randomBetween(0, 100),
        size: randomBetween(layer.size[0], layer.size[1]),
        opacity: randomBetween(layer.opacity[0], layer.opacity[1]),
      }))
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize to [-1, 1] from center
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      LAYERS.forEach((layer, i) => {
        const el = layerRefs.current[i];
        if (!el) return;
        const dx = mouse.current.x * layer.speed * 100;
        const dy = mouse.current.y * layer.speed * 100;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf.current);
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
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      {LAYERS.map((layer, i) => (
        <div
          key={i}
          ref={(el) => (layerRefs.current[i] = el)}
          style={{
            position: 'absolute',
            inset: '-8%',
            willChange: 'transform',
            transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: layer.blur > 0 ? `blur(${layer.blur}px)` : undefined,
          }}
        >
          {dots[i].map((dot, j) => (
            <div
              key={j}
              style={{
                position: 'absolute',
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: dot.size,
                height: dot.size,
                borderRadius: '50%',
                backgroundColor: '#000',
                opacity: dot.opacity,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
