import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PageLoaderProps {
  /** Minimum time the loader stays visible, in ms (avoids flash on fast loads). */
  minDuration?: number;
  onDone?: () => void;
}

export function PageLoader({ minDuration = 1400, onDone }: PageLoaderProps) {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / minDuration) * 100));
      setCount(pct);
      if (now - start < minDuration) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(100);
        window.setTimeout(() => {
          setDone(true);
          onDone?.();
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minDuration, onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg)' }}
        >
          {/* Subtle gradient mesh background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(60% 50% at 20% 20%, rgba(99,102,241,.25), transparent 60%), radial-gradient(50% 40% at 80% 70%, rgba(34,211,238,.25), transparent 60%)',
            }}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Logo mark */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ background: 'linear-gradient(120deg, var(--brand), var(--brand-2))' }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div
                className="relative grid h-16 w-16 place-items-center rounded-2xl text-white shadow-glow"
                style={{ background: 'linear-gradient(135deg, var(--brand), var(--brand-2))' }}
              >
                <span className="font-display text-2xl font-bold">A</span>
              </div>
            </div>

            {/* Brand */}
            <div className="font-display text-lg font-semibold tracking-wide">
              <span className="text-gradient">alex.dev</span>
            </div>

            {/* Progress */}
            <div className="flex w-56 flex-col items-center gap-2">
              <div className="h-1 w-full overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--brand), var(--brand-2))' }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${count}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>
              <div className="font-mono text-xs tabular-nums" style={{ color: 'var(--text-faint)' }}>
                {count}%
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
