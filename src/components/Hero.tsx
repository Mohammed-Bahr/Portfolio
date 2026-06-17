import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Dribbble, Github, Linkedin, Twitter } from "./Icons";
import { useRef } from "react";
import { profile } from "../data/portfolio";
import { assetUrl } from "../utils";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
} as const;

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-200, 200], [8, -8]), {
    stiffness: 120,
    damping: 18,
  });
  const rotY = useSpring(useTransform(mx, [-200, 200], [-8, 8]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - (r.left + r.width / 2));
    my.set(e.clientY - (r.top + r.height / 2));
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const handleScrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Reveal each word of the title with a stagger
  const title = profile.title;
  const words = title.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 md:pt-40"
    >
      {/* Animated background blobs */}
      <BgBlobs />

      <div className="container-x relative z-10 grid grid-cols-1 items-center gap-12 pb-24 lg:grid-cols-12">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
            style={{
              border: "1px solid var(--border-strong)",
              background: "var(--surface)",
              color: "var(--text-muted)",
            }}
          >
            <Sparkles size={12} className="text-brand-500" />
            <span>Available for new opportunities</span>
            <span
              className="ml-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: "#22c55e" }}
            />
          </motion.div>

          <h1 className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block"
              style={{ color: "var(--text-muted)" }}
            >
              Hi, I'm {profile.name.split(" ")[0]}.
            </motion.span>
            <span className="mt-2 block overflow-hidden">
              {words.map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.07,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="mr-3 inline-block"
                >
                  {w === "Developer" || w === "UI/UX" ? (
                    <span className="text-gradient">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="btn btn-primary group"
            >
              View my work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="btn btn-ghost"
            >
              Get in touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-8 flex items-center gap-3"
          >
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--text-faint)" }}
            >
              Find me on
            </span>
            <span
              className="h-px w-8"
              style={{ background: "var(--border-strong)" }}
            />
            <div className="flex items-center gap-2">
              {profile.socials.map((s, i) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.1 + i * 0.06,
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="grid h-9 w-9 place-items-center rounded-full"
                    style={{
                      border: "1px solid var(--border-strong)",
                      color: "var(--text-muted)",
                      background: "var(--surface)",
                    }}
                    aria-label={s.name}
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right: tilt card with avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-5"
        >
          <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative mx-auto aspect-square w-full max-w-sm"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{
                rotateX: rotX,
                rotateY: rotY,
                transformStyle: "preserve-3d",
              }}
              className="card relative h-full w-full overflow-hidden rounded-3xl p-1"
            >
              {/* Gradient ring */}
              <div
                className="absolute inset-0 rounded-3xl opacity-90"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--brand), var(--brand-2), #f472b6, var(--brand))",
                  filter: "blur(0.5px)",
                }}
              />
              <div
                className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)]"
                style={{ background: "var(--bg-muted)" }}
              >
                <img
                  src={assetUrl(profile.avatar)}
                  alt={profile.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  draggable={false}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(0,0,0,.4) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="text-sm font-semibold">{profile.name}</div>
                    <div className="text-xs opacity-80">{profile.location}</div>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(255,255,255,.15)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    Online
                  </span>
                </div>
              </div>

              {/* Floating chips */}
              <FloatingChip
                className="-left-6 top-10"
                delay={0.2}
                label=" ✅ ProblemSolving"
                style={{ transform: "translateZ(40px)" }}
              />
              <FloatingChip
                className="-right-4 top-1/3"
                delay={0.4}
                label=" 🫰 Team Player"
                style={{ transform: "translateZ(60px)" }}
              />
              <FloatingChip
                className="-left-2 bottom-12"
                delay={0.6}
                label="⚡ Performance"
                style={{ transform: "translateZ(30px)" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => handleScrollTo("about")}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit flex-col items-center gap-1 text-xs"
        style={{ color: "var(--text-faint)" }}
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}

function FloatingChip({
  className,
  label,
  delay = 0,
  style,
}: {
  className?: string;
  label: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.9 + delay,
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
      className={`absolute rounded-full px-3 py-1.5 text-xs font-semibold shadow-glow-sm ${className ?? ""}`}
      style={{
        background: "var(--surface-strong)",
        backdropFilter: "blur(10px)",
        color: "var(--text)",
        border: "1px solid var(--border-strong)",
        ...style,
      }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

function BgBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(70%_50%_at_50%_30%,black,transparent)]" />

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute -left-24 top-20 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--brand) 0%, transparent 60%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--brand-2) 0%, transparent 60%)",
        }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #f472b6 0%, transparent 60%)",
        }}
        animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
