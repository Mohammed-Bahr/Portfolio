import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { profile, stats } from "../data/portfolio";
import {
  AnimatedSection,
  SectionEyebrow,
  StaggerContainer,
  StaggerItem,
} from "./sections/AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about" className="section">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Photo / collage */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto w-full max-w-md">
            {/* Backdrop card */}
            <motion.div
              className="absolute -inset-4 -z-10 rounded-3xl opacity-50 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--brand), var(--brand-2))",
              }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="card overflow-hidden rounded-3xl p-1"
              style={{ transform: "rotate(-2deg)" }}
            >
              <div className="overflow-hidden rounded-[calc(1.5rem-4px)]">
                <motion.img
                  src={profile.avatar}
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg md:-right-8"
              style={{
                background: "var(--surface-strong)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="grid h-10 w-10 place-items-center rounded-xl text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brand), var(--brand-2))",
                }}
              >
                <Sparkles size={18} />
              </div>
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  3+ years
                </div>
                <div className="text-xs" style={{ color: "var(--text-faint)" }}>
                  As Software Engineer
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="lg:col-span-7">
          {/*<SectionEyebrow>About me</SectionEyebrow>*/}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl"
          >
            I build things that feel{" "}
            <span className="text-gradient">good to use</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {profile.bio}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Outside of work I tinker with side projects, write about animation
            on the web, and chase the perfect espresso. If you've got something
            interesting in mind, I'd love to hear about it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={profile.resumeUrl} className="btn btn-primary" download>
              Download CV
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              {profile.email}
            </a>
          </motion.div>

          {/* Stats */}
          <StaggerContainer
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
            delay={0.2}
            stagger={0.08}
          >
            {stats.map((s) => (
              <StaggerItem
                key={s.label}
                className="card group p-5"
                from="bottom"
              >
                <div className="font-display text-3xl font-bold text-gradient">
                  {s.value}
                </div>
                <div
                  className="mt-1 text-xs uppercase tracking-wider"
                  style={{ color: "var(--text-faint)" }}
                >
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
