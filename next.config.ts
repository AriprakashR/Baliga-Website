import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = 'Baliga-Website'; // Github Repository Name

const nextConfig: NextConfig = {
  output: 'export', // Enables static export (generates an 'out' folder)
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization engine
  },
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
};

export default nextConfig;
