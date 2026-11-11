# LSSD Racing — TODO

## Brand and home experience

- [x] Present a public-facing sim racing team website for LSSD Racing with a coherent, recognizable team identity.
- [x] Home page communicates the team’s endurance sim-racing positioning, fictional 2026 program, machine, partners, and recruitment CTA.
- [x] Site visibly presents all three competition disciplines: GT Endurance, Stock Car, and Rally, with descriptions in the homepage program rail and matching recruitment/SEO copy.
- [x] Hero uses a custom cinematic racing image with clear headline, status, and primary/secondary actions.
- [x] Team manifesto, LSSD 01 machine specifications, driver lineup, race calendar, season results, and partner content are complete and internally consistent.
- [x] A live countdown to the next scheduled race updates without layout shift.
- [x] Homepage includes a broadcast-control live-stream feed section with standby state, next broadcast details, stream-link request CTA, and header/footer navigation links.

## Driver profiles

- [x] Each of the two active drivers links to `/drivers/:slug` and has a complete profile with role, nationality, number, stats, biography, and season results.
- [x] Invalid driver slugs use the supplied NotFound experience.

## Recruitment

- [x] `/join` presents open disciplines, selection process, FAQ, and direct contact details.
- [x] The application form validates required fields and opens a prefilled email draft; it does not claim a server-side submission.
- [x] Direct email link remains available if no mail client opens.

## Interaction and responsive behavior

- [x] Header navigation works on desktop and mobile; the mobile menu closes on selection and Escape.
- [x] Race calendar/results tabs and FAQ disclosure controls are keyboard accessible.
- [x] Layout is intentionally responsive at 375 px, 768 px, and 1440 px widths.
- [x] Reduced-motion preference disables nonessential entrance and marquee motion.
- [x] Visible focus states, sufficient text contrast, alt text, and semantic landmarks are present.

## Static delivery and metadata

- [x] `/manus-routes.json` declares `/`, `/drivers/:slug`, and `/join` and is served as JSON.
- [x] Each route sets a useful title and description; initial HTML contains meaningful fallback content and social metadata.
- [x] Supplied LSSD Racing logo is used in the header/footer and social metadata; its cropped emblem is used for the favicon and project `logoUrl`.
- [x] TypeScript checks, static build, route manifest response, and rendered desktop/mobile pages pass before delivery.
