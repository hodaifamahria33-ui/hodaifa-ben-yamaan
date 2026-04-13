# → [Open je echte website (klik hier)](https://hodaifamahria33-ui.github.io/hodaifa-ben-yamaan/)

**Dit scherm (README) is alleen uitleg op GitHub — niet je ontwerp.** Je mooie site is de link hierboven.

### Zie je een lelijke tekstpagina met `npm install`?

Dan staat GitHub Pages nog verkeerd. Doe dit **eenmalig**:

1. Ga naar **Settings** → **Pages** in je repo.
2. Bij **Source** kies **GitHub Actions** (niet “Deploy from a branch”).
3. Ga naar **Actions** en wacht tot de groene vink bij “Deploy Next.js to GitHub Pages” klaar is.
4. Open opnieuw de link bovenaan (eventueel **Ctrl+F5**).

### Lokaal ontwikkelen

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Technisch: build zoals op GitHub

```bash
npm run build:github
```

Output: map `out/` (wordt door Actions automatisch gepubliceerd).
