# 📸 EXAMPLE PROJECTS & LINKS

This file shows you EXACTLY how to format your projects in `data/projects.ts`

---

## ✅ COMPLETE PROJECT EXAMPLES

### Example 1: Featured Project (Large Card)

```typescript
{
  id: "portfolio-website",
  name: "Moliyaviy Boshqaruv",
  description: "Moliyaviy Boshqaruvda siz bir kunda qancha pul ishlatganingiz va qancha daromad topganingizni kiritib bir oyda bir yilda qncha sariflab qancha pul yig'ganiz haqida bilsangiz boladi",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
  liveUrl: "https://moliyaviy-boshqaruv-eight.vercel.app/",
  githubUrl: "https://github.com/yourname/portfolio",
  featured: true,  // ← This makes it appear as a large card!
}
```

### Example 2: Regular Project (Small Card)

```typescript
{
  id: "ecommerce-store",
  name: "Premium Portfolio Wbsite",
  description: "Glassmorphism effektlari va 3D animatsiyalari bilan zamonaviy portfolio.",
  image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  tech: ["React", "Node.js", "MongoDB", "Stripe"],
  liveUrl: "https://salohiddin-vercelapp.vercel.app/",
  githubUrl: "https://github.com/yourname/ecommerce",
  // featured: false  or omit this line - defaults to false
}
```

### Example 3: Blog Platform

```typescript
{
  id: "blog-cms",
  name: "Blog CMS Platform",
  description: "SEO optimized blog. Markdown editor, categories, comments, user accounts, admin dashboard.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  tech: ["Next.js", "PostgreSQL", "Prisma", "Markdown"],
  liveUrl: "https://quiz-test-ruddy-five.vercel.app/",
  githubUrl: "https://github.com/yourname/blog-cms",
}
```

---

## 🔗 LINKS EXPLAINED

Each project needs **TWO links**:

### 1. Live Demo URL
```typescript
liveUrl: "https://your-live-website.com"
```
This creates a **"Live Demo"** button that opens your working website in a new tab.

Examples:
- Vercel deployment: `https://myproject.vercel.app`
- Custom domain: `https://myproject.com`
- Netlify: `https://myproject.netlify.app`

### 2. GitHub URL
```typescript
githubUrl: "https://github.com/yourname/repo-name"
```
This creates a **"Source Code"** button that opens your GitHub repository.

Examples:
- Public repo: `https://github.com/yourname/myproject`
- GitHub pages: `https://github.com/yourname/repo`

---

## 🖼️ IMAGE URLs

### Option 1: Unsplash (FREE)
```typescript
image: "https://images.unsplash.com/photo-...",
```
Get images from: https://unsplash.com/

### Option 2: Your Server
```
Save image to: public/images/project1.jpg
Then use:
image: "/images/project1.jpg",
```

### Option 3: Screenshots
```
1. Take screenshot of your project
2. Upload to: public/images/
3. Reference in projects.ts
```

### Option 4: Pexels/Pixabay
```typescript
image: "https://images.pexels.com/...",
```

---

## 📋 COMPLETE SAMPLE DATA

Copy-paste this template to `data/projects.ts`:

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
  // ========== FEATURED PROJECTS (Large Cards) ==========
  {
    id: "my-portfolio",
    name: "Premium Portfolio Website",
    description: "Modern portfolio with 3D animations, Bento grid layout, and project links. Built with Next.js and Framer Motion.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourname/portfolio",
    featured: true,
  },

  {
    id: "awesome-app",
    name: "Awesome Web Application",
    description: "Full-featured web app with authentication, database, and real-time updates. Production-ready with comprehensive testing.",
    image: "https://images.unsplash.com/photo-1518694712202-898147caf58f?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    liveUrl: "https://awesome-app.example.com",
    githubUrl: "https://github.com/yourname/awesome-app",
    featured: true,
  },

  // ========== REGULAR PROJECTS (Small Cards) ==========
  {
    id: "weather-app",
    name: "Real-time Weather Application",
    description: "Live weather forecasts with location-based data. Responsive design with animated weather icons and detailed forecasts.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather-app.example.com",
    githubUrl: "https://github.com/yourname/weather-app",
  },

  {
    id: "todo-manager",
    name: "Smart Todo Manager",
    description: "Productivity app with categories, priorities, and reminders. Features drag-drop, real-time sync, and local storage.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://todo-app.example.com",
    githubUrl: "https://github.com/yourname/todo-manager",
  },

  {
    id: "music-player",
    name: "Web Music Player",
    description: "Feature-rich music player with playlist management, audio visualization, and responsive design. Built with vanilla JavaScript.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    tech: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://music-player.example.com",
    githubUrl: "https://github.com/yourname/music-player",
  },

  {
    id: "social-network",
    name: "Social Network Clone",
    description: "Full social media platform with user profiles, posts, likes, comments, and real-time notifications. Built with modern stack.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "GraphQL", "MongoDB", "Socket.io"],
    liveUrl: "https://social-clone.example.com",
    githubUrl: "https://github.com/yourname/social-network",
  },

  {
    id: "design-system",
    name: "Component Design System",
    description: "Reusable component library with documentation. Includes buttons, forms, cards, modals, and more with Storybook integration.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Storybook", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://design-system.example.com",
    githubUrl: "https://github.com/yourname/design-system",
  },
];
```

---

## 🎯 HOW IT DISPLAYS

### Featured Projects (featured: true)
```
┌─────────────────────────────────────────┐
│ Featured Project 1 (LARGE - 4x2)        │
├─────────────────────┬───────────────────┤
│ Regular Project 1   │ Regular Project 2 │
│ (SMALL - 2x1)       │ (SMALL - 2x1)     │
├─────────────────────┼───────────────────┤
│ Regular Project 3   │ Regular Project 4 │
│ (SMALL - 2x1)       │ (SMALL - 2x1)     │
└─────────────────────┴───────────────────┘
```

---

## ✅ CHECKLIST FOR EACH PROJECT

- [ ] Unique `id` (no spaces, use hyphens)
- [ ] Clear `name`
- [ ] Good `description` (2-3 sentences)
- [ ] Valid image `image` URL
- [ ] 3-5 `tech` technologies
- [ ] Valid `liveUrl` (starts with https://)
- [ ] Valid `githubUrl` (GitHub repo URL)
- [ ] `featured: true` for best projects

---

## 🔗 LINK VALIDATION

### Good URLs ✅
```
✅ https://myproject.com
✅ https://myproject.vercel.app
✅ https://github.com/username/project
✅ https://github.com/yourname/my-repo
```

### Bad URLs ❌
```
❌ myproject.com (missing https://)
❌ http://old.site (use https://)
❌ github.com/username/project (missing https://)
❌ /local/path (not a full URL)
```

---

## 🎨 TECH TAGS

Keep tech tags SHORT and RELEVANT:

Good examples:
- Next.js, React, Vue.js
- TypeScript, JavaScript, Python
- Tailwind CSS, Bootstrap, Material UI
- MongoDB, PostgreSQL, Firebase
- Node.js, Express, Django
- Git, Docker, AWS

Avoid:
- HTML5 (everyone knows HTML)
- CSS (everyone knows CSS)
- Too many (limit to 3-5)
- Outdated versions (just write "React")

---

## 📸 IMAGE TIPS

1. **Size:** ~800x600px or larger
2. **Format:** JPG, PNG, or WebP
3. **Quality:** High quality screenshots
4. **Content:** Show your project in action
5. **Load Time:** Optimize for web

### Getting Good Images
- Take screenshots of your projects
- Use Unsplash: https://unsplash.com/
- Use Pexels: https://www.pexels.com/
- Use Pixabay: https://pixabay.com/

---

## 🎯 FINAL EXAMPLE

Here's what your complete `data/projects.ts` should look like:

```typescript
// At the top - define the type
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

// Below - your projects array
export const projects: ProjectData[] = [
  {
    id: "my-first-project",
    name: "My First Project",
    description: "This is my awesome project description.",
    image: "https://...",
    tech: ["Next.js", "React"],
    liveUrl: "https://my-project.com",
    githubUrl: "https://github.com/me/project",
    featured: true,
  },
  // ... more projects
];
```

---

## 🚀 NEXT STEP

1. Copy the template above
2. Replace with YOUR project details
3. Add actual `liveUrl` and `githubUrl`
4. Save the file
5. Run `npm run dev`
6. Your projects will appear automatically! 🎉

---

**Ready to showcase your projects?** Update `data/projects.ts` now! 💪

