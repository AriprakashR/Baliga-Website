export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string; // category slug, matches app/products/[category]
  image: string; // path under /public, e.g. "/products/valves.jpg"
  shortDescription?: string;
  featured?: boolean;
}
