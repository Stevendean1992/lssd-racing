import Countdown from "@/components/site/Countdown";
import Helmet from "@/components/site/Helmet";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import {
  DRIVERS,
  IMAGES,
  MACHINE_NOTES,
  MACHINE_SPECS,
  NEXT_RACE,
  OPEN_ROLES,
  RACE_CALENDAR,
  SEASON_RESULTS,
  SPONSORS,
  TEAM_PRINCIPLES,
  TEAM_STATS,
  getDriver,
} from "@/data/team";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarPlus, MoveUpRight } from "lucide-react";
import { type CSSProperties, useState } from "react";
import { Link } from "wouter";

type CalendarView = "upcoming" | "results";

function formatIcsDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function downloadNextRace() {
  const start = new Date(NEXT_RACE.date);
  const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//LSSD Racing//Race Calendar//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${NEXT_RACE.id}@lssdracing.gg`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${NEXT_RACE.name} — LSSD Racing`,
    `LOCATION:${NEXT_RACE.circuit}, ${NEXT_RACE.location}`,
    `DESCRIPTION:${NEXT_RACE.series}, ${NEXT_RACE.round}. Lights out at 18:00 UTC.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "lssd-racing-spa-virtual.ics";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000);
}

export default function Home() {
  usePageMeta(
    "LSSD Racing | Engineered for the Limit",
    "LSSD Racing is an independent sim racing team built for endurance. Meet the drivers, explore the LSSD 01, follow the 2026 calendar and apply to join the grid.",
  );

  const [calendarView, setCalendarView] = useState<CalendarView>("upcoming");

  return (
    <div id="top" className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <img src={IMAGES.hero} alt="" />
        </div>
        <div className="hero__wash" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />

        <div className="container hero__inner">
          <div className="hero__meta">
            <span className="hero__kicker">Independent endurance sim racing</span>
            <span className="hero__status">
              <span className="live-dot" aria-hidden="true" />
              Operational / Rotterdam
            </span>
          </div>

          <div className="hero__title-wrap">
            <p className="hero__pre-title">LSSD Racing / 2026 programme</p>
            <h1 className="hero__title" id="hero-title">
              <span>Engineered</span>
              <span className="hero__title-outline">for the</span>
              <span>
                limit<span className="hero__title-dot">.</span>
              </span>
            </h1>
          </div>

          <div className="hero__bottom">
            <div className="hero__scroll">
              <span className="hero__scroll-line" aria-hidden="true" />
              <span>Scroll to staging</span>
              <ArrowDown size={14} aria-hidden="true" />
            </div>

            <div className="hero__copy">
              <p>
                We don’t chase clean laps. We engineer them. Four drivers, one machine,
                and a race programme built for the hour when everyone else starts guessing.
              </p>
              <div className="hero__actions">
                <a className="button button--lime" href="#drivers">
                  Meet the grid
                  <ArrowRight size={17} />
                </a>
                <a className="button button--ghost" href="#machine">
                  Explore LSSD 01
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__race-strip" aria-label={`Next race: ${NEXT_RACE.name}, ${NEXT_RACE.displayDate}`}>
          <div className="hero__race-strip-label">Next race</div>
          <div className="race-strip__viewport">
            <div className="race-strip__track">
              {[0, 1].map(group => (
                <div className="race-strip__group" key={group} aria-hidden={group === 1}>
                  <span>6H Spa Virtual</span>
                  <span className="race-strip__slash">/</span>
                  <span>12 Dec 2026</span>
                  <span className="race-strip__slash">/</span>
                  <span>18:00 UTC</span>
                  <span className="race-strip__slash">/</span>
                  <span>Round 05</span>
                  <span className="race-strip__slash">/</span>
                </div>
              ))}
            </div>
          </div>
          <span className="hero__race-strip-index">05 / 08</span>
        </div>
      </section>

      <section className="manifesto section--paper" id="team" aria-labelledby="manifesto-title">
        <div className="manifesto__track-art" aria-hidden="true">
          <svg viewBox="0 0 900 520" fill="none">
            <path
              d="M66 427C14 347 56 208 154 172C242 140 324 232 396 212C481 188 472 71 589 60C706 49 843 129 846 257C849 379 710 465 579 442C468 423 449 342 364 365C279 388 223 488 123 470C95 465 80 448 66 427Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M81 421C35 349 74 229 163 197C244 167 319 247 395 227C488 202 477 92 591 80C695 69 819 142 823 258C827 369 701 443 584 424C481 407 451 338 365 359C277 381 226 469 132 454C107 450 92 439 81 421Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="3 8"
            />
          </svg>
        </div>

        <div className="container">
          <div className="section-rail">
            <span>01</span>
            <span className="section-rail__line" aria-hidden="true" />
            <span>Manifesto</span>
            <span className="section-rail__end">LSSD / Racing code</span>
          </div>

          <div className="manifesto__grid">
            <Reveal className="manifesto__title-wrap">
              <p className="eyebrow">Independent since 2019</p>
              <h2 id="manifesto-title" className="manifesto__title">
                No respawns.
                <br />
                <span>No shortcuts.</span>
              </h2>
            </Reveal>

            <Reveal className="manifesto__copy" delay={0.12}>
              <p className="manifesto__lead">
                Sim racing is not a rehearsal. The telemetry is real, the margins are real,
                and the clock does not care how good your rig looks.
              </p>
              <p>
                LSSD was built by a race engineer and two drivers who wanted one thing:
                a team where preparation mattered more than noise. Today we run endurance
                programmes across GT3 and virtual GT, with every decision traced back to
                the same standard — make the fast lap repeatable.
              </p>
              <Link className="text-link" href="/join">
                Read the racing code
                <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="stats-strip">
            {TEAM_STATS.map((stat, index) => (
              <Reveal className="stats-strip__item" key={stat.label} delay={index * 0.06}>
                <span className="stats-strip__value">{stat.value}</span>
                <span className="stats-strip__label">{stat.label}</span>
                <span className="stats-strip__marker" aria-hidden="true" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="team-story section--ink" aria-labelledby="team-story-title">
        <div className="container">
          <div className="team-story__grid">
            <Reveal className="team-story__media">
              <div className="image-frame image-frame--team">
                <img
                  src={IMAGES.garage}
                  alt="LSSD Racing engineers and driver reviewing telemetry in the team's race operations room"
                  loading="lazy"
                />
                <span className="image-frame__tag">Race ops / 23:40 CET</span>
                <span className="image-frame__crop" aria-hidden="true" />
              </div>
              <div className="team-story__media-caption">
                <span>Rotterdam HQ</span>
                <span>51.9244° N / 4.4777° E</span>
              </div>
            </Reveal>

            <div className="team-story__content">
              <SectionHeading
                index="02"
                label="The team"
                title="Built in the gap between laps."
                description="Engineering-led, driver-sharp and deliberately independent. This is what we do when the broadcast is quiet."
                tone="dark"
              />

              <Reveal className="team-story__copy" delay={0.08}>
                <p>
                  We run a compact crew by design. Every driver understands the data model.
                  Every engineer understands the driver’s reference. That shared language is
                  what turns a good setup sheet into six hours of controlled pace.
                </p>
                <p>
                  Our base is a converted studio in Rotterdam: three rigs, one operations wall,
                  too much coffee, and a garage culture that starts with checking the basics twice.
                </p>
              </Reveal>

              <div className="principle-list">
                {TEAM_PRINCIPLES.map((principle, index) => (
                  <Reveal className="principle-row" key={principle.number} delay={index * 0.06}>
                    <span className="principle-row__number">{principle.number}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </div>
                    <span className="principle-row__slash" aria-hidden="true">//</span>
                  </Reveal>
                ))}
              </div>

              <div className="team-story__signoff">
                <span className="team-story__signature">LSSD</span>
                <span>Race operations<br />Rotterdam / NL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="machine section--lime" id="machine" aria-labelledby="machine-title">
        <div className="container">
          <SectionHeading
            index="03"
            label="The machine"
            title="LSSD 01 / GT3 Evo"
            description="A virtual homologation, developed for one job: holding a reference when the fuel load, tyre life and track state stop agreeing with each other."
            tone="lime"
          />

          <div className="machine__grid">
            <Reveal className="machine__visual">
              <div className="machine__visual-frame">
                <img
                  src={IMAGES.detail}
                  alt="Close-up of the LSSD 01 race car's carbon rear wing and team livery detail"
                  loading="lazy"
                />
                <span className="machine__visual-index">01 / Rear aero</span>
                <span className="machine__visual-coords">50.4372° N / 5.9714° E</span>
                <span className="machine__visual-stripe" aria-hidden="true" />
              </div>
              <div className="machine__visual-caption">
                <span>Endurance aero package</span>
                <span>Spec / 26.1</span>
              </div>
            </Reveal>

            <Reveal className="machine__data" delay={0.12}>
              <div className="machine__data-head">
                <div>
                  <span className="eyebrow eyebrow--dark">Chassis no.</span>
                  <span className="machine__chassis">LSSD—01</span>
                </div>
                <span className="machine__class">GT3</span>
              </div>

              <div className="spec-list">
                {MACHINE_SPECS.map(spec => (
                  <div className="spec-row" key={spec.label}>
                    <span>{spec.label}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="machine__notes">
                <span className="eyebrow eyebrow--dark">Build notes</span>
                <ul>
                  {MACHINE_NOTES.map(note => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>

              <a className="button button--dark" href="#drivers">
                Meet the drivers
                <ArrowRight size={17} />
              </a>
            </Reveal>
          </div>

          <div className="telemetry-strip" aria-label="Illustrative telemetry trace">
            <div className="telemetry-strip__labels">
              <span>Sector trace</span>
              <span>Lap 42 / reference</span>
              <span>0.312 s gain</span>
            </div>
            <svg viewBox="0 0 1200 110" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 92H1200" stroke="currentColor" strokeOpacity="0.2" />
              <path d="M0 56H1200" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="3 8" />
              <path
                d="M0 79C45 78 64 69 98 71C135 73 152 91 194 89C239 87 247 46 292 48C333 50 346 81 390 78C430 75 446 33 489 31C530 29 546 66 589 66C633 66 648 42 695 43C742 44 751 74 798 73C839 72 858 48 901 46C944 44 962 64 1004 60C1046 56 1061 27 1102 29C1143 31 1165 45 1200 38"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="1102" cy="29" r="5" fill="#D6A338" />
            </svg>
          </div>
        </div>
      </section>

      <section className="drivers section--ink" id="drivers" aria-labelledby="drivers-title">
        <div className="container">
          <div className="drivers__header">
            <SectionHeading
              index="04"
              label="The grid"
              title="Four drivers. One standard."
              description="Different reference points, same appetite for the long game. Open a dossier to see how each one works."
              tone="dark"
            />
            <Link className="button button--outline drivers__cta" href="/join">
              Open seat applications
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="driver-grid">
            {DRIVERS.map((driver, index) => (
              <Reveal className="driver-grid__item" key={driver.slug} delay={index * 0.07}>
                <Link
                  className="driver-card"
                  href={`/drivers/${driver.slug}`}
                  style={{ "--driver-accent": driver.accent } as CSSProperties}
                  aria-label={`View ${driver.name}'s driver profile`}
                >
                  <div className="driver-card__top">
                    <span className="driver-card__role">{driver.role}</span>
                    <span className="driver-card__country">{driver.countryCode} / {driver.number}</span>
                  </div>
                  <span className="driver-card__ghost-number" aria-hidden="true">{driver.number}</span>
                  <div className="driver-card__helmet">
                    <Helmet accent={driver.accent} number={driver.number} />
                  </div>
                  <div className="driver-card__name-wrap">
                    <span className="driver-card__index">0{index + 1}</span>
                    <h3>{driver.name}</h3>
                  </div>
                  <div className="driver-card__meta">
                    <span>Since {driver.since}</span>
                    <span>{driver.disciplines[0]}</span>
                  </div>
                  <div className="driver-card__stats">
                    <span><b>{driver.stats.starts}</b> Starts</span>
                    <span><b>{driver.stats.wins}</b> Wins</span>
                    <span><b>{driver.stats.podiums}</b> Pods</span>
                  </div>
                  <div className="driver-card__footer">
                    <span>Open dossier</span>
                    <ArrowUpRight size={18} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="calendar section--paper" id="calendar" aria-labelledby="calendar-title">
        <div className="container">
          <div className="calendar__header">
            <SectionHeading
              index="05"
              label="The calendar"
              title="The clock is already running."
              description="2026 is not finished. Next stop: six hours around Spa, where the weather forecast is less a forecast and more a warning."
              tone="light"
            />

            <div className="segmented-tabs" role="tablist" aria-label="Calendar and results">
              <button
                className={calendarView === "upcoming" ? "is-active" : ""}
                type="button"
                role="tab"
                id="tab-upcoming"
                aria-selected={calendarView === "upcoming"}
                aria-controls="calendar-panel"
                onClick={() => setCalendarView("upcoming")}
              >
                Upcoming
              </button>
              <button
                className={calendarView === "results" ? "is-active" : ""}
                type="button"
                role="tab"
                id="tab-results"
                aria-selected={calendarView === "results"}
                aria-controls="calendar-panel"
                onClick={() => setCalendarView("results")}
              >
                2026 results
              </button>
            </div>
          </div>

          <div className="calendar__feature">
            <Reveal className="race-poster">
              <div className="race-poster__top">
                <span className="race-poster__eyebrow">Next race / Round 05</span>
                <span className="race-poster__series">GESS</span>
              </div>
              <div className="race-poster__date">
                <span className="race-poster__day">{NEXT_RACE.day}</span>
                <span className="race-poster__month">{NEXT_RACE.month}<br />{NEXT_RACE.year}</span>
              </div>
              <h3 id="calendar-title">{NEXT_RACE.name}</h3>
              <p className="race-poster__circuit">{NEXT_RACE.circuit}<br /><span>{NEXT_RACE.location}</span></p>
              <div className="race-poster__countdown">
                <span className="race-poster__countdown-label">Lights out in</span>
                <Countdown date={NEXT_RACE.date} />
              </div>
              <div className="race-poster__actions">
                <button className="button button--lime button--compact" type="button" onClick={downloadNextRace}>
                  <CalendarPlus size={16} />
                  Add to calendar
                </button>
                <span>18:00 UTC</span>
              </div>
              <span className="race-poster__slash" aria-hidden="true">//</span>
            </Reveal>

            <div
              className="calendar__panel"
              id="calendar-panel"
              role="tabpanel"
              aria-labelledby={calendarView === "upcoming" ? "tab-upcoming" : "tab-results"}
            >
              {calendarView === "upcoming" ? (
                <div className="race-list">
                  {RACE_CALENDAR.map((race, index) => (
                    <div className={`race-row ${index === 0 ? "race-row--next" : ""}`} key={race.id}>
                      <div className="race-row__date">
                        <span>{race.day}</span>
                        <small>{race.month}<br />{race.year}</small>
                      </div>
                      <div className="race-row__event">
                        <span className="race-row__round">{race.round} / {race.series}</span>
                        <h3>{race.name}</h3>
                        <p>{race.circuit} <span>· {race.location}</span></p>
                      </div>
                      <div className="race-row__duration">
                        <span>{race.duration}</span>
                        <small>{index === 0 ? "Next up" : "Scheduled"}</small>
                      </div>
                      <span className="race-row__arrow" aria-hidden="true">
                        <MoveUpRight size={20} />
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="results-view">
                  <div className="results-summary">
                    <div>
                      <span>Championship</span>
                      <strong>P2</strong>
                    </div>
                    <div>
                      <span>Points</span>
                      <strong>108</strong>
                    </div>
                    <div>
                      <span>Season wins</span>
                      <strong>03</strong>
                    </div>
                    <div>
                      <span>Podiums</span>
                      <strong>04</strong>
                    </div>
                  </div>

                  <div className="results-table" role="table" aria-label="LSSD Racing 2026 season results">
                    <div className="results-table__head" role="row">
                      <span role="columnheader">Pos</span>
                      <span role="columnheader">Event</span>
                      <span role="columnheader">Drivers</span>
                      <span role="columnheader">Best lap</span>
                      <span role="columnheader">Pts</span>
                    </div>
                    {SEASON_RESULTS.map(result => (
                      <div className="result-row" role="row" key={result.id}>
                        <span className={`result-row__position ${result.position === 1 ? "is-win" : ""}`} role="cell">
                          {result.positionLabel}
                        </span>
                        <span className="result-row__event" role="cell">
                          <b>{result.event}</b>
                          <small>{result.date} / {result.series} {result.round}</small>
                        </span>
                        <span className="result-row__drivers" role="cell">
                          {result.drivers.map(slug => getDriver(slug)?.name.split(" ")[0]).join(" / ")}
                        </span>
                        <span className="result-row__lap" role="cell">{result.bestLap}</span>
                        <span className="result-row__points" role="cell">{result.points}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="partners section--ink" id="partners" aria-labelledby="partners-title">
        <div className="container">
          <SectionHeading
            index="06"
            label="The partners"
            title="Powered by the details."
            description="The brands that keep the data moving, the rigs alive and the team arriving on time. No logos for the sake of it."
            tone="dark"
          />

          <div className="partner-marquee" aria-label="LSSD Racing partners">
            <div className="partner-marquee__track">
              {[0, 1].map(group => (
                <div className="partner-marquee__group" key={group} aria-hidden={group === 1}>
                  {SPONSORS.map(sponsor => (
                    <div className="sponsor" key={`${group}-${sponsor.name}`}>
                      <span className={`sponsor__word sponsor__word--${sponsor.style}`}>{sponsor.name}</span>
                      <span className="sponsor__category">{sponsor.category}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="partners__footer">
            <p>Interested in putting your name on a car that never lifts early?</p>
            <a className="text-link" href="mailto:race@lssdracing.gg?subject=LSSD%20partnership%20enquiry">
              Start a partnership conversation
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="join-cta" aria-labelledby="join-cta-title">
        <div className="join-cta__grid-art" aria-hidden="true" />
        <div className="container">
          <div className="join-cta__meta">
            <span>07 / Next intake</span>
            <span>2027 programme</span>
          </div>

          <div className="join-cta__body">
            <Reveal>
              <p className="eyebrow eyebrow--dark">Applications are open</p>
              <h2 id="join-cta-title">Your seat<br />is waiting.</h2>
            </Reveal>

            <Reveal className="join-cta__copy" delay={0.1}>
              <p>
                We are looking for drivers who can explain their lap, engineers who can
                challenge the model, and operators who make the broadcast feel like a race.
                Bring the work. We will bring the grid.
              </p>
              <div className="join-cta__actions">
                <Link className="button button--dark" href="/join">
                  Apply to race
                  <ArrowRight size={17} />
                </Link>
                <a className="text-link text-link--dark" href="mailto:race@lssdracing.gg">
                  Talk to the team
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="join-cta__roles">
            {OPEN_ROLES.map(role => (
              <div className="join-role" key={role.title}>
                <span>{role.type}</span>
                <strong>{role.title}</strong>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
