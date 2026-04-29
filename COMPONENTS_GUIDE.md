# 🎨 Components Guide - Komponentlar Qo'llanmasi

Sizning portfolio uchun kerakli barcha komponentlar va ularni qanday ishlatish haqida.

---

## 1️⃣ Hero Component (`Hero.tsx`)

### Nima qiladi?
- 3D tilt effect (mouse orqali section tilts)
- Text reveal animation (har bir harf animatsiya bilan kelib chiqadi)
- Magnetic button (button mouse orqali jalba qilinadi)
- Gradient animated text
- Premium glassmorphism design

### Foydalanish

```typescript
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}
```

### Sozlamalar

Hero nomi va tavsifni o'zgartirish:

```typescript
// Hero.tsx ichida
const titleText = "Sizning Ismingiz"; // Nomingiz
const Description = "Sizning tavsifingiz..."; // Tavsif

// Icons o'zgartirish
<a href="https://github.com/yourprofile">
  <Github />
</a>
```

### Features

| Feature | Description |
|---------|-------------|
| 3D Tilt | Mouse movement bilan 3D effect |
| Text Reveal | Har bir harf animatsiya bilan kelib chiqadi |
| Magnetic Button | Button cursorga erga tutadi |
| Gradient Text | Gold to Orange gradient |
| Glassmorphism | Semi-transparent background |

---

## 2️⃣ BentoGrid Component (`BentoGrid.tsx`)

### Nima qiladi?
- Apple-style grid layout
- Project cards bilan image zoom
- "Live Demo" va "Source Code" linki tugmalari
- Texnologiya etiketlari
- Featured va regular loyihalarni o'zbirga ko'rsatadi

### Foydalanish

```typescript
import BentoGrid from "@/components/BentoGrid";

export default function Projects() {
  return <BentoGrid />;
}
```

### Proyekt Ma'lumotlarini Qo'shish

`data/projects.ts` faylda:

```typescript
export const projects: ProjectData[] = [
  {
    id: "my-awesome-project",
    name: "Mening Ajoyib Loyiham",
    description: "Bu loyiha juda yangi texnologiyalar bilan yaratildi...",
    image: "https://images.unsplash.com/...",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://myproject.com",
    githubUrl: "https://github.com/me/my-project",
    featured: true, // Featured qismiga qo'yish
  },
];
```

### Image URLs

Rasmlar uchun quyidagi manbalardan foydalanish mumkin:

```typescript
// Unsplash - FREE
image: "https://images.unsplash.com/photo-...",

// Your server
image: "/images/project1.jpg",

// External URL
image: "https://mydomain.com/project.jpg",
```

### Grid Layout

Proyektlar avtomatik sizga ajraladi:
- **Featured:** Katta kartochkalar (4x2 yoki 4x1)
- **Regular:** Kichik kartochkalar (2x1)

```
[Featured - Large ] [Regular] [Regular]
[Featured - Large ] [Featured] [Featured]
```

---

## 3️⃣ Skills Component (`Skills.tsx`)

### Nima qiladi?
- Texnologiyalarni aylanuvchi lenta ko'rinishida ko'rsatadi
- Infinite loop animation
- Cyan to Blue gradient

### Foydalanish

```typescript
import Skills from "@/components/Skills";

export default function Home() {
  return <Skills />;
}
```

### Texnologiyalarni O'zgartirish

`Skills.tsx` ichida:

```typescript
const skills = [
  "Next.js",
  "React",
  "TypeScript", 
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "MongoDB",
  "Git",
  // O'z texnologiyalaringizni qo'shing
];
```

---

## 4️⃣ ExperienceTimeline Component (`ExperienceTimeline.tsx`)

### Nima qiladi?
- Vertikal timeline animation
- Scroll-triggered effects
- Experience/education items animatsiya bilan chiqadi
- Animated progress line

### Foydalanish

```typescript
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function Experience() {
  return <ExperienceTimeline />;
}
```

### Experience Items O'zgartirish

`ExperienceTimeline.tsx` ichida:

```typescript
const experiences = [
  {
    year: "2022",
    title: "Marketing Specialist",
    description: "SMM va copywriting bo'yicha ishlar...",
  },
  {
    year: "2023",
    title: "Web Developer",
    description: "Next.js va React bilan loyihalar...",
  },
  // O'z tajribalaringizni qo'shing
];
```

---

## 🎯 Complete Example

### projects.ts - To'liq Misol

```typescript
export type ProjectData = {
  id: string;
  name: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

export const projects: ProjectData[] = [
  // FEATURED PROJECTS
  {
    id: "portfolio-2024",
    name: "Premium Portfolio Website",
    description: "Zamonaviy portfolio veb-sayti. Bento grid, 3D animatsiyalar, smooth scroll.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://my-portfolio.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: true,
  },
  
  {
    id: "ecommerce-shop",
    name: "E-Commerce Platform",
    description: "To'liq e-commerce tizimi. Mahsulotlar, savat, checkout, admin panel.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "https://my-shop.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
  },

  // REGULAR PROJECTS
  {
    id: "blog-cms",
    name: "Blog Platform",
    description: "SEO optimized blog. Markdown editing, categories, user accounts.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://my-blog.com",
    githubUrl: "https://github.com/username/blog",
  },

  {
    id: "weather-app",
    name: "Weather App",
    description: "Real-time weather data. Location-based forecasts.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06",
    tech: ["React", "OpenWeather API"],
    liveUrl: "https://my-weather.com",
    githubUrl: "https://github.com/username/weather",
  },
];
```

---

## 🎨 Colors & Styling

### Tailwind Classes

```typescript
// Hero Title Gradient
className="bg-gradient-to-r from-gold-400 via-orange-500 to-gold-600 bg-clip-text text-transparent"

// Glass Effect
className="glass-panel border border-white/10 rounded-lg"
className="glass-card p-6"

// Skills Gradient
className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"

// Hover Effects
whileHover={{ scale: 1.05 }}
```

### Custom Theme

`tailwind.config.ts`:

```typescript
export default {
  theme: {
    colors: {
      // Your custom colors
      gold: {
        400: "#fbbf24",
        600: "#d97706",
      },
    },
  },
};
```

---

## 📱 Responsive Design

Barcha komponentlar responsive:

```typescript
// Mobile First
className="text-lg sm:text-xl md:text-2xl lg:text-3xl"

// Grid
className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3"

// Flexbox
className="flex flex-col md:flex-row"
```

---

## 🔗 Links va Navigation

### Internal Links

```typescript
import Link from "next/link";

<Link href="/projects">Proyektlar</Link>
<Link href="/contact">Bog'lanish</Link>
```

### External Links

```typescript
// GitHub
<a href="https://github.com/username" target="_blank">
  GitHub
</a>

// Live Site
<a href="https://mysite.com" target="_blank" rel="noopener noreferrer">
  Live Demo
</a>
```

---

## ⚙️ Advanced Customization

### Animation Speed O'zgartirish

```typescript
const transition = { 
  duration: 0.6,  // 600ms
  ease: "easeOut",
  delay: 0.1 
};
```

### 3D Tilt Strength

```typescript
const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]); // 15 degrees
const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);
```

### Scroll Trigger Sensitivity

```typescript
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"], // When to trigger
});
```

---

## 🧹 Clean Up

### O'z Loyihalaringizni Qo'shganingizdan So'ng

1. **Placeholder rasmlari o'zgartirib qo'ying**
2. **Nomingiz bilan update qiling** (Hero.tsx)
3. **Social media linklaringizni qo'shing**
4. **Barcha URL larni update qiling**
5. **Texnologiyalar ro'yxatini to'g'rilang**

---

## ✨ Pro Tips

1. **Image Optimization**: WebP format ishlatish
2. **Lazy Loading**: `dynamic` import katta komponentlar uchun
3. **SEO**: Meta tags page.tsx ga qo'shish
4. **Performance**: Chrome DevTools bilan check qilish
5. **Accessibility**: Alt text rasmlar uchun

---

Barcha komponentlar tayyoq va ishlaydi! 🚀
