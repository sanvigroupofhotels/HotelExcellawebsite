/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/orderfood',
          destination: 'https://hotelexcellafoodmenu.vercel.app/',
        },
        {
          source: '/orderfood/:path*',
          destination: 'https://hotelexcellafoodmenu.vercel.app/:path*',
        },
      ],
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
