import { motion } from 'framer-motion';

function renderWithItalicParens(text) {
  const parts = text.split(/(\(.*?\))/g);
  return parts.map((part, i) =>
    /^\(.*\)$/.test(part)
      ? <em key={i} className="italic text-ink-subtle">{part}</em>
      : part
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhatMovesMe({ data }) {
  const interests = [
    { label: 'SOUND', items: data.music },
    { label: 'INSTRUMENT', items: [data.instrument].flat() },
    { label: 'READ', items: data.read },
    { label: 'WEAR', items: [data.wear] },
    { label: 'CITY', items: [data.city] },
    { label: 'NOW', items: [data.now] },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          <span className="text-accent">//</span> off the clock
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          What moves me
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 border-t border-line pt-10"
        >
          {interests.map((interest) => (
            <motion.div key={interest.label} variants={item} className="space-y-2">
              <h3 className="font-mono text-xs font-semibold tracking-[0.18em] uppercase text-ink-subtle">
                {interest.label}
              </h3>
              <p className="text-lg leading-relaxed text-ink">
                {interest.items.map((it, i) => (
                  <span key={i}>
                    {i > 0 && <span className="text-ink-subtle"> · </span>}
                    {renderWithItalicParens(it)}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
