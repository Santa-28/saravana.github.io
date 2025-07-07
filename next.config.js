/**
 * @type {import('next').NextConfig}
 */

// const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  audio: {
    modules: ['mp3', 'aac', 'wav', 'ogg', 'm4a', 'flac'],
  },
  
  output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}


module.exports = {
  reactStrictMode: true,
};