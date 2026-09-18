// GitHub Pages serves this site under /Baliga-Website (see next.config.ts).
// `next/link` and `next/router` apply that basePath automatically, but
// `next/image` `src` strings and any other direct public/ references do not
// — they need this prefix added manually per the Next.js docs.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
