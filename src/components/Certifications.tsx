import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { AnimatedSection, SectionEyebrow, StaggerContainer, StaggerItem } from './sections/AnimatedSection';

export function Certifications() {
  return (
    <AnimatedSection id="certifications" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Certifications</SectionEyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl"
          >
            Verified <span className="text-gradient">expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-base md:text-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            Industry-recognized certifications that validate my technical skills
            and commitment to continuous learning.
          </motion.p>
        </div>

        <div className="relative mt-14">
          {/* Subtle background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-40 -top-20 -z-10 h-[600px] opacity-30 blur-3xl"
            style={{
              background:
                'radial-gradient(ellipse at 30% 0%, var(--brand) 0%, transparent 60%), radial-gradient(ellipse at 70% 100%, var(--brand-2) 0%, transparent 60%)',
            }}
          />

          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <StaggerItem key={cert.title}>
                <CertCard cert={cert} index={i} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}

function CertCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      className="card group relative flex h-full flex-col overflow-hidden"
    >
      {/* Image section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={cert.image}
          alt={cert.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          loading="lazy"
          draggable={false}
        />

        {/* Overlay gradient on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(135deg, var(--brand) 0%, transparent 60%)',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Corner shine sweep */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />

        {/* Floating icon */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.05 }}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100"
        >
          <Award size={16} />
        </motion.div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Issuer + date row */}
        <div
          className="mb-3 flex items-center justify-between gap-2 text-xs"
          style={{ color: 'var(--text-faint)' }}
        >
          <span className="flex items-center gap-1.5 truncate font-medium">
            <Award size={12} />
            {cert.issuer}
          </span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Calendar size={11} />
            {cert.issued}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold leading-snug">
          {cert.title}
        </h3>

        {/* Description */}
        <p
          className="mt-2 flex-1 text-sm leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {cert.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {cert.tags.map((t) => (
            <span
              key={t}
              className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                background: 'var(--surface)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      {cert.credentialUrl && (
        <div
          className="flex items-center justify-between border-t px-5 py-3"
          style={{ borderColor: 'var(--border)' }}
        >
          <span
            className="inline-flex items-center gap-1.5 text-xs"
            style={{ color: 'var(--text-faint)' }}
          >
            <Award size={12} /> Credential
          </span>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:text-[var(--brand)]"
            style={{ color: 'var(--text-muted)' }}
            data-cursor="hover"
          >
            Verify
            <ExternalLink size={12} />
          </a>
        </div>
      )}
    </motion.article>
  );
}
