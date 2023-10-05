/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: process.env.IMAGE_HOST.split(','),
  },
};

module.exports = nextConfig;
