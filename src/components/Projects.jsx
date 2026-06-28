import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

// Bento spans (lg). First two tiles are larger; the rest form a tidy 2-up grid.
const SPANS = [
  'lg:col-span-4', 'lg:col-span-2',
  'lg:col-span-3', 'lg:col-span-3',
  'lg:col-span-3', 'lg:col-span-3',
];

export function Projects({ projects }) {
  return (
    <section id="work" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          01 / Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Stuff I&apos;ve built
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-auto"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              span={SPANS[i] || 'lg:col-span-3'}
              large={i === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
