# Sasha Nikitin Portfolio (Site v3)

Source for the portfolio deployed at **`https://sasha-nikitin.su/`**.

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Routing:** React Router v7 (data router with `createBrowserRouter` + `ScrollRestoration`)
- **Styling:** Tailwind CSS v4 (`@theme` config inline in `src/index.css`)
- **Animation:** [`motion`](https://motion.dev) (formerly Framer Motion). All animations honor `prefers-reduced-motion` via a top-level `<MotionConfig reducedMotion="user">`.
- **Deployment:** `deploy.py` — builds, uploads `dist/` to the VPS via paramiko, syncs nginx config, reloads.

## Architecture

- `src/App.tsx` — router, `MotionConfig`, `ScrollRestoration`.
- `src/pages/Home.tsx` — landing. Sidebar pinned to viewport on desktop (`lg:fixed`), inline above content on mobile. Main content offset by `lg:ml-[350px]`.
- `src/pages/CaseStudy.tsx` — case template. Pulls project by `:slug` from `src/data/projects.ts`.
- `src/data/projects.ts` — single source of truth for project content. Add a new project by appending an entry. Optional `gallery: string[]` controls the "Design & Interface" section.

## Components

- `Sidebar` — sticky profile/nav/CV column. Live Yerevan time + availability glyph (green/orange/red, color via `currentColor` on a single shared SVG).
- `Hero` — landing intro with linear count-up stats.
- `Projects` — sticky "deck-of-cards" stack. Each card has a custom cursor that says "Open Case ↦".
- `Experience` — work + teaching + contacts.
- `SectionHeading` — small reusable eyebrow heading with view-triggered fade.
- `MagneticLink` — anchor that gently follows the cursor (used on CV / contact CTAs).
- `MusicPlayer` — floating ambient-music widget mounted in `App` (outside the router) so the track survives navigation. UX: first click anywhere starts the track; once the user explicitly pauses via the widget, auto-on-click is disabled forever (persisted in `localStorage`). Default volume `0.1`, loops, `preload="metadata"` so the 940 KB MP3 only downloads on play.

### Deck-of-cards mechanic

Each project card is `position: sticky` with `top` calculated as `2rem + index * 8px`, and `z-index: index + 10`. As the user scrolls, Framer Motion's `useScroll` + `useTransform` shrinks each card by `(total - index) * 0.025`, giving a 3D depth effect. The last card uses `relative` instead of `sticky` so the stack unsticks together. Cards have a fixed `min-h-[640px]` and use `mt-auto` on the description so all cards visually align even with varied text lengths.

## Deploy

1. Copy `Credentials.env.example` → `Credentials.env` and fill in SSH details (host, user, key path or password). The file is gitignored.
2. Run `python deploy.py`. The script:
   - runs `npm run build`
   - SSHs into the VPS
   - safely wipes the deployment root and uploads `dist/` to `/var/www/sasha-nikitin/`
   - rewrites the nginx site config and reloads

### Cloudflare cache

The site is fronted by Cloudflare. Static assets (PDF, images) get a 4h cache. After a deploy, force-refresh with `?v=<anything>` or purge in the Cloudflare dashboard if you need users to see updates immediately.
