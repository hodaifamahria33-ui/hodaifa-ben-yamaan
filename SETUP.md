# Website live krijgen (GitHub Pages)

## Live URL

**https://hodaifamahria33-ui.github.io/hodaifa-ben-yamaan/**

Als je daar **alleen tekst / README** ziet in plaats van je donkere site met menu:

1. Repo → **Settings** → **Pages**
2. **Source:** **GitHub Actions** (niet “Deploy from a branch”)
3. **Settings** → **Environments** → **github-pages** → zet **Required reviewers** uit (anders wacht de deploy op goedkeuring)
4. **Actions** → open **Deploy Next.js to GitHub Pages** → moet groen zijn
5. Zo nodig: **Run workflow** (handmatig opnieuw)
6. Browser: **Ctrl+F5**

## Lokaal

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Build zoals GitHub

```bash
npm run build:github
```

Output in map `out/`.
