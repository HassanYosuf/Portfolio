import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Blog({ articles }) {
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

  return (
    <motion.section
      id="blog"
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
          Blog & Articles
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 border border-gray-300 rounded-lg hover:border-black hover:bg-white transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-black transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{article.date}</p>
                </div>
                <ExternalLink 
                  size={20} 
                  className="text-gray-400 group-hover:text-black transition-colors flex-shrink-0" 
                />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-gray-200 text-gray-800 rounded-full group-hover:bg-black group-hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-sm font-semibold text-black group-hover:gap-2 transition-all">
                Read on Dev.to →
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
