export type Driver = {
  slug: string;
  name: string;
  number: string;
  country: string;
  countryCode: string;
  role: string;
  accent: string;
  born: string;
  since: string;
  disciplines: string[];
  quote: string;
  bio: string[];
  favouriteTrack: string;
  stats: {
    starts: number;
    wins: number;
    podiums: number;
    poles: number;
    fastestLaps: number;
  };
};

export type Race = {
  id: string;
  date: string;
  displayDate: string;
  month: string;
  day: string;
  year: string;
  name: string;
  circuit: string;
  location: string;
  series: string;
  duration: string;
  round: string;
  status: "upcoming" | "completed";
};

export type SeasonResult = {
  id: string;
  date: string;
  event: string;
  circuit: string;
  series: string;
  round: string;
  position: number;
  positionLabel: string;
  drivers: string[];
  car: string;
  bestLap: string;
  points: number;
};

export type Sponsor = {
  name: string;
  category: string;
  style: "condensed" | "serif" | "mono" | "wide";
};

export const IMAGES = {
  hero: "/manus-storage/async-images/8HRPVSKRIaWIs9z59AsFXF/image-1.webp",
  garage: "/manus-storage/async-images/8HRPVSKRIaWIs9z59AsFXF/image-2.webp",
  detail: "/manus-storage/async-images/8HRPVSKRIaWIs9z59AsFXF/image-3.webp",
  rig: "/manus-storage/async-images/8HRPVSKRIaWIs9z59AsFXF/image-4.webp",
} as const;

export const TEAM_STATS = [
  { value: "38", label: "Team wins" },
  { value: "02", label: "Endurance titles" },
  { value: "07", label: "Seasons racing" },
  { value: "02", label: "Factory drivers" },
];

export const RACING_DISCIPLINES = [
  {
    number: "01",
    name: "GT Endurance",
    detail: "Long-form GT racing built around pace, tyre life and the full distance.",
  },
  {
    number: "02",
    name: "Stock Car",
    detail: "Close-quarters racing where traffic management and repeatable launches matter.",
  },
  {
    number: "03",
    name: "Rally",
    detail: "Stage-by-stage precision across changing surfaces, weather and commitment points.",
  },
];

export const DRIVERS: Driver[] = [
  {
    slug: "elias-voss",
    name: "Elias Voss",
    number: "17",
    country: "Germany",
    countryCode: "DE",
    role: "Endurance lead",
    accent: "#D6A338",
    born: "1997 · Cologne",
    since: "2019",
    disciplines: ["GT Endurance", "Rally"],
    quote: "The lap starts long before the lights go out.",
    bio: [
      "Elias joined LSSD as one of the team’s founding drivers after a decade in open-wheel sim racing. His strength is not one spectacular lap; it is the ability to hold a reference for six hours while the track, the traffic and the weather all move underneath him.",
      "Off the rig, he works with the engineering group on damper models and race strategy. He is the driver most likely to ask for a setup change at 02:00 — and the one most likely to be right.",
    ],
    favouriteTrack: "Nürburgring Nordschleife",
    stats: { starts: 184, wins: 31, podiums: 74, poles: 18, fastestLaps: 22 },
  },
  {
    slug: "mina-sato",
    name: "Mina Sato",
    number: "24",
    country: "Japan",
    countryCode: "JP",
    role: "GT sprint specialist",
    accent: "#C91525",
    born: "2001 · Yokohama",
    since: "2022",
    disciplines: ["Stock Car", "GT Endurance"],
    quote: "Precision is just speed with nowhere to hide.",
    bio: [
      "Mina arrived at LSSD through the team’s development programme and became a full race driver within a season. Her qualifying pace is the benchmark in the garage: clean, repeatable and fearless on the first flying lap.",
      "She brings a sprint-racing sharpness to the endurance lineup, particularly in traffic and on cold tyres. Away from the track she mentors the LSSD junior roster and leads the team’s women-in-sim initiative.",
    ],
    favouriteTrack: "Suzuka International Racing Course",
    stats: { starts: 96, wins: 18, podiums: 41, poles: 12, fastestLaps: 14 },
  },
];

export const NEXT_RACE: Race = {
  id: "spa-2026",
  date: "2026-12-12T18:00:00Z",
  displayDate: "12.12.2026",
  month: "DEC",
  day: "12",
  year: "2026",
  name: "6H Spa Virtual",
  circuit: "Circuit de Spa-Francorchamps",
  location: "Stavelot, Belgium",
  series: "Global Endurance Sim Series",
  duration: "6 hours",
  round: "Round 05",
  status: "upcoming",
};

export const RACE_CALENDAR: Race[] = [
  NEXT_RACE,
  {
    id: "bathurst-2027",
    date: "2027-01-16T19:00:00Z",
    displayDate: "16.01.2027",
    month: "JAN",
    day: "16",
    year: "2027",
    name: "Bathurst 6H",
    circuit: "Mount Panorama",
    location: "Bathurst, Australia",
    series: "Global Endurance Sim Series",
    duration: "6 hours",
    round: "Round 06",
    status: "upcoming",
  },
  {
    id: "sebring-2027",
    date: "2027-02-20T14:00:00Z",
    displayDate: "20.02.2027",
    month: "FEB",
    day: "20",
    year: "2027",
    name: "Sebring 8H",
    circuit: "Sebring International Raceway",
    location: "Florida, USA",
    series: "Global Endurance Sim Series",
    duration: "8 hours",
    round: "Round 07",
    status: "upcoming",
  },
  {
    id: "monza-2027",
    date: "2027-03-21T13:00:00Z",
    displayDate: "21.03.2027",
    month: "MAR",
    day: "21",
    year: "2027",
    name: "12H Monza",
    circuit: "Autodromo Nazionale Monza",
    location: "Monza, Italy",
    series: "Global Endurance Sim Series",
    duration: "12 hours",
    round: "Round 08",
    status: "upcoming",
  },
];

export const SEASON_RESULTS: SeasonResult[] = [
  {
    id: "sebring-2026",
    date: "14 MAR 2026",
    event: "Sebring 8H",
    circuit: "Sebring International Raceway",
    series: "GESS",
    round: "R01",
    position: 1,
    positionLabel: "P1",
    drivers: ["elias-voss", "mina-sato"],
    car: "#17 LSSD 01",
    bestLap: "1:51.842",
    points: 25,
  },
  {
    id: "monza-2026",
    date: "19 APR 2026",
    event: "Monza 6H",
    circuit: "Autodromo Nazionale Monza",
    series: "GESS",
    round: "R02",
    position: 3,
    positionLabel: "P3",
    drivers: ["elias-voss", "mina-sato"],
    car: "#17 LSSD 01",
    bestLap: "1:47.119",
    points: 15,
  },
  {
    id: "nurburgring-2026",
    date: "07 JUN 2026",
    event: "Nürburgring 6H",
    circuit: "Nürburgring GP",
    series: "GESS",
    round: "R03",
    position: 1,
    positionLabel: "P1",
    drivers: ["elias-voss", "mina-sato"],
    car: "#17 LSSD 01",
    bestLap: "1:54.603",
    points: 25,
  },
  {
    id: "silverstone-2026",
    date: "13 SEP 2026",
    event: "Silverstone 4H",
    circuit: "Silverstone Circuit",
    series: "VGT",
    round: "R04",
    position: 2,
    positionLabel: "P2",
    drivers: ["elias-voss", "mina-sato"],
    car: "#24 LSSD 01",
    bestLap: "1:58.204",
    points: 18,
  },
  {
    id: "barcelona-2026",
    date: "18 OCT 2026",
    event: "Barcelona 6H",
    circuit: "Circuit de Barcelona-Catalunya",
    series: "GESS",
    round: "R04",
    position: 1,
    positionLabel: "P1",
    drivers: ["elias-voss", "mina-sato"],
    car: "#17 LSSD 01",
    bestLap: "1:43.977",
    points: 25,
  },
];

export const MACHINE_SPECS = [
  { label: "Chassis", value: "LSSD 01 / Evo" },
  { label: "Class", value: "GT3" },
  { label: "Engine", value: "4.0L V8" },
  { label: "Power", value: "590 bhp" },
  { label: "Mass", value: "1,305 kg" },
  { label: "Downforce", value: "1,120 kg" },
  { label: "Top speed", value: "295 km/h" },
  { label: "Fuel cell", value: "100 L" },
];

export const MACHINE_NOTES = [
  "Low-drag endurance aero package",
  "Driver-adjustable traction control",
  "Switchable hybrid deployment map",
  "Endurance-spec brake ducts",
];

export const SPONSORS: Sponsor[] = [
  { name: "KINETIC", category: "Simulation hardware", style: "condensed" },
  { name: "TRAQ", category: "Telemetry systems", style: "mono" },
  { name: "NORTHSTAR", category: "Team logistics", style: "wide" },
  { name: "VANTA", category: "Technical racewear", style: "serif" },
  { name: "HELIX", category: "Data engineering", style: "condensed" },
  { name: "APEX LAB", category: "Performance engineering", style: "mono" },
];

export const TEAM_PRINCIPLES = [
  {
    number: "01",
    title: "Engineer the lap",
    text: "Every setup change starts with data and ends with a driver who can repeat it.",
  },
  {
    number: "02",
    title: "Race the full distance",
    text: "We build for hour six, not lap one. Consistency is the fastest compound.",
  },
  {
    number: "03",
    title: "Leave the grid better",
    text: "Rookies, rivals and the wider sim community all get the same respect.",
  },
];

export const OPEN_ROLES = [
  {
    title: "Development driver",
    type: "Driver roster",
    detail: "Reserve and test mileage across GT Endurance, Stock Car and Rally programmes.",
  },
  {
    title: "Race engineer",
    type: "Performance",
    detail: "Own strategy, telemetry and race execution for one car.",
  },
  {
    title: "Broadcast operator",
    type: "Media",
    detail: "Direct live race coverage, replays and team content.",
  },
];

export const FAQS = [
  {
    question: "Do I need to own the same hardware as the team?",
    answer:
      "No. We race on a shared software stack and evaluate applications on pace, consistency and racecraft. Tell us what you run and how you use it — expensive equipment is not a substitute for clean data.",
  },
  {
    question: "How much time does the programme require?",
    answer:
      "Race weekends are the smallest part. Expect two to three structured sessions per week during a season, plus one debrief. Development and engineering roles carry more flexible project-based hours.",
  },
  {
    question: "Can I apply if I race in another league?",
    answer:
      "Yes, provided there is no schedule conflict with LSSD championship rounds. We ask for transparency about other commitments and will always work around a reasonable calendar.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Every complete application is reviewed by the relevant team lead. Shortlisted applicants are invited to a short call and a controlled test session. We reply to everyone who submits a complete application.",
  },
];

export function getDriver(slug: string) {
  return DRIVERS.find(driver => driver.slug === slug);
}

export function getDriverResults(slug: string) {
  return SEASON_RESULTS.filter(result => result.drivers.includes(slug));
}
