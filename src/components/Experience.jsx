import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Experience({ experience }) {
  const [openBullet, setOpenBullet] = useState(null);

  const toggle = (key) => setOpenBullet(openBullet === key ? null : key);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-16">
          {experience.map((job, jobIdx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: jobIdx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Company header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold">{job.company}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-y-1">
                    {job.roles.map((role, i) => (
                      <span key={i} className="text-sm font-mono text-gray-600 flex items-center">
                        {role.title}
                        {i < job.roles.length - 1 && (
                          <span className="mx-2 text-gray-300">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-mono text-gray-500">{job.roles[0].period}</span>
                  <p className="text-sm text-gray-400 mt-0.5">{job.location}</p>
                </div>
              </div>

              {/* Bullets — expandable */}
              <div className="divide-y divide-gray-100">
                {job.bullets.map((bullet, bIdx) => {
                  const key = `${job.id}-${bIdx}`;
                  const isOpen = openBullet === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between py-4 text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-gray-400 w-5 shrink-0">
                            {String(bIdx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-base font-semibold group-hover:text-gray-600 transition-colors">
                            {bullet.label}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 ml-4 text-gray-400"
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
                            <p className="pb-5 pl-8 text-gray-600 leading-relaxed text-sm">
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
    </motion.section>
  );
}
