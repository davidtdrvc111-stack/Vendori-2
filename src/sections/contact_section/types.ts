export interface ContactSectionProps {
  className?: string;
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
