/**
 * Projects Data (Verified Source of Truth)
 * 
 * Strict Guidelines:
 * - Only verified technical facts, roles, and achievements are included.
 * - No invented features, dates, or stack components.
 * - Floodsafe is explicitly marked as "In Progress — Demo Prototype".
 * - FinWise technology stack is left unspecified (no tools inferred).
 * - Lunar Phase assignment strictly follows astronomical order:
 *   1. New Moon        -> FinWise
 *   2. Waxing Crescent  -> SatQuery AI
 *   3. First Quarter    -> Bachat Saathi
 *   4. Waxing Gibbous   -> Floodsafe [In Progress]
 */
export const projectsData = [
  {
    id: "finwise",
    phaseOrder: 1,
    phaseCode: "PHASE 01 · NEW MOON",
    phaseName: "New Moon",
    title: "FinWise",
    category: "Fintech / Personal Finance",
    status: "Working Prototype",
    isInProgress: false,
    tagline:
      "An AI-powered financial advisor and expense manager designed to help users understand spending and manage shared expenses.",
    summary:
      "Explored expense tracking with payment-related information, shared expense reminders, and personalized financial guidance. Sensitive financial data handling concerns were raised during product planning.",
    roles: [
      "Research",
      "UI/UX and Frontend Contributor"
    ],
    highlights: [
      "Contributed research and product ideas based on practical financial-management scenarios.",
      "Worked on frontend development, user flows, and interface design.",
      "Suggested feature workflows for shared expense tracking and balance reminders.",
      "Raised key considerations regarding user data privacy and sensitive financial information handling."
    ],
    // Technology stack left unspecified per verified brief. Do not infer tools.
    stack: [],
    achievement: null,
    links: []
  },
  {
    id: "satquery-ai",
    phaseOrder: 2,
    phaseCode: "PHASE 02 · WAXING CRESCENT",
    phaseName: "Waxing Crescent",
    title: "SatQuery AI",
    category: "Space Technology / AI & Remote Sensing",
    status: "Working Prototype",
    isInProgress: false,
    tagline:
      "An Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis through Text Queries.",
    summary:
      "An agentic remote-sensing assistant that interprets natural-language queries, selects specialist AI models for different image-analysis tasks, and returns evidence-grounded answers with visual results and an auditable execution trace.",
    team: "Team OrByte (6 members)",
    roles: [
      "Team Lead",
      "UI/UX & Frontend Contributor",
      "AI/ML Contributor"
    ],
    highlights: [
      "Led a team of six, delegating tasks based on teammates' strengths, setting milestones, and reviewing progress.",
      "Planned the frontend wireframe, user interaction flow, and contributed to frontend development using React and React Bits.",
      "Fine-tuned the optical-SAR fusion model using QLoRA for multimodal satellite imagery analysis.",
      "Monitored accuracy, loss, and IoU metrics to evaluate training iterations and model performance.",
      "Contributed to research on specialist vision-language models for remote sensing."
    ],
    stack: [
      "React",
      "React Bits",
      "FastAPI",
      "Qwen-VL",
      "Siamese U-Net",
      "ResNet-18",
      "QLoRA",
      "Rasterio",
      "GDAL",
      "OpenCV"
    ],
    datasets: "Sentinel-1, Sentinel-2, Copernicus, RSVQA, LEVIR-CD, SEN12MS",
    achievement:
      "Ranked 6th among 54 teams in the Smart India Hackathon 2026 internal college round.",
    links: [
      {
        label: "Watch Demo Video",
        url: "https://youtu.be/WOD6ICq3jQ0?si=T1TsMBnIp3BB_E09",
        type: "video"
      },
      {
        label: "Project Reference Drive",
        url: "https://share.google/xAq2JLCR8QMqCm7NX",
        type: "external"
      }
    ]
  },
  {
    id: "bachat-saathi",
    phaseOrder: 3,
    phaseCode: "PHASE 03 · FIRST QUARTER",
    phaseName: "First Quarter",
    title: "Bachat Saathi (बचत साथी)",
    taglineSubtitle: "Small Savings. Meaningful Goals.",
    category: "AI / Fintech / Social Impact",
    status: "Functional Prototype",
    isInProgress: false,
    tagline:
      "An AI-powered voice savings companion designed for domestic workers, accessible through a missed-call and outbound IVR experience without requiring mobile data or app installation.",
    summary:
      "Enables conversational financial guidance and habit-building via phone calls, featuring automated voice journeys, progress tracking, and human referral at vulnerable decision points.",
    team: "Team Node-X",
    roles: [
      "Research & UX Contributor"
    ],
    highlights: [
      "Researched user needs, accessibility barriers, and non-digital workflows for domestic workers.",
      "Co-designed the conversational IVR journey with substantial personal input into the user experience.",
      "Planned user flows, interaction logic, and system data requirements for voice tracking.",
      "Identified critical edge cases, vulnerability checkpoints, and human-handoff usability gaps."
    ],
    stack: [
      "Python",
      "FastAPI",
      "Gemini API",
      "Exotel",
      "SQLite"
    ],
    achievement:
      "Ranked 7th among 225 teams from 14 Indian states at CodeFiesta 5.0 (National-level hackathon by GIT Jaipur).",
    links: []
  },
  {
    id: "floodsafe",
    phaseOrder: 4,
    phaseCode: "PHASE 04 · WAXING GIBBOUS",
    phaseName: "Waxing Gibbous",
    title: "Floodsafe",
    category: "GIS / Disaster Management",
    status: "In Progress — Demo Prototype",
    isInProgress: true,
    inProgressBadge: "In Progress · Demo Prototype",
    tagline:
      "A GIS-based disaster-management concept exploring spatial analysis to support planning and decision-making.",
    summary:
      "A student project created with one partner, currently at the demo-prototype stage to explain the idea to a professor. Explores spatial analysis to support planning and decision-making.",
    team: "Student Project (Collaborating with 1 partner)",
    roles: [
      "Project Contributor"
    ],
    highlights: [
      "Collaborated as a student contributor with one partner to explore GIS-based disaster management concepts.",
      "Contributed to planning and evaluating the spatial analysis workflow for academic review.",
      "Prototype capabilities: location search, drawing polygons and rectangles, H3 grid visualization, population estimation using density data, and CSV export."
    ],
    stack: [
      "Python",
      "Streamlit",
      "Folium",
      "H3",
      "Shapely",
      "Pandas",
      "GeoPy / OSM"
    ],
    achievement:
      "Active Academic Demo Prototype (Created to explain the concept and spatial analysis workflow).",
    links: [
      {
        label: "Interactive Prototype",
        url: "https://map-simulation-three.vercel.app/",
        type: "prototype"
      },
      {
        label: "Documentation",
        url: "https://floodsafe-overview.vercel.app/",
        type: "documentation"
      }
    ]
  }
];
