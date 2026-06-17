import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { nav as navItems, profile } from '../data/portfolio';

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24);

    // Active section tracking
    const offsets = navItems.map((n) => {
      const el = document.getElementById(n.id);
      if (!el) return { id: n.id, top: Number.POSITIVE_INFINITY };
      const rect = el.getBoundingClientRect();
      return { id: n.id, top: Math.abs(rect.top - 120) };
    });
    offsets.sort((a, b) => a.top - b.top);
    if (offsets[0]) setActive(offsets[0].id);
  });

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        animate={{
          paddingTop: scrolled ? 8 : 16,
          paddingBottom: scrolled ? 8 : 16,
          width: scrolled ? 'min(100%, 920px)' : 'min(100%, 1200px)',
        }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        className="glass-strong mt-4 flex items-center justify-between rounded-2xl px-4 shadow-sm md:px-6"
        style={{ borderColor: 'var(--border)' }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="group flex items-center gap-2 font-display text-lg font-bold"
          aria-label="Home"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-lg text-sm font-bold text-white transition-transform group-hover:rotate-6 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, var(--brand), var(--brand-2))' }}
          >
            {profile.shortName.charAt(0)}
          </span>
          <span className="hidden sm:block">
            <span className="text-gradient">{profile.shortName.toLowerCase()}</span>
            <span style={{ color: 'var(--text-faint)' }}>.dev</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className="relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
                  style={{ color: isActive ? 'var(--brand)' : 'var(--text-muted)' }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{ background: 'var(--surface)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggle} />

          <button
            className="btn btn-primary hidden md:inline-flex"
            onClick={() => handleNav('contact')}
          >
            Hire me
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="grid h-9 w-9 place-items-center rounded-full md:hidden"
            style={{ border: '1px solid var(--border-strong)', color: 'var(--text)' }}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'm'}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="glass-strong fixed inset-x-4 top-24 z-40 rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => handleNav(item.id)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium"
                    style={{ color: 'var(--text)' }}
                  >
                    <span>{item.label}</span>
                    {active === item.id && (
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: 'var(--brand)' }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
              <li className="mt-2 border-t pt-2" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn btn-primary w-full"
                >
                  Hire me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function ThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full transition-transform hover:scale-110"
      style={{ border: '1px solid var(--border-strong)', color: 'var(--text)' }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
          className="absolute"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
