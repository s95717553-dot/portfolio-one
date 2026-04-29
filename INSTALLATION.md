# 📦 Installation Commands - To'liq Qo'llanma

Loyihani to'liq o'rnatish uchun quyidagi buyruqlarni ketma-ket bajaring.

## Step 1: Asosiy Kutubxonalarni O'rnatish

```bash
npm install framer-motion lucide-react lenis react-fast-marquee
```

**Nima o'rnatilmoqda:**
- `framer-motion` - Animatsiyalar va smooth transitions
- `lucide-react` - Icon library
- `lenis` - Smooth scrolling
- `react-fast-marquee` - Marquee (aylanuvchi) animatsiyasi

## Step 2: Dev Kutubxonalarni O'rnatish (Opsional)

Agar TypeScript ishlatayotgan bo'lsangiz:

```bash
npm install --save-dev @types/react @types/node
```

## Step 3: Loyihani Ishga Tushirish

```bash
npm run dev
```

Keyin: `http://localhost:3000` oching

## Step 4: Build va Production

```bash
npm run build
npm run start
```

---

## 🔧 Barcha Zarur Dependencies

**package.json** da quyidagi bo'lishi kerak:

```json
{
  "dependencies": {
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.11.0",
    "lenis": "latest",
    "react-fast-marquee": "latest"
  },
  "devDependencies": {
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/node": "^20",
    "typescript": "^5"
  }
}
```

---

## ✅ Setup Checklist

- [ ] Yangi Next.js loyihasi yaratildi
- [ ] `npm install` with all dependencies done
- [ ] `npm run dev` works without errors
- [ ] `http://localhost:3000` loads the page
- [ ] Components imported correctly
- [ ] Projects data updated with your projects
- [ ] `npm run build` succeeds

---

## 🚀 Deploy qilish (Vercel)

```bash
npm i -g vercel
vercel
```

Yoki GitHub orqali automatic deploy qilish:
1. GitHub repo yarating
2. Vercel.com ga github bilan login qiling
3. "Import Project" dan repo tangling
4. Deploy!

---

Barchasi tayyoq! 🎉
