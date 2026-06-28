import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, FileDown, ArrowUpRight } from 'lucide-react';

const iconMap = { GitHub: Github, LinkedIn: Linkedin, Twitter: Twitter };

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Footer({ contact }) {
  return (
    <footer id="contact" className="scroll-mt-24 mt-12 px-4 pb-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={container}
        className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-ink px-6 py-20 sm:py-28 text-paper"
      >
        {/* subtle grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p variants={item} className="font-mono text-xs tracking-[0.2em] uppercase text-ink-subtle mb-6">
            06 / Contact
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            Let&apos;s build something<br />
            <span className="text-ink-subtle">that scales.</span>
          </motion.h2>

          <motion.div variants={item} className="mt-10 flex flex-col items-center gap-5">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-2 font-mono text-base sm:text-lg text-paper hover:text-accent transition-colors"
            >
              <Mail size={18} />
              {contact.email}
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            {contact.resume && (
              <a
                href={contact.resume}
                download
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink hover:bg-accent hover:text-paper transition-colors"
              >
                <FileDown size={17} />
                Download résumé
              </a>
            )}
          </motion.div>

          <motion.div variants={item} className="mt-12 flex justify-center flex-wrap gap-6">
            {contact.links.map((link) => {
              const Icon = iconMap[link.title];
              return (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-subtle hover:text-paper transition-colors"
                >
                  {Icon && <Icon size={16} />}
                  {link.title}
                </a>
              );
            })}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 pt-8 border-t border-white/10 font-mono text-xs text-ink-subtle"
          >
            <p>© 2026 Hassan Yosuf</p>
            <p className="mt-1.5">built &amp; shipped with intent · bengaluru, in</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
