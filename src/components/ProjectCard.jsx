import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ProjectCard({ project, index }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group border-l-4 border-gray-300 hover:border-black pl-6 py-6 cursor-pointer transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-mono text-gray-600 mb-1">0{project.id}</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
        </div>
        <span className="text-sm font-mono text-gray-600">{project.year}</span>
      </div>

      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-mono bg-gray-200 text-gray-800 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <motion.a
        href={project.link}
        className="inline-flex items-center gap-2 text-black font-semibold group-hover:gap-4 transition-all"
        whileHover={{ x: 5 }}
      >
        VIEW PROJECT
        <ArrowRight size={18} />
      </motion.a>
    </motion.div>
  );
}
