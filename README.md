# Yenny Koh — Portfolio

Minimal, premium portfolio site with a 3D cylindrical carousel.

## File Structure

```
portfolio/
├── index.html          ← Entry point
├── styles/
│   └── main.css        ← All styles: tokens, layout, carousel, detail
├── scripts/
│   └── carousel.js     ← Carousel logic, scroll, detail page, cursor
├── assets/
│   └── images/         ← Drop your project images here
└── README.md
```

## Running Locally

**Option A — VS Code Live Server (recommended)**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Opens at `http://127.0.0.1:5500`

**Option B — Terminal**
```bash
# Python 3
python3 -m http.server 3000
# then open http://localhost:3000
```

## Adding Your Real Images

In `scripts/carousel.js`, each project in the `PROJECTS` array has an `images` field.

Replace the `createPlaceholderSrc` call in `buildCarousel()` with your actual image paths:

```js
// In buildCarousel(), replace:
const imgSrc = createPlaceholderSrc(project, i);

// With:
const imgSrc = `assets/images/${project.id}/cover.jpg`;
```

And in `openDetail()`, replace process images similarly:
```js
const processImgs = [
  `assets/images/${project.id}/process-1.jpg`,
  `assets/images/${project.id}/process-2.jpg`,
  `assets/images/${project.id}/outcome.jpg`,
];
```

**Recommended image sizes:**
- Cover (carousel): 840 × 1120px (portrait 3:4)
- Process: 1600 × 1000px (landscape)
- Hero: 2200 × 1200px (wide landscape)

## Controls

| Input | Action |
|-------|--------|
| Scroll ↑↓ | Rotate carousel |
| Arrow keys | Navigate projects |
| Click active card | Open project detail |
| Click side card | Navigate to that project |
| Escape | Close detail view |
| ← → (in detail) | Prev / Next project |

## Deploying to GitHub Pages

1. Push folder contents to your GitHub repo
2. Go to Settings → Pages → Source: `main` branch, `/ (root)`
3. Site publishes at `https://yourusername.github.io/repo-name`

> For a custom domain (yennykoh.com), add a `CNAME` file with your domain.

## Customizing

**Colors** — Edit CSS variables in `:root {}` inside `main.css`

**Projects** — Edit the `PROJECTS` array in `carousel.js`

**Fonts** — Currently using DM Sans + Playfair Display (Google Fonts). Change the `@import` in `main.css` and update `--font-sans` / `--font-serif` variables.

**Cylinder depth** — Adjust `CYLINDER_RADIUS` in `carousel.js` (default: 600px). Smaller = tighter/more dramatic.
