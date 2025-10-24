# Portfolio

Clean, recruiter-friendly portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. The interface embraces a glassmorphism aesthetic with subtle micro-interactions and responsive layouts across sections.

## Features

- 🎯 Clear information architecture (Hero, About, Skills, Projects, Experience, Contact, Resume)
- 🧊 Glass cards with accessible contrast and soft hover states
- ⚡ Fast fonts via `next/font` (Inter + IBM Plex Mono)
- ♿ Skip-link navigation, focus outlines, and reduced-motion safeguards
- 🔍 Built-in SEO metadata and social sharing tags

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. **Visit the site** at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Global layout, fonts, metadata
│   ├── page.tsx        # Homepage assembling sections
│   └── resume/         # Resume route using shared tokens
├── components/
│   ├── About.tsx       # About section content
│   ├── Contact.tsx     # Contact CTA and socials
│   ├── Experience.tsx  # Timeline of roles
│   ├── Footer.tsx      # Minimal footer
│   ├── GlassCard.tsx   # Reusable glass surface wrapper
│   ├── Header.tsx      # Sticky navigation bar
│   ├── Hero.tsx        # Hero intro + CTAs
│   ├── Projects.tsx    # Project showcase cards
│   └── Skills.tsx      # Skill group chips
└── styles/
    └── globals.css     # Design tokens, utilities, and resets
```

## Customization

### Update personal details
- `src/components/Hero.tsx`, `About.tsx`, `Experience.tsx`, and `Contact.tsx` contain profile copy, email, and links.
- `src/app/layout.tsx` stores the global metadata, canonical URL, and social tags.
- Place your PDF resume at `public/resume.pdf` or adjust the button link in `Header.tsx`.

### Add or edit projects
Projects are defined in `src/components/Projects.tsx`. Each entry accepts:
```ts
{
  title: string;
  summary: string;
  stack: string[];
  achievements: string[];
  links: { label: string; href: string }[];
}
```
Add, remove, or edit objects in the `projects` array to keep the showcase current.

### Theming tweaks
- Adjust color tokens and shadows in `src/styles/globals.css`.
- Extend Tailwind utilities (fonts, shadows, transitions) via `tailwind.config.js`.

## Build and Deploy

```bash
npm run build
npm start
```

Deploy to any Next.js-friendly platform (Vercel, Netlify, Render) with the default build command `npm run build` and output `.next`.

## License

This project is open source and available under the [MIT License](LICENSE).
