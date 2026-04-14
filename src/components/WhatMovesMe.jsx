import { motion } from 'framer-motion';

function renderWithItalicParens(text) {
  const parts = text.split(/(\(.*?\))/g);
  return parts.map((part, i) =>
    /^\(.*\)$/.test(part)
      ? <em key={i} className="not-italic italic text-gray-500">{part}</em>
      : part
  );
}

export function WhatMovesMe({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const interests = [
    { label: 'SOUND', items: data.music },
    { label: 'INSTRUMENT', items: [data.instrument].flat() },
    { label: 'READ', items: data.read },
    { label: 'WEAR', items: [data.wear] },
    { label: 'CITY', items: [data.city] },
    { label: 'NOW', items: [data.now] },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          What Moves Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {interests.map((interest) => (
            <motion.div
              key={interest.label}
              variants={itemVariants}
              className="space-y-3"
            >
              <h3 className="text-sm font-mono font-semibold text-gray-600 tracking-widest uppercase">
                {interest.label}
              </h3>
              <p className="text-lg leading-relaxed text-gray-800">
                {interest.items.map((item, i) => (
                  <span key={i}>
                    {i > 0 && ' · '}
                    {renderWithItalicParens(item)}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
