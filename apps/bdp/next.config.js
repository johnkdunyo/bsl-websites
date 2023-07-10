/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared-components", "tailwind-config"],
  output: "standalone",
  images: {
    domains: [
      'res.cloudinary.com',
    ]
  }
}

module.exports = nextConfig