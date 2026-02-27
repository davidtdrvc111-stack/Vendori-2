# DSGVO (GDPR) Compliance - Vollständige Dokumentation

## Rechtliche Anforderungen

### 1. Cookie Consent (Art. 5(3) ePrivacy Directive)
- ✅ Einwilligung MUSS eingeholt werden VOR dem Setzen nicht-essentieller Cookies
- ✅ Einwilligung muss freiwillig, spezifisch, informiert und unmissverständlich sein
- ✅ Nutzer müssen Einwilligung ohne Nachteile ablehnen können
- ✅ Einwilligung kann jederzeit widerrufen werden

### 2. Datenschutzerklärung (Art. 13 DSGVO)
Erforderliche Informationen:
- Identität und Kontaktdaten des Verantwortlichen
- Zwecke der Verarbeitung
- Rechtsgrundlage für die Verarbeitung
- Empfänger personenbezogener Daten
- Speicherdauer
- Nutzerrechte (Zugriff, Berichtigung, Löschung, etc.)
- Recht auf Widerruf der Einwilligung
- Beschwerderecht bei Aufsichtsbehörde

### 3. Impressum (§5 TMG - Telemediengesetz)
Erforderlich für deutsche Websites:
- Name und Adresse des Unternehmens
- Kontaktdaten (E-Mail, Telefon)
- Registrierungsdetails (Handelsregister, etc.)
- USt-IdNr. falls zutreffend
- Vertretungsberechtigte

## Cookie-Kategorien

### Notwendige Cookies
- Immer aktiv (können nicht deaktiviert werden)
- Beispiele: Session-Cookies, Sicherheits-Cookies, Cookie-Consent-Präferenz
- Keine Einwilligung erforderlich

### Analytische Cookies
- Einwilligung erforderlich
- NUR verwenden wenn Analytics implementiert wird
- Privacy-freundliche Alternativen erwägen (z.B. Plausible, Fathom)
- Bei Google Analytics: IP-Anonymisierung aktivieren, Datenverarbeitungs-Vereinbarung

### Marketing Cookies
- Einwilligung erforderlich
- NUR verwenden wenn Marketing Pixels implementiert werden
- Beispiele: Facebook Pixel, Google Ads

## Privacy-Friendly Defaults

- ❌ Kein Google Analytics per Default (erfordert Einwilligung)
- ❌ Kein Facebook Pixel per Default (erfordert Einwilligung)
- ❌ Keine externen Tracking-Skripte ohne Einwilligung
- ✅ Lokale Fonts (kein Google Fonts CDN)
- ✅ Selbst gehostete Assets
- ✅ Keine eingebetteten Inhalte ohne Einwilligung (YouTube, Maps, etc.)

## Analytics-Implementierung (Falls Benötigt)

```typescript
// src/lib/analytics.ts
import { hasAnalyticsConsent } from './cookies'

export function trackPageView(url: string) {
  if (!hasAnalyticsConsent()) return

  // Nur tracken wenn Einwilligung gegeben
  // Analytics-Implementierung hier
}

// Auf Consent-Änderungen lauschen
if (typeof window !== 'undefined') {
  window.addEventListener('consentChanged', (event) => {
    const consent = (event as CustomEvent).detail
    if (consent.analytics) {
      // Analytics initialisieren
    } else {
      // Analytics deaktivieren
    }
  })
}
```

## Externe Services-Checkliste

Vor Integration JEDES externen Services:
1. ✅ Prüfen ob Einwilligung erforderlich ist
2. ✅ Zur entsprechenden Cookie-Kategorie hinzufügen
3. ✅ Datenschutzerklärung aktualisieren
4. ✅ Nur nach erteilter Einwilligung laden
5. ✅ Sicherstellen dass Datenverarbeitungs-Vereinbarung existiert

## Pre-Launch Checkliste

- [ ] Cookie Consent Banner implementiert
- [ ] Cookie Consent korrekt gespeichert
- [ ] Nutzer können Cookie-Präferenzen ändern
- [ ] Nur notwendige Cookies vor Consent
- [ ] Datenschutz-Seite vollständig (`/datenschutz`)
- [ ] Impressum-Seite vollständig (`/impressum`)
- [ ] Datenschutzerklärung im Footer verlinkt
- [ ] Impressum im Footer verlinkt
- [ ] Datenschutzerklärung im Cookie Banner verlinkt
- [ ] Kein externes Tracking ohne Einwilligung
- [ ] Keine eingebetteten Inhalte ohne Einwilligung
- [ ] Lokale Fonts (kein externes CDN)
- [ ] HTTPS erzwungen
- [ ] Security Headers konfiguriert
- [ ] Kontaktformular hat Datenschutzhinweis
- [ ] Datenverantwortlichen-Informationen sichtbar
- [ ] Nutzerrechte erklärt
- [ ] Einwilligung kann einfach widerrufen werden

## Best Practices

1. **Privacy by Design**
   - Nur notwendige Daten sammeln
   - Speicherdauer minimieren
   - Privacy-freundliche Alternativen verwenden

2. **Transparenz**
   - Klare, verständliche Sprache in Datenschutzerklärung
   - Sichtbare Links zu Datenschutzerklärung und Impressum
   - Erklären was jeder Cookie tut

3. **Nutzerkontrolle**
   - Einfacher Zugriff auf Cookie-Einstellungen
   - Einfache Opt-out-Mechanismen
   - Nutzerentscheidungen respektieren

4. **Dokumentation**
   - Aufzeichnungen über Verarbeitungstätigkeiten führen
   - Einwilligungsmechanismen dokumentieren
   - Regelmäßige Updates der Datenschutzerklärung

5. **Sicherheit**
   - HTTPS erzwungen
   - Security Headers konfiguriert
   - Sichere Cookie-Attribute (Secure, SameSite)
