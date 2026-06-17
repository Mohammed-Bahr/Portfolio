import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

/** A thin progress bar fixed at the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const { theme } = useTheme();

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px]"
    >
      <div
        className="h-full w-full"
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(90deg, #818cf8, #22d3ee)'
              : 'linear-gradient(90deg, #6366f1, #22d3ee)',
          boxShadow: '0 0 12px rgba(99,102,241,.6)',
        }}
      />
    </motion.div>
  );
}
