import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Command, Briefcase, GraduationCap, Layers, Activity, PenLine, Mail } from 'lucide-react';

// Icons match the command palette so each section has one visual identity.
const NAV_ITEMS = [
  { label: 'Work', href: '#work', id: 'work', icon: Briefcase },
  { label: 'Experience', href: '#experience', id: 'experience', icon: GraduationCap },
  { label: 'Stack', href: '#about', id: 'about', icon: Layers },
  { label: 'Now', href: '#status', id: 'status', icon: Activity },
  { label: 'Writing', href: '#blog', id: 'blog', icon: PenLine },
  { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
];

export function Navigation({ onOpenPalette }) {
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
    <>
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/80 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-center md:justify-between items-center">
        <div className="flex items-center gap-3">
          <a
            href="#main"
            aria-label="Back to top"
            className="font-display text-lg font-bold tracking-tight text-ink rounded"
          >
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

      </div>

    </motion.nav>

    {/* Mobile dock — sibling of the nav, since a transformed ancestor would break position: fixed */}
    <motion.nav
      aria-label="Sections"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="md:hidden fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none"
    >
      <ul className="pointer-events-auto flex items-center gap-1 rounded-2xl border border-white/70 bg-white/60 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_28px_-8px_rgba(15,23,42,0.18)] ring-1 ring-ink/[0.06] backdrop-blur-xl backdrop-saturate-150">
        {NAV_ITEMS.map(({ label, href, id, icon: Icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={href}
                aria-label={label}
                title={label}
                aria-current={isActive ? 'true' : undefined}
                className={`relative isolate flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                  isActive ? 'text-accent-ink' : 'text-ink-subtle [@media(hover:hover)]:hover:text-ink'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="dock-active"
                    className="absolute inset-0 -z-10 rounded-xl bg-accent-soft"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={19} strokeWidth={isActive ? 2.25 : 1.75} />
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
    </>
  );
}
