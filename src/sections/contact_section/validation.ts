import { FormData, FormErrors } from './types';

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
      if (typeof value === 'string' && value.length > 50) {
        return 'Maximal 50 Zeichen erlaubt';
      }
      if (typeof value === 'string' && !/^[a-zA-ZäöüÄÖÜß\s-]+$/.test(value)) {
        return 'Nur Buchstaben erlaubt';
      }
      break;

    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !emailRegex.test(String(value))) {
        return 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      }
      break;

    case 'message':
      if (!value || (typeof value === 'string' && value.trim().length < 10)) {
        return 'Bitte geben Sie mindestens 10 Zeichen ein';
      }
      if (typeof value === 'string' && value.length > 1000) {
        return 'Maximal 1000 Zeichen erlaubt';
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
  return value.trim().replace(/[<>]/g, '');
}
