# Screenshot Analysis Loop

Automatisierter visueller Feedback-Loop für die VENDORi Website-Entwicklung.

## 🔄 Workflow

1. **Code-Änderung**: Komponente/Sektion wird modifiziert
2. **Screenshot-Erstellung**: Automatische Screenshots in 3 Viewports
3. **Analyse**: Claude analysiert Screenshots auf Fehler & Verbesserungen
4. **Iteration**: Korrekturen → Neue Screenshots → Neue Analyse

## 📸 Screenshots

### Viewports:
- **Mobile**: 375x812px (iPhone X)
- **Tablet**: 768x1024px (iPad)
- **Desktop**: 1920x1080px (Full HD)

### Ausgabe:
- `screenshots-temp/full-page_mobile.png`
- `screenshots-temp/full-page_tablet.png`
- `screenshots-temp/full-page_desktop.png`

## 🚀 Verwendung

### Voraussetzungen:
```bash
# Dev Server muss laufen!
npm run dev
```

### Screenshots erstellen:
```bash
npm run screenshots
```

## 🔍 Analyse-Fokus

Claude analysiert automatisch:
- ✅ **Layout-Fehler**: Overflow, Alignment, Spacing
- ✅ **Responsive Design**: Mobile-First Breakpoints
- ✅ **Design-Konsistenz**: Typography, Farben, Abstände
- ✅ **Accessibility**: Kontraste, Lesbarkeit, Touch-Targets
- ✅ **Visual Bugs**: Rendering-Fehler, z-index Issues

## 📝 Tipps

- Screenshots werden bei jeder neuen Runde überschrieben
- Dev Server muss auf `http://localhost:3000` laufen
- Bei größeren Änderungen: Mehrere Analyse-Runden durchführen
- Screenshots sind im `.gitignore` (nicht committed)

## 🛠️ Konfiguration

Anpassungen in `scripts/take-screenshots.js`:
- Viewports ändern
- Weitere Routes hinzufügen
- Section-Screenshots aktivieren
