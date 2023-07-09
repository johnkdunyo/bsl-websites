/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      'res.cloudinary.com',
    ]
  },
  transpilePackages: ["shared-components"]
}

module.exports = nextConfig