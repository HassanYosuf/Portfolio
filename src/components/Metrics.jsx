import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
          <motion.div
            key={m.label}
            variants={item}
            className="bg-surface p-5 sm:p-6 hover:bg-paper-2 transition-colors"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                {m.value}
              </span>
              <span className="font-mono text-xs text-accent">{m.unit}</span>
            </div>
            <p className="mt-2 text-sm font-medium text-ink">{m.label}</p>
            <p className="mt-0.5 font-mono text-xs text-ink-subtle">{m.note}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
