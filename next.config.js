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

  // Webpack Bundle Optimization - Aggressive code splitting
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Client-side bundle optimization
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            // Separate framer-motion into its own chunk
            framerMotion: {
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              name: 'framer-motion',
              priority: 30,
              reuseExistingChunk: true,
            },
            // Separate lucide-react into its own chunk
            lucide: {
              test: /[\\/]node_modules[\\/](lucide-react)[\\/]/,
              name: 'lucide',
              priority: 30,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },

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
  // NOTE: Security headers (including CSP) are now handled in middleware.ts
  // This provides better control over nonce generation for CSP compliance
  // The middleware implements:
  // - Nonce-based CSP for inline scripts (JSON-LD)
  // - HSTS, X-Frame-Options, and all OWASP recommended headers
  // - Modern Cross-Origin policies (COEP, COOP, CORP)
}

module.exports = nextConfig
