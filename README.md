# HAKYHM Official Website

A responsive artist website and electronic press kit for HAKYHM, an Ohio-based independent recording artist and live performer. The site presents the artist story, official music link, downloadable press photography, confirmed live dates, and a direct booking path.

## Technology

- TanStack Start and React 19
- TypeScript
- Tailwind CSS 4 with a custom editorial design system
- Lucide React icons
- Netlify deployment through the TanStack Start adapter

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The site is then available at the local URL shown in the terminal. Production deployments use the configuration in `netlify.toml`.

## Project Structure

- `src/routes/index.tsx` — complete single-page artist experience
- `src/routes/__root.tsx` — page metadata and root document
- `src/styles.css` — responsive visual system, animations, and layout
- `public/images/` — artist press photography
- `public/mark.svg` — custom site icon

## Content Updates

Live dates are defined in the `shows` array near the top of `src/routes/index.tsx`. Music and booking links are stored beside that data so they can be updated without searching through the page markup.
