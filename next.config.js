// @ts-check
const path = require('path')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  env: {
    APP_ENV: 'production'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: 'www.freepngimg.com'
        // port: '443',
        // pathname: '/thumb/halloween/*'
      }
    ]
  },
  experimental: {
    // nextScriptWorkers: true,
  }
}

module.exports = nextConfig
