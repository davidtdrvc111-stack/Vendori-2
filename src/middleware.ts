import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Sicherheits-Middleware (liegt in src/, weil die App unter src/ liegt – im Projekt-Root
 * wurde sie von Next.js nicht geladen; korrigiert 22.11.2026).
 *
 * - Content Security Policy mit Nonce pro Anfrage. Die CSP wird auch als Request-Header
 *   weitergegeben: Next.js liest daraus die Nonce und setzt sie an seine eigenen Skripte.
 *   Voraussetzung: dynamisches Rendering (siehe src/app/layout.tsx).
 * - 'strict-dynamic': von vertrauenswürdigen Skripten nachgeladene Skripte (Google Analytics,
 *   Microsoft Clarity – nur nach Einwilligung) sind erlaubt, fremde Inline-Skripte nicht.
 * - weitere Sicherheitsheader (HSTS, Clickjacking-, MIME- und Referrer-Schutz).
 */
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const isDev = process.env.NODE_ENV === 'development';

  const csp = [
    "default-src 'self'",
    // https: und 'unsafe-inline' greifen nur in alten Browsern ohne 'strict-dynamic'-Unterstützung
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com",
    "font-src 'self'",
    "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    ...(isDev ? [] : ['upgrade-insecure-requests']),
  ].join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set('Content-Security-Policy', csp);
  // HSTS bewusst ohne includeSubDomains/preload: würde alle Subdomains für die gesamte Laufzeit
  // auf HTTPS zwingen. Erweitern erst, wenn alle Subdomains geprüft sind.
  response.headers.set('Strict-Transport-Security', 'max-age=31536000');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
  );
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');

  return response;
}

export const config = {
  matcher: [
    {
      // alle Seiten und die API; ausgenommen statische Dateien und Prefetch-Anfragen
      source:
        '/((?!_next/static|_next/image|favicon|images/|fonts/|robots.txt|sitemap.xml|llms.txt|.*\\.(?:svg|png|jpg|jpeg|webp|avif|woff2|ico)$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
