import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Github } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectCard({ project, span, large }) {
  const primary = project.demo || project.link;
  const hasDemo = Boolean(project.demo);

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col card p-6 sm:p-7 hover:shadow-card-hover hover:border-line-strong transition-all overflow-hidden ${span}`}
    >
      {/* corner watermark id */}
      <span className="pointer-events-none absolute -top-3 -right-1 font-display text-7xl font-bold text-paper-2 select-none leading-none">
        {String(project.id).padStart(2, '0')}
      </span>

      <div className="relative flex items-center justify-between gap-3">
        <span className="font-mono text-xs tracking-widest text-ink-subtle">
          PROJECT · {String(project.id).padStart(2, '0')}
        </span>
        {project.featured ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] text-accent-ink">
            <Star size={10} className="fill-accent text-accent" /> featured
          </span>
        ) : (
          <span className="font-mono text-xs text-ink-subtle">{project.year}</span>
        )}
      </div>

      {/* Stretched primary link makes the whole card clickable while staying a real anchor */}
      <h3 className={`relative mt-3 font-display font-bold text-ink group-hover:text-accent-ink transition-colors ${large ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
        <a
          href={primary}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:content-['']"
        >
          {project.title}
        </a>
      </h3>

      <p className={`relative mt-2 text-ink-muted leading-relaxed ${large ? 'text-base max-w-xl' : 'text-sm'}`}>
        {project.description}
      </p>

      <div className="relative mt-auto pt-5 flex flex-wrap items-center gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag group-hover:border-line-strong">{tag}</span>
        ))}
      </div>

      <div className="relative z-10 mt-4 flex items-center gap-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          {hasDemo ? 'Live demo' : 'View project'}
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        {hasDemo && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-subtle hover:text-ink transition-colors"
          >
            <Github size={15} /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
