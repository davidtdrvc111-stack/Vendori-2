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

/**
 * Validierung und Sanitisierung
 * Importiert aus der bestehenden Kontaktformular-Validierung
 */
import { validateForm, sanitizeInput } from '@/sections/contact_section/validation';
import type { FormData } from '@/sections/contact_section/types';

/**
 * Sanitisiert E-Mail-Header um Injection-Angriffe zu verhindern
 */
function sanitizeEmailHeader(value: string): string {
  return value.replace(/[\r\n]/g, '').trim();
}

/**
 * Extrahiert IP-Adresse aus Request
 * Berücksichtigt Proxy-Header (x-forwarded-for, x-real-ip)
 */
function getClientIP(request: NextRequest): string {
  // Vercel/Cloudflare forwarded IP
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // x-forwarded-for kann mehrere IPs enthalten (client, proxy1, proxy2, ...)
    // Die erste IP ist die Client-IP
    return forwardedFor.split(',')[0].trim();
  }

  // Alternative Headers
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  // Fallback (bei lokalem Development)
  return 'unknown';
}

/**
 * POST /api/contact
 * Verarbeitet Kontaktformular-Submissions
 */
export async function POST(request: NextRequest) {
  try {
    // 1. IP-Adresse für Rate Limiting abrufen
    const clientIP = getClientIP(request);

    if (process.env.NODE_ENV === 'development') {
      console.log('[Contact API] Neue Anfrage von IP:', clientIP);
    }

    // 2. Rate Limiting prüfen
    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.success) {
      console.warn(`[Contact API] Rate limit überschritten für IP: ${clientIP}`);

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
    } catch (_error) {
      return NextResponse.json(
        {
          success: false,
          error: 'Ungültiges JSON-Format',
        },
        { status: 400 }
      );
    }

    // 5. Honeypot prüfen (Silent Fail)
    // Das "website"-Feld ist für Menschen unsichtbar
    // Bots füllen es automatisch aus
    const websiteField = body.website as string | undefined;
    if (websiteField && websiteField.trim() !== '') {
      console.warn('[Contact API] Honeypot ausgelöst von IP:', clientIP);

      // Täusche Erfolg vor, um Bot nicht zu enthüllen
      return NextResponse.json(
        {
          success: true,
          message: 'Nachricht erfolgreich gesendet',
        },
        { status: 200 }
      );
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

      if (!webhookUrl) {
        throw new Error('N8N_WEBHOOK_URL ist nicht konfiguriert');
      }

      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Optional: Webhook Secret für zusätzliche Sicherheit
          ...(process.env.N8N_WEBHOOK_SECRET && {
            'Vendori.eu-Webhook-Secret': process.env.N8N_WEBHOOK_SECRET,
          }),
        },
        body: JSON.stringify({
          body: sanitizedData,
        }),
      });

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
      console.error('[Contact API] Fehler beim n8n Webhook-Aufruf:', error);

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
    console.error('[Contact API] Unerwarteter Fehler:', error);

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
 * Gibt Informationen über die API zurück (nur in Development)
 */
export async function GET() {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json({
      message: 'Contact Form API',
      methods: ['POST'],
      endpoint: '/api/contact',
      version: '1.0.0',
    });
  }

  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
