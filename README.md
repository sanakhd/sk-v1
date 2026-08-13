# Sana Khademi – Portfolio Website

A personal portfolio showcasing my experience, work, skills, and projects.

🔗 **Live Site:** [https://www.sanakhademi.com](https://www.sanakhademi.com)

---

## Stack

Astro + TypeScript, static output. Styling is a shared token layer
(`src/styles/tokens.css`) plus Astro's built-in scoped component styles — no CSS
framework. Fonts are self-hosted via Fontsource.

## Commands

| Command           | Does                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| `npm run dev`     | Dev server at `localhost:4321` (draft content **is** visible)        |
| `npm run build`   | Type-check then build to `dist/` (draft content is **not** included) |
| `npm run preview` | Serve the production build locally                                   |
| `npm run lint`    | ESLint                                                               |
| `npm run format`  | Prettier                                                             |

## Branches

- `main` — what's live on sanakhademi.com
- `v2` — the current rebuild
- `v1` — archive of the original Create React App site
