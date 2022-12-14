/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    disable: !isProd
  }
}

const buildConfig = () => {
  const plugins = [withPWA]
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  })
  return config
}

module.exports = buildConfig
