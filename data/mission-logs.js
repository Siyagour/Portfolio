/**
 * Mission Logs / Hackathons (Source of Truth)
 * Compact mission-log entries formatted for technical and recruiter clarity.
 * 
 * Strict Guidelines:
 * - Only verified hackathon results and roles are included.
 * - SIH 2026 explicitly stated as internal college round (no national final claim).
 * - CodeFiesta 5.0 national standing accurately noted (7th among 225 teams from 14 Indian states).
 * - No unverified dates, awards, rankings or links.
 */
export const missionLogsData = [
  {
    id: "LOG-01",
    entryNumber: "01",
    eventName: "Smart India Hackathon 2026",
    stage: "Internal College Round",
    project: "SatQuery AI",
    team: "OrByte",
    teamSize: 6,
    problemStatement: "SIH26167",
    domain: "Space Technology",
    role: "Team Lead, UI/UX & Frontend Contributor, AI/ML Contributor",
    outcome: "6th among 54 teams in the internal college round",
    outcomeBadge: "Ranked 6th / 54 (Internal College Round)",
    projectStatus: "Working Prototype",
    contributions: [
      "Led a team of six and delegated work based on strengths and interests.",
      "Set deadlines and tracked progress.",
      "Planned the frontend wireframe and user flow.",
      "Contributed to React and React Bits frontend development.",
      "Fine-tuned the optical-SAR fusion model using QLoRA.",
      "Monitored accuracy, loss and IoU metrics.",
      "Contributed to research."
    ],
    demoUrl: "https://youtu.be/WOD6ICq3jQ0?si=T1TsMBnIp3BB_E09",
    demoLabel: "Watch Demo Video"
  },
  {
    id: "LOG-02",
    entryNumber: "02",
    eventName: "CodeFiesta 5.0",
    stage: "National Hackathon",
    organizer: "GIT Jaipur",
    project: "Bachat Saathi (बचत साथी)",
    tagline: "Small Savings. Meaningful Goals.",
    team: "Node-X",
    teamSize: 4,
    problemStatement: "Micro-savings goal planner for domestic workers via missed-call interface",
    domain: "Fintech / Social Impact",
    role: "Research & UX Contributor",
    outcome: "7th among 225 teams from 14 Indian states",
    outcomeBadge: "Ranked 7th / 225 Teams (National Level)",
    projectStatus: "Functional Prototype",
    contributions: [
      "Researched user needs and accessibility barriers.",
      "Co-designed the conversational IVR journey with a teammate, with substantial personal input.",
      "Planned user flows and considered data-storage requirements.",
      "Identified edge cases and usability gaps."
    ],
    demoUrl: null,
    demoLabel: null
  }
];
