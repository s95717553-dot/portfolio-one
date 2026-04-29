@echo off
REM Portfolio Setup Script for Windows

echo ================================
echo Portfolio Setup Starting...
echo ================================

REM Step 1: Install dependencies
echo.
echo 📦 Installing dependencies...
call npm install framer-motion lucide-react lenis react-fast-marquee

REM Step 2: Create necessary directories
echo.
echo 📁 Creating directories...
if not exist "public\images" mkdir public\images
if not exist "data" mkdir data
if not exist "components" mkdir components

REM Step 3: Information
echo.
echo ================================
echo ✅ Setup Complete!
echo ================================
echo.
echo 📝 Next Steps:
echo.
echo 1. Update your project information:
echo    - Edit: data/projects.ts (add your projects)
echo    - Edit: components/Hero.tsx (add your name)
echo    - Edit: components/Skills.tsx (add your skills)
echo    - Edit: components/ExperienceTimeline.tsx (add experience)
echo.
echo 2. Add project images:
echo    - Save images to: public/images/
echo    - Update image URLs in: data/projects.ts
echo.
echo 3. Run development server:
echo    npm run dev
echo.
echo 4. Open in browser:
echo    http://localhost:3000
echo.
echo 5. Deploy to Vercel (optional):
echo    npm i -g vercel
echo    vercel
echo.
echo ================================
echo 🎉 Happy Coding!
echo ================================
echo.
pause
