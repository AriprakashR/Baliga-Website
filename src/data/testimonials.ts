// Placeholder testimonial content — swap in real, consented customer quotes
// before launch. No real customer or company names are used here.

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'The flameproof enclosures we ordered arrived exactly to spec, and the application engineering team caught a hazardous-area classification issue before it became a site problem.',
    name: 'Plant Engineering Lead',
    role: 'Oil & Gas, Western India',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote:
      'Certification paperwork was complete and accurate on first delivery — no back-and-forth needed for our export documentation.',
    name: 'Procurement Manager',
    role: 'EPC Contractor',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote:
      'Responsive support when we needed a fast turnaround on a panel replacement. Communication throughout was clear.',
    name: 'Maintenance Supervisor',
    role: 'Chemical Processing',
    rating: 4,
  },
];
