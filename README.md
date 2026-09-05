# 3D Portfolio - PRAJWAL KARTHIKEYA

An immersive 3D portfolio website built with React Three Fiber, shader gradients, and modern web technologies.

## 🎨 Features

- **Immersive 3D Hero Section** with animated shader gradients using @shadergradient/react
- **Interactive 3D Objects** - Floating geometries that respond to user interaction
- **Smooth Animations** powered by Framer Motion
- **Custom Cursor** with hover effects
- **Responsive Design** optimized for all devices
- **Cinematic Aesthetics** with grain overlay and elegant typography
- **Performance Optimized** with lazy loading and efficient rendering

## 🚀 Tech Stack

- **Frontend Framework**: React 18 + TypeScript + Vite
- **3D Graphics**: Three.js + React Three Fiber + React Three Drei
- **Shader Effects**: @shadergradient/react
- **Animation**: Framer Motion
- **Styling**: Custom CSS with CSS Variables
- **Build Tool**: Vite

## 📦 Installation

```bash
cd "D:\My Projects\portfolio-3d"
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📁 Project Structure

```
portfolio-3d/
├── src/
│   ├── components/
│   │   ├── Hero3D.tsx          # Main hero section with shader gradient
│   │   ├── About.tsx            # About section with 3D sphere
│   │   ├── Projects.tsx         # Projects showcase with 3D elements
│   │   ├── Contact.tsx          # Contact section with 3D torus
│   │   ├── Navigation.tsx       # Fixed navigation bar
│   │   ├── CustomCursor.tsx     # Custom cursor component
│   │   ├── Preloader.tsx        # Loading animation
│   │   └── *.css                # Component styles
│   ├── App.tsx                  # Main app component
│   ├── App.css                  # Global styles
│   └── main.tsx                 # Entry point
├── public/
│   ├── profile.jpg              # Your profile image
│   ├── wildfire-intelligence.png # Project screenshot
│   └── resume.pdf               # Your resume
└── package.json
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --bg: #0a0a0a;
  --accent: #8B9BB4;
  --gold: #C9A84C;
  --red: #8B2500;
}
```

### Content

- **Hero Section**: Edit `src/components/Hero3D.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Projects**: Update the `projects` array in `src/components/Projects.tsx`
- **Contact Info**: Update links in `src/components/Contact.tsx`

### Shader Gradient

The shader gradient in the hero section can be customized by modifying the `urlString` prop in `Hero3D.tsx`. Visit [shadergradient.co](https://shadergradient.co) to create your own gradient and export the URL.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## 📝 Notes

- All dependencies are installed in the D drive to save space on C drive
- The project uses React 18 with React Three Fiber v8
- Custom fonts: Space Grotesk, JetBrains Mono, Playfair Display

## 🔧 Troubleshooting

**Issue: Shader gradient not loading**
- Make sure you have a stable internet connection (it loads from CDN)
- Check browser console for errors

**Issue: 3D objects not rendering**
- Verify WebGL is enabled in your browser
- Update graphics drivers if needed

**Issue: Performance issues**
- Reduce the number of 3D objects
- Lower the shader quality in `Hero3D.tsx`
- Disable auto-rotation on `OrbitControls`

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

- React Three Fiber ecosystem by [@pmndrs](https://github.com/pmndrs)
- Shader Gradient by [@ruucm](https://github.com/ruucm)
- Framer Motion by Framer

---

**Original Portfolio**: [prazzu-portfolio.vercel.app](https://prazzu-portfolio.vercel.app/)

Built with ❤️ and WebGL
