/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
      },
   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  module.exports = nextConfig