# Hodaifa — video editing site

Next.js (App Router) + Tailwind CSS v4. Static export for GitHub Pages.

## Lokaal werken

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build zoals GitHub Pages

```bash
npm run build:github
```

Output staat in `out/` (met `basePath` `/hodaifa-ben-yamaan`).

## Live zetten

Push naar `main` triggert `.github/workflows/deploy-pages.yml`. Zet in GitHub onder **Settings → Pages** de bron op **GitHub Actions** (eenmalig).
