/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  poweredByHeader: false,
  compress: true,

  // Production optimizations
  output: 'standalone', // Smaller deployment bundles
  productionBrowserSourceMaps: false, // No source maps in production

  // Performance Optimierung
  experimental: {
    optimizeCss: true, // CSS optimization
  },

  // Compiler Optimierung - Moderne Browser nur
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.* in production
  },

  // Bildoptimierung abgeschaltet (22.11.2026): die Seite nutzt next/image nicht, alle Bilder
  // liegen fertig in public/. Damit entfällt der Endpunkt /_next/image samt sharp als Angriffsfläche.
  images: {
    unoptimized: true,
  },

  // Sicherheitsheader inkl. CSP mit Nonce: src/middleware.ts
}

module.exports = nextConfig
