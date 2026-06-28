import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Blog({ articles }) {
  return (
    <section id="blog" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          05 / Writing
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Notes &amp; articles
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {articles.map((article) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -4 }}
              className="group card p-7 hover:shadow-card-hover hover:border-line-strong transition-all"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <p className="font-mono text-xs text-ink-subtle">{article.date}</p>
                <ArrowUpRight
                  size={18}
                  className="text-ink-subtle group-hover:text-accent transition-colors shrink-0"
                />
              </div>

              <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-accent-ink transition-colors">
                {article.title}
              </h3>

              <p className="text-sm text-ink-muted leading-relaxed mb-5">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag group-hover:border-line-strong">{tag}</span>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read on Dev.to
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
