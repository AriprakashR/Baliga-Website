// Converts a client-supplied product Excel sheet into src/data/products.json.
//
// Usage:
//   node scripts/convert-products.mjs <path-to-excel-file> [sheet-name]
//
// Expected columns (case-insensitive header row), see scripts/product-template.csv:
//   id, slug, name, category, description, shortSpecs, exZone, ipRating,
//   certifications, images, datasheetUrl, and any number of "Spec: <label>"
//   columns (e.g. "Spec: Protection Type") which become detailedSpecs entries.
//
// - shortSpecs / exZone / certifications / images: semicolon-separated lists.
// - category must match a slug in src/data/categories.ts (warned, not blocked, if not).
// - images / datasheetUrl: bare filenames are prefixed with /products/ and
//   /datasheets/ respectively; values already starting with "/" are kept as-is.
// - slug is auto-generated from name when left blank.
// - Rows with no name are skipped.
//
// This is a full replace: the output overwrites products.json entirely.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import xlsx from 'xlsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, '../src/data/products.json');
const CATEGORIES_PATH = path.join(__dirname, '../src/data/categories.ts');

const [, , inputPath, sheetName] = process.argv;

if (!inputPath) {
  console.error('Usage: node scripts/convert-products.mjs <path-to-excel-file> [sheet-name]');
  process.exit(1);
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitList(value) {
  if (!value) return [];
  return String(value)
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
}

function prefixPath(value, dir) {
  const v = value.trim();
  return v.startsWith('/') ? v : `/${dir}/${v}`;
}

function getKnownCategorySlugs() {
  const src = readFileSync(CATEGORIES_PATH, 'utf8');
  return [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
}

function normalizeHeaderKey(key) {
  return String(key).trim().toLowerCase();
}

const workbook = xlsx.readFile(inputPath);
const targetSheet = sheetName || workbook.SheetNames[0];
const sheet = workbook.Sheets[targetSheet];
if (!sheet) {
  console.error(`Sheet "${targetSheet}" not found. Available sheets: ${workbook.SheetNames.join(', ')}`);
  process.exit(1);
}

const rows = xlsx.utils.sheet_to_json(sheet, { defval: '' });
const knownCategories = getKnownCategorySlugs();

const products = [];
const unknownCategories = new Set();

for (const rawRow of rows) {
  const row = {};
  for (const [key, value] of Object.entries(rawRow)) {
    row[normalizeHeaderKey(key)] = value;
  }

  const name = String(row.name || '').trim();
  if (!name) continue; // skip blank rows

  const slug = String(row.slug || '').trim() || slugify(name);
  const id = String(row.id || '').trim() || slug;
  const category = String(row.category || '').trim();
  if (category && !knownCategories.includes(category)) {
    unknownCategories.add(category);
  }

  const detailedSpecs = {};
  for (const [key, value] of Object.entries(rawRow)) {
    const normalized = String(key).trim();
    if (/^spec:/i.test(normalized) && String(value).trim()) {
      const label = normalized.replace(/^spec:/i, '').trim();
      detailedSpecs[label] = String(value).trim();
    }
  }

  products.push({
    id,
    slug,
    name,
    category,
    description: String(row.description || '').trim(),
    shortSpecs: splitList(row.shortspecs),
    detailedSpecs,
    exZone: splitList(row.exzone),
    ipRating: String(row.iprating || '').trim(),
    certifications: splitList(row.certifications),
    images: splitList(row.images).map((v) => prefixPath(v, 'products')),
    ...(String(row.datasheeturl || '').trim()
      ? { datasheetUrl: prefixPath(row.datasheeturl, 'datasheets') }
      : {}),
  });
}

if (unknownCategories.size > 0) {
  console.warn(
    `Warning: ${unknownCategories.size} category slug(s) not found in categories.ts: ${[...unknownCategories].join(', ')}`
  );
}

writeFileSync(OUTPUT_PATH, JSON.stringify(products, null, 2) + '\n');
console.log(`Wrote ${products.length} products to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
