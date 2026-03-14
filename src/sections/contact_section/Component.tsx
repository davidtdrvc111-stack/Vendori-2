'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { cn } from '@/lib/utils';
import { ContactSectionProps, FormData, FormErrors, FormStatus } from './types';
import { validateField, validateForm, sanitizeInput } from './validation';
import { Send, Loader2, Check, AlertCircle } from 'lucide-react';

// Noise Overlay Component
function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none rounded-3xl"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// Form Field Component
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

function FormField({
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
      {showError && (
        <p
          id={`${name}-error`}
          className="text-error-500 text-sm mt-1 flex items-center gap-1"
          role="alert"
        >
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

// Main Contact Section Component
export function ContactSection({ className = '' }: ContactSectionProps) {
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
  const [honeypot, setHoneypot] = useState(''); // Bot-Schutz

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

    // Validate on blur
    const error = validateField(name, formData[name]);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched(
      new Set(['firstName', 'lastName', 'email', 'message', 'privacyAccepted'])
    );

    // Client-side validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Honeypot check (silent fail)
    if (honeypot.trim() !== '') {
      console.log('Bot detected');
      return;
    }

    setStatus('loading');

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(formData.firstName),
      lastName: sanitizeInput(formData.lastName),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
    };

    // Create mailto link with pre-filled data
    const subject = `Kontaktanfrage von ${sanitizedData.firstName} ${sanitizedData.lastName}`;
    const body = `Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
E-Mail: ${sanitizedData.email}

Nachricht:
${sanitizedData.message}`;

    // Open email client
    window.location.href = `mailto:info@vendori.de?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Show success state
    setStatus('success');

    // Reset form after 3 seconds
    setTimeout(() => {
      resetForm();
    }, 3000);
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
            Wir freuen uns auf Ihre Nachricht und melden uns innerhalb von 24
            Stunden bei Ihnen.
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

          {/* Success Message */}
          {status === 'success' && (
            <div
              className={cn(
                'p-6 rounded-lg mb-6',
                'bg-success-500/10 border border-success-500/20',
                'flex items-start gap-3'
              )}
            >
              <Check className="w-6 h-6 text-success-500 flex-shrink-0" />
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
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
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
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.privacyAccepted}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                disabled={status === 'loading'}
                className={cn(
                  'w-full md:w-auto md:min-w-[200px]',
                  'px-8 py-4',
                  'bg-primary-600 hover:bg-primary-700',
                  'text-white font-semibold',
                  'rounded-xl',
                  'transition-all duration-200',
                  'flex items-center justify-center gap-2',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'text-base md:text-lg',
                  'ring-2 ring-primary-600/50 hover:ring-primary-500'
                )}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <span>Nachricht senden</span>
                    <Send className="w-5 h-5" />
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
