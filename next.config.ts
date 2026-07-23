import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'Baliga-Website'; // Github Repository Name
const basePath = isGithubActions ? `/${repo}` : '';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export (generates an 'out' folder)
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization engine
  },
  basePath,
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  // next/image `src` strings and other public/ references aren't
  // basePath-aware automatically — expose it so components can prefix
  // those paths themselves (see src/lib/basePath.ts).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
