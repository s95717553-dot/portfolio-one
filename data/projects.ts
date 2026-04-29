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
  {
    id: "portfolio-site",
    name: "Moliyaviy Boshqaruv",
    description: "Moliyaviy Boshqaruvda siz bir kunda qancha pul ishlatganingiz va qancha daromad topganingizni kiritib bir oyda bir yilda qncha sariflab qancha pul yig'ganiz haqida bilsangiz boladi",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://moliyaviy-boshqaruv-eight.vercel.app/",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true,
  },
  {
    id: "ecommerce-store",
    name: "Premium Portfolio Veb-sayti",
    description: "Glassmorphism effektlari va 3D animatsiyalari bilan zamonaviy portfolio. Bento grid layout va smooth scroll implementatsiyasi.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://salohiddin-vercelapp.vercel.app/",
    githubUrl: "https://github.com/yourusername/ecommerce-store",
    featured: true,
  },
  {
    id: "blog-platform",
    name: "Blog CMS Platform",
    description: "SEO optimallashtirilgan blog platformasi. Markdown editlash, kategoryalar va yozuvchi hisoblari bilan.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Markdown"],
    liveUrl: "https://quiz-test-ruddy-five.vercel.app/",
    githubUrl: "https://github.com/yourusername/blog-platform",
  },
  {
    id: "weather-app",
    name: "Real-time Weather App",
    description: "Hozirgi vaqtdagi ob-hava ma'lumotlari va prognozni ko'rsatuvchi responsive ilovasi.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "API", "Tailwind CSS"],
    liveUrl: "https://weather-app-example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
  },
];
