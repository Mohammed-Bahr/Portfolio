import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Github } from "./Icons";
import { useState } from "react";
import { projects } from "../data/portfolio";
import { AnimatedSection } from "./sections/AnimatedSection";

const filters = ["All", "Web app", "Open source", "Client work"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  // Lightweight filter mapping (dummy categorization just for visual feedback)
  const matches = (i: number) => {
    if (filter === "All") return true;
    const map: Record<Filter, number[]> = {
      All: [0, 1, 2, 3, 4, 5],
      "Web app": [0, 2, 3],
      "Open source": [1, 4],
      "Client work": [3, 5],
    };
    return map[filter].includes(i);
  };

  return (
    <AnimatedSection id="projects" className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display mt-3 text-3xl font-bold leading-tight md:text-5xl"
            >
              Things I've <span className="text-gradient">built</span>
            </motion.h2>
          </div>

          {/* Filter chips */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass flex flex-wrap gap-1 rounded-full p-1"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors"
                style={{ color: filter === f ? "white" : "var(--text-muted)" }}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(120deg, var(--brand), var(--brand-2))",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) =>
            matches(i) ? (
              <ProjectCard key={p.title} project={p} index={i} />
            ) : null,
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof import("../data/portfolio").projects)[number];
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.19, 1, 0.22, 1],
      }}
      whileHover={{ y: -8 }}
      className="card group overflow-hidden"
    >
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer noopener"
        className="block"
        data-cursor="hover"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            loading="lazy"
            draggable={false}
          />
          {/* Gradient overlay on hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(135deg, ${"var(--brand)"} 0%, transparent 60%)`,
              mixBlendMode: "overlay",
            }}
          />
          {/* Corner shine */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          {/* "View" pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold">
              {project.title}
            </h3>
            <span
              className={`mt-1 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br ${project.accent}`}
            />
          </div>
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  background: "var(--surface)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>

      {/* Footer actions */}
      <div
        className="flex items-center justify-between border-t px-5 py-3"
        style={{ borderColor: "var(--border)" }}
      >
        <span
          className="inline-flex items-center gap-1.5 text-xs"
          style={{ color: "var(--text-faint)" }}
        >
          <Star size={12} /> Featured
        </span>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          <Github size={14} />
          Source
        </a>
      </div>
    </motion.article>
  );
}
