# Portfolio

A modern, dark-themed portfolio built with Next.js 13+ App Router, featuring animated particles and smooth transitions.

## Features

- ✨ Dark theme with starry particle background
- 🎬 Smooth animations using Framer Motion
- 🎨 Styled with Tailwind CSS
- ⚡ Built with Next.js 13+ App Router
- 🎯 TypeScript support
- 📱 Fully responsive design

## Technologies Used

- **Next.js 13+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **@tsparticles/react** - Particle background effects
- **Orbitron Font** - Google Fonts

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Global layout with font loading
│   └── page.tsx        # Main homepage
├── components/
│   ├── ParticleBackground.tsx  # Animated particle background
│   └── Hero.tsx               # Hero section with animations
└── styles/
    └── globals.css     # Global styles and Tailwind imports
```

## Customization

### Update Personal Information
- Edit `src/components/Hero.tsx` to change your name and title
- Modify `src/app/layout.tsx` to update the page metadata

### Styling
- Customize colors and animations in `tailwind.config.js`
- Modify particle settings in `src/components/ParticleBackground.tsx`
- Adjust animations in `src/components/Hero.tsx`

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).
