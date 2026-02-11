# Cum să adaugi pozele

Pune toate fotografiile în acest folder (`public/images/`) și în subfolderul `galerie/`, cu **exact** numele de mai jos.

---

## Hero (prima pagină – ecran mare)

| Nume fișier   | Unde apare |
|---------------|------------|
| **hero.jpg**  | Imaginea de fundal din secțiunea principală de pe prima pagină (hero). |

---

## Secțiunea „Mai mult decât o tunsoare” (prima pagină)

| Nume fișier          | Unde apare |
|----------------------|------------|
| **about-preview.jpg**| Imaginea din blocul alb „Mai mult decât o tunsoare” de pe prima pagină. |

---

## Secțiunea „Un spațiu gândit pentru tine” (pagina Despre noi)

| Nume fișier            | Unde apare |
|------------------------|------------|
| **despre-interior.jpg**| Imaginea mare din pagina **Despre noi**, la secțiunea „Un spațiu gândit pentru tine”. |

Aceeași imagine este folosită și pe prima pagină la secțiunea „Vizitează-ne” (locație).

---

## Galerie

Toate pozele pentru galerie le pui în subfolderul **galerie/**.

| Nume fișier   | Unde apare |
|---------------|------------|
| **galerie/1.jpg** | Prima poză în galeria de pe prima pagină și în pagina Galerie. |
| **galerie/2.jpg** | A doua poză. |
| **galerie/3.jpg** | A treia poză. |
| **galerie/4.jpg** | A patra poză. |
| **galerie/5.jpg** | A cincea poză. |
| **galerie/6.jpg** | A șasea poză. |

Poți adăuga și **galerie/7.jpg**, **galerie/8.jpg** etc. – trebuie doar să adaugi intrările în cod în `app/galerie/page.tsx` (și opțional în secțiunea de preview de pe prima pagină).

---

## Rezumat – structura folderelor

```
public/
  images/
    hero.jpg              ← Hero prima pagină
    about-preview.jpg     ← Mai mult decât o tunsoare
    despre-interior.jpg   ← Un spațiu gândit pentru tine + Vizitează-ne
    galerie/
      1.jpg
      2.jpg
      3.jpg
      4.jpg
      5.jpg
      6.jpg
```

Formate acceptate: **.jpg**, **.jpeg**, **.png**, **.webp**. Folosește exact numele de mai sus (inclusiv litere mici).
