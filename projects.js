// Project content. Edit text here; add photos/videos to the lists below.
// photos: { src: full-size image, thumb: smaller image shown in the grid (optional), caption, fit: "contain" (optional) }
// videos: { src: mp4 file, poster: preview image (optional), caption }
window.PROJECTS = [
  {
    id: "orbital-radiator",
    title: "Orbital Radiator",
    subtitle: "Lightweight microchannel thermal management for orbital AI data centers",
    tags: ["Thermal", "Space Systems"],
    dates: "May 2026 – Present",
    summary: "Designed, simulated, and fabricated a lightweight polymer microchannel radiator for rejecting heat from orbital AI data centers.",
    cover: "images/bargatin-poster.jpg",
    coverFit: "contain",
    coverAlt: "Research poster: Lightweight Microchannel Thermal Management for Orbital AI Data Centers",
    role: "Orbital AI Data Center Researcher",
    org: "Bargatin Group, Penn Mechanical Engineering & Applied Mechanics",
    timeline: "May 2026 – Present",
    synopsis: [
      "Orbital data centers can generate their own power from solar cells, but in the vacuum of space the only way to reject heat is radiation. That makes cooling the central design problem, and it forces a redesign of conventional cooling networks around mass.",
      "This project develops a lightweight radiator built from an array of plastic pipes connected to an inlet and an outlet manifold (larger pipes that carry coolant to and from the radiator). The work optimizes pipe geometry, material properties, and fabrication processes to minimize weight, and therefore deployment cost, while keeping heat rejection high.",
      "Simulations in COMSOL Multiphysics identified near-optimal geometries, and a custom thermal-welding process turned the design into physical prototypes that were leak-tested for integrity and repeatability. The results were presented as a poster at the Penn Summer Research Expo."
    ],
    roles: [
      "Designed and fabricated lightweight graphite-infused polymer microchannel networks and manifolds for ultra-lightweight liquid-cooling and thermal mitigation systems in orbital AI data centers.",
      "Modeled conjugate heat transfer and fluid flow through microchannel radiator networks in COMSOL Multiphysics, evaluating pressure drop, flow distribution, and coolant temperature reduction to optimize radiator geometry.",
      "Developed a thermal welding tube-closure method that collapses punctured tubing sections, maintaining radiator function in low Earth orbit after a meteoroid or space-debris breach.",
      "Designed and conducted prototype fabrication and leak-testing experiments to evaluate tube integrity, manifold performance, and repeatability across manufacturing parameters.",
      "Synthesized fabrication methods, simulation results, and experimental findings into a technical poster presented to faculty, researchers, and students at the Penn Summer Research Expo."
    ],
    tools: ["COMSOL Multiphysics", "Python", "Heat transfer", "Thermal radiation", "Thermal welding", "Prototype testing"],
    factsNote: "Simulation and fabrication results from the Summer Research Expo poster.",
    facts: [
      { value: "370 K", label: "Coolant inlet temperature" },
      { value: "5.57 g · 3.67 W", label: "Optimal elliptical pipe" },
      { value: "1.96 g · 1.26 W", label: "Optimal circular pipe" },
      { value: "≈ 71 W/m·K", label: "Optimal thermal conductivity" },
      { value: "400 °C", label: "Welding temperature" }
    ],
    photos: [
      { src: "images/bargatin-poster.jpg", caption: "Summer Research Expo poster (placeholder; more photos coming)" }
    ],
    videos: [],
    links: [{ label: "Download poster (PDF)", href: "docs/bargatin-poster.pdf" }]
  },
  {
    id: "l3-rocket",
    title: "L3 Rocket",
    subtitle: "Recovery, ejection, and internal systems for an M-class rocket",
    tags: ["Aerospace", "Recovery"],
    dates: "Sep 2025 – Present",
    summary: "Leading recovery, ejection, and internal systems for an M-class rocket built for the International Rocket Engineering Competition (IREC).",
    cover: null,
    role: "Recovery, Ejection & Internal Systems Team Lead",
    org: "Penn High Power Rocketry",
    timeline: "September 2025 – Present",
    synopsis: [
      "Penn High Power Rocketry's L3 rocket is an M-class vehicle built to compete in the International Rocket Engineering Competition (IREC).",
      "I lead the Recovery, Ejection, and Internal Systems team: the subsystems that separate the airframe, deploy the parachute, and house the avionics. This season's work focused on making recovery more reliable and on fitting a new airbrake system into the airframe.",
      "At IREC 2026 in Midland, TX, I represented Penn, presented the new ejection canister design to competition judges, and led recovery system integration at the launch site."
    ],
    roles: [
      "Promoted to team lead; lead the design, integration, and testing of an M-class L3 rocket to compete in IREC.",
      "Engineered new thread-based ejection canisters that eliminate shock cord entanglement and reduce recovery failure risk within the L3 airframe during pre-flight charge packing.",
      "Redesigned a split avionics bay to integrate a new airbrake system while maintaining structural alignment and recovery-system functionality.",
      "Represented Penn at IREC 2026 in Midland, TX, presenting the ejection canister design and its implementation to competition judges.",
      "Led recovery system integration at the launch site, including black powder ejection charge packing, parachute, and nose-cone bulkhead installation."
    ],
    tools: ["SolidWorks", "Recovery systems", "Avionics integration", "Team leadership"],
    facts: [],
    photos: [],
    videos: [],
    links: []
  },
  {
    id: "l1-rocket",
    title: "Level 1 Rocket",
    subtitle: "A custom H-class rocket built for Tripoli Level 1 certification",
    tags: ["Rocketry", "CAD", "Fabrication"],
    dates: "Certified Jan 2026",
    summary: "Designed, built, and launched a custom H-class rocket to earn Tripoli Level 1 high-power rocketry certification.",
    cover: "l1/centering-rings.jpg",
    coverAlt: "Laser-cut centering rings and motor mount assembly for the Level 1 rocket",
    role: "Designer & Builder",
    org: "Penn High Power Rocketry · Tripoli Rocketry Association",
    timeline: "Certified January 2026",
    synopsis: [
      "Tripoli Level 1 certification requires designing, building, flying, and recovering a high-power rocket. I designed a custom rocket for an H-class motor, simulated it in OpenRocket to check stability and predict performance, and fabricated the vehicle.",
      "Custom hardware was designed in CAD, including a motor retainer and laser-cut centering rings that locate the motor mount inside the airframe.",
      "The rocket exceeded 1,000 ft on its certification flight and was recovered under parachute. The OpenRocket simulation predicted an apogee of 1,001 ft."
    ],
    roles: [
      "Designed a custom H-class rocket and simulated its stability and flight performance in OpenRocket.",
      "Designed custom hardware in CAD, including a motor retainer and centering rings.",
      "Fabricated components using laser cutting and 3D printing.",
      "Launched and recovered the rocket to an apogee above 1,000 ft, earning Tripoli Level 1 certification."
    ],
    tools: ["OpenRocket", "CAD", "Laser cutting", "3D printing", "Flight test"],
    factsNote: "Values from the OpenRocket simulation.",
    facts: [
      { value: "H128W-1", label: "Motor" },
      { value: "43.625 in × 3.25 in", label: "Length × max diameter" },
      { value: "69.3 oz", label: "Mass with motors" },
      { value: "1.28 cal", label: "Stability" },
      { value: "1001 ft", label: "Simulated apogee" },
      { value: "259 ft/s (Mach 0.232)", label: "Max velocity" },
      { value: "289 ft/s²", label: "Max acceleration" }
    ],
    photos: [
      { src: "l1/openrocket-schematic.jpg", thumb: "l1/g-openrocket-schematic.jpg", caption: "OpenRocket Schematic", fit: "contain" },
      { src: "l1/motor-retainer.jpg", thumb: "l1/g-motor-retainer.jpg", caption: "Custom Motor Retainer", pos: "50% 45%" },
      { src: "l1/centering-rings.jpg", thumb: "l1/g-centering-rings.jpg", caption: "Centering Rings" },
      { src: "l1/launch-pad.jpg", thumb: "l1/g-launch-pad.jpg", caption: "Rocket on Launch Pad", pos: "50% 60%" },
      { src: "l1/post-launch.jpg", thumb: "l1/g-post-launch.jpg", caption: "Post-Launch Recovery and Separation", pos: "50% 55%" }
    ],
    videos: [
      { src: "l1/launch-video.mp4", poster: "l1/launch-video-poster.jpg", caption: "Launch Video" }
    ],
    links: []
  },
  {
    id: "hydrogen-turbofan",
    title: "Hydrogen Turbofan",
    subtitle: "Penn's first undergraduate hydrogen turbofan engine",
    tags: ["Propulsion", "CFD / FEA"],
    dates: "Sep 2026 – Present",
    summary: "Contributing to the design, analysis, and fabrication of Penn Jet Propulsion's first undergraduate hydrogen turbofan.",
    cover: null,
    role: "Hydrogen Turbofan Engineer, Engine Development Team",
    org: "Penn Jet Propulsion",
    timeline: "September 2026 – Present",
    synopsis: [
      "Penn Jet Propulsion's Engine Development Team is building the first hydrogen turbofan developed by Penn undergraduates.",
      "I joined the team in September 2026 and contribute across the development loop: propulsion-system design and analysis using CAD, CFD, and FEA, component integration, and fabrication, as the team prepares for hot-fire testing."
    ],
    roles: [
      "Joined the Engine Development Team developing the first Penn undergraduate hydrogen turbofan, contributing to propulsion-system design, analysis, fabrication, and testing.",
      "Support the development of turbofan hardware through CAD, CFD/FEA, component integration, and preparation for hot-fire testing."
    ],
    tools: ["CAD", "CFD", "FEA", "Propulsion", "Component integration"],
    facts: [],
    photos: [],
    videos: [],
    links: []
  }
];
