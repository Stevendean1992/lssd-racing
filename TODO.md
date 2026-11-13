# LSSD Racing — TODO

## Brand and home experience

- [x] Present a public-facing sim racing team website for LSSD Racing with a coherent, recognizable team identity.
- [x] Home page communicates the team’s 2026 origin as two U.S. Army veterans staying connected through sim racing, plus the program, machine, partners, and recruitment CTA.
- [x] Site visibly presents all three competition disciplines: GT Endurance, Stock Car, and Rally, with descriptions in the homepage program rail and matching recruitment/SEO copy.
- [x] Hero uses a custom cinematic racing image with clear headline, status, and primary/secondary actions.
- [x] Team manifesto, BMW M4 GT3 GT Endurance and Chevrolet Camaro ZL1 Stock Car specifications, driver lineup, race calendar, season results, and partner content are complete and internally consistent.
- [x] Machines section uses vehicle-specific committed photos for the BMW M4 GT3 and NASCAR Chevrolet Camaro ZL1 entries.
- [x] A live countdown to the next scheduled race updates without layout shift.
- [x] Schedule contains only THE Production Car Challenge @ViR iRacing special event, December 18–19, 2026, at VIR Grand Course; all other events are removed and the start time is shown as TBA.
- [x] Team location is shown as United States and visible local race/operations times use EST.
- [x] Team, driver, and season performance statistics are initialized at zero; no prior wins, titles, starts, podiums, poles, fastest laps, or points are claimed.
- [x] Homepage includes a broadcast-control live-stream feed section connected to the `@LSSDRacing` YouTube live channel, with standby state, next broadcast details, YouTube CTA, and header/footer navigation links.

## Driver profiles

- [x] Steven Dean (#16, Stock Car Specialist) and Lenny Simpleton (#70, Rally Specialist) are the two active co-founders, each linked to a complete `/drivers/:slug` profile with zeroed stats and biography.
- [x] Driver dossiers show Steven Dean as born in 1992 at Fort Gordon, GA and Lenny Simpleton as born in 1991 in Sacramento, CA.
- [x] Invalid driver slugs use the supplied NotFound experience.

## Recruitment

- [x] `/join` presents open disciplines, selection process, FAQ, and direct contact details.
- [x] The application form validates required fields and opens a prefilled email draft; it does not claim a server-side submission.
- [x] Direct email link remains available if no mail client opens.
- [x] All applications, direct inquiries, partnership inquiries, press inquiries, and site contact links route to LSSDRacing@gmail.com.
- [x] Recruitment lists only development driver and race engineer openings; the Broadcast Operator seat is removed.

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
- [x] Repository is transferable to VS Code with pinned Node/pnpm guidance, local scripts, tracked editor settings/tasks/launch config, `.env.example`, and portable image fallbacks.
