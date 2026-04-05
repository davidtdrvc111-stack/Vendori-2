// Export the wrapper as the default ContactSection (includes CSRF token generation)
export { ContactSectionWrapper as ContactSection } from './ContactSectionWrapper';

// Also export the original client component for direct use if needed
export { ContactSection as ContactSectionClient } from './Component';

export type { ContactSectionProps, FormData, FormErrors, FormStatus } from './types';
export { validateField, validateForm, sanitizeInput } from './validation';
