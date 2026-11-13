import Helmet from "@/components/site/Helmet";
import Reveal from "@/components/site/Reveal";
import ResilientImage from "@/components/site/ResilientImage";
import { DRIVERS, IMAGES, NEXT_RACE, getDriver, getDriverResults } from "@/data/team";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { type CSSProperties } from "react";
import { Link, useParams } from "wouter";
import NotFound from "./NotFound";

export default function DriverProfile() {
  const params = useParams<{ slug: string }>();
  const driver = getDriver(params.slug ?? "");
  const results = driver ? getDriverResults(driver.slug) : [];
  const driverIndex = driver ? DRIVERS.findIndex(item => item.slug === driver.slug) : -1;
  const nextDriver = driverIndex >= 0 ? DRIVERS[(driverIndex + 1) % DRIVERS.length] : DRIVERS[0];

  usePageMeta(
    driver ? `${driver.name} — #${driver.number}` : "Driver not found",
    driver
      ? `Driver dossier for ${driver.name}, ${driver.role} at LSSD Racing. Career stats, racing philosophy and 2026 season results.`
      : "The requested LSSD Racing driver dossier is unavailable.",
  );

  if (!driver) {
    return <NotFound />;
  }

  const [firstName, ...lastNameParts] = driver.name.split(" ");
  const lastName = lastNameParts.join(" ");
  const statItems = [
    { label: "Starts", value: driver.stats.starts },
    { label: "Wins", value: driver.stats.wins },
    { label: "Podiums", value: driver.stats.podiums },
    { label: "Poles", value: driver.stats.poles },
    { label: "Fast laps", value: driver.stats.fastestLaps },
  ];

  return (
    <div className="driver-profile-page" style={{ "--driver-accent": driver.accent } as CSSProperties}>
      <section className="profile-hero" aria-labelledby="driver-name">
        <div className="profile-hero__image" aria-hidden="true">
          <ResilientImage src={IMAGES.rig} alt="" />
        </div>
        <div className="profile-hero__wash" aria-hidden="true" />
        <div className="container profile-hero__inner">
          <div className="profile-hero__topline">
            <Link className="back-link" href="/#drivers">
              <ArrowLeft size={15} />
              All drivers
            </Link>
            <span>Driver dossier / 0{driverIndex + 1}</span>
            <span>LSSD Racing / 2026</span>
          </div>

          <div className="profile-hero__grid">
            <div className="profile-hero__identity">
              <p className="eyebrow">{driver.role} / #{driver.number}</p>
              <h1 id="driver-name">
                <span>{firstName}</span>
                <span>{lastName}</span>
              </h1>
              <div className="profile-hero__subline">
                <span>{driver.countryCode} · {driver.country}</span>
                <span>Since {driver.since}</span>
                <span>{driver.disciplines.join(" / ")}</span>
              </div>
            </div>

            <div className="profile-hero__visual">
              <span className="profile-hero__ghost-number" aria-hidden="true">{driver.number}</span>
              <Helmet className="profile-hero__helmet" accent={driver.accent} number={driver.number} />
              <div className="profile-hero__helmet-plate">
                <span>Race lid / spec 26</span>
                <span>{driver.countryCode} — {driver.number}</span>
              </div>
            </div>
          </div>

          <div className="profile-stats" aria-label="Career statistics">
            {statItems.map((stat, index) => (
              <div className="profile-stat" key={stat.label}>
                <span className="profile-stat__index">0{index + 1}</span>
                <span className="profile-stat__value">{String(stat.value).padStart(2, "0")}</span>
                <span className="profile-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-story section--paper" aria-labelledby="driver-story-title">
        <div className="container">
          <div className="profile-story__grid">
            <aside className="profile-story__rail">
              <span>01 / Profile</span>
              <span className="profile-story__rail-line" aria-hidden="true" />
              <span>{driver.name}<br />#{driver.number}</span>
            </aside>

            <div className="profile-story__main">
              <Reveal>
                <p className="eyebrow eyebrow--dark">Driver statement</p>
                <blockquote className="profile-quote">“{driver.quote}”</blockquote>
              </Reveal>

              <div className="profile-story__bio">
                {driver.bio.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={index * 0.08}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal className="profile-facts">
                <div className="profile-fact">
                  <span>Born</span>
                  <strong>{driver.born}</strong>
                </div>
                <div className="profile-fact">
                  <span>Favourite track</span>
                  <strong>{driver.favouriteTrack}</strong>
                </div>
                <div className="profile-fact">
                  <span>Programmes</span>
                  <strong>{driver.disciplines.join(" / ")}</strong>
                </div>
                <div className="profile-fact">
                  <span>Race number</span>
                  <strong>#{driver.number}</strong>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-results section--ink" aria-labelledby="driver-results-title">
        <div className="container">
          <div className="profile-results__header">
            <div>
              <p className="eyebrow">02 / Season record</p>
              <h2 id="driver-results-title">2026 race log.</h2>
            </div>
            <div className="profile-results__summary">
              <span>{results.length} rounds</span>
              <span>{results.filter(result => result.position === 1).length} wins</span>
              <span>{results.reduce((total, result) => total + result.points, 0)} pts</span>
            </div>
          </div>

          {results.length > 0 ? (
            <div className="profile-result-list">
              <div className="profile-result-list__head">
                <span>Pos</span>
                <span>Event</span>
                <span>Car</span>
                <span>Best lap</span>
                <span>Pts</span>
              </div>
              {results.map(result => (
                <div className="profile-result" key={result.id}>
                  <span className={`profile-result__position ${result.position === 1 ? "is-win" : ""}`}>{result.positionLabel}</span>
                  <span className="profile-result__event">
                    <b>{result.event}</b>
                    <small>{result.date} / {result.series} {result.round}</small>
                  </span>
                  <span>{result.car}</span>
                  <span className="mono-value">{result.bestLap}</span>
                  <span>{result.points}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="profile-results__empty">No completed rounds logged for this driver yet. The next one is coming.</p>
          )}

          <div className="profile-next-race">
            <div>
              <span className="eyebrow">Next event / {NEXT_RACE.round}</span>
              <strong>{NEXT_RACE.name}</strong>
              <span>{NEXT_RACE.circuit} · {NEXT_RACE.displayDate}</span>
            </div>
            <Link className="button button--outline" href="/#calendar">
              View the calendar
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="profile-next-driver" aria-label="Next driver dossier">
        <Link href={`/drivers/${nextDriver.slug}`} className="profile-next-driver__link">
          <div className="container">
            <span className="profile-next-driver__label">Next dossier</span>
            <div className="profile-next-driver__name">
              <span>{nextDriver.name}</span>
              <ArrowRight size={42} strokeWidth={1.1} />
            </div>
            <span className="profile-next-driver__meta">#{nextDriver.number} / {nextDriver.role} / {nextDriver.countryCode}</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
