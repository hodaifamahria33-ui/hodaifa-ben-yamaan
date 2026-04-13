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

---

## Contactformulier → echte e-mail (aanbevolen)

Je site op GitHub Pages kan **geen** Outlook/Microsoft “inloggen” koppelen zoals een app. Wel kun je **gratis** formulier-mail gebruiken:

1. Ga naar **https://web3forms.com**
2. Vul het e-mailadres in waar je aanvragen wilt ontvangen (bijv. je Gmail).
3. Je krijgt een **Access Key** (lange code).
4. **Snelste manier (Windows, met GitHub CLI):** dubbelklik niet — open PowerShell in je projectmap en voer uit:
   ```powershell
   .\scripts\set-web3-secret.ps1
   ```
   Plak je key als daarom wordt gevraagd.  
   **Of handmatig:** repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**  
   - Name: `WEB3FORMS_ACCESS_KEY`  
   - Value: je access key  

5. Deploy opnieuw: **Actions** → **Deploy Next.js to GitHub Pages** → **Run workflow**, of push een kleine wijziging naar `main`.

Daarna zegt het formulier op je site **“Verstuur bericht”** en komen mails **direct** binnen — zonder dat bezoekers Outlook hoeven te openen.

**Lokaal testen:** maak een bestand `.env.local` in je project:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=jouw_key_hier
```

Daarna `npm run dev`.
