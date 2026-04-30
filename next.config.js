/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  async rewrites() {
    return [
      {
        source: '/shriram-codename-pudhiya',
        destination: '/',
      },
    ]
  },
}
module.exports = nextConfig
