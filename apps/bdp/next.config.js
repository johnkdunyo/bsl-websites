/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared-components", "tailwind-config"],
  basePath: isProd ?  "/bdp" : undefined,
  assetPrefix : isProd ?  "/bdp" : undefined,
  output: "standalone",
  images: {
    domains: [
      'res.cloudinary.com',
    ]
  },
  transpilePackages: ["shared-components"]
}

module.exports = nextConfig