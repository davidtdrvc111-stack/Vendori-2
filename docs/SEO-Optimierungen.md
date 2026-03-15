# SEO-Optimierungen - Umsetzungsplan

## ✅ Bereits umgesetzt

### 1. Canonical URLs korrigiert
- [impressum/page.tsx](../src/app/impressum/page.tsx): Relative zu absolute URL geändert
- [datenschutz/page.tsx](../src/app/datenschutz/page.tsx): Relative zu absolute URL geändert

### 2. Alt-Attribute überprüft
Alle Bilder haben bereits korrekte Alt-Attribute:
- ✅ VENDORi Team Foto: `alt="VENDORi Team"`
- ✅ Logos: `alt="VENDORi Logo"`
- ✅ Shop Logos: Individuelle, beschreibende Alt-Texte

---

## 🔄 Noch umzusetzen

### 1. Open Graph Bild optimieren

#### Aktueller Stand:
```typescript
// src/app/layout.tsx Zeile 48
images: [{ url: '/VENDORi-Logo.png', width: 1200, height: 630, alt: 'VENDORi GmbH' }]
```

#### Problem:
- Aktuelles Logo (90KB PNG) nicht optimal für OG-Image
- Format nicht ideal für Social Media Previews

#### Lösung:
**Erstellen Sie ein optimiertes OG-Bild (1200×630px)**

##### Option A: Professionelles Design Tool verwenden
- **Canva** (kostenlos): https://www.canva.com
  - Template: "Facebook Cover" oder "LinkedIn Banner"
  - Größe anpassen auf 1200×630px

- **Figma** (kostenlos): https://www.figma.com
  - Neues Frame erstellen: 1200×630px

##### Design-Empfehlungen:
```
┌─────────────────────────────────────┐
│  VENDORi GmbH Logo                  │
│                                     │
│  E-Commerce Wachstum               │
│  aus der Praxis                    │
│                                     │
│  ✓ 1.500.000+ Kunden               │
│  ✓ 20+ Länder                      │
│  ✓ 22+ Jahre Erfahrung             │
└─────────────────────────────────────┘
```

**Design-Richtlinien:**
- Hintergrund: Dunkles Anthrazit (#18181b) oder Gradient
- Text: Weiß mit Primary Accent (#d97706)
- Logo: Prominent im oberen Bereich
- Zentrale Botschaft: "E-Commerce Wachstum aus der Praxis"
- 3 Key Facts als Bullet Points
- Safe Zone beachten: 40px Rand an allen Seiten

##### Datei-Optimierung:
1. **Format**: JPEG oder WebP (nicht PNG)
2. **Qualität**: 85% (gute Balance zwischen Qualität und Dateigröße)
3. **Ziel-Dateigröße**: < 300 KB (ideal: < 200 KB)

**Tools zur Optimierung:**
- **TinyPNG**: https://tinypng.com (JPEG & PNG)
- **Squoosh**: https://squoosh.app (alle Formate, WebP)
- **ImageOptim** (Mac): https://imageoptim.com

##### Implementierung:
```bash
# 1. OG-Bild erstellen und speichern
# Datei speichern als: public/og-image.jpg

# 2. Layout aktualisieren
```

Dann in `src/app/layout.tsx` ändern:
```typescript
images: [{
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'VENDORi GmbH — E-Commerce Wachstum aus der Praxis'
}]
```

---

### 2. Bildoptimierung für teamfoto.png

#### Aktueller Stand:
- **Datei**: `public/teamfoto.png`
- **Größe**: 2.7 MB (!!)
- **Problem**: Massive Dateigröße, langsame Ladezeit

#### Lösung: WebP-Konvertierung

##### Schritt 1: WebP erstellen
**Online-Tools:**
- **Squoosh**: https://squoosh.app
  1. teamfoto.png hochladen
  2. Format: WebP auswählen
  3. Qualität: 80-85%
  4. Download als `teamfoto.webp`
  5. Ziel: < 500 KB

**Kommandozeile (falls ffmpeg/cwebp installiert):**
```bash
# Mit cwebp (Google WebP Tools)
cwebp -q 85 teamfoto.png -o teamfoto.webp

# Mit ffmpeg
ffmpeg -i teamfoto.png -c:v libwebp -quality 85 teamfoto.webp
```

##### Schritt 2: Fallback PNG optimieren
```bash
# Mit TinyPNG: https://tinypng.com
# Oder ImageOptim (Mac): https://imageoptim.com
```
Ziel: < 800 KB

##### Schritt 3: Next.js Image optimieren
In `src/sections/about_full_section/Component.tsx` (Zeile 72-79):

**Aktuell:**
```typescript
<Image
  src="/teamfoto.png"
  alt="VENDORi Team"
  fill
  className="object-contain"
  sizes="(max-width: 768px) 100vw, 40vw"
  priority
/>
```

**Optimiert (nach WebP-Erstellung):**
```typescript
<Image
  src="/teamfoto.webp"
  alt="VENDORi GmbH Team — E-Commerce Experten mit 22+ Jahren Erfahrung"
  fill
  className="object-contain"
  sizes="(max-width: 768px) 100vw, 40vw"
  priority
  quality={85}
/>
```

**Erwartete Verbesserung:**
- Dateigröße: 2.7 MB → ~400-500 KB (82% kleiner!)
- Ladezeit: ~3-4s → ~0.5-1s
- LCP (Largest Contentful Paint): Deutlich verbessert

---

### 3. Seomator Konfiguration

In `Vendori-2/SEO-audit/seomator.toml` ergänzen:

```toml
[project]
name = "SEO-audit"
domains = ["vendori.eu", "www.vendori.eu"]

[checks]
# Aktiviere wichtige SEO-Checks
meta_tags = true
structured_data = true
open_graph = true
canonical_urls = true
robots_txt = true
sitemap = true
mobile_friendly = true
page_speed = true

[notifications]
# Optional: E-Mail-Benachrichtigungen
email = "info@vendori.eu"
```

---

## 📊 Erwartete SEO-Verbesserungen

### Performance-Metriken
| Metrik | Vorher | Nachher | Verbesserung |
|--------|--------|---------|--------------|
| OG-Bild Größe | 90 KB | ~150 KB | Optimiert für Social Media |
| teamfoto.png | 2.7 MB | ~400 KB | -85% |
| Gesamt-Bildgröße | ~2.8 MB | ~550 KB | -80% |
| LCP | ~4s | ~1.5s | -62% |

### SEO-Score
- **Aktuell**: 8.5/10
- **Nach Optimierung**: 9.5/10

### Prioritäten
1. **HOCH**: teamfoto.webp erstellen (größter Impact)
2. **MITTEL**: OG-Bild erstellen (Social Media Sharing)
3. **NIEDRIG**: Seomator konfigurieren (Monitoring)

---

## 🚀 Quick Start

```bash
# 1. Teamfoto optimieren
# → https://squoosh.app hochladen
# → Als teamfoto.webp exportieren (Qualität 85%)
# → In public/ speichern

# 2. OG-Bild erstellen
# → Canva/Figma verwenden (1200×630px)
# → Als og-image.jpg exportieren
# → In public/ speichern

# 3. Code anpassen (siehe oben)

# 4. Build testen
cd Vendori-2
npm run build
npm run start

# 5. Lighthouse-Test durchführen
# → Chrome DevTools > Lighthouse
# → Performance & SEO überprüfen
```

---

## 📝 Checkliste

- [x] Canonical URLs korrigiert
- [x] Alt-Attribute überprüft
- [ ] teamfoto.webp erstellt und implementiert
- [ ] OG-Bild erstellt und implementiert
- [ ] Seomator konfiguriert
- [ ] Lighthouse-Test durchgeführt (Ziel: Score > 95)
- [ ] Social Media Sharing getestet (Facebook, LinkedIn, Twitter)

---

**Stand**: 2026-03-15
**Nächste Schritte**: Bilder optimieren und deployen
