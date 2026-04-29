# 🚀 Premium Portfolio Website - Setup Guide

Salom! Bu portfoliongiz uchun to'liq setup guidasi. Quyidagi qadamlarni bajarib loyihani ishga tushirishingiz mumkin.

## 📦 O'rnatish Buyruqlari (Installation Commands)

### 1. Asosiy Loyihani O'rnatish
```bash
# Loyihani yaratish (agar hali yaratmagan bo'lsangiz)
npx create-next-app@latest my-portfolio --typescript --tailwind

# yoki mavjud loyihaga kerakli paketlarni o'rnatish
cd my-portfolio
```

### 2. Barcha Zarur Kutubxonalarni O'rnatish
```bash
npm install framer-motion lucide-react lenis @react-three/fiber @react-three/drei react-fast-marquee
```

### 3. Loyihani Ishga Tushirish
```bash
npm run dev
```

Sahifani oching: `http://localhost:3000`

---

## 📁 Loyiha Fayllari Strukturasi

```
my-app/
├── app/
│   ├── globals.css           # Global uslublar va Tailwind konfiguratsiyasi
│   ├── layout.tsx            # Lenis smooth scroll bilan root layout
│   ├── page.tsx              # Asosiy sahifa (Hero + Grid + Skills + Timeline)
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   └── tech-stack/
│       └── page.tsx
├── components/
│   ├── Hero.tsx              # 3D Tilt, Text Reveal, Magnetic Button
│   ├── BentoGrid.tsx         # Apple-style grid bilan project links
│   ├── Skills.tsx            # Marquee animation bilan texnologiyalar
│   ├── ExperienceTimeline.tsx # Scroll-triggered vertical timeline
│   └── Navbar.tsx
├── data/
│   └── projects.ts           # Loyihalar ma'lumotlari (links bilan)
├── public/                   # Rasmlar va media fayllar
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

---

## 🎨 Kalit Komponentlar

### 1. **Hero.tsx** - 3D Animatsiyali Bosh Qism
- ✨ 3D tilt effect mouse orqali
- 🧲 Magnetic button animation
- 📝 Text reveal animation (har bir harf animatsiya bilan)
- 🎯 Gradient matn (Gold to Orange)
- 📱 Responsive design

```typescript
// Foydalanish
import Hero from "@/components/Hero";

export default function Home() {
  return <Hero />;
}
```

### 2. **BentoGrid.tsx** - Loyihalar Grid'i
- 🎯 Apple-style Bento grid layout
- 🖼️ Rasm hover zoom effect
- 🔗 Live Demo va GitHub linki tugmalari
- 🏷️ Texnologiya etiketlari
- 💫 Smooth animations

```typescript
// Foydalanish
import BentoGrid from "@/components/BentoGrid";

export default function Projects() {
  return <BentoGrid />;
}
```

### 3. **Skills.tsx** - Marquee Texnologiyalar
- 🔄 Continuous scrolling animation
- 🌈 Gradient matn (Cyan to Blue)
- ♻️ Infinite loop effect

### 4. **ExperienceTimeline.tsx** - Scroll-Triggered Timeline
- 📜 Vertikal chiziq scroll bilan animatsiya
- 🎬 Items fade in as they scroll into view
- 📍 Yil va tavsif bilan

---

## 🔧 Loyihalarni Qo'shish / Tahrirlash

### projects.ts Faylida Loyiha Qo'shish

[projects.ts](data/projects.ts) faylida loyihalar massivini tahrirlang:

```typescript
export const projects: ProjectData[] = [
  {
    id: "unique-id",
    name: "Loyiha Nomi",
    description: "Qisqa tavsifi...",
    image: "https://example.com/image.jpg",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://yourlivesite.com",
    githubUrl: "https://github.com/username/repo",
    featured: true, // Featured qismiga qo'ymoqchi bo'lsangiz
  },
  // Qo'shimcha loyihalar...
];
```

### Loyihalar Shakli (Type)

```typescript
type ProjectData = {
  id: string;              // Unikal identifikator
  name: string;            // Loyiha nomi
  description: string;     // Qisqa tavsifi
  image: string;           // Rasm URL
  tech: string[];          // Texnologiyalar arrayi
  liveUrl: string;         // Live demo URL
  githubUrl: string;       // GitHub repo URL
  featured?: boolean;      // Featured loyihalarni avvalligi
};
```

---

## 🎨 Ranglar va Tema

### Tailwind CSS Konfiguratsiyasi

Dark Premium Theme bilan:
- **Fon:** `slate-950` (Qora)
- **Asosiy matn:** `slate-100` (Oq)
- **Aksent:** `sky-500` (Osmol ko'k)
- **Gradient:** `from-cyan-400 to-blue-500` (Rang gradiyenti)

### Tailwind Config Update

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        gold: {
          400: "#fbbf24",
          600: "#d97706",
        },
      },
    },
  },
};
```

---

## 📱 Responsive Design

Barcha komponentlar responsive:
- 📱 Mobile (sm)
- 💻 Tablet (md)
- 🖥️ Desktop (lg)
- 📺 Ultra-wide (xl)

---

## 🚀 Production Uchun

### Build Qilish

```bash
npm run build
npm run start
```

### Deployment (Vercel)

```bash
# Vercel CLI o'rnatish
npm i -g vercel

# Deploy qilish
vercel
```

yoki GitHub bilan:
1. GitHub repo yaratish
2. [Vercel.com](https://vercel.com) ga git qilish
3. Loyihani import qilish

---

## 🛠️ Environment Variables (Agar Kerak Bo'lsa)

`.env.local` faylni yarating:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
```

---

## 📝 Sozlamalar

### Smooth Scroll (Lenis)

`layout.tsx` da avtomatik sozlangan. Ixtiyoriy sozlamalar:

```typescript
const lenis = new Lenis({
  duration: 1.2,        // Scroll davomiyligi
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});
```

---

## 🎯 Foyda Keladigan Resurslar

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Lenis GitHub](https://github.com/studio-freight/lenis)

---

## ⚡ Optimization Tips

1. **Rasmlarni Optimallashtirish**: WebP format ishlatish
2. **Dynamic Imports**: Katta komponentlarni lazy load qilish
3. **Image Optimization**: Next.js Image component ishlatish
4. **Code Splitting**: Route-based code splitting

---

## 🐛 Muammolar Hal Qilish

### Memory Error (Turbopack)

Agar `npm run dev` xatosi bersa:

```typescript
// next.config.ts
export default {
  experimental: {
    turbo: false, // Webpack ishlatish
  },
};
```

### Styles Not Applying

```bash
# Tailwind cache o'chirish
rm -rf .next
npm run dev
```

---

## 📞 Qo'shimcha Yordam

Quyidagi fayllarni tahrirlang va o'z ma'lumotlari bilan o'rnating:
- `Hero.tsx` - Nomingiz va tavsifingiz
- `projects.ts` - Sizning loyihalaringiz
- `Navbar.tsx` - Navigatsiya menyu

## 🎉 Tayyor!

Endi loyihangiz world-class portfoliosi bo'ldi. O'z URL va GitHub linklaringizni qo'shib, deploy qilishga tayyor!

**Omad tilayman! 🚀**
