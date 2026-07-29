// Sourced from https://baliga.com/shows/faq — regrouped into topic
// categories and lightly reformatted for accordion display. Answer text is
// reproduced from the source; reference tables (zone/division, IP codes,
// NEMA equivalents, temperature classes) are transcribed verbatim.

export interface FAQTable {
  headers: string[];
  rows: string[][];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  table?: FAQTable;
}

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'general',
    label: 'General Inquiries',
    items: [
      {
        id: 'explosive-atmosphere',
        question: 'What is a potentially explosive atmosphere?',
        answer:
          'Potentially explosive atmospheres exist where there is a risk of explosion due to mixtures of gas/air, vapor/air, dust/air or other flammable combinations. In such areas there is a necessity to eliminate sources of ignition such as sparks, hot surfaces or static electricity which may ignite these mixtures.',
      },
      {
        id: 'zones-divisions',
        question: "What is meant by 'Zones' and 'Divisions'?",
        answer:
          'Process plants are divided into Zones (European and IEC method) or Divisions (North American method) according to the likelihood of a potentially explosive atmosphere being present.',
        table: {
          headers: [
            'Likelihood of explosive mixture',
            'European / IEC classification',
            'North American classification',
          ],
          rows: [
            [
              'Continuously present, or present for long periods',
              'Zone 0 (gases), Zone 20 (dusts)',
              'Class I Division 1 (gases), Class II Division 1 (dusts)',
            ],
            [
              'Likely to occur in normal operation',
              'Zone 1 (gases), Zone 21 (dusts)',
              'Class I Division 1 (gases), Class II Division 1 (dusts)',
            ],
            [
              'Not likely in normal operation, and if it occurs, only briefly',
              'Zone 2 (gases), Zone 22 (dusts)',
              'Class I Division 1 (gases), Class II Division 1 (dusts), Class III Division 1/2 (fibres)',
            ],
          ],
        },
      },
      {
        id: 'gas-groups',
        question: 'What is the difference between Gas Groups I & II?',
        answer:
          'There are two main gas groups: Group I — Mining only, and Group II — Surface Industries. These categories are used in European and IEC groupings. Group I is concerned only with underground mining where methane and coal dust are present. Group II gases, occurring in surface industries, are sub-grouped according to their volatility.',
      },
      {
        id: 'ip-rating',
        question: 'What does IP in IP-65 stand for?',
        answer:
          'IP means Ingress Protection, i.e. protection of apparatus from the entry of solids and liquids. The first digit rates protection against solids, the second against liquids.',
        table: {
          headers: ['Level', 'Solids protection', 'Liquids protection'],
          rows: [
            ['0', 'No protection', 'No protection'],
            [
              '1',
              'Protected against solid objects up to 50mm, e.g. hands',
              'Protected against vertically falling drops of water',
            ],
            [
              '2',
              'Protected against solid objects up to 12mm, e.g. fingers',
              'Protected against water spray up to 15° from vertical',
            ],
            [
              '3',
              'Protected against solid objects up to 2.5mm, e.g. tools',
              'Protected against water spray up to 60° from vertical',
            ],
            [
              '4',
              'Protected against solid objects over 1mm, e.g. wires',
              'Protected against water sprays from all directions',
            ],
            [
              '5',
              'Protected against dust (no harmful deposits)',
              'Protected against water jets from all directions',
            ],
            [
              '6',
              'Totally protected against dust',
              'Protected against strong water jets from all directions, e.g. offshore',
            ],
            ['7', '—', 'Protected against immersion between 15cm and 1m in depth'],
            ['8', '—', 'Protected against long immersion under pressure'],
          ],
        },
      },
      {
        id: 'temperature-class',
        question: 'What is Temperature Class of a product?',
        answer:
          'The ignition temperature is the lowest temperature on the surface at which an explosive atmosphere will ignite. Gases and dusts have been divided into temperature classes according to their ignition temperatures, so that electrical equipment can be further sub-divided into six temperature classes, T1 to T6.',
        table: {
          headers: ['Temperature class', 'Maximum surface temperature'],
          rows: [
            ['T1', '450°C'],
            ['T2', '300°C'],
            ['T3', '200°C'],
            ['T4', '135°C'],
            ['T5', '100°C'],
            ['T6', '85°C'],
          ],
        },
      },
    ],
  },
  {
    id: 'certifications',
    label: 'Certifications & Standards',
    items: [
      {
        id: 'eexd-code',
        question: 'What is meant by the code EExdIIBT4?',
        answer:
          'E — European certificate in accordance with harmonized standards. Ex — explosion-proof electrical equipment. d — flameproof enclosure type of protection. II — Group II, surface industries. B — gas group B. T4 — temperature class T4 (135°C maximum surface temperature).',
      },
      {
        id: 'atex-certification',
        question:
          'What is ATEX certification and how is it different from the regular certification?',
        answer:
          'ATEX has been initiated by the European countries, and has come into force as a directive since 1st July 2003 throughout the EEC. This becomes a mandatory requirement for all equipment intended for use in a hazardous area. The fundamental difference between regular approvals and ATEX certification is that ATEX addresses the essential safety requirements for hazardous area equipment and uses standards as part of the method of conforming to these.',
      },
      {
        id: 'nema',
        question: 'What does NEMA stand for?',
        answer:
          "NEMA is the acronym for National Electrical Manufacturers' Association. North American practice is to use NEMA standards to describe ingress protection.",
        table: {
          headers: ['NEMA rating', 'IP equivalent'],
          rows: [
            ['NEMA 3', 'IP 54'],
            ['NEMA 4', 'IP 55'],
            ['NEMA 4X', 'IP 56'],
            ['NEMA 6', 'IP 67'],
            ['NEMA 7, 9', 'Ex equipment'],
          ],
        },
      },
      {
        id: 'governing-bodies',
        question: 'Which are the governing bodies for use of Ex Equipment?',
        answer:
          'For India: PESO — Petroleum and Explosives Safety Organization, Nagpur. This is headed by the Chief Controller of Explosives, whose approval is mandatory for the use of Ex equipment in India, especially for IIA & IIC gas groups.',
      },
      {
        id: 'ccoe-approval',
        question:
          'Is CCOE approval required for all electrical equipment installed in a hazardous area?',
        answer:
          'All equipment operating on electrical energy is required to be approved by the Chief Controller of Explosives if it finds application in hazardous areas falling within the purview of the Petroleum Rules, 2002.',
      },
    ],
  },
  {
    id: 'technical',
    label: 'Product & Technical Specs',
    items: [
      {
        id: 'orifice-vs-restriction',
        question:
          'What is the difference between Orifice Plate and Restriction Orifice Plate?',
        answer:
          'An Orifice Plate is used to measure the flow in the pipeline through a DP transmitter, whereas a Restriction Orifice Plate is used to reduce the flow pressure in the pipeline.',
      },
      {
        id: 'tapping-distance',
        question:
          'For Flange tapping, what is the upstream / downstream tapping distance?',
        answer:
          'Upstream and downstream tapping distance is 25.4mm respectively, from the center of the tapping point to the upstream face of the orifice plate.',
      },
      {
        id: 'vent-drain-hole',
        question:
          'For which application is a vent / drain hole provided on the orifice plate?',
        answer:
          'A vent hole is provided for liquid services, and a drain hole is provided for gas and vapour services.',
      },
      {
        id: 'gasket-thickness',
        question: 'Is the gasket thickness included in the tapping distance?',
        answer: 'Yes, gasket thickness is included in the tapping distance.',
      },
      {
        id: 'lined-flanges',
        question:
          'Where are the tappings provided for FRP flanges, rubber-lined flanges, Teflon-coated flanges, etc.?',
        answer:
          'For these kinds of flanges, carrier rings are provided on both sides of the orifice plate, and tappings are done on the carrier rings.',
      },
      {
        id: 'flow-nozzles',
        question: 'Where are Flow Nozzles used?',
        answer:
          'Generally, Flow Nozzles are used in high-pressure and high-temperature lines.',
      },
      {
        id: 'venturi-tube',
        question: 'What is the application of a Venturi Tube?',
        answer: 'Normally, a Venturi Tube is used for very low pressure applications.',
      },
      {
        id: 'multistage-restriction',
        question: 'What is the application of a Multistage Restriction Orifice?',
        answer:
          'A Multistage Restriction Orifice is used to drop high pressure across different stages.',
      },
      {
        id: 'multistage-standard',
        question:
          'Is any international standard available for designing the multistage restriction orifice?',
        answer: 'No — multistage restriction orifices are designed only to manufacturing standard.',
      },
      {
        id: 'ibr-certification',
        question: 'For which application is IBR Certification required?',
        answer:
          'In India, IBR Certification is mandatory for material used in all steam applications and boiler feed water applications.',
      },
      {
        id: 'other-certifications',
        question: 'Apart from IBR Certification, what other certifications are required?',
        answer:
          'For Hydrogen service (H2) and HIC + sour applications, NACE certification is required for the material.',
      },
      {
        id: 'calibrate-flow-elements',
        question: 'Is it possible to calibrate the Flow Elements?',
        answer:
          'Yes, it is possible to calibrate Flow Elements (Orifice, Nozzle & Venturi). Calibration is carried out at the Fluid Control Research Institute, Palghat, and IIT New Delhi.',
      },
      {
        id: 'hot-air-sealing-use',
        question: 'Where is the Exd Hot Air Sealing System used?',
        answer:
          'The crimping of PVC seals over LPG cylinder valves using hot air is done with the aid of the Hot Air Sealing System, in hazardous locations classified as Zone 1 & 2, Group IIA & IIB.',
      },
      {
        id: 'hot-air-sealing-benefits',
        question: 'What are the benefits of the Exd Hot Air Sealing System?',
        answer:
          'Quality and tamper-proof sealing; seal cost reduced compared with aluminium seals; reduced manpower cost through automated equipment; and maintenance cost cut down due to pre-engineering of the equipment.',
      },
      {
        id: 'hasm-types',
        question: 'What are the types of Hot Air Sealing Mechanisms (HASM)?',
        answer:
          'There are 4 models of automated HASM available, to suit various production rates. A portable, manually operated HASM model is also available for use at quality check points and near cylinder loading points.',
      },
      {
        id: 'hasm-design-inputs',
        question: 'What inputs are required for designing the Hot Air Sealing Mechanisms (HASM)?',
        answer:
          'The inputs required for designing the HASM are LPG cylinder dimensions and details, valve dimensions, conveyor speed, and production rate.',
      },
      {
        id: 'hasm-temperature-monitoring',
        question: 'What temperature monitoring devices are used in the HASM?',
        answer:
          'In the automatic system, 1 RTD + temperature controller and 1 thermostat are used as redundant temperature control. In the portable system, 1 thermostat and 1 thermal fuse are used as redundant control.',
      },
      {
        id: 'hasm-counter',
        question:
          'What facility is available in the HASM for monitoring the count of sealed LPG cylinders?',
        answer:
          'A totalizing counter is provided in automated systems to count sealed cylinders that exit the machine.',
      },
      {
        id: 'hasm-cylinder-sizes',
        question: 'Can varying sizes of LPG cylinders be sealed by the same HASM?',
        answer:
          'Yes — this is possible by means of a common sealing system with a mix & match feature.',
      },
    ],
  },
];
