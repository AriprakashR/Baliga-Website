// Placeholder catalog data — illustrative specs, ratings, and certification
// codes for scaffolding the catalog UI. NOT verified against actual Baliga
// datasheets or current certificates. Replace via `npm run products:convert`
// once real data (and datasheets under /public/datasheets) is available.
//
// Images are real product thumbnails downloaded from baliga.com (the live
// site) as a temporary stand-in — they're small (95x95 source) placeholders
// until higher-resolution photography is available.
//
// Source of truth is products.json — see scripts/convert-products.mjs for
// how to regenerate it from a client-supplied Excel sheet.
import type { CatalogProduct } from '@/types/product';
import productsData from './products.json';

export const PRODUCTS: CatalogProduct[] = productsData as unknown as CatalogProduct[];
