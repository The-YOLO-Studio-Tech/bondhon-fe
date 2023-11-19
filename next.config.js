/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: process.env.IMAGE_HOST.split(','),
  },
  
};

module.exports = nextConfig;
