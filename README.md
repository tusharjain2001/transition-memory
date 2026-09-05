# TransitionMemory — About page

React + Vite + Tailwind CSS v4 marketing site for TransitionMemory, built from the page designs in `reference/`.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Structure

- `src/App.jsx` — router (React Router): / (home), /how-it-works, /about, /for-owners, /for-advisers, /pricing, /book-a-founder-scan, /refer-an-owner
- `src/pages/` — one file per page; About is assembled from the section components
- `src/components/shared.jsx` — reusable blocks (cards, numbered steps, FAQ, heat table, flow diagram, CTA band)
- `src/components/Icons.jsx` — all line icons drawn as inline SVG (stroke = currentColor)
- `src/index.css` — Tailwind import + design tokens (colors, fonts) in `@theme`
- `reference/` — original design screenshots for all eight pages
