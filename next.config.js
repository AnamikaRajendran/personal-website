/* eslint-env node */

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'personal-website'; // <-- change this to your actual repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static export
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,

  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },

  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',

  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      rule.include = undefined;
    });

    return config;
  },
};

module.exports = nextConfig;