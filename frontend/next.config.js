const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },

  // Optional: Uncomment if needed
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
  // distDir: '.next',

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
