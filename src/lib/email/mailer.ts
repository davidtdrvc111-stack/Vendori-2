/**
 * E-Mail-Service mit Nodemailer
 *
 * Konfiguriert SMTP-Verbindung und stellt Funktionen
 * zum Versenden von E-Mails bereit
 */

import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import {
  generateContactEmailToVendori,
  generateConfirmationEmail,
  type ContactFormData,
} from './templates';

/**
 * Validierung der erforderlichen Umgebungsvariablen
 */
const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'EMAIL_FROM',
  'EMAIL_TO',
] as const;

// Validierung nur im Server-Kontext durchführen
if (typeof window === 'undefined') {
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.error(
      '[Mailer] FEHLER: Fehlende Umgebungsvariablen:',
      missingVars.join(', ')
    );
    console.error(
      '[Mailer] Bitte konfigurieren Sie diese in .env.local'
    );
  }
}

/**
 * SMTP-Konfiguration aus Umgebungsvariablen
 */
const SMTP_HOST = process.env.SMTP_HOST || '';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const EMAIL_FROM = process.env.EMAIL_FROM || '';
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME || 'VENDORi GmbH';
const EMAIL_TO = process.env.EMAIL_TO || '';

/**
 * Nodemailer Transporter
 * Wird lazy initialisiert beim ersten E-Mail-Versand
 */
let transporter: Transporter | null = null;

/**
 * Erstellt und konfiguriert den Nodemailer Transporter
 */
function createTransporter(): Transporter {
  if (transporter) {
    return transporter;
  }

  try {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      pool: true, // Connection pooling für bessere Performance
      maxConnections: 5,
      maxMessages: 100,
      rateDelta: 1000, // 1 Sekunde zwischen E-Mails
      rateLimit: 5, // Max. 5 E-Mails pro rateDelta
    });

    // Verbindung in Entwicklung testen
    if (process.env.NODE_ENV === 'development') {
      transporter.verify((error, _success) => {
        if (error) {
          console.error('[Mailer] SMTP-Verbindung fehlgeschlagen:', error);
        } else {
          console.log('[Mailer] SMTP-Verbindung erfolgreich konfiguriert');
          console.log(`[Mailer] Host: ${SMTP_HOST}:${SMTP_PORT}`);
          console.log(`[Mailer] User: ${SMTP_USER}`);
          console.log(`[Mailer] Secure: ${SMTP_SECURE}`);
        }
      });
    }

    return transporter;
  } catch (error) {
    console.error('[Mailer] Fehler beim Erstellen des Transporters:', error);
    throw new Error('E-Mail-Service konnte nicht initialisiert werden');
  }
}

/**
 * Sanitisiert E-Mail-Header um Injection-Angriffe zu verhindern
 * Entfernt Newlines und andere gefährliche Zeichen
 */
function sanitizeEmailHeader(value: string): string {
  return value.replace(/[\r\n]/g, '').trim();
}

/**
 * Sendet E-Mail mit Kontaktanfrage an VENDORi
 *
 * @param data - Kontaktformular-Daten
 * @throws Error wenn E-Mail-Versand fehlschlägt
 *
 * @example
 * ```typescript
 * await sendContactEmailToVendori({
 *   firstName: 'Max',
 *   lastName: 'Mustermann',
 *   email: 'max@example.com',
 *   message: 'Hallo, ich habe eine Frage...'
 * });
 * ```
 */
export async function sendContactEmailToVendori(
  data: ContactFormData
): Promise<void> {
  try {
    const transport = createTransporter();
    const { html, text, subject } = generateContactEmailToVendori(data);

    // E-Mail-Header sanitisieren (Injection Prevention)
    const sanitizedEmail = sanitizeEmailHeader(data.email);
    const sanitizedSubject = sanitizeEmailHeader(subject);

    const mailOptions = {
      from: `"${EMAIL_FROM_NAME}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: sanitizedEmail,
      subject: sanitizedSubject,
      html,
      text,
    };

    const info = await transport.sendMail(mailOptions);

    if (process.env.NODE_ENV === 'development') {
      console.log('[Mailer] Kontaktanfrage gesendet:', {
        messageId: info.messageId,
        to: EMAIL_TO,
        from: sanitizedEmail,
      });
    }
  } catch (error) {
    console.error('[Mailer] Fehler beim Senden der Kontaktanfrage:', error);

    // In Produktion: Generischer Fehler
    // In Entwicklung: Detaillierter Fehler
    if (process.env.NODE_ENV === 'production') {
      throw new Error('E-Mail konnte nicht gesendet werden');
    } else {
      throw error;
    }
  }
}

/**
 * Sendet Bestätigungs-E-Mail an den Absender
 *
 * @param data - Kontaktformular-Daten
 * @throws Error wenn E-Mail-Versand fehlschlägt
 *
 * @example
 * ```typescript
 * await sendConfirmationEmailToSender({
 *   firstName: 'Max',
 *   lastName: 'Mustermann',
 *   email: 'max@example.com',
 *   message: '...'
 * });
 * ```
 */
export async function sendConfirmationEmailToSender(
  data: ContactFormData
): Promise<void> {
  try {
    const transport = createTransporter();
    const { html, text, subject } = generateConfirmationEmail(data);

    // E-Mail-Header sanitisieren
    const sanitizedEmail = sanitizeEmailHeader(data.email);
    const sanitizedSubject = sanitizeEmailHeader(subject);

    const mailOptions = {
      from: `"${EMAIL_FROM_NAME}" <${EMAIL_FROM}>`,
      to: sanitizedEmail,
      subject: sanitizedSubject,
      html,
      text,
    };

    const info = await transport.sendMail(mailOptions);

    if (process.env.NODE_ENV === 'development') {
      console.log('[Mailer] Bestätigung gesendet:', {
        messageId: info.messageId,
        to: sanitizedEmail,
      });
    }
  } catch (error) {
    console.error('[Mailer] Fehler beim Senden der Bestätigung:', error);

    // Bestätigungsfehler sollten nicht zum Scheitern der gesamten Operation führen
    // Log the error aber throw nicht (Kontaktanfrage wurde ja bereits gesendet)
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[Mailer] Bestätigungs-E-Mail konnte nicht gesendet werden, aber Kontaktanfrage wurde erfolgreich übermittelt'
      );
    }

    // Optional: In Produktion könnte man hier ein Monitoring-Event senden
  }
}

/**
 * Schließt die SMTP-Verbindung
 * Sollte beim Herunterfahren der Anwendung aufgerufen werden
 */
export async function closeMailer(): Promise<void> {
  if (transporter) {
    transporter.close();
    transporter = null;
    console.log('[Mailer] SMTP-Verbindung geschlossen');
  }
}
