# VENDORi GmbH Website

Moderne, DSGVO-konforme Website für VENDORi GmbH, gebaut mit Next.js, TypeScript und Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Sprache**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Tools**: ESLint, Prettier

## 📁 Projektstruktur

```
VENDORi/
├── src/
│   ├── app/              # Next.js App Router (Seiten, Layouts)
│   ├── sections/         # Modulare Seitensektionen
│   │   ├── sticky_header/
│   │   ├── hero_section/
│   │   ├── about_section/
│   │   ├── services_section/
│   │   ├── contact_section/
│   │   └── footer_section/
│   ├── components/       # Wiederverwendbare Komponenten
│   │   ├── cookie-consent/
│   │   ├── ui/
│   │   └── layout/
│   ├── lib/              # Utility-Funktionen
│   ├── config/           # Konfigurationsdateien
│   ├── types/            # TypeScript Typen
│   └── hooks/            # Custom React Hooks
├── public/               # Statische Assets
├── CLAUDE.md             # Entwicklungs-Dokumentation
└── README.md             # Dieses Dokument
```

## 🏗️ Modulare Architektur

Jede Sektion ist eigenständig in ihrem eigenen Ordner organisiert:

```
src/sections/hero_section/
├── Hero.tsx           # Haupt-Komponente
├── HeroContent.tsx    # Unterkomponenten
├── types.ts           # TypeScript Typen
└── index.ts           # Clean Exports
```

## 🍪 DSGVO-Compliance

✅ Custom Cookie Consent Banner (keine externen Dependencies)
✅ Granulare Cookie-Kontrolle (Notwendig, Analytik, Marketing)
✅ Privacy-by-Design Ansatz
✅ Keine Cookies ohne Einwilligung
✅ Einfacher Widerruf möglich

Details siehe [CLAUDE.md](./CLAUDE.md)

## 🛠️ Development

### Installation

```bash
npm install
```

### Development Server starten

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000)

### Build für Production

```bash
npm run build
npm start
```

### Code Quality

```bash
# Type Checking
npm run type-check

# Linting
npm run lint

# Formatting
npm run format
npm run format:check
```

## 📦 Path Aliases

- `@/*` - src Directory
- `@/sections/*` - Sektionen
- `@/components/*` - Komponenten
- `@/lib/*` - Utilities
- `@/config/*` - Config
- `@/types/*` - Typen
- `@/hooks/*` - Hooks

## 🎨 Tailwind CSS

VENDORi Brand Colors sind in [tailwind.config.ts](./tailwind.config.ts) definiert:

- `primary-*` - Primärfarben (Blau)
- `secondary-*` - Sekundärfarben (Grau)

## 📝 Umgebungsvariablen

Kopiere `.env.example` zu `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=VENDORi GmbH
NEXT_PUBLIC_CONTACT_EMAIL=info@vendori.de
NEXT_PUBLIC_CONTACT_PHONE=+49 XXX XXXXXXX
```

## 📖 Dokumentation

Vollständige Entwicklungs-Dokumentation, DSGVO-Guidelines und Best Practices in [CLAUDE.md](./CLAUDE.md)

## 🚢 Deployment

### Vercel (Empfohlen)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Repository zu GitHub pushen
2. In Vercel importieren
3. Umgebungsvariablen konfigurieren
4. Deployen

## 📄 Lizenz

© 2024 VENDORi GmbH. Alle Rechte vorbehalten.

## 🤝 Support

Bei Fragen: dev@vendori.de
