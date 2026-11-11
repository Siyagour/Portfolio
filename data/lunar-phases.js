/**
 * Astronomical 8-Phase Lunar Orbit Data Model
 * 
 * Order:
 * 1. New Moon (FinWise)
 * 2. Waxing Crescent (SatQuery AI)
 * 3. First Quarter (Bachat Saathi)
 * 4. Waxing Gibbous (Floodsafe - In Progress)
 * 5. Full Moon (Locked - Future Projects)
 * 6. Waning Gibbous (Locked - Future Projects)
 * 7. Third Quarter / Last Quarter (Locked - Future Projects)
 * 8. Waning Crescent (Locked - Future Projects)
 */
export const lunarPhases = [
  {
    order: 1,
    id: "new-moon",
    name: "New Moon",
    symbol: "🌑",
    projectId: "finwise",
    isAvailable: true,
    isInProgress: false,
    label: "FinWise",
    sublabel: "Personal Finance Experience"
  },
  {
    order: 2,
    id: "waxing-crescent",
    name: "Waxing Crescent",
    symbol: "🌒",
    projectId: "satquery-ai",
    isAvailable: true,
    isInProgress: false,
    label: "SatQuery AI",
    sublabel: "Vision-Language Remote Sensing"
  },
  {
    order: 3,
    id: "first-quarter",
    name: "First Quarter",
    symbol: "🌓",
    projectId: "bachat-saathi",
    isAvailable: true,
    isInProgress: false,
    label: "Bachat Saathi",
    sublabel: "Voice IVR Savings Companion"
  },
  {
    order: 4,
    id: "waxing-gibbous",
    name: "Waxing Gibbous",
    symbol: "🌔",
    projectId: "floodsafe",
    isAvailable: true,
    isInProgress: true,
    statusBadge: "In Progress",
    label: "Floodsafe",
    sublabel: "GIS Evacuation Simulation"
  },
  {
    order: 5,
    id: "full-moon",
    name: "Full Moon",
    symbol: "🌕",
    projectId: null,
    isAvailable: false,
    isLocked: true,
    label: "Locked Phase",
    sublabel: "FUTURE PROJECT"
  },
  {
    order: 6,
    id: "waning-gibbous",
    name: "Waning Gibbous",
    symbol: "🌖",
    projectId: null,
    isAvailable: false,
    isLocked: true,
    label: "Locked Phase",
    sublabel: "FUTURE PROJECT"
  },
  {
    order: 7,
    id: "third-quarter",
    name: "Third Quarter",
    symbol: "🌗",
    projectId: null,
    isAvailable: false,
    isLocked: true,
    label: "Locked Phase",
    sublabel: "FUTURE PROJECT"
  },
  {
    order: 8,
    id: "waning-crescent",
    name: "Waning Crescent",
    symbol: "🌘",
    projectId: null,
    isAvailable: false,
    isLocked: true,
    label: "Locked Phase",
    sublabel: "FUTURE PROJECT"
  }
];

