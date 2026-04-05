/**
 * Server Component Wrapper for Contact Section
 *
 * This wrapper component:
 * - Runs on the server (Next.js Server Component)
 * - Generates CSRF token securely in server environment
 * - Passes token to client component via props
 *
 * Benefits:
 * - Token generation stays on server (secure environment)
 * - No additional API call needed (better performance)
 * - Clean separation of server/client logic
 */

import { generateCSRFToken } from '@/lib/csrf/token';
import { ContactSection } from './Component';

interface ContactSectionWrapperProps {
  className?: string;
}

/**
 * Server Component that generates CSRF token and renders Contact Section
 *
 * @param props - Component props
 * @returns Contact Section with CSRF token
 */
export function ContactSectionWrapper({ className }: ContactSectionWrapperProps) {
  // Generate CSRF token on server
  const csrfToken = generateCSRFToken();

  // Pass token to client component
  return <ContactSection className={className} csrfToken={csrfToken} />;
}
