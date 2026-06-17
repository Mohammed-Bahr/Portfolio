# Portfolio Landing Page — Setup

This drop-in folder is meant to be merged into your existing **Vite + React + TypeScript + Tailwind CSS** project.

## 1. Install dependencies

```bash
npm install framer-motion lucide-react clsx
# or
yarn add framer-motion lucide-react clsx
```

- **framer-motion** → scroll-triggered, page-load, hover, layout animations
- **lucide-react** → icon set
- **clsx** → conditional classnames helper (optional, kept here for future use)

## 2. Add the Google Fonts

In your `index.html` (the one Vite created at the project root), add the following inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
/>
```

## 3. Update `tailwind.config.js`

Rename `tailwind.config.example.js` → `tailwind.config.js` (or merge its `darkMode` + `theme.extend` into your existing one). The two important things it adds:

- `darkMode: 'class'`
- Custom keyframes / animations (`fade-up`, `float`, `gradient-pan`, `blob`, `shimmer`, `marquee-x`, `progress-bar` …)
- A `container-x` utility, gradient text, blob backgrounds, custom shadows, and brand/accent palettes

## 4. Replace / merge `src/index.css`

Drop in the provided `src/index.css` — it has the theme variables (light/dark), custom cursor, button styles, glassmorphism helpers, smooth scroll, scrollbar styling, and animated underline links.

## 5. Copy the files

Copy the contents of `src/` from this folder into your project's `src/`:

```
src/
├── components/
│   ├── Cursor.tsx
│   ├── PageLoader.tsx
│   ├── ScrollProgress.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── sections/AnimatedSection.tsx
├── context/ThemeContext.tsx
├── data/portfolio.ts
├── hooks/useScrollProgress.ts
├── types/index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 6. Run

```bash
npm run dev
```

You should see a 1.4s page-loader, then the page fades in with sections revealing as you scroll. The theme toggle in the navbar switches between dark and light, and your choice is saved to `localStorage`.

---

## What you're getting

### Animations
- **Page loader** — gradient spinner + percentage counter on first load
- **Page-load fade** — entire app fades in once the loader finishes
- **Word-by-word title reveal** in the hero
- **Staggered card reveals** for skills, projects, stats, contact info
- **Scroll-triggered section reveals** (each section animates in as you reach it, once)
- **Animated skill bars** that fill in when scrolled into view
- **Vertical timeline** in Experience with growing line + springy dots
- **Marquee** of tools in the Skills section
- **Tilt-on-mouse** for the hero avatar card
- **Floating decorative chips** in the hero
- **Auto-rotating testimonials** with progress dots and pause-on-hover
- **Filter pills** with `layoutId` slide animation in Projects
- **Form micro-interactions** — floating labels, focus glow, success overlay
- **Hover lifts** on every card, button, link, and chip
- **Animated gradient background blobs** that drift continuously
- **Custom cursor** (dot + lagging ring) on desktop
- **Scroll progress bar** at the top
- **Theme toggle** with rotating sun/moon icon

### Sections
1. Hero — name, title, tagline, CTAs, avatar card
2. About — photo, bio, stats
3. Skills — grouped skill cards with bars + tools marquee
4. Experience — alternating timeline
5. Projects — filterable card grid with image hover zoom
6. Testimonials — auto-rotating carousel
7. Contact — info cards + animated form
8. Footer — sitemap, socials, back-to-top

### Easy editing
All copy, social links, projects, skills, experience, and testimonials live in **`src/data/portfolio.ts`**. Just edit that file and the whole site updates.
