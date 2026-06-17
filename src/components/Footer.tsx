import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { Dribbble, Github, Linkedin, Twitter } from './Icons';
import { profile } from '../data/portfolio';

const socialIcons = { github: Github, linkedin: Linkedin, twitter: Twitter, dribbble: Dribbble } as const;

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-16" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-x pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, var(--brand), var(--brand-2))' }}
              >
                {profile.shortName.charAt(0)}
              </span>
              <span>
                <span className="text-gradient">{profile.shortName.toLowerCase()}</span>
                <span style={{ color: 'var(--text-faint)' }}>.dev</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm" style={{ color: 'var(--text-muted)' }}>
              {profile.tagline}
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>
              Sitemap
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {['About', 'Skills', 'Experience', 'Projects', 'Testimonials', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="link-underline transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>
              Find me on
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.icon as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{ y: -3, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="grid h-9 w-9 place-items-center rounded-full"
                    style={{
                      border: '1px solid var(--border-strong)',
                      color: 'var(--text-muted)',
                      background: 'var(--surface)',
                    }}
                    aria-label={s.name}
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="divider my-8" />

        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
            © {year} {profile.name}. Built with{' '}
            <Heart size={11} className="inline-block align-middle" style={{ color: '#ef4444' }} /> and lots of
            caffeine.
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-xs font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
