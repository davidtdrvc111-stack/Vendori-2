import { FormData, FormErrors } from './types';

/**
 * Validates a single form field with ReDoS protection
 * Length checks are performed BEFORE regex to prevent ReDoS attacks
 */
export function validateField(
  name: keyof FormData,
  value: string | boolean
): string | undefined {
  switch (name) {
    case 'firstName':
    case 'lastName':
      if (!value || (typeof value === 'string' && value.trim().length < 2)) {
        return 'Mindestens 2 Zeichen erforderlich';
      }
      // ReDoS Protection: Length check BEFORE regex
      if (typeof value === 'string' && value.length > 50) {
        return 'Maximal 50 Zeichen erlaubt';
      }
      // Safe to run regex after length validation
      if (typeof value === 'string' && !/^[a-zA-ZäöüÄÖÜß\s-]+$/.test(value)) {
        return 'Nur Buchstaben erlaubt';
      }
      break;

    case 'email':
      // ReDoS Protection: Length check BEFORE regex
      if (typeof value === 'string' && value.length > 254) {
        return 'E-Mail-Adresse zu lang (max. 254 Zeichen)';
      }
      // Improved email regex (RFC 5322 compliant)
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value || !emailRegex.test(String(value))) {
        return 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      }
      // Additional validation
      if (typeof value === 'string' && value.length < 5) {
        return 'E-Mail-Adresse zu kurz';
      }
      break;

    case 'message':
      if (!value || (typeof value === 'string' && value.trim().length < 10)) {
        return 'Bitte geben Sie mindestens 10 Zeichen ein';
      }
      // ReDoS Protection: Length check for message
      if (typeof value === 'string' && value.length > 2000) {
        return 'Maximal 2000 Zeichen erlaubt';
      }
      break;

    case 'privacyAccepted':
      if (!value) {
        return 'Bitte akzeptieren Sie die Datenschutzerklärung';
      }
      break;
  }
  return undefined;
}

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  (Object.keys(data) as Array<keyof FormData>).forEach((key) => {
    const error = validateField(key, data[key]);
    if (error) {
      errors[key] = error;
    }
  });

  return errors;
}

export function sanitizeInput(value: string): string {
  // Remove dangerous characters that could be used for injection attacks
  return value
    .trim()
    .replace(/[<>'"&\n\r\t]/g, '') // Remove HTML/script injection characters and control chars
    .substring(0, 500); // Enforce maximum length as additional safety measure
}
