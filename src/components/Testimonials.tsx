import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '../data/portfolio';
import { AnimatedSection, SectionEyebrow } from './sections/AnimatedSection';

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  const t = testimonials[idx];

  const go = (delta: number) => {
    setIdx((i) => (i + delta + testimonials.length) % testimonials.length);
  };

  return (
    <AnimatedSection id="testimonials" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl"
          >
            Kind <span className="text-gradient">words</span>
          </motion.h2>
        </div>

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            aria-hidden
            className="absolute -inset-1 -z-10 rounded-3xl opacity-60 blur-2xl"
            style={{ background: 'linear-gradient(135deg, var(--brand), var(--brand-2))' }}
          />

          <motion.div
            layout
            className="card relative overflow-hidden p-8 md:p-10"
          >
            <Quote
              size={64}
              className="absolute -top-2 left-6 opacity-10"
              style={{ color: 'var(--brand)' }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              >
                <p
                  className="text-lg leading-relaxed md:text-xl"
                  style={{ color: 'var(--text)' }}
                >
                  "{t.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2"
                    style={{ borderColor: 'var(--border-strong)' }}
                  />
                  <div>
                    <div className="font-display text-base font-semibold">{t.name}</div>
                    <div className="text-sm" style={{ color: 'var(--text-faint)' }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: i === idx ? 28 : 8,
                      background: i === idx ? 'var(--brand)' : 'var(--border-strong)',
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => go(-1)}
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{
                    border: '1px solid var(--border-strong)',
                    color: 'var(--text)',
                  }}
                  aria-label="Previous"
                >
                  <ChevronLeft size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => go(1)}
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{
                    border: '1px solid var(--border-strong)',
                    color: 'var(--text)',
                  }}
                  aria-label="Next"
                >
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
