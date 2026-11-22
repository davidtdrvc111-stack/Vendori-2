export interface ContactSectionProps {
  className?: string;
  csrfToken: string; // CSRF token from server (required for form submission)
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  privacyAccepted?: string;
  general?: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
