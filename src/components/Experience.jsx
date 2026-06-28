import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Experience({ experience }) {
  const [openBullet, setOpenBullet] = useState(null);
  const toggle = (key) => setOpenBullet(openBullet === key ? null : key);

  const spanPeriod = (job) =>
    job.roles.length > 1
      ? `${job.roles[job.roles.length - 1].period.split(' – ')[0]} – ${job.roles[0].period.split(' – ')[1]}`
      : job.roles[0].period;

  return (
    <section id="experience" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          02 / Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="space-y-6">
          {experience.map((job, jobIdx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: jobIdx * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 sm:p-8"
            >
              {/* Company header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 pb-6 border-b border-line">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink">{job.company}</h3>
                  <div className="mt-3 space-y-1.5">
                    {job.roles.map((role) => (
                      <div key={role.title} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-sm text-ink-muted">{role.title}</span>
                        <span className="font-mono text-xs text-ink-subtle">· {role.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:text-right shrink-0">
                  <span className="inline-block rounded-md border border-line bg-paper-2 px-2.5 py-1 font-mono text-xs text-ink-muted">
                    {spanPeriod(job)}
                  </span>
                  <p className="text-sm text-ink-subtle mt-1.5">{job.location}</p>
                </div>
              </div>

              {/* Bullets — expandable */}
              <div className="divide-y divide-line">
                {job.bullets.map((bullet, bIdx) => {
                  const key = `${job.id}-${bIdx}`;
                  const isOpen = openBullet === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-ink-subtle w-5 shrink-0">
                            {String(bIdx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm sm:text-base font-semibold text-ink group-hover:text-accent-ink transition-colors">
                            {bullet.label}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 text-ink-subtle group-hover:text-accent transition-colors"
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 pl-8 text-ink-muted leading-relaxed text-sm">
                              {bullet.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
