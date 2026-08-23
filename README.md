# Ramdani — Portfolio

Personal portfolio for **Muhammad Ramdani** — Mobile Developer (Android · Flutter · IoT).

**Live:** _coming soon_
**Source:** [github.com/diigel/ramdani-resume](https://github.com/diigel/ramdani-resume)

---

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** — theming via CSS custom properties
- **Framer Motion** — scroll & modal animations
- **next-themes** — dark / light toggle (default: dark)
- **lucide-react** — icons
- `next/font` — Inter + JetBrains Mono, self-hosted

Fully static (`○` prerendered). No backend.

---

## Structure

```
resume/
├── app/
│   ├── layout.tsx        # theme provider, fonts, aurora bg
│   ├── page.tsx          # section composition
│   └── globals.css       # design tokens
├── components/
│   ├── Nav.tsx           # sticky nav + theme toggle
│   ├── Hero.tsx          # availability pill + gradient headline
│   ├── Experience.tsx    # timeline
│   ├── Projects.tsx      # grid + modal case study
│   ├── Skills.tsx        # grouped tech cards
│   └── Contact.tsx       # CTA + socials + footer
├── lib/
│   └── content.ts        # single source of truth: profile, experiences, projects, skills
└── public/
    └── Muhammad_Ramdani_CV_2026_En.pdf
```

**All copy lives in `lib/content.ts`.** Edit that one file to update the site.

---

## Dev

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

---

## Add a project

Append to the `projects` array in `lib/content.ts`:

```ts
{
  slug: "my-app",
  title: "My App",
  tagline: "One-line pitch.",
  tech: ["Kotlin", "Compose"],
  highlights: ["Bullet 1.", "Bullet 2."],
  image: "https://play-lh.googleusercontent.com/....=s256", // optional
  playStoreUrl: "https://play.google.com/store/apps/details?id=...", // optional
  githubUrl: "https://github.com/diigel/...", // optional
}
```

If `image` uses a new host, allowlist it in `next.config.ts` → `images.remotePatterns`.

---

## Deploy

Push to GitHub → import in **Vercel** → done. Static, no env vars.

```bash
git remote add origin git@github.com:diigel/ramdani-resume.git
git push -u origin main
```

---

## Contact

- **Email:** dhani.digel@gmail.com
- **GitHub:** [github.com/diigel](https://github.com/diigel)
- **LinkedIn:** [muhammad-ramdani-769b891a0](https://linkedin.com/in/muhammad-ramdani-769b891a0)

---

## License

Content (CV, project descriptions, images) © Muhammad Ramdani. Code MIT.
