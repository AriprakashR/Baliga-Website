// Document descriptions sourced from https://baliga.com/shows/technical_info.
// The PDFs themselves are hosted locally under public/docs/technical-info/
// (mirrored from baliga.com) rather than linking out to the old site — pass
// `href` through withBasePath() when rendering, same as other public/ assets.

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
    href: '/docs/technical-info/overview-of-is-iec-standards.pdf',
  },
  {
    id: 'general-technical-info',
    title: 'General Technical Info',
    description:
      'Explosion fundamentals, classification of hazardous materials and flammable liquids, types of protection, IP protection, equipment selection, and maintenance guidance for Ex areas.',
    href: '/docs/technical-info/general-technical-info.pdf',
  },
  {
    id: 'lighting-technical-info',
    title: 'Lighting Technical Info',
    description:
      'Lighting terminology, lamp characteristics and efficiency, lighting design and calculations, and recommended illuminance values by industry per IES.',
    href: '/docs/technical-info/lighting-technical-info.pdf',
  },
  {
    id: 'junction-boxes-technical-info',
    title: 'Junction Boxes Technical Info',
    description:
      'Terminal selection chart, gland-to-terminal distance, clip-on terminal sizes, cable sizing, and anti-vibration terminal blocks.',
    href: '/docs/technical-info/junction-boxes-technical-info.pdf',
  },
  {
    id: 'control-station-technical-info',
    title: 'Control Station Technical Info',
    description:
      'General description and technical information for control elements, actuators, indicating lamps, control switches, and ammeters.',
    href: '/docs/technical-info/control-station-technical-info.pdf',
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
