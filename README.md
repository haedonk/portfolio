# Portfolio

A glass-inspired, recruiter-friendly portfolio built with Next.js, React, and Tailwind CSS. The layout keeps content clear and accessible without flashy animations.

## Features

- 🧊 Glassmorphism surfaces with soft shadows and strong typography
- 🧭 Clear information hierarchy across hero, skills, projects, experience, and contact
- ♿ Accessible color palette and focus states with reduced-motion safeguards
- ⚡ Optimized for performance with lightweight dependencies and Next.js App Router

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

### Update Personal Details
- Edit copy inside the section components located in `src/components/` (e.g., `Hero.tsx`, `About.tsx`, `Experience.tsx`).
- Adjust global design tokens in `src/styles/globals.css`.

### Manage Projects
- Update the `projects` array in `src/components/Projects.tsx` to add, remove, or edit showcased work.
- Each project supports a short summary, tech stack list, measurable highlights, and optional live/source links.

### Provide Your Resume
- Replace `public/resume.pdf` with your own PDF to power the “Resume” button in the navigation.

## Build and Deploy

```bash
npm run build
npm start
```

The project is MIT licensed. Feel free to adapt it for your own portfolio.
