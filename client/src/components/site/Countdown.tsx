import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  date: string;
  compact?: boolean;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: number): TimeLeft {
  const difference = Math.max(0, target - Date.now());
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

const UNITS: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
];

export default function Countdown({ date, compact = false }: CountdownProps) {
  const target = useMemo(() => new Date(date).getTime(), [date]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1_000);

    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <div className={`countdown ${compact ? "countdown--compact" : ""}`} role="timer" aria-label="Time until the next event">
      {UNITS.map(unit => (
        <div className="countdown__unit" key={unit.key}>
          <span className="countdown__value">{String(timeLeft[unit.key]).padStart(2, "0")}</span>
          <span className="countdown__label">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
