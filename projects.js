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
    cover: "orbital/radiators-both.jpg",
    coverAlt: "Welded polymer microchannel radiator prototypes",
    noVideos: true,
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
      { value: "≈ 71 W/m·K", label: "Optimal thermal conductivity" },
      { value: "400 °C", label: "Welding temperature" }
    ],
    photos: [
      { src: "orbital/radiators.jpg", thumb: "orbital/g-radiators.jpg", caption: "Welded Polymer Microchannel Radiators", fit: "contain" },
      { src: "orbital/cross-section.jpg", thumb: "orbital/g-cross-section.jpg", caption: "Radiator Cross Section", fit: "contain" },
      { src: "orbital/graphite-tubing.jpg", thumb: "orbital/g-graphite-tubing.jpg", caption: "Graphite-Infused Tubing System" },
      { src: "orbital/laminar-flow.jpg", thumb: "orbital/g-laminar-flow.jpg", caption: "Laminar Flow Throughout Network", pos: "50% 58%" },
      { src: "images/bargatin-poster.jpg", thumb: "images/bargatin-poster.jpg", caption: "Summer Research Expo Poster", fit: "contain" }
    ],
    videos: [],
    links: [{ label: "Download poster (PDF)", href: "docs/bargatin-poster.pdf" }]
  },
  {
    id: "l3-rocket",
    title: "Level 3 Competition Rocket (ELGSES)",
    subtitle: "ELGSES: recovery, ejection, and internal systems for an M-class competition rocket",
    tags: ["Aerospace", "Recovery"],
    dates: "Sep 2025 – Present",
    summary: "Leading recovery, ejection, and internal systems for ELGSES, an M-class rocket built for the International Rocket Engineering Competition (IREC).",
    cover: "l3/elgses-cover.jpg",
    coverAlt: "ELGSES rocket CAD render, full length",
    role: "Recovery, Ejection & Internal Systems Team Lead",
    org: "Penn High Power Rocketry",
    timeline: "September 2025 – Present",
    synopsis: [
      "ELGSES is Penn High Power Rocketry's Level 3 rocket, an M-class vehicle built to compete in the International Rocket Engineering Competition (IREC).",
      "I lead the Recovery, Ejection, and Internal Systems team: the subsystems that separate the airframe, deploy the parachute, and house the avionics. This season's work focused on making recovery more reliable and on fitting a new airbrake system into the airframe.",
      "At IREC 2026 in Midland, TX, I represented Penn, presented the new ejection canister design to competition judges, and led recovery system integration at the launch site."
    ],
    roles: [
      "Promoted to team lead; lead the design, integration, and testing of an M-class L3 rocket to compete in IREC.",
      "Engineered new thread-based ejection canisters that eliminate shock cord entanglement and reduce recovery failure risk within the L3 airframe during pre-flight charge packing.",
      "Ground-tested the custom ejection canisters with 6 g total of packed black powder to verify charge performance before flight.",
      "Redesigned a split avionics bay to integrate a new airbrake system while maintaining structural alignment and recovery-system functionality.",
      "Represented Penn at IREC 2026 in Midland, TX, presenting the ejection canister design and its implementation to competition judges.",
      "Led recovery system integration at the launch site, including black powder ejection charge packing, parachute, and nose-cone bulkhead installation."
    ],
    tools: ["SolidWorks", "OpenRocket", "Recovery systems", "Avionics integration", "Team leadership"],
    factsNote: "Values from the OpenRocket simulation.",
    facts: [
      { value: "M2500T-P", label: "Motor" },
      { value: "151 in × 6.17 in", label: "Length × max diameter" },
      { value: "1126 oz", label: "Mass with motor" },
      { value: "2.06 cal", label: "Stability" },
      { value: "8420 ft", label: "Simulated apogee" },
      { value: "855 ft/s (Mach 0.778)", label: "Max velocity" },
      { value: "271 ft/s²", label: "Max acceleration" }
    ],
    photos: [
      { src: "l3/elgses-pad.jpg", thumb: "l3/g-elgses-pad.jpg", caption: "ELGSES vertical on the launch rail prior to flight", pos: "50% 55%" },
      { src: "l3/team.jpg", thumb: "l3/g-team.jpg", caption: "ELGSES with the Penn High Power Rocketry team" },
      { src: "l3/elgses-cad.jpg", thumb: "l3/g-elgses-cad.jpg", caption: "ELGSES CAD: exterior render (top) and sectioned assembly (bottom) showing the internal avionics, recovery, and motor sections", fit: "contain" },
      { src: "l3/openrocket-schematic.jpg", thumb: "l3/g-openrocket-schematic.jpg", caption: "OpenRocket schematic: 151 in length, 6.17 in diameter, M2500T-P motor, 8,420 ft simulated apogee", fit: "contain" },
      { src: "l3/bulkhead-iso.jpg", thumb: "l3/g-bulkhead-iso.jpg", caption: "Custom thread-based ejection charge bulkhead (isometric CAD): two canister bosses of different heights on a mounting plate within the bulkhead ring", fit: "contain" },
      { src: "l3/bulkhead-section.jpg", thumb: "l3/g-bulkhead-section.jpg", caption: "Custom thread-based ejection charge bulkhead (section view): threaded interfaces of the two ejection canisters", fit: "contain" },
      { src: "l3/competition-poster.jpg", thumb: "l3/g-competition-poster.jpg", caption: "IREC competition poster, Team 90: vehicle specifications, payloads, avionics, airbrakes, and fin can", pos: "50% 0%" }
    ],
    videos: [
      { src: "l3/launch.mp4", poster: "l3/launch-poster.jpg", caption: "Launch" },
      { src: "l3/drogue-static-test.mp4", poster: "l3/drogue-static-test-poster.jpg", caption: "Drogue Static Test" },
      { src: "l3/ejection-canister-test.mp4", poster: "l3/ejection-canister-test-poster.jpg", caption: "Ejection canister test: custom canisters with 6 g total of packed black powder" }
    ],
    links: [{ label: "Download IREC competition poster (PDF)", href: "docs/elgses-competition-poster.pdf" }]
  },
  {
    id: "l1-rocket",
    title: "Level 1 Rocket",
    subtitle: "A custom H-class rocket built for Tripoli Level 1 certification",
    tags: ["Rocketry", "CAD", "Fabrication"],
    dates: "Certified Jan 2026",
    summary: "Designed, built, and launched a custom H-class rocket to earn Tripoli Level 1 high-power rocketry certification.",
    cover: "l1/cover.jpg",
    coverAlt: "Completed Level 1 rocket standing upright",
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
      { src: "l1/launch-pad-single.jpg", thumb: "l1/g-launch-pad-single.jpg", caption: "Rocket on Launch Pad" },
      { src: "l1/openrocket-schematic.jpg", thumb: "l1/g-openrocket-schematic.jpg", caption: "OpenRocket Schematic", fit: "contain" },
      { src: "l1/motor-retainer.jpg", thumb: "l1/g-motor-retainer.jpg", caption: "Custom Motor Retainer", pos: "50% 45%" },
      { src: "l1/centering-rings.jpg", thumb: "l1/g-centering-rings.jpg", caption: "Centering Rings" },
      { src: "l1/post-launch.jpg", thumb: "l1/g-post-launch.jpg", caption: "Post-Launch Recovery and Separation", pos: "50% 55%" }
    ],
    videos: [
      { src: "l1/launch-video.mp4", poster: "l1/launch-video-poster.jpg", caption: "Launch Video" }
    ],
    links: []
  },
  {
    id: "deployable-payload-vehicle",
    title: "Deployable Payload Test Vehicle",
    subtitle: "A test rocket that proved a deployable payload, a custom flight computer, and line-cutter recovery",
    tags: ["Rocketry", "Avionics", "Fabrication"],
    dates: "2025 – 2026",
    summary: "With a team, built a rocket to test a deployable payload released by a custom flight computer and Piranha line cutters. The payload ejected and descended successfully on launch.",
    cover: "dpv/cover.jpg",
    coverAlt: "The completed Deployable Payload Test Vehicle standing upright",
    role: "Team Member, Fabrication & Integration",
    org: "Penn High Power Rocketry",
    timeline: "2025 – 2026",
    synopsis: [
      "This rocket was built to test a deployable payload before it flew on a larger vehicle. A team of us designed and built the test vehicle around a custom flight computer and Piranha line cutters, which release the drogue parachute and the deployable payload during recovery.",
      "Before the real launch, we ran a ground static test of the deployment system. On the launch itself, the deployable payload ejected and descended successfully.",
      "To build the airframe accurately, I designed a custom jig that holds the body tube while the fin slots are cut. It keeps the slots precisely placed so the fins stay vertical (aligned with the rocket's axis)."
    ],
    roles: [
      "Worked with a team to design, build, and launch a rocket that tested a deployable payload using a custom flight computer and Piranha line cutters to deploy a drogue parachute and the payload.",
      "Designed and built a custom jig to cut fin slots into the body tube with precision, keeping the fins vertical.",
      "Produced a CAD model and engineering drawing of the jig, with dimensions for 1 in \u00d7 2 in board construction and a 45\u00b0 V-cradle that supports the tube.",
      "Simulated the vehicle in OpenRocket to check stability and predict flight performance.",
      "Supported the ground static test of the deployment system and the launch, where the payload ejected and descended successfully."
    ],
    tools: ["OpenRocket", "CAD", "Custom flight computer", "Piranha line cutters", "Fabrication", "Ground and flight testing"],
    factsNote: "Values from the OpenRocket simulation.",
    facts: [
      { value: "H170M-6", label: "Motor" },
      { value: "51.021 in \u00d7 6.25 in", label: "Length \u00d7 max diameter" },
      { value: "120 oz", label: "Mass with motor" },
      { value: "1.35 cal", label: "Stability" },
      { value: "874 ft", label: "Simulated apogee" },
      { value: "234 ft/s (Mach 0.211)", label: "Max velocity" },
      { value: "167 ft/s\u00b2", label: "Max acceleration" }
    ],
    photos: [
      { src: "dpv/rocket.jpg", thumb: "dpv/g-rocket.jpg", caption: "Completed test vehicle: 51.0 in long with a 6.25 in diameter airframe" },
      { src: "dpv/openrocket-schematic.jpg", thumb: "dpv/g-openrocket-schematic.jpg", caption: "OpenRocket schematic: H170M-6 motor, 1.35 cal stability, 874 ft simulated apogee", fit: "contain" },
      { src: "dpv/jig-cad.jpg", thumb: "dpv/g-jig-cad.jpg", caption: "Custom fin-slot jig (CAD): a 45\u00b0 V-cradle holds the body tube so the slots are cut precisely and the fins stay vertical", fit: "contain" },
      { src: "dpv/jig-drawing-v2.jpg", thumb: "dpv/g-jig-drawing-v2.jpg", caption: "Engineering drawing of the fin-slot jig: 1 in \u00d7 2 in board frame, 45\u00b0 V-cradle, 17.688 in wide by 12.000 in tall", fit: "contain" }
    ],
    videos: [
      { src: "dpv/launch.mp4", poster: "dpv/launch-poster.jpg", caption: "Launch: the deployable payload ejects and descends successfully" },
      { src: "dpv/static-test.mp4", poster: "dpv/static-test-poster.jpg", caption: "Ground static test of the deployment system before launch" }
    ],
    links: []
  },
  {
    id: "dissect",
    title: "Dissect",
    subtitle: "CAD modeling of a multi-stage gear assembly, and the mechanical engineering behind gears",
    tags: ["CAD", "Mechanisms", "Gears"],
    dates: "",
    summary: "Modeled a complex gear assembly in CAD and learned the mechanical engineering concepts behind how gears work.",
    cover: "dissect/cover-cutaway.jpg",
    coverAlt: "CAD model of a gearbox with spur and bevel gears inside an open housing",
    role: "Designer (CAD)",
    org: "",
    timeline: "",
    noVideos: true,
    synopsis: [
      "Dissect is a project where I learned to model a complex gear assembly in CAD, from the individual gears and shafts to the housing that holds everything in alignment.",
      "Along the way I learned the mechanical engineering behind gears: how gears transmit motion and torque, how gear ratios trade speed for torque, how compound gear trains reach larger ratios in a compact space, why bevel gears change the direction of rotation, and how tooth geometry and shaft spacing have to agree for gears to mesh properly.",
      "The finished model combines spur gears, compound pinion stages, and a bevel gear set in one housing, and cutaway views show how the stages connect."
    ],
    roles: [
      "Modeled a multi-stage gear assembly in CAD, including spur gears, pinions, a bevel gear set, shafts, and the housing.",
      "Assembled the gears, shafts, and housing into a full CAD assembly and used cutaway views to check how the parts fit and mesh.",
      "Studied gear fundamentals: gear ratios, the speed\u2013torque trade-off, compound gear trains, spur versus bevel gears, tooth geometry, and shaft spacing."
    ],
    tools: ["CAD", "Assembly modeling", "Gear design", "Gear trains"],
    facts: [],
    photos: [
      { src: "dissect/cutaway.jpg", thumb: "dissect/g-cutaway.jpg", caption: "Gearbox assembly (cutaway CAD): housing sectioned to reveal the spur gear train and bevel gear stage", fit: "contain" },
      { src: "dissect/housing-open.jpg", thumb: "dissect/g-housing-open.jpg", caption: "Gearbox with the housing open: a large spur gear driving a compound pinion stage, which feeds a bevel gear", fit: "contain" },
      { src: "dissect/gear-train.jpg", thumb: "dissect/g-gear-train.jpg", caption: "Gear train removed from the housing: spur gears, compound pinions, and a bevel gear set on their shafts", fit: "contain" }
    ],
    videos: [],
    links: []
  }
];
