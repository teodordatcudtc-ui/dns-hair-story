# DNS Hair story – Site web

Site multi-pagină Next.js pentru frizeria **DNS Hair story** (București, Calea Crângași 20). Design premium, asimetric, anti-template.

---

## Stack

- **Next.js 14** (App Router) – routing real pe pagini, SEO, performanță
- **React 18** – componente și state
- **TypeScript** – tipizare
- **Tailwind CSS** – stiluri și design system (paletă DNS: fundal închis, accent auriu)
- **Fonturi:** Bebas Neue (titluri), Great Vibes (script „hair story”), DM Sans (body)

**De ce App Router:** routing bazat pe fișiere, layout-uri și metadata per pagină, suport nativ pentru `sitemap.xml` și `robots.txt` via `app/sitemap.ts` și `app/robots.ts`.

---

## Structura paginilor (URL-uri reale)

| Pagină       | URL                    |
|-------------|-------------------------|
| Acasă       | `/`                     |
| Despre noi  | `/despre-noi`           |
| Servicii    | `/servicii`             |
| Serviciu    | `/servicii/[slug]`      |
| Galerie     | `/galerie`              |
| Contact     | `/contact`              |
| Confidentialitate | `/legal/confidentialitate` |
| Termeni     | `/legal/termeni`        |
| Sitemap     | `/sitemap.xml`          |
| Robots      | `/robots.txt`           |

Navigarea se face prin linkuri către aceste URL-uri (fără anchor scrolling pentru meniu).

---

## Comenzi (copy–paste)

```bash
# 1. Instalare dependențe
npm install

# 2. Rulare în development
npm run dev
```
Deschide [http://localhost:3000](http://localhost:3000).

```bash
# 3. Build pentru producție
npm run build

# 4. Rulare după build
npm start
```

```bash
# 5. Lint (opțional)
npm run lint
```

---

## Variabilă de mediu (opțional)

Pentru URL-ul canonic al site-ului (sitemap, robots, OG):

```env
NEXT_PUBLIC_SITE_URL=https://domeniul-tau.ro
```

Creează fișierul `.env.local` în rădăcina proiectului.

---

## Imagini

Site-ul așteaptă imaginile în `public/images/`:

- **Hero (home):** `public/images/hero.jpg` – recomandat interior sau exterior din locație
- **Despre noi:** `public/images/about-preview.jpg`, `public/images/despre-interior.jpg` (opțional)
- **Galerie:** `public/images/galerie/1.jpg` … `public/images/galerie/6.jpg` (sau mai multe – poți adapta lista în `app/galerie/page.tsx`)

Dacă lipsește `hero.jpg`, hero-ul va avea fundal închis (gradient peste zona de imagine). Pentru galerie, poți pune orice imagini de test până adaugi cele reale.

---

## TO-DO list – verificare post-generare

- [ ] **Instalare:** rulează `npm install` în rădăcina proiectului.
- [ ] **Development:** rulează `npm run dev` și deschide `http://localhost:3000`.
- [ ] **Navigare:** verifică toate linkurile din header/footer (Acasă, Despre noi, Servicii, Galerie, Contact, Legal).
- [ ] **Pagini servicii:** intră pe fiecare serviciu din listă (`/servicii/tunsoare-barba`, etc.) și verifică că se încarcă.
- [ ] **Contact:** completează formularul cu date invalide și verifică mesajele de validare; apoi cu date valide și verifică mesajul de succes.
- [ ] **Hartă:** pe pagina Contact verifică că iframe-ul Google Maps se încarcă și afișează locația corectă.
- [ ] **Imagini:** adaugă `hero.jpg` (și opțional celelalte) în `public/images/` și reîmprospătează homepage și Despre noi.
- [ ] **Galerie:** adaugă 1.jpg … 6.jpg în `public/images/galerie/` sau ajustează `app/galerie/page.tsx` pentru numele fișierelor tale.
- [ ] **SEO:** după deploy, verifică `/sitemap.xml` și `/robots.txt` și setează `NEXT_PUBLIC_SITE_URL` la domeniul real.
- [ ] **Legal:** citește textele de la `/legal/confidentialitate` și `/legal/termeni` și adaptează după nevoie (nume firmă, contact, ANSPDCP etc.).
- [ ] **Accesibilitate:** testează navigarea cu tastatura (Tab, Enter) și, dacă e posibil, cu un screen reader; verifică contrastul text/fundal.

---

## Fișiere importante

- `app/layout.tsx` – layout global, fonturi, metadata de bază
- `app/page.tsx` – homepage (hero + secțiuni)
- `components/HeroHome.tsx` – hero-ul de pe homepage
- `components/Header.tsx`, `components/Footer.tsx` – navigare și footer
- `lib/site.ts` – date business (telefon, adresă, Instagram, Maps embed, baseUrl)
- `lib/services.ts` – listă servicii și slug-uri pentru paginile dedicate
- `app/sitemap.ts`, `app/robots.ts` – SEO
- `tailwind.config.ts` – culori DNS (bg, gold, surface, etc.)

---

© DNS Hair story
