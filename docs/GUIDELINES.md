# Entwicklungs-Guidelines

## Code-Style

- TypeScript für alle Dateien verwenden
- ESLint und Prettier Rules folgen
- Funktionale Komponenten mit Hooks verwenden
- Named Exports gegenüber Default Exports bevorzugen
- Aussagekräftige Variablen- und Funktionsnamen verwenden

## Komponenten-Guidelines

- Komponenten fokussiert und single-responsibility halten
- Wiederverwendbare Logik in Custom Hooks extrahieren
- TypeScript Interfaces für Props verwenden
- Komplexe Komponenten mit Kommentaren dokumentieren

## Namenskonventionen

- **Komponenten**: PascalCase (`CookieConsentBanner.tsx`)
- **Funktionen**: camelCase (`getCookieConsent`)
- **Konstanten**: UPPER_SNAKE_CASE (`CONSENT_COOKIE_NAME`)
- **Typen/Interfaces**: PascalCase (`ConsentState`)
- **Ordner**: snake_case für Sektionen (`hero_section/`)

## Git-Workflow

- Beschreibende Commit-Messages verwenden
- Ein Feature pro Branch
- Vor Commit testen
- Commits atomar und fokussiert halten

## Performance

- Next.js Image-Komponente für Bilder verwenden
- Lazy Loading wo angemessen implementieren
- Client-seitiges JavaScript minimieren
- Server Components wo möglich verwenden

## Accessibility

- Semantisches HTML
- ARIA Labels wo benötigt
- Tastaturnavigation-Support
- Farbkontrast-Compliance (WCAG AA)

## Testing

- Funktionale Tests vor jedem Commit
- Performance regelmäßig überprüfen
- Browser-Kompatibilität testen
- Mobile-Responsiveness testen

## Sicherheit

- Nie sensible Daten im Frontend
- Input-Validierung (Client + Server)
- XSS-Schutz beachten
- CSRF-Schutz für Forms

## Wartung

### Regelmäßige Aufgaben
- Dependencies monatlich aktualisieren
- Datenschutzerklärung überprüfen
- Core Web Vitals überwachen
- Cookie Consent Flow testen
- Security Headers überprüfen

### Rechtliche Compliance
- DSGVO-Anforderungen jährlich überprüfen
- Cookie-Beschreibungen aktualisieren
- Datenschutzerklärung aktuell halten
- Einwilligungsmechanismen testen
