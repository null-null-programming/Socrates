/**
 * @type {import('next').NextConfig}
 */
const path = require('path');


const nextConfig = {
    output: 'export',
    images: {
      domains: ['firebasestorage.googleapis.com'],
      unoptimized: true, 
    },
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`



    webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname);
      return config;
    },
  
    distDir: 'out',
  }
   
  module.exports = nextConfig