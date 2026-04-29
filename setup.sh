#!/bin/bash
# 🚀 Portfolio Setup Script - Portfel Tayyorlash Skripti

echo "================================"
echo "Portfolio Setup Starting..."
echo "================================"

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install framer-motion lucide-react lenis react-fast-marquee

# Step 2: Create necessary directories (if they don't exist)
echo "📁 Creating directories..."
mkdir -p public/images
mkdir -p data
mkdir -p components

# Step 3: Information
echo ""
echo "✅ Setup Complete!"
echo ""
echo "📝 Next Steps:"
echo ""
echo "1. Update your project information:"
echo "   - Edit: data/projects.ts (add your projects)"
echo "   - Edit: components/Hero.tsx (add your name)"
echo "   - Edit: components/Skills.tsx (add your skills)"
echo "   - Edit: components/ExperienceTimeline.tsx (add experience)"
echo ""
echo "2. Add project images:"
echo "   - Save images to: public/images/"
echo "   - Update image URLs in: data/projects.ts"
echo ""
echo "3. Run development server:"
echo "   npm run dev"
echo ""
echo "4. Open in browser:"
echo "   http://localhost:3000"
echo ""
echo "5. Deploy to Vercel (optional):"
echo "   npm i -g vercel"
echo "   vercel"
echo ""
echo "================================"
echo "🎉 Happy Coding!"
echo "================================"
