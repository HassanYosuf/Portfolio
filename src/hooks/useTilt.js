import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from 'framer-motion';

/**
 * Pointer-driven 3D tilt. Returns motion values to spread onto a
 * `perspective`-parented element, plus the handlers to wire up.
 * No-ops on touch / reduced-motion so it never fights those users.
 */
export function useTilt({ max = 8, glare = true } = {}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 300, damping: 30 });
  const glareX = useTransform(px, [0, 1], ['0%', '100%']);
  const glareY = useTransform(py, [0, 1], ['0%', '100%']);
  const glareOpacity = useSpring(0, { stiffness: 300, damping: 30 });
  // Must be a motion template — interpolating MotionValues into a plain string yields an invalid gradient.
  const glareBackground = useMotionTemplate`radial-gradient(circle 180px at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 100%)`;

  const onPointerMove = (e) => {
    if (reduceMotion || e.pointerType === 'touch') return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    if (glare) glareOpacity.set(1);
  };

  const onPointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  };

  return {
    ref,
    style: reduceMotion ? {} : { rotateX, rotateY, transformPerspective: 800 },
    glareStyle: { opacity: glareOpacity, background: glareBackground },
    handlers: { onPointerMove, onPointerLeave },
  };
}
