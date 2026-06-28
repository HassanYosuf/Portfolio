import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Command } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero({ name, title, bio, resume, onOpenPalette }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Terminal-style header line */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            available for backend / platform roles
          </span>
          <span className="font-mono text-xs text-ink-subtle">~/bengaluru · IN</span>
        </motion.div>

        <motion.p variants={item} className="section-label mb-4">
          <span className="text-accent">{'>'}</span> whoami
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-bold tracking-tight text-ink text-[clamp(3rem,9vw,7rem)] leading-[0.95]"
        >
          {name}
        </motion.h1>

        <motion.div variants={item} className="mt-5 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <p className="font-mono text-base sm:text-lg text-ink-muted tracking-wide uppercase">
            {title}
            <span className="text-accent animate-blink ml-1">_</span>
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg sm:text-xl text-ink-muted leading-relaxed"
        >
          {bio}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper hover:bg-accent transition-colors shadow-card"
          >
            View work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-semibold text-ink hover:border-ink hover:shadow-card transition-all"
          >
            <FileDown size={16} />
            Résumé
          </a>
          <button
            onClick={onOpenPalette}
            className="hidden sm:inline-flex items-center gap-2 px-2 py-3.5 font-mono text-xs text-ink-subtle hover:text-ink transition-colors"
          >
            press <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 inline-flex items-center gap-0.5"><Command size={11} />K</kbd> to navigate
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
