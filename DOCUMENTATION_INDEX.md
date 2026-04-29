# 📚 Documentation Index - Hujjatlar Ro'yxati

Loyihangizning barcha dokumentatsiyasiga kirish uchun quyidagi ro'yxat.

---

## 🚀 Getting Started (Boshlash)

### 1. **QUICK_REFERENCE.md** ⭐ START HERE
   - 2-minut setup
   - Asosiy buyruqlar
   - Checklist
   - **👉 ÐœÑƒ Ð±Ñƒ BŨ FAYL BILAN BŠ"LASHINGIZ KERAK**

### 2. **INSTALLATION.md**
   - Barcha o'rnatish buyruqlari
   - Dependencies ro'yxati
   - npm commands

### 3. **README_SETUP.md**
   - To'liq setup summary
   - Qilgan ishlar ro'yxati
   - Final checklist

---

## 📖 Guides (Qo'llanmalar)

### 4. **SETUP_GUIDE_UZ.md** - Uzbekcha
   - Batafsil setup qo'llanmasi (Uzbek tilida)
   - Loyihalar struktur
   - Sozlamalar

### 5. **COMPONENTS_GUIDE.md** - Component Details
   - Har bir komponent haqida batafsil
   - Code examples
   - Customization tips

### 6. **ARCHITECTURE.md** - System Design
   - File structure diagram
   - Data flow
   - Component hierarchy
   - Deployment process

---

## 🔧 Technical Files

### 7. **next.config.ts**
   - Next.js configuration
   - Turbopack disabled (memory fix)

### 8. **tailwind.config.ts**
   - Tailwind CSS settings
   - Color theme
   - Custom utilities

### 9. **tsconfig.json**
   - TypeScript configuration
   - Path aliases
   - Compiler options

---

## 🎯 What to Edit

File by file guide qaysi fayllarni tahrirlash kerak:

### Priority 1: Data (Loyihalar ma'lumotlari)
📂 **data/projects.ts**
- 6-8 ta loyiha qo'shing
- Har biriga link va rasm qo'shing

### Priority 2: Hero (Bosh qism)
📂 **components/Hero.tsx**
- Nomingizni qo'shing
- Social linklar
- Tavsif

### Priority 3: Skills (Ko'nikmalar)
📂 **components/Skills.tsx**
- Texnologiyalarni qo'shing

### Priority 4: Experience (Tajriba)
📂 **components/ExperienceTimeline.tsx**
- Tajribalaringizni qo'shing

### Priority 5: Images (Rasmlar)
📂 **public/images/**
- Proyekt rasmlarini upload qiling
- Linklar update qiling

---

## 📋 Documentation Files Explained

| Fayl | Maqsadi | O'qish Vaqti |
|------|---------|-----------|
| QUICK_REFERENCE.md | Tez start | 2 min |
| INSTALLATION.md | O'rnatish | 5 min |
| SETUP_GUIDE_UZ.md | Batafsil setup | 15 min |
| COMPONENTS_GUIDE.md | Komponentlar | 20 min |
| ARCHITECTURE.md | Tizim dizayn | 15 min |
| README_SETUP.md | Summary | 10 min |

**Total:** ~67 minutes for complete reading (optional)

---

## 🎯 Quick Paths

### "Just Get Me Running" Path
1. Read: QUICK_REFERENCE.md (2 min)
2. Run: `npm install ...` (5 min)
3. Edit: `data/projects.ts` (10 min)
4. Run: `npm run dev` (1 min)
5. Done! ✅

**Total time: 18 minutes**

---

### "I Want to Understand Everything" Path
1. QUICK_REFERENCE.md
2. INSTALLATION.md
3. SETUP_GUIDE_UZ.md
4. COMPONENTS_GUIDE.md
5. ARCHITECTURE.md
6. This file
7. Then edit your files

**Total time: ~70 minutes**

---

### "I Just Want to Customize" Path
1. QUICK_REFERENCE.md
2. COMPONENTS_GUIDE.md (customize section)
3. Edit your files
4. Done! ✅

**Total time: ~20 minutes**

---

## 🔗 File Locations

```
📦 my-app/
├── 📄 QUICK_REFERENCE.md          ← Start here!
├── 📄 INSTALLATION.md             ← Install commands
├── 📄 SETUP_GUIDE_UZ.md           ← Uzbek guide
├── 📄 COMPONENTS_GUIDE.md         ← Components
├── 📄 ARCHITECTURE.md             ← System design
├── 📄 README_SETUP.md             ← Setup summary
├── 📄 DOCUMENTATION_INDEX.md      ← This file
│
├── app/
│   ├── page.tsx                   ← Main page
│   └── layout.tsx                 ← Layout
├── components/
│   ├── Hero.tsx                   ← Edit: name, links
│   ├── BentoGrid.tsx              ← Auto uses projects.ts
│   ├── Skills.tsx                 ← Edit: skills
│   └── ExperienceTimeline.tsx     ← Edit: experience
├── data/
│   └── projects.ts                ← Edit: your projects ⭐
├── public/
│   └── images/                    ← Add: your images
│
└── setup.bat / setup.sh           ← Run for setup
```

---

## 💡 Pro Tips

1. **Start with QUICK_REFERENCE.md** - It's the shortest!
2. **Keep COMPONENTS_GUIDE.md open** - For reference while editing
3. **Use setup.bat (Windows) or setup.sh (Mac/Linux)** - Automatic setup
4. **Check ARCHITECTURE.md** - If you want to understand structure

---

## ❓ FAQ

### Q: Which file should I read first?
**A:** QUICK_REFERENCE.md - It's only 2 minutes!

### Q: Where do I add my projects?
**A:** data/projects.ts - See COMPONENTS_GUIDE.md for format

### Q: How do I add project links?
**A:** Each project has `liveUrl` and `githubUrl` fields

### Q: Can I customize colors?
**A:** Yes! See COMPONENTS_GUIDE.md → "Colors & Styling"

### Q: How do I deploy?
**A:** See QUICK_REFERENCE.md → Deploy section

### Q: What if something breaks?
**A:** Check QUICK_REFERENCE.md → Common Issues

---

## 📞 Support Resources

### In This Repo:
- ✅ QUICK_REFERENCE.md - Common issues
- ✅ COMPONENTS_GUIDE.md - How to customize
- ✅ ARCHITECTURE.md - How it works

### External:
- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Framer Motion](https://www.framer.com/motion/)
- 🎯 [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Next Steps

1. **Read:** QUICK_REFERENCE.md (2 min)
2. **Run:** Setup commands (5 min)
3. **Edit:** data/projects.ts (10 min)
4. **Test:** npm run dev (1 min)
5. **Deploy:** npm run build (2 min)

**Total: 20 minutes to live website!** 🎉

---

## ✅ Checklist for Deployment

- [ ] Read QUICK_REFERENCE.md
- [ ] Run setup commands
- [ ] Update data/projects.ts
- [ ] Edit Hero component
- [ ] Edit Skills component
- [ ] Edit Timeline component
- [ ] Add project images
- [ ] Test: npm run dev
- [ ] Build: npm run build
- [ ] Deploy to Vercel
- [ ] Share your portfolio!

---

**Barcha dokumentatsiya tayyor! Happy coding! 🎉**

---

*Last Updated: April 2026*
*Version: 1.0*
*Status: ✅ Complete*
