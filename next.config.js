/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
  },
  images: {
    domains: ['res.cloudinary.com', "platform-lookaside.fbsbx.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
    ]
  }
}

module.exports = nextConfig
