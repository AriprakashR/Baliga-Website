// Document descriptions sourced from https://baliga.com/shows/technical_info.
// That page itself is a library of downloadable PDFs rather than inline
// data — the links below point to the original documents hosted on
// baliga.com. Swap `href` for a local /docs/*.pdf path if copies are added
// to the public/ directory.

export interface TechnicalDocument {
  id: string;
  title: string;
  description: string;
  href: string;
}

export const DOCUMENT_LIBRARY: TechnicalDocument[] = [
  {
    id: 'is-iec-standards',
    title: 'Overview of IS / IEC Standards',
    description:
      'International and Indian standards referenced across our hazardous-area equipment range.',
    href: 'https://www.baliga.com/download/Overview_of_IS%20stds.pdf',
  },
  {
    id: 'general-technical-info',
    title: 'General Technical Info',
    description:
      'Explosion fundamentals, classification of hazardous materials and flammable liquids, types of protection, IP protection, equipment selection, and maintenance guidance for Ex areas.',
    href: 'https://www.baliga.com/download/General_technical_info.pdf',
  },
  {
    id: 'lighting-technical-info',
    title: 'Lighting Technical Info',
    description:
      'Lighting terminology, lamp characteristics and efficiency, lighting design and calculations, and recommended illuminance values by industry per IES.',
    href: 'https://www.baliga.com/download/Lighting_Technical_Info.pdf',
  },
  {
    id: 'junction-boxes-technical-info',
    title: 'Junction Boxes Technical Info',
    description:
      'Terminal selection chart, gland-to-terminal distance, clip-on terminal sizes, cable sizing, and anti-vibration terminal blocks.',
    href: 'https://www.baliga.com/download/Junction_BoxesTechnical_info.pdf',
  },
  {
    id: 'control-station-technical-info',
    title: 'Control Station Technical Info',
    description:
      'General description and technical information for control elements, actuators, indicating lamps, control switches, and ammeters.',
    href: 'https://www.baliga.com/download/control_station_technical_info.pdf',
  },
];

export interface TechnicalSection {
  id: string;
  navLabel: string;
}

export const TECHNICAL_SECTIONS: TechnicalSection[] = [
  { id: 'document-library', navLabel: 'Documentation Library' },
  { id: 'hazardous-area', navLabel: 'Hazardous Area Classification' },
  { id: 'ip-chart', navLabel: 'Ingress Protection (IP) Chart' },
  { id: 'temperature', navLabel: 'Temperature Code Ratings' },
  { id: 'enclosure-types', navLabel: 'Enclosure Types & Standards' },
];
