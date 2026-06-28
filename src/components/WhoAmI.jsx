import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhoAmI({ skills }) {
  // Bento layout — varied tile widths on a 6-col grid for clear hierarchy.
  const categories = [
    { label: 'LANGUAGES', items: skills.languages, span: 'lg:col-span-2' },
    { label: 'FRAMEWORKS', items: skills.frameworks, span: 'lg:col-span-4' },
    { label: 'ARCHITECTURES', items: skills.architectures, span: 'lg:col-span-3' },
    { label: 'DATA ENGINEERING', items: skills.dataEngineering, span: 'lg:col-span-3' },
    { label: 'DATA TOOLS', items: skills.dataTools, span: 'lg:col-span-4' },
    { label: 'ORCHESTRATION', items: skills.orchestration, span: 'lg:col-span-2' },
    { label: 'CLOUD & DEVOPS', items: skills.cloudDevOps, span: 'lg:col-span-3' },
    { label: 'CERTIFICATIONS', items: skills.certifications, span: 'lg:col-span-3', highlight: true },
    { label: 'VISUALIZATION', items: skills.visualization, span: 'lg:col-span-2' },
    { label: 'TOOLS', items: skills.tools, span: 'lg:col-span-2' },
    { label: 'AI (EXPLORING)', items: skills.aiExploring, span: 'lg:col-span-2' },
    { label: 'CONCEPTS', items: skills.concepts, span: 'lg:col-span-6' },
  ];

  return (
    <section id="about" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          03 / Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title mb-6"
        >
          What I work with
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl text-lg text-ink-muted leading-relaxed mb-12"
        >
          Backend &amp; data engineer focused on scalable distributed systems, robust data
          infrastructure, and enterprise-grade ETL/ELT pipelines — across AWS &amp; GCP,
          microservices, and modern platforms like Snowflake. Big on API design, data quality,
          and pragmatic use of AI agents &amp; RAG workflows.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={item}
              className={`card p-5 hover:border-line-strong transition-colors ${cat.span}`}
            >
              <h3 className="font-mono text-xs font-semibold tracking-[0.18em] uppercase text-ink-subtle mb-3 flex items-center gap-2">
                <span className="text-accent">#</span>{cat.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className={
                      cat.highlight
                        ? 'px-2.5 py-1 text-xs font-mono rounded-md border border-accent-soft bg-accent-soft text-accent-ink'
                        : 'tag hover:border-accent/40 hover:text-accent-ink'
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
