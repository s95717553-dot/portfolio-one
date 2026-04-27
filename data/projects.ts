export type ProjectData = {
  name: string;
  description: string;
  image: string;
  tech: string;
};

export const projects: ProjectData[] = [
  {
    name: "Portfolio veb-sayti",
    description: "Zamonaviy, minimal dark theme portfolioda loyihalarimni tanitish uchun yaratilgan sayt.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    tech: "Next.js, Tailwind CSS, TypeScript",
  },
  {
    name: "E-Commerce sahifasi",
    description: "Qorong'u ko'rinishdagi responsive mahsulot katalogi va xarid qilish oqimini taqdim etadi.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    tech: "React, Prisma, Stripe",
  },
  {
    name: "Blog platformasi",
    description: "SEO optimallashtirilgan kontent platformasi va yozuvchilar uchun qulay boshqaruv paneli.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tech: "Next.js, Markdown, SEO",
  },
];
