// Shared IEC/ATEX reference tables, sourced from https://baliga.com/shows/faq
// and reused verbatim across the FAQ and Technical Info pages.

export interface DataTable {
  headers: string[];
  rows: string[][];
}

export const ZONE_DIVISION_TABLE: DataTable = {
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
};

export const IP_RATING_TABLE: DataTable = {
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
};

export const NEMA_TABLE: DataTable = {
  headers: ['NEMA rating', 'IP equivalent'],
  rows: [
    ['NEMA 3', 'IP 54'],
    ['NEMA 4', 'IP 55'],
    ['NEMA 4X', 'IP 56'],
    ['NEMA 6', 'IP 67'],
    ['NEMA 7, 9', 'Ex equipment'],
  ],
};

export const TEMPERATURE_CLASS_TABLE: DataTable = {
  headers: ['Temperature class', 'Maximum surface temperature'],
  rows: [
    ['T1', '450°C'],
    ['T2', '300°C'],
    ['T3', '200°C'],
    ['T4', '135°C'],
    ['T5', '100°C'],
    ['T6', '85°C'],
  ],
};

// General IEC 60079 reference — not page-specific content, standard
// industry definitions for the common types of explosion protection.
export const ENCLOSURE_TYPES_TABLE: DataTable = {
  headers: ['Marking', 'Type of protection', 'Standard', 'Principle', 'Typical zone'],
  rows: [
    [
      'Ex d',
      'Flameproof enclosure',
      'IEC 60079-1',
      'Enclosure withstands an internal explosion and prevents it igniting the surrounding atmosphere.',
      'Zone 1, 2',
    ],
    [
      'Ex e',
      'Increased safety',
      'IEC 60079-7',
      'Extra constructional measures reduce the risk of excessive temperatures, arcs, or sparks in normal operation.',
      'Zone 1, 2',
    ],
    [
      'Ex ia / Ex ib',
      'Intrinsic safety',
      'IEC 60079-11',
      'Circuit energy is limited so sparks or heating effects cannot ignite the atmosphere.',
      'ia: Zone 0, 1, 2 · ib: Zone 1, 2',
    ],
    [
      'Ex p',
      'Pressurization',
      'IEC 60079-2',
      'A protective gas is maintained inside the enclosure above the pressure of the surrounding atmosphere.',
      'Zone 1, 2',
    ],
    [
      'Ex m',
      'Encapsulation',
      'IEC 60079-18',
      'Parts that could ignite an explosive atmosphere are embedded in a compound.',
      'Zone 1, 2',
    ],
    [
      'Ex o',
      'Oil immersion',
      'IEC 60079-6',
      'Electrical parts are immersed in oil so the atmosphere above or outside the liquid cannot be ignited.',
      'Zone 1, 2',
    ],
    [
      'Ex q',
      'Powder filling',
      'IEC 60079-5',
      'The enclosure is filled with a fine granular material to prevent ignition of a surrounding atmosphere.',
      'Zone 1, 2',
    ],
    [
      'Ex n',
      'Non-sparking',
      'IEC 60079-15',
      'Equipment is not capable, in normal operation, of igniting a surrounding explosive atmosphere.',
      'Zone 2 only',
    ],
    [
      'Ex t',
      'Protection by enclosure (dust)',
      'IEC 60079-31',
      'Enclosure prevents ingress of combustible dust, or limits accumulation and surface temperature to a safe level.',
      'Zone 21, 22',
    ],
  ],
};
