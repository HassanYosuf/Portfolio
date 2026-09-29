import { useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, animate } from 'framer-motion';

/**
 * Colour portrait layered over its line-art sketch.
 * - On load the colour "renders" in bottom-up over the sketch.
 * - Fine pointers get an x-ray lens that reveals the sketch under the cursor.
 * - Touch / keyboard users toggle between the two; reduced-motion skips the wipe.
 */
export function PortraitReveal({ src, sketch, alt }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [showSketch, setShowSketch] = useState(false);

  // Percentage of the colour layer hidden from the top (100 = fully sketch).
  const wipe = useMotionValue(reduceMotion ? 0 : 100);
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const radius = useSpring(0, { stiffness: 260, damping: 28 });

  const clipPath = useMotionTemplate`inset(${wipe}% 0 0 0)`;
  const mask = useMotionTemplate`radial-gradient(circle ${radius}px at ${x}% ${y}%, transparent 97%, black 100%)`;

  useEffect(() => {
    if (reduceMotion) return;
    const controls = animate(wipe, 0, { duration: 1.6, delay: 0.9, ease: [0.65, 0, 0.35, 1] });
    return () => controls.stop();
  }, [reduceMotion, wipe]);

  // Only react to real toggles — a mount run (twice under StrictMode) would cancel the load-in wipe.
  const prevShowSketch = useRef(showSketch);
  useEffect(() => {
    if (prevShowSketch.current === showSketch) return;
    prevShowSketch.current = showSketch;
    animate(wipe, showSketch ? 100 : 0, { duration: reduceMotion ? 0 : 0.6, ease: 'easeInOut' });
  }, [showSketch, reduceMotion, wipe]);

  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse' || reduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width) * 100);
    y.set(((e.clientY - rect.top) / rect.height) * 100);
    radius.set(90);
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setShowSketch((s) => !s)}
      onPointerMove={onPointerMove}
      onPointerLeave={() => radius.set(0)}
      aria-pressed={showSketch}
      aria-label={showSketch ? 'Show colour portrait' : 'Show sketch portrait'}
      className="absolute inset-0 w-full h-full rounded-b-3xl cursor-crosshair"
    >
      <img
        src={sketch}
        alt=""
        width={720}
        height={1018}
        className="absolute inset-0 w-full h-full rounded-b-3xl"
      />
      <motion.img
        src={src}
        alt={alt}
        width={720}
        height={1018}
        style={{ clipPath, WebkitMaskImage: mask, maskImage: mask }}
        className="absolute inset-0 w-full h-full rounded-b-3xl"
      />
    </button>
  );
}
