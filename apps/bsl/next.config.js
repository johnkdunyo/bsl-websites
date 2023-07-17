/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared-components", "tailwind-config"],
  basePath: isProd ?  "/bsl" : "",
  assetPrefix: isProd ?  "/bsl" : "",
  output: "standalone",
  images: {
    domains: [
      'res.cloudinary.com',
    ]
  },

  
}

module.exports = nextConfig