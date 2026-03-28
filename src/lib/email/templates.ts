/**
 * E-Mail-Templates für Kontaktformular
 *
 * Beide Funktionen generieren HTML- und Plain-Text-Versionen
 * für bessere Kompatibilität und Zustellbarkeit
 */

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

/**
 * Template für Kontaktanfrage an VENDORi
 * Wird an info@vendori.eu (oder EMAIL_TO) gesendet
 */
export function generateContactEmailToVendori(data: ContactFormData): {
  html: string;
  text: string;
  subject: string;
} {
  const { firstName, lastName, email, message } = data;
  const fullName = `${firstName} ${lastName}`;

  const html = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neue Kontaktanfrage</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">
                Neue Kontaktanfrage
              </h1>
              <p style="margin: 10px 0 0 0; color: #cccccc; font-size: 14px;">
                Über das Kontaktformular auf vendori.de
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px 20px;">

              <!-- Kontaktdaten Section -->
              <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 18px; font-weight: 600; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                📋 Kontaktdaten
              </h2>

              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                    <strong style="color: #555555; font-size: 14px; display: inline-block; width: 100px;">Name:</strong>
                    <span style="color: #1a1a1a; font-size: 14px;">${fullName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                    <strong style="color: #555555; font-size: 14px; display: inline-block; width: 100px;">E-Mail:</strong>
                    <a href="mailto:${email}" style="color: #0066cc; text-decoration: none; font-size: 14px;">${email}</a>
                  </td>
                </tr>
              </table>

              <!-- Nachricht Section -->
              <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 18px; font-weight: 600; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                💬 Nachricht
              </h2>

              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #1a1a1a; margin-bottom: 20px;">
                <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
              </div>

              <!-- Quick Actions -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #1a1a1a; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 500; transition: background-color 0.3s;">
                  Direkt antworten
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666666; font-size: 12px; line-height: 1.5;">
                Diese E-Mail wurde automatisch über das Kontaktformular auf<br>
                <strong>vendori.de</strong> generiert
              </p>
              <p style="margin: 10px 0 0 0; color: #999999; font-size: 11px;">
                VENDORi GmbH | Hauptstraße 60 | 69207 Sandhausen
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
═══════════════════════════════════════
NEUE KONTAKTANFRAGE
über das Kontaktformular auf vendori.de
═══════════════════════════════════════

KONTAKTDATEN
─────────────────────────────────────────
Name:   ${fullName}
E-Mail: ${email}

NACHRICHT
─────────────────────────────────────────
${message}

═══════════════════════════════════════
Direkt antworten: ${email}

Diese E-Mail wurde automatisch über das
Kontaktformular auf vendori.de generiert.

VENDORi GmbH
Hauptstraße 60
69207 Sandhausen
  `.trim();

  const subject = `Neue Kontaktanfrage: ${fullName}`;

  return { html, text, subject };
}

/**
 * Template für Bestätigungs-E-Mail an Absender
 * Wird an die vom User angegebene E-Mail-Adresse gesendet
 */
export function generateConfirmationEmail(data: ContactFormData): {
  html: string;
  text: string;
  subject: string;
} {
  const { firstName } = data;

  const html = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bestätigung Ihrer Kontaktanfrage</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); padding: 40px 20px; text-align: center;">
              <div style="margin-bottom: 15px;">
                <span style="font-size: 48px;">✓</span>
              </div>
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">
                Vielen Dank für Ihre Nachricht!
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Hallo ${firstName},
              </p>

              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                wir haben Ihre Kontaktanfrage erhalten und werden uns <strong style="color: #1a1a1a;">innerhalb von 24 Stunden</strong> bei Ihnen melden.
              </p>

              <p style="margin: 0 0 30px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Falls Sie dringende Fragen haben, können Sie uns auch direkt telefonisch erreichen.
              </p>

              <!-- Contact Info Box -->
              <div style="background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%); padding: 25px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #1a1a1a;">
                <h3 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">
                  📞 Kontakt
                </h3>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 5px 0;">
                      <span style="color: #666666; font-size: 14px; display: inline-block; width: 80px;">Telefon:</span>
                      <a href="tel:+4962749278157" style="color: #0066cc; text-decoration: none; font-size: 14px; font-weight: 500;">+49 6274 9278157</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0;">
                      <span style="color: #666666; font-size: 14px; display: inline-block; width: 80px;">E-Mail:</span>
                      <a href="mailto:info@vendori.eu" style="color: #0066cc; text-decoration: none; font-size: 14px; font-weight: 500;">info@vendori.eu</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0;">
                      <span style="color: #666666; font-size: 14px; display: inline-block; width: 80px;">Website:</span>
                      <a href="https://vendori.de" style="color: #0066cc; text-decoration: none; font-size: 14px; font-weight: 500;">vendori.de</a>
                    </td>
                  </tr>
                </table>
              </div>

              <p style="margin: 0; color: #666666; font-size: 14px; line-height: 1.6;">
                Mit freundlichen Grüßen<br>
                <strong style="color: #1a1a1a;">Ihr VENDORi-Team</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 25px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; color: #333333; font-size: 14px; font-weight: 600;">
                VENDORi GmbH
              </p>
              <p style="margin: 0 0 15px 0; color: #666666; font-size: 13px; line-height: 1.5;">
                Hauptstraße 60<br>
                69207 Sandhausen<br>
                Deutschland
              </p>
              <p style="margin: 0; color: #999999; font-size: 11px; line-height: 1.5;">
                Diese E-Mail wurde automatisch generiert.<br>
                Bitte antworten Sie nicht direkt auf diese E-Mail.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
═══════════════════════════════════════
✓ VIELEN DANK FÜR IHRE NACHRICHT!
═══════════════════════════════════════

Hallo ${firstName},

wir haben Ihre Kontaktanfrage erhalten und werden
uns innerhalb von 24 Stunden bei Ihnen melden.

Falls Sie dringende Fragen haben, können Sie uns
auch direkt telefonisch erreichen.

KONTAKT
─────────────────────────────────────────
Telefon:  +49 6274 9278157
E-Mail:   info@vendori.eu
Website:  vendori.de

Mit freundlichen Grüßen
Ihr VENDORi-Team

═══════════════════════════════════════

VENDORi GmbH
Hauptstraße 60
69207 Sandhausen
Deutschland

Diese E-Mail wurde automatisch generiert.
Bitte antworten Sie nicht direkt auf diese E-Mail.
  `.trim();

  const subject = 'Wir haben Ihre Nachricht erhalten - VENDORi GmbH';

  return { html, text, subject };
}
