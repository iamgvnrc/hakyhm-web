# AGENTS.md

## Project Overview

This is the official one-page website and electronic press kit for HAKYHM. It is a TanStack Start application deployed on Netlify and designed around a monochrome, editorial concert aesthetic with acid-lime accents.

## Architecture

- `src/routes/__root.tsx` defines global metadata and the root HTML document.
- `src/routes/index.tsx` contains the full homepage, content data, navigation, and small reusable display components.
- `src/styles.css` contains global tokens, responsive layouts, animation, and component styles.
- `public/images/hakyhm-1.jpg` is the official supplied live press image.
- `public/mark.svg` is the custom favicon.
- `netlify.toml` and `vite.config.ts` configure TanStack Start for Netlify.

## Coding Conventions

- Use TypeScript and React function components.
- Keep homepage content in `src/routes/index.tsx` unless a new route or substantial reusable feature is introduced.
- Use descriptive component and variable names; avoid one-letter identifiers.
- Preserve the CSS token system in `:root` for color and typography changes.
- Maintain keyboard focus, semantic landmarks, useful alt text, and reduced-motion support.
- Keep external links explicit and add `rel="noreferrer"` when opening a new tab.

## Design Decisions

- The supplied press photo is intentionally reused in the hero and press-download card because it is the only official image provided.
- The August 21, 2026 performance is shown as a past event; September dates remain marked upcoming.
- Booking uses a prefilled `mailto:` link so the site requires no persistent data or server-side form handling.
- Google Fonts are loaded in `src/styles.css`; the fallback stack keeps the site usable if the font request is unavailable.

## Common Commands

```bash
pnpm dev
pnpm build
```

Do not commit generated build output.
