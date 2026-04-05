import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Security Middleware
 *
 * Implements:
 * - Nonce-based Content Security Policy (CSP) for inline scripts
 * - Security headers (HSTS, X-Frame-Options, etc.)
 * - CSP violation reporting ready
 */
export function middleware(request: NextRequest) {
  // Generate cryptographically secure nonce for CSP
  // Use Web Crypto API (Edge Runtime compatible)
  const nonce = crypto.randomUUID().replace(/-/g, '');

  // Create response
  const response = NextResponse.next();

  // Set nonce header for use in components
  response.headers.set('x-nonce', nonce);

  // Content Security Policy with nonce support
  const cspHeader = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'", // Tailwind requires unsafe-inline
    "img-src 'self' data: blob: https://images.unsplash.com",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests",
    // Additional CSP directives for A+ security rating
    "worker-src 'self'",
    "manifest-src 'self'",
    "media-src 'none'",
    "child-src 'none'",
  ].join('; ');

  response.headers.set('Content-Security-Policy', cspHeader);

  // Additional Security Headers (from next.config.js)
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), interest-cohort=()');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');

  // Modern Cross-Origin Policies
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');

  // Remove server header to minimize information disclosure
  response.headers.delete('Server');

  // Cache-Control Headers für bessere Performance & bfcache
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Static Assets (bereits durch matcher.config ausgeschlossen, aber zur Sicherheit)
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|woff2|woff|ttf|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // HTML Pages & Dynamic Routes
  else if (!pathname.startsWith('/_next/') && !pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (static files)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.webp$).*)',
  ],
};
