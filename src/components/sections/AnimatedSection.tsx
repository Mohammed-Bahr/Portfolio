import { motion } from 'framer-motion';
import type { MotionProps, Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/** Small uppercase label used to introduce a section. */
export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
      style={{ color: 'var(--brand)' }}
    >
      <span className="h-px w-6" style={{ background: 'currentColor' }} />
      {children}
    </motion.div>
  );
}

interface AnimatedSectionProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direction the section animates in from. */
  from?: 'bottom' | 'left' | 'right' | 'top' | 'none';
  /** Distance in pixels for the entrance offset. */
  distance?: number;
  /** Animate only once when scrolled into view. */
  once?: boolean;
  id?: string;
}

const variantsFor = (from: AnimatedSectionProps['from'], distance: number): Variants => {
  const offsetMap: Record<string, { x: number; y: number }> = {
    bottom: { x: 0,    y: distance },
    top:    { x: 0,    y: -distance },
    left:   { x: -distance, y: 0 },
    right:  { x: distance, y: 0 },
    none:   { x: 0, y: 0 },
  };
  const off = offsetMap[from ?? 'bottom'];
  return {
    hidden: { opacity: 0, x: off.x, y: off.y },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

/** A scroll-triggered wrapper with consistent easing + duration. */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  from = 'bottom',
  distance = 32,
  once = true,
  id,
  ...rest
}: AnimatedSectionProps) {
  const variants = variantsFor(from, distance);
  return (
    <motion.section
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

/** Per-item stagger container. */
export function StaggerContainer({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Use inside <StaggerContainer> for staggered children. */
export function StaggerItem({
  children,
  className,
  from = 'bottom',
  distance = 24,
}: {
  children: ReactNode;
  className?: string;
  from?: 'bottom' | 'left' | 'right' | 'top' | 'none';
  distance?: number;
}) {
  const variants = variantsFor(from, distance);
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}
