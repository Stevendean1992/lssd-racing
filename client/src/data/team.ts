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
  hero: "/bg-concept-v1.jpg",
  garage: "/manus-storage/async-images/8HRPVSKRIaWIs9z59AsFXF/image-2.webp",
  detail: "/manus-storage/async-images/8HRPVSKRIaWIs9z59AsFXF/image-3.webp",
  rig: "/manus-storage/async-images/8HRPVSKRIaWIs9z59AsFXF/image-4.webp",
  bmwM4Gt3: "/bmw-m4-gt3-race.jpg",
  camaroZl1: "/camaro-zl1-stock-car.jpg",
} as const;

export const TEAM_STATS = [
  { value: "00", label: "Team wins" },
  { value: "00", label: "Endurance titles" },
  { value: "00", label: "Seasons racing" },
  { value: "00", label: "Factory drivers" },
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

export const LIVE_FEED = {
  status: "Standby",
  title: "The next session is already loading.",
  description:
    "When LSSD goes live, this is where the race feed, pit wall and post-session debrief meet. The next broadcast is scheduled around the iRacing Production Car Challenge at VIR.",
  nextEvent: "THE Production Car Challenge @ViR",
  nextDate: "18–19 Dec 2026 / time TBA",
  channel: "LSSD Racing / YouTube",
  liveUrl: "https://www.youtube.com/@LSSDRacing/live",
};

export const NEWS_RELEASE = {
  label: "News release / 01",
  date: "13 Nov 2026",
  title: "LSSD Racing sets its first marker at VIR.",
  deck:
    "The U.S.-based sim racing team will take on THE Production Car Challenge @ViR, a four-hour GT Endurance event on iRacing built around the VIR Grand Course.",
  paragraphs: [
    "LSSD Racing today confirmed its next competitive target: THE Production Car Challenge @ViR, a GT Endurance event running December 18–19, 2026 on iRacing. The four-hour special event will take the team to Virginia International Raceway’s Grand Course for its first clear marker of the 2026 programme.",
    "The GT Endurance event is a natural fit for the team’s two-driver operating model. Steven Dean and Lenny Simpleton will direct all preparation toward the GT Endurance car, race strategy and long-run execution. Together, they will use the Production Car Challenge as a test of communication, consistency and decision-making over the full distance.",
    "LSSD enters the event with a clean record and no results to defend. The objective is straightforward: establish a repeatable process, learn what the race asks of the team, and carry the useful parts into the next stint, stage and restart. Start time details remain TBA; updates will be carried through the live feed and the team’s YouTube channel.",
  ],
  facts: [
    { label: "Event", value: "THE Production Car Challenge @ViR" },
    { label: "Discipline", value: "GT Endurance" },
    { label: "Platform", value: "iRacing" },
    { label: "Window", value: "18–19 Dec 2026" },
    { label: "Format", value: "4-hour special event" },
  ],
};

export const DRIVERS: Driver[] = [
  {
    slug: "steven-dean",
    name: "Steven Dean",
    number: "16",
    country: "United States",
    countryCode: "US",
    role: "Co-founder / Stock Car Specialist",
    accent: "#D6A338",
    born: "1992 · Fort Gordon, GA",
    since: "2026",
    disciplines: ["Stock Car", "GT Endurance"],
    quote: "The lap starts long before the lights go out.",
    bio: [
      "Steven co-founded LSSD with his fellow U.S. Army veteran to create a reason to stay connected after service. The team is new, the record is clean, and every session is a chance to build something repeatable together.",
      "Off the rig, he owns Stock Car preparation and the race strategy notebook. The goal is not to defend a legacy; it is to establish one from the first green flag.",
    ],
    favouriteTrack: "Nürburgring Nordschleife",
    stats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0 },
  },
  {
    slug: "lenny-simpleton",
    name: "Lenny Simpleton",
    number: "70",
    country: "United States",
    countryCode: "US",
    role: "Co-founder / Rally Specialist",
    accent: "#C91525",
    born: "1991 · Sacramento, CA",
    since: "2026",
    disciplines: ["Rally", "GT Endurance"],
    quote: "Precision is just speed with nowhere to hide.",
    bio: [
      "Lenny co-founded LSSD alongside another U.S. Army veteran as a way to stay in touch after service. He brings the same discipline to the rig that he brought to every long day in uniform: prepare carefully, communicate clearly, and leave no detail to chance.",
      "He owns Rally preparation while helping shape the team’s operating rhythm. There are no podiums to defend yet — only a standard to set together.",
    ],
    favouriteTrack: "Suzuka International Racing Course",
    stats: { starts: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0 },
  },
];

export const NEXT_RACE: Race = {
  id: "production-car-challenge-vir-2026",
  date: "2026-12-18T00:00:00-05:00",
  displayDate: "18–19.12.2026",
  month: "DEC",
  day: "18–19",
  year: "2026",
  name: "THE Production Car Challenge @ViR",
  circuit: "Virginia International Raceway / Grand Course",
  location: "Alton, Virginia, USA",
  series: "iRacing Special Event",
  duration: "4 hours",
  round: "Special Event",
  status: "upcoming",
};

export const RACE_CALENDAR: Race[] = [NEXT_RACE];

export const SEASON_RESULTS: SeasonResult[] = [];

export const MACHINES = [
  {
    id: "bmw-m4-gt3",
    discipline: "GT Endurance",
    title: "BMW M4 GT3",
    description:
      "The GT endurance foundation for LSSD: a 590 hp customer race car built to keep its reference when fuel load, tyre life and track state stop agreeing with each other.",
    image: IMAGES.bmwM4Gt3,
    imageAlt: "Close-up of the BMW M4 GT3 race car's carbon rear wing and team livery detail",
    visualIndex: "BMW M4 GT3 / Rear aero",
    visualCaption: "M4 GT3 / Endurance",
    chassis: "BMW—M4 GT3",
    classLabel: "GT3",
    specs: [
      { label: "Engine", value: "3.0L TwinPower Turbo I6" },
      { label: "Power", value: "Up to 590 hp" },
      { label: "Transmission", value: "6-speed sequential" },
      { label: "Fuel cell", value: "120 L / 31.7 gal" },
      { label: "Length", value: "5,020 mm" },
      { label: "Wheelbase", value: "2,917 mm" },
    ],
    notes: [
      "Carbon-fiber GT3 bodywork",
      "Adjustable front splitter and rear wing",
      "Driver-adjustable traction and braking systems",
      "BMW M Track Cockpit for race setup control",
    ],
  },
  {
    id: "chevrolet-camaro-zl1",
    discipline: "Stock Car",
    title: "NASCAR Chevrolet Camaro ZL1",
    description:
      "LSSD's Stock Car platform: a NASCAR Next Gen Camaro built around mechanical grip, close-quarters racecraft and the discipline to make every restart count.",
    image: IMAGES.camaroZl1,
    imageAlt: "Chevrolet Camaro ZL1 Next Gen stock car charging through a night race",
    visualIndex: "NASCAR Camaro ZL1 / Stock Car",
    visualCaption: "ZL1 / Cup car",
    chassis: "CHEVY—CAMARO ZL1",
    classLabel: "STOCK CAR",
    specs: [
      { label: "Engine", value: "5.8L naturally aspirated V8" },
      { label: "Power", value: "Track-dependent output" },
      { label: "Transmission", value: "5-speed sequential" },
      { label: "Fuel cell", value: "127 L / 32 gal" },
      { label: "Weight", value: "1,342 kg / 2,960 lb" },
      { label: "Wheelbase", value: "2,794 mm" },
    ],
    notes: [
      "Composite symmetric Camaro ZL1 body",
      "Steel-tube Next Gen chassis",
      "Full carbon undertray and rear diffuser",
      "Adjustable double-wishbone suspension",
    ],
  },
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
