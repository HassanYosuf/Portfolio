import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function MetricTile({ m }) {
  const { ref, style, glareStyle, handlers } = useTilt({ max: 5 });
  return (
    <motion.div
      ref={ref}
      variants={item}
      style={style}
      {...handlers}
      className="relative bg-surface p-5 sm:p-6 hover:bg-paper-2 transition-colors [transform-style:preserve-3d]"
    >
      <motion.span
        aria-hidden="true"
        style={glareStyle}
        className="pointer-events-none absolute inset-0"
      />
      <div className="relative flex flex-wrap items-baseline gap-x-1.5" style={{ transform: 'translateZ(16px)' }}>
        <span className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
          {m.value}
        </span>
        <span className="font-mono text-xs text-accent">{m.unit}</span>
      </div>
      <p className="relative mt-2 text-sm font-medium text-ink">{m.label}</p>
      <p className="relative mt-0.5 font-mono text-xs text-ink-subtle">{m.note}</p>
    </motion.div>
  );
}

export function Metrics({ metrics }) {
  return (
    <section className="px-6 -mt-4 pb-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-line bg-line overflow-hidden shadow-card"
      >
        {metrics.map((m) => (
          <MetricTile key={m.label} m={m} />
        ))}
      </motion.div>
    </section>
  );
}
