# LSSD Racing — Website Plan

## Product scope

A public-facing sim racing team website for **LSSD Racing**. The site presents a credible, independent multi-discipline sim-racing program rather than a generic gaming landing page. It includes:

- A cinematic home page with hero, team manifesto, GT Endurance / Stock Car / Rally program rail, the BMW M4 GT3 and Chevrolet Camaro ZL1 machines, vehicle-specific photos, driver lineup, race calendar, results, partners, and join CTA.
- A driver profile route (`/drivers/:slug`) for each of the two active drivers.
- A recruitment route (`/join`) with open roles, the selection process, an FAQ, and a working email application flow.
- Responsive navigation, a live-stream feed section, live race countdown, race/results tabs, scroll reveals, and reduced-motion support.
- Public metadata, route declarations, a custom favicon/mark, and a static production build.

The content is fictional and internally consistent. No real-world racing series, sponsors, or manufacturers are represented.

## Implementation approach

- React 19 + TypeScript + Vite with Tailwind CSS v4.
- `wouter` for `/`, `/drivers/:slug`, and `/join`; unknown routes use the supplied NotFound page.
- Framer Motion for restrained entrance transitions; CSS for marquee, hover treatments, and ambient motion.
- All team, race, result, sponsor, and driver content lives in `client/src/data/team.ts`.
- Portable local development uses `ResilientImage` to fall back to the committed hero asset when Manus Managed Storage is unavailable outside the platform.
- Custom images are delivered through the project’s Managed Storage image paths and referenced directly.
- The application form validates locally and opens a prefilled email draft; no backend or fake submission state is used.
- Applications and public inquiries use LSSDRacing@gmail.com as the single destination.
- Deployment remains static: `pnpm build:static`, output `dist/public`.

## Project structure

```text
client/
  index.html                 Metadata, fonts, crawler-visible fallback content
  public/
    bg-concept-v1.jpg       Supplied multi-discipline hero background
    manus-routes.json        Public route manifest
    lssd-icon.png            Cropped emblem / favicon and project icon
    lssd-logo-original.png   Supplied full-color LSSD Racing logo
  src/
    App.tsx                  Router and shared layout
    index.css                Design tokens, global styles, motion primitives
    data/team.ts             Drivers, races, results, sponsors, machine data
    hooks/usePageMeta.ts     Route-specific title and description
    components/
      site/SiteHeader.tsx
      site/SiteFooter.tsx
      site/Brand.tsx
      site/Helmet.tsx
      site/Countdown.tsx
      site/SectionHeading.tsx
      site/Reveal.tsx
    pages/
      Home.tsx
      DriverProfile.tsx
      Join.tsx
      NotFound.tsx
```

## Design direction

Three candidate styles were considered:

1. **Neo-industrial Swiss motorsport dossier** — engineering precision, editorial type, red-and-gold signal color. Probability: 0.07.
2. **Retro-futurist arcade neon** — chrome, scanlines, saturated purple/cyan. Probability: 0.04.
3. **Minimal Japanese performance editorial** — monochrome whitespace, small type, quiet detail. Probability: 0.03.

**Selected: Neo-industrial Swiss motorsport dossier.**

### Design Movement

Swiss International Style meets contemporary motorsport engineering documents: rigorous alignment, oversized condensed typography, exposed data, and utilitarian details presented with editorial confidence.

### Core Principles

- **Evidence over hype.** Numbers, session data, and precise labels make the team feel operational.
- **Asymmetry with intent.** Content is offset, cropped, and punctuated by vertical rails rather than centered in uniform cards.
- **Controlled aggression.** Near-black surfaces and sharp red-and-gold flashes create speed without becoming an arcade interface.
- **Tactile restraint.** Borders, mono labels, and subtle texture suggest carbon, paper, and telemetry.

### Color Philosophy

Carbon black anchors the team in focus and night racing. Bone white creates breathing room and the feel of a printed race dossier. The user-supplied logo establishes the color story: **racing red** is the team's heat and intent, while **signal gold** marks track limits, live telemetry, and split-second decisions. The palette is intentionally limited so every red and gold mark carries meaning.

### Layout Paradigm

A full-bleed cinematic hero gives way to an asymmetrical editorial grid with a persistent left rail of technical labels. Sections alternate between black, bone, and a single full-gold statement panel. Oversized type breaks the grid; race data appears as rules and rows, not rounded dashboard cards. On mobile, the rail collapses into compact kickers while the typography retains its scale.

### Signature Elements

- **The slash system:** repeated forward slashes encode speed and separate labels.
- **Technical rails:** vertical mono labels, crop marks, and hairline rules around content.
- **Telemetry fragments:** lap-time strips, sector bars, coordinates, and ghosted track outlines.

### Interaction Philosophy

Interactions should feel mechanical and immediate: links shift a few pixels, underlines cut in from the left, buttons invert, and panels snap rather than float. Navigation stays quiet until needed. No cursor gimmicks or gratuitous 3D.

### Animation

- Hero content enters in a 700 ms stagger with short, decisive easing.
- Sections reveal once at 8–16 px of travel; no continuous parallax.
- The partner rail uses a slow, linear marquee.
- Countdown digits update without layout shift.
- All nonessential motion is removed under `prefers-reduced-motion`.

### Typography System

- **Display:** Barlow Condensed 700/800, tight leading, uppercase. Used for hero, section titles, and giant race numbers.
- **Body:** Manrope 400–700, generous line height. Used for paragraphs, navigation, and buttons.
- **Technical:** IBM Plex Mono 400/500, uppercase with tracked labels. Used for metadata, timing, and table headers.

### Brand Essence

LSSD Racing is an independent sim-racing team for people who treat the virtual grid like a real engineering problem. **Precise, relentless, understated.**

### Brand Voice

Direct, technical, and dryly confident. Headlines sound like race notes; microcopy earns attention.

- “No respawns. No shortcuts.”
- “Built in the gap between laps.”

### Wordmark & Logo

The user supplied the official **LSSD Racing** logo: a bold red team wordmark accelerated by gold speed lines, with a black `LSSD RACING` signature and gold baseline. The full-color logo is presented on a warm paper badge in the header and footer, preserving the original black lettering on dark surfaces. A cropped square emblem is used for the favicon and project icon.

### Signature Brand Color

**Racing Red — `#C91525`**, supported by **Signal Gold — `#D6A338`**. The pair comes directly from the supplied logo and behaves like heat and timing data across disciplined carbon and bone surfaces.

## Content model

- Two fictional U.S. Army veteran co-founders: Steven Dean (#16, US), Stock Car Specialist, born 1992 in Fort Gordon, GA, and Lenny Simpleton (#70, US), Rally Specialist, born 1991 in Sacramento, CA. They built LSSD in 2026 as a way to stay in touch after service.
- Three racing programs: GT Endurance, Stock Car, and Rally. The schedule now contains one next event: iRacing’s THE Production Car Challenge @ViR special event, December 18–19, 2026, at VIR Grand Course; start time remains TBA.
- Event window: December 18–19, 2026; start time remains TBA.
- News section: a dated official release announces the upcoming GT Endurance event, explains that all two-driver preparation is focused on the GT Endurance car and long-run execution, and presents the iRacing/VIR/four-hour event facts. Event window and format follow iRacing’s Special Events Calendar: https://www.iracing.com/special-events/.
- Team base: United States, with local times displayed in EST.
- The team and driver performance record starts at zero; no completed season results are displayed yet.
- Open recruitment is limited to development driver and race engineer roles; there is no Broadcast Operator seat opening.
- Live-feed player and CTA link to the public LSSD Racing YouTube live channel at `@LSSDRacing`.
- Partners: fictional wordmarks only, clearly presented as team partners.

## Constraints

- Static frontend only; no server, database, authentication, or payment features.
- No external image search; custom visuals are generated for the site.
- No misleading real-world claims or real sponsor marks.
- The primary CTA is recruitment (`/join`), with secondary CTAs for driver profiles and race information.
- The site must remain usable at 375 px, 768 px, and 1440 px widths.
