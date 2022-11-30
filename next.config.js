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
  images: {
    domains: ['rsquare2014.com'],
  },
  env: {
    MYAPI: "http://localhost:4000/api/v1/"
    // MYAPI: "https://nodejs-ecommerce-web-api.herokuapp.com/api/v1/"
  },
}

module.exports = nextConfig
