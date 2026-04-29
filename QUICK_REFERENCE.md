# 🚀 Quick Reference - Tez Havolalar

## 📦 Installation (O'rnatish)

```bash
# Ikkita qatorda o'rnatish mumkin:
npm install framer-motion lucide-react lenis react-fast-marquee

# Ishga tushirish:
npm run dev
```

**That's it!** Barcha kutubxonalar avtomatik o'rnatildi.

---

## 📁 Project Structure

```
my-app/
├── components/
│   ├── Hero.tsx              ← 3D tilt + Text reveal
│   ├── BentoGrid.tsx         ← Projects grid + Links
│   ├── Skills.tsx            ← Marquee animation
│   ├── ExperienceTimeline.tsx ← Scroll animation
│   └── Navbar.tsx
├── app/
│   ├── page.tsx              ← Main home page
│   └── layout.tsx            ← Lenis smooth scroll
├── data/
│   └── projects.ts           ← Project data with links
├── public/                   ← Images here
└── package.json
```

---

## 🎨 Key Files to Edit

### 1. `data/projects.ts` - Add Your Projects

```typescript
export const projects: ProjectData[] = [
  {
    id: "project-1",
    name: "My Project",
    description: "Description...",
    image: "https://...",
    tech: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://myproject.com",
    githubUrl: "https://github.com/user/repo",
    featured: true, // or false
  },
  // Add more projects...
];
```

### 2. `components/Hero.tsx` - Update Your Name

```typescript
const titleText = "Your Name Here"; // Change this
```

### 3. `components/Hero.tsx` - Update Social Links

```typescript
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### 4. `components/Skills.tsx` - Add Your Skills

```typescript
const skills = [
  "Next.js", "React", "TypeScript",
  // Add your skills
];
```

### 5. `components/ExperienceTimeline.tsx` - Your Experience

```typescript
const experiences = [
  { year: "2024", title: "Your Role", description: "..." },
  // Add your experience
];
```

---

## 💡 Component Features

| Component | Features | Location |
|-----------|----------|----------|
| **Hero** | 3D Tilt, Text Reveal, Magnetic Button, Gradient Text | `components/Hero.tsx` |
| **BentoGrid** | Apple Grid, Image Zoom, Project Links, Tech Tags | `components/BentoGrid.tsx` |
| **Skills** | Marquee Animation, Gradient, Infinite Loop | `components/Skills.tsx` |
| **Timeline** | Vertical Line, Scroll Animation, Items | `components/ExperienceTimeline.tsx` |

---

## 🔗 Project Data Format

Har bir proyekt quyidagilarni o'z ichiga olishi kerak:

```typescript
{
  id: "unique-id",           // ← Required
  name: "Project Name",       // ← Required
  description: "Short desc",  // ← Required
  image: "URL",              // ← Required (JPG/PNG)
  tech: ["Tech1", "Tech2"],  // ← Required (array)
  liveUrl: "https://...",    // ← Required
  githubUrl: "https://...",  // ← Required
  featured: true,            // ← Optional (true/false)
}
```

---

## 🎨 Colors Used

```
Dark Theme:
- Background: slate-950 (very dark)
- Text: slate-100 (white)
- Accent: sky-500 (blue)

Gradients:
- Hero Title: gold-400 → orange-500 → gold-600
- Skills: cyan-400 → blue-500
```

---

## 📱 How to Add Images

### Option 1: External URLs
```typescript
image: "https://images.unsplash.com/photo-..."
```

### Option 2: Local Files
```
public/
├── project1.jpg
├── project2.jpg
└── ...

Then use:
image: "/project1.jpg"
```

### Option 3: Hosted Images
Upload to any host and use the URL.

---

## 🚀 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy (automatic on push)

### Manual Build
```bash
npm run build
npm run start
```

---

## 📋 Checklist

- [ ] Installed all packages (`npm install ...`)
- [ ] Updated `projects.ts` with your projects
- [ ] Updated your name in `Hero.tsx`
- [ ] Updated social links in `Hero.tsx`
- [ ] Updated skills in `Skills.tsx`
- [ ] Updated experience in `ExperienceTimeline.tsx`
- [ ] Added project images
- [ ] `npm run dev` works
- [ ] All links are correct
- [ ] Ready to deploy!

---

## ⚡ Quick Commands

```bash
# Install
npm install framer-motion lucide-react lenis react-fast-marquee

# Development
npm run dev

# Build
npm run build

# Start production
npm run start

# Check for errors
npm run lint
```

---

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Styles not loading | Clear cache: `rm -rf .next` then `npm run dev` |
| Images not showing | Check image URL is correct and accessible |
| Build error | Make sure all imports are correct |
| Animations not smooth | Check browser performance settings |
| Links not working | Verify URLs are complete (https://...) |

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 🎉 You're All Set!

Your world-class portfolio is ready. Just:
1. Add your projects
2. Update your info
3. Deploy to Vercel
4. Share your portfolio!

**Happy coding! 🚀**
