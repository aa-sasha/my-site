# Sasha Nikitin Portfolio (Site v3)

This is the source code for my multi-page portfolio (v3), currently deployed to `sasha-nikitin.su/beta/`.
The previous version (v2) is hosted at the root `sasha-nikitin.su`.

## Tech Stack
- **Framework:** React 18 + Vite
- **Routing:** React Router v7 (`HashRouter` or standard `BrowserRouter` depending on deployment path, currently using standard routing with `base: "/beta/"`)
- **Styling:** Tailwind CSS (configured for "Chromecore" aesthetic)
- **Animation:** Framer Motion (used for page transitions and complex scroll-driven effects)
- **Deployment:** Custom Python script (`deploy.py`) that builds Vite and uploads artifacts to a remote VPS via SSH/SCP.

## Architecture & Data Flow
- `src/App.tsx`: Main routing setup. Uses `<ScrollToTop />` to ensure navigating between cases resets scroll position.
- `src/pages/Home.tsx`: The main landing page. Uses a split layout with a fixed sidebar (left) and scrollable main content (right).
- `src/pages/CaseStudy.tsx`: Dynamic template for project case studies. Retrieves project data by matching the `:slug` URL parameter against `src/data/projects.ts`.
- `src/data/projects.ts`: The central source of truth for all project content. To add a new project, simply append it to the `projects` array here.

## Design Aesthetic ("Chromecore")
This portfolio uses a highly specific visual language called "Chromecore", characterized by:
1. **Deep Blue & Metallic Tones:** Primary background is deep blue (`bg-[#051c4a]`), cards use metallic gradients (`from-[#e0e5ec] to-[#f4f7f6]`).
2. **Typography:** `font-mono` is heavily used for secondary text, labels, and descriptions to give an engineering/technical feel. Headings use strong, bold sans-serif.
3. **No Intrusive Filters:** We deliberately removed CRT scanlines and heavy `mix-blend-mode` effects on images to ensure the UI design work remains clean, readable, and professional. Images are displayed in full color.
4. **Borders & Shadows:** Cards use subtle inner borders (`border border-white/60`) and distinct shadows (`shadow-[0_10px_30px_rgba(0,0,0,0.3)]`) to separate them from the dark background.

## Key Mechanisms (For LLMs)

### Deck-of-Cards Scroll Effect (`src/components/Projects.tsx`)
The project cards on the homepage stack on top of each other like a deck of cards as the user scrolls.
**How it works:**
- Each card uses `sticky` positioning (`className="sticky"`).
- The `top` offset is calculated dynamically: `top: calc(2rem + ${index * 8}px)`. This ensures each card stops slightly lower than the previous one, creating a visible "stack" at the top edge.
- `z-index` is incremented based on the index (`zIndex: index + 10`) so later cards overlap earlier ones.
- **Scale Animation:** Framer Motion's `useScroll` and `useTransform` are used to slightly shrink cards as the user scrolls further down. The formula `1 - ((total - index) * 0.025)` reduces scale by 2.5% per card level, creating a 3D depth effect. 
- **Card Heights:** It is *critical* that all cards have exactly the same height. If one card is taller (e.g., longer text), its sticky container will exhaust earlier, causing it to scroll out of view asynchronously. Text lengths in `projects.ts` must be balanced.
- **Runway:** The parent container does *not* use a padding-bottom hack anymore. The gap between cards and equal heights ensure they unstick simultaneously when the user reaches the end of the section.

## How to Deploy
1. Ensure `Credentials.env` contains the correct SSH details (not tracked in git).
2. Run `python deploy.py`.
3. The script will run `npm run build`, connect to the VPS via `paramiko`, upload `dist/` to `/var/www/sasha-nikitin/beta/`, and restart Nginx.
