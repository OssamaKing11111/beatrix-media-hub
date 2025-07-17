/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'images.pexels.com',
      'cdn.pixabay.com',
      'via.placeholder.com',
      'picsum.photos'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  },
  experimental: {
    // appDir is no longer needed in Next.js 15+
  },
};

module.exports = nextConfig;
