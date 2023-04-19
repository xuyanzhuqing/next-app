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
  }
}

module.exports = nextConfig