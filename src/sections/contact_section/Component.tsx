'use client';

import { useState, FormEvent, ChangeEvent, useTransition, memo } from 'react';
import { cn } from '@/lib/utils';
import { ContactSectionProps, FormData, FormErrors, FormStatus } from './types';
import { validateField, validateForm } from './validation';
import { Send, Loader2, Check, AlertCircle } from 'lucide-react';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';

// Form Field Component - Memoized für bessere Performance
interface FormFieldProps {
  name: keyof FormData;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  value: string | boolean;
  error?: string;
  touched: boolean;
  onChange: (value: string | boolean) => void;
  onBlur: () => void;
}

const FormField = memo(function FormField({
  name,
  label,
  type = 'text',
  placeholder,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: FormFieldProps) {
  const showError = touched && error;
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';
  const stringValue = typeof value === 'string' ? value : '';

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-neutral-300 mb-2"
      >
        {label} *
      </label>
      <InputComponent
        id={name}
        name={name}
        type={type !== 'textarea' ? type : undefined}
        value={stringValue}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={type === 'textarea' ? 5 : undefined}
        className={cn(
          'w-full min-h-[44px] px-4 py-3',
          'text-base md:text-lg rounded-lg',
          'bg-neutral-800 border border-neutral-700 text-white',
          'placeholder:text-neutral-500',
          'focus:outline-none focus:ring-2 focus:ring-primary-600',
          'transition-colors duration-200',
          showError && 'border-error-500',
          type === 'textarea' && 'resize-y min-h-[120px]'
        )}
        aria-required="true"
        aria-invalid={!!showError}
        aria-describedby={showError ? `${name}-error` : undefined}
      />
      {/* Error message mit Platzreservierung (CLS-Fix) */}
      <p
        id={`${name}-error`}
        className={cn(
          'text-sm mt-1 flex items-center gap-1 min-h-[20px] transition-opacity duration-200',
          showError ? 'text-error-500 opacity-100' : 'text-transparent opacity-0'
        )}
        role={showError ? 'alert' : undefined}
        aria-live={showError ? 'polite' : undefined}
        aria-atomic={showError ? 'true' : undefined}
      >
        <AlertCircle className="w-4 h-4" aria-hidden="true" />
        <span>{error || '\u00A0'}</span>
      </p>
    </div>
  );
});

// Main Contact Section Component
export function ContactSection({ className = '', csrfToken }: ContactSectionProps) {
  const [_isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    privacyAccepted: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set());
  const [honeypot, setHoneypot] = useState(''); // Bot-Schutz (Feld)
  const [formStartTime] = useState<number>(Date.now()); // Zeit-basiertes Honeypot
  const [lastSubmission, setLastSubmission] = useState<number>(0); // Rate limiting

  const handleChange = (name: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing (if field was touched)
    if (touched.has(name) && errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => new Set(prev).add(name));

    // Validate on blur with useTransition for better INP
    startTransition(() => {
      const error = validateField(name, formData[name]);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      privacyAccepted: false,
    });
    setErrors({});
    setStatus('idle');
    setTouched(new Set());
    setHoneypot('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched(
      new Set(['firstName', 'lastName', 'email', 'message', 'privacyAccepted'])
    );

    // Rate limiting check (5 seconds between submissions)
    const now = Date.now();
    const RATE_LIMIT_MS = 5000;
    if (now - lastSubmission < RATE_LIMIT_MS) {
      setErrors({
        general: 'Bitte warten Sie 5 Sekunden zwischen Anfragen.'
      });
      return;
    }

    // Client-side validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Honeypot check (silent fail - no logging to avoid revealing bot detection mechanism)
    if (honeypot.trim() !== '') {
      return;
    }

    // Update last submission timestamp
    setLastSubmission(now);

    setStatus('loading');

    // Set loading state
    setStatus('loading');

    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          company_info: honeypot, // Honeypot-Feld
          formStartTime, // Zeit-basiertes Honeypot
          csrf_token: csrfToken, // CSRF Token für Security
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle API errors
        throw new Error(data.error || 'Fehler beim Senden der Nachricht');
      }

      // Show success state
      setStatus('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (error) {
      // Handle errors
      if (process.env.NODE_ENV === 'development') {
        console.error('Contact form error:', error);
      }
      setStatus('error');
      setErrors({
        ...errors,
        general:
          error instanceof Error
            ? error.message
            : 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
      });
    }
  };

  return (
    <section
      id="contact"
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-gradient-to-b from-stone-300 to-zinc-950 dark:from-neutral-800 dark:to-zinc-950',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className={cn(
              'text-3xl md:text-4xl lg:text-5xl font-bold',
              'text-neutral-900 dark:text-white',
              'mb-4',
              'font-display font-bold'
            )}
          >
            Lassen Sie uns sprechen
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
            Wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Form Container */}
        <div
          className={cn(
            'relative',
            'bg-stone-800',
            'shadow-inner-glow',
            'rounded-3xl',
            'p-6 md:p-8 lg:p-10',
            'max-w-4xl mx-auto',
            'overflow-hidden'
          )}
        >
          <NoiseOverlay />

          {/* Alert Container mit Platzreservierung (CLS-Fix) */}
          <div className="min-h-0 mb-0 overflow-hidden transition-all duration-300">
            {/* Success Message */}
            {status === 'success' && (
              <div
                role="alert"
                aria-live="polite"
                aria-atomic="true"
                className={cn(
                  'p-6 rounded-lg',
                  'bg-success-500/10 border border-success-500/20',
                  'flex items-start gap-3',
                  'animate-in fade-in slide-in-from-top-2 duration-300'
                )}
              >
                <Check className="w-6 h-6 text-success-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-success-500 mb-1">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-sm text-success-600 dark:text-success-400">
                    Ihr E-Mail-Client öffnet sich gleich mit Ihrer vorausgefüllten
                    Nachricht.
                  </p>
                </div>
              </div>
            )}

            {/* General Error Message (e.g., rate limiting) */}
            {errors.general && (
              <div
                role="alert"
                aria-live="polite"
                aria-atomic="true"
                className={cn(
                  'p-6 rounded-lg',
                  'bg-error-500/10 border border-error-500/20',
                  'flex items-start gap-3',
                  'animate-in fade-in slide-in-from-top-2 duration-300'
                )}
              >
                <AlertCircle className="w-6 h-6 text-error-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-error-500 mb-1">
                    Fehler
                  </h3>
                  <p className="text-sm text-error-600 dark:text-error-400">
                    {errors.general}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Privacy Notice */}
          <p className="text-sm text-neutral-400 mb-6">
            * Pflichtfeld. Ihre Daten werden ausschließlich zur Bearbeitung
            Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Weitere
            Informationen finden Sie in unserer{' '}
            <a
              href="/datenschutz"
              className="text-primary-400 hover:text-primary-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung
              <span className="sr-only"> (öffnet in neuem Tab)</span>
            </a>
            .
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields (Two Column on Desktop) */}
            <div
              className={cn(
                'grid gap-6',
                'grid-cols-1',
                'md:grid-cols-2'
              )}
            >
              <FormField
                name="firstName"
                label="Vorname"
                placeholder="Max"
                value={formData.firstName}
                error={errors.firstName}
                touched={touched.has('firstName')}
                onChange={(value) => handleChange('firstName', value)}
                onBlur={() => handleBlur('firstName')}
              />
              <FormField
                name="lastName"
                label="Nachname"
                placeholder="Mustermann"
                value={formData.lastName}
                error={errors.lastName}
                touched={touched.has('lastName')}
                onChange={(value) => handleChange('lastName', value)}
                onBlur={() => handleBlur('lastName')}
              />
            </div>

            {/* Email Field */}
            <FormField
              name="email"
              label="E-Mail-Adresse"
              type="email"
              placeholder="max.mustermann@beispiel.de"
              value={formData.email}
              error={errors.email}
              touched={touched.has('email')}
              onChange={(value) => handleChange('email', value)}
              onBlur={() => handleBlur('email')}
            />

            {/* Honeypot Field - Hidden from users, bots will fill it */}
            <input
              type="text"
              name="company_info"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              style={{
                position: 'absolute',
                left: '-9999px',
                width: '1px',
                height: '1px',
              }}
              aria-hidden="true"
            />

            {/* CSRF Token - Hidden field for security */}
            <input
              type="hidden"
              name="csrf_token"
              value={csrfToken}
              readOnly
              aria-hidden="true"
            />

            {/* Message Field */}
            <FormField
              name="message"
              label="Ihre Nachricht"
              type="textarea"
              placeholder="Erzählen Sie uns von Ihrem Projekt..."
              value={formData.message}
              error={errors.message}
              touched={touched.has('message')}
              onChange={(value) => handleChange('message', value)}
              onBlur={() => handleBlur('message')}
            />

            {/* Privacy Checkbox */}
            <div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleChange('privacyAccepted', e.target.checked);
                  }}
                  onBlur={() => handleBlur('privacyAccepted')}
                  className={cn(
                    'mt-1 w-4 h-4 rounded border-neutral-600',
                    'text-primary-600 focus:ring-primary-600',
                    touched.has('privacyAccepted') &&
                      errors.privacyAccepted &&
                      'border-error-500'
                  )}
                  aria-invalid={!!errors.privacyAccepted}
                  aria-describedby={
                    errors.privacyAccepted ? 'privacy-error' : undefined
                  }
                />
                <label
                  htmlFor="privacyAccepted"
                  className="text-sm text-neutral-300"
                >
                  Ich habe die{' '}
                  <a
                    href="/datenschutz"
                    className="text-primary-400 hover:text-primary-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutzerklärung
                    <span className="sr-only"> (öffnet in neuem Tab)</span>
                  </a>{' '}
                  zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur
                  Kontaktaufnahme und für Rückfragen gespeichert werden.*
                </label>
              </div>
              {touched.has('privacyAccepted') && errors.privacyAccepted && (
                <p
                  id="privacy-error"
                  className="text-error-500 text-sm mt-1 flex items-center gap-1"
                  role="alert"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{errors.privacyAccepted}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                disabled={status === 'loading'}
                aria-label={
                  status === 'loading'
                    ? 'Nachricht wird gesendet, bitte warten'
                    : 'Nachricht absenden'
                }
                className={cn(
                  'w-full md:w-auto md:min-w-[200px]',
                  'px-8 py-4',
                  'bg-primary-700 hover:bg-primary-800',
                  'text-white font-semibold',
                  'rounded-xl',
                  'transition-all duration-200',
                  'flex items-center justify-center gap-2',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'text-base md:text-lg',
                  'ring-2 ring-primary-700/50 hover:ring-primary-600'
                )}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <span>Nachricht senden</span>
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
