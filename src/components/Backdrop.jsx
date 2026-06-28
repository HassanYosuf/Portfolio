import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Static blueprint dot-grid backdrop with a soft pointer-following glow.
 * No requestAnimationFrame loop — the glow is moved via a CSS variable on
 * pointermove, and it's disabled entirely for touch / reduced-motion users.
 */
export function Backdrop() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;

    let frame = null;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${e.clientX}px`);
        el.style.setProperty('--my', `${e.clientY}px`);
        frame = null;
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10">
      <div className="backdrop-grid absolute inset-0" />
      {!reduceMotion && (
        <div
          ref={ref}
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'radial-gradient(280px circle at var(--mx, 50%) var(--my, 0px), rgba(37,99,235,0.08), transparent 70%)',
            transition: 'background 0.12s linear',
          }}
        />
      )}
    </div>
  );
}
