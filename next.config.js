/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: 'edge',
  images: {
    domains: process.env.IMAGE_HOST.split(','),
  },
};

module.exports = nextConfig;
