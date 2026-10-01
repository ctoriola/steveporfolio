# Steve Adakole: Portfolio 2026

A static, single-page portfolio site (HTML, CSS and a little vanilla JS, no build step). It was built from `PLAN.md`, using the copy and images in `source/steve-portfolio.pdf`.

## Run locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Publish the repo root on any static host (GitHub Pages, Netlify and so on).

## Structure

- `index.html`: all sections, plus the gallery markup (45 images)
- `css/styles.css`: design tokens, layout and responsive rules
- `js/main.js`: mobile menu, scroll reveal, gallery filters and lightbox
- `assets/images/`: optimised WebP images (`-600`/`-1200` widths) with the original JPGs as fallback
- `PLAN.md`, `source/`: the build plan and source material

## To do before launch

- Confirm the education date range with Steve (the PDF says 2020–2022 but lists a 2023 degree; the site shows 2020 – 2023).
- Make `og:image` in `index.html` an absolute URL once the domain is known.
- Replace the PDF-sourced images with higher-resolution originals if available.
