/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  env: {
    MYAPI: "https://nodejs-ecommerce-web-api.herokuapp.com/api/v1/"
  },
}

module.exports = nextConfig
