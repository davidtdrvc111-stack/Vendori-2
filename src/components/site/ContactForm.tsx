'use client';

// Kontaktformular: Markup und Texte 1:1 aus dem Prototyp, Logik aus dem bisherigen Live-Formular
// (Validierung, Honeypot, Zeit-Honeypot, CSRF-Token, Versand an /api/contact -> n8n).
// Ergänzt gegenüber dem Prototyp (dort sendet das Formular nicht): Fehlermeldungen je Feld,
// Status-Hinweis nach dem Absenden, Ladezustand des Buttons.
import Link from 'next/link';
import { useState, useTransition, type FormEvent } from 'react';
import { validateField, validateForm } from '@/lib/contact/validation';
import type { FormData, FormErrors, FormStatus } from '@/lib/contact/types';

const EMPTY: FormData = { firstName: '', lastName: '', email: '', message: '', privacyAccepted: false };
const RATE_LIMIT_MS = 5000;

export function ContactForm({ csrfToken }: { csrfToken: string }) {
  const [, startTransition] = useTransition();
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set());
  const [honeypot, setHoneypot] = useState('');
  const [formStartTime] = useState<number>(() => Date.now());
  const [lastSubmission, setLastSubmission] = useState(0);

  const change = (name: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched.has(name) && errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (status === 'success') setStatus('idle');
  };

  const blur = (name: keyof FormData) => {
    setTouched((prev) => new Set(prev).add(name));
    startTransition(() => {
      const error = validateField(name, formData[name]);
      if (error) setErrors((prev) => ({ ...prev, [name]: error }));
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(new Set<keyof FormData>(['firstName', 'lastName', 'email', 'message', 'privacyAccepted']));

    const now = Date.now();
    if (now - lastSubmission < RATE_LIMIT_MS) {
      setErrors({ general: 'Bitte warten Sie 5 Sekunden zwischen Anfragen.' });
      return;
    }
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Honeypot: stilles Abbrechen, ohne den Mechanismus zu verraten
    if (honeypot.trim() !== '') return;

    setLastSubmission(now);
    setErrors({});
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, company_info: honeypot, formStartTime, csrf_token: csrfToken }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Fehler beim Senden der Nachricht');
      setStatus('success');
      setFormData(EMPTY);
      setTouched(new Set());
    } catch (error) {
      setStatus('error');
      setErrors({
        general:
          error instanceof Error
            ? error.message
            : 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
      });
    }
  };

  const err = (name: keyof FormData) => (touched.has(name) ? errors[name] : undefined);
  const describe = (name: keyof FormData) => (err(name) ? `${name}-error` : undefined);
  const fieldError = (name: keyof FormData) =>
    err(name) ? (
      <p id={`${name}-error`} className="field__error" role="alert">
        {err(name)}
      </p>
    ) : null;

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__head">
        <h3 className="form__title">Erstgespräch anfragen</h3>
        <p className="small">
          Felder mit <span className="req">*</span> sind Pflichtfelder.
        </p>
      </div>

      {status === 'success' && (
        <p className="form__status form__status--success" role="status">
          Vielen Dank, Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24&nbsp;Stunden.
        </p>
      )}
      {errors.general && (
        <p className="form__status form__status--error" role="alert">
          {errors.general}
        </p>
      )}

      <div className="form__row">
        <div className="field">
          <label htmlFor="f-first">
            Vorname <span className="req">*</span>
          </label>
          <input
            id="f-first"
            name="firstName"
            autoComplete="given-name"
            placeholder="Max"
            required
            value={formData.firstName}
            onChange={(e) => change('firstName', e.target.value)}
            onBlur={() => blur('firstName')}
            aria-invalid={!!err('firstName')}
            aria-describedby={describe('firstName')}
          />
          {fieldError('firstName')}
        </div>
        <div className="field">
          <label htmlFor="f-last">
            Nachname <span className="req">*</span>
          </label>
          <input
            id="f-last"
            name="lastName"
            autoComplete="family-name"
            placeholder="Mustermann"
            required
            value={formData.lastName}
            onChange={(e) => change('lastName', e.target.value)}
            onBlur={() => blur('lastName')}
            aria-invalid={!!err('lastName')}
            aria-describedby={describe('lastName')}
          />
          {fieldError('lastName')}
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-mail">
          E-Mail-Adresse <span className="req">*</span>
        </label>
        <input
          id="f-mail"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="max.mustermann@beispiel.de"
          required
          value={formData.email}
          onChange={(e) => change('email', e.target.value)}
          onBlur={() => blur('email')}
          aria-invalid={!!err('email')}
          aria-describedby={describe('email')}
        />
        {fieldError('email')}
      </div>

      {/* Honeypot: für Menschen unsichtbar, Bots füllen es aus */}
      <input
        type="text"
        name="company_info"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hp-field"
        aria-hidden="true"
      />
      <input type="hidden" name="csrf_token" value={csrfToken} readOnly />

      <div className="field">
        <label htmlFor="f-msg">
          Ihre Nachricht <span className="req">*</span>
        </label>
        <textarea
          id="f-msg"
          name="message"
          placeholder="Erzählen Sie uns von Ihrem Projekt..."
          required
          value={formData.message}
          onChange={(e) => change('message', e.target.value)}
          onBlur={() => blur('message')}
          aria-invalid={!!err('message')}
          aria-describedby={describe('message')}
        />
        {fieldError('message')}
      </div>
      <div>
        <label className="consent">
          <input
            type="checkbox"
            name="privacyAccepted"
            required
            checked={formData.privacyAccepted}
            onChange={(e) => change('privacyAccepted', e.target.checked)}
            onBlur={() => blur('privacyAccepted')}
            aria-invalid={!!err('privacyAccepted')}
            aria-describedby={describe('privacyAccepted')}
          />
          <span>
            Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> zur Kenntnis genommen. Ich stimme zu,
            dass meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden. <span className="req">*</span>
          </span>
        </label>
        {fieldError('privacyAccepted')}
      </div>
      <div className="form__submit">
        <button className="btn btn--primary" type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'}>
          {status === 'loading' ? 'Wird gesendet …' : 'Erstgespräch anfragen'}{' '}
          <svg className="icon" aria-hidden="true">
            <use href="#i-send" />
          </svg>
        </button>
      </div>
      <p className="small form__note">
        Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
        Weitere Informationen finden Sie in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>
    </form>
  );
}
