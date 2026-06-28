import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Stack', href: '#about', id: 'about' },
  { label: 'Now', href: '#status', id: 'status' },
  { label: 'Writing', href: '#blog', id: 'blog' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navigation({ onOpenPalette }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/80 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <a href="#" className="font-display text-lg font-bold tracking-tight text-ink">
            HY<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex items-center gap-1.5 pl-3 border-l border-line">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <span className="text-xs font-mono text-ink-muted tracking-wide">available</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={active === item.id ? 'true' : undefined}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                active === item.id ? 'text-accent-ink' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-md bg-accent-soft"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
            </a>
          ))}
          <button
            onClick={onOpenPalette}
            className="ml-2 flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 font-mono text-xs text-ink-muted hover:border-line-strong hover:text-ink transition-colors"
            aria-label="Open command palette"
          >
            <Command size={13} /> K
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-paper border-t border-line"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm font-medium transition-colors ${
                    active === item.id ? 'text-accent-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
