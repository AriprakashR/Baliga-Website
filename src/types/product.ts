export interface CatalogProduct {
  id: string;
  slug: string;
  name: string;
  category: string; // category slug, matches CATEGORIES in data/categories.ts
  description: string;
  shortSpecs: string[]; // 2-4 short bullets shown on the card
  detailedSpecs: Record<string, string>; // key/value spec table for the detail view
  exZone: string[]; // e.g. ['Zone 1', 'Zone 21']
  ipRating: string; // e.g. 'IP65'
  certifications: string[]; // e.g. ['ATEX', 'IECEx', 'CCOE/PESO', 'BIS']
  images: string[]; // paths under /public
  datasheetUrl?: string; // path under /public/datasheets, when available
}
