import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Command } from 'lucide-react';
import { PortraitReveal } from './PortraitReveal';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero({ name, title, bio, resume, portrait, portraitSketch, onOpenPalette }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative min-h-[100svh] flex flex-col justify-center px-6 pt-20 pb-28 md:pt-28 md:pb-16"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center gap-12">
        <div>
        {/* Header row — avatar joins the status line below lg; the full portrait sits beside the text on desktop */}
        <motion.div variants={item} className="flex items-center gap-4 mb-6 md:mb-8">
          <img
            src={portrait}
            alt=""
            width={56}
            height={56}
            className="lg:hidden h-14 w-14 shrink-0 rounded-full border border-line bg-accent-soft object-cover object-top shadow-card"
          />
          <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 min-w-0">
            <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              open to new roles<span className="hidden sm:inline"> · available immediately</span>
            </span>
            <span className="font-mono text-xs text-ink-subtle">
              ~/bengaluru · IN<span className="sm:hidden"> · available now</span>
            </span>
          </div>
        </motion.div>

        <motion.p variants={item} className="section-label mb-4">
          <span className="text-accent">{'>'}</span> whoami
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-bold tracking-tight text-ink text-[clamp(3rem,9vw,7rem)] lg:text-[clamp(4rem,6.5vw,6rem)] leading-[0.95]"
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
          className="mt-6 md:mt-8 max-w-2xl text-lg sm:text-xl text-ink-muted leading-relaxed"
        >
          {bio}
        </motion.p>

        <motion.div variants={item} className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
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

        {/* Portrait — head breaks out of the top of the panel */}
        <motion.figure variants={item} className="relative hidden lg:block aspect-[720/1018]">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-3/4 rounded-3xl border border-line bg-accent-soft shadow-card overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: 'radial-gradient(rgba(37,99,235,0.25) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />
          </div>
          <PortraitReveal src={portrait} sketch={portraitSketch} alt={`Portrait of ${name}`} />
          <figcaption className="pointer-events-none absolute -bottom-3 left-5 rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink-muted shadow-card">
            ~/hassan.png <span className="text-ink-subtle">· hover to see the sketch</span>
          </figcaption>
        </motion.figure>
      </div>
    </motion.section>
  );
}
