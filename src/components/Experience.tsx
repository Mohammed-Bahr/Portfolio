import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";
import { AnimatedSection, SectionEyebrow } from "./sections/AnimatedSection";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl"
          >
            Where I've <span className="text-gradient">been</span>
          </motion.h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-3 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2"
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(180deg, transparent, var(--brand) 10%, var(--brand-2) 50%, var(--brand) 90%, transparent)",
              }}
            />
          </motion.div>

          <ul className="space-y-10">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={`${item.role}-${item.link}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="absolute left-3 top-3 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <div
                      className="grid h-6 w-6 place-items-center rounded-full"
                      style={{
                        background: "var(--bg-muted)",
                        border: "2px solid var(--brand)",
                        boxShadow: "0 0 0 4px var(--bg-muted)",
                      }}
                    >
                      <Briefcase size={11} style={{ color: "var(--brand)" }} />
                    </div>
                  </motion.div>

                  {/* Card */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      isLeft
                        ? "md:col-start-1 md:pr-10 md:text-right"
                        : "md:col-start-2 md:pl-10"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                      className="card group p-6"
                    >
                      <div
                        className={`flex flex-wrap items-center gap-2 text-xs ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                        style={{ color: "var(--text-faint)" }}
                      >
                        <span className="font-mono">{item.period}</span>
                        <span className="opacity-50">•</span>
                        <span>{item.location}</span>
                      </div>
                      <h3 className="font-display mt-2 text-xl font-semibold">
                        {item.role}
                      </h3>
                      <div
                        className="mt-1 text-sm font-medium"
                        style={{ color: "var(--brand)" }}
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.link}
                        </a>
                      </div>
                      <ul
                        className={`mt-4 space-y-2 text-sm ${
                          isLeft ? "md:text-right" : ""
                        }`}
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.bullets.map((b, j) => (
                          <li
                            key={j}
                            className={`flex gap-2 ${isLeft ? "md:flex-row-reverse" : ""}`}
                          >
                            <span
                              className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                              style={{ background: "var(--brand)" }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
