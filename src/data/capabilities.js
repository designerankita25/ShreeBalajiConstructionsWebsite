/**
 * =======================================================================
 * SHREE BALAJI CONSTRUCTIONS - EXECUTION CAPABILITY & SITE RESOURCES
 * =======================================================================
 * Organized into 5 professional equipment & site resource categories.
 * Communicates broad civil construction execution capability without
 * making arbitrary claims or using diminutive machine counters.
 */

export const capabilitiesData = {
  mainHeading: "BUILT TO EXECUTE.",
  subheading: "EQUIPMENT • SURVEYING • SITE RESOURCES",
  secondaryHeading: "THE RESOURCES BEHIND THE WORK.",
  mainCopy: "From site measurement and preparation to structural and concrete work, our execution resources support the varied requirements of construction sites.",
  bodyText: "Construction demands precision at every stage. Our surveying equipment, site machinery, construction tools and project-specific resources support efficient execution across diverse project requirements.",
  processFlow: ["SURVEY", "PREPARE", "BUILD", "EXECUTE"],
  capabilityAreas: [
    "SURVEYING",
    "SITE PREPARATION",
    "STRUCTURAL WORK",
    "CONCRETE WORK",
    "MATERIAL HANDLING"
  ],

  // 5 Major Execution Categories
  categories: [
    {
      number: "01",
      id: "surveying-precision",
      name: "SURVEYING & PRECISION",
      tag: "SURVEYING & PRECISION",
      role: "Site Measurement, Setting-Out & Elevation Benchmarks",
      description: "Accurate site measurement and engineering alignment form the base of every durable civil structure. We utilize optical instruments to establish level datum planes, structural column centers, and drainage slopes.",
      featuredImage: "/assets/images/machinery/theodolite.jpg",
      featuredAlt: "Theodolite Machine deployed on site for precision measurement",
      equipment: [
        {
          name: "Auto Level Machine",
          roleTag: "PRECISION SURVEYING",
          description: "Used for establishing accurate benchmark elevations, leveling foundations, floor slab planes, and site road drainage slopes.",
          image: "/assets/images/machinery/auto-level.jpg"
        },
        {
          name: "Theodolite Machine",
          roleTag: "SITE MEASUREMENT",
          description: "Applied in structural setting-out, boundary verification, column alignment, and horizontal/vertical angle measurement.",
          image: "/assets/images/machinery/theodolite.jpg"
        }
      ]
    },
    {
      number: "02",
      id: "steel-rebar",
      name: "STEEL & REBAR FABRICATION",
      tag: "STEEL & REBAR FABRICATION",
      role: "Rebar Cutting, Forming & Cage Assembly",
      description: "Structural reinforcement integrity demands precise rebar dimensions according to structural design drawings. Dedicated motorized fabrication units ensure uniform bar bends and clean cuts.",
      featuredImage: "/assets/images/machinery/steel-bending-machine.jpg",
      featuredAlt: "Bar Bending Machine on site forming reinforcement bars",
      equipment: [
        {
          name: "Bar Cutting Machine",
          roleTag: "REBAR PREPARATION",
          description: "Heavy-duty electric bar cutter ensuring precise rebar cut lengths for foundation cages, plinth beams, and slab mats.",
          image: "/assets/images/machinery/steel-cutting-machine.jpg"
        },
        {
          name: "Bar Bending Machine",
          roleTag: "REBAR FORMING",
          description: "High-torque motorized bender providing accurate angles, stirrups, hooks, and complex rebar profiles.",
          image: "/assets/images/machinery/steel-bending-machine.jpg"
        }
      ]
    },
    {
      number: "03",
      id: "concrete-site-support",
      name: "CONCRETE & SITE SUPPORT",
      tag: "CONCRETE & SITE SUPPORT",
      role: "Concrete Mixing, Curing Supply & Material Logistics",
      description: "Consistent concrete mix ratios and uninterrupted water supply are critical for concrete hydration, compressive strength development, and proper curing cycles.",
      featuredImage: "/assets/images/machinery/slm-flori-mixer.jpg",
      featuredAlt: "Mixer Machine deployed on site for continuous concrete batching",
      equipment: [
        {
          name: "Mixer Machine",
          roleTag: "CONCRETE / SITE SUPPORT",
          description: "Efficient on-site concrete mixing and batching for footings, grade slabs, structural columns, and drainage channels.",
          image: "/assets/images/machinery/slm-flori-mixer.jpg"
        },
        {
          name: "Water Tanker",
          roleTag: "SITE SUPPORT",
          description: "Dedicated site water tanker supporting continuous concrete curing, dust control, earthwork moisture control, and operational site utilities.",
          image: "/assets/images/machinery/branded-water-tanker.jpg"
        }
      ]
    },
    {
      number: "04",
      id: "earthwork-site-operations",
      name: "EARTHWORK & SITE OPERATIONS",
      tag: "EARTHWORK & SITE OPERATIONS",
      role: "Ground Excavation, Sub-Grade Leveling & Material Haulage",
      description: "Heavy earthmoving and site haulage machinery prepare the physical terrain, excavate deep foundations, move bulk materials, and maintain internal site mobility.",
      featuredImage: "/assets/images/machinery/jcb-3dx.jpg",
      featuredAlt: "JCB Backhoe Loader performing foundation excavation",
      equipment: [
        {
          name: "JCB",
          roleTag: "EARTHWORK & SITE OPERATIONS",
          description: "Versatile backhoe loader for mass foundation excavation, trenching, trench backfilling, and general earth handling.",
          image: "/assets/images/machinery/jcb-3dx.jpg"
        },
        {
          name: "Tractor",
          roleTag: "SITE OPERATIONS",
          description: "Tractor units with attached trailers and tankers for on-site material transport, tool relocation, and earth movement.",
          image: "/assets/images/machinery/tractor-water-tanker.jpg"
        }
      ]
    },
    {
      number: "05",
      id: "construction-tools-resources",
      name: "CONSTRUCTION TOOLS & SITE RESOURCES",
      tag: "CONSTRUCTION TOOLS & SITE RESOURCES",
      role: "Comprehensive Field Tools, Equipment & Site Resources",
      description: "Successful civil engineering execution relies on an array of specialized tools, safety staging, vibrators, compactors, and project-specific field equipment deployed on demand.",
      featuredImage: "/assets/images/machinery/soil-compactor.jpg",
      featuredAlt: "Site resources and compaction machinery deployed on active ground",
      equipment: [
        {
          name: "Additional construction machines, tools and project-specific site resources",
          roleTag: "GENERAL SITE RESOURCES",
          description: "Concrete vibrators, soil compaction rollers, staging scaffolds, leveling screeds, testing moulds, and project-specific tooling mobilized to match individual structural requirements.",
          image: "/assets/images/machinery/soil-compactor.jpg"
        }
      ]
    }
  ],

  // "MORE THAN MACHINES" Message
  moreThanMachines: {
    heading: "MORE THAN MACHINES.",
    copy: "Successful execution depends on more than equipment. It requires accurate site measurement, preparation, coordination, tools and resources aligned with the requirements of each project.",
    flowSteps: [
      { step: "01", name: "SURVEY", desc: "Scientific site measurement and datum establishment." },
      { step: "02", name: "PREPARE", desc: "Ground excavation, sub-grade compaction, and steel rebar forming." },
      { step: "03", name: "BUILD", desc: "Controlled concrete mixing, structural casting, and masonry assembly." },
      { step: "04", name: "EXECUTE", desc: "Dedicated finishing, rigorous curing, inspection, and defect-free handover." }
    ]
  },

  // "THE EXECUTION ECOSYSTEM" Visual Flow
  ecosystem: [
    {
      stage: "SURVEYING",
      equipment: "Auto Level Machine • Theodolite Machine",
      role: "Setting out column centers, boundary lines & elevation datum."
    },
    {
      stage: "SITE PREPARATION",
      equipment: "JCB • Tractor",
      role: "Mass earthwork, foundation trenches & sub-grade leveling."
    },
    {
      stage: "MATERIAL & REBAR WORK",
      equipment: "Bar Cutting Machine • Bar Bending Machine",
      role: "Rebar cutting, stirrup bending & reinforcement cage assembly."
    },
    {
      stage: "CONCRETE WORK",
      equipment: "Mixer Machine",
      role: "On-site batching, controlled mixing & slab/column casting."
    },
    {
      stage: "STRUCTURAL EXECUTION",
      equipment: "Construction Machines & Tools",
      role: "Compaction, vibratory screeding, masonry & structural framing."
    },
    {
      stage: "PROJECT SUPPORT",
      equipment: "Water Tanker & Site Resources",
      role: "Continuous concrete curing, site water supply & operational logistics."
    }
  ],

  // "RESOURCES BEHIND THE WORK" Portfolio Connection
  portfolioConnection: {
    title: "RESOURCES BEHIND THE WORK",
    concept: "EQUIPMENT & RESOURCES → SITE EXECUTION → PROJECT EXPERIENCE",
    subtitle: "From industrial complexes to institutional campuses and hospitality projects, our execution capability powers real-world construction milestones.",
    featuredProjects: [
      { id: "swan-international", name: "Swan International Pvt. Ltd.", category: "Hotel & Resort", location: "Garhi Bajidpur, Sohna (ONGOING)" },
      { id: "sanjay-engineering", name: "Sanjay Engineering", category: "Industrial", location: "Keswana, Rajasthan" },
      { id: "hi-tech-warehouse", name: "Hi-Tech Warehouse", category: "Warehouse", location: "Tauru, Haryana" },
      { id: "nord-industries", name: "Nord Industries", category: "Industrial", location: "MET City Jhajjar" },
      { id: "br-logistics", name: "BR Logistics", category: "Warehouse & Logistics", location: "Farrukhnagar, Gurugram" },
      { id: "eera-constructive-solution", name: "EERA CONSTRUCTIVE SOLUTION", category: "Industrial", location: "Tauru, Mewat (ONGOING)" },
      { id: "rao-sher-singh-memorial-school", name: "Rao Sher Singh Memorial School", category: "Institutional", location: "Rewari, Haryana" }
    ]
  }
};

// Export capabilityData alias for backwards compatibility if imported elsewhere
export const capabilityData = capabilitiesData;
