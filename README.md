# LSSD Racing

A static React + TypeScript website for LSSD Racing, a U.S.-based sim racing team competing in GT Endurance, Stock Car, and Rally. The site includes the cinematic homepage, two driver dossiers, live-stream standby feed, race calendar/results, recruitment flow, responsive navigation, and SEO metadata.

## Open in VS Code

1. Copy or clone this repository to your computer.
2. Install **Node.js 22 LTS** and **pnpm 10**. The exact pnpm version is pinned in `package.json` and `pnpm-lock.yaml`.
3. Open the repository folder in VS Code.
4. Run:

```bash
pnpm install
pnpm dev:local
```

5. Open <http://localhost:3000>.

The repository includes `.vscode/settings.json`, `.vscode/extensions.json`, `.vscode/tasks.json`, and `.vscode/launch.json` so VS Code can format, type-check, build, and launch the site without additional project setup.

## Useful commands

```bash
pnpm install          # Install the locked dependency tree
pnpm dev:local        # Local Vite development server at http://localhost:3000
pnpm dev:static       # Manus/Cloud-compatible Vite server; honors PORT
pnpm check            # TypeScript diagnostics
pnpm build:static     # Production static build in dist/public
pnpm preview:static   # Preview an existing dist/public build
pnpm format           # Format tracked source files with Prettier
pnpm test             # Run Vitest tests
```

For a normal VS Code workflow, use `pnpm dev:local`, `pnpm check`, and `pnpm build:static`. No database, authentication, payment provider, or API key is required for the static site.

## Project structure

```text
client/
  index.html                 Metadata, fonts, fallback content
  public/                    Favicon, logo, hero asset, route manifest
  src/
    components/site/         Brand, header, footer, helmet, countdown, reveals
    data/team.ts             Drivers, races, results, sponsors, image references
    pages/                   Home, driver profile, join, not-found pages
    index.css                Complete visual system and responsive styles
    App.tsx                  Routes and shared shell
server/                      Optional Manus/Express server starter code
shared/                      Shared types and constants
.vscode/                     Editor settings, extensions, tasks, launch config
plan.md                     Product and design plan
TODO.md                     Delivered acceptance checklist
```

## Images and portability

The supplied hero image is committed locally at `client/public/bg-concept-v1.jpg`. The three supporting photography assets were originally provided through Manus Managed Storage and are referenced by their stable `/manus-storage/...` paths when running in Manus. If those paths are unavailable in a standalone copy, the image components automatically fall back to the committed hero image rather than showing broken image elements. To make the standalone copy fully photographic, replace the three managed paths in `client/src/data/team.ts` with local files in `client/public/`.

## Environment and deployment

The static frontend does not require `.env` values. `.env.example` documents the optional local port only; never commit real secrets. `pnpm build:static` writes a self-contained static site to `dist/public` suitable for Netlify, Vercel static hosting, GitHub Pages, an object-storage bucket, or any web server that supports SPA fallback routing.

Manus-specific deployment metadata remains in `app.config.ts`, `vite.config.ts`, and the existing platform starter files. These files do not prevent local VS Code development; the portable path is the static Vite workflow above.

## Routes

- `/` — Homepage
- `/drivers/:slug` — Driver dossier (`/drivers/steven-dean`, `/drivers/lenny-simpleton`)
- `/join` — Recruitment and application page
- `/manus-routes.json` — Static route manifest

## Editing guidance

Keep team content in `client/src/data/team.ts`, page composition in `client/src/pages/`, shared layout in `client/src/components/site/`, and visual changes in `client/src/index.css`. After changes, run `pnpm check && pnpm build:static`.
