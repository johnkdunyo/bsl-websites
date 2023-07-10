/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: ["shared-components"],
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
    ]
  }
}

module.exports = nextConfig