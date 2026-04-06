'use server';

/**
 * API Route für Kontaktformular
 *
 * POST /api/contact
 * - Validiert Formular-Daten
 * - Prüft Rate Limiting und Honeypot
 * - Sendet Daten an n8n Webhook (ersetzt direkten E-Mail-Versand)
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkRateLimit } from '@/lib/email/rate-limiter';
import { validateCSRFToken } from '@/lib/csrf/token';

/**
 * Validierung und Sanitisierung
 * Importiert aus der bestehenden Kontaktformular-Validierung
 */
import { validateForm, sanitizeInput } from '@/sections/contact_section/validation';
import type { FormData } from '@/sections/contact_section/types';

/**
 * Sanitisiert E-Mail-Header um Injection-Angriffe zu verhindern
 * Entfernt CRLF und Tab-Zeichen (Header Injection Prevention)
 */
function sanitizeEmailHeader(value: string): string {
  return value.replace(/[\r\n\t]/g, '').trim();
}

/**
 * Extrahiert IP-Adresse aus Request (Vercel-optimiert)
 * Priorisiert Vercel-spezifische Header die nicht gefälscht werden können
 */
function getClientIP(request: NextRequest): string {
  // PRIORITÄT 1: Vercel-spezifischer Header (NICHT fälschbar)
  // Dieser Header wird von Vercel's Edge Network gesetzt
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  // PRIORITÄT 2: x-forwarded-for (nur erste IP, von Vercel gesetzt)
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // Nur die ERSTE IP ist vertrauenswürdig (vom Load Balancer)
    const ips = forwardedFor.split(',').map(ip => ip.trim());
    return ips[0];
  }

  // PRIORITÄT 3: Cloudflare IP (falls Cloudflare vor Vercel)
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback (nur Development)
  if (process.env.NODE_ENV === 'development') {
    console.warn('[Security] Keine vertrauenswürdige IP gefunden - verwende Fallback 127.0.0.1');
    return '127.0.0.1';
  }

  // Production: unknown
  return 'unknown';
}

/**
 * Erstellt einen eindeutigen Fingerprint aus IP + User-Agent
 * Erschwert Rate-Limit-Bypass durch IP-Rotation
 */
function getClientFingerprint(request: NextRequest): string {
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || 'unknown';

  // Simple Fingerprint: IP + erste 50 Zeichen des User-Agents
  return `${ip}:${userAgent.substring(0, 50)}`;
}

/**
 * POST /api/contact
 * Verarbeitet Kontaktformular-Submissions
 */
export async function POST(request: NextRequest) {
  try {
    // 1. IP-Adresse und Fingerprint für Rate Limiting abrufen
    const clientIP = getClientIP(request);
    const clientFingerprint = getClientFingerprint(request);

    if (process.env.NODE_ENV === 'development') {
      console.log('[Contact API] Neue Anfrage von IP:', clientIP);
    }

    // 2. Rate Limiting prüfen (mit Fingerprint statt nur IP)
    const rateLimitResult = checkRateLimit(clientFingerprint);
    if (!rateLimitResult.success) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[Contact API] Rate limit überschritten für IP: ${clientIP}`);
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
          resetTime: rateLimitResult.resetTime?.toISOString(),
        },
        {
          status: 429,
          headers: {
            'Retry-After': '60',
          },
        }
      );
    }

    // 3. Content-Type prüfen
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid Content-Type. Expected application/json',
        },
        { status: 400 }
      );
    }

    // 4. Request Body parsen
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: 'Ungültiges JSON-Format',
        },
        { status: 400 }
      );
    }

    // 5. CSRF Token Validierung
    const csrfToken = body.csrf_token as string | undefined;

    if (!csrfToken) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Contact API] Missing CSRF token from IP:', clientIP);
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Sicherheitsvalidierung fehlgeschlagen. Bitte laden Sie die Seite neu.',
        },
        { status: 403 }
      );
    }

    // Validate CSRF token signature and expiry (1 hour)
    const isValidToken = validateCSRFToken(csrfToken, 3600000);

    if (!isValidToken) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Contact API] Invalid or expired CSRF token from IP:', clientIP);
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Sicherheitstoken ungültig oder abgelaufen. Bitte laden Sie die Seite neu.',
        },
        { status: 403 }
      );
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[Contact API] CSRF token validated successfully');
    }

    // 6. Honeypot prüfen (Silent Fail)
    // Das "company_info"-Feld ist für Menschen unsichtbar
    // Bots füllen es automatisch aus
    const honeypotField = body.company_info as string | undefined;
    if (honeypotField && honeypotField.trim() !== '') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Contact API] Honeypot (Feld) ausgelöst von IP:', clientIP);
      }

      // Täusche Erfolg vor, um Bot nicht zu enthüllen
      return NextResponse.json(
        {
          success: true,
          message: 'Nachricht erfolgreich gesendet',
        },
        { status: 200 }
      );
    }

    // 5b. Zeit-basiertes Honeypot prüfen
    // Menschen brauchen mindestens 3 Sekunden zum Ausfüllen
    // Bots sind schneller
    const formStartTime = body.formStartTime as number | undefined;
    if (formStartTime) {
      const now = Date.now();
      const timeDiff = now - formStartTime;

      if (timeDiff < 3000) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('[Contact API] Honeypot (Zeit) ausgelöst von IP:', clientIP, 'Zeit:', timeDiff, 'ms');
        }

        // Silent fail - täusche Erfolg vor
        return NextResponse.json(
          {
            success: true,
            message: 'Nachricht erfolgreich gesendet',
          },
          { status: 200 }
        );
      }
    }

    // 6. Server-seitige Validierung
    // NIEMALS nur Client-Validierung vertrauen!
    const formData: FormData = {
      firstName: (body.firstName as string) || '',
      lastName: (body.lastName as string) || '',
      email: (body.email as string) || '',
      message: (body.message as string) || '',
      privacyAccepted: (body.privacyAccepted as boolean) || false,
    };

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[Contact API] Validierungsfehler:', validationErrors);
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Validierungsfehler',
          details: validationErrors,
        },
        { status: 400 }
      );
    }

    // 7. Eingaben sanitisieren (zusätzlicher Schutz)
    const sanitizedData = {
      firstName: sanitizeEmailHeader(sanitizeInput(formData.firstName)),
      lastName: sanitizeEmailHeader(sanitizeInput(formData.lastName)),
      email: sanitizeEmailHeader(sanitizeInput(formData.email)),
      message: sanitizeInput(formData.message), // Nachricht darf Newlines behalten
    };

    // 8. Daten an n8n Webhook senden
    // n8n kümmert sich um beide E-Mails (an VENDORi + Bestätigung an Absender)
    try {
      const webhookUrl = process.env.N8N_WEBHOOK_URL;
      const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

      if (!webhookUrl) {
        throw new Error('N8N_WEBHOOK_URL ist nicht konfiguriert');
      }

      // Webhook-Secret ist VERPFLICHTEND für Produktionssicherheit
      if (!webhookSecret) {
        throw new Error('N8N_WEBHOOK_SECRET ist nicht konfiguriert - Webhook-Secret ist verpflichtend');
      }

      // Timeout-Controller für Webhook (10 Sekunden)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Webhook Secret für Authentifizierung (verpflichtend)
            'VENDORi-Website-Secret': webhookSecret,
          },
          body: JSON.stringify({
            body: sanitizedData,
          }),
          signal: controller.signal, // Timeout Signal
        });

        clearTimeout(timeoutId);

        if (!webhookResponse.ok) {
          const errorText = await webhookResponse.text();
          throw new Error(
            `Webhook fehlgeschlagen (${webhookResponse.status}): ${errorText}`
          );
        }

        const webhookResult = await webhookResponse.json();

        if (process.env.NODE_ENV === 'development') {
          console.log('[Contact API] n8n Webhook Response:', webhookResult);
        }
      } catch (error) {
        clearTimeout(timeoutId);

        // Spezielle Behandlung für Timeout-Fehler
        if (error instanceof Error && error.name === 'AbortError') {
          if (process.env.NODE_ENV === 'development') {
            console.error('[Contact API] Webhook timeout exceeded');
          }
          return NextResponse.json(
            {
              success: false,
              error: 'Anfrage dauerte zu lange. Bitte versuchen Sie es erneut.',
            },
            { status: 504 }
          );
        }

        throw error; // Re-throw für outer catch
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('[Contact API] Fehler beim n8n Webhook-Aufruf:', error);
      }

      return NextResponse.json(
        {
          success: false,
          error:
            process.env.NODE_ENV === 'development'
              ? `Webhook fehlgeschlagen: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`
              : 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
        },
        { status: 500 }
      );
    }

    // 9. Erfolg zurückgeben
    if (process.env.NODE_ENV === 'development') {
      console.log('[Contact API] Erfolgreich an n8n gesendet:', {
        name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        email: sanitizedData.email,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Nachricht erfolgreich gesendet',
      },
      { status: 200 }
    );
  } catch (error) {
    // Unerwarteter Fehler
    if (process.env.NODE_ENV === 'development') {
      console.error('[Contact API] Unerwarteter Fehler:', error);
    }

    return NextResponse.json(
      {
        success: false,
        error:
          process.env.NODE_ENV === 'development'
            ? `Interner Serverfehler: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`
            : 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Blockiert GET-Requests (nur POST erlaubt)
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    {
      status: 405,
      headers: { 'Allow': 'POST' }, // RFC 2616 konform
    }
  );
}

/**
 * PUT /api/contact
 * Blockiert PUT-Requests (nur POST erlaubt)
 */
export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    {
      status: 405,
      headers: { 'Allow': 'POST' },
    }
  );
}

/**
 * DELETE /api/contact
 * Blockiert DELETE-Requests (nur POST erlaubt)
 */
export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    {
      status: 405,
      headers: { 'Allow': 'POST' },
    }
  );
}

/**
 * PATCH /api/contact
 * Blockiert PATCH-Requests (nur POST erlaubt)
 */
export async function PATCH() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    {
      status: 405,
      headers: { 'Allow': 'POST' },
    }
  );
}
