# 🏗️ Architecture & File Structure

## Application Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    ROOT LAYOUT (layout.tsx)                 │
│                   - Lenis Smooth Scroll                     │
│                   - Navbar Component                        │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              HOME PAGE (app/page.tsx)                        │
│                  Main Content Container                     │
└─────────────────────────────────────────────────────────────┘
                              ↓
        ┌─────────────────────┬─────────────────────┐
        ↓                     ↓                     ↓
   ┌─────────┐         ┌──────────┐         ┌─────────┐
   │  HERO   │         │BENTO     │         │ SKILLS  │
   │Component│         │GRID      │         │Component│
   │         │         │Component │         │         │
   │ 3D Tilt │         │          │         │Marquee  │
   │ Text Rev│         │Projects  │         │Animation│
   │ Magnetic│         │+ Links   │         │         │
   └─────────┘         └──────────┘         └─────────┘
        ↓                     ↓
   ┌─────────────────────────────────┐
   │        EXPERIENCE TIMELINE       │
   │        Component                 │
   │    - Scroll Animation            │
   │    - Vertical Line               │
   └─────────────────────────────────┘
```

---

## Complete File Structure

```
my-app/
│
├── 📄 Configuration Files
│   ├── package.json                 ← Dependencies
│   ├── tsconfig.json                ← TypeScript config
│   ├── tailwind.config.ts           ← Tailwind settings
│   ├── next.config.ts               ← Next.js config
│   └── postcss.config.mjs           ← PostCSS config
│
├── 🎨 Styling
│   └── app/
│       └── globals.css              ← Global styles + Tailwind + Lenis
│
├── 🚀 App Directory (Next.js)
│   ├── app/
│   │   ├── layout.tsx               ← Root layout (Lenis setup)
│   │   ├── page.tsx                 ← Main home page ★ EDIT THIS
│   │   ├── page.example.tsx         ← Example template
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx             ← Contact page
│   │   ├── projects/
│   │   │   └── page.tsx             ← Projects page
│   │   └── tech-stack/
│   │       └── page.tsx             ← Tech stack page
│   │
│   └── globals.css                  ← Global styles
│
├── 🧩 Components
│   ├── components/
│   │   ├── Hero.tsx                 ← 3D Tilt + Text Reveal ★
│   │   ├── BentoGrid.tsx            ← Projects Grid + Links ★
│   │   ├── Skills.tsx               ← Marquee Animation ★
│   │   ├── ExperienceTimeline.tsx   ← Timeline Animation ★
│   │   └── Navbar.tsx               ← Navigation
│   │
│   └── (More components as needed)
│
├── 📊 Data
│   └── data/
│       └── projects.ts              ← Project data with links ★ EDIT THIS
│
├── 📁 Public Assets
│   └── public/
│       ├── images/                  ← Project images ★ ADD HERE
│       └── (favicon, etc)
│
├── 📚 Documentation
│   ├── README_SETUP.md              ← Complete setup guide
│   ├── SETUP_GUIDE_UZ.md            ← Uzbek setup guide
│   ├── INSTALLATION.md              ← Installation commands
│   ├── COMPONENTS_GUIDE.md          ← Component guide
│   ├── QUICK_REFERENCE.md           ← Quick reference
│   └── ARCHITECTURE.md              ← This file
│
└── 🔧 Scripts
    ├── setup.sh                     ← Linux/Mac setup
    └── setup.bat                    ← Windows setup
```

---

## Component Hierarchy

```
App Layout (layout.tsx)
├── Lenis Configuration
└── Main Content
    ├── Navbar
    │   └── Navigation Links
    │
    └── Main Page (page.tsx)
        ├── Hero Component
        │   ├── 3D Tilt Container
        │   ├── Text Reveal Animation
        │   ├── Magnetic Button
        │   └── Info Card
        │
        ├── BentoGrid Component
        │   ├── Section Header
        │   └── Project Grid
        │       ├── Featured Project 1 (4x2)
        │       ├── Featured Project 2 (4x2)
        │       ├── Regular Project 1 (2x1)
        │       ├── Regular Project 2 (2x1)
        │       ├── Regular Project 3 (2x1)
        │       └── Regular Project 4 (2x1)
        │
        ├── Skills Component
        │   ├── Section Header
        │   └── Marquee Animation
        │       └── Scrolling Skills List
        │
        └── Timeline Component
            ├── Section Header
            └── Timeline Items
                ├── Year 1 Item
                ├── Year 2 Item
                └── Year 3 Item
```

---

## Data Flow

```
Data Sources
    │
    ├─ projects.ts
    │   └─ BentoGrid Component
    │       ├─ Featured projects
    │       ├─ Regular projects
    │       └─ Links (live + github)
    │
    ├─ Hero.tsx
    │   ├─ Your name
    │   ├─ Your title
    │   └─ Social links
    │
    ├─ Skills.tsx
    │   └─ Skills array
    │
    └─ ExperienceTimeline.tsx
        └─ Experience array
```

---

## Component Dependencies

```
Hero.tsx
├── framer-motion
│   ├── motion
│   ├── useMotionValue
│   ├── useSpring
│   └── useTransform
├── next/link
├── lucide-react
│   └── Icons (Github, MessageCircle, etc)

BentoGrid.tsx
├── framer-motion
├── next/image
├── next/link
├── lucide-react (ExternalLink, Github)
└── data/projects (ProjectData array)

Skills.tsx
├── react-fast-marquee
├── framer-motion
└── motion

ExperienceTimeline.tsx
├── framer-motion
│   ├── useScroll
│   ├── useTransform
└── useRef
```

---

## Styling Layers

```
Global (globals.css)
    ├─ CSS Variables
    ├─ Tailwind Directives
    ├─ Smooth Scroll
    └─ Dark Theme Colors

Tailwind Configuration
    ├─ Color Theme
    ├─ Spacing
    ├─ Typography
    └─ Custom Components

Component-level (Inline classes)
    ├─ Layout classes
    ├─ Animation classes
    └─ Responsive design
```

---

## Edit Priority (★ = Edit First)

1. **FIRST:** `data/projects.ts` ⭐⭐⭐
   - Add your 6-8 projects with all details

2. **SECOND:** `components/Hero.tsx` ⭐⭐⭐
   - Update your name
   - Update social links
   - Customize text

3. **THIRD:** `components/Skills.tsx` ⭐⭐
   - Add your skills/technologies

4. **FOURTH:** `components/ExperienceTimeline.tsx` ⭐⭐
   - Add your experience/education

5. **FIFTH:** Add images
   - Upload to `public/images/`
   - Update URLs in `projects.ts`

---

## Production Build Process

```
Source Code
    ↓
TypeScript Compilation
    ↓
Tailwind CSS Generation
    ↓
Next.js Optimization
    ↓
Static Export (if configured)
    ↓
Minified Bundle
    ↓
Deploy Ready
```

---

## Key Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| Next.js | React Framework | 16.2.4 |
| React | UI Library | 19.2.4 |
| TypeScript | Type Safety | 5.x |
| Tailwind CSS | Styling | 4.x |
| Framer Motion | Animations | 12.38.0 |
| Lucide React | Icons | 1.11.0 |
| Lenis | Smooth Scroll | Latest |
| React Fast Marquee | Marquee | Latest |

---

## Performance Considerations

```
Optimizations Included:
├─ Image Optimization (Next.js)
├─ Code Splitting
├─ CSS Minification
├─ JavaScript Minification
├─ Lazy Loading (Components)
├─ Smooth Animations (GPU)
└─ Responsive Design
```

---

## Deployment Architecture

```
Local Development
    ↓
    npm run dev
    ↓
    localhost:3000
    ↓
    ├─ GitHub Push
    │   ↓
    │   Vercel Auto Deploy
    │   ↓
    │   Production Live
    │
    └─ Manual Build
        ↓
        npm run build
        ↓
        npm run start
        ↓
        Your Server
```

---

## File Sizes (Approximate)

```
Bundle Size:
├─ HTML: ~50KB
├─ CSS: ~200KB (Tailwind)
├─ JavaScript: ~300KB (React + Next.js)
├─ Animations: ~150KB (Framer Motion)
└─ Total: ~700KB (with all libraries)

After Optimization:
└─ ~250KB (gzip)
```

---

**Last Updated:** April 2026
**Next.js Version:** 16.2.4
**Status:** ✅ Production Ready
