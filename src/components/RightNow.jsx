import { motion } from 'framer-motion';
import { Music, BookOpen, Hammer, Footprints, MapPin, Briefcase } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ICONS = {
  LISTENING: Music, READING: BookOpen, BUILDING: Hammer,
  WEARING: Footprints, CITY: MapPin, WORKING: Briefcase,
};

export function RightNow({ data }) {
  const items = [
    { title: 'LISTENING', data: data.listening },
    { title: 'READING', data: data.reading },
    { title: 'BUILDING', data: data.building },
    { title: 'WEARING', data: data.wearing },
    { title: 'CITY', data: data.city },
    { title: 'WORKING', data: data.working },
  ];

  return (
    <section id="status" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          04 / Now
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title mb-3"
        >
          Right now
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-ink-subtle mb-12 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" /> status · live snapshot
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {items.map((it) => {
            const Icon = ICONS[it.title];
            return (
              <motion.div
                key={it.title}
                variants={item}
                className="card p-5 hover:border-line-strong transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  {Icon && <Icon size={14} className="text-accent" />}
                  <h3 className="font-mono text-xs font-semibold tracking-[0.18em] uppercase text-ink-subtle">
                    {it.title}
                  </h3>
                </div>
                <div className="space-y-0.5">
                  {it.data.title && <p className="text-base font-semibold text-ink">{it.data.title}</p>}
                  {it.data.artist && <p className="text-sm text-ink-muted">{it.data.artist}</p>}
                  {it.data.author && <p className="text-sm text-ink-muted">{it.data.author}</p>}
                  {it.data.company && <p className="text-sm text-ink-muted">{it.data.company}</p>}
                  {it.data.place && <p className="text-sm text-ink-muted">{it.data.place}</p>}
                  {it.data.note && <p className="text-sm text-ink-subtle italic mt-1">{it.data.note}</p>}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
