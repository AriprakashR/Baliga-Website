// Placeholder catalog data — illustrative specs, ratings, and certification
// codes for scaffolding the catalog UI. NOT verified against actual Baliga
// datasheets or current certificates. Replace every entry here with real
// product data (and datasheets under /public/datasheets) before this ships
// to production.
//
// Images are real product thumbnails downloaded from baliga.com (the live
// site) as a temporary stand-in — they're small (95x95 source) placeholders
// until higher-resolution photography is available.
import type { CatalogProduct } from '@/types/product';

const LUMINAIRE_IMG = '/products/luminaires.jpg';
const CONTROL_GEAR_IMG = '/products/control-gear.jpg';
const CONTROL_STATION_IMG = '/products/control-stations.jpg';
const CONTROL_PANEL_IMG = '/products/control-panel.jpg';
const SWITCHES_IMG = '/products/switches.jpg';
const PLUG_SOCKETS_IMG = '/products/plug-sockets.jpg';
const CABLE_GLANDS_IMG = '/products/cable-glands.jpg';
const MULTIWAY_JB_IMG = '/products/multiway-jb.jpg';
const FRP_JB_IMG = '/products/frp-jb.jpg';
const ORIFICE_PLATE_IMG = '/products/orifice-plate.jpg';
const VENTURI_TUBE_IMG = '/products/venturi-tube.jpg';
const STARTERS_IMG = '/products/starters.jpg';
const PURGING_SYSTEM_IMG = '/products/purging-system.jpg';
const LIGHTING_JB_IMG = '/products/lighting-jb.jpg';
const ACCESSORIES_IMG = '/products/accessories.jpg';
const FLUORESCENT_IMG = '/products/fluorescent.jpg';
const ELECTRICAL_OTHERS_IMG = '/products/electrical-others.jpg';
const SPECIALS_IMG = '/products/specials.jpg';
const COMMUNICATION_IMG = '/products/communication.jpg';
const ORIFICE_ASSEMBLY_IMG = '/products/orifice-assembly.jpg';
const PLATE_HOLDER_IMG = '/products/plate-holder.jpg';
const METER_RUN_IMG = '/products/meter-run.jpg';
const CARRIER_RING_PLATE_IMG = '/products/carrier-ring-plate.jpg';
const MULTISTAGE_IMG = '/products/multistage.jpg';
const FLOW_NOZZLE_IMG = '/products/flow-nozzle.jpg';
const HASM_IMG = '/products/hasm.jpg';
const HEATERS_IMG = '/products/heaters.jpg';
const MONITORS_IMG = '/products/monitors.jpg';

export const PRODUCTS: CatalogProduct[] = [
  {
    id: 'lum-01',
    slug: 'flameproof-led-well-glass-luminaire',
    name: 'Flameproof LED Well Glass Luminaire',
    category: 'luminaires',
    description:
      'Flameproof LED well glass luminaire for general area lighting in hazardous locations, with a die-cast aluminium body and toughened glass diffuser.',
    shortSpecs: ['40W LED', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Light Source': '40W LED, 4800 lm',
      'Enclosure Material': 'Die-cast aluminium, epoxy powder coated',
      'Rated Voltage': '110-270V AC, 50/60Hz',
      'Temperature Class': 'T6',
      'Mounting': 'Ceiling / wall / pendant',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'IECEx', 'CCOE/PESO'],
    images: [LUMINAIRE_IMG],
  },
  {
    id: 'lum-02',
    slug: 'explosion-proof-bulkhead-luminaire',
    name: 'Explosion-Proof Bulkhead Luminaire',
    category: 'luminaires',
    description:
      'Compact flameproof bulkhead fitting for corridors, stairwells, and platform lighting in classified hazardous areas.',
    shortSpecs: ['20W LED', 'Zone 1 / Zone 21', 'IP65'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T5 Gb',
      'Light Source': '20W LED, 2200 lm',
      'Enclosure Material': 'Copper-free aluminium alloy',
      'Rated Voltage': '85-265V AC, 50/60Hz',
      'Temperature Class': 'T5',
      'Mounting': 'Surface wall mount',
    },
    exZone: ['Zone 1', 'Zone 21'],
    ipRating: 'IP65',
    certifications: ['ATEX', 'BIS'],
    images: [LUMINAIRE_IMG],
  },
  {
    id: 'lum-03',
    slug: 'flameproof-fluorescent-luminaire',
    name: 'Flameproof Fluorescent Luminaire',
    category: 'luminaires',
    description:
      'Flameproof fluorescent luminaire for wide-area illumination in hazardous locations requiring even, diffused light.',
    shortSpecs: ['Twin-tube fluorescent', 'Zone 1 / Zone 2', 'IP65'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T5 Gb',
      'Light Source': '2 x 36W fluorescent tube',
      'Enclosure Material': 'Die-cast aluminium',
      'Rated Voltage': '220-240V AC, 50Hz',
      'Temperature Class': 'T5',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP65',
    certifications: ['CCOE/PESO', 'BIS'],
    images: [FLUORESCENT_IMG],
  },
  {
    id: 'cg-01',
    slug: 'flameproof-ballast-enclosure',
    name: 'Flameproof Ballast & Control Gear Enclosure',
    category: 'control-gear',
    description:
      'Flameproof enclosure housing ballast and control gear for hazardous-area lighting circuits, rated for continuous industrial duty.',
    shortSpecs: ['Ex d IIB+H2', 'Zone 1', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIB+H2 T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Rated Voltage': '415V AC, 3-phase',
      'Temperature Class': 'T6',
      'Cable Entries': '2 x M25',
    },
    exZone: ['Zone 1'],
    ipRating: 'IP66',
    certifications: ['IECEx', 'CCOE/PESO'],
    images: [CONTROL_GEAR_IMG],
  },
  {
    id: 'cg-02',
    slug: 'flameproof-power-distribution-unit',
    name: 'Flameproof Power Distribution Unit',
    category: 'control-gear',
    description:
      'Distribution control gear for splitting and protecting power feeds to downstream flameproof lighting and small power circuits.',
    shortSpecs: ['4-way', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Rated Current': '32A per way',
      'Temperature Class': 'T6',
      'Cable Entries': '4 x M25, 1 x M32',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'IECEx'],
    images: [CONTROL_GEAR_IMG],
  },
  {
    id: 'sw-01',
    slug: 'flameproof-isolator-switch',
    name: 'Flameproof Isolator Switch',
    category: 'switches',
    description:
      'Local isolator switch in a flameproof enclosure for safely disconnecting equipment during maintenance in classified areas.',
    shortSpecs: ['20A / 32A', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Rated Current': '20A / 32A',
      'Poles': '3P + N',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'IECEx', 'CCOE/PESO'],
    images: [SWITCHES_IMG],
  },
  {
    id: 'sw-02',
    slug: 'flameproof-plug-socket-unit',
    name: 'Flameproof Plug & Socket Unit',
    category: 'switches',
    description:
      'Interlocked plug and socket combination unit for portable equipment connections in hazardous industrial areas.',
    shortSpecs: ['16A / 415V', 'Zone 1', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Rated Current': '16A',
      'Rated Voltage': '415V AC',
      'Interlocking': 'Mechanical, switch-socket',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1'],
    ipRating: 'IP66',
    certifications: ['IECEx', 'BIS'],
    images: [PLUG_SOCKETS_IMG],
  },
  {
    id: 'cs-01',
    slug: 'flameproof-local-control-station',
    name: 'Flameproof Local Control Station',
    category: 'control-stations',
    description:
      'Push-button local control station for start/stop/emergency-stop operation of motors and equipment in hazardous areas.',
    shortSpecs: ['2/3-button', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Configuration': 'Start / Stop / E-Stop',
      'Contact Rating': '10A, 415V AC',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'CCOE/PESO'],
    images: [CONTROL_STATION_IMG],
  },
  {
    id: 'cs-02',
    slug: 'flameproof-instrumentation-panel',
    name: 'Flameproof Instrumentation Panel',
    category: 'control-stations',
    description:
      'Multi-instrument flameproof panel housing indicators, selector switches, and monitoring gear for field process control.',
    shortSpecs: ['Multi-window', 'Zone 1', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T5 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Windows': 'Toughened glass, up to 6',
      'Temperature Class': 'T5',
      'Cable Entries': 'Customer specified',
    },
    exZone: ['Zone 1'],
    ipRating: 'IP66',
    certifications: ['IECEx', 'CCOE/PESO', 'BIS'],
    images: [CONTROL_PANEL_IMG],
  },
  {
    id: 'cs-03',
    slug: 'hazardous-area-process-monitor',
    name: 'Hazardous-Area Process Monitor',
    category: 'control-stations',
    description:
      'Flameproof-housed process monitor for local display and monitoring of field instrumentation readings.',
    shortSpecs: ['Digital display', 'Zone 1', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Display': 'Digital, backlit',
      'Temperature Class': 'T6',
      'Cable Entries': 'Customer specified',
    },
    exZone: ['Zone 1'],
    ipRating: 'IP66',
    certifications: ['IECEx', 'CCOE/PESO'],
    images: [MONITORS_IMG],
  },
  {
    id: 'cgl-01',
    slug: 'double-compression-cable-gland',
    name: 'Double Compression Cable Gland',
    category: 'cable-glands',
    description:
      'Nickel-plated brass double compression cable gland for armoured cable entry into flameproof and increased-safety enclosures.',
    shortSpecs: ['Nickel-plated brass', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d / Ex e IIC Gb',
      'Material': 'Nickel-plated brass',
      'Cable Type': 'Armoured, single wire',
      'Thread': 'Metric / NPT on request',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'IECEx'],
    images: [CABLE_GLANDS_IMG],
  },
  {
    id: 'cgl-02',
    slug: 'unarmoured-cable-gland',
    name: 'Single Compression Cable Gland',
    category: 'cable-glands',
    description:
      'Single compression cable gland for unarmoured cable entry into flameproof and increased-safety enclosures.',
    shortSpecs: ['Nickel-plated brass', 'Zone 1 / Zone 21', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d / Ex e IIC Gb',
      'Material': 'Nickel-plated brass',
      'Cable Type': 'Unarmoured, single wire',
      'Thread': 'Metric / NPT on request',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 21'],
    ipRating: 'IP66',
    certifications: ['IECEx', 'BIS'],
    images: [CABLE_GLANDS_IMG],
  },
  {
    id: 'jb-01',
    slug: 'flameproof-junction-box-multiway',
    name: 'Flameproof Junction Box — Multiway',
    category: 'junction-boxes',
    description:
      'Multiway flameproof junction box with terminal blocks for cable termination and distribution in hazardous areas.',
    shortSpecs: ['Up to 24-way', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Terminals': 'Up to 24-way, 4/6/10 sq.mm',
      'Cable Entries': 'Customer specified',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'IECEx', 'CCOE/PESO'],
    images: [MULTIWAY_JB_IMG],
  },
  {
    id: 'jb-02',
    slug: 'frp-junction-box',
    name: 'FRP Increased Safety Junction Box',
    category: 'junction-boxes',
    description:
      'Corrosion-resistant FRP junction box for increased-safety applications in chemically aggressive hazardous environments.',
    shortSpecs: ['FRP body', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex e IIC T6 Gb',
      'Enclosure Material': 'Fibre-reinforced polyester (FRP)',
      'Terminals': 'Up to 12-way',
      'Cable Entries': 'Customer specified',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['IECEx', 'BIS'],
    images: [FRP_JB_IMG],
  },
  {
    id: 'jb-03',
    slug: 'flameproof-lighting-junction-box',
    name: 'Flameproof Lighting Junction Box',
    category: 'junction-boxes',
    description:
      'Compact flameproof junction box for looping and terminating lighting circuit cables in hazardous areas.',
    shortSpecs: ['Up to 6-way', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Terminals': 'Up to 6-way, 4 sq.mm',
      'Cable Entries': '2-4 x M20/M25',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'CCOE/PESO'],
    images: [LIGHTING_JB_IMG],
  },
  {
    id: 'fm-01',
    slug: 'orifice-plate-flow-meter',
    name: 'Orifice Plate Flow Measuring Assembly',
    category: 'flow-measurement',
    description:
      'Concentric orifice plate assembly for differential-pressure flow measurement of liquids and gases in process piping.',
    shortSpecs: ['Concentric bore', 'Zone 1 / Zone 2', 'IP67'],
    detailedSpecs: {
      'Type': 'Concentric orifice plate',
      'Material': 'Stainless steel 316',
      'Line Size': '2" - 24" (custom on request)',
      'Standard Reference': 'ISO 5167',
      'Pressure Rating': 'Up to ANSI 600#',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP67',
    certifications: ['CCOE/PESO', 'BIS'],
    images: [ORIFICE_PLATE_IMG],
  },
  {
    id: 'fm-02',
    slug: 'venturi-tube-flow-element',
    name: 'Venturi Tube Flow Element',
    category: 'flow-measurement',
    description:
      'Precision-machined venturi tube for low permanent-pressure-loss flow measurement in high-flow process lines.',
    shortSpecs: ['Low pressure loss', 'Zone 1 / Zone 2', 'IP67'],
    detailedSpecs: {
      'Type': 'Classical venturi tube',
      'Material': 'Stainless steel 316',
      'Line Size': '3" - 36" (custom on request)',
      'Standard Reference': 'ISO 5167',
      'Pressure Rating': 'Up to ANSI 600#',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP67',
    certifications: ['CCOE/PESO'],
    images: [VENTURI_TUBE_IMG],
  },
  {
    id: 'fm-03',
    slug: 'orifice-plate-assembly',
    name: 'Orifice Plate Assembly',
    category: 'flow-measurement',
    description:
      'Complete orifice plate assembly with carrier ring for straightforward installation between pipe flanges.',
    shortSpecs: ['Flange-mounted', 'Zone 1 / Zone 2', 'IP67'],
    detailedSpecs: {
      'Type': 'Orifice plate assembly',
      'Material': 'Stainless steel 316',
      'Line Size': '2" - 24" (custom on request)',
      'Standard Reference': 'ISO 5167',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP67',
    certifications: ['CCOE/PESO'],
    images: [ORIFICE_ASSEMBLY_IMG],
  },
  {
    id: 'fm-04',
    slug: 'orifice-plate-holder',
    name: 'Orifice Plate Holder',
    category: 'flow-measurement',
    description:
      'Flanged plate holder for mounting and aligning orifice plates within the process pipeline.',
    shortSpecs: ['Flanged design', 'Zone 1 / Zone 2', 'IP67'],
    detailedSpecs: {
      'Type': 'Orifice plate holder',
      'Material': 'Stainless steel / carbon steel',
      'Line Size': '2" - 24" (custom on request)',
      'Pressure Rating': 'Up to ANSI 600#',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP67',
    certifications: ['CCOE/PESO'],
    images: [PLATE_HOLDER_IMG],
  },
  {
    id: 'fm-05',
    slug: 'flow-meter-run',
    name: 'Flow Meter Run',
    category: 'flow-measurement',
    description:
      'Pre-fabricated meter run spool with integrated orifice fitting for accurate, repeatable flow measurement.',
    shortSpecs: ['Pre-fabricated spool', 'Zone 1 / Zone 2', 'IP67'],
    detailedSpecs: {
      'Type': 'Meter run',
      'Material': 'Carbon steel / stainless steel',
      'Standard Reference': 'ISO 5167',
      'Pressure Rating': 'Up to ANSI 600#',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP67',
    certifications: ['CCOE/PESO', 'BIS'],
    images: [METER_RUN_IMG],
  },
  {
    id: 'fm-06',
    slug: 'carrier-ring-plate',
    name: 'Carrier Ring Plate',
    category: 'flow-measurement',
    description:
      'Carrier ring plate for supporting and centring orifice plates at pipeline flange joints.',
    shortSpecs: ['Flange-centring ring', 'Zone 1 / Zone 2', 'IP67'],
    detailedSpecs: {
      'Type': 'Carrier ring plate',
      'Material': 'Stainless steel 316',
      'Line Size': '2" - 24" (custom on request)',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP67',
    certifications: ['CCOE/PESO'],
    images: [CARRIER_RING_PLATE_IMG],
  },
  {
    id: 'fm-07',
    slug: 'multistage-orifice-assembly',
    name: 'Multistage Orifice Assembly',
    category: 'flow-measurement',
    description:
      'Multistage orifice assembly for controlled pressure reduction across several stages in high-differential process lines.',
    shortSpecs: ['Multi-stage reduction', 'Zone 1 / Zone 2', 'IP67'],
    detailedSpecs: {
      'Type': 'Multistage orifice assembly',
      'Material': 'Stainless steel 316',
      'Standard Reference': 'ISO 5167',
      'Pressure Rating': 'Up to ANSI 900#',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP67',
    certifications: ['CCOE/PESO'],
    images: [MULTISTAGE_IMG],
  },
  {
    id: 'fm-08',
    slug: 'flow-nozzle',
    name: 'Flow Nozzle',
    category: 'flow-measurement',
    description:
      'Precision flow nozzle for high-velocity flow measurement where low permanent pressure loss is required.',
    shortSpecs: ['High-velocity flow', 'Zone 1 / Zone 2', 'IP67'],
    detailedSpecs: {
      'Type': 'Flow nozzle',
      'Material': 'Stainless steel 316',
      'Line Size': '2" - 24" (custom on request)',
      'Standard Reference': 'ISO 5167',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP67',
    certifications: ['CCOE/PESO', 'BIS'],
    images: [FLOW_NOZZLE_IMG],
  },
  {
    id: 'acc-01',
    slug: 'flameproof-motor-starter',
    name: 'Flameproof Direct-On-Line Starter',
    category: 'accessories',
    description:
      'Flameproof DOL starter for local control of small to medium motors installed in hazardous areas.',
    shortSpecs: ['Up to 15kW', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Motor Rating': 'Up to 15kW',
      'Control Voltage': '110V / 240V AC',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'CCOE/PESO'],
    images: [STARTERS_IMG],
  },
  {
    id: 'acc-02',
    slug: 'enclosure-purging-unit',
    name: 'Enclosure Purge & Pressurization Unit',
    category: 'accessories',
    description:
      'Ex p purge and pressurization control unit for protecting standard electrical equipment installed inside hazardous areas.',
    shortSpecs: ['Ex p system', 'Zone 1 / Zone 2', 'IP65'],
    detailedSpecs: {
      'Protection Type': 'Ex p IIC T4 Gb',
      'Purge Medium': 'Instrument air / inert gas',
      'Monitoring': 'Pressure & flow interlock',
      'Enclosure Material': 'Stainless steel',
      'Temperature Class': 'T4',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP65',
    certifications: ['IECEx', 'BIS'],
    images: [PURGING_SYSTEM_IMG],
  },
  {
    id: 'acc-03',
    slug: 'flameproof-accessories-range',
    name: 'Flameproof Fittings & Accessories',
    category: 'accessories',
    description:
      'General range of flameproof fittings and mounting accessories used to complete hazardous-area installations.',
    shortSpecs: ['Assorted fittings', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC Gb',
      'Enclosure Material': 'Cast aluminium / brass',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['CCOE/PESO'],
    images: [ACCESSORIES_IMG],
  },
  {
    id: 'acc-04',
    slug: 'hot-air-sealing-machine',
    name: 'Hot Air Sealing Machine (HASM)',
    category: 'accessories',
    description:
      'Hot air sealing machine used to heat-seal cable and conduit entries as part of hazardous-area installation work.',
    shortSpecs: ['Portable unit', 'Site installation tool', 'IP54'],
    detailedSpecs: {
      'Type': 'Hot air sealing machine',
      'Power Supply': '230V AC, single phase',
      'Application': 'Cable/conduit entry sealing',
    },
    exZone: [],
    ipRating: 'IP54',
    certifications: [],
    images: [HASM_IMG],
  },
  {
    id: 'acc-05',
    slug: 'flameproof-space-heater',
    name: 'Flameproof Space Heater',
    category: 'accessories',
    description:
      'Flameproof enclosure heater for anti-condensation protection of panels and enclosures in humid or cold environments.',
    shortSpecs: ['Anti-condensation', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T4 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Rated Power': '60W-200W',
      'Temperature Class': 'T4',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['CCOE/PESO'],
    images: [HEATERS_IMG],
  },
  {
    id: 'acc-06',
    slug: 'special-purpose-enclosures',
    name: 'Special Purpose Enclosures',
    category: 'accessories',
    description:
      'Custom-engineered flameproof and increased-safety enclosures built to specific customer requirements.',
    shortSpecs: ['Custom engineered', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d / Ex e IIC Gb',
      'Enclosure Material': 'Cast aluminium / stainless steel',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'IECEx'],
    images: [SPECIALS_IMG],
  },
  {
    id: 'acc-07',
    slug: 'other-electrical-accessories',
    name: 'Other Electrical Accessories',
    category: 'accessories',
    description:
      'General-purpose electrical hardware and small accessories supplied alongside core hazardous-area equipment.',
    shortSpecs: ['General hardware', 'Zone 1 / Zone 2', 'IP65'],
    detailedSpecs: {
      'Protection Type': 'Ex e IIC Gb',
      'Enclosure Material': 'Various',
      'Temperature Class': 'T5',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP65',
    certifications: ['BIS'],
    images: [ELECTRICAL_OTHERS_IMG],
  },
  {
    id: 'com-01',
    slug: 'explosion-proof-telephone',
    name: 'Explosion-Proof Telephone',
    category: 'communication',
    description:
      'Flameproof weatherproof telephone handset for voice communication within classified hazardous plant areas.',
    shortSpecs: ['Auto-dial handset', 'Zone 1 / Zone 2', 'IP66'],
    detailedSpecs: {
      'Protection Type': 'Ex d IIC T6 Gb',
      'Enclosure Material': 'Cast aluminium',
      'Function': 'Auto-dial / PA handset',
      'Temperature Class': 'T6',
    },
    exZone: ['Zone 1', 'Zone 2'],
    ipRating: 'IP66',
    certifications: ['ATEX', 'IECEx', 'CCOE/PESO'],
    images: [COMMUNICATION_IMG],
  },
];
