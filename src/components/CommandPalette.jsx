import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, CornerDownLeft, ArrowUp, ArrowDown,
  Briefcase, GraduationCap, Layers, Activity, Coffee, PenLine,
  Mail, Github, Linkedin, Twitter, FileDown,
} from 'lucide-react';

const ICONS = {
  work: Briefcase, experience: GraduationCap, about: Layers,
  status: Activity, moves: Coffee, blog: PenLine, contact: Mail,
  github: Github, linkedin: Linkedin, twitter: Twitter, resume: FileDown,
};

export function CommandPalette({ open, setOpen, contact }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const commands = useMemo(() => {
    const go = (id) => () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    const links = Object.fromEntries(contact.links.map((l) => [l.title, l.url]));
    return [
      { id: 'work', label: 'Go to Work', hint: 'projects', run: go('work') },
      { id: 'experience', label: 'Go to Experience', hint: 'career', run: go('experience') },
      { id: 'about', label: 'Go to Stack', hint: 'skills', run: go('about') },
      { id: 'status', label: 'Go to Right Now', hint: 'status', run: go('status') },
      { id: 'blog', label: 'Go to Writing', hint: 'articles', run: go('blog') },
      { id: 'contact', label: 'Go to Contact', hint: 'reach out', run: go('contact') },
      { id: 'resume', label: 'Download résumé', hint: 'PDF', run: () => window.open(contact.resume, '_blank') },
      { id: 'github', label: 'Open GitHub', hint: 'external', run: () => window.open(links.GitHub, '_blank') },
      { id: 'linkedin', label: 'Open LinkedIn', hint: 'external', run: () => window.open(links.LinkedIn, '_blank') },
      { id: 'twitter', label: 'Open Twitter', hint: 'external', run: () => window.open(links.Twitter, '_blank') },
      { id: 'contact-mail', label: 'Copy email', hint: contact.email, run: () => navigator.clipboard?.writeText(contact.email) },
    ];
  }, [contact]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => (c.label + ' ' + c.hint).toLowerCase().includes(q));
  }, [query, commands]);

  // Global ⌘K / Ctrl-K toggle + Esc to close
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => { setActive(0); }, [query]);

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = filtered[active];
      if (cmd) { cmd.run(); setOpen(false); }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-card-hover"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={18} className="text-ink-subtle shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Jump to a section, link, or action…"
                className="w-full bg-transparent py-4 font-mono text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
              />
              <kbd className="hidden sm:block rounded border border-line bg-paper-2 px-1.5 py-0.5 font-mono text-[10px] text-ink-subtle">esc</kbd>
            </div>

            <ul ref={listRef} className="max-h-[320px] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-sm text-ink-subtle">no matches</li>
              )}
              {filtered.map((cmd, i) => {
                const Icon = ICONS[cmd.id] || Search;
                return (
                  <li key={cmd.id}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={() => { cmd.run(); setOpen(false); }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                        i === active ? 'bg-accent-soft text-accent-ink' : 'text-ink hover:bg-paper-2'
                      }`}
                    >
                      <Icon size={16} className={i === active ? 'text-accent' : 'text-ink-subtle'} />
                      <span className="flex-1 text-sm font-medium">{cmd.label}</span>
                      <span className="font-mono text-xs text-ink-subtle">{cmd.hint}</span>
                      {i === active && <CornerDownLeft size={14} className="text-accent" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[11px] text-ink-subtle">
              <span className="flex items-center gap-1"><ArrowUp size={11} /><ArrowDown size={11} /> navigate</span>
              <span className="flex items-center gap-1"><CornerDownLeft size={11} /> select</span>
              <span className="ml-auto">HY · command palette</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
