/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    // allow token logos from well‑known domains; update as needed
    domains: ['assets.coingecko.com', 'raw.githubusercontent.com']
  }
};

module.exports = nextConfig;
