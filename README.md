# ⚡ Baliga Lighting

### The digital catalog for explosion-proof electrical equipment, engineered since 1960

Baliga Lighting is the corporate marketing and product-catalog website for **Baliga Industrial Corporation**, a manufacturer of ATEX & IECEx certified flameproof and explosion-proof electrical equipment for hazardous industrial environments — refineries, offshore platforms, petrochemical plants, and pharmaceutical facilities.

---

## About the Project

Heavy industry buyers researching flameproof lighting, control gear, or junction boxes need fast, specific answers: which Ex zone does this product cover, what's the IP rating, is it ATEX/IECEx/PESO certified, and how do I get a quote? Most industrial-equipment sites bury this behind slow, database-driven CMSs that are overkill for a catalog that changes a few times a year.

This project takes the opposite approach: a **fully static, content-as-data** website. Every product, category, industry, certification, event, and FAQ lives in a plain TypeScript/JSON file under `src/data/`— no CMS, no database, no backend to maintain or secure. The entire site is exported at build time to static HTML/CSS/JS and served for free from GitHub Pages, giving Baliga a fast, zero-hosting-cost, zero-maintenance web presence that's still easy for a non-developer to update (edit a data file, open a PR, done).

## Key Features

- 🔍 **Searchable Product Catalog** — filterable by category, Ex zone, IP rating, and certification, with both a compact catalog view and a full spec-sheet detail view per product.
- 📋 **Quote Request Modal** — visitors can request a quote for a specific product without leaving the catalog page.
- 🏭 **Industries Served** — dedicated sections mapping product lines to the sectors that use them (refineries, oil & gas, petrochemicals, pharma, aerospace, and more).
- 🤝 **Client & Reference Showcase** — a curated wall of 60+ marquee industrial clients (IOC, ONGC, Reliance, L&T, Siemens, ISRO, and others).
- 📜 **Certifications Library** — downloadable ATEX, IECEx, and ISO 9001:2015 certificates.
- 📖 **Technical Documentation Center** — a searchable document library of datasheets and standards references (IS/IEC overviews, junction box specs, lighting specs, etc.) organized by product line.
- 🗓️ **Events Timeline** — a visual history of trade shows and product launches (2006–2017) with a detail modal per event.
- 💼 **Careers Portal** — job listings with detail modals and an in-browser application flow.
- ⭐ **Customer Feedback & Testimonials** — a star-rating submission form backed by a testimonials grid.
- ❓ **FAQ Accordion** — searchable, expandable answers to common technical and commercial questions.
- ✉️ **Contact & Enquiry Form** — Formspree-powered enquiry form plus an embedded Google Map and a live chat widget (Tawk.to).
- 📱 **Fully Responsive** — tuned breakpoints for desktop, laptop (1024px), and tablet (768px) layouts across every page.
- ⚙️ **Spreadsheet-to-JSON Product Pipeline** — a Node script (`scripts/convert-products.mjs`) that converts a client-supplied Excel sheet directly into `src/data/products.json`, so non-developers can update the catalog from a spreadsheet.
- 🚀 **Zero-cost static hosting** — builds to a static `out/` export and auto-deploys to GitHub Pages via GitHub Actions on every push.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [lucide-react](https://lucide.dev/) |
| **Forms / Enquiries** | [Formspree](https://formspree.io/) (contact form backend) |
| **Live Chat** | [Tawk.to](https://www.tawk.to/) embedded widget |
| **Content Store** | Static `.ts` / `.json` files under `src/data/` (no database, no CMS) |
| **Product Data Tooling** | Node.js script + [SheetJS (`xlsx`)](https://www.npmjs.com/package/xlsx) for Excel → JSON conversion |
| **Hosting / CI-CD** | [GitHub Pages](https://pages.github.com/) + [GitHub Actions](https://github.com/features/actions) |
| **Linting** | ESLint 9 (`eslint-config-next`) |

## Project Structure

```
Baliga-Website/
├── .github/workflows/deploy.yml   # CI/CD: builds and deploys to GitHub Pages on push
├── public/                        # Static assets served as-is
│   ├── certifications/            # ATEX / IECEx / ISO 9001 certificate files
│   ├── clients/                   # Client/reference logos
│   ├── docs/technical-info/       # Technical PDF datasheets & standards
│   ├── events/                    # Trade show / event photography
│   ├── hero/                      # Homepage hero background panels
│   ├── industries/                # Industry illustration cards
│   └── products/                  # Product category & line images
├── scripts/
│   ├── convert-products.mjs       # Excel sheet → src/data/products.json converter
│   └── product-template.csv       # Expected spreadsheet column template
├── src/
│   ├── app/                       # Routes (Next.js App Router)
│   │   ├── page.tsx                    # Home
│   │   ├── about/page.tsx              # About / company roadmap
│   │   ├── products/page.tsx           # Product catalog
│   │   ├── industries/page.tsx         # Industries served + clients
│   │   ├── technical-info/page.tsx     # Technical document library
│   │   ├── events/page.tsx             # Events timeline
│   │   ├── careers/page.tsx            # Careers listings
│   │   ├── faq/page.tsx                # FAQ accordion
│   │   ├── feedback/page.tsx           # Testimonials + feedback form
│   │   ├── contact/page.tsx            # Contact form + map
│   │   ├── terms/page.tsx              # Terms of use
│   │   └── layout.tsx                  # Root layout (header, footer, chat widget)
│   ├── components/                # UI components, grouped by feature/page
│   │   ├── home/ · about/ · product/ · industries/
│   │   ├── careers/ · events/ · faq/ · feedback/ · technical/
│   │   ├── contact/ · layout/ · ui/
│   ├── data/                      # Content-as-data (the "CMS")
│   │   ├── products.ts / products.json   # Product catalog entries
│   │   ├── categories.ts                 # Product category taxonomy
│   │   ├── industries.ts                 # Industries served
│   │   ├── clients.json                  # Client/reference list
│   │   ├── careers.ts                    # Job openings
│   │   ├── events.ts / events.json       # Trade show / event history
│   │   ├── faq.ts                        # FAQ entries
│   │   ├── technicalInfo.ts / technicalTables.ts  # Technical docs & spec tables
│   │   └── testimonials.ts               # Customer testimonials
│   ├── lib/basePath.ts            # GitHub Pages basePath helper for asset URLs
│   └── types/product.ts           # Shared TypeScript types (CatalogProduct, etc.)
├── next.config.ts                 # Static export + GitHub Pages basePath config
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AriprakashR/Baliga-Website.git
cd Baliga-Website

# 2. Install dependencies
npm install
```

### Environment Variables

No `.env` file is required — the site is fully static with no server-side secrets. The only runtime flag is `GITHUB_ACTIONS`, which is set automatically by GitHub Actions during CI builds to enable the `/Baliga-Website` base path for GitHub Pages (see `next.config.ts`). For local development this is unset and the site runs at the root path.

> **Note:** the contact form (`src/components/contact/ContactForm.tsx`) posts to a [Formspree](https://formspree.io/) endpoint. Replace the placeholder `FORMSPREE_ENDPOINT` constant with your own form ID before deploying.

### Running Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site. Pages hot-reload as you edit files.

### Building for Production

```bash
npm run build
```

This generates a fully static site in the `out/` directory (via Next.js `output: 'export'`), ready to be served from any static host.

## Usage

Since this is a static marketing/catalog site rather than an API service, "usage" means updating content and navigating the site's sections:

| Route | Purpose |
|---|---|
| `/` | Home — hero carousel, product highlights, industries served, why-choose-us |
| `/about` | Company history, roadmap, and certifications |
| `/products` | Searchable/filterable product catalog with detail views and quote requests |
| `/industries` | Industries served + client reference wall |
| `/technical-info` | Technical document library (datasheets, standards) |
| `/events` | Trade show and product launch history |
| `/careers` | Job openings and application flow |
| `/faq` | Frequently asked questions |
| `/feedback` | Customer testimonials + feedback submission |
| `/contact` | Enquiry form and location map |
| `/terms` | Terms of use |

### Updating the Product Catalog from a Spreadsheet

```bash
node scripts/convert-products.mjs <path-to-excel-file> [sheet-name]
```

This reads a client-supplied Excel sheet (columns documented in `scripts/product-template.csv`) and regenerates `src/data/products.json` — no manual JSON editing required. Any other content type (industries, FAQs, careers, testimonials, etc.) is updated by editing its corresponding file directly under `src/data/`.

## Future Roadmap

- 🔎 Product-level SEO metadata and structured data (JSON-LD) for better search visibility on individual product pages
- 🌐 Multi-language support for international (Middle East / Southeast Asia) markets
- 📊 A lightweight admin UI for editing `src/data/*` content without touching code
- 🖼️ Replace placeholder industry/product illustrations with real product photography

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Built for Baliga Lighting — engineering safety since 1960.</p>
