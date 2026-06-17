import { motion } from 'framer-motion';
import { skills, toolMarquee } from '../data/portfolio';
import { AnimatedSection, SectionEyebrow } from './sections/AnimatedSection';

export function Skills() {
  const groups = Object.entries(skills);

  return (
    <AnimatedSection id="skills" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Skills</SectionEyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl"
          >
            My <span className="text-gradient">toolbelt</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-base md:text-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            A blend of frontend craft, backend fundamentals, and the tools that
            keep shipping fast.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {groups.map(([group, list], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: gi * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="card p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{group}</h3>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: 'var(--surface)', color: 'var(--brand)', border: '1px solid var(--border)' }}
                >
                  {list.length} skills
                </span>
              </div>

              <ul className="mt-5 space-y-4">
                {list.map((skill, i) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: 'var(--text)' }}>{skill.name}</span>
                      <span className="font-mono text-xs tabular-nums" style={{ color: 'var(--text-faint)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="mt-2 h-1.5 overflow-hidden rounded-full"
                      style={{ background: 'var(--border)' }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 1.4,
                          delay: 0.1 + i * 0.1,
                          ease: [0.19, 1, 0.22, 1],
                        }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            'linear-gradient(90deg, var(--brand), var(--brand-2))',
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
            maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="marquee-track py-2">
            {[...toolMarquee, ...toolMarquee].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="font-display text-2xl font-semibold tracking-tight md:text-3xl"
                style={{ color: 'var(--text-faint)' }}
              >
                {t}
                <span className="mx-6 inline-block text-brand-500">✦</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
