/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Production optimizations
  output: 'standalone', // Smaller deployment bundles
  productionBrowserSourceMaps: false, // No source maps in production

  // Performance Optimierung
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'], // Tree-shaking
    optimizeCss: true, // CSS optimization
  },

  // Modular Imports - Better tree-shaking
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      skipDefaultConversion: true,
    },
  },

  // Compiler Optimierung - Moderne Browser nur
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.* in production
  },

  // SWC Minifier ist bereits Standard in Next.js 14
  swcMinify: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "connect-src 'self'",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' mailto:",
            ].join('; ')
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
